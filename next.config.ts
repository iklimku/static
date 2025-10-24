import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cews.bmkg.go.id", pathname: "/**" },
      { protocol: "https", hostname: "i0.wp.com", pathname: "/**" },
      { protocol: "https", hostname: "dataweb.bmkg.go.id", pathname: "/**" },
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
    ],
  },
  eslint: { ignoreDuringBuilds: true },

  // basePath: "/static",
  // assetPrefix: "/static/",
};

export default nextConfig;
