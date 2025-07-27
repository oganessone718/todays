import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/npm/emoji-datasource-apple/**",
      },
    ],
  },
};

export default nextConfig;
