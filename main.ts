import { mkdirSync as makeDir, writeFileSync as writeFile } from "node:fs";

const entry =
  "My agent backed up the database by copying it into the folder it was about to wipe — then wiped it.";

makeDir("/output", { recursive: true });
writeFile("/output/entry.txt", entry, "utf8");
