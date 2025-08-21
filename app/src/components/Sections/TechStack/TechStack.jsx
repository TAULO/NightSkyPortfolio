import Stack from './Stack.jsx';
import {
  arduinoSVG,
  bitbucketSVG,
  bootstrapSVG,
  csharpSVG,
  cssSVG,
  dartSVG,
  dockerSVG,
  dotnetcoreSVG,
  electronSVG,
  expressSVG,
  firebaseSVG,
  flutterSVG,
  githubSVG,
  gitlabSVG,
  gitSVG,
  htmlSVG,
  intellijSVG,
  javascriptSVG,
  javaSVG,
  mysqlSVG,
  nginxSVG,
  nodejsSVG,
  nuxtSVG,
  postgressqlSVG,
  postmanSVG,
  pythonSVG,
  reactSVG,
  riderSVG,
  sassSVG,
  svelteSVG,
  swaggerSVG,
  tailwindSVG,
  typescriptSVG,
  unitySVG,
  visualStudioSVG,
  vitestSVG,
  vsCodeSVG,
  vueSVG,
  webStromSVG,
} from './TechSVG.jsx';
import Title from '../../UI/Title/Title.jsx';

const frontendSkill = {
  name: 'Frontend',
  description: '',
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
      name: 'Vitest',
      svg: vitestSVG,
    },
    {
      name: 'Flutter',
      svg: flutterSVG,
    },
    {
      name: 'Electron',
      svg: electronSVG,
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
      name: 'HTML5',
      svg: htmlSVG,
    },
    {
      name: 'CSS',
      svg: cssSVG,
    },
    {
      name: 'sass',
      svg: sassSVG,
    },
  ],
};

const backendSkill = {
  name: 'Backend',
  description: '',
  skills: [
    {
      name: 'Node.js',
      svg: nodejsSVG,
    },
    {
      name: 'Express.js',
      svg: expressSVG,
    },
    {
      name: '.NET',
      svg: dotnetcoreSVG,
    },
    {
      name: 'nginx',
      svg: nginxSVG,
    },
    {
      name: 'mySQL',
      svg: mysqlSVG,
    },
    {
      name: 'PostgreSQL',
      svg: postgressqlSVG,
    },
    {
      name: 'Firebase',
      svg: firebaseSVG,
    },
  ],
};

const environmentSkill = {
  name: 'Environment',
  description: '',
  skills: [
    {
      name: 'Docker',
      svg: dockerSVG,
    },
    {
      name: 'Git',
      svg: gitSVG,
    },
    {
      name: 'GitHub',
      svg: githubSVG,
    },
    {
      name: 'GitLab',
      svg: gitlabSVG,
    },
    {
      name: 'Bitbucket',
      svg: bitbucketSVG,
    },
    {
      name: 'Swagger',
      svg: swaggerSVG,
    },
    {
      name: 'Postman',
      svg: postmanSVG,
    },
    {
      name: 'Rider',
      svg: riderSVG,
    },
    {
      name: 'WebStorm',
      svg: webStromSVG,
    },
    {
      name: 'IntelliJ',
      svg: intellijSVG,
    },
    {
      name: 'VSCode',
      svg: vsCodeSVG,
    },
    {
      name: 'Visual Studio',
      svg: visualStudioSVG,
    },
    {
      name: 'Arduino',
      svg: arduinoSVG,
    },
    {
      name: 'Unity',
      svg: unitySVG,
    },
  ],
};

const languagesSkill = {
  name: 'Languages',
  description: '',
  skills: [
    {
      name: 'C#',
      svg: csharpSVG,
    },
    {
      name: 'Java',
      svg: javaSVG,
    },
    {
      name: 'Dart',
      svg: dartSVG,
    },
    {
      name: 'Python',
      svg: pythonSVG,
    },
    {
      name: 'TypeScript',
      svg: typescriptSVG,
    },
    {
      name: 'JavaScript',
      svg: javascriptSVG,
    },
  ],
};

const TechStack = () => {
  return (
    <>
      <div className={''}>
        <Title title={'Tech Stack'}></Title>
        <div className={'grid gap-5 md:grid-cols-2'}>
          <Stack {...frontendSkill}></Stack>
          <Stack {...backendSkill}></Stack>
          <Stack {...environmentSkill}></Stack>
          <Stack {...languagesSkill}></Stack>
        </div>
      </div>
    </>
  );
};

export default TechStack;
