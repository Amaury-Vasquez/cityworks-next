import Head from 'next/head';
import { FC } from 'react';
import { LoginForm } from '@/components';
import styles from '@/styles/pages/auth.module.scss';

const Auth: FC = () => {
  return (
    <>
      <Head>
        <title>Cityworks - Autenticación de usuario</title>
        <meta
          name="description"
          content="CityWorks, pagina de autenticación de usuario"
        />
      </Head>
      <main className={styles.authContent}>
        <LoginForm />
      </main>
    </>
  );
};

export default Auth;
