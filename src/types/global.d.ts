declare global {
  interface Window {
    // for GTM data-layer
    dataLayer: Record<string, unknown>[]
  }
}

export {}
