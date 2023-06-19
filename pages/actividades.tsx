import Head from 'next/head';
import { FC } from 'react';
import { SuperIntendente } from '@/modules/';
import styles from '@/styles/pages/template.module.scss';

const Actividades: FC = () => {
  return (
    <>
      <Head>
        <title>Cityworks - Actividades</title>
        <meta
          name="description"
          content="CityWorks, pagina de actividades de usuario"
        />
      </Head>
      <main className={styles.page}>
        <SuperIntendente />
      </main>
    </>
  );
};

export default Actividades;
