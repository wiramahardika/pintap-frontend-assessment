import { FC, PropsWithChildren } from "react";
import { ButtonProps, VariantMap } from "./Button.types";

const VARIANT_MAP: VariantMap = {
  primary: 'text-white bg-rose-600',
  secondary: 'text-rose-600 bg-rose-50',
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const variantClassName = VARIANT_MAP[variant];

  return (
    <button
      className={[
        'flex-none',
        'flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'p-1',
        variantClassName,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
