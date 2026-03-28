const Hero = () => {
  return (
    <div id={'hero'} className={'relative flex h-screen w-full'}>
      <div className={'absolute left-[10%] top-[40%]'}>
        <div className={'flex flex-col gap-2'}>
          <p
            className={
              'animate-fade mb-2 font-mono text-sm tracking-widest text-white/25'
            }
            style={{
              animationDelay: '2.5s',
              animationFillMode: 'backwards',
              animationDuration: '3s',
            }}
          >
            01 // welcome
          </p>
          <h1
            className={'animate-fade text-3xl font-bold text-white sm:text-5xl'}
            style={{
              animationDelay: '3s',
              animationFillMode: 'backwards',
              animationDuration: '4s',
            }}
          >
            Hi, I'm Thomas
          </h1>
          <p
            className={'animate-fade text-lg text-white/40'}
            style={{
              animationDelay: '4s',
              animationFillMode: 'backwards',
              animationDuration: '2s',
            }}
          >
            Software developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
