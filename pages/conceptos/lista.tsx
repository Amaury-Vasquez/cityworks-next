import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';
import { CONCEPT_LIST_KEY } from '@/constants';
import { ListaConceptos } from '@/modules';
import { getConceptList } from '@/queries/useConceptList';
import styles from '@/styles/pages/template.module.scss';

const Conceptos = () => {
  return (
    <>
      <Head>
        <title>Cityworks - Lista de conceptos </title>
        <meta
          name="description"
          content="CityWorks, pagina de lista de conceptos"
        />
      </Head>
      <main className={styles.page}>
        <ListaConceptos />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([CONCEPT_LIST_KEY], getConceptList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default Conceptos;
