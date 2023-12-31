import clsx from 'clsx';
import { FC } from 'react';
import { Card } from '@/components';
import styles from '@/styles/components/actividades.module.scss';

const { actividadesCard, collapsedCard, cardTitle, col3, entrega } = styles;

interface EntregaProps {
  collapsed?: boolean;
  last?: boolean;
}

export const Entrega: FC<EntregaProps> = ({
  collapsed = true,
  last = true,
}) => (
  <Card
    className={clsx(actividadesCard, collapsed && collapsedCard, last && col3)}
  >
    <span className={cardTitle}>Proxima Entrega</span>
    <span className={entrega}> Junio 25</span>
    <span />
  </Card>
);
