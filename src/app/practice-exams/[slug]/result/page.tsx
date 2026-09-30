import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CertCta, UdemyCta } from "@/components/certification/CertCta";
import { ReadinessResult } from "@/components/certification/ReadinessResult";
import { RampChart } from "@/components/marketing/RampChart";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getAllCertifications, getCertification } from "@/lib/certifications";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllCertifications().map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) return {};
  return buildMetadata({
    title: `Your ${cert.name} Practice Test Result`,
    description: `See what your free ${cert.name} practice test score means and what to do next.`,
    path: `${cert.path}/result`,
    noindex: true,
  });
}

/**
 * Readiness result page — the step between the free test and the full simulator.
 * Set this URL as the ClassMarker "finish" redirect for the free test, e.g.
 * https://your-domain/practice-exams/<slug>/result?score=<percentage>
 */
export default async function ResultPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) notFound();

  return (
    <div className="bg-surface">
      <div className="container-page py-10 sm:py-14">
        <Breadcrumbs
          items={[
            { name: "Practice Exams", path: "/practice-exams" },
            { name: cert.name, path: cert.path },
            { name: "Your result", path: `${cert.path}/result` },
          ]}
        />
        <h1 className="mt-8 text-3xl font-semibold sm:text-4xl">Where you stand</h1>
        <div className="mt-8">
          <Suspense fallback={<div className="h-64 rounded-[1.5rem] bg-white" />}>
            <ReadinessResult certName={cert.name} />
          </Suspense>
        </div>

        <section aria-labelledby="next-title" className="mt-14 grid gap-8 rounded-[1.5rem] border border-line bg-white p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 id="next-title" className="mt-3 text-2xl font-semibold sm:text-3xl">
              Climb the full {cert.name} ramp
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              The free test shows your starting point. The CertRamp Exam Simulator takes you from foundation to real exam
              level — and beyond it.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-start">
              <CertCta cert={cert} kind="simulator" location="result_page" />
              <UdemyCta cert={cert} variant="secondary" location="result_page" />
            </div>
          </div>
          <div className="rounded-[1.25rem] bg-navy-900 p-6">
            <RampChart compact />
          </div>
        </section>
      </div>
    </div>
  );
}
