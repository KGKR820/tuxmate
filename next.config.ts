import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: (process.env.STATIC_EXPORT || process.env.CF_PAGES) ? 'export' : 'standalone',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
