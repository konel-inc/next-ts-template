/** @type {import('next-sitemap').IConfig} */

/**
 * 設定方法
 * 環境変数に必ずStatic URLを表記する, ローカルはenv.localを生成し表記。
 * Env名：SITE_URL
 * SSGの場合（Default: out）
 * SSRの場合（Default: .next)
 */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://konel-dev.jp',
    generateRobotsTxt: true,
    outDir: 'public'
}  