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
    <div className={'flex flex-col gap-1 leading-7 text-white'}>
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
    </div>
  );
};
