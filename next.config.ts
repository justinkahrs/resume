// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/resume",
  assetPrefix: "/resume/",
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
