import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

/**
 * robots.txt — crawling is only allowed on the production deployment
 * (NEXT_PUBLIC_ALLOW_INDEXING=true). Test/result pages are functional and excluded.
 */
export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.allowIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/practice-exams/*/free-test", "/practice-exams/*/exam-simulator", "/practice-exams/*/result"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}

/** Generated once at build time (static export). */
export const dynamic = "force-static";
