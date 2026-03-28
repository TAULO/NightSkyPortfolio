import { forwardRef } from 'react';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border-border w-full rounded px-4 py-2 text-white border-1 ${className ?? ''}`}
        {...props}
        name={'input'}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
