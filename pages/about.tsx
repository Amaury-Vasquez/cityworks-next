import Head from 'next/head';
import { FC } from 'react';
import { Carousel } from '@/components';
import { ImageType } from '@/interfaces';
import styles from '@/styles/pages/about.module.scss';

const { aboutContent, aboutInfo } = styles;

const carouselImages: ImageType[] = [
  {
    src: 'https://i.imgur.com/vsGQ4m6.jpg',
    alt: 'Parque Cdmx en familia',
  },
  {
    src: 'https://imgur.com/TlBHXyP.jpg',
    alt: 'Parque los venados, Cdmx',
  },
  {
    src: 'https://i.imgur.com/dqGDpjj.jpg?1',
    alt: 'Bosque de Chapultepec, Cdmx',
  },
  {
    src: 'https://i.imgur.com/mmkI1QF.png',
    alt: 'Parque la Mexicana, Cdmx',
  },
];

const About: FC = () => {
  return (
    <>
      <Head>
        <title> CityWorks - ¿Quienes somos? </title>
        <meta
          name="description"
          content="CityWorks, herramienta tecnológica que permite a las
            autoridades encargadas de la construcción y mantenimiento de
            infraestructuras públicas"
        />
      </Head>
      <main className={aboutContent}>
        <Carousel images={carouselImages} />
        <article className={aboutInfo}>
          <h2> ¿Qué es CityWorks? </h2>
          <p>
            CityWorks es una herramienta tecnológica que permite a las
            autoridades encargadas de la construcción y mantenimiento de
            infraestructuras públicas administrar de manera eficiente y efectiva
            los recursos y procesos involucrados en proyectos de construcción y
            mantenimiento de obras públicas, como carreteras, puentes, edificios
            gubernamentales, sistemas de agua y alcantarillado, entre otros.
          </p>
        </article>
      </main>
    </>
  );
};

export default About;
