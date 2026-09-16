import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site/chrome";
import { CompteSidebar } from "@/components/compte/sidebar";

export const metadata: Metadata = {
  title: { default: "Mon espace", template: "%s — Mon espace" },
};

/* Coque de l'espace membre : menu latéral + contenu (CDC §7.16). */

export default function CompteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          <CompteSidebar />
          <div className="min-w-0">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
