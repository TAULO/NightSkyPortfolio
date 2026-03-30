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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path
              d="M663.8 382.4c10.2 74.6-9.4 158-71.8 201.4-44.6 31-105.6 28.2-141.6 11.4-74.2-34.6-99-117.2-93.6-194.4 8.6-121.8 81.8-175.8 150.6-175 93.8-0.4 143.6 63.6 156.4 156.6zM960 176v672c0 61.8-50.2 112-112 112H176c-61.8 0-112-50.2-112-112V176c0-61.8 50.2-112 112-112h672c61.8 0 112 50.2 112 112zM724 626.4s-0.2-68-0.2-434.6h-58v80.6c-1.6 0.6-2.4-1-3.2-2.4-19.2-41.4-71.8-92.6-152-92-103.8 0.8-174.4 62.4-201.2 155.6-8.6 29.8-11.6 60.2-11 91.2 3.4 155.8 90.2 235.6 224.8 230.4 57.8-2.2 109-34 138-90.4 1-2 2.2-3.8 3.4-5.8 0.4 0.2 0.8 0.2 1.2 0.4 0.6 7.6 0.4 61.4 0.2 69-0.4 29.6-4 59-14.4 87-15.6 42-44.6 69.4-89 79-35.6 7.8-71.2 7.6-106.4-2.4-43-12.2-73-38-82.2-83.6-0.6-3.2-2.6-2.6-4.6-2.6h-53.6c1.6 21.2 6.4 40.6 17 58.4 48.4 81 165.4 97 256.4 74.8 99.8-24.6 134.6-109.8 134.8-212.6z"
              fill=""
            ></path>
          </svg>
        </a>
        <div className={'h-[90px] w-px bg-white/50'}></div>
      </div>
    </div>
  );
};

export default Socials;
