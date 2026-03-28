import {
  frontendSkill,
  backendSkill,
  environmentSkill,
  languagesSkill,
} from './techstack.data';
import ConstellationStack from './ConstellationStack.tsx';

const TechStack = () => {
  return (
    <>
      <div
        className={
          'grid grid-cols-1 place-items-center overflow-hidden sm:grid-cols-2 sm:gap-12 sm:p-8'
        }
      >
        <div id={'frontend'}>
          <ConstellationStack {...frontendSkill}></ConstellationStack>
        </div>
        <div id={'backend'} className={'self-end'}>
          <ConstellationStack {...backendSkill}></ConstellationStack>
        </div>
        <div id={'environment'} className={'place-self-end'}>
          <ConstellationStack {...environmentSkill}></ConstellationStack>
        </div>
        <div id={'languages'} className={'justify-self-end_'}>
          <ConstellationStack {...languagesSkill}></ConstellationStack>
        </div>
      </div>
    </>
  );
};

export default TechStack;
