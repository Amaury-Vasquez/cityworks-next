import Head from 'next/head';
import styles from '@/styles/pages/template.module.scss';

export default function Catalogo() {
  return (
    <>
      <Head>
        <title>Cityworks - Catalogos de Conceptos </title>
        <meta
          name="description"
          content="CityWorks, pagina de lista de catalogos de conceptos"
        />
      </Head>
      <main className={styles.page}></main>
    </>
  );
}
