import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect } from 'react'

export const GA_ID: string | false = process.env.NEXT_PUBLIC_GA_ID || false
export const GTM_ID: string | false = process.env.NEXT_PUBLIC_GTM_ID || false

export const pageview = (path: string) => {
  if (window && GA_ID)
    window.gtag('config', GA_ID, {
      page_path: path,
    })
}

export const usePageView = () => {
  const router = useRouter()
  useEffect(() => {
    if (!GA_ID) return
    const pageViewHandler = (path: string) => {
      pageview(path)
    }
    router.events.on('routeChangeComplete', pageViewHandler)
    return () => {
      router.events.off('routeChangeComplete', pageViewHandler)
    }
  }, [router.events])
}

export type GaEventArg = {
  action: string
  category: string
  label?: Record<string, string | number | boolean>
  value?: string
}

export const GaEvent = ({
  action,
  category,
  label,
  value = '',
}: GaEventArg) => {
  if (window && GA_ID)
    window.gtag('event', action, {
      event_category: category,
      event_label: label ? JSON.stringify(label) : '',
      value,
    })
}

export const GoogleAnalytics: React.FC = () => {
  return (
    <>
      {GA_ID ? (
        <>
          <Script
            id='gtag-src'
            defer
            strategy='afterInteractive'
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id='gtag-script'
            defer
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                 window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());    
                 gtag('config', '${GA_ID}');
               `,
            }}
          />
        </>
      ) : null}
    </>
  )
}

export const GoogleTagManager: React.FC = () => {
  return (
    <>
      {GTM_ID ? (
        <>
          <Script
            id='gtm-script'
            strategy='afterInteractive'
            defer
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}')
              `,
            }}
          />
        </>
      ) : null}
    </>
  )
}
