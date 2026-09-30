import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

/** Standard dark hero for inner pages. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div
        className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative pb-16 pt-10 sm:pb-20 sm:pt-12">
        <Breadcrumbs items={crumbs} invert />
        <div className="mt-10 max-w-3xl">
          {eyebrow && <p className="eyebrow text-accent-300">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</div>}
          {children}
        </div>
      </div>
    </section>
  );
}
