/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async rewrites() {
    return {
      // afterFiles: checked after pages exist, so /agb /datenschutz /impressum /widerruf are NOT affected
      afterFiles: [
        // proxy any /:slug to demo.katanalabs.de/:slug
        {
          source: '/:slug',
          destination: 'https://demo.katanalabs.de/:slug',
        },
        // proxy sub-pages /:slug/:page and /:slug/:page/:sub
        {
          source: '/:slug/:page',
          destination: 'https://demo.katanalabs.de/:slug/:page',
        },
        {
          source: '/:slug/:page/:sub',
          destination: 'https://demo.katanalabs.de/:slug/:page/:sub',
        },
      ],
    }
  },
};
module.exports = nextConfig;
