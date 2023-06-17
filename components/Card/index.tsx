import { FC, ReactNode } from 'react';
import styles from '@/styles/components/card.module.scss';

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
