import clsx from 'clsx';
import { FC } from 'react';
import { Card } from '@/components';
import styles from '@/styles/components/actividades.module.scss';

const { actividadesCard, collapsedCard, cardTitle, col3, entrega } = styles;

export const Entrega: FC = () => (
  <Card className={clsx(actividadesCard, collapsedCard, col3)}>
    <span className={cardTitle}>Proxima Entrega</span>
    <span className={entrega}> Junio 25</span>
    <span />
  </Card>
);
