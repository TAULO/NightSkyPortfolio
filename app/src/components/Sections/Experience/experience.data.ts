import { ReactElement } from 'react';
import useJobDuration from '../../../hooks/useJobDuration.ts';
import {
  csharpSVG,
  cssSVG,
  dockerSVG,
  dotnetcoreSVG, gitlabSVG,
  gitSVG,
  htmlSVG,
  javascriptSVG,
  kibanaSVG,
  postgressqlSVG,
  typescriptSVG,
  unitySVG,
  vueSVG,
} from '../TechStack/TechSVG.tsx';
import codingPiratesIcon from '../../../assets/static/codingPirates.png';
import alfaIcon from '../../../assets/static/alfa.png';
import sireniaIcon from '../../../assets/static/sirenia.svg';
import baIcon from '../../../assets/static/ba.svg';

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

const codingPiratesJobDuration = useJobDuration('2025-08-01', Date.now());
const sireniaJobDuration = useJobDuration('2023-01-01', Date.now());
const internJobDuration = useJobDuration('2022-08-01', '2023-01-01');

const baJobDuration = useJobDuration('2021-08-01', '2023-02-01');

const jobExperiences: Array<IExperienceItem> = [
  {
    title: 'Coding Pirates',
    role: 'Volunteer',
    date: `Aug. 2025 - Present (${codingPiratesJobDuration.years}, ${codingPiratesJobDuration.months})`,
    place: 'Aarhus, Denmark',
    tasks: [
      'Mentor children and young adults in developing technological confidence, creativity, and problem-solving skills through coding and game development',
      'Co-organize and support the annual CP Game Jam, where participants design and code games within a 24-hour challenge',
    ],
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
    date: `Jan. 2023 - Present (${sireniaJobDuration.years}, ${sireniaJobDuration.months})`,
    place: 'Aarhus, Denmark',
    tasks: [
      'Maintained and developed automation robots, including widely used modules for various EHR systems',
      'Work closely with national and international customers in the healthcare industry to understand their workflows and identify automation opportunities',
      'Develop BI dashboards to help customers visualize the impact of automation robots and measure efficiency gains',
      'Deploy Software on Ubuntu servers in a containerized environment using Docker',
      'Collaborate with senior developers in both frontend (Vue) and backend (.NET) development',
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
        name: 'HTML',
        svg: htmlSVG,
      },
      {
        name: 'CSS',
        svg: cssSVG,
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
      {
        name: 'GitLab',
        svg: gitlabSVG,
      },
      {
        name: 'Git',
        svg: gitSVG,
      },
    ],
    image: {
      src: alfaIcon,
      alt: 'Alfa eCare',
    },
  },
  {
    title: 'Sirenia',
    role: 'Intern',
    date: `Aug. 2022 - Jan. 2023 (${internJobDuration.months})`,
    place: 'Aarhus, Denmark',
    tasks: [
      'Designed and developed a custom plugin integrating with the OpenAI API to enhance automation workflows',
      'Built a third-party analytics tool, “Task Mining,” to analyze customer workflows and identify automation opportunities',
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
      {
        name: 'HTML',
        svg: htmlSVG,
      },
      {
        name: 'CSS',
        svg: cssSVG,
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
    date: `Aug. 2021 - Feb. 2023 (${baJobDuration.years}, ${baJobDuration.months})`,
    place: 'Aarhus, Denmark',
    tasks: [],
    stack: [],
    image: {
      src: baIcon,
      alt: 'Business Academy Aarhus',
    },
  },
];

export { jobExperiences, educationExperiences };
