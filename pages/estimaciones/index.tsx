import Head from 'next/head';
import { FC } from 'react';
import {
  MdOutlineLibraryAdd,
  MdOutlinePreview,
  MdOutlineFormatListBulleted,
} from 'react-icons/md';
import { ActionCard, ActionCardProps, Entrega } from '@/components';
import { UserLayout } from '@/layout';
import styles from '@/styles/pages/template.module.scss';

const ENLACES: ActionCardProps[] = [
  {
    title: 'Visualizar Estimaciones',
    Icon: MdOutlineFormatListBulleted,
    path: '/estimaciones/visualizar',
    actionName: 'Visitar',
    col: 1,
  },
];

const Estimaciones: FC = () => {
  return (
    <>
      <Head>
        <title>Cityworks - Estimaciones </title>
        <meta name="description" content="CityWorks, pagina de estimaciones" />
      </Head>
      <main className={styles.page}>
        <UserLayout title="Estimaciones">
          {ENLACES.map((actividad, idx) => (
            <ActionCard key={actividad.title + idx} {...actividad} />
          ))}
          <Entrega collapsed={false} last={false} />
        </UserLayout>
      </main>
    </>
  );
};

export default Estimaciones;
