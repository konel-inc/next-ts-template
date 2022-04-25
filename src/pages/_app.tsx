import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
