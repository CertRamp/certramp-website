import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

interface PageSeo {
  /** Page title without brand — the root layout template appends " | CertRamp Learning". */
  title: string;
  description: string;
  /** Site path, e.g. "/practice-exams". Used for the canonical URL. */
  path: string;
  /** Force noindex (placeholder pages, embed pages, legal drafts…). */
  noindex?: boolean;
  /** Use the title verbatim without the brand template. */
  absoluteTitle?: boolean;
  ogType?: "website" | "article";
}

/**
 * Consistent metadata for every page: canonical URL, Open Graph, Twitter card
 * and robots directives. Indexing is globally disabled unless
 * NEXT_PUBLIC_ALLOW_INDEXING=true, so previews never leak into search results.
 */
export function buildMetadata({ title, description, path, noindex, absoluteTitle, ogType = "website" }: PageSeo): Metadata {
  const index = siteConfig.allowIndexing && !noindex;
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
    openGraph: {
      type: ogType,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
