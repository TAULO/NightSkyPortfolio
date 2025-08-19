import HeroTitle from "./HeroTitle.jsx";
import NavBar from "../NavBar/NavBar.jsx";

const Hero = () => {
  return (
    <>
      <div className={"w-full h-screen flex justify-center"}>
        <div className={"self-center"}>
          <HeroTitle></HeroTitle>
        </div>
      </div>
    </>
  );
};

export default Hero;
