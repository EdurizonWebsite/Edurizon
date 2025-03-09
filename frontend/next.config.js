const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },

  webpack(config) {
    // Enable SVG imports as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/signup",
        destination: "/auth/signup",
      },
      {
        source: "/dashboard",
        destination: "/counselor/dashboard",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/",
        permanent: true, // Redirects /auth to homepage
      },
      {
        source: "/admin",
        destination: "/dashboard",
        permanent: false, // Temporary redirect (can be updated)
      },
    ];
  },
});

module.exports = nextConfig;
