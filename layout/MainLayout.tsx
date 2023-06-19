import { FC, ReactNode } from 'react';
import styles from '@/styles/layout/layout.module.scss';
import { Header } from './Header';

const protectedRoutes = ['/actividades', '/conceptos'];

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      {children}
    </div>
  );
};
