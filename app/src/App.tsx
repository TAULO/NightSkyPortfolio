import NightSky from './components/NightSky/NightSky.tsx';
import Hero from './components/Hero';
import NavBar from './components/NavBar/NavBar.tsx';
import TechStack from './components/Sections/TechStack/TechStack.tsx';
import Experience from './components/Sections/Experience/Experience.tsx';
import { RefObject, useRef } from 'react';
import Title from './components/UI/Title/Title.tsx';
import GithubContribution from './components/UI/GithubContribution';
import Projects from './components/Sections/Projects/Projects.tsx';
import { ModalProvider } from './components/UI/Modal/ModalProvider.tsx';
import ModalProject from './components/UI/Modal/ModalProject.tsx';
import ModalGithub from './components/UI/Modal/ModalGithub.tsx';
import { Contact } from './components/Sections/Contact';
import '@taulo1999/heyshorty';
import { IShorty } from '@taulo1999/heyshorty';
import { projects } from './components/Sections/Projects/project.data.ts';

function scrollIntoView(element: RefObject<HTMLElement | null>) {
  if (!element.current) return;

  const offset = 40;
  window.scrollTo({
    top: element.current.offsetTop - offset,
    behavior: 'smooth',
  });
}

function App() {
  const techStackRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  console.log(projects);

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
      id: 'Experience',
      name: 'Experience',
      icon: 'work',
      handler: () => scrollIntoView(experienceRef),
    },
    {
      id: 'Projects',
      name: 'Projects...',
      icon: 'folder_special',
      children: projectsChildren,
      // handler: () => scrollIntoView(projectsRef),
    },
    {
      id: 'About Me',
      name: 'About Me',
      icon: 'person',
      handler: () => scrollIntoView(aboutMeRef),
    },
    {
      id: 'Tech Stack',
      name: 'Tech Stack',
      icon: 'layers',
      handler: () => scrollIntoView(techStackRef),
    },
    {
      id: 'Contact',
      name: 'Contact',
      icon: 'mail',
      handler: () => scrollIntoView(contactRef),
    },
  ];

  return (
    <>
      <ModalProvider>
        <NavBar
          techStackRef={techStackRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          aboutMeRef={aboutMeRef}
          contactRef={contactRef}
        ></NavBar>
        <NightSky>
          <Hero></Hero>
          <section ref={experienceRef} id={'experience'}>
            <Experience></Experience>
          </section>
          <section ref={projectsRef} id={'projects'}>
            <Projects></Projects>
          </section>
          <section ref={aboutMeRef} id={'about-me'}>
            <div className={'flex flex-col'}>
              <Title title={'About Me'}></Title>
              <GithubContribution></GithubContribution>
            </div>
          </section>
          <section ref={techStackRef} id={'tech-stack'}>
            <TechStack></TechStack>
          </section>
          <section ref={contactRef} id={'contact'}>
            <div className={'h-120'}>
              <Title title={'Contact'}></Title>
              <Contact></Contact>
            </div>
          </section>
        </NightSky>
        <ModalProject modalId={'project-modal'}></ModalProject>
        <ModalGithub modalId={'github-modal'}></ModalGithub>
      </ModalProvider>
      {/*@ts-ignore*/}
      <hey-shorty data={shortyData}></hey-shorty>
    </>
  );
}

export default App;
