const Socials = () => {
  return (
    <div
      id={'socials'}
      className={'animate-fade fixed bottom-0 right-8 z-50 hidden lg:block'}
      style={{
        animationDelay: '5s',
        animationFillMode: 'backwards',
        animationDuration: '1s',
      }}
    >
      <div className={'flex flex-col items-center gap-6'}>
        <a
          href={'https://www.linkedin.com/in/thomas-taulo-529084128/'}
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
          className={
            'hover:text-tertiary size-10 rounded-full p-2 text-white/50 transition-all duration-300 hover:-translate-y-1'
          }
        >
          <svg
            xmlns={'http://www.w3.org/2000/svg'}
            role={'img'}
            viewBox={'0 0 24 24'}
            fill={'none'}
            stroke={'currentColor'}
            strokeWidth={2}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
            <title>LinkedIn</title>
          </svg>
        </a>
        <a
          href={'https://github.com/TAULO'}
          aria-label={'GitHub'}
          target={'_blank'}
          rel={'noreferrer'}
          className={
            'hover:text-tertiary size-10 rounded-full p-2 text-white/50 transition-all duration-300 hover:-translate-y-1'
          }
        >
          <svg
            xmlns={'http://www.w3.org/2000/svg'}
            role={'img'}
            viewBox={'0 0 24 24'}
            fill={'none'}
            stroke={'currentColor'}
            strokeWidth={2}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
          >
            <title>{'GitHub'}</title>
            <path
              d={
                'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
              }
            />
          </svg>
        </a>
        <div className={'h-[90px] w-px bg-white/50'}></div>
      </div>
    </div>
  );
};

export default Socials;
