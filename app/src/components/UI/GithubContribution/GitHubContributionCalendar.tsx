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

const GitHubContributionCalendar = ({
  githubUsername,
}: IGitHubContributionProps) => {
  // TODO: We could do a compare with me? That would be cool.
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

  const [contributions, setContributions] = useState([]);
  const [totalContributionsCount, setTotalContributionsCount] = useState(0);

  useEffect(() => {
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
        setContributions(
          data['data']['user']['contributionsCollection'][
            'contributionCalendar'
          ]['weeks']
        );
        setTotalContributionsCount(
          data['data']['user']['contributionsCollection'][
            'contributionCalendar'
          ]['totalContributions']
        );
      })
      .catch((error) => console.debug(error));
  }, []);

  return contributions.length === 0 ? (
    <h3
      className={'text-xl font-bold text-white'}
    >{`This GitHub user does not exists '${githubUsername}'`}</h3>
  ) : (
    <div
      id={'github-contributions'}
      className={'flex max-w-fit flex-col gap-3'}
    >
      <div className={'flex justify-between'}>
        <h3 className={'text-xl font-bold text-white'}>{githubUsername}</h3>
        <h3 className={'text-xl font-bold text-white'}>
          {totalContributionsCount} Total Contributions in the last year
        </h3>
      </div>
      <div
        id={'github-contributions-calendar'}
        className={'flex flex-wrap gap-1'}
      >
        {contributions.map((week, weekIndex) => (
          <div key={weekIndex} className={'flex flex-col gap-1'}>
            {(week['contributionDays'] as Array<ContributionDay>).map(
              (day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`rounded-xs size-4 ${colorMap[day.contributionLevel ?? 'NONE']}`}
                  title={day['contributionCount'] + '\n' + day['date']}
                ></div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubContributionCalendar;
