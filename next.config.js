// Debug check voor DATABASE_URL in production
if (process.env.NODE_ENV === "production") {
  console.log("✅ DATABASE_URL in production:", process.env.DATABASE_URL ?? "⛔ NIET GEDEFINIEERD");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ✅ Essentieel voor Vercel + App Router
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
