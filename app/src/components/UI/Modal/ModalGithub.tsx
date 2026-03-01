import { useModal } from './ModalProvider.tsx';
import ModalContainer from './ModalContainer.tsx';
import {
  IContributionWeek,
  IGitHubUser,
} from '../../../hooks/useGithubContributions.ts';
import { useEffect, useState } from 'react';

export interface IGithubModal {
  myGithub: IGitHubUser;
  opponentGithub: IGitHubUser;
}

interface IGithubUserComponent {
  float: 'left' | 'right';
  githubName: string;
  src: string;
  animationDelayInSeconds: number;
}

interface IDualBar {
  title: string;
  myVal: number;
  opponentVal: number;
}

function ModalGithub({ modalId }: { modalId: string }) {
  const { data } = useModal<IGithubModal>(modalId);

  if (!data) return null;

  const [vsVisible, setVsVisible] = useState(true);
  const [vsRemoved, setVsRemoved] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setVsVisible(false), 6000);
    const removeTimer = setTimeout(() => setVsRemoved(true), 6500); // after fade-out
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const { myGithub, opponentGithub } = data;

  const myContributions = myGithub.contributionsCollection;
  const opponentContributions = opponentGithub.contributionsCollection;

  function getDailyStreaks(contributions: Array<IContributionWeek>): number {
    let streak = 0;
    let isFirstDay = true;

    for (let i = contributions.length - 1; i >= 0; i--) {
      const days = contributions[i]?.contributionDays ?? [];

      for (let j = days.length - 1; j >= 0; j--) {
        const day = days[j];

        if (day.contributionCount <= 0) {
          if (isFirstDay) {
            isFirstDay = false;
            continue; // skip today if no contributions
          }
          return streak;
        }

        isFirstDay = false;
        streak++;
      }
    }

    return streak;
  }

  const myStreaks = getDailyStreaks(myContributions.contributionCalendar.weeks);
  const opponentStreaks = getDailyStreaks(
    opponentContributions.contributionCalendar.weeks
  );

  const headToHeadArr = [
    {
      title: 'DAILY STREAKS',
      myVal: myStreaks,
      opponentVal: opponentStreaks,
    },
    {
      title: 'COMMITS',
      myVal: myContributions.totalCommitContributions,
      opponentVal: opponentContributions.totalCommitContributions,
    },
    {
      title: 'ISSUES',
      myVal: myContributions.totalIssueContributions,
      opponentVal: opponentContributions.totalIssueContributions,
    },
    {
      title: 'PULL REQUESTS',
      myVal: myContributions.totalPullRequestContributions,
      opponentVal: opponentContributions.totalPullRequestContributions,
    },
    {
      title: 'REVIEWS',
      myVal: myContributions.totalPullRequestReviewContributions,
      opponentVal: opponentContributions.totalPullRequestReviewContributions,
    },
    {
      title: 'REPOSITORIES',
      myVal: myContributions.totalRepositoryContributions,
      opponentVal: opponentContributions.totalRepositoryContributions,
    },
    {
      title: 'REPOS W/ COMMITS',
      myVal: myContributions.totalRepositoriesWithContributedCommits,
      opponentVal:
        opponentContributions.totalRepositoriesWithContributedCommits,
    },
    {
      title: 'REPOS W/ ISSUES',
      myVal: myContributions.totalRepositoriesWithContributedIssues,
      opponentVal: opponentContributions.totalRepositoriesWithContributedIssues,
    },
    {
      title: 'REPOS W/ PRS',
      myVal: myContributions.totalRepositoriesWithContributedPullRequests,
      opponentVal:
        opponentContributions.totalRepositoriesWithContributedPullRequests,
    },
    {
      title: 'REPOS W/ REVIEWS',
      myVal: myContributions.totalRepositoriesWithContributedPullRequestReviews,
      opponentVal:
        opponentContributions.totalRepositoriesWithContributedPullRequestReviews,
    },
  ];

  const score = headToHeadArr.reduce(
    (acc, curr) => {
      return {
        myScore: acc.myScore + curr.myVal,
        opponentScore: acc.opponentScore + curr.opponentVal,
      };
    },
    {
      myScore: 0,
      opponentScore: 0,
    }
  );

  const GithubUserComponent = (props: IGithubUserComponent) => {
    return (
      <div
        style={{ animationDelay: `${props.animationDelayInSeconds}s` }}
        className={`animate-jump-in absolute grid h-full w-1/2 place-items-center ${
          props.float === 'left' ? 'left-0' : 'right-0'
        }`}
      >
        <div className={'flex flex-col items-center'}>
          <img
            className={'size-32 rounded-full bg-white'}
            src={props.src}
            alt={`${props.githubName} avatar`}
          />
          <div className={'flex h-0 items-start justify-center'}>
            <p className={'pt-4 text-center text-lg font-bold text-white'}>
              {props.githubName}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const DualBar = ({ title, myVal, opponentVal }: IDualBar) => {
    const total = myVal + opponentVal;
    const myPercentage = (myVal / total) * 100;
    const opponentPercentage = (opponentVal / total) * 100;

    const iWon = myPercentage > opponentPercentage;

    return (
      <div className={'flex flex-col'}>
        <div
          className={'flex justify-between text-sm font-semibold text-white/40'}
        >
          <p className={`${iWon ? 'text-[#F03060]' : ''}`}>{myVal}</p>
          <p>{title}</p>
          <p className={`${!iWon ? 'text-[#2D1B5E]' : ''}`}>{opponentVal}</p>
        </div>
        <div className={'flex h-2 w-full'}>
          <div
            style={{ width: `${myPercentage}%` }}
            className={`bg-[#F03060] ${
              myPercentage === 100 ? 'rounded-full' : 'rounded-l-full'
            }`}
          ></div>
          <div
            style={{ width: `${opponentPercentage}%` }}
            className={`bg-[#2D1B5E] ${
              opponentPercentage === 100 ? 'rounded-full' : 'rounded-r-full'
            }`}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <ModalContainer modalId={modalId}>
      <div className={'relative h-96'}>
        {!vsRemoved && (
          <div
            className={`transition-opacity duration-500 ${vsVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {/*CENTER LINE*/}
            <div
              className={
                'absolute inset-0 top-1/2 z-50 hidden h-1 w-full -translate-y-1/2'
              }
            ></div>
            {/*LEFT (MY GITHUB) */}
            <div className={'absolute inset-0 bg-[#F03060]'}></div>
            {/*RIGHT (OPPONENT GITHUB) */}
            <div
              className={
                'absolute inset-0 bg-[#2D1B5E] [clip-path:polygon(61%_0%,100%_0%,100%_100%,40%_100%)]'
              }
            ></div>
            {/* VS */}
            <div
              style={{ animationDelay: '0.5s' }}
              className={
                'animate-jump-in absolute right-1/2 top-1/2 grid size-16 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-white'
              }
            >
              <p className={'text-2xl font-extrabold text-[#2D1B5E]'}>VS</p>
            </div>
            <GithubUserComponent
              float={'left'}
              githubName={myGithub.name}
              src={myGithub.avatarUrl}
              animationDelayInSeconds={1.5}
            />
            <GithubUserComponent
              float={'right'}
              githubName={opponentGithub.name}
              src={opponentGithub.avatarUrl}
              animationDelayInSeconds={3}
            />
          </div>
        )}
        {vsRemoved && (
          <div className={'animate-fade-in flex flex-col gap-8'}>
            <div id={'avatars-container'} className={'grid sm:grid-cols-2'}>
              <div className={'flex gap-4 text-center'}>
                <img
                  className={'size-18 rounded-full bg-white'}
                  src={myGithub.avatarUrl}
                  alt={`${myGithub.name} avatar`}
                />
                <div className={'flex flex-col items-center place-self-center'}>
                  <p className={'self-center text-xl font-bold text-white'}>
                    {myGithub.name}
                  </p>
                  <p className={'self-start text-white/40'}>
                    {`${
                      myGithub.contributionsCollection.contributionCalendar
                        .totalContributions
                    } contributions`}
                  </p>
                </div>
              </div>
              <div className={'flex gap-4 place-self-end text-center'}>
                <img
                  className={'size-18 order-1 rounded-full bg-white'}
                  src={opponentGithub.avatarUrl}
                  alt={`${opponentGithub.name} avatar`}
                />
                <div className={'flex flex-col items-center place-self-center'}>
                  <p className={'self-center text-xl font-bold text-white'}>
                    {opponentGithub.name}
                  </p>
                  <p className={'self-end text-white/40'}>
                    {`${
                      opponentGithub.contributionsCollection
                        .contributionCalendar.totalContributions
                    } contributions`}
                  </p>
                </div>
              </div>
            </div>
            <div
              id={'head-to-head'}
              className={
                'bg-secondary px-8 flex flex-col gap-4 rounded-xl py-4'
              }
            >
              <h3 className={'font-bold text-white/60'}>Head to Head</h3>
              {headToHeadArr.map((item, index) => (
                <DualBar
                  title={item.title}
                  myVal={item.myVal}
                  opponentVal={item.opponentVal}
                  key={index}
                />
              ))}
            </div>
            <div id={'scoreboard'} className={'flex flex-col gap-4 text-white'}>
              <div>{score.myScore}</div>
              <div>{score.opponentScore}</div>
            </div>
          </div>
        )}
      </div>
    </ModalContainer>
  );
}

export default ModalGithub;
