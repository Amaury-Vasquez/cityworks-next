import { FC } from 'react';
import { Title } from '@/components';
import { FaObjectGroup } from 'react-icons/fa';
import { TbReport, TbCalendarDue } from 'react-icons/tb';
import { TfiWrite } from 'react-icons/tfi';
import { ActionCard, ActionCardProps } from './ActionCard';
import { Entrega } from './Entrega';
import styles from '@/styles/components/actividades.module.scss';
const { layoutActividades, actividadesLayout, first, last } = styles;

const ACTIVIDADES_SUPER_INTENDENTE: ActionCardProps[] = [
  {
    title: 'Catalogo de conceptos',
    Icon: FaObjectGroup,
    collapsed: false,
    path: '/',
    actionName: 'Ver',
    col: 1,
  },
  {
    title: 'Captura de estimaciones',
    Icon: TfiWrite,
    collapsed: false,
    path: '/',
    actionName: 'Capturar',
    col: 1,
  },
  {
    title: 'Todos los reportes',
    Icon: TbReport,
    collapsed: true,
    path: '/',
    actionName: 'Revisar',
    col: 2,
  },
];

export const SuperIntendente: FC = () => {
  return (
    <div className={layoutActividades}>
      <div className={first} />
      <div className={last}>
        <Title>Actividades: superintendente</Title>

        <div className={actividadesLayout}>
          {ACTIVIDADES_SUPER_INTENDENTE.map((actividad, idx) => (
            <ActionCard key={actividad.title + idx} {...actividad} />
          ))}
          <Entrega />
        </div>
      </div>
    </div>
  );
};
