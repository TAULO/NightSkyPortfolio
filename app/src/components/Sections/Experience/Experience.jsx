import Switch from './Switch.jsx';
import Title from '../../UI/Title/Title.jsx';
import ExperienceItem from './ExperienceItem.jsx';
import {
  csharpSVG,
  dockerSVG,
  dotnetcoreSVG,
  javascriptSVG,
  kibanaSVG, postgressqlSVG,
  typescriptSVG,
  unitySVG,
  vueSVG,
} from '../TechStack/TechSVG.jsx';

import sireniaIcon from '../../../assets/static/sirenia.svg';
import codingPiratesIcon from '../../../assets/static/codingPirates.png';
import alfaIcon from '../../../assets/static/alfa.jpeg';
import baIcon from '../../../assets/static/ba.svg';

import useJobDuration from '../../../hooks/useJobDuration.jsx';
import { useEffect, useState } from 'react';

const codingPiratesJobDuration = useJobDuration('2024-08-01', Date.now());
const sireniaJobDuration = useJobDuration('2023-01-01', Date.now());
const internJobDuration = useJobDuration('2022-08-01', '2023-01-01');

const baJobDuration = useJobDuration('2021-01-01', '2023-01-01');

const jobExperiences = [
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

const educationExperiences = [
  {
    title: 'Business Academy Aarhus',
    role: 'AP in Computer Science',
    date: `Aug. 2021 - Jan. 2023 (${baJobDuration.years} years, ${baJobDuration.months} months)`,
    place: 'Aarhus, Denmark',
    image: {
      src: baIcon,
      alt: 'Business Academy Aarhus',
    },
  },
];

const jobs = <ExperienceItem experiences={jobExperiences}> </ExperienceItem>
const educations = <ExperienceItem experiences={educationExperiences}></ExperienceItem>


const Experience = () => {
  const [items, setItems] = useState([
    {
      name: 'Work',
      isSelected: true,
    },
    {
      name: 'Education',
      isSelected: false,
    },
    {
      name: 'Personal',
      isSelected: false,
    },
  ]);

  const [experienceItem, setExperienceItem] = useState(jobs);

  useEffect(() => {
    const selectedIndex = items.findIndex((item) => item.isSelected);

    switch (selectedIndex) {
      case 0:
        setExperienceItem(jobs);
        break;
      case 1:
        setExperienceItem(educations);
        break;
      case 2:
        setExperienceItem(jobs);
        break;
      default:
        setExperienceItem(jobs);
        break;
    }
  }, [items]);

  return (
    <>
      <section className={'flex flex-col'}>
        <Title title={'Experience'}></Title>
        <div className={'gap-15 flex flex-col self-center sm:self-start'}>
          <Switch items={items} setItems={setItems}></Switch>
          <div className={'flex flex-col gap-10'}>{experienceItem}</div>
        </div>
      </section>
    </>
  );
};

export default Experience;
