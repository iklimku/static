import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://cews.bmkg.go.id/**'),
      // https://i0.wp.com/
      new URL('https://i0.wp.com/**'),
      new URL('https://dataweb.bmkg.go.id/**'),
    ]
  }
};

export default nextConfig;