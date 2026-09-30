import Link from "next/link";
import { ClassMarkerEmbed } from "@/components/certification/ClassMarkerEmbed";
import { CertCta, UdemyCta } from "@/components/certification/CertCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import type { ResolvedCertification } from "@/lib/certifications";

/**
 * Dedicated CertRamp page that hosts a ClassMarker test (Option B: embed).
 * If the certification uses redirect delivery, the page offers a start button instead,
 * so these URLs are always valid.
 */
export function TestHostPage({ cert, kind }: { cert: ResolvedCertification; kind: "free" | "simulator" }) {
  const cta = kind === "free" ? cert.cta.freeTest : cert.cta.simulator;
  const title = kind === "free" ? `Free ${cert.name} Practice Test` : `${cert.name} Exam Simulator`;
  const path = kind === "free" ? `${cert.path}/free-test` : `${cert.path}/exam-simulator`;

  return (
    <div className="bg-surface">
      <div className="container-page py-10 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "Practice Exams", path: "/practice-exams" },
            { name: cert.name, path: cert.path },
            { name: kind === "free" ? "Free test" : "Exam simulator", path },
          ]}
        />
        <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
            <p className="mt-2 text-muted">
              {kind === "free"
                ? "Find your starting point. Your result appears when you finish."
                : "Work through the six tests in order. Each one is harder than the last."}
            </p>
          </div>
          <Link href={cert.path} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700">
            <Icon name="arrow-right" className="size-4 rotate-180" />
            Back to {cert.name} practice exams
          </Link>
        </div>

        <div className="mt-8">
          {cta.targetUrl && cta.mode === "embed" ? (
            <ClassMarkerEmbed src={cta.targetUrl} title={title} />
          ) : cta.targetUrl ? (
            <div className="rounded-[var(--radius-card)] border border-line bg-white p-10 text-center">
              <p className="text-muted">This test opens on CertRamp&apos;s exam platform.</p>
              <div className="mt-6 flex justify-center">
                <CertCta cert={cert} kind={kind} location="host_page" />
              </div>
            </div>
          ) : (
            <div className="rounded-[var(--radius-card)] border border-line bg-white p-10 text-center">
              <p className="font-display text-lg font-semibold text-ink">
                The {kind === "free" ? "free practice test" : "Exam Simulator"} for {cert.name} is not available yet.
              </p>
              <p className="mx-auto mt-2 max-w-lg text-muted">
                The same six-test ramp is available on Udemy in the meantime.
              </p>
              <div className="mt-6 flex justify-center">
                <UdemyCta cert={cert} variant="primary" location="host_page" />
              </div>
            </div>
          )}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted">
          Independent practice material by CertRamp Learning. Not an official {cert.vendorName} exam. See the{" "}
          <Link href={`${cert.path}#disclaimer-heading`} className="underline underline-offset-2 hover:text-ink">
            disclaimer
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
