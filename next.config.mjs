/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "techakim.com",
      },
      {
        protocol: "https",
        hostname: "cdn.rareblocks.xyz",
      },
      {
        protocol: "https",
        hostname: "cdn.rareblocks.xyz",
      },
    ],
  },
};

export default nextConfig;
