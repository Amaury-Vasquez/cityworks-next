import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MainLayout } from '@/layout';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MainLayout>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </MainLayout>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
