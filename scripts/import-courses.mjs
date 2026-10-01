#!/usr/bin/env node
/**
 * Converts data/udemy-courses.csv (your editable course list) into
 * src/data/udemy-courses.json, which the website reads at build time.
 *
 *   npm run import:courses        (also runs automatically before every build)
 *
 * CSV columns (header row required, order does not matter):
 *   #, Title, Certification, Slug, Name, Descriptor, Provider, Category,
 *   Language, Questions, Udemy URL
 * Optional columns:
 *   Referral URL   — your Udemy instructor referral link for this course
 *                    (Udemy → course → Promotions → Referral link). When set, every
 *                    link on the website uses it instead of the plain Udemy URL.
 *   Rating, Rating Count, Rating Date — the course rating as shown on Udemy
 *                    (e.g. 4.92, 25, 2026-10-01). Only shown when all three are set.
 *
 * One row = one Udemy course. Rows with the same Slug are grouped into one
 * certification landing page (/practice-exams/<slug>).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const src = join(root, "data/udemy-courses.csv");
const dest = join(root, "src/data/udemy-courses.json");

/** Minimal RFC-4180 CSV parser (quoted fields, escaped quotes, commas and newlines in quotes). */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      if (row.some((f) => f.trim() !== "")) rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  row.push(field);
  if (row.some((f) => f.trim() !== "")) rows.push(row);
  return rows;
}

const [header, ...lines] = parseCsv(readFileSync(src, "utf8").replace(/^﻿/, ""));
const col = (name) => {
  const i = header.findIndex((h) => h.trim().toLowerCase() === name.toLowerCase());
  if (i === -1) throw new Error(`Column "${name}" missing in ${src}`);
  return i;
};
const optCol = (name) => header.findIndex((h) => h.trim().toLowerCase() === name.toLowerCase());
const C = {
  id: col("#"),
  title: col("Title"),
  certification: col("Certification"),
  slug: col("Slug"),
  name: col("Name"),
  descriptor: col("Descriptor"),
  provider: col("Provider"),
  category: col("Category"),
  language: col("Language"),
  questions: col("Questions"),
  url: col("Udemy URL"),
  referral: optCol("Referral URL"),
  rating: optCol("Rating"),
  ratingCount: optCol("Rating Count"),
  ratingDate: optCol("Rating Date"),
};

const errors = [];
const courses = lines.map((l, n) => {
  const get = (k) => (C[k] === -1 ? "" : (l[C[k]] ?? "").trim());
  const course = {
    id: get("id"),
    title: get("title"),
    certification: get("certification"),
    slug: get("slug"),
    name: get("name"),
    descriptor: get("descriptor"),
    provider: get("provider"),
    category: get("category"),
    language: get("language"),
    questions: get("questions") ? Number(get("questions")) : null,
    udemyUrl: get("url"),
    referralUrl: get("referral") || null,
    rating: get("rating") ? Number(get("rating").replace(",", ".")) : null,
    ratingCount: get("ratingCount") ? Number(get("ratingCount")) : null,
    ratingDate: get("ratingDate") || null,
  };
  const line = n + 2;
  if (course.referralUrl) {
    const path = (u) => {
      try {
        return new URL(u).pathname.replace(/\/+$/, "");
      } catch {
        return null;
      }
    };
    if (!/[?&]referralCode=[A-Za-z0-9]+/.test(course.referralUrl)) errors.push(`line ${line}: Referral URL has no referralCode`);
    else if (path(course.referralUrl) !== path(course.udemyUrl)) errors.push(`line ${line}: Referral URL belongs to a different course than the Udemy URL`);
  }
  const anyRating = course.rating !== null || course.ratingCount !== null || course.ratingDate !== null;
  if (anyRating) {
    if (!(course.rating >= 1 && course.rating <= 5)) errors.push(`line ${line}: Rating must be between 1 and 5`);
    if (!Number.isInteger(course.ratingCount) || course.ratingCount < 1) errors.push(`line ${line}: Rating Count must be a whole number`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(course.ratingDate ?? "")) errors.push(`line ${line}: Rating Date must be YYYY-MM-DD`);
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(course.slug)) errors.push(`line ${line}: invalid Slug "${course.slug}"`);
  for (const k of ["title", "name", "provider", "category", "language"]) if (!course[k]) errors.push(`line ${line}: ${k} is empty`);
  if (course.udemyUrl && !/^https:\/\/(www\.)?udemy\.com\//.test(course.udemyUrl)) errors.push(`line ${line}: Udemy URL looks wrong`);
  if (course.questions !== null && !Number.isInteger(course.questions)) errors.push(`line ${line}: Questions must be a whole number`);
  return course;
});

// Rows sharing a slug must agree on name, provider and category.
const bySlug = new Map();
for (const c of courses) {
  const first = bySlug.get(c.slug);
  if (!first) bySlug.set(c.slug, c);
  else
    for (const k of ["name", "provider", "category"])
      if (first[k] !== c[k]) errors.push(`slug "${c.slug}": ${k} differs ("${first[k]}" vs "${c[k]}")`);
}

if (errors.length) {
  console.error(`\n✗ ${src} has ${errors.length} problem(s):\n  ` + errors.join("\n  ") + "\n");
  process.exit(1);
}

mkdirSync(dirname(dest), { recursive: true });
writeFileSync(dest, JSON.stringify(courses, null, 1) + "\n");
console.log(`✓ ${courses.length} courses → ${bySlug.size} certifications (src/data/udemy-courses.json)`);
