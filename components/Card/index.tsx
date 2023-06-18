import clsx, { ClassValue } from 'clsx';
import { FC, ReactNode } from 'react';
import styles from '@/styles/components/card.module.scss';

interface CardProps {
  children: ReactNode;
  className?: ClassValue;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={clsx(styles.card, className)}>{children}</div>;
};
