import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, AlertsBox, PageBanner, FilterBar } from "@/components/site/chrome";
import { Star } from "lucide-react";

export const metadata: Metadata = { title: "Bonnes adresses" };

/* MAQUETTE — Bonnes adresses (CDC §7.6), fiches d'exemple. */

const CATS = ["Toutes", "Restaurants", "Épiceries", "Coiffure & beauté", "Mode", "Services", "Santé", "Lieux de culte", "Écoles"];

const ADRESSES = [
  { name: "Chez Maman Bénin", cat: "Restaurant", city: "PARIS 18e · FRANCE", note: "Cuisine béninoise authentique : amiwo, dja, poisson braisé", badge: true },
  { name: "Épicerie Dantokpa", cat: "Épicerie", city: "BRUXELLES · BELGIQUE", note: "Produits du pays : gari, farine, épices, boissons", badge: true },
  { name: "Salon Wax & Co", cat: "Mode", city: "MONTRÉAL · CANADA", note: "Tissus wax, couture sur mesure, prêt-à-porter", badge: false },
  { name: "Barber Cotonou Style", cat: "Coiffure", city: "LYON · FRANCE", note: "Coupes afro, tresses, soins", badge: false },
  { name: "Cabinet Me Sègbo", cat: "Juridique", city: "PARIS 11e · FRANCE", note: "Droit des étrangers, immobilier au Bénin", badge: true },
  { name: "Église Céleste ND", cat: "Lieu de culte", city: "NEW YORK · USA", note: "Communauté béninoise, cultes en fon et français", badge: false },
];

export default function AdressesPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Les bonnes"
        em="adresses"
        desc="Restaurants, commerces, services béninois dans le monde entier. Proposées par la communauté, vérifiées par la rédaction."
      >
        <Link href="/publier" className="whitespace-nowrap rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Proposer une adresse
        </Link>
      </PageBanner>
      <FilterBar
        placeholder="Nom, ville, spécialité…"
        selects={[
          { label: "Pays", options: ["Tous les pays", "France", "Belgique", "Canada", "USA", "Bénin"] },
          { label: "Ville", options: ["Toutes les villes", "Paris", "Bruxelles", "Montréal", "Lyon", "New York"] },
        ]}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {CATS.map((c, i) => (
                <button key={c} className={i === 0 ? "rounded-full bg-primary px-3 py-1 text-xs font-bold text-white" : "rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-2 hover:border-primary hover:text-primary"}>
                  {c}
                </button>
              ))}
              <span className="ml-auto text-sm text-muted"><strong className="text-ink">203</strong> adresses</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {ADRESSES.map((a) => (
                <article key={a.name} className="border border-line hover:border-primary">
                  <div className="relative aspect-[4/3] bg-paper-2">
                    {a.badge && (
                      <span className="absolute left-2 top-2 rounded bg-accent px-2 py-0.5 text-[0.65rem] font-bold uppercase text-ink">
                        <Star aria-hidden className="mr-1 inline h-3 w-3 fill-current" /> Recommandé
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="card-location">{a.city}</p>
                    <h2 className="mt-1 font-bold leading-tight">
                      <Link href="/adresses/adresse-exemple" className="hover:text-primary">{a.name}</Link>
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">{a.cat}</p>
                    <p className="mt-1.5 text-sm text-ink-2">{a.note}</p>
                  </div>
                </article>
              ))}
            </div>
            <button className="mt-6 w-full rounded border-2 border-primary py-2.5 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-white">
              Afficher plus d&apos;adresses
            </button>
          </div>

          <aside className="space-y-8">
            <AlertsBox keywords={["Restaurants", "Paris", "Épiceries"]} />
            <div className="border border-line bg-paper-2 p-4">
              <h3 className="section-title text-sm">Une adresse <em>fermée ?</em></h3>
              <p className="mt-2 text-sm text-ink-2">Signalez-la : la communauté garde l&apos;annuaire à jour.</p>
            </div>
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
