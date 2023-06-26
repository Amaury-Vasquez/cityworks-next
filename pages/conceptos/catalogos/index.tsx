import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';
import { CATALOG_LIST_KEY } from '@/constants';
import { ListaCatalogos } from '@/modules';
import { getCatalogList } from '@/queries/useCatalogList';
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
      <main className={styles.page}>
        <ListaCatalogos />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([CATALOG_LIST_KEY], getCatalogList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
