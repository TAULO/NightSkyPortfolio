import { IExperienceItem } from './experience.data';

const experienceItem = (experiences: Array<IExperienceItem>) => {
  return experiences.map((item, index) => (
    <div
      className={'flex flex-col gap-x-2 md:flex-row md:gap-x-10 md:gap-y-5'}
      key={index}
      data-aos={'zoom-in-up'}
      data-aos-anchor-placement={'bottom-bottom'}
    >
      <div
        className={
          'flex flex-row items-center gap-3 md:flex-col md:items-center'
        }
      >
        <img
          className={'hidden h-fit w-14 rounded-2xl md:block md:w-20'}
          src={item.image?.src}
          alt={item.image?.alt}
        />

        <div
          className={`${
            experiences.length > 1
              ? 'hidden md:block md:h-full md:w-[1px] md:rounded-full md:bg-white'
              : ''
          }`}
        ></div>
      </div>

      <div className={'flex min-w-0 flex-col gap-4 text-white md:gap-5'}>
        <div>
          <div className={'flex justify-between'}>
            <div
              className={
                'flex flex-col gap-1 md:flex-row md:items-baseline md:gap-x-2'
              }
            >
              <h1 className={'text-xl font-bold md:text-2xl'}>{item.title}</h1>
              <p className={'break-words md:whitespace-nowrap'}>
                {item.place}
              </p>
            </div>
            <img
              className={'h-fit w-14 rounded-2xl md:hidden'}
              src={item.image?.src}
              alt={item.image?.alt}
            />
          </div>

          <div className={'mt-1 flex flex-col gap-0.5'}>
            <p className={'text-sm text-white/50 md:text-base'}>{item.role}</p>
            <p className={'text-sm text-white/50 md:text-base'}>{item.date}</p>
          </div>
        </div>

        <div className={'flex flex-col gap-2 font-extralight md:gap-0'}>
          {item.tasks.map((task, index) => (
            <p
              className={
                'relative pl-4 text-sm leading-relaxed before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-white before:shadow-[0_0_4px_1px_hsla(0,0%,100%,.3)] md:text-base md:leading-normal'
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
