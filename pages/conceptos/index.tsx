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
    title: 'Lista de conceptos',
    Icon: MdOutlineLibraryAdd,
    path: '/conceptos/lista',
    actionName: 'Ver conceptos',
    col: 1,
  },
  {
    title: 'Conceptos',
    Icon: MdOutlineFormatListBulleted,
    path: '/conceptos/agregar',
    actionName: 'Agregar conceptos',
    col: 1,
  },
  {
    title: 'Catalogos de conceptos',
    Icon: MdOutlinePreview,
    path: '/conceptos/catalogos',
    actionName: 'Ver catalogos',
    collapsed: true,
    col: 2,
  },
];

const Actividades: FC = () => {
  return (
    <>
      <Head>
        <title>Cityworks - Conceptos </title>
        <meta name="description" content="CityWorks, pagina de conceptos" />
      </Head>
      <main className={styles.page}>
        <UserLayout title="Conceptos">
          {ENLACES.map((actividad, idx) => (
            <ActionCard key={actividad.title + idx} {...actividad} />
          ))}
          <Entrega collapsed={true} />
        </UserLayout>
      </main>
    </>
  );
};

export default Actividades;
