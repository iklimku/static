import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cews.bmkg.go.id/**')]
  }
};

export default nextConfig;