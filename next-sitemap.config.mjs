/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://timthedev07.vercel.app",
  generateRobotsTxt: true,
};

export default config;
