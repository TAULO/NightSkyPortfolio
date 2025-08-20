import NightSky from './components/NightSky/NightSky.jsx';
import Hero from './components/Hero';
import NavBar from './components/NavBar/NavBar.jsx';
import SkillSet from './components/Sections/SkillSet/SkillSet.jsx';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <SkillSet></SkillSet>
      <NightSky></NightSky>
    </>
  );
}

export default App;
