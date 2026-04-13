import { useEffect, useState } from 'react';
const githubQuery = `
  query {
    repository(owner: "TAULO", name: "TAULO") {
      stargazerCount
      defaultBranchRef {
        target {
          ... on Commit {
            history {
              totalCount
            }
          }
        }
      }
    }
  }
    `;

const Footer = () => {
  const [githubData, setGithubData] = useState<any>(null);
  useEffect(() => {
    const response = fetch('/api/github', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: githubQuery }),
    });

    response
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((error) => console.error('Error fetching GitHub data:', error));
  }, []);

  const stars = githubData?.data?.repository?.stargazerCount ?? '0';
  const commits =
    githubData?.data?.repository?.defaultBranchRef?.target?.history
      ?.totalCount ?? '0';

  return (
    <footer
      className={
        'group ml-auto mr-auto mt-auto flex w-fit flex-col items-center gap-2 p-4 hover:cursor-pointer'
      }
      onClick={() =>
        window.open('https://github.com/TAULO/NightSkyPortfolio', '_blank')
      }
    >
      <p
        className={
          'group-hover:text-tertiary text-center text-sm text-white/50 transition-colors duration-300'
        }
      >
        {'Designed & Developed by Thomas Taulo'}
      </p>
      <div
        className={
          'group-hover:text-tertiary flex items-center gap-4 font-mono text-sm text-white/50 transition-colors duration-300'
        }
      >
        <span className={'flex items-center gap-1'}>
          <svg
            className={'size-4'}
            viewBox={'0 0 24 24'}
            fill={'none'}
            stroke={'currentColor'}
            strokeWidth={2}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
          >
            <polygon
              points={
                '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
              }
            />
          </svg>
          <span>{stars}</span>
        </span>
        <span className={'flex items-center gap-1'}>
          <svg
            className={'size-4'}
            xmlns={'http://www.w3.org/2000/svg'}
            viewBox={'0 -960 960 960'}
            fill={'currentColor'}
          >
            <path
              d={
                'M352.5-325.5Q298-371 284-440H80v-80h204q14-69 68.5-114.5T480-680q73 0 127.5 45.5T676-520h204v80H676q-14 69-68.5 114.5T480-280q-73 0-127.5-45.5ZM480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z'
              }
            />
          </svg>
          <span>{commits}</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
