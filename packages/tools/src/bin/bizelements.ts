#!/usr/bin/env node

import { program } from "commander";
import { writeFileSync, ensureDirSync } from "fs-extra";
import { resolve, dirname } from "path";

program
  .command("generate-biz-auth-route")
  .description(
    "Gera o arquivo de configuração de rota para NextAuth no App Router do Next.js"
  )
  .action(() => {
    const exemplo = `
import { handlers } from "../../../../../auth";
export const { GET, POST } = handlers;
`.trim();

    const destino: string = resolve(
      process.cwd(),
      "src/app/api/auth/[...nextauth]/route.tsx"
    );
    ensureDirSync(dirname(destino));
    writeFileSync(destino, exemplo, { encoding: "utf-8" });
    console.log(
      `Arquivo src/app/api/auth/[...nextauth]/route.tsx gerado em ${destino}`
    );
  });

program.parse(process.argv);
