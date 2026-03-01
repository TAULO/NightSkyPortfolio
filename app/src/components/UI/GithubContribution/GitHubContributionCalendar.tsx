import Tooltip from '../Tooltip/Tooltip.tsx';
import {
  IContributionDay,
  IGitHubUser,
} from '../../../hooks/useGithubContributions.ts';

const GitHubContributionCalendar = ({
  githubUser,
  githubUsernameFromInput,
}: {
  githubUser: IGitHubUser | null;
  githubUsernameFromInput: string;
}) => {
  if (!githubUsernameFromInput) return null;

  if (!githubUser) {
    return (
      <h3 className={'text-center text-xl font-bold text-white'}>
        {`${githubUsernameFromInput} is not a GitHub user`}
      </h3>
    );
  }

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

  const githubUsername = githubUser.name;
  const contributions =
    githubUser.contributionsCollection.contributionCalendar.weeks;
  const totalContributionsCount =
    githubUser.contributionsCollection.contributionCalendar.totalContributions;

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

  return contributions.length === 0 ? null : (
    <div
      id={'github-contributions'}
      className={'flex min-w-0 max-w-fit flex-col gap-2 overflow-x-auto'}
    >
      <div className={'flex justify-between'}>
        <h3 className={'text-xl font-bold text-white'}>{githubUsername}</h3>
      </div>
      <div
        id={'github-contributions-calendar'}
        className={'flex gap-1 overflow-x-auto pt-6'}
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
                {(week['contributionDays'] as Array<IContributionDay>).map(
                  (day, dayIndex) => {
                    const popoverId = `popover-${dayIndex}-${weekIndex}-${githubUsername}`;
                    const count = day.contributionCount;

                    const date = new Date(day.date);
                    const dayOfMonth = date.getDate();
                    const monthName = months[date.getMonth()];

                    const content = `${count} contribution${count !== 1 ? 's' : ''} on ${monthName} ${dayOfMonth}`;

                    return (
                      <Tooltip id={popoverId} content={content} key={popoverId}>
                        <div
                          className={`rounded-xs size-4 ${colorMap[day.contributionLevel ?? 'NONE']}`}
                        />
                      </Tooltip>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={'flex flex-col-reverse gap-1 sm:flex-row sm:justify-between'}
      >
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
