#!/usr/bin/env node
/**
 * Pre-launch checklist.
 *   npm run check:launch
 *
 * Lists every placeholder still in the configuration, placeholder products,
 * unreviewed legal pages and missing environment variables.
 * Exits with code 1 while anything is outstanding, so it can gate a CI deploy.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const configDir = join(root, "src/config");
const issues = [];

function loadEnv() {
  const env = { ...process.env };
  for (const file of [".env", ".env.local", ".env.production", ".env.production.local"]) {
    const p = join(root, file);
    if (!existsSync(p)) continue;
    for (const line of readFileSync(p, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && m[2] && !(m[1] in process.env)) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
  return env;
}
const env = loadEnv();

// 1. Placeholders in config
const placeholderRe = /P\(\s*(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|`([^`]*)`)/g;
for (const file of readdirSync(configDir).filter((f) => f.endsWith(".ts"))) {
  const text = readFileSync(join(configDir, file), "utf8");
  const lines = text.split("\n");
  // Skip commented template blocks
  let inComment = false;
  lines.forEach((line, i) => {
    if (line.includes("/*")) inComment = true;
    if (!inComment && !line.trim().startsWith("//") && !line.trim().startsWith("*")) {
      let m;
      placeholderRe.lastIndex = 0;
      if (/P\(\s*$/.test(line)) {
        const next = lines[i + 1]?.trim().replace(/^["'`]|["'`],?$/g, "");
        issues.push(["Placeholder", `src/config/${file}:${i + 1}`, next ?? "(multi-line)"]);
      } else {
        while ((m = placeholderRe.exec(line))) {
          issues.push(["Placeholder", `src/config/${file}:${i + 1}`, m[1] ?? m[2] ?? m[3]]);
        }
      }
    }
    if (line.includes("*/")) inComment = false;
  });
}

// 2. Catalogue: which certification pages are indexable / have a direct offer
const courses = JSON.parse(readFileSync(join(root, "src/data/udemy-courses.json"), "utf8"));
const slugs = [...new Set(courses.map((c) => c.slug))];
const details = readFileSync(join(configDir, "certifications.ts"), "utf8").split("TEMPLATE")[0];
/** Returns the `{ … }` body for a slug in certifications.ts (brace-matched). */
const block = (slug) => {
  const m = new RegExp(`^  ["']?${slug.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}["']?\\s*:\\s*\\{`, "m").exec(details);
  if (!m) return "";
  let depth = 0;
  for (let i = m.index + m[0].length - 1; i < details.length; i++) {
    if (details[i] === "{") depth++;
    else if (details[i] === "}" && --depth === 0) return details.slice(m.index + m[0].length, i);
  }
  return "";
};
const withDescription = slugs.filter((s) => /description\s*:/.test(block(s).replace(/seo\s*:\s*\{[^}]*\}/, "")));
const key = (s) => s.toUpperCase().replace(/[^A-Z0-9]+/g, "_");
const withFree = slugs.filter((s) => /freeTestUrl\s*:/.test(block(s)) || env[`CLASSMARKER_FREE_TEST_URL__${key(s)}`]);
const withPremium = slugs.filter((s) => /premiumUrl\s*:/.test(block(s)) || env[`CLASSMARKER_PREMIUM_TEST_URL__${key(s)}`]);
const summary = [
  `${slugs.length} certification pages from ${courses.length} Udemy courses`,
  `${withDescription.length} indexable (have a description) — the other ${slugs.length - withDescription.length} are public but noindex`,
  `${withFree.length} with a free ClassMarker test, ${withPremium.length} with the paid simulator (others link to Udemy)`,
];
if (withDescription.length === 0)
  issues.push(["Content", "src/config/certifications.ts", "No certification has a description yet — no product page will be indexed by Google"]);

// 3. Legal pages
const legal = readFileSync(join(configDir, "legal.ts"), "utf8");
for (const m of legal.matchAll(/slug:\s*"(\w+)",[\s\S]*?reviewed:\s*(true|false)/g)) {
  if (m[2] === "false") issues.push(["LEGAL REVIEW REQUIRED", `/legal/${m[1]}`, "reviewed: false"]);
}

// 4. Reviews
if (/export const reviews: Review\[\] = \[\];/.test(readFileSync(join(configDir, "reviews.ts"), "utf8"))) {
  issues.push(["Optional", "src/config/reviews.ts", "No genuine reviews yet — placeholder cards are shown"]);
}

// 5. Environment
if (!env.NEXT_PUBLIC_SITE_URL || /example\.com|localhost/.test(env.NEXT_PUBLIC_SITE_URL))
  issues.push(["Environment", "NEXT_PUBLIC_SITE_URL", "Set to your production domain"]);
if (env.NEXT_PUBLIC_ALLOW_INDEXING !== "true")
  issues.push(["Environment", "NEXT_PUBLIC_ALLOW_INDEXING", 'Set to "true" on production only — site is currently noindex']);

// Output
const blocking = issues.filter(([t]) => t !== "Optional");
const width = Math.max(...issues.map(([t]) => t.length), 10);
console.log("\nCatalogue:\n  " + summary.join("\n  "));
console.log(`\nCertRamp launch check — ${blocking.length} blocking item(s), ${issues.length - blocking.length} optional\n`);
let last = "";
for (const [type, where, what] of issues.sort((a, b) => a[0].localeCompare(b[0]))) {
  if (type !== last) console.log("");
  last = type;
  console.log(`  ${type.padEnd(width)}  ${where}\n  ${"".padEnd(width)}  → ${what}`);
}
console.log("");
process.exit(blocking.length ? 1 : 0);
