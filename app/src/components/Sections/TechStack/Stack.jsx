const Stack = (props) => {
  return (
    <>
      <div
        className={
          'border-border bg-secondary flex flex-col gap-5 rounded-2xl border-2 p-5 text-white'
        }
      >
        <div className={'flex flex-wrap gap-2'}>
          {props.skills?.map((skill, index) => (
            <div key={index} className={'size-5 sm:size-8'}>
              {skill.svg}
            </div>
          ))}
        </div>
        <h1 className={'text-3xl font-bold'}> {props.name} </h1>
        <p className={'font-light'}> {props.description} </p>
        <div className={'flex flex-wrap gap-2'}>
          <p className={'font-light'}>
            {props.skills?.map((skill) => skill.name).join(', ')}
          </p>
        </div>
      </div>
    </>
  );
};

export default Stack;
