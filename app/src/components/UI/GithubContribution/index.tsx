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

  const hasFoundOpponent = !!(myGithubUser && opponentGithubUser);

  return (
    <div
      className={
        'border-border bg-secondary hover:border-border-hover flex min-w-0 max-w-fit flex-col gap-6 rounded-xl border p-6 transition-colors duration-300'
      }
      data-aos={'fade-right'}
      data-aos-anchor-placement={'bottom-bottom'}
    >
      <span className={'font-mono text-sm tracking-widest text-white/25'}>
        // github.activity
      </span>
      <GitHubContributionCalendar
        githubUser={myGithubUser}
        githubUsernameFromInput={myGithubUsername}
      />
      {/* VS LINE */}
      <div className={'flex items-center gap-3'}>
        <div className={'bg-border h-px flex-1'} />
        <span
          className={
            'border-border rounded-full border px-4 py-1 text-center font-mono text-sm tracking-widest text-white/25'
          }
        >
          VS
        </span>
        <div className={'bg-border h-px flex-1'} />
      </div>
      <GitHubContributionCalendar
        githubUser={opponentGithubUser}
        githubUsernameFromInput={otherGithubUsername}
      />

      {hasFoundOpponent ? (
        <button
          onClick={() =>
            openModal({
              myGithub: myGithubUser,
              opponentGithub: opponentGithubUser,
            })
          }
          className={
            'group relative flex w-fit items-center justify-center self-center overflow-hidden rounded-xl font-extrabold text-white shadow-lg transition-colors duration-300 hover:cursor-pointer'
          }
        >
          {/* Content */}
          <div
            className={
              'border-border hover:border-border-hover relative flex items-center gap-3 rounded-xl border px-4 py-2 transition-colors duration-300'
            }
          >
            <img
              src={myGithubUser.avatarUrl}
              alt={myGithubUser.name}
              className={'border-border size-8 rounded-full border'}
            />
            <span className={'text-sm tracking-wider'}>
              {myGithubUser.name.toUpperCase()}
            </span>
            <span
              className={
                'text-tertiary rounded-full bg-white px-2 py-0.5 text-xs font-extrabold'
              }
            >
              VS
            </span>
            {opponentGithubUser && (
              <>
                <span className={'text-sm tracking-wider'}>
                  {opponentGithubUser.name.toUpperCase()}
                </span>
                <img
                  src={opponentGithubUser.avatarUrl}
                  alt={opponentGithubUser.name}
                  className={'border-border size-8 rounded-full border'}
                />
              </>
            )}
          </div>
        </button>
      ) : (
        <p className={'mt-2 font-mono text-sm text-white/25'}>
          {
            'Type your GitHub username (or any) to compare contributions with me'
          }
        </p>
      )}
      {/* INPUT VS OTHER USER */}
      <div className={'flex gap-2'}>
        <Input placeholder={'e.g. torvalds'} ref={inputRef} />
        <Button
          onClick={() => {
            if (!inputRef.current) return;
            setOtherGithubUsername(inputRef.current.value);
          }}
          text={'Search'}
        />
        {hasFoundOpponent && (
          <Button
            onClick={() => {
              if (!inputRef.current) return;
              setOtherGithubUsername('');
              inputRef.current.value = '';
            }}
            text={'Reset'}
          />
        )}
      </div>
    </div>
  );
};

export default GithubContribution;
