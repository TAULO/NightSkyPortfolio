interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const button = ({ text, ...props }: IButton) => {
  return (
    <button
      className={
        'border-border hover:bg-secondary/25 bg-secondary rounded border px-4 py-2 font-semibold text-white transition-colors duration-300 hover:cursor-pointer'
      }
      {...props}
    >
      {text}
    </button>
  );
};

export default button;
