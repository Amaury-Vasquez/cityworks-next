import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '@/layout';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
