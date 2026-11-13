/**
 * Search box for the glossary. Server-rendered; public/site.js filters the
 * entries ([data-glossary-text]) inside #glossary-list as the user types, so the
 * page needs no React hydration. Without JavaScript the full list stays visible
 * and the box is hidden.
 */
export function GlossarySearch({ label, placeholder, empty, countLabel }: { label: string; placeholder: string; empty: string; countLabel: string }) {
  return (
    <div data-glossary-search data-empty={empty} data-count={countLabel} hidden>
      <label htmlFor="glossary-q" className="block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id="glossary-q"
        type="search"
        autoComplete="off"
        placeholder={placeholder}
        className="mt-2 w-full max-w-md rounded-full border border-line-strong bg-white px-5 py-3 text-base outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
      />
      <p className="mt-2 text-sm text-muted" aria-live="polite" data-glossary-status />
    </div>
  );
}
