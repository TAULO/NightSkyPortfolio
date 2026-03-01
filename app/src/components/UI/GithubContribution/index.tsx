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
        <GitHubContributionCalendar githubUser={myGithubUser} githubUsernameFromInput={myGithubUsername} />
        <GitHubContributionCalendar githubUser={opponentGithubUser} githubUsernameFromInput={otherGithubUsername} />
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
          <Button
            onClick={() =>
              openModal({
                myGithub: myGithubUser,
                opponentGithub: opponentGithubUser,
              })
            }
            text={`${myGithubUser.name.toUpperCase()} vs ${opponentGithubUser.name.toUpperCase()}`}
          />
        )}
      </div>
    </div>
  );
};

export default GithubContribution;
