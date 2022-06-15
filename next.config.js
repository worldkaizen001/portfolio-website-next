/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["alsoknownaszac.me", "http://alsoknownaszac.me"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
