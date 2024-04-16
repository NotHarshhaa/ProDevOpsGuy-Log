import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { RootLayout } from 'src/layouts';
import { queryClient } from 'src/libs/react-query';
import CustomHead from '../components/Head';
import { AppPropsWithLayout } from '../types';

function App({ Component, pageProps, router }: AppPropsWithLayout & { router: Router }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <CustomHead />
      <App Component={Component} pageProps={pageProps} router={router} />
    </>
  );
};

export default MyApp;
