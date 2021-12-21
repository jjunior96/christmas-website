import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Happy Christmas</title>
        <link rel="shorcut icon" href="/img/bg.png" />
        <link rel="apple-touch-icon" href="/img/bg.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Happy Christmas" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
