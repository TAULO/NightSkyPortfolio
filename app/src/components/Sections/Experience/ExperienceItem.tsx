import { IExperienceItem } from './Experience.tsx';

const experienceItem = (experiences: Array<IExperienceItem>) => {
  return experiences.map((item, index) => (
    <div className={'flex gap-x-10 gap-y-5'} key={index}>
      <div className={'flex flex-col items-center gap-3'}>
        <img
          className={'h-fit w-20 rounded-2xl'}
          src={item.image?.src}
          alt={item.image?.alt}
        />
        <div
          className={`${experiences.length > 1 ? 'h-full w-[1px] rounded-full bg-white' : ''}`}
        ></div>
      </div>
      <div className={'flex flex-col gap-5 text-white'}>
        <div>
          <div className={'flex gap-x-2 sm:text-center'}>
            <h1 className={'text-2xl font-bold'}>{item.title}</h1>
            <p className={'font-extralight'}>{item.place}</p>
          </div>
          <div>
            <p>{item.role}</p>
            <p>{item.date}</p>
          </div>
        </div>
        <div className={'flex flex-col font-extralight'}>
          {item.tasks.map((task, index) => (
            <p
              className={
                'relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-white before:shadow-[0_0_4px_1px_hsla(0,0%,100%,.3)]'
              }
              key={index}
            >
              {task}
            </p>
          ))}
        </div>
        <div className={'mb-1 flex gap-2'}>
          {item.stack.map((stack, index) => (
            <div key={index} className={'size-5'}>
              {stack.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
};

export default experienceItem;
