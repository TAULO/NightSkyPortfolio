import ProjectsItem from './ProjectsItem.tsx';
import Title from '../../UI/Title/Title.tsx';
import { JSX } from 'react';
import {
  csharpSVG,
  dotnetcoreSVG,
  nuxtSVG,
  openAPISVG,
  postgressqlSVG,
  typescriptSVG,
  vueSVG,
} from '../TechStack/TechSVG.tsx';

import testImage from '../../../assets/static/projects/athletica/foo.webp';

export interface IProject {
  name: string;
  description: string;
  hrefCode: string;
  hrefLive?: string;
  techStack: Array<{ svg: JSX.Element; name: string }>;
  images: Array<{ src: string; alt: string }>;
}

const athleticaProject: IProject = {
  name: 'Athletica',
  description:
    'Athletica is a mobile-first workout tracker designed to help you take control of your fitness journey. Easily log workouts, exercises, monitor progress, and visualize your improvements over time. Built with customization at its core, Athletica adapts to your goals — so you can train smarter and stay motivated.',
  hrefCode: 'https://github.com/mahnac/Athletica',
  techStack: [
    {
      svg: vueSVG,
      name: 'VueJS',
    },
    {
      svg: nuxtSVG,
      name: 'Nuxt',
    },
    {
      svg: typescriptSVG,
      name: 'TypeScroåt',
    },
    {
      svg: dotnetcoreSVG,
      name: '.NET Aspire',
    },
    {
      svg: csharpSVG,
      name: 'C#',
    },
    {
      svg: postgressqlSVG,
      name: 'PostgreSQL',
    },
    {
      svg: openAPISVG,
      name: 'OpenAPI',
    },
  ],
  images: [
    {
      src: testImage,
      alt: 'Athletica',
    },
  ],
};

const projects: Array<IProject> = [athleticaProject];

const Projects = () => {
  return (
    <div>
      <Title title={'Projects'}></Title>
      <div
        className={
          'grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4'
        }
      >
        {projects.map((project, index) => (
          <ProjectsItem {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
