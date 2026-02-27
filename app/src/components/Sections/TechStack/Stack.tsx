import { ITechStack } from './techstack.data';
import Tooltip from '../../UI/Tooltip/Tooltip.tsx';

const Stack = (techStack: ITechStack) => {
  return (
    <>
      <div
        className={
          'border-border bg-secondary hover:border-border-hover flex flex-col gap-5 rounded-2xl border p-5 text-white'
        }
      >
        <div className={'flex flex-wrap gap-2'}>
          {techStack.skills.map((skill, index) => {
            const skillId = `skill-${skill.name}-${index}`;
            return (
              <Tooltip id={skillId} content={skill.name}>
                <div key={index} className={'size-5 sm:size-8'}>
                  {skill.svg}
                </div>
              </Tooltip>
            );
          })}
        </div>
        <h1 className={'text-2xl font-bold sm:text-3xl'}> {techStack.name} </h1>
        <p className={'grow'}> {techStack.description} </p>
      </div>
    </>
  );
};

export default Stack;
