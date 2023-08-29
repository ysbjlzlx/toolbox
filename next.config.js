/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  sw: 'service-worker.js',
  register: false,
});

module.exports = nextConfig;
