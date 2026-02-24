interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const button = ({ text, ...props }: IButton) => {
  return (
    <button
      className={
        'bg-secondary hover:bg-secondary/80 rounded px-4 py-2 font-semibold text-white transition-colors duration-300 hover:cursor-pointer'
      }
      {...props}
    >
      {text}
    </button>
  );
};

export default button;
