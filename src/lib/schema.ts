import { about } from "@/config/about";
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
    founder: {
      "@type": "Person",
      name: about.founder.name,
      jobTitle: about.founder.role,
      ...(about.founder.photo ? { image: absoluteUrl(about.founder.photo) } : {}),
    },
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

/* ── Certification entity, guides and practice questions ─────────────────── */

/**
 * The certification itself as an entity (who issues it, official page).
 * Emitted only for certifications with verified `exam` data.
 */
export function credentialSchema(cert: ResolvedCertification) {
  if (!cert.exam) return null;
  return {
    "@type": "EducationalOccupationalCredential",
    "@id": `${absoluteUrl(cert.path)}#credential`,
    name: cert.exam.officialName ? `${cert.name} — ${cert.exam.officialName}` : cert.fullName,
    alternateName: cert.name,
    credentialCategory: "certification",
    recognizedBy: { "@type": "Organization", name: cert.vendorName },
    ...(cert.exam.officialCertificationUrl ? { sameAs: cert.exam.officialCertificationUrl } : {}),
  };
}

export function guideArticleSchema(opts: {
  cert: ResolvedCertification;
  path: string;
  headline: string;
  description: string;
  published: string;
  updated: string;
}) {
  const credential = credentialSchema(opts.cert);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(opts.path)}#article`,
    headline: opts.headline,
    description: opts.description,
    url: absoluteUrl(opts.path),
    datePublished: opts.published,
    dateModified: opts.updated,
    inLanguage: "en",
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    ...(credential ? { about: credential } : {}),
  };
}

/**
 * Practice questions as schema.org Quiz. Mirrors exactly what the page shows:
 * every option, the correct answer and its explanation.
 */
export function quizSchema(opts: {
  cert: ResolvedCertification;
  path: string;
  name: string;
  description: string;
  updated: string;
  questions: { id: string; question: string; options: { id: string; text: string }[]; answer: string; explanation: string }[];
}) {
  const credential = credentialSchema(opts.cert);
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "@id": `${url}#quiz`,
    name: opts.name,
    description: opts.description,
    url,
    dateModified: opts.updated,
    inLanguage: "en",
    educationalLevel: "Professional certification",
    learningResourceType: "Practice questions",
    isAccessibleForFree: true,
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    ...(credential ? { about: credential } : {}),
    hasPart: opts.questions.map((q) => {
      const correct = q.options.find((o) => o.id === q.answer)!;
      return {
        "@type": "Question",
        "@id": `${url}#${q.id}`,
        eduQuestionType: "Multiple choice",
        text: q.question,
        suggestedAnswer: q.options.filter((o) => o.id !== q.answer).map((o) => ({ "@type": "Answer", text: o.text })),
        acceptedAnswer: { "@type": "Answer", text: correct.text, answerExplanation: { "@type": "Comment", text: q.explanation } },
      };
    }),
  };
}
