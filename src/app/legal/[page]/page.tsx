import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { Val } from "@/components/ui/Placeholder";
import { legalEntity, legalPages, type LegalPageConfig } from "@/config/legal";
import { buildMetadata } from "@/lib/seo";

type Params = { page: string };

export function generateStaticParams(): Params[] {
  return Object.keys(legalPages).map((page) => ({ page }));
}
export const dynamicParams = false;

function getPage(slug: string): LegalPageConfig | undefined {
  return legalPages[slug as LegalPageConfig["slug"]];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { page } = await params;
  const cfg = getPage(page);
  if (!cfg) return {};
  return buildMetadata({ title: cfg.title, description: cfg.description, path: `/legal/${cfg.slug}`, noindex: !cfg.reviewed });
}

const entityLabels: Record<keyof typeof legalEntity, string> = {
  name: "Name",
  address: "Address",
  email: "Email",
  phone: "Phone",
  representative: "Represented by",
  register: "Register entry",
  vatId: "VAT ID",
};

export default async function LegalPage({ params }: { params: Promise<Params> }) {
  const { page } = await params;
  const cfg = getPage(page);
  if (!cfg) notFound();

  return (
    <div className="bg-white">
      <div className="container-page max-w-3xl! py-12 sm:py-16">
        <Breadcrumbs items={[{ name: cfg.title, path: `/legal/${cfg.slug}` }]} />
        <h1 className="mt-8 text-4xl font-semibold">{cfg.title}</h1>

        {!cfg.reviewed && (
          <div role="alert" className="mt-8 rounded-2xl border-2 border-warn-600/60 bg-warn-50 p-6">
            <p className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-warn-600">
              <Icon name="alert" className="size-5" />
              Legal review required before publication
            </p>
            <p className="mt-3 text-sm leading-relaxed text-warn-600">
              This page is a placeholder. No legal text has been drafted. Obtain final text from a qualified lawyer or a
              reputable legal-text provider, add it in <code>src/config/legal.ts</code> and set{" "}
              <code>reviewed: true</code>.
            </p>
          </div>
        )}

        {cfg.slug === "imprint" && (
          <dl className="mt-10 divide-y divide-line rounded-2xl border border-line">
            {(Object.keys(legalEntity) as (keyof typeof legalEntity)[]).map((k) => (
              <div key={k} className="grid gap-1 p-4 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-semibold text-ink">{entityLabels[k]}</dt>
                <dd className="text-sm sm:col-span-2">
                  <Val value={legalEntity[k]} />
                </dd>
              </div>
            ))}
          </dl>
        )}

        {cfg.html ? (
          <div className="prose-legal mt-10" dangerouslySetInnerHTML={{ __html: cfg.html }} />
        ) : (
          <section className="mt-10" aria-labelledby="checklist-title">
            <h2 id="checklist-title" className="text-xl font-semibold">
              To prepare for this page
            </h2>
            <p className="mt-2 text-sm text-muted">A checklist for you and your legal advisor — not legal text.</p>
            <ul className="mt-5 space-y-3">
              {cfg.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.9375rem]">
                  <span className="mt-1 size-4 shrink-0 rounded border-2 border-line-strong" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
