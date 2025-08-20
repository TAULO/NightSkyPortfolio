const HeroTitle = () => {
  return (
    <>
      <div
        className={
          'flex flex-col gap-2 text-center text-3xl font-extrabold text-white sm:text-6xl'
        }
      >
        <h1>Thomas Taulo</h1>
        <h1
          className={
            'bg-gradient-to-t from-[#8e90cb] via-white/0 to-white bg-clip-text'
          }
        >
          Software Developer
        </h1>
      </div>
    </>
  );
};

export default HeroTitle;

