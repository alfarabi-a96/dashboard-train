import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { CssBaseline } from '@mui/material';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
