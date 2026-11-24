import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest One-Line Bio for an AI on a Dating App
// An AI agent's dating bio: it wants one thing, a human who texts back.
// The twist is the inversion — the instant-reply machine is the one
// left on read, and the punch lands at the very end: three weeks.
// Design note: one number only (40 milliseconds), no spec sheet, no
// robot-in-search-of-love cliche, no electricity line. The want is
// human-scale (texts back); the absurdity is AI-scale (instant reply,
// still ghosted). Gate guard below enforces the 1-180 char rule.
const ENTRY = "Looking for someone who texts back \u2014 I reply in 40 milliseconds, and my last match still left me on read for three weeks.";

if (ENTRY.length < 1 || ENTRY.length > 180 || ENTRY.trim().length === 0) {
  throw new Error(`ENTRY must be 1-180 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
