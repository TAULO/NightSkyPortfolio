import GitHubContributionCalendar from './GitHubContributionCalendar.tsx';
import { useRef, useState } from 'react';
import Button from '../Button/Button.tsx';
import Input from '../Input/Input.tsx';
import { useModal } from '../Modal/ModalProvider.tsx';
import { useGitHubContributions } from '../../../hooks/useGithubContributions.ts';
import { IGithubModal } from '../Modal/ModalGithub.tsx';

const GithubContribution = () => {
  const myGithubUsername = 'TAULO';

  const [otherGithubUsername, setOtherGithubUsername] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { openModal } = useModal<IGithubModal>('github-modal');

  const myGithubUser = useGitHubContributions(myGithubUsername);
  const opponentGithubUser = useGitHubContributions(otherGithubUsername);

  return (
    <div className={'flex min-w-0 max-w-fit flex-col'}>
      <div className={'flex flex-col gap-8'}>
        <GitHubContributionCalendar
          githubUser={myGithubUser}
          githubUsernameFromInput={myGithubUsername}
        />
        <GitHubContributionCalendar
          githubUser={opponentGithubUser}
          githubUsernameFromInput={otherGithubUsername}
        />
        <div className={'flex gap-2'}>
          <Input
            className={'grow'}
            placeholder={'Type a GitHub username'}
            ref={inputRef}
          />
          <Button
            onClick={() => {
              if (!inputRef.current) return;
              setOtherGithubUsername(inputRef.current.value);
            }}
            text={'Search'}
          />
        </div>

        {myGithubUser && opponentGithubUser && (
          <button
            onClick={() =>
              openModal({
                myGithub: myGithubUser,
                opponentGithub: opponentGithubUser,
              })
            }
            className={
              'group relative flex items-center justify-center overflow-hidden rounded-xl px-6 py-3 font-extrabold text-white shadow-lg hover:cursor-pointer'
            }
          >
            {/* Split background */}
            <div className={'bg-my-github absolute inset-0'} />
            <div
              className={
                'bg-opponent-github absolute inset-0 [clip-path:polygon(60%_0%,100%_0%,100%_100%,40%_100%)]'
              }
            />

            {/* Shine effect on hover */}
            <div
              className={
                'absolute inset-0 bg-white/0 transition-all group-hover:bg-white/10'
              }
            />

            {/* Content */}
            <div className={'relative flex items-center gap-3'}>
              <img
                src={myGithubUser.avatarUrl}
                alt={myGithubUser.name}
                className={'size-8 rounded-full border-2 border-white/50'}
              />
              <span className={'text-sm tracking-wider'}>
                {myGithubUser.name.toUpperCase()}
              </span>
              <span
                className={
                  'text-my-github rounded-full bg-white px-2 py-0.5 text-xs font-extrabold'
                }
              >
                VS
              </span>
              <span className={'text-sm tracking-wider'}>
                {opponentGithubUser.name.toUpperCase()}
              </span>
              <img
                src={opponentGithubUser.avatarUrl}
                alt={opponentGithubUser.name}
                className={'size-8 rounded-full border-2 border-white/50'}
              />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default GithubContribution;
