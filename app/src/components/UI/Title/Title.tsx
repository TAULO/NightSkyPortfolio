interface ITitleProps {
  title: string;
}

const Title = ({ title }: ITitleProps) => {
  return (
    <>
      <h1
        className={
          'mb-5 text-center text-2xl font-bold text-white sm:text-start sm:text-4xl'
        }
      >
        {title}
      </h1>
    </>
  );
};

export default Title;
