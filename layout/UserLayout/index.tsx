import { FC, ReactNode } from 'react';
import { Title } from '@/components';
import { UserPanel } from './UserPanel';
import styles from '@/styles/components/userLayout.module.scss';

const { layoutActividades, actividadesLayout, last } = styles;

interface UserLayoutProps {
  children: ReactNode;
  title: string;
}

export const UserLayout: FC<UserLayoutProps> = ({ children, title }) => (
  <div className={layoutActividades}>
    <UserPanel />
    <div className={last}>
      <Title>{title}</Title>
      <div className={actividadesLayout}>{children}</div>
    </div>
  </div>
);
