import GitHubContributionCalendar from './GitHubContributionCalendar.tsx';
import Title from '../Title/Title.tsx';
import { useRef, useState } from 'react';

const GithubContribution = () => {
  const [otherGithubUsername, setOtherGithubUsername] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={'flex flex-col'}>
      <Title title={'About Me'}></Title>
      <div className={'flex flex-col gap-5'}>
        <h3 className={'text-2xl font-bold text-white'}>
          My GitHub Contributions
        </h3>
        <GitHubContributionCalendar
          githubUsername={'TAULO'}
        ></GitHubContributionCalendar>
        <input type={'text'} className={'bg-red-800'} ref={inputRef}/>
        <button onClick={() => setOtherGithubUsername(inputRef.current.value)} className={'bg-red-800'}>Click me</button>
        <GitHubContributionCalendar
          githubUsername={otherGithubUsername}
        ></GitHubContributionCalendar>
      </div>
    </div>
  );
};

export default GithubContribution;
