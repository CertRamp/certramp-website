import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { isPlaceholder, placeholderLabel, SHOW_PLACEHOLDERS } from "@/lib/placeholder";
import { Icon } from "./Icon";

/**
 * Visible marker for content that has not been provided yet.
 * Deliberately loud (amber, dashed) so it cannot be mistaken for real content.
 */
export function Placeholder({ label, block, className }: { label: string; block?: boolean; className?: string }) {
  return (
    <span
      data-placeholder
      className={cn(
        "rounded-md border border-dashed border-warn-600/50 bg-warn-50 px-1.5 py-0.5 [overflow-wrap:anywhere] font-sans text-[0.8125rem] font-medium leading-snug text-warn-600",
        block ? "flex items-start gap-1.5 px-3 py-2" : "inline",
        className,
      )}
    >
      {block && <Icon name="alert" className="mt-0.5 size-3.5 shrink-0" />}
      <span>
        <span className="font-semibold">Placeholder:</span> {label}
      </span>
    </span>
  );
}

/** Renders a value, or its placeholder badge if the value is P("..."). */
export function Val({ value, block, fallback }: { value: string | number | null | undefined; block?: boolean; fallback?: ReactNode }) {
  if (value === null || value === undefined || value === "") return <>{fallback ?? null}</>;
  if (isPlaceholder(value))
    return SHOW_PLACEHOLDERS ? <Placeholder label={placeholderLabel(value)} block={block} /> : <>{fallback ?? null}</>;
  return <>{value}</>;
}

/** Page-level banner, e.g. for placeholder certification pages. */
export function PlaceholderBanner({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div role="note" className="border-b border-warn-600/30 bg-warn-50">
      <div className="container-page flex items-start gap-3 py-3 text-sm text-warn-600">
        <Icon name="alert" className="mt-0.5 size-4 shrink-0" />
        <p>
          <strong className="font-semibold">{title}</strong> {children}
        </p>
      </div>
    </div>
  );
}
