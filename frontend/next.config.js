/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/:path*',  // Dynamically map all routes
        destination: '/auth/:path*', // Redirect them to the auth folder
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/auth/:path*',
        destination: '/:path*',
        permanent: true, // Redirect users trying to access /auth/* back to home
      },
    ];
  },
};

module.exports = nextConfig;
