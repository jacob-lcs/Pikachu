const withTM = require('next-transpile-modules')(['animation-editor', 'animation-render']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig)
