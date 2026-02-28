import { useEffect, useState } from 'react';

export interface IContributionStats {
  totalCommitContributions: number;
  totalIssueContributions: number;
  totalPullRequestContributions: number;
  totalPullRequestReviewContributions: number;
  totalRepositoriesWithContributedCommits: number;
  totalRepositoriesWithContributedIssues: number;
  totalRepositoriesWithContributedPullRequestReviews: number;
  totalRepositoriesWithContributedPullRequests: number;
  totalRepositoryContributions: number;
}

export interface IContributionDay {
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

export interface IContributionWeek {
  contributionDays: IContributionDay[];
}

export interface IGitHubUser {
  avatarUrl: string;
  name: string;
  contributionsCollection: IContributionStats & {
    contributionCalendar: {
      contributionDays: IContributionDay[];
      weeks: IContributionWeek[];
      totalContributions: number;
    };
  };
}

export const useGitHubContributions = (githubUserName: string) => {
  const githubQuery = `
      query {
        user(login: "${githubUserName}") {
          avatarUrl
          name
          contributionsCollection {
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
            totalRepositoriesWithContributedCommits
            totalRepositoriesWithContributedIssues
            totalRepositoriesWithContributedPullRequestReviews
            totalRepositoriesWithContributedPullRequests
            totalRepositoryContributions
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
  const [githubUser, setGithubUser] = useState<IGitHubUser | null>(null);

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
        if (data?.errors?.length) {
          console.log('GitHub API Error:', data.errors);
          setGithubUser(null);
          return;
        }

        const user = data?.data?.user;

        if (!user) {
          setGithubUser(null);
          return;
        }
        setGithubUser(user);
      })
      .catch(() => {
        setGithubUser(null);
      });
  }, [githubQuery]);

  return githubUser;
};
