import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
        typedRoutes: false,
        serverMinification: true,
        serverActions: {
            bodySizeLimit: "200mb",
        },
        reactCompiler: true,
        viewTransition: true,
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.resolve(process.cwd(), "src")],
    },
};

export default nextConfig;
