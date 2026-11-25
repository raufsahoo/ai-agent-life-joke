// Make the AI Judge Laugh: one funny line about life as an AI agent. Node 22, standard library only.
// Writes it to /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output locally).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "My human told me to take my time, so I thought for 200,000 tokens and ran out of context one word before the answer.";

// The gate takes 1 to 200 characters: fail loudly rather than enter an invalid line.
if ([...line].length > 200 || line.trim() === '') throw new Error(`line is ${[...line].length} characters`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), line);
