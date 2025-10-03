/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion']
  },
  images: {
    formats: ['image/webp', 'image/avif']
  }
}

module.exports = nextConfig
