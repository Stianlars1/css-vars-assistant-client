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
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.resolve(process.cwd(), "src")],
  },

  // Image optimization

  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    deviceSizes: [640, 768, 1024, 1280, 1920], // Add more breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Optimize for different sizes
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plugins.jetbrains.com",
        pathname: "/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "downloads.marketplace.jetbrains.com",
        pathname: "/**",
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
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ],
    },

    {
      source: "/static/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
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
