"use client";

import ExamplePage from "./(pages)/example/page";
import { BizSonner } from "@bizelements/ui";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* BizSonner agora está no layout global */}
      <BizSonner position="top-right" richColors closeButton expand />
      <ExamplePage />
    </main>
  );
}
