import NightSky from './components/NightSky/NightSky.tsx';
import Hero from './components/Hero';
import NavBar from './components/NavBar/NavBar.tsx';
import TechStack from './components/Sections/TechStack/TechStack.tsx';
import Experience from './components/Sections/Experience/Experience.tsx';
import { useRef } from 'react';
import Title from './components/UI/Title/Title.tsx';
import GithubContribution from './components/UI/GithubContribution';
import Projects from './components/Sections/Projects/Projects.tsx';
import { ModalProvider } from './components/UI/Modal/ModalProvider.tsx';
import ModalProject from './components/UI/Modal/ModalProject.tsx';
import ModalGithub from './components/UI/Modal/ModalGithub.tsx';
import { Contact } from './components/Sections/Contact';

function App() {
  const techStackRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

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
    </>
  );
}

export default App;
