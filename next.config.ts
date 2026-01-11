import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: false, // turn off Strict Mode

  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },

  // Config for Turbopack (used with next dev --turbo)
  turbopack: {
    resolveAlias: {
      canvas: './empty-module.ts', // Turbopack requires a path to a file
    },
  },
};

export default nextConfig;
