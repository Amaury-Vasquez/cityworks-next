import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { IconType } from 'react-icons/lib';
import { Button, Card } from '@/components';
import styles from '@/styles/components/actividades.module.scss';

const {
  actividadesCard,
  collapsedCard,
  cardTitle,
  col1,
  col2,
  col3,
  icon,
  buttonLink,
} = styles;

const COLUMNS = [col1, col2, col3];

export interface ActionCardProps {
  title: string;
  Icon?: IconType;
  path: string;
  actionName: string;
  collapsed: boolean;
  col: 1 | 2 | 3;
}

export const ActionCard: FC<ActionCardProps> = ({
  title,
  Icon,
  path,
  collapsed,
  col,
  actionName,
}) => (
  <Card
    className={clsx(
      actividadesCard,
      collapsed && collapsedCard,
      COLUMNS[col - 1]
    )}
  >
    <span className={cardTitle}>{title}</span>
    {Icon ? <Icon className={icon} /> : null}
    <Link className={buttonLink} href={path} tabIndex={-1}>
      <Button>{actionName}</Button>
    </Link>
  </Card>
);
