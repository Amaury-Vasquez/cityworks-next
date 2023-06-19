import clsx, { ClassValue } from 'clsx';
import { FC, ReactNode } from 'react';
import styles from '@/styles/components/titulo.module.scss';

interface TitleProps {
  children: ReactNode;
  className?: ClassValue;
}

export const Title: FC<TitleProps> = ({ children, className }) => (
  <h1 className={clsx(styles.title, className)}>{children}</h1>
);
