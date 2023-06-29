import Head from 'next/head';
import { FC } from 'react';
import {
  MdOutlineCreate,
  MdOutlineLibraryAdd,
  MdOutlinePreview,
  MdOutlineFormatListBulleted,
} from 'react-icons/md';
import { ActionCard, ActionCardProps, Entrega } from '@/components';
import { UserLayout } from '@/layout';
import styles from '@/styles/pages/template.module.scss';

const ENLACES: ActionCardProps[] = [
  {
    title: 'Captura de reportes',
    Icon: MdOutlineFormatListBulleted,
    path: '/reportes/agregar',
    actionName: 'Capturar',
    col: 1,
  },
  {
    title: 'Todos los reportes',
    Icon: MdOutlinePreview,
    path: '/reportes/lista',
    actionName: 'Visitar',
    col: 2,
  },
];

const Reportes: FC = () => {
  return (
    <>
      <Head>
        <title>Cityworks - Reportes </title>
        <meta name="description" content="CityWorks, pagina de reportes" />
      </Head>
      <main className={styles.page}>
        <UserLayout title="Reportes">
          {ENLACES.map((actividad, idx) => (
            <ActionCard key={actividad.title + idx} {...actividad} />
          ))}
          <Entrega collapsed={false} />
        </UserLayout>
      </main>
    </>
  );
};

export default Reportes;
