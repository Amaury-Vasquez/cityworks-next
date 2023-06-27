import Head from 'next/head';
import styles from '@/styles/pages/template.module.scss';

function Estimaciones() {
  return (
    <>
      <Head>
        <title>Cityworks - Estimaciones</title>
        <meta
          name="description"
          content="Cityworks - Pagina de visualizacion de Estimaciones"
        />
      </Head>
      <main className={styles.page}></main>
    </>
  );
}

export default Estimaciones;
