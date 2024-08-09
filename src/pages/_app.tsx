import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { SidebarProvider } from '@/context/sidebar-context';

function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </SidebarProvider>
  );
}

export default App;
