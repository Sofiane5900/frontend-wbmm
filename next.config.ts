import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "avatars.cloudflare.steamstatic.com",
      "i.imgur.com",
      "i.hizliresim.com",
    ],
  },
};

export default nextConfig;
