import type { NextConfig } from "next";

/**
 * Static export: `npm run build` writes a complete static website to /out.
 * Any static host can serve it (IONOS Deploy Now, Netlify, Cloudflare Pages, Apache, …).
 * HTTP security headers live in public/.htaccess because static hosts don't run Next.js.
 */
const nextConfig: NextConfig = {
  output: "export",
  // Every page is a folder with index.html → /about/ works on any static web server.
  trailingSlash: true,
  // No image optimisation server on static hosting.
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
