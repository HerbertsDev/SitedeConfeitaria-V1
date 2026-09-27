import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const outputDirectory = resolve(projectDirectory, "dist");

const filesToCopy = ["index.html"];
const directoriesToCopy = ["css", "img", "js"];

rmSync(outputDirectory, { recursive: true, force: true });
mkdirSync(outputDirectory, { recursive: true });

for (const file of filesToCopy) {
  cpSync(resolve(projectDirectory, file), resolve(outputDirectory, file));
}

for (const directory of directoriesToCopy) {
  cpSync(
    resolve(projectDirectory, directory),
    resolve(outputDirectory, directory),
    {
      recursive: true,
    },
  );
}

console.log("Versão de publicação criada em dist/.");
