import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'
import { GoogleAnalytics, GoogleTagManager } from 'lib/gtag'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleTagManager />
      {/* GAのみ使いたいとき： <GoogleAnalytics /> */}
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
