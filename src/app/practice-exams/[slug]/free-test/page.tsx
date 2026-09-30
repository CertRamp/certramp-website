import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TestHostPage } from "@/components/certification/TestHostPage";
import { getAllCertifications, getCertification } from "@/lib/certifications";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

/**
 * Only built for certifications that actually have this test configured.
 * (Static export needs at least one page per route, so a single fallback
 * page is generated while nothing is configured.)
 */
export function generateStaticParams(): Params[] {
  const all = getAllCertifications();
  const configured = all.filter((cert) => Boolean(cert.cta.freeTest.href));
  return (configured.length ? configured : all.slice(0, 1)).map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) return {};
  // Test pages are functional, not landing pages: keep them out of the index.
  return buildMetadata({ title: `Free ${cert.name} Practice Test`, description: `Take a free ${cert.name} practice test and find your starting point.`, path: `${cert.path}/free-test`, noindex: true });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) notFound();
  return <TestHostPage cert={cert} kind="free" />;
}
