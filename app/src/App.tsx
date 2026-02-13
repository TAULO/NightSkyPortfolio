import NightSky from './components/NightSky/NightSky.tsx';
import Hero from './components/Hero';
import NavBar from './components/NavBar/NavBar.tsx';
import TechStack from './components/Sections/TechStack/TechStack.tsx';
import Experience from './components/Sections/Experience/Experience.tsx';
import Layout from './Layout/Layout.tsx';
import { useRef } from 'react';
import Title from './components/UI/Title/Title.tsx';
import GithubContribution from './components/UI/GithubContribution';

function App() {
  const techStackRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <>
      <NavBar
        techStackRef={techStackRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        aboutMeRef={aboutMeRef}
        contactRef={contactRef}
      ></NavBar>
      <Hero></Hero>
      <Layout>
        <section ref={techStackRef} id={'tech-stack'}>
          <TechStack></TechStack>
        </section>
        <section ref={experienceRef} id={'experience'}>
          <Experience></Experience>
        </section>
      </Layout>
      <Layout>
        <section ref={projectsRef} id={'projects'}>
          <div className={'h-100'}>
            <Title title={'Projects'}></Title>
          </div>
        </section>
        <section ref={aboutMeRef} id={'about-me'}>
          <div className={'h-200'}>
            <GithubContribution></GithubContribution>
          </div>
        </section>
        <section ref={contactRef} id={'contact'}>
          <div className={'h-100'}>
            <Title title={'Contact'}></Title>
          </div>
        </section>
      </Layout>
      <NightSky></NightSky>
    </>
  );
}

export default App;
