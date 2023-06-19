import Head from 'next/head';
import { FC } from 'react';
import { MdOutlineLibraryAdd, MdOutlinePreview } from 'react-icons/md';
import { ActionCard, ActionCardProps, Entrega } from '@/components';
import { UserLayout } from '@/layout';
import styles from '@/styles/pages/template.module.scss';

const ENLACES: ActionCardProps[] = [
  {
    title: 'Catalogo de conceptos',
    Icon: MdOutlineLibraryAdd,
    path: '/conceptos/agregar',
    actionName: 'Agregar concepto',
  },
  {
    title: 'Catalogo de conceptos',
    Icon: MdOutlinePreview,
    path: '/conceptos/catalogo',
    actionName: 'Ver catalogo',
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
          <Entrega collapsed={false} />
        </UserLayout>
      </main>
    </>
  );
};

export default Actividades;
