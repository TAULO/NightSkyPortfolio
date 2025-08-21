import NightSky from './components/NightSky/NightSky.jsx';
import Hero from './components/Hero';
import NavBar from './components/NavBar/NavBar.jsx';
import TechStack from './components/Sections/TechStack/TechStack.jsx';
import Experience from './components/Sections/Experience/Experience.jsx';
import Layout from './Layout/Layout.jsx';

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
