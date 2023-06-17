import clsx from 'clsx';
import { FC, HTMLProps, ReactNode } from 'react';

import styles from '@/styles/components/button.module.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'gray';
  large?: boolean;
  withShadow?: boolean;
  children: ReactNode;
  type?: ButtonTypes;
  className?: string;
}
export type ButtonTypes = 'button' | 'submit' | 'reset';

const { button, primary, secondary, tertiary, largeButton, shadow, gray } =
  styles;

const variants = {
  ['primary']: primary,
  ['secondary']: secondary,
  ['tertiary']: tertiary,
  ['gray']: gray,
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  large = false,
  withShadow = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        button,
        variants[variant],
        large && largeButton,
        withShadow && shadow
      )}
      {...props}
    >
      {children}
    </button>
  );
};
