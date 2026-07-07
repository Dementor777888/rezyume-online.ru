import { ReactNode, ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = yellow action button (CTA); secondary = brand green; outline/ghost are quiet. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
