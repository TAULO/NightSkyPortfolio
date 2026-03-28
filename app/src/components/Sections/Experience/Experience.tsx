import Switch from './Switch.tsx';
import ExperienceItem from './ExperienceItem.tsx';
import { useState } from 'react';

import { jobExperiences, educationExperiences } from './experience.data.ts';

const jobs = ExperienceItem(jobExperiences);
const educations = ExperienceItem(educationExperiences);

const Experience = () => {
  const [experienceItem, setExperienceItem] = useState(jobs);

  const handleSwitchChange = (index: number) => {
    switch (index) {
      case 0:
        return setExperienceItem(jobs);
      case 1:
        return setExperienceItem(educations);
      default:
        return setExperienceItem(jobs);
    }
  };

  return (
    <>
      <div className={'flex flex-col'}>
        <div className={'flex flex-col gap-14 self-center sm:self-start'}>
          <Switch
            items={['Jobs', 'Education']}
            onSelectionChange={handleSwitchChange}
          ></Switch>
          <div className={'flex grow flex-col gap-10'}>{experienceItem}</div>
        </div>
      </div>
    </>
  );
};

export default Experience;
