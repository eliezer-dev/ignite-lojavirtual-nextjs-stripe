import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true,
    },

    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "files.stripe.com",
                pathname: "/**",
            },
        ],
    },

};

export default nextConfig;
