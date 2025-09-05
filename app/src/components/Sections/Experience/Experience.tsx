import Switch from './Switch.tsx';
import Title from '../../UI/Title/Title.tsx';
import ExperienceItem from './ExperienceItem.tsx';
import {
  csharpSVG,
  dockerSVG,
  dotnetcoreSVG,
  javascriptSVG,
  kibanaSVG,
  postgressqlSVG,
  typescriptSVG,
  unitySVG,
  vueSVG,
} from '../TechStack/TechSVG.tsx';

import sireniaIcon from '../../../assets/static/sirenia.svg';
import codingPiratesIcon from '../../../assets/static/codingPirates.png';
import alfaIcon from '../../../assets/static/alfa.jpeg';
import baIcon from '../../../assets/static/ba.svg';

import useJobDuration from '../../../hooks/useJobDuration.tsx';
import { ReactElement, useState } from 'react';

export interface IExperienceItem {
  title: string;
  role: string;
  date: string;
  place: string;
  tasks: Array<string>;
  stack: Array<{ name: string; svg: ReactElement }>;
  image: {
    src: string;
    alt: string;
  };
}

const codingPiratesJobDuration = useJobDuration('2024-08-01', Date.now());
const sireniaJobDuration = useJobDuration('2023-01-01', Date.now());
const internJobDuration = useJobDuration('2022-08-01', '2023-01-01');

const baJobDuration = useJobDuration('2021-01-01', '2023-01-01');

const jobExperiences: Array<IExperienceItem> = [
  {
    title: 'Coding Pirates',
    role: 'Volunteer',
    date: `Aug. 2024 - Present (${codingPiratesJobDuration.years} year, ${codingPiratesJobDuration.months} months)`,
    place: 'Aarhus, Denmark',
    tasks: ['TODO'],
    stack: [
      {
        name: 'Unity',
        svg: unitySVG,
      },
      {
        name: 'C#',
        svg: csharpSVG,
      },
    ],
    image: {
      src: codingPiratesIcon,
      alt: 'Coding Pirates',
    },
  },
  {
    title: 'Sirenia / Alfa eCare',
    role: 'Software Developer',
    date: `Jan. 2023 - Present (${sireniaJobDuration.years} years, ${sireniaJobDuration.months} months)`,
    place: 'Aarhus, Denmark',
    tasks: [
      'Developing on Automation Software',
      'Develop & Support Automation Robots close with the Customer',
      'Developing mobile apps',
    ],
    stack: [
      {
        name: 'Vue',
        svg: vueSVG,
      },
      {
        name: '.NET',
        svg: dotnetcoreSVG,
      },
      {
        name: 'C#',
        svg: csharpSVG,
      },
      {
        name: 'TypeScript',
        svg: typescriptSVG,
      },
      {
        name: 'JavaScript',
        svg: javascriptSVG,
      },
      {
        name: 'PostgreSql',
        svg: postgressqlSVG,
      },
      {
        name: 'Docker',
        svg: dockerSVG,
      },
      {
        name: 'Kibana',
        svg: kibanaSVG,
      },
    ],
    image: {
      src: alfaIcon,
      alt: 'alfa eCare',
    },
  },
  {
    title: 'Sirenia',
    role: 'Intern',
    date: `Aug. 2022 - Jan. 2023 (${internJobDuration.months} months)`,
    place: 'Aarhus, Denmark',
    tasks: [
      'Developing websites',
      'Developing mobile apps',
      'Developing mobile apps',
    ],
    stack: [
      {
        name: 'Vue',
        svg: vueSVG,
      },
      {
        name: '.NET',
        svg: dotnetcoreSVG,
      },
      {
        name: 'C#',
        svg: csharpSVG,
      },
      {
        name: 'JavaScript',
        svg: javascriptSVG,
      },
    ],
    image: {
      src: sireniaIcon,
      alt: 'sirenia',
    },
  },
];

const educationExperiences: Array<IExperienceItem> = [
  {
    title: 'Business Academy Aarhus',
    role: 'AP in Computer Science',
    date: `Aug. 2021 - Jan. 2023 (${baJobDuration.years} years, ${baJobDuration.months} months)`,
    place: 'Aarhus, Denmark',
    tasks: [],
    stack: [],
    image: {
      src: baIcon,
      alt: 'Business Academy Aarhus',
    },
  },
];

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
        <Title title={'Experience'}></Title>
        <div className={'gap-15 flex flex-col self-center sm:self-start'}>
          <Switch
            items={['Jobs', 'Education']}
            onSelectionChange={handleSwitchChange}
          ></Switch>
          <div className={'flex flex-col gap-10'}>{experienceItem}</div>
        </div>
      </div>
    </>
  );
};

export default Experience;
