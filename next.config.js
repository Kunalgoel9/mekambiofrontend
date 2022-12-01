/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
})
const nextConfig =withPWA( {
  reactStrictMode: true,
  
  images: {
    domains: ["test.skg-walldorf.de"],
     unoptimized: true,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  // eslint: { ignoreDuringBuilds: true },

});

module.exports = nextConfig;
