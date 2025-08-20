import Skill from './Skill.jsx';
import {
  bootstrapSVG, cssSVG,
  flutterSVG, htmlSVG,
  javascriptSVG,
  nuxtSVG,
  reactSVG,
  svelteSVG,
  tailwindSVG, typescriptSVG,
  vueSVG,
} from './SkillSVG.jsx';

const frontendSkill = {
  name: 'Frontend',
  description: 'HTML, CSS, JavaScript',
  skills: [
    {
      name: 'Vue',
      svg: vueSVG,
    },
    {
      name: 'React',
      svg: reactSVG,
    },
    {
      name: 'Svelte',
      svg: svelteSVG,
    },
    {
      name: 'Nuxt',
      svg: nuxtSVG,
    },
    {
      name: 'Flutter',
      svg: flutterSVG,
    },
    {
      name: 'Tailwind CSS',
      svg: tailwindSVG,
    },
    {
      name: 'Bootstrap',
      svg: bootstrapSVG,
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
      name: 'HTML5',
      svg: htmlSVG,
    },
    {
      name: 'CSS',
      svg: cssSVG,
    },
  ],
};

const backendSkill = {
  name: 'Backend',
  description: 'Node.js, Express.js, MongoDB',
  skills: [
    {
      name: 'Node.js',
      svg: 'Node.js',
    },
    {
      name: 'Express.js',
      svg: 'Express.js',
    },
  ],
};

const environmentSkill = {
  name: 'Environment',
  description: 'Git, GitHub, Docker',
  skills: [
    {
      name: 'Git',
      svg: 'Git',
    },
    {
      name: 'GitHub',
      svg: 'GitHub',
    },
  ],
};

const SkillSet = () => {
  return (
    <>
      <div className={'bg-primary p-20'}>
        <h1 className={'text-4xl font-bold text-white'}> Skill Set </h1>
        <Skill {...frontendSkill}></Skill>
        <Skill {...backendSkill}></Skill>
        <Skill {...environmentSkill}></Skill>
      </div>
    </>
  );
};

export default SkillSet;
