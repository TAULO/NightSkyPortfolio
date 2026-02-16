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

const GitHubContributionCalendar = ({ githubUsername }: IGitHubContributionProps) => {
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

  const [contributions, setContributions] = useState<any[]>([]);
  const [totalContributionsCount, setTotalContributionsCount] = useState(0);
  const [userNotFound, setUserNotFound] = useState(false);

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

        const calendar =
          user.contributionsCollection?.contributionCalendar;

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
      <h3 className={'text-xl font-bold text-white text-center'}>
        {`${githubUsername} is not a GitHub user`}
      </h3>
    );
  }

  return contributions.length === 0 ? null : (
    <div id={'github-contributions'} className={'flex max-w-fit flex-col gap-3'}>
      <div className={'flex justify-between'}>
        <h3 className={'text-xl font-bold text-white'}>{githubUsername}</h3>
        <h3 className={'text-xl font-bold text-white'}>
          {totalContributionsCount} Contributions in the last year
        </h3>
      </div>
      <div id={'github-contributions-calendar'} className={'flex flex-wrap gap-1'}>
        {contributions.map((week, weekIndex) => (
          <div key={weekIndex} className={'flex flex-col gap-1'}>
            {(week['contributionDays'] as Array<ContributionDay>).map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`rounded-xs size-4 ${colorMap[day.contributionLevel ?? 'NONE']}`}
                title={day['contributionCount'] + '\n' + day['date']}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubContributionCalendar;