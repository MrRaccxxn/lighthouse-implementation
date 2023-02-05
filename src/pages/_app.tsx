import '@/styles/globals.css'
import { wagmiInstance } from '@/common/core/clients/wagmi'
import type { AppProps } from 'next/app'
import { WagmiConfig } from 'wagmi'
import Head from 'next/head';

const wagmiClient = wagmiInstance();

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <title>Soul-Sci</title>
      <link rel="canonical" href="http://soulsci.com/" />
      <link rel="icon" type="image/png" href="/assets/logo.png" sizes="8x8" />
    </Head>
    <WagmiConfig client={wagmiClient}>
      <Component {...pageProps} />
    </WagmiConfig >
  </>
}
