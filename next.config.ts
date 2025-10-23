import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/static" : "",
  assetPrefix: isProd ? "/static/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/static" : "",
  },
};

export default nextConfig;
