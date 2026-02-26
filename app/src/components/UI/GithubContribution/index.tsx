import GitHubContributionCalendar from './GitHubContributionCalendar.tsx';
import { useRef, useState } from 'react';
import Button from '../Button/Button.tsx';
import Input from '../Input/Input.tsx';
import { useModal } from '../Modal/ModalProvider.tsx';

const GithubContribution = () => {
  const [otherGithubUsername, setOtherGithubUsername] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { openModal } = useModal('github-modal');

  return (
    <div className={'flex min-w-0 max-w-fit flex-col'}>
      <div className={'flex flex-col gap-8'}>
        <GitHubContributionCalendar githubUsername={'TAULO'} />
        <GitHubContributionCalendar githubUsername={otherGithubUsername} />
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
        <Button
          onClick={() => openModal({ content: 'Hello World' })}
          text={'Open Modal'}
        />
      </div>
    </div>
  );
};

export default GithubContribution;
