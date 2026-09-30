import Link from "next/link";
import { categoryList } from "@/config/categories";
import type { ResolvedCertification } from "@/lib/certifications";
import { Icon } from "@/components/ui/Icon";

export function CategoryGrid({ certs }: { certs: ResolvedCertification[] }) {
  const cats = categoryList
    .map((cat) => ({ cat, count: certs.filter((c) => c.categoryId === cat.id).length }))
    .filter((x) => x.count > 0);
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cats.map(({ cat, count }) => (
        <li key={cat.id}>
          <Link
            href={`/practice-exams#${cat.id}`}
            className="group flex h-full items-start gap-4 rounded-[var(--radius-card)] border border-line bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-accent-200 hover:shadow-[var(--shadow-card)]"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white">
              <Icon name={cat.icon} className="size-6" />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                {cat.name}
                <Icon
                  name="arrow-right"
                  className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent-600"
                />
              </span>
              <span className="mt-1 block text-[0.9375rem] leading-relaxed text-muted">{cat.description}</span>
              <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                {count} {count === 1 ? "certification" : "certifications"}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
