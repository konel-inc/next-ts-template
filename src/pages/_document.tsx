import { GTM_ID } from 'lib/gtag'
import { Head, Main, Html, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='ja'>
      <Head />
      <body>
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height='0'
              width='0'
              title='GTM-noScript'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : (
          ''
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
