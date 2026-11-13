/**
 * Browser script for the readiness check (Baustein 6), bundled to
 * public/readiness.js by scripts/build-client.mjs. It works on the form that
 * src/components/blocks/ReadinessTool.tsx renders on the server: restores saved
 * entries from localStorage, validates them and renders the assessment into
 * #rc-out. The evaluation logic is shared with the server (src/lib/readiness.ts).
 */
import { bandTone, fieldClass, readinessCopy, type ReadinessCopy } from "@/components/blocks/readiness-copy";
import type { ReadinessClientConfig } from "@/components/blocks/ReadinessTool";
import {
  TESTS,
  bandFor,
  buildPlan,
  daysUntil,
  nextStep,
  overallReading,
  parseDomain,
  parsePercent,
  weakestDomains,
  type TestNo,
} from "@/lib/readiness";

type Saved = {
  scores: Record<string, string>;
  domains: Record<string, Record<string, string>>;
  notes: Record<string, string>;
  examDate: string;
};

const empty = (): Saved => ({ scores: {}, domains: {}, notes: {}, examDate: "" });

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function chart(scores: Partial<Record<TestNo, number>>, th: ReadinessClientConfig["thresholds"]): string {
  const W = 600;
  const H = 220;
  const pad = { l: 36, r: 8, t: 10, b: 28 };
  const cw = (W - pad.l - pad.r) / 6;
  const y = (v: number) => pad.t + (H - pad.t - pad.b) * (1 - v / 100);
  let svg = `<svg viewBox="0 0 ${W} ${H}" class="w-full" aria-hidden="true">`;
  for (const v of [0, 25, 50, 75, 100]) {
    svg += `<line x1="${pad.l}" x2="${W - pad.r}" y1="${y(v)}" y2="${y(v)}" class="stroke-line" stroke-width="1"/>`;
    svg += `<text x="${pad.l - 6}" y="${y(v) + 4}" text-anchor="end" class="fill-muted text-[11px]">${v}</text>`;
  }
  TESTS.forEach((n, i) => {
    const x = pad.l + i * cw;
    const s = scores[n];
    if (s !== undefined) {
      svg += `<rect x="${x + cw * 0.22}" width="${cw * 0.56}" y="${y(s)}" height="${y(0) - y(s)}" rx="4" class="fill-accent-500"/>`;
      // Value inside the bar top (clear of the dashed on-track mark); above it for very low bars.
      const inside = s >= 12;
      svg += `<text x="${x + cw / 2}" y="${inside ? y(s) + 16 : y(s) - 5}" text-anchor="middle" class="${inside ? "fill-white" : "fill-ink"} text-[12px] font-semibold">${Math.round(s)}</text>`;
    }
    const t = y(th[n].onTrack);
    svg += `<line x1="${x + cw * 0.12}" x2="${x + cw * 0.88}" y1="${t}" y2="${t}" class="stroke-navy-900" stroke-width="2" stroke-dasharray="5 4"/>`;
    svg += `<text x="${x + cw / 2}" y="${H - 8}" text-anchor="middle" class="fill-body text-[12px]">T${n}</text>`;
  });
  return `${svg}</svg>`;
}

function init() {
  const cfgEl = document.getElementById("rc-config");
  const out = document.getElementById("rc-out");
  if (!cfgEl || !out) return;
  const cfg = JSON.parse(cfgEl.textContent || "{}") as ReadinessClientConfig;
  const l: ReadinessCopy = readinessCopy[cfg.locale];
  const th = cfg.thresholds;
  const key = `certramp:readiness:${cfg.slug}`;
  // Domain fields are built here rather than on the server: they only work with this script anyway.
  document.querySelectorAll<HTMLElement>("[data-rc-domain-fields]").forEach((box) => {
    const n = Number(box.dataset.rcDomainFields);
    box.innerHTML = cfg.domains
      .map((d) => {
        const id = `rc-t${n}-${d.id}`;
        const total = d.perTest?.[n - 1];
        return `<div><label for="${id}" class="block text-sm text-body" lang="en">${esc(d.name)}${total ? `<span class="text-muted"> (/${total})</span>` : ""}</label><input id="${id}" data-rc="domain" data-test="${n}" data-domain="${esc(d.id)}" autocomplete="off" class="${fieldClass} mt-1" placeholder="${total ? `${Math.round(total * 0.75)}/${total}` : "15/20"}"><p id="${id}-err" hidden class="mt-1 text-xs text-warn-600"></p></div>`;
      })
      .join("");
  });
  const inputs = Array.from(document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[data-rc]"));
  const storageEl = document.querySelector("[data-rc-storage]");
  const statusEl = document.querySelector("[data-rc-status]");

  let s = empty();
  try {
    const raw = window.localStorage.getItem(key);
    if (raw) s = { ...empty(), ...(JSON.parse(raw) as Saved) };
  } catch {
    if (storageEl) storageEl.textContent = l.notSaved;
  }

  const valueOf = (el: HTMLElement) => {
    const t = el.dataset.test ?? "";
    switch (el.dataset.rc) {
      case "score":
        return s.scores[t] ?? "";
      case "domain":
        return s.domains[t]?.[el.dataset.domain ?? ""] ?? "";
      case "note":
        return s.notes[t] ?? "";
      default:
        return s.examDate;
    }
  };

  function fill() {
    for (const el of inputs) el.value = valueOf(el);
    document.querySelectorAll<HTMLDetailsElement>("[data-rc-domains]").forEach((d) => {
      const t = d.dataset.rcDomains ?? "";
      if (cfg.domains.some((x) => s.domains[t]?.[x.id])) d.open = true;
    });
  }

  function save() {
    try {
      window.localStorage.setItem(key, JSON.stringify(s));
      if (storageEl) storageEl.textContent = l.saved;
    } catch {
      if (storageEl) storageEl.textContent = l.notSaved;
    }
  }

  function setError(inputId: string, msg: string | null) {
    const input = document.getElementById(inputId);
    const p = document.getElementById(`${inputId}-err`);
    if (!input || !p) return;
    p.textContent = msg ?? "";
    p.hidden = !msg;
    if (msg) {
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", `${inputId}-err`);
    } else {
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
    }
  }

  function render() {
    const msg = (e: "format" | "range" | "total") => (e === "format" ? l.errFormat : e === "range" ? l.errRange : l.errTotal);
    const scores: Partial<Record<TestNo, number>> = {};
    const dom: Partial<Record<TestNo, Record<string, { correct: number; total: number } | null>>> = {};
    for (const n of TESTS) {
      const p = parsePercent(s.scores[n] ?? "");
      setError(`rc-t${n}`, p.ok ? null : msg(p.error));
      if (p.ok && p.value !== null) scores[n] = p.value;
      for (const d of cfg.domains) {
        const r = parseDomain(s.domains[n]?.[d.id] ?? "", d.perTest?.[n - 1]);
        setError(`rc-t${n}-${d.id}`, r.ok ? null : msg(r.error));
        if (r.ok && r.value) (dom[n] ??= {})[d.id] = r.value;
      }
    }

    const taken = TESTS.filter((n) => scores[n] !== undefined);
    const overall = overallReading(scores, th);
    const weak = weakestDomains(cfg.domains, dom);
    const next = nextStep(scores, th);
    const days = s.examDate ? daysUntil(s.examDate) : null;
    const remaining = TESTS.filter((n) => scores[n] === undefined && (taken.length === 0 || n > Math.max(...taken)));
    const focusNames = (weak.length ? weak.map((w) => w.name) : [...cfg.domains].sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0)).map((d) => d.name)).slice(0, 3);
    const plan = days !== null && days > 0 ? buildPlan(days, remaining, focusNames) : [];
    const card = "mt-6 rounded-[var(--radius-card)] border border-line bg-white";

    let h = "";
    if (taken.length === 0) {
      h += `<p class="mt-6 text-muted">${esc(l.noData)}</p>`;
    } else {
      if (overall.basis && overall.band) {
        const text = overall.examLevel ? l.reading4[overall.band] : l.readingOther(overall.basis, l.bands[overall.band]);
        h += `<div class="${card} p-6"><span class="inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${bandTone[overall.band]}">${esc(
          `${l.test} ${overall.basis}: ${l.bands[overall.band]}`,
        )}</span><p class="mt-3 leading-relaxed text-body">${esc(text)}</p></div>`;
      }

      h += `<figure class="${card} p-5"><figcaption class="text-sm font-semibold text-ink">${esc(l.chartTitle)}</figcaption><div class="mt-3">${chart(scores, th)}</div>`;
      h += `<p class="mt-2 flex items-center gap-2 text-xs text-muted"><svg width="24" height="6" aria-hidden="true"><line x1="0" x2="24" y1="3" y2="3" class="stroke-navy-900" stroke-width="2" stroke-dasharray="5 4"/></svg>${esc(l.threshold)}</p>`;
      h += `<table class="mt-4 w-full text-left text-sm"><caption class="mb-1 text-left text-xs font-semibold text-muted">${esc(l.chartAlt)}</caption><tbody>`;
      for (const n of TESTS) {
        const v = scores[n];
        h += `<tr class="border-t border-line"><th scope="row" class="py-1.5 pr-2 font-semibold text-ink">${l.test} ${n}</th>`;
        h += `<td class="py-1.5 pr-2 tabular-nums">${v === undefined ? `<span class="text-muted">${esc(l.notTaken)}</span>` : `${v.toLocaleString(cfg.locale)} %`}</td>`;
        h += `<td class="py-1.5 text-muted">${v === undefined ? "" : esc(`${l.bands[bandFor(n, v, th)]} (${l.threshold}: ${th[n].onTrack} %)`)}</td></tr>`;
      }
      h += `</tbody></table><ul class="mt-3 space-y-1 text-xs text-muted">${taken.map((n) => `<li>${esc(l.testNotes[n])}</li>`).join("")}</ul></figure>`;

      h += `<div class="${card} p-6"><h3 class="text-lg font-semibold">${esc(l.weakTitle)}</h3>`;
      if (weak.length === 0) h += `<p class="mt-2 text-sm text-muted">${esc(l.weakNone)}</p>`;
      else {
        const intro = cfg.domains.every((d) => d.weight === null) ? l.weakIntroEqual : l.weakIntro;
        h += `<p class="mt-1 text-sm text-muted">${esc(intro)}</p><ol class="mt-3 space-y-2">`;
        weak.forEach((w, i) => {
          const label = cfg.domains.find((d) => d.id === w.id)?.weightLabel ?? "–";
          h += `<li class="${i === 0 ? "font-semibold text-ink" : "text-body"}"><span lang="en">${esc(w.name)}</span><span class="block text-sm font-normal text-muted">${esc(
            l.weakRow(Math.round(w.accuracy * 100), w.correct, w.total, label),
          )}</span></li>`;
        });
        h += "</ol>";
      }
      h += "</div>";

      const steps: string[] = [];
      if (next.reviewFirst) steps.push(l.reviewFirst(next.reviewFirst));
      if (weak[0]) steps.push(l.focusFirst(weak[0].name));
      steps.push(next.test ? l.nextTest(next.test, l.testNames[next.test - 1]) : l.allDone);
      h += `<div class="mt-6 rounded-[var(--radius-card)] bg-navy-900 p-6 text-white"><h3 class="text-lg font-semibold text-white">${esc(l.nextTitle)}</h3><ul class="mt-2 space-y-1.5 text-white/80">${steps
        .map((x) => `<li>${esc(x)}</li>`)
        .join("")}</ul></div>`;
    }

    h += `<div class="${card} p-6"><h3 class="text-lg font-semibold">${esc(l.planTitle)}${
      days !== null && days > 0 ? `<span class="ml-2 text-sm font-normal text-muted">${esc(l.daysLeft(days))}</span>` : ""
    }</h3>`;
    if (days === null) h += `<p class="mt-2 text-sm text-muted">${esc(l.planNone)}</p>`;
    else if (days < 0) h += `<p class="mt-2 text-sm text-warn-600">${esc(l.planPast)}</p>`;
    else if (days === 0) h += `<p class="mt-2 text-sm text-body">${esc(l.planToday)}</p>`;
    else {
      if (days < remaining.length + 1) h += `<p class="mt-2 text-sm text-warn-600">${esc(l.planTight)}</p>`;
      h += `<ol class="mt-3 space-y-2 text-[0.9375rem]">`;
      for (const b of plan) {
        const text = b.final
          ? l.finalBlock
          : [b.tests.length ? l.takeTests(b.tests) : null, b.focus[0] ? l.review(b.focus[0]) : null].filter(Boolean).join(" · ");
        h += `<li class="flex gap-3 border-t border-line pt-2 first:border-0 first:pt-0"><span class="w-20 shrink-0 font-semibold text-ink">${
          b.unit === "week" ? l.week : l.day
        } ${b.index}</span><span class="text-body">${esc(text)}</span></li>`;
      }
      h += "</ol>";
    }
    h += "</div>";

    const noted = TESTS.filter((n) => s.notes[n]);
    if (noted.length) {
      h += `<div class="mt-6 hidden rounded-[var(--radius-card)] border border-line p-6 print:block"><h3 class="text-lg font-semibold">${esc(l.notes)}</h3>${noted
        .map((n) => `<p class="mt-2 whitespace-pre-line text-sm"><strong>${l.test} ${n}:</strong> ${esc(s.notes[n])}</p>`)
        .join("")}</div>`;
    }
    out!.innerHTML = h;
  }

  for (const el of inputs) {
    el.addEventListener("input", () => {
      const t = el.dataset.test ?? "";
      const v = el.value;
      if (el.dataset.rc === "score") s.scores = { ...s.scores, [t]: v };
      else if (el.dataset.rc === "domain") s.domains = { ...s.domains, [t]: { ...(s.domains[t] ?? {}), [el.dataset.domain ?? ""]: v } };
      else if (el.dataset.rc === "note") s.notes = { ...s.notes, [t]: v };
      else s.examDate = v;
      if (statusEl) statusEl.textContent = "";
      save();
      render();
    });
  }

  document.querySelector("[data-rc-reset]")?.addEventListener("click", () => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
    s = empty();
    fill();
    render();
    if (statusEl) statusEl.textContent = l.resetConfirm;
  });
  document.querySelector("[data-rc-print]")?.addEventListener("click", () => window.print());
  const nav = document.querySelector<HTMLSelectElement>("[data-rc-nav]");
  if (nav) {
    const base = cfg.locale === "de" ? "/de/tools/readiness-check/" : "/tools/readiness-check/";
    fetch("/tools/readiness-check/certifications.json")
      .then((r) => r.json() as Promise<{ s: string; n: string }[]>)
      .then((list) => {
        nav.innerHTML = list.map((c) => `<option value="${esc(c.s)}"${c.s === cfg.slug ? " selected" : ""}>${esc(c.n)}</option>`).join("");
      })
      .catch(() => {
        /* keep the current certification only */
      });
    nav.addEventListener("change", () => {
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- plain script, no Next.js router on this page
      if (/^[a-z0-9-]+$/.test(nav.value) && nav.value !== cfg.slug) window.location.href = `${base}${nav.value}/`;
    });
  }

  fill();
  render();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
