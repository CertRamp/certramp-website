import { absoluteUrl, siteConfig } from "@/config/site";
import type { FaqItem } from "@/config/types";
import { isPlaceholder, plain } from "./placeholder";
import type { ResolvedCertification } from "./certifications";

/**
 * schema.org builders. Only real (non-placeholder) values are emitted —
 * structured data must never contain unconfirmed claims.
 */

const orgId = `${siteConfig.url}/#organization`;

export function organizationSchema() {
  const sameAs = [siteConfig.social.linkedin, siteConfig.udemyProfileUrl].filter((v) => v && !isPlaceholder(v));
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.description,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": orgId },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Returns null when no FAQ item has a real answer yet. */
export function faqSchema(items: FaqItem[]) {
  const real = items.filter((i) => !isPlaceholder(i.answer));
  if (!real.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: real.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

/**
 * A certification practice-exam product (schema.org/Product + Offer), emitted
 * only for live products with a real price and checkout URL. No ratings or reviews are
 * emitted — add them only from genuine, verifiable review data.
 */
export function certificationProductSchema(cert: ResolvedCertification) {
  const url = absoluteUrl(cert.path);
  // Google requires offers, review or aggregateRating on Product. Until a real
  // price and checkout exist, emit nothing rather than an incomplete Product.
  if (!cert.price || !cert.cta.simulator.targetUrl || cert.status !== "live") return null;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: `${cert.name} Practice Exams — CertRamp Exam Simulator`,
    description: plain(cert.description, cert.seo.description),
    brand: { "@type": "Brand", name: siteConfig.name },
    category: "Certification exam preparation",
    url,
    offers: {
      "@type": "Offer",
      price: cert.price.amount.toFixed(2),
      priceCurrency: cert.price.currency,
      availability: "https://schema.org/InStock",
      url,
    },
  };
}
