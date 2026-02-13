import GitHubContributionCalendar from './GitHubContributionCalendar.tsx';
import Title from '../Title/Title.tsx';

const GithubContribution = () => {
  return (
    <div className={'flex flex-col gap-5'}>
      <Title title={'About Me'}></Title>
      <GitHubContributionCalendar
        githubUsername={'TAULO'}
      ></GitHubContributionCalendar>
      <GitHubContributionCalendar
        githubUsername={'ReneBossen'}
      ></GitHubContributionCalendar>
    </div>
  );
};

export default GithubContribution;
