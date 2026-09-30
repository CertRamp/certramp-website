import Link from "next/link";
import { cn } from "@/lib/cn";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Icon } from "./Icon";

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail + matching BreadcrumbList structured data. */
export function Breadcrumbs({ items, invert, className }: { items: Crumb[]; invert?: boolean; className?: string }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={invert ? "text-white/90" : "text-ink"}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={c.path}
                      className={cn("hover:underline", invert ? "text-white/60 hover:text-white" : "text-muted hover:text-ink")}
                    >
                      {c.name}
                    </Link>
                    <Icon name="chevron-down" className={cn("size-3.5 -rotate-90", invert ? "text-white/40" : "text-line-strong")} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
