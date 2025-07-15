import type {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
  error?: boolean;
  helperText?: string;
  errorText?: string;
}

const Input = ({
  ref,
  helperText,
  error,
  type = 'text',
  errorText,
  ...otherProps
}: InputProps) => {
  return (
    <div dir="rtl" className="h-16 w-full">
      <input
        type={type}
        className={`mb-1 w-full rounded border ${error ? 'border-red-600 focus:ring-red-500' : 'border-gray-400'}  px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
        ref={ref}
        {...otherProps}
      />
      {helperText && !error && (
        <p className="px-4 text-xs text-gray-800">{helperText}</p>
      )}
      {errorText && error && (
        <p className="px-4 text-xs text-red-600">{errorText}</p>
      )}
    </div>
  );
};

export default Input;
