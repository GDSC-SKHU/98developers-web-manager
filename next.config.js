/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com']
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://zikiza.duckdns.org/:path*',
      },
    ]
  },
}

module.exports = nextConfig
