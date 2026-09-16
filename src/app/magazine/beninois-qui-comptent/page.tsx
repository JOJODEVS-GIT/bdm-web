import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, PageBanner, FilterBar } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Béninois qui comptent" };

/* MAQUETTE — Célébrités et personnalités (CDC §7.4), fiches d'exemple. */

const PERSONNALITES = [
  { name: "Angélique Kidjo", domain: "Musique", note: "5 Grammy Awards, voix du Bénin dans le monde" },
  { name: "Djimon Hounsou", domain: "Cinéma", note: "Acteur nommé deux fois aux Oscars" },
  { name: "Romuald Wadagni", domain: "Économie", note: "Ministre des finances, réformes saluées" },
  { name: "Steve Mounié", domain: "Football", note: "Capitaine des Écureuils" },
  { name: "Reckya Madougou", domain: "Politique", note: "Figure politique et de la microfinance" },
  { name: "Georges Adéagbo", domain: "Art contemporain", note: "Installations exposées à Venise et Kassel" },
  { name: "Léonora Miano*", domain: "Littérature", note: "* fiche exemple — liste à valider par la rédaction" },
  { name: "Lionel Talon", domain: "Entrepreneuriat", note: "Fiche exemple à compléter" },
];

export default function CelebritesPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Béninois qui"
        em="comptent"
        desc="Musique, sport, sciences, business, politique : les personnalités béninoises et d'origine béninoise qui font rayonner le pays. Fiches rédigées et validées par la rédaction."
      />
      <FilterBar
        placeholder="Nom, domaine…"
        selects={[{ label: "Domaine", options: ["Tous les domaines", "Musique", "Cinéma", "Sport", "Sciences", "Business", "Politique", "Littérature"] }]}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <p className="mb-5 text-sm text-muted"><strong className="text-ink">50</strong> fiches au lancement — objectif 1001</p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {PERSONNALITES.map((p) => (
                <article key={p.name} className="border border-line hover:border-primary">
                  <div className="flex aspect-square items-center justify-center bg-paper-2 font-display text-5xl font-black text-line">
                    {p.name[0]}
                  </div>
                  <div className="p-4">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-primary">{p.domain}</span>
                    <h2 className="mt-1 font-display text-lg font-bold leading-tight">
                      <Link href="#" className="hover:text-primary">{p.name}</Link>
                    </h2>
                    <p className="mt-1 text-sm text-ink-2">{p.note}</p>
                  </div>
                </article>
              ))}
            </div>
            <button className="mt-7 w-full rounded border-2 border-primary py-2.5 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-white">
              Afficher plus de personnalités
            </button>
          </div>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">Proposer une <em>personnalité</em></h3>
              <p className="mt-2 text-sm text-ink-2">
                Un Béninois fait rayonner le pays et manque à la liste ? Proposez sa fiche, la rédaction vérifie et publie.
              </p>
              <Link href="/publier" className="mt-3 inline-block whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
                Proposer
              </Link>
            </div>
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
