/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s.gravatar.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
