/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC minification to avoid potential hangs on some environments
  swcMinify: false,
  // Skip linting and type checking during build to isolate the hang issue
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
