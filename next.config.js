/** @type {import('next').NextConfig} */

const Production = () => {
  if (process.env.NODE_ENV == 'development') return false
  return true
}

const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    /**
     * styled-componentsを利用の場合
     * styledComponents: true,
     * */
    removeConsole: Production(),
  },
  reactStrictMode: true,
}

module.exports = nextConfig
