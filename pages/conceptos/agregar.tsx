import Head from 'next/head';
import styles from '@/styles/pages/template.module.scss';
import { AgregarConcepto } from '@/modules';

export default function AgregarConceptos() {
  return (
    <>
      <Head>
        <title>Cityworks - Agregar Conceptos </title>
        <meta
          name="description"
          content="CityWorks, pagina de agregacion de conceptos"
        />
      </Head>
      <main className={styles.page}>
        <AgregarConcepto />
      </main>
    </>
  );
}
