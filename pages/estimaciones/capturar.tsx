import Head from 'next/head';
import styles from '@/styles/pages/template.module.scss';
import { AgregarEstimacion } from '@/modules';

export default function AgregarConceptos() {
  return (
    <>
      <Head>
        <title>Cityworks - Capturar estimacion </title>
        <meta
          name="description"
          content="CityWorks, pagina de captura de estimaciones"
        />
      </Head>
      <main className={styles.page}>
        <AgregarEstimacion />
      </main>
    </>
  );
}
