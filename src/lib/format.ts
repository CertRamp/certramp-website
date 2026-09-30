import type { Price } from "@/config/types";

export function formatPrice(price: Price): string {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: price.amount % 1 === 0 ? 0 : 2,
  }).format(price.amount);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(iso));
}

/** Replace {name}-style tokens in copy templates. */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? `{${key}}`);
}
