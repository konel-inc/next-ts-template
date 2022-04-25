import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import GoogleAnalytics from 'lib/gtag'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
