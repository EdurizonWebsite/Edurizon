/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'srv757671.hstgr.cloud',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // experimental:{
  //       esmExternals: 'loose', 
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
     
    return config;
  },
  async redirects() {
    return [
      {
        source: '/blog/:slug',
        destination: '/:slug',
        permanent: true,
      },
      {
        source: '/blog/:slug/',
        destination: '/:slug',
        permanent: true,
      },
      {
        source:'/blogs',
        destination:'/study-destinations?category=Destination',
        permanent:true,
      },
      {
        source: '/tambov-state-university.php',
        destination: '/study-destinations/study-mbbs-in-russia/tambov-state-university',
        permanent: true,
      },
      {
        source: '/northern-state-medical-university.php',
        destination: '/study-destinations/study-mbbs-in-russia/northern-state-medical-university',
        permanent: true,
      },
      {
        source: '/mbbs-in-nepal.php',
        destination: '/study-destinations/study-mbbs-in-nepal',
        permanent: true,
      },
      {
        source: '/kazan-federal-university.php',
        destination: '/study-destinations/study-mbbs-in-russia/kazan-federal-university',
        permanent: true,
      },
      {
        source: '/alexandria-university-faculty-of-medicine.php',
        destination: '/study-destinations/study-mbbs-in-egypt/alexandria-university-faculty-of-medicine',
        permanent: true,
      },
    ];
  },
 
};

module.exports = nextConfig;
