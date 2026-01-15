import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  trailingSlash: false,
  distDir: "out",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
