interface ITitleProps {
  title: string;
}

const Title = ({ title }: ITitleProps) => {
  return (
    <>
      <h1
        className={
          'mb-5 text-center text-4xl font-bold text-white sm:text-start'
        }
      >
        {title}
      </h1>
    </>
  );
};

export default Title;
