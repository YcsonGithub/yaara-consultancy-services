import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Keep Turbopack scoped to this app when a parent directory contains
  // unrelated lockfiles or restricted folders.
  turbopack: {
    root: process.cwd(),
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
