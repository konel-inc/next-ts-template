declare module '*.svg?inline' {
  import React from 'react'

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.mp4' {
  const src: string
  export default src
}

declare module '*.mov' {
  const src: string
  export default src
}

declare module '*.webm' {
  const src: string
  export default src
}

// glsl file import
declare module '*.glsl' {
  const value: string
  export default value
}
