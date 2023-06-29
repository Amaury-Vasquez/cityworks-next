import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';
import { ESTIMACION_LIST_KEY } from '@/constants';
import { ListaEstimaciones } from '@/modules';
import { getEstimacionesList } from '@/queries';
import styles from '@/styles/pages/template.module.scss';

export default function Estimaciones() {
  return (
    <>
      <Head>
        <title>Cityworks - Lista de </title>
        <meta
          name="description"
          content="CityWorks, pagina de lista de catalogos de estimaciones"
        />
      </Head>
      <main className={styles.page}>
        <ListaEstimaciones />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([ESTIMACION_LIST_KEY], getEstimacionesList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
