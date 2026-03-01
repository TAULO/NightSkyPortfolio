import { useModal } from './ModalProvider.tsx';
import ModalContainer from './ModalContainer.tsx';
import {
  IContributionWeek,
  IGitHubUser,
} from '../../../hooks/useGithubContributions.ts';
import { useEffect, useState } from 'react';
import Tooltip from '../Tooltip/Tooltip.tsx';

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
  const myContributionsWeek = myContributions.contributionCalendar.weeks;
  const opponentContributionsWeek =
    opponentContributions.contributionCalendar.weeks;

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

  function getLongestDailyStreak(
    contributions: Array<IContributionWeek>
  ): number {
    let longest = 0;
    let current = 0;

    for (let i = 0; i < contributions.length; i++) {
      const days = contributions[i]?.contributionDays ?? [];

      for (let j = 0; j < days.length; j++) {
        if (days[j].contributionCount > 0) {
          current++;
          longest = Math.max(longest, current);
        } else {
          current = 0;
        }
      }
    }

    return longest;
  }

  const myStreaks = getDailyStreaks(myContributionsWeek);
  const opponentStreaks = getDailyStreaks(opponentContributionsWeek);

  const myLongestStreak = getLongestDailyStreak(myContributionsWeek);
  const opponentLongestStreaks = getLongestDailyStreak(myContributionsWeek);

  const headToHeadArr = [
    {
      title: 'LONGEST STREAK',
      myVal: myLongestStreak,
      opponentVal: opponentLongestStreaks,
    },
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
            className={'size-24 rounded-full bg-white sm:size-32'}
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
          <p className={`${iWon ? 'text-my-github' : ''}`}>{myVal}</p>
          <p>{title}</p>
          <p className={`${!iWon ? 'text-opponent-github' : ''}`}>
            {opponentVal}
          </p>
        </div>
        <div className={'flex h-2 w-full'}>
          <div
            style={{ width: `${myPercentage}%` }}
            className={`bg-my-github ${
              myPercentage === 100 ? 'rounded-full' : 'rounded-l-full'
            }`}
          ></div>
          <div
            style={{ width: `${opponentPercentage}%` }}
            className={`bg-opponent-github ${
              opponentPercentage === 100 ? 'rounded-full' : 'rounded-r-full'
            }`}
          ></div>
        </div>
      </div>
    );
  };

  const Leaderboard = () => {
    const myName = myGithub.name;
    const opponentName = opponentGithub.name;

    const iWon = score.myScore > score.opponentScore;
    const maxScore = Math.max(score.myScore, score.opponentScore);
    const minScore = Math.min(score.myScore, score.opponentScore);

    const MAX_HEIGHT = 200;
    const MIN_HEIGHT = 80;
    const winnerHeight = MAX_HEIGHT;
    const loserHeight =
      maxScore > 0
        ? Math.max(MIN_HEIGHT, (minScore / maxScore) * MAX_HEIGHT)
        : MIN_HEIGHT;

    const podiums = iWon
      ? [
          {
            rank: 2,
            height: loserHeight,
            color: 'bg-opponent-github',
            name: opponentName,
            score: score.opponentScore,
            src: opponentGithub.avatarUrl,
          },
          {
            rank: 1,
            height: winnerHeight,
            color: 'bg-my-github',
            name: myName,
            score: score.myScore,
            src: myGithub.avatarUrl,
          },
        ]
      : [
          {
            rank: 2,
            height: loserHeight,
            color: 'bg-my-github',
            name: myName,
            score: score.myScore,
            src: myGithub.avatarUrl,
          },
          {
            rank: 1,
            height: winnerHeight,
            color: 'bg-opponent-github',
            name: opponentName,
            score: score.opponentScore,
            src: opponentGithub.avatarUrl,
          },
        ];

    return (
      <div className="flex items-end justify-center gap-2">
        {podiums.map((p) => (
          <div
            key={p.rank}
            className={`flex flex-col items-center ${p.rank === 1 ? 'order-0' : 'order-2'}`}
          >
            {/* Avatar */}
            <div className={'relative'}>
              <img
                className={'mb-1 size-12 rounded-full bg-white'}
                src={p.src}
                alt={`${p.name} avatar`}
              />
              <div
                className={`absolute -right-[20px] -top-[10px] size-6 rotate-[55deg] text-yellow-400 ${
                  p.rank !== 1 ? 'hidden' : ''
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M21.8382 11.1263C22.0182 9.2137 22.1082 8.25739 21.781 7.86207C21.604 7.64823 21.3633 7.5172 21.106 7.4946C20.6303 7.45282 20.0329 8.1329 18.8381 9.49307C18.2202 10.1965 17.9113 10.5482 17.5666 10.6027C17.3757 10.6328 17.1811 10.6018 17.0047 10.5131C16.6865 10.3529 16.4743 9.91812 16.0499 9.04851L13.8131 4.46485C13.0112 2.82162 12.6102 2 12 2C11.3898 2 10.9888 2.82162 10.1869 4.46486L7.95007 9.04852C7.5257 9.91812 7.31351 10.3529 6.99526 10.5131C6.81892 10.6018 6.62434 10.6328 6.43337 10.6027C6.08872 10.5482 5.77977 10.1965 5.16187 9.49307C3.96708 8.1329 3.36968 7.45282 2.89399 7.4946C2.63666 7.5172 2.39598 7.64823 2.21899 7.86207C1.8918 8.25739 1.9818 9.2137 2.16181 11.1263L2.391 13.5616C2.76865 17.5742 2.95748 19.5805 4.14009 20.7902C5.32271 22 7.09517 22 10.6401 22H13.3599C16.9048 22 18.6773 22 19.8599 20.7902C20.7738 19.8553 21.0942 18.4447 21.367 16"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9 18H15"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            {/* Name & Score */}
            <p className={'text-sm font-bold text-white'}>{p.name}</p>
            <p className={'mb-2 text-xs text-white/70'}>{p.score} pts</p>

            {/* Podium block */}
            <div
              className={`relative flex w-[100px] items-center justify-center rounded-t-2xl ${p.color}`}
              style={{ height: `${p.height}px`, containerType: 'size' }}
            >
              <p
                className={'font-extrabold text-white/30'}
                style={{ fontSize: '40cqh' }}
              >
                {p.rank}
              </p>
              <div
                className={
                  'absolute inset-x-0 top-0 h-4 rounded-t-2xl bg-white/10'
                }
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const WinLossBreakdown = () => {
    const myWins = headToHeadArr.filter(
      (item) => item.myVal >= item.opponentVal
    ).length;
    const opponentWins = headToHeadArr.filter(
      (item) => item.opponentVal >= item.myVal
    ).length;

    return (
      <div className={'flex items-center justify-center gap-3'}>
        {/* My dots */}
        <div className={'flex gap-1'}>
          {headToHeadArr.map((item, i) => {
            const tooltipId = `popover-my-${item.title}-${i}`;
            return (
              <Tooltip id={tooltipId} content={item.title} key={i}>
                <div
                  className={`size-3 rounded-full ${
                    item.myVal > item.opponentVal
                      ? 'bg-my-github'
                      : item.myVal === item.opponentVal
                        ? 'bg-white/20'
                        : 'bg-white/10'
                  }`}
                />
              </Tooltip>
            );
          })}
        </div>

        {/* Score badge */}
        <p className={'sm:text-lg font-extrabold text-white'}>
          {myWins} - {opponentWins}
        </p>

        {/* Opponent dots */}
        <div className={'flex gap-1'}>
          {headToHeadArr.map((item, i) => {
            const tooltipId = `popover-opponent-${item.title}-${i}`;
            return (
              <Tooltip id={tooltipId} content={item.title} key={i}>
                <div
                  className={`size-3 rounded-full ${
                    item.opponentVal > item.myVal
                      ? 'bg-opponent-github'
                      : item.opponentVal === item.myVal
                        ? 'bg-white/20'
                        : 'bg-white/10'
                  }`}
                />
              </Tooltip>
            );
          })}
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
            <div className={'bg-my-github absolute inset-0'}></div>
            {/*RIGHT (OPPONENT GITHUB) */}
            <div
              className={
                'bg-opponent-github absolute inset-0 [clip-path:polygon(61%_0%,100%_0%,100%_100%,40%_100%)]'
              }
            ></div>
            {/* VS */}
            <div
              style={{ animationDelay: '0.5s' }}
              className={
                'animate-jump-in absolute right-1/2 top-1/2 grid size-12 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-white sm:size-16'
              }
            >
              <p className={'text-my-github text-2xl font-extrabold'}>VS</p>
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
                'bg-secondary flex flex-col gap-4 rounded-xl px-8 py-4'
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
            <div
              className={
                'bg-secondary flex flex-col gap-4 rounded-t-xl px-8 pt-4'
              }
            >
              <h3 className={'font-bold text-white/60'}>Leaderboard</h3>
              <WinLossBreakdown></WinLossBreakdown>
              <Leaderboard></Leaderboard>
            </div>
          </div>
        )}
      </div>
    </ModalContainer>
  );
}

export default ModalGithub;
