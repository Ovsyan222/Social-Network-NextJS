import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLICK_API_URL: process.env.NEXT_PUBLICK_API_URL
  },
  images: {
    domains: ['fakestoreapi.com']
  }
};

export default nextConfig;
