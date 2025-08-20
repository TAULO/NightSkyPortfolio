import HeroTitle from './HeroTitle.jsx';
import Button from './Button.jsx';

const Hero = () => {
  return (
    <>
      <div className={'flex h-screen w-full justify-center'}>
        {/*<div className={'mt-50'}>*/}
        {/*  <HeroTitle></HeroTitle>*/}
        {/*</div>*/}
        <div className={'self-center'}>
          <Button></Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
