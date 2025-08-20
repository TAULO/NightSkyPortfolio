const Skill = (props) => {
  return (
    <>
      <div
        className={
          'border-border flex flex-col gap-5 rounded-2xl border-2 p-5 text-white'
        }
      >
        <div className={'flex gap-x-2'}>
          {props.skills?.map((skill, index) => (
            <div key={index} className={'size-10'}>
              {skill.svg}
            </div>
          ))}
        </div>
        <h1 className={'text-2xl font-bold'}> {props.name} </h1>
        <p className={'font-light'}> {props.description} </p>
        <div className={'flex gap-1'}>
          <p className={'font-light'}>
            {props.skills?.map((skill) => skill.name).join(', ')}
          </p>
        </div>
      </div>
    </>
  );
};

export default Skill;
