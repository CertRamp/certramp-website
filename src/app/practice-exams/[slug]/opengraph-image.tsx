import { getAllCertifications, getCertification } from "@/lib/certifications";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "CertRamp practice exams";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllCertifications().map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cert = getCertification(slug);
  return renderOgImage({
    eyebrow: "Practice exams",
    title: `${cert?.name ?? "Certification"} Practice Exams`,
    subtitle: "Find out if you're really exam-ready.",
  });
}
