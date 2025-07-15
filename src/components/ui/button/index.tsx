import type {ButtonHTMLAttributes, ReactNode} from 'react';

type ButtonVariants = 'outlined' | 'filled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>;
  children: ReactNode;
  variant?: ButtonVariants;
}

const VARIANTS_STYLES: {[key in ButtonVariants]: string} = {
  filled: 'bg-emerald-500 text-white hover:bg-emerald-600',
  outlined: "border border-emerald-500 text-emerald-500 hover:bg-emerald-50'",
};

export const Button = ({
  ref,
  children,
  variant = 'filled',
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      className={`${VARIANTS_STYLES[variant]} rounded-full px-9 py-2 transition duration-200`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
