// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // App Router default is enabled in Next 13+ with /app
  experimental: {
    // Optional: optimize import of big UI libs automatically
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  images: {
    // If you plan to load external logos or speaker images, add remote patterns here.
    remotePatterns: [
      // { protocol: "https", hostname: "images.ctfassets.net" },
      // { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  headers: async () => {
    // Static cache headers for public assets
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|mp4)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
