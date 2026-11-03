/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/pandit-online' : '',
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
