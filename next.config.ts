import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/constructor", destination: "/konstruktor" }];
  }
};

export default nextConfig;
