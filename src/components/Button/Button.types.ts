import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant,
};

export type ButtonVariant = 'primary' | 'secondary';

export type VariantMap = {
  [variant in ButtonVariant]: string;
};
