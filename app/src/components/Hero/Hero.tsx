const Hero = () => {
  // const bodies = useCelestialBodies();
  // const sun = bodies?.sun;
  // const mercury = bodies?.mercury;
  // const earth = bodies?.earth;
  // const moon = bodies?.moon;
  // const uranus = bodies?.uranus;
  //
  // if (!sun || !mercury || !earth) return null;

  return (
    <>
      <div id={'hero'} className={'relative flex h-screen w-full'}>
        <div className={'absolute left-[10%] top-[40%]'}>
          <h1 className={'text-3xl font-bold text-white'}>HI! I'm Thomas</h1>
          <p className={'text-white/50'}>Developer</p>
        </div>
        {/*<CelestialBody body={sun}></CelestialBody>*/}
        {/*<CelestialBody body={mercury}></CelestialBody>*/}
        {/*<CelestialBody body={earth}></CelestialBody>*/}
        {/*<CelestialBody body={moon}></CelestialBody>*/}
        {/*<CelestialBody body={uranus}></CelestialBody>*/}
      </div>
    </>
  );
};

export default Hero;
