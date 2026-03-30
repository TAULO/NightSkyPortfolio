import { githubSVG } from '../TechStack/TechSVG.tsx';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const githubHref = 'https://github.com/TAULO';
const linkedinHref = 'https://www.linkedin.com/in/thomas-taulo-529084128/';

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      className="decoration-tertiary mx-1 underline decoration-2 underline-offset-4 transition-all hover:underline-offset-8"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const Contact = () => {
  return (
    <div className={'flex flex-col gap-1 text-white leading-7'}>
      <p>
        If you want to present a fun opportunity, have questions or just want to
        have a chat, I'm always up to hearing from you.
      </p>
      <p>
        You can catch me over on
        <ExternalLink href={githubHref}>GitHub</ExternalLink>
        or<ExternalLink href={linkedinHref}>LinkedIn</ExternalLink>or you can
        send me a good old-fashioned email at
        <ExternalLink href="mailto:taulo@live.com">taulo@live.com</ExternalLink>
      </p>
      <div className={'my-8 flex justify-center gap-4'}>
        <a
          className={
            'hover:text-tertiary size-14 transition-colors duration-300 hover:cursor-pointer'
          }
          href={githubHref}
          target={'_blank'}
        >
          {githubSVG}
        </a>
        <a
          className={
            'hover:text-tertiary size-14 transition-colors duration-300 hover:cursor-pointer'
          }
          href={linkedinHref}
          target={'_blank'}
        >
          <svg
            viewBox="0 0 24 24"
            data-astro-cid-j7pv25f6=""
            className="footer-icon"
            astro-icon="simple-icons:linkedin"
          >
            <path
              fill="currentColor"
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
