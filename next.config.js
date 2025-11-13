/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['www.segurosdelestado.com'],
    unoptimized: true
  }
}

module.exports = nextConfig

