import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { GoogleAnalytics, GoogleTagManager } from 'lib/gtag'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleTagManager />
      {/* GAのみ使いたいとき： <GoogleAnalytics /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
