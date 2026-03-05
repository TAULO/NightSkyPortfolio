import CelestialBody from '../CelestialBody/CelestialBody.tsx';
import { useCelestialBodies } from '../../hooks/useCelestialBodies.tsx';

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
      <div
        id={'hero'}
        className={'relative flex h-screen w-full justify-center'}
      >
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
