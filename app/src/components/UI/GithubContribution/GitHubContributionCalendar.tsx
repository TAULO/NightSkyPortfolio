import { useEffect, useState } from 'react';

interface IGitHubContributionProps {
  githubUsername: string;
}

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
  contributionLevel:
    | 'NONE'
    | 'FIRST_QUARTILE'
    | 'SECOND_QUARTILE'
    | 'THIRD_QUARTILE'
    | 'FOURTH_QUARTILE';
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

const GitHubContributionCalendar = ({
  githubUsername,
}: IGitHubContributionProps) => {
  const githubQuery = `
      query {
        user(login: "${githubUsername}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                  contributionLevel
                }
              }
            }
          }
        }
      }
    `;

  const colorMap = {
    NONE: 'bg-transparent border border-[#3e4789]/35',
    FIRST_QUARTILE: 'bg-[#1e2048]',
    SECOND_QUARTILE: 'bg-[#3e4789]',
    THIRD_QUARTILE: 'bg-[#6b74c4]',
    FOURTH_QUARTILE: 'bg-[#9ba3e8]',
  };

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const [contributions, setContributions] = useState<ContributionWeek[]>([]);
  const [totalContributionsCount, setTotalContributionsCount] = useState(0);
  const [userNotFound, setUserNotFound] = useState(false);

  function getWeekDateFromIndex(index: number): string | null {
    const monthStr = contributions[index]?.contributionDays?.[0]?.date;
    if (!monthStr) return null;

    const currentMonthIndex = new Date(monthStr).getMonth();

    if (index === 0) return months[currentMonthIndex] ?? null;

    const prevMonthStr = contributions[index - 1]?.contributionDays?.[0]?.date;
    if (!prevMonthStr) return months[currentMonthIndex] ?? null;

    const prevMonthIndex = new Date(prevMonthStr).getMonth();

    if (currentMonthIndex === prevMonthIndex) return null;

    return months[currentMonthIndex] ?? null;
  }

  function getWeeklyStreaks(): number {
    let streak = 0;

    for (let i = contributions.length - 1; i >= 0; i--) {
      const days = contributions[i]?.contributionDays ?? [];
      const hasContributions = days.some((day) => day.contributionCount > 0);

      if (!hasContributions) {
        if (days.length === 7) break;
        continue;
      }

      streak++;
    }

    return streak;
  }

  useEffect(() => {
    if (!githubUsername) return;

    setContributions([]);
    setTotalContributionsCount(0);
    setUserNotFound(false);

    const response = fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: githubQuery }),
    });

    response
      .then((data) => data.json())
      .then((data) => {
        if (data?.errors?.length) {
          setUserNotFound(true);
          setContributions([]);
          setTotalContributionsCount(0);
          return;
        }

        const user = data?.data?.user;
        if (!user) {
          setUserNotFound(true);
          setContributions([]);
          setTotalContributionsCount(0);
          return;
        }

        const calendar = user.contributionsCollection?.contributionCalendar;

        setContributions(calendar?.weeks ?? []);
        setTotalContributionsCount(calendar?.totalContributions ?? 0);
      })
      .catch(() => {
        setUserNotFound(true);
        setContributions([]);
        setTotalContributionsCount(0);
      });
  }, [githubQuery]);

  if (!githubUsername) return null;

  if (userNotFound) {
    return (
      <h3 className={'text-center text-xl font-bold text-white'}>
        {`${githubUsername} is not a GitHub user`}
      </h3>
    );
  }

  const weeklyStreaks = getWeeklyStreaks();

  return contributions.length === 0 ? null : (
    <div
      id={'github-contributions'}
      className={'flex max-w-fit flex-col gap-3'}
    >
      <div className={'flex justify-between'}>
        <h3 className={'text-xl font-bold text-white'}>{githubUsername}</h3>
        <p  className={'text-xl font-bold text-white'}>{weeklyStreaks}</p>
      </div>
      <div
        id={'github-contributions-calendar'}
        className={'flex flex-wrap gap-1 pt-6'}
      >
        {contributions.map((week, weekIndex) => {
          const label = getWeekDateFromIndex(weekIndex);

          return (
            <div key={weekIndex} className={'relative flex flex-col'}>
              {label ? (
                <p
                  className={
                    'absolute -top-6 left-0 text-sm leading-none text-white/50'
                  }
                >
                  {label}
                </p>
              ) : null}

              <div className={'flex flex-col gap-1'}>
                {(week['contributionDays'] as Array<ContributionDay>).map(
                  (day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`rounded-xs size-4 ${colorMap[day.contributionLevel ?? 'NONE']}`}
                      title={day['contributionCount'] + '\n' + day['date']}
                    />
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={'flex justify-between'}>
        <p className={'font-bold text-white'}>
          {totalContributionsCount} Contributions in the last year
        </p>
        <div className={'flex items-center gap-2 text-sm text-white/50'}>
          <p>Less</p>
          <div className={'flex flex-wrap gap-1'}>
            {Object.keys(colorMap).map((level, index) => (
              <div
                key={index}
                className={`rounded-xs size-4 ${colorMap[level as keyof typeof colorMap]}`}
              ></div>
            ))}
          </div>
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default GitHubContributionCalendar;
