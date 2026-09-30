import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-surface">
      <div className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">This page isn&apos;t on the ramp.</h1>
        <p className="mt-4 max-w-lg text-lg text-muted">
          The page you are looking for doesn&apos;t exist or has moved. Try the practice exam catalogue instead.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/practice-exams" icon="arrow-right">
            Explore Practice Exams
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
