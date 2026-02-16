import GitHubContributionCalendar from './GitHubContributionCalendar.tsx';
import Title from '../Title/Title.tsx';
import { useRef, useState } from 'react';
import Button from '../Button/Button.tsx';
import Input from '../Input/Input.tsx';

const GithubContribution = () => {
  const [otherGithubUsername, setOtherGithubUsername] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={'flex flex-col'}>
      <Title title={'About Me'}></Title>
      <h3 className={'text-2xl font-bold text-white'}>
        My GitHub Contributions
      </h3>
      <div className={'flex w-fit flex-col gap-8 mt-8'}>
        <GitHubContributionCalendar githubUsername={'TAULO'} />
        <GitHubContributionCalendar githubUsername={otherGithubUsername} />
        <div className={'flex gap-2'}>
          <Input
            className={'grow'}
            placeholder={'Type a GitHub username'}
            ref={inputRef}
          />
          <Button
            onClick={() => setOtherGithubUsername(inputRef.current.value)}
            text={'Search'}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubContribution;
