import {
  bootstrapSVG,
  csharpSVG,
  cssSVG,
  dotnetcoreSVG,
  firebaseSVG,
  htmlSVG,
  javascriptSVG,
  litSVG,
  nuxtSVG,
  openAPISVG,
  postgressqlSVG,
  reactSVG,
  tailwindSVG,
  typescriptSVG,
  vitestSVG,
  vueSVG,
} from '../TechStack/TechSVG.tsx';
import { JSX } from 'react';
import { useProjectAssets } from '../../../hooks/useProjectAssets.ts';

interface IProjectArchitecture {
  classDiagram?: string;
  architecture?: string;
}

export interface IProject {
  name: string;
  description: string;
  hrefCode: string;
  hrefLive?: string;
  techStack: Array<{ svg: JSX.Element; name: string }>;
  images: Array<{ src: string; alt: string }>;
  architecture?: IProjectArchitecture;
}

const athleticaImages = useProjectAssets('athletica');
const hvordanErVejretImages = useProjectAssets('hvordanervejret');
const gitSnakeImages = useProjectAssets('gitsnake');
const gitGraffitiImages = useProjectAssets('gitgraffiti');
const biavlerImages = useProjectAssets('biavler');
const shortyImages = useProjectAssets('shorty');
const skipAdsImages = useProjectAssets('adskipper');
const taskMiningImages = useProjectAssets('taskmining');

const athelticaArchitecture = `
  architecture-beta
    group frontend(cloud)[Frontend]
    group backend(cloud)[Backend]
    group infra(cloud)[Infrastructure]
    
    %% Frontend
    service nuxt(icon:nuxt)[Nuxt 3] in frontend
    service vue(icon:vue)[VueJS] in frontend
    service router(icon:vue)[Vue Router] in frontend
    service pinia(icon:vue)[Pinia Stores] in frontend
    service vitest(icon:vitest)[Vitest] in frontend
    
    service openapi(icon:openapi)[OpenAPI]
    
    %% Backend
    service db(icon:postgresql)[PostgreSQL] in backend
    service dotnet(icon:dotnet)[dotNET Aspire] in backend
    service keycloak(icon:openid)[Keycloak] in backend
    
    %% Infrastructure
    service docker(icon:docker)[Docker] in infra
    
   %% Frontend internal connections
    nuxt:L --> R:vue
    router:R --> L:vue
    pinia:R --> L:vue
    vitest:R --> L:vue

    %% Frontend to Contract
    nuxt:B --> T:openapi

    %% Contract to Backend
    openapi:R --> L:dotnet

    %% Backend internal connections
    dotnet:R --> L:db
    keycloak:B --> T:dotnet

    %% Auth - Nuxt to Keycloak
    nuxt:R --> L:keycloak

    %% Infra
    docker:L --> R:db
    docker:L --> R:keycloak
`;

const athleticaProject: IProject = {
  name: 'Athletica',
  description:
    "Athletica is a workout tracker i've co-built with my friend. Our primary goal of the project was to make design solution ourself, and try to experiment with new technologies. The project is still in beta, and we are actively working on improving the user experience and adding new features.",
  hrefCode: 'https://github.com/mahnac/Athletica',
  techStack: [
    {
      svg: vueSVG,
      name: 'VueJS',
    },
    {
      svg: nuxtSVG,
      name: 'Nuxt',
    },
    {
      svg: vitestSVG,
      name: 'Vitest',
    },
    {
      svg: typescriptSVG,
      name: 'TypeScript',
    },
    {
      svg: tailwindSVG,
      name: 'Tailwind CSS',
    },
    {
      svg: dotnetcoreSVG,
      name: '.NET Aspire',
    },
    {
      svg: csharpSVG,
      name: 'C#',
    },
    {
      svg: postgressqlSVG,
      name: 'PostgreSQL',
    },
    {
      svg: openAPISVG,
      name: 'OpenAPI',
    },
  ],
  images: athleticaImages,

  architecture: {
    architecture: athelticaArchitecture,
  },
};

const heyShortyProject: IProject = {
  name: 'HeyShorty',
  description:
    'A custom Global Search modal component. Try it out on this page with CTRL/CMD + K.',
  hrefCode: 'https://github.com/TAULO/hey-shorty',
  hrefLive: 'https://www.npmjs.com/settings/taulo1999/packages',
  techStack: [
    {
      svg: litSVG,
      name: 'Lit',
    },
    {
      svg: typescriptSVG,
      name: 'TypeScript',
    },
    {
      svg: htmlSVG,
      name: 'HTML',
    },
    {
      svg: cssSVG,
      name: 'CSS',
    },
  ],
  images: shortyImages,
};

const hvordanErVejretProject: IProject = {
  name: 'Hvordan Er Vejret',
  description:
    'I designed and developed a promotional website for the podcast Hvordan Er Vejret, created to help expand the show’s digital presence and reach a broader audience. The goal of the project was to create a central platform where listeners could easily access episodes, learn more about the hosts, and engage with the podcast across major streaming platforms.',
  hrefCode: 'https://github.com/TAULO/HvordanErVejret',
  hrefLive: 'https://hvordanervejret.dk/forside/',
  techStack: [
    {
      svg: vueSVG,
      name: 'VueJS',
    },
    {
      svg: typescriptSVG,
      name: 'TypeScript',
    },
    {
      svg: tailwindSVG,
      name: 'Tailwind CSS',
    },
  ],
  images: hvordanErVejretImages,
};

const biavlerProject: IProject = {
  name: "Odense Beekeepers' Association",
  description:
    "I developed a custom homepage for 'Ringe og Omegns Biavlerforening', a historic Danish beekeepers’ association that has existed since 1887 and is part of the national Danmarks Biavlerforening. The site serves as the association’s digital hub for members and potential future members, offering information about the organization’s purpose, activities, courses, recipes and galleries.",
  hrefCode: 'https://github.com/TAULO/BiavlerFrontApp',
  techStack: [
    {
      svg: vueSVG,
      name: 'VueJS',
    },
    {
      svg: javascriptSVG,
      name: 'JavaScript',
    },
    {
      svg: bootstrapSVG,
      name: 'Bootstrap',
    },
    {
      svg: firebaseSVG,
      name: 'Firebase',
    },
  ],
  images: biavlerImages,
};

const gitSnakeProject: IProject = {
  name: 'GitSnake',
  description:
    'A Chrome Extension tool to play Snake on your GitHub Contributions.',
  hrefCode: 'https://github.com/TAULO/GitSnake',
  techStack: [
    {
      svg: javascriptSVG,
      name: 'JavaScript',
    },
    {
      svg: htmlSVG,
      name: 'HTML',
    },
    {
      svg: cssSVG,
      name: 'CSS',
    },
  ],
  images: gitSnakeImages,
};

const gitGraffitiProject: IProject = {
  name: 'GitGraffiti',
  description:
    'A Chrome Extension tool to customize your GitHub Contributions to impress your friends.',
  hrefCode: 'https://github.com/TAULO/GitGraffiti',
  techStack: [
    {
      svg: javascriptSVG,
      name: 'JavaScript',
    },
  ],
  images: gitGraffitiImages,
};

const adSkipperProject: IProject = {
  name: 'YouTube and TV2 Ads Skipper',
  description:
    'I was tired that most ad-blocking extension did not work anymore, so I built a small chrome extension that listens to the YouTube player, and if an Ad is playing, skips it. Same story for TV2.',
  hrefCode: 'https://github.com/TAULO/ytp-hide-ads-extension',
  techStack: [
    {
      svg: javascriptSVG,
      name: 'JavaScript',
    },
    {
      svg: htmlSVG,
      name: 'HTML',
    },
    {
      svg: cssSVG,
      name: 'CSS',
    },
  ],
  images: skipAdsImages,
};

const taskMiningProject: IProject = {
  name: 'Task Mining',
  description: '',
  hrefCode: 'https://github.com/TAULO/TaskMiningReactApp',
  techStack: [
    {
      svg: reactSVG,
      name: 'react',
    },
    {
      svg: javascriptSVG,
      name: 'JavaScript',
    },
    {
      svg: csharpSVG,
      name: 'c#',
    },
    {
      svg: dotnetcoreSVG,
      name: '.NET Core',
    },
    {
      svg: tailwindSVG,
      name: 'tailwindcss',
    },
  ],
  images: taskMiningImages,
}

const projects: Array<IProject> = [
  athleticaProject,
  heyShortyProject,
  hvordanErVejretProject,
  biavlerProject,
  gitSnakeProject,
  gitGraffitiProject,
  adSkipperProject,
  taskMiningProject,
];

const allUniqTechStacks = projects
  .flatMap((project) => project.techStack)
  .filter(
    (value, index, self) =>
      self.findIndex((stack) => stack.name === value.name) === index
  );

export { projects, allUniqTechStacks };
