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
    NONE: 'bg-transparent border border-tertiary/15',
    FIRST_QUARTILE: 'bg-tertiary/10',
    SECOND_QUARTILE: 'bg-tertiary/25',
    THIRD_QUARTILE: 'bg-tertiary/50',
    FOURTH_QUARTILE: 'bg-tertiary',
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
    if (index === 0) return null; // skip first month

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
    <div id={'github-contributions'} className={'flex min-w-0 flex-col gap-2'}>
      <div className={'flex flex-col justify-between md:flex-row'}>
        <h3 className={'text-xl font-bold text-white'}>{githubUsername}</h3>
        <p className={'font-semibold text-white/50'}>
          {totalContributionsCount} Contributions in the last year
        </p>
      </div>
      <div
        id={'github-contributions-calendar'}
        className={'flex gap-1 overflow-x-auto pt-6'}
      >
        {contributions.map((week, weekIndex) => {
          const label = getWeekDateFromIndex(weekIndex);

          return (
            <div key={weekIndex} className={'relative flex shrink-0 flex-col'}>
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
                          className={`rounded-xs size-3 ${colorMap[day.contributionLevel ?? 'NONE']}`}
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
      <div className={'flex flex-col-reverse gap-1 sm:flex-row sm:justify-end'}>
        <div className={'flex items-center gap-2 text-sm text-white/50'}>
          <p>Less</p>
          <div className={'flex flex-wrap gap-1'}>
            {Object.keys(colorMap).map((level, index) => (
              <div
                key={index}
                className={`rounded-xs size-3 ${colorMap[level as keyof typeof colorMap]}`}
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
