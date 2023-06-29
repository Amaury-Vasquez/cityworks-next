import Head from 'next/head';
import { FC } from 'react';
import { MdOutlinePreview, MdOutlineFormatListBulleted } from 'react-icons/md';
import { ActionCard, ActionCardProps, Entrega } from '@/components';
import { UserLayout } from '@/layout';
import styles from '@/styles/pages/template.module.scss';

const ENLACES: ActionCardProps[] = [
  {
    title: 'Captura de incidencias',
    Icon: MdOutlineFormatListBulleted,
    path: '/incidencias/agregar',
    actionName: 'Capturar',
    col: 1,
  },
  {
    title: 'Todos las incidencias',
    Icon: MdOutlinePreview,
    path: '/incidencias/lista',
    actionName: 'Visitar',
    col: 2,
  },
];

const Reportes: FC = () => {
  return (
    <>
      <Head>
        <title>Cityworks - Incidencias </title>
        <meta name="description" content="CityWorks, pagina de incidencias" />
      </Head>
      <main className={styles.page}>
        <UserLayout title="Incidencias">
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
