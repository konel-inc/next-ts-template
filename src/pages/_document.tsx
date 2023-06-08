import { GTM_ID } from 'lib/gtag'
import Document, {
  Head,
  Main,
  Html,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import Script from 'next/script'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    }
  }

  render() {
    return (
      <Html>
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
}

export default MyDocument
