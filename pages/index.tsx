import Head from 'next/head';
import Link from 'next/link';
import { Button, Image } from '@/components';
import styles from '@/styles/pages/home.module.scss';

const { homeContent, homeTitle, homeText, homeArticle, homeButton, homeImage } =
  styles;

export default function Home() {
  return (
    <>
      <Head>
        <title>CityWorks - Bienvenido nuevamente</title>
        <meta
          name="description"
          content="CityWorks, un servicio para la administración de obras públicas"
        />
      </Head>
      <main className={homeContent}>
        <article className={homeArticle}>
          <h1 className={homeTitle}>¡Bienvenido nuevamente!</h1>
          <p className={homeText}>
            CityWorks es un servicio que se encarga de la administración y
            gestión de obras públicas en la república Mexicana.
          </p>
          <Link className={homeButton} href="/auth" tabIndex={-1}>
            <Button large withShadow variant="gray">
              Iniciar sesión
            </Button>
          </Link>
        </article>
        <div className={homeImage}>
          <Image
            src="https://i.imgur.com/9PKFEAU.jpg"
            alt="Parque los Venados"
            caption="Parque los Venados. Obra pública en CDMX"
            shadow
            padding
          />
        </div>
      </main>
    </>
  );
}
