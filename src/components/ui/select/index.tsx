import type {InputHTMLAttributes} from 'react';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  ref?: React.Ref<HTMLSelectElement>;
  label: string;
  options: (string | number)[];
  error?: boolean;
  errorText?: string;
}

export const Select = ({
  options,
  ref,
  error = false,
  errorText,
  label,
  ...otherProps
}: SelectProps) => {
  return (
    <div dir="rtl" className="h-16 w-full">
      <select
        className={`mb-1 w-full rounded border ${error ? 'border-red-600 focus:ring-red-500' : 'border-gray-400'}  focus:ring-emerald-500‍‍ px-4 py-2 focus:outline-none focus:ring-1`}
        ref={ref}
        {...otherProps}
      >
        <option hidden disabled selected value="">
          {label}
        </option>
        {options.map(value => (
          <option value={value}>{value}</option>
        ))}
      </select>
      {errorText && error && (
        <p className="px-4 text-xs text-red-600">{errorText}</p>
      )}
    </div>
  );
};
