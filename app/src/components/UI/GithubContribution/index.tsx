import GitHubContributionCalendar from './GitHubContributionCalendar.tsx';
import Title from '../Title/Title.tsx';
import { useRef, useState } from 'react';
import Button from '../Button/Button.tsx';
import Input from '../Input/Input.tsx';

const GithubContribution = () => {
  const [otherGithubUsername, setOtherGithubUsername] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={'flex min-w-0 max-w-fit flex-col'}>
      <Title title={'About Me'}></Title>
      <div className={'mt-8 flex flex-col gap-8'}>
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
      </div>
    </div>
  );
};

export default GithubContribution;
