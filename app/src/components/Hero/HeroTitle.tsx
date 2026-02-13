const HeroTitle = () => {
  return (
    <>
      <div
        className={
          'flex flex-col gap-2 text-center text-3xl font-extrabold text-white sm:text-6xl'
        }
      >
        {/*<h1>Thomas Taulo</h1>*/}
        <div className={'grow'}>
          {'Thomas Taulo'.split('').map((letter, index) => (
            <span className={'transition-all hover:text-transparent'} key={index}>
              {letter}
            </span>
          ))}
        </div>
        <div className={'grow'}>
          {'Developer'.split('').map((letter, index) => (
            <span className={'transition-all duration-300 hover:text-transparent'} key={index}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroTitle;
