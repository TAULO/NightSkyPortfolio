import {
  bootstrapSVG,
  csharpSVG,
  cssSVG,
  dotnetcoreSVG,
  firebaseSVG,
  htmlSVG,
  javascriptSVG,
  litSVG,
  nodejsSVG,
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
const kanplaAPIImages = useProjectAssets('kanplaapi');
const kanplaRaycastExtenstionImages = useProjectAssets('kanplaraycastextenstion');

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
    "Athletica is a workout tracker I co-built with a friend. The goal was simple: design everything ourselves and experiment with some new technologies we hadn't used before. It's still in beta, but we're actively improving the experience and adding features.",
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
    'A global search and command palette built as a web component with Lit and TypeScript. Published on npm as @taulo1999/heyshorty. Try it on this page with Ctrl/CMD + K.',
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

const kanplaAPIProject: IProject = {
  name: 'Kanpla API',
  description: 'TODO',
  hrefLive: 'https://www.npmjs.com/package/@taulo1999/kanpla-api',
  hrefCode: 'https://github.com/TAULO/kanpla-api',
  techStack: [
    {
      svg: typescriptSVG,
      name: 'TypeScript',
    },
    {
      name: 'NodeJS',
      svg: nodejsSVG,
    },
  ],
  images: kanplaAPIImages,
};

const kanplaRaycastExtenstionProject: IProject = {
  name: 'Kanpla Raycast Extenstion',
  description: 'TODO',
  hrefCode: 'https://github.com/TAULO/kanpla-raycast-extenstion',
  techStack: [
    {
      svg: typescriptSVG,
      name: 'TypeScript',
    },
    {
      svg: reactSVG,
      name: 'React',
    },
  ],
  images: kanplaRaycastExtenstionImages,
};

const hvordanErVejretProject: IProject = {
  name: 'Hvordan Er Vejret',
  description:
    'A close friend group of mine started a podcast and needed somewhere to promote it. I built them a simple landing page with Vue and Tailwind - nothing fancy, just clean and easy to update.',
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
    'Built for the Odense Beekeepers Association, where my brother was a member. He asked me if I could build a small community hub with an admin panel for managing recipes, events, galleries, and more. Vue, Firebase, and Bootstrap under the hood.',
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
    'A Chrome extension that turns your GitHub contribution graph into a game of Snake.',
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
    'A Chrome extension that lets you fake your GitHub contribution graph. For bragging, of course.',
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
    'I was tired that most ad-blocking extension was blocked by YT, so I built a small chrome extension that listens to the YouTube player, and if an Ad is playing, skips it. Same story for the TV2 Player.',
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
  description:
    'My thesis project at EAAA. At Sirenia we wanted to build data analyser tool, that analyzes user activity to identify automation opportunities - known in the industry as task mining.',
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
      name: 'C#',
    },
    {
      svg: dotnetcoreSVG,
      name: '.NET Framework',
    },
    {
      svg: tailwindSVG,
      name: 'Tailwind CSS',
    },
  ],
  images: taskMiningImages,
};

const projects: Array<IProject> = [
  athleticaProject,
  heyShortyProject,
  kanplaRaycastExtenstionProject,
  kanplaAPIProject,
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
      self.findIndex((stack) => stack.svg === value.svg) === index
  );

export { projects, allUniqTechStacks };
