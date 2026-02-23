import {
  csharpSVG,
  cssSVG,
  dotnetcoreSVG,
  firebaseSVG,
  htmlSVG,
  javascriptSVG,
  nuxtSVG,
  openAPISVG,
  postgressqlSVG,
  reactSVG,
  typescriptSVG,
  unitySVG,
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
    'Athletica is a mobile-first workout tracker designed to help you take control of your fitness journey. Easily log workouts, exercises, monitor progress, and visualize your improvements over time. Built with customization at its core, Athletica adapts to your goals — so you can train smarter and stay motivated.',
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
      name: 'TypeScroåt',
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
  ],
  images: athleticaImages
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
      svg: firebaseSVG,
      name: 'Firebase',
    },
  ],
  images: athleticaImages,
};

const atWEBProject: IProject = {
  name: 'AT Portfolio',
  description:
    'A small personal portfolio website for my mother to showcase her artwork. The website is integrated with the Instagram API, automatically displaying her latest posts.',
  hrefCode: 'https://github.com/TAULO/ATWeb',
  techStack: [
    {
      svg: reactSVG,
      name: 'React',
    },
    {
      svg: javascriptSVG,
      name: 'JavaScript',
    },
    {
      svg: firebaseSVG,
      name: 'Firebase',
    },
  ],
  images: athleticaImages,
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
  images: athleticaImages,
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
  images: athleticaImages,
};

const adSkipperProject: IProject = {
  name: 'AD Skipper',
  description:
    'A Chrome Extension detect AD videos on difference websites and skip them automatically.',
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
  images: athleticaImages,
};

const cpGameJam2024Project: IProject = {
  name: 'CP GameJam 2024',
  description: '',
  hrefCode: 'https://github.com/BossenGames/CPGameJam2024',
  techStack: [
    {
      svg: unitySVG,
      name: 'Unity',
    },
    {
      svg: csharpSVG,
      name: 'C#',
    }
  ],
  images: athleticaImages,
}

export const projects: Array<IProject> = [
  athleticaProject,
  hvordanErVejretProject,
  biavlerProject,
  atWEBProject,
  gitSnakeProject,
  gitGraffitiProject,
  adSkipperProject,
  cpGameJam2024Project,
];
