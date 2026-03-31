import { forwardRef } from 'react';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border-border border-1 focus:border-tertiary w-full rounded bg-transparent px-4 py-2 text-white outline-none focus:ring-0 ${className ?? ''}`}
        {...props}
        name={'input'}
        autoComplete="off"
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
