/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: ''
      },
    ],
    minimumCacheTTL: 86400,
  }
};

export default nextConfig;
