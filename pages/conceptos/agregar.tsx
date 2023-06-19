// import { GetServerSideProps } from 'next';
import Head from 'next/head';
// import { USER_COOKIE_KEY } from '@/constants';
import styles from '@/styles/pages/template.module.scss';
// import Cookies from 'cookies';

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
      <main className={styles.page}></main>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const cookies = new Cookies(context.req, context.res);
//   const user = cookies.get(USER_COOKIE_KEY);

//   if (!user) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {},
//   };
// };
