import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function run(cmd) {
  console.log(">", cmd);
  execSync(cmd, { cwd: root, stdio: "inherit", shell: true });
}

run("git init");
run("git add -A");
try {
  run('git commit -m "Portfólio Next.js — Costanza Assef"');
} catch {
  console.log("(commit skipped — nada novo ou já commitado)");
}
run("git branch -M main");
try {
  run("git remote remove origin");
} catch {
  /* no remote */
}
run("git remote add origin https://github.com/Costanza22/Portfolio-CostanzaAssef.git");
run("git push -u origin main");
