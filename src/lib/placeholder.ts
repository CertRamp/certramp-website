/**
 * Placeholder helpers.
 *
 * Any value that the business owner has not yet provided is written as
 * `P("description of what is needed")`. At runtime this becomes a tagged string
 * that the <Val /> component renders as a clearly visible amber placeholder
 * badge — so unfinished content can never silently look "real".
 *
 * `npm run check:launch` lists every remaining P(...) call before go-live.
 */

const PREFIX = "{{PLACEHOLDER:";
const SUFFIX = "}}";

export type Placeholder = `{{PLACEHOLDER:${string}}}`;

/** Mark a value as "still to be provided". */
export function P(label: string): Placeholder {
  return `${PREFIX}${label}${SUFFIX}` as Placeholder;
}

export function isPlaceholder(value: unknown): value is Placeholder {
  return typeof value === "string" && value.startsWith(PREFIX) && value.endsWith(SUFFIX);
}

export function placeholderLabel(value: string): string {
  return value.slice(PREFIX.length, -SUFFIX.length).trim();
}

/** Returns the value if it is real content, otherwise `null`. */
export function real<T>(value: T | Placeholder | null | undefined): T | null {
  if (value === null || value === undefined || isPlaceholder(value)) return null;
  return value as T;
}

/** Plain-text version for places that cannot render a badge (meta tags, JSON-LD). */
export function plain(value: string | null | undefined, fallback = ""): string {
  if (!value) return fallback;
  return isPlaceholder(value) ? fallback : value;
}
