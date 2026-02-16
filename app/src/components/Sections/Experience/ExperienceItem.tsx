import { IExperienceItem } from './Experience.tsx';

const experienceItem = (experiences: Array<IExperienceItem>) => {
  return experiences.map((item, index) => (
    <div
      className={'flex flex-col gap-x-2 sm:flex-row sm:gap-x-10 sm:gap-y-5'}
      key={index}
    >
      <div
        className={
          'flex flex-row items-center gap-3 sm:flex-col sm:items-center'
        }
      >
        <img
          className={'h-fit w-14 rounded-2xl sm:w-20'}
          src={item.image?.src}
          alt={item.image?.alt}
        />

        <div
          className={`${
            experiences.length > 1
              ? 'hidden sm:block sm:h-full sm:w-[1px] sm:rounded-full sm:bg-white'
              : ''
          }`}
        ></div>
      </div>

      <div className={'flex min-w-0 flex-col gap-4 text-white sm:gap-5'}>
        <div>
          <div
            className={
              'flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-x-2'
            }
          >
            <h1 className={'text-xl font-bold sm:text-2xl'}>{item.title}</h1>
            <p className={'break-words font-extralight sm:whitespace-nowrap'}>
              {item.place}
            </p>
          </div>

          <div className={'mt-1 flex flex-col gap-0.5'}>
            <p className={'text-sm sm:text-base'}>{item.role}</p>
            <p className={'text-sm sm:text-base'}>{item.date}</p>
          </div>
        </div>

        <div className={'flex flex-col gap-2 font-extralight sm:gap-0'}>
          {item.tasks.map((task, index) => (
            <p
              className={
                'relative pl-4 text-sm leading-relaxed before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-white before:shadow-[0_0_4px_1px_hsla(0,0%,100%,.3)] sm:text-base sm:leading-normal'
              }
              key={index}
            >
              {task}
            </p>
          ))}
        </div>

        <div className={'mb-1 flex flex-wrap gap-2'}>
          {item.stack.map((stack, index) => (
            <div key={index} className={'size-5 shrink-0'}>
              {stack.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
};

export default experienceItem;
