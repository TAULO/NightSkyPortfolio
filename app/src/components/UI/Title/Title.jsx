const Title = (props) => {
  return (
    <>
      <h1 className={'text-center text-4xl font-bold text-white sm:text-start'}>
        {props.title}
      </h1>
      ;
    </>
  );
};

export default Title;
