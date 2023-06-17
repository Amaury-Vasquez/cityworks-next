import { FC } from 'react';
import { Card, Title } from '@/components';
import styles from '@/styles/components/actividades.module.scss';

const { layoutActividades, actividadesLayout, first, last } = styles;

export const SuperIntendente: FC = () => {
  return (
    <div className={layoutActividades}>
      <div className={first} />
      <div className={last}>
        <Title>Actividades: superintendente</Title>
        <div className={actividadesLayout}>
          <Card>
            <span>hola</span>
          </Card>
        </div>
      </div>
    </div>
  );
};
