import React from 'react'
import { GoogleTagManager } from 'lib/gtag'

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <>
      <html lang='ja'>
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
          <main>{children}</main>
        </body>
        <GoogleTagManager />
      </html>
    </>
  )
}

export default RootLayout
