import { FC, ReactNode } from 'react';
import { Header } from './Header';
import styles from '@/styles/layout/layout.module.scss';

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      {children}
    </div>
  );
};
