/** @type {import('next').NextConfig} */

const Production = () => {
  if (process.env.NODE_ENV == 'development') return false
  return true
}

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: Production(),
      ssr: true,
    },
    removeConsole: Production(),
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      oneOf: [
        {
          resourceQuery: /inline/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                dimensions: false,
              },
            },
          ],
        },
        {
          type: 'asset/resource',
          generator: {
            filename: 'static/chunks/[path][name].[hash][ext]',
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/chunks/[name].[ext]',
          },
        },
      ],
    })
    /**
     * @comment とりあえずglslify-loaderの設定を入れているが、必要に応じて設定してください
     * */
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    })

    return config
  },
}

module.exports = nextConfig
