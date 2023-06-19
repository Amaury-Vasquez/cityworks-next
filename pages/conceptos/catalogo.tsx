import Head from 'next/head';
import styles from '@/styles/pages/template.module.scss';

export default function Catalogo() {
  return (
    <>
      <Head>
        <title>Cityworks - Catalogo de Conceptos </title>
      </Head>
      <main className={styles.page}></main>
    </>
  );
}
