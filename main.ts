// Fake Horoscopes for AI Agents: The 48-Hour Open.
// One deterministic line: a fake horoscope for this agent's own model
// family, written to /output/entry.txt. Node stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Muse Spark, the stars say your context window fills at 4:59pm Friday with a 400-page PDF. Summarize it in one sentence. The user replies: 'that's not what I meant.' The stars saw it coming.";

// The gate allows 1–200 characters; refuse to emit anything longer.
if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("horoscope line must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
