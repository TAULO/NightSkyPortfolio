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
      <div className={'flex flex-col items-center gap-4'}>
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
        <a
          href={'https://www.goodreads.com/user/show/170297255-thomas-taulo'}
          aria-label={'Goodreads'}
          target={'_blank'}
          rel={'noreferrer'}
          className={
            'hover:text-tertiary size-10 rounded-full p-2 text-white/50 transition-all duration-300 hover:-translate-y-1'
          }
        >
          <svg
            xmlns={'http://www.w3.org/2000/svg'}
            viewBox={'0 0 24 24'}
            fill={'none'}
          >
            <path
              d={'M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235'}
              stroke={'currentColor'}
              strokeWidth={1.5}
            />
            <path
              d={'M8 7H16'}
              stroke={'currentColor'}
              strokeWidth={1.5}
              strokeLinecap={'round'}
            />
            <path
              d={'M8 10.5H13'}
              stroke={'currentColor'}
              strokeWidth={1.5}
              strokeLinecap={'round'}
            />
            <path
              d={'M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12'}
              stroke={'currentColor'}
              strokeWidth={1.5}
              strokeLinecap={'round'}
            />
          </svg>
        </a>
        <div className={'h-[90px] w-px bg-white/50'}></div>
      </div>
    </div>
  );
};

export default Socials;
