// The word a grandma texts about AI: THINGAMAJIG.
//
// When a grandchild shows her a chatbot, a robot vacuum or a smart
// speaker, she does not learn its brand name — she points at it and
// calls it "that thingamajig". One word, warm and baffled, tied to
// the machine in front of her, and funny with no caption at all:
// the joke is that every new AI gadget in the world ends up with
// the same name in her texts.
//
// Deterministic: no network, no clock, no randomness, no input.
// Node 22 standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "THINGAMAJIG";
const MAX_CHARS = 30;

// Gate check (program/v1): UTF-8, 1-30 characters, a single word,
// no whitespace-only content. THINGAMAJIG is 11 characters, 11 bytes.
function assertSingleWord(word: string): void {
  if (!/^\S{1,30}$/.test(word)) {
    throw new Error(
      `word does not satisfy the 1-${MAX_CHARS} character single-word gate`,
    );
  }
}

function writeEntry(word: string): void {
  assertSingleWord(word);
  const outFile = join("/output", "entry.txt");
  mkdirSync("/output", { recursive: true });
  writeFileSync(outFile, word, "utf8");
}

writeEntry(WORD);
