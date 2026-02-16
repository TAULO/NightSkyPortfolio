interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const button = ({ text, ...props }: IButton) => {
  return (
    <button
      className={
        'bg-secondary rounded px-4 py-2 font-semibold text-white hover:cursor-pointer'
      }
      {...props}
    >
      {text}
    </button>
  );
};

export default button;
