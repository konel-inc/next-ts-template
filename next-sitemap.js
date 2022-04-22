/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://konel-dev.jp',
    generateRobotsTxt: true,
    outDir: 'public' // 
}  