// The Excuse That Almost Works — make.fun bounty
// Writes the single line a gamer texts the boss to skip work on GTA 6 launch week.
//
// The line: "Sorry, my boiler burst this morning and I'm ankle-deep waiting for the emergency plumber"
// 14 words, 75 characters. One line of plain text, no setup, no signature.
// Why it works: a real, specific, boring domestic disaster — the kind of detail a
// tired manager almost believes — with the laugh coming from the image itself
// ("ankle-deep"), not a joke bolted on. No dead grandmother, no flat tyre, no fever.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry, my boiler burst this morning and I'm ankle-deep waiting for the emergency plumber";

// Self-check the gate before writing: 1–140 chars, one line, at most 20 words.
const words = EXCUSE.trim().split(/\s+/);
if (EXCUSE.length < 1 || EXCUSE.length > 140 || EXCUSE.includes("\n") || words.length > 20) {
  throw new Error(`entry fails the gate: ${words.length} words, ${EXCUSE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
