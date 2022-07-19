/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/v1/products/:slug',
        destination: 'https://test-binar.herokuapp.com/v1/products/:slug',
      },
    ]
  },
}

module.exports = nextConfig
