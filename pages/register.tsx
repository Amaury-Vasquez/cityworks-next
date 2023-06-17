import { FC } from "react";
import Head from "next/head";
import { RegisterForm } from "@/components";
import styles from "@/styles/pages/auth.module.scss";

const Register: FC = () => {
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
        <RegisterForm />
      </main>
    </>
  );
};

export default Register;
