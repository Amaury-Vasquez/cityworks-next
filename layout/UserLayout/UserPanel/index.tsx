import { FC } from 'react';
import { useUserAuthenticated } from '@/hooks';
import { Avatar } from './Avatar';
import { NavigationLink, NavigationLinkProps } from './NavigationLink';
import { FaTasks, FaCalculator, FaObjectGroup } from 'react-icons/fa';
import { TbReport } from 'react-icons/tb';
import { MdEditDocument, MdEvent } from 'react-icons/md';

const LINKS: NavigationLinkProps[] = [
  {
    path: '/actividades',
    Icon: FaTasks,
    text: 'Actividades',
  },
  {
    path: '/documentos',
    Icon: MdEditDocument,
    text: 'Documentos',
  },
  {
    path: '/estimaciones',
    Icon: FaCalculator,
    text: 'Estimaciones',
  },
  {
    path: '/reportes',
    Icon: TbReport,
    text: 'Reportes',
  },
  {
    path: '/conceptos',
    Icon: FaObjectGroup,
    text: 'Conceptos',
  },
  {
    path: '/incidencias',
    Icon: MdEvent,
    text: 'Incidencias',
  },
];

export const UserPanel: FC = () => {
  const { user } = useUserAuthenticated();
  if (!user) return null;
  return (
    <div className="w-full h-full border-r border-solid border-primary flex flex-col items-center space-y-4 p-10">
      <Avatar />
      {LINKS.map((link, idx) => (
        <NavigationLink key={link.path + idx} {...link} />
      ))}
    </div>
  );
};