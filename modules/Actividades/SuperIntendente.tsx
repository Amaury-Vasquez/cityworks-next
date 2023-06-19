import { FC } from 'react';
import { FaCalculator, FaObjectGroup } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';
import { ActionCard, ActionCardProps, Entrega } from '@/components';
import { UserLayout } from '@/layout';

const ACTIVIDADES_SUPER_INTENDENTE: ActionCardProps[] = [
  {
    title: 'Catalogo de conceptos',
    Icon: FaObjectGroup,
    collapsed: false,
    path: '/conceptos',
    actionName: 'Ver',
    col: 1,
  },
  {
    title: 'Captura de estimaciones',
    Icon: FaCalculator,
    collapsed: false,
    path: '/estimaciones',
    actionName: 'Capturar',
    col: 1,
  },
  {
    title: 'Todos los reportes',
    Icon: TbReport,
    collapsed: true,
    path: '/reportes',
    actionName: 'Revisar',
    col: 2,
  },
];

export const SuperIntendente: FC = () => {
  return (
    <UserLayout title="Actividades: superintendente">
      {ACTIVIDADES_SUPER_INTENDENTE.map((actividad, idx) => (
        <ActionCard key={actividad.title + idx} {...actividad} />
      ))}
      <Entrega />
    </UserLayout>
  );
};
