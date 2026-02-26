import { ITechStack } from './techstack.data';

const Stack = (techStack: ITechStack) => {
  return (
    <>
      <div
        className={
          'border-border bg-secondary flex flex-col gap-5 rounded-2xl border p-5 text-white'
        }
      >
        <div className={'flex flex-wrap gap-2'}>
          {techStack.skills.map((skill, index) => (
            <div key={index} className={'size-5 sm:size-8'}>
              {skill.svg}
            </div>
          ))}
        </div>
        <h1 className={'sm:text-3xl text-2xl font-bold'}> {techStack.name} </h1>
        <p className={'grow'}> {techStack.description} </p>
        <div className={'flex flex-wrap gap-2'}>
          <p className={'font-extralight'}>
            {techStack.skills.map((skill) => skill.name).join(', ')}
          </p>
        </div>
      </div>
    </>
  );
};

export default Stack;
