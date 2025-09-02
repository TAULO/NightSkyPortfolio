import NightSky from './components/NightSky/NightSky.tsx';
import Hero from './components/Hero';
import NavBar from './components/NavBar/NavBar.tsx';
import TechStack from './components/Sections/TechStack/TechStack.tsx';
import Experience from './components/Sections/Experience/Experience.tsx';
import Layout from './Layout/Layout.tsx';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Layout>
        <TechStack></TechStack>
        <Experience></Experience>
      </Layout>
      <NightSky></NightSky>
    </>
  );
}

export default App;
