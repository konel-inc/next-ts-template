/** @type {import('next-sitemap').IConfig} */

/**
 * 設定方法
 * 環境変数に必ずStatic URLを表記する, ローカルはenv.localを生成し表記。
 * Env名：SITE_URL
 */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://konel-dev.jp',
  generateRobotsTxt: true,
  /*SSG
   outDir: 'out',*/
}
