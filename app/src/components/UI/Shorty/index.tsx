import './index.css';
import '@taulo1999/heyshorty';
import { IShorty } from '@taulo1999/heyshorty';
import { projects } from '../../Sections/Projects/project.data.ts';
import useScrollTo from '../../../hooks/useScrollTo.ts';

interface IShortyProps {
  projectRef: React.RefObject<HTMLElement | null>;
  aboutMeRef: React.RefObject<HTMLElement | null>;
  techStackRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
  experienceRef: React.RefObject<HTMLElement | null>;
}
const Shorty = (refs: IShortyProps) => {
  const scrollTo = useScrollTo();

  const projectsChildren: Array<IShorty> = projects.map((project) => {
    return {
      id: project.name,
      name: project.name,
      icon: 'commit',
      handler: () => window.open(project.hrefCode, '_blank'),
    };
  });

  const shortyData: Array<IShorty> = [
    {
      id: 'Projects',
      name: 'Mission Control',
      icon: 'folder_special',
      children: projectsChildren,
    },
    {
      id: 'Socials',
      name: 'Socials',
      icon: 'group_add',
      children: [
        {
          id: 'LinkedIn',
          name: 'LinkedIn',
          icon: 'hub',
          handler: () =>
            window.open(
              'https://www.linkedin.com/in/thomas-taulo-529084128',
              '_blank'
            ),
        },
        {
          id: 'Github',
          name: 'Github',
          icon: 'merge',
          handler: () => window.open('https://github.com/TAULO', '_blank'),
        },
        {
          id: 'Mail',
          name: 'Mail',
          icon: 'mail',
          handler: () => window.open('mailto:taulo@live.dk', '_blank'),
        },
      ],
    },
    {
      id: 'Explore',
      name: 'Go to...',
      icon: 'menu',
      children: [
        {
          id: 'Experience',
          name: 'Experience',
          icon: 'work',
          handler: () => scrollTo(refs.experienceRef),
        },
        {
          id: 'Project',
          name: 'Project',
          icon: 'folder_special',
          handler: () => scrollTo(refs.projectRef),
        },
        {
          id: 'About Me',
          name: 'About Me',
          icon: 'person',
          handler: () => scrollTo(refs.aboutMeRef),
        },
        {
          id: 'Tech Stack',
          name: 'Tech Stack',
          icon: 'layers',
          handler: () => scrollTo(refs.techStackRef),
        },
        {
          id: 'Contact',
          name: 'Contact',
          icon: 'mail',
          handler: () => scrollTo(refs.contactRef),
        },
      ],
    },
    {
      id: 'Palette',
      name: 'Palette',
      icon: 'palette',
      children: [
        {
          id: 'nebula',
          name: 'Nebula',
          icon: 'draw',
          handler: () => {
            document.documentElement.style.setProperty(
              '--color-tertiary',
              '#8B5CF6'
            );
          },
        },
        {
          id: 'supernova',
          name: 'Supernova',
          icon: 'draw',
          handler: () => {
            document.documentElement.style.setProperty(
              '--color-tertiary',
              '#FFA500'
            );
          },
        },
        {
          id: 'mars',
          name: 'Mars',
          icon: 'draw',
          handler: () => {
            document.documentElement.style.setProperty(
              '--color-tertiary',
              '#FF6B00'
            );
          },
        },
        {
          id: 'aurora',
          name: 'Aurora',
          icon: 'draw',
          handler: () => {
            document.documentElement.style.setProperty(
              '--color-tertiary',
              '#22D3EE'
            );
          },
        },
        {
          id: 'starlight',
          name: 'Starlight',
          icon: 'draw',
          handler: () => {
            document.documentElement.style.setProperty(
              '--color-tertiary',
              '#E2E8F0'
            );
          },
        },
      ],
    },
    {
      id: 'view-source',
      name: 'View source',
      icon: 'code',
      handler: () =>
        window.open('https://github.com/TAULO/TAULO', '_blank'),
    },
  ];

  return (
    <div>
      <hey-shorty data={shortyData}></hey-shorty>
    </div>
  );
};

export default Shorty;
