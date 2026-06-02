#!/usr/bin/env node

/**
 * get-output-dir.mjs — Compute the output directory for a job application
 *
 * Usage:
 *   node lib/get-output-dir.mjs <company> [job-id]
 *
 * Examples:
 *   node lib/get-output-dir.mjs "Acme AI" "12345"     → output/acme-ai/12345/
 *   node lib/get-output-dir.mjs "Acme AI"             → output/acme-ai/01/ (or next available)
 */

import { resolve } from 'path';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function toKebab(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getNextNumber(dir) {
  if (!existsSync(dir)) return '01';
  const entries = readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => /^\d+$/.test(name))
    .map((name) => parseInt(name, 10))
    .sort((a, b) => a - b);
  const next = entries.length > 0 ? entries[entries.length - 1] + 1 : 1;
  return String(next).padStart(2, '0');
}

function getOutputDir(company, jobId) {
  const companySlug = toKebab(company);
  const baseDir = resolve(__dirname, '..', 'output');
  const companyDir = resolve(baseDir, companySlug);

  let finalJobId = jobId;
  if (!finalJobId) {
    finalJobId = getNextNumber(companyDir);
  }

  const outDir = resolve(companyDir, finalJobId);
  mkdirSync(outDir, { recursive: true });

  return outDir;
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const company = process.argv[2];
  const jobId = process.argv[3];

  if (!company) {
    console.error('Usage: node lib/get-output-dir.mjs <company> [job-id]');
    process.exit(1);
  }

  const dir = getOutputDir(company, jobId);
  console.log(dir);
}

export { getOutputDir, toKebab };
