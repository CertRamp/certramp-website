import type { FaqItem } from "@/config/types";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import { Val } from "./Placeholder";
import { isVisible } from "@/lib/placeholder";

/**
 * Accessible FAQ list built on native <details>/<summary>:
 * keyboard- and screen-reader-friendly with zero JavaScript,
 * and answers stay in the HTML for search engines.
 */
export function FaqList({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={cn("divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white", className)}>
      {items.filter((item) => isVisible(item.answer)).map((item) => (
        <details key={item.question} className="group px-5 sm:px-7 [&[open]_.chev]:rotate-180">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-base font-semibold text-ink sm:text-[1.0625rem]">
            <h3 className="text-[inherit] font-[inherit] tracking-normal">{item.question}</h3>
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-surface text-muted transition-colors group-hover:bg-accent-50 group-hover:text-accent-600">
              <Icon name="chevron-down" className="chev size-4 transition-transform duration-200" />
            </span>
          </summary>
          <div className="-mt-1 pb-6 pr-10 leading-relaxed text-muted">
            <Val value={item.answer} block />
          </div>
        </details>
      ))}
    </div>
  );
}
