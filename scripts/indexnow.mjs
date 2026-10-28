#!/usr/bin/env node
/**
 * Submits new and changed URLs to IndexNow (Bing, Yandex, Seznam, Naver …).
 * Runs in GitHub Actions after a successful IONOS deploy (.github/workflows/indexnow.yaml).
 *
 * "Changed" = new URL in the live sitemap, or a different <lastmod> than at the last
 * submission. The previous state is kept in STATE_FILE (restored via actions/cache), so
 * unchanged pages are not resubmitted on every deploy. The first run submits everything.
 *
 * Env: SITE (default https://certramplearning.com), INDEXNOW_KEY, STATE_FILE.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const site = (process.env.SITE || "https://certramplearning.com").replace(/\/$/, "");
const key = process.env.INDEXNOW_KEY;
const stateFile = process.env.STATE_FILE || ".indexnow-state.json";
if (!key) throw new Error("INDEXNOW_KEY missing");

const host = new URL(site).host;
const keyLocation = `${site}/${key}.txt`;

// The key file must be live, otherwise IndexNow rejects the submission.
const keyRes = await fetch(keyLocation);
if (!keyRes.ok || (await keyRes.text()).trim() !== key) throw new Error(`Key file not served at ${keyLocation}`);

const xml = await (await fetch(`${site}/sitemap.xml`)).text();
const current = {};
for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const loc = m[1].match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
  const lastmod = m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? "";
  if (loc && new URL(loc).host === host) current[loc] = lastmod;
}
if (!Object.keys(current).length) throw new Error("Sitemap empty or unreadable");

const previous = existsSync(stateFile) ? JSON.parse(readFileSync(stateFile, "utf8")) : {};
const changed = Object.keys(current).filter((u) => previous[u] === undefined || previous[u] !== current[u]);
console.log(`sitemap: ${Object.keys(current).length} URLs, ${changed.length} new or changed`);

// IndexNow accepts up to 10,000 URLs per request.
const dryRun = Boolean(process.env.DRY_RUN);
for (let i = 0; !dryRun && i < changed.length; i += 10000) {
  const urlList = changed.slice(i, i + 10000);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
  });
  console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
  if (res.status !== 200 && res.status !== 202) throw new Error(await res.text());
}
for (const u of changed.slice(0, 20)) console.log(`  ${u}`);

writeFileSync(stateFile, JSON.stringify(current, null, 1));
