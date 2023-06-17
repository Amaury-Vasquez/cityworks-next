import { FC, ReactNode } from 'react';
import styles from '@/styles/components/titulo.module.scss';

interface TitleProps {
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
);
