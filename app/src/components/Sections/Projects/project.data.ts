import {
  csharpSVG,
  dotnetcoreSVG,
  nuxtSVG,
  openAPISVG,
  postgressqlSVG,
  typescriptSVG,
  vueSVG,
} from '../TechStack/TechSVG.tsx';
import testImage from '../../../assets/static/projects/athletica/foo.webp';
import { JSX } from 'react';

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
  architecture?: IProjectArchitecture,
}

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
`

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
  images: [
    {
      src: testImage,
      alt: 'Athletica',
    },
  ],

  architecture: {
    architecture: athelticaArchitecture,
  }
};

export const projects: Array<IProject> = [athleticaProject];