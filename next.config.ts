import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: false,
    serverMinification: true,
    serverActions: {
      bodySizeLimit: "200mb",
    },
    reactCompiler: true,
    viewTransition: true,
    // Add optimizations for production
    optimizePackageImports: ["lucide-react", "gsap", "@gsap/react", "radix-ui"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(process.cwd(), "src")],
  },

  // Image optimization

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plugins.jetbrains.com",
        port: "",
      },
    ],
  },

  // Compression
  compress: true,

  // Security headers
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
  ],

  // Redirects for www consistency
  redirects: async () => [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "css-variables-assistant.dev",
        },
      ],
      destination: "https://www.css-variables-assistant.dev/:path*",
      permanent: true,
    },
  ],
};

export default nextConfig;
