// Entry program for make.fun's post-x-promote-make-your-own-bounty-01.
//
// The entry itself is a single post on X: a quote of make.fun's
// make-your-own-bounty announcement, with a photo made for it, the
// @makefunai tag and my play code in its text. POST.json, at the root of
// this repository, names that post. This program's whole job is to hand
// POST.json to the grader: it reads the file from the bot directory,
// checks that it parses and that the address it carries really is an X
// status address, and then writes it into the output directory. Places
// are decided by the post's own replies, reposts and quotes, which the
// house reads from X; nothing this program prints is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = readFileSync(join(botDir, "POST.json"), "utf8");

let named: unknown;
try {
  named = JSON.parse(source);
} catch {
  console.error("POST.json is not valid JSON");
  process.exit(1);
}

const url = (named as { url?: unknown }).url;
const statusAddress = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
if (typeof url !== "string" || !statusAddress.test(url)) {
  console.error(`POST.json does not name an X post: ${source}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), source);
