import { Web3AuthProvider } from '@/common/context/web3AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Web3AuthProvider web3AuthNetwork={'testnet'} chain={'hyperspace_testnet'}>
    <Component {...pageProps} />
  </Web3AuthProvider >
}
