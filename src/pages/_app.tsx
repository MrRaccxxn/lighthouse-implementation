import '@/styles/globals.css'
import { wagmiInstance } from '@/common/core/clients/wagmi'
import type { AppProps } from 'next/app'
import { WagmiConfig } from 'wagmi'

const wagmiClient = wagmiInstance();

export default function App({ Component, pageProps }: AppProps) {
  return <WagmiConfig client={wagmiClient}>
    <Component {...pageProps} />
  </WagmiConfig >
}
