interface ITitleProps {
  title: string;
  number?: string;
}

const Title = ({ title, number }: ITitleProps) => {
  return (
    <div className={'flex flex-col'}>
      {number && (
        <span
          className={
            'font-mono text-xs font-extrabold tracking-widest text-white/25'
          }
        >
          {number}
        </span>
      )}
      <h1 className={'text-2xl font-bold text-white sm:text-4xl'}>{title}</h1>
    </div>
  );
};

export default Title;
