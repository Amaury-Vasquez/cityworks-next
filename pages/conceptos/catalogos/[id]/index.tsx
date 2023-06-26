import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { CATALOG_CONCEPTS_KEY } from '@/constants';
import { Catalogo } from '@/modules';
import { getCatalogConcepts } from '@/queries';
import styles from '@/styles/pages/template.module.scss';

export default function CatalogPage() {
  return (
    <>
      <Head>
        <title>Cityworks - Catalogo de Conceptos </title>
        <meta
          name="description"
          content="CityWorks, pagina de catalogos de conceptos"
        />
      </Head>
      <main className={styles.page}>
        <Catalogo />
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([CATALOG_CONCEPTS_KEY, id], () =>
    getCatalogConcepts(id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
