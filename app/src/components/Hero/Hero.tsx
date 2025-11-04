import { githubSVG } from '../Sections/TechStack/TechSVG.tsx';
import HeroTitle from './HeroTitle.tsx';
import Button from './Button.tsx';

const Hero = () => {
  return (
    <>
      <div className={'flex h-screen w-full justify-center'}>
        <div className={'size-10 sm:top-15 absolute bottom-10 right-1/7 z-50 h-fit'}>
          {githubSVG}
        </div>
        <div className={'self-center flex flex-col gap-20'}>
          <HeroTitle></HeroTitle>
          <Button></Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
