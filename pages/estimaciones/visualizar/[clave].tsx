import Head from 'next/head';
import styles from '@/styles/pages/template.module.scss';

function Estimacion() {
  return (
    <>
      <Head>
        <title>Cityworks - Visualizar Estimacion</title>
        <meta
          name="description"
          content="Cityworks - Pagina de visualizacion de Estimacion"
        />
      </Head>
      <main className={styles.page}></main>
    </>
  );
}

export default Estimacion;
