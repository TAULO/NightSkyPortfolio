import './index.css';
import '@taulo1999/heyshorty';
import { IShorty } from '@taulo1999/heyshorty';
import { IProject, projects } from '../../Sections/Projects/project.data.ts';
import useScrollTo from '../../../hooks/useScrollTo.ts';
import { meteoriteShower } from '../../NightSky/NightSky.tsx';
import { useSocials } from '../../../hooks/useSocials.ts';
import { useHardcoverAPI } from '../../../hooks/useHardcoverAPI.ts';
import { renderToStaticMarkup } from 'react-dom/server';
import { SilentErrorBoundary } from './SilentErrorBoundary.ts';

interface IShortyProps {
  projectRef: React.RefObject<HTMLElement | null>;
  aboutMeRef: React.RefObject<HTMLElement | null>;
  techStackRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
  experienceRef: React.RefObject<HTMLElement | null>;
}

const projectPreview = (project: IProject): string => {
  const firstImage = project.images[0];

  return renderToStaticMarkup(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '4px',
      }}
      key={project.name}
    >
      {firstImage && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '160px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
          }}
        >
          <img
            src={firstImage.src}
            alt={firstImage.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        <div style={{ fontSize: '14px', fontWeight: 600 }}>{project.name}</div>

        <div
          style={{
            fontSize: '12px',
            opacity: 0.6,
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </div>

        <div
          style={{
            display: 'flex',
            gap: '6px',
            flexWrap: 'wrap',
            marginTop: '2px',
          }}
        >
          {project.techStack.map((tech, index) => (
            <div
              style={{
                height: '1rem',
                width: '1rem',
              }}
              key={index}
            >
              {tech.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BookPreview = ({
  title,
  author,
  rating,
  imageUrl,
}: {
  title: string;
  author: string;
  rating: number | null;
  imageUrl: string;
}) =>
  renderToStaticMarkup(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '4px',
      }}
    >
      {imageUrl && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '280px',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'scale-down',
              display: 'block',
            }}
          />
        </div>
      )}
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontSize: '13px', fontWeight: 500 }}>{title}</div>
        <div style={{ fontSize: '11px', opacity: 0.6 }}>{author}</div>
        {rating && (
          <div style={{ display: 'flex' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                style={{ width: '12px', height: '12px' }}
                viewBox={'0 0 16 16'}
              >
                <polygon
                  points={
                    '8,1 10.2,5.5 15,6.2 11.5,9.6 12.3,14.5 8,12.2 3.7,14.5 4.5,9.6 1,6.2 5.8,5.5'
                  }
                  fill={
                    i < Math.round(rating) ? '#EF9F27' : 'rgba(128,128,128,0.5)'
                  }
                />
              </svg>
            ))}
          </div>
        )}
      </div>
    </div>
  );

const palettePreview = (color: string) => {
  return renderToStaticMarkup(
    <div
      style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
      key={color}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          backgroundColor: color,
          boxShadow: `0 0 12px ${color}80`,
          border: '2px solid rgba(255,255,255,0.1)',
        }}
      />
      <span style={{ fontFamily: 'monospace', fontSize: '14px', opacity: 0.8 }}>
        {color}
      </span>
    </div>
  );
};

const colorPalette = [
  {
    name: 'Nebula',
    color: '#8B5CF6',
  },
  {
    name: 'Supernova',
    color: '#FFA500',
  },
  {
    name: 'Mars',
    color: '#FF6B00',
  },
  {
    name: 'Aurora',
    color: '#22D3EE',
  },
  {
    name: 'Starlight',
    color: '#E2E8F0',
  },
];

const Shorty = (refs: IShortyProps) => {
  const scrollTo = useScrollTo();
  const socials = useSocials();
  const books = useHardcoverAPI();
  const { wantToRead = [], currentlyReading = [], read = [] } = books ?? {};

  const projectsChildren: Array<IShorty> = projects.map((project) => {
    return {
      id: project.name,
      name: project.name,
      icon: 'commit',
      handler: () => window.open(project.hrefCode, '_blank'),
      preview: projectPreview(project),
    };
  });

  const booksChildren = (books: Array<any>): Array<IShorty> => {
    return books.map((book: any) => {
      try {
        const title = book.title;
        const author = book.author;
        const rating = book.rating ?? null;
        const imageUrl = book?.image?.url;

        return {
          id: title,
          name: title,
          icon: 'auto_stories',
          handler: () =>
            window.open(`https://hardcover.app/books/${book.slug}`, '_blank'),
          preview: BookPreview({
            title,
            author,
            rating,
            imageUrl: imageUrl ?? '',
          }),
        };
      } catch (e) {
        console.warn('[Shorty] Failed to build book entry:', e);
        return {
          id: book.title ?? 'unknown',
          name: book.title ?? 'Unknown book',
          icon: 'auto_stories',
          handler: () => {},
        };
      }
    });
  };

  const paletteChildren: Array<IShorty> = colorPalette.map((pallet) => {
    const { name, color } = pallet;
    return {
      id: name,
      name,
      icon: 'palette',
      handler: () => {
        document.documentElement.style.setProperty('--color-tertiary', color);
      },
      preview: palettePreview(color),
    };
  });

  const shortyData: Array<IShorty> = [
    {
      id: 'Projects',
      name: 'Projects',
      icon: 'folder_special',
      children: projectsChildren,
    },
    {
      id: 'Socials',
      name: 'Socials',
      icon: 'group_add',
      children: [
        {
          id: 'LinkedIn',
          name: 'LinkedIn',
          icon: 'hub',
          handler: () => window.open(socials.linkedin, '_blank'),
        },
        {
          id: 'Github',
          name: 'Github',
          icon: 'merge',
          handler: () => window.open(socials.github, '_blank'),
        },
        {
          id: 'Mail',
          name: 'Mail',
          icon: 'mail',
          handler: () => window.open(socials.mail, '_blank'),
        },
      ],
    },
    {
      id: 'Explore',
      name: 'Go to...',
      icon: 'menu',
      children: [
        {
          id: 'Experience',
          name: 'Experience',
          icon: 'work',
          handler: () => scrollTo(refs.experienceRef),
        },
        {
          id: 'Project',
          name: 'Project',
          icon: 'folder_special',
          handler: () => scrollTo(refs.projectRef),
        },
        {
          id: 'About Me',
          name: 'About Me',
          icon: 'person',
          handler: () => scrollTo(refs.aboutMeRef),
        },
        {
          id: 'Tech Stack',
          name: 'Tech Stack',
          icon: 'layers',
          handler: () => scrollTo(refs.techStackRef),
        },
        {
          id: 'Contact',
          name: 'Contact',
          icon: 'mail',
          handler: () => scrollTo(refs.contactRef),
        },
      ],
    },
    {
      id: 'Palette',
      name: 'Palette',
      icon: 'palette',
      children: paletteChildren,
    },
    {
      id: 'Bookshelf',
      name: 'My Bookshelf',
      icon: 'auto_stories',
      children: [
        {
          id: 'Currently Reading',
          name: 'Currently Reading',
          icon: 'book',
          children: booksChildren(currentlyReading),
        },
        {
          id: 'Want to Read',
          name: 'Want to Read',
          icon: 'book',
          children: booksChildren(wantToRead),
        },
        {
          id: 'Read',
          name: 'Read',
          icon: 'book',
          children: booksChildren(read),
        },
      ],
    },
    {
      id: 'Meteorite Shower',
      name: 'Meteorite Shower',
      icon: 'shower',
      handler: () => {
        meteoriteShower();
      },
    },
    {
      id: 'view-source',
      name: 'View source',
      icon: 'code',
      handler: () => window.open('https://github.com/TAULO/TAULO', '_blank'),
    },
  ];

  return (
    <SilentErrorBoundary>
      {/* @ts-ignore */}
      <hey-shorty
        data={shortyData}
        defaultBreadcrumbName={'Mission Control'}
      ></hey-shorty>
    </SilentErrorBoundary>
  );
};

export default Shorty;
