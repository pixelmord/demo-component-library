import '../styles/globals.css';
// include styles from the ui package
import 'data-table/styles.css';
import { Toaster } from 'react-hot-toast';

import('../mocks');
import { SSRProvider } from 'data-table';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
      <Toaster />
    </>
  );
}
