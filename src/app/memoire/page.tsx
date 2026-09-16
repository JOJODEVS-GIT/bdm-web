import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, SectionTitle, AdSlot, PageBanner } from "@/components/site/chrome";
import { Compass, LibraryBig, BookOpen } from "lucide-react";

export const metadata: Metadata = { title: "Mémoire & racines" };

/* MAQUETTE — Espace mémoire repris de l'ancien site (CDC §7.11) : 24 lieux, itinéraires, bibliothèque, guides. */

const LIEUX = [
  { name: "Porte du Non-Retour", city: "OUIDAH", theme: "Traite atlantique" },
  { name: "Route de l'Esclave", city: "OUIDAH", theme: "Itinéraire mémoriel" },
  { name: "Palais royaux d'Abomey", city: "ABOMEY", theme: "Royaume du Danxomè" },
  { name: "Temple des Pythons", city: "OUIDAH", theme: "Vodun" },
];

export default function MemoirePage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Mémoire &"
        em="racines"
        desc="Pour les afro-descendants en quête d'origines et tous les Béninois : lieux de mémoire, itinéraires, bibliothèque culturelle et guides pratiques. Contenus validés historiquement."
      >
        <Link href="/adresses" className="whitespace-nowrap rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Professionnels vérifiés (généalogie)
        </Link>
      </PageBanner>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-10">
            <section>
              <SectionTitle pre="La carte" em="mémorielle" />
              <div className="flex aspect-[21/9] items-center justify-center border border-line bg-[#dfe9e2] text-sm text-muted">
                carte des 24 lieux de mémoire (MapLibre)
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {LIEUX.map((l) => (
                  <article key={l.name} className="border border-line hover:border-primary">
                    <div className="aspect-[4/3] bg-paper-2" />
                    <div className="p-3">
                      <p className="card-location">{l.city}</p>
                      <h3 className="mt-1 font-bold leading-tight">{l.name}</h3>
                      <p className="text-xs font-bold uppercase tracking-wide text-primary">{l.theme}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted">24 lieux documentés et sourcés — repris de l&apos;ancien site, validés par la rédaction.</p>
            </section>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { t: "Itinéraires mémoriels", d: "2 parcours guidés : la Route de l'Esclave, les royaumes du Sud.", i: Compass },
                { t: "Bibliothèque culturelle", d: "Livres, films, archives et articles pour comprendre l'histoire.", i: LibraryBig },
                { t: "Guides pratiques", d: "Généalogie, visa, programme afro-descendants : 4 guides pas à pas.", i: BookOpen },
              ].map((b) => (
                <article key={b.t} className="border border-line p-5">
                  <b.i aria-hidden className="h-7 w-7 text-primary" strokeWidth={2.2} />
                  <h2 className="mt-2 font-display text-lg font-bold">{b.t}</h2>
                  <p className="mt-1 text-sm text-ink-2">{b.d}</p>
                  <Link href="#" className="mt-3 inline-block whitespace-nowrap text-sm font-bold uppercase text-primary hover:underline">Explorer →</Link>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">Retrouver ses <em>racines</em></h3>
              <p className="mt-2 text-sm text-ink-2">Généalogistes, historiens et juristes vérifiés vous accompagnent (contact par relais).</p>
              <button className="mt-3 rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">Être accompagné</button>
            </div>
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
