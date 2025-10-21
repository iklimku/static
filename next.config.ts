import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Tambahan: biar cocok dengan GitHub Pages
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages ga support Image Optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cews.bmkg.go.id",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dataweb.bmkg.go.id",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },

  // ✅ Tambahan: abaikan error lint di build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Tambahan opsional: kalau repo kamu bukan di root domain
  // contoh: https://username.github.io/nama-repo/
  // uncomment baris di bawah dan ganti nama-repo sesuai repo kamu:
  // basePath: "/static",
  // assetPrefix: "/static/",
};

export default nextConfig;
