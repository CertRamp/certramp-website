import type { MetadataRoute } from "next";
import { legalPages } from "@/config/legal";
import { absoluteUrl } from "@/config/site";
import { getAllCertifications, isIndexable } from "@/lib/certifications";

/**
 * sitemap.xml — generated from the certification catalogue.
 * Placeholder certifications and unreviewed legal pages are excluded automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const certs = getAllCertifications().filter(isIndexable);
  const latest = certs
    .map((c) => c.lastReviewed)
    .filter((d): d is string => Boolean(d))
    .sort()
    .at(-1);

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1, lastModified: latest },
    { url: absoluteUrl("/practice-exams"), changeFrequency: "weekly", priority: 0.9, lastModified: latest },
    { url: absoluteUrl("/how-it-works"), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.4 },
    { url: absoluteUrl("/faq"), changeFrequency: "monthly", priority: 0.5 },
  ];

  const certPages: MetadataRoute.Sitemap = certs.map((c) => ({
    url: absoluteUrl(c.path),
    ...(c.lastReviewed ? { lastModified: c.lastReviewed } : {}),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const legal: MetadataRoute.Sitemap = Object.values(legalPages)
    .filter((p) => p.reviewed)
    .map((p) => ({ url: absoluteUrl(`/legal/${p.slug}`), changeFrequency: "yearly", priority: 0.1 }));

  return [...staticPages, ...certPages, ...legal];
}
