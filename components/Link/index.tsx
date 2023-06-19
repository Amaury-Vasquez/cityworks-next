import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import styles from '@/styles/components/button.module.scss';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'gray';
  large?: boolean;
  withShadow?: boolean;
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: () => void;
}

const { button, primary, secondary, tertiary, largeButton, shadow, gray } =
  styles;

const variants = {
  ['primary']: primary,
  ['secondary']: secondary,
  ['tertiary']: tertiary,
  ['gray']: gray,
};

export const Link: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  large = false,
  withShadow = false,
  className,
  ...props
}) => {
  return (
    <NextLink
      className={clsx(
        button,
        variants[variant],
        large && largeButton,
        withShadow && shadow,
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
