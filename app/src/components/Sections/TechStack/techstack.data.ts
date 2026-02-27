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
  kibanaSVG,
  mysqlSVG,
  nginxSVG,
  nodejsSVG,
  nuxtSVG, openAPISVG,
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
} from './TechSVG.tsx';
import { ReactElement } from 'react';

export interface ITechSkill {
  name: string;
  svg: ReactElement;
}

export interface ITechStack {
  name: string;
  description: string;
  skills: ITechSkill[];
}

const frontendSkill: ITechStack = {
  name: 'Frontend',
  description: `
    Frontend development is where my passion truly lies.  
    I love combining creativity with technology to bring ideas to life.
  `,
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

const backendSkill: ITechStack = {
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

const environmentSkill: ITechStack = {
  name: 'Environment',
  description: `
      When it comes to development environments, I enjoy exploring new tools and 
      technologies — never getting too comfortable with just one. 
  `,
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
      name: 'Kibana',
      svg: kibanaSVG,
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
    {
      name: 'OpenAPI',
      svg: openAPISVG,
    },
  ],
};

const languagesSkill = {
  name: 'Languages',
  description: `I have experience with multiple programming languages across different domains, 
    from backend development with C# and Java, to frontend applications with TypeScript 
    and JavaScript, mobile development with dart, as well as scripting with Python.`,
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

export {
  frontendSkill,
  backendSkill,
  environmentSkill,
  languagesSkill,
}