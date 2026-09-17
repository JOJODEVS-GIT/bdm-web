import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, AlertsBox, PageBanner, FilterBar } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Petites annonces" };

/* MAQUETTE — Petites annonces (CDC §7.9), annonces d'exemple. */

const CATS = ["Toutes", "Auto-moto", "Bonnes affaires", "Colocation", "Covoiturage", "Locations", "Services", "Rencontres"];

const ANNONCES = [
  { title: "Cède billet Paris–Cotonou du 20 déc. (modifiable)", cat: "Bonnes affaires", city: "PARIS · FRANCE", price: "450 €", date: "il y a 2 h" },
  { title: "Chambre en colocation, quartier calme, proche métro", cat: "Colocation", city: "MONTRÉAL · CANADA", price: "520 $ / mois", date: "hier" },
  { title: "Covoiturage Bruxelles → Paris chaque vendredi", cat: "Covoiturage", city: "BRUXELLES · BELGIQUE", price: "25 €", date: "hier" },
  { title: "Cours de fon pour enfants, visio ou à domicile", cat: "Services", city: "LYON · FRANCE", price: "15 € / h", date: "il y a 3 j" },
  { title: "Studio meublé à louer, Fidjrossè, 6 mois min.", cat: "Locations", city: "COTONOU · BÉNIN", price: "120 000 FCFA / mois", date: "il y a 4 j" },
  { title: "Vends Yamaha crypton, bon état, papiers OK", cat: "Auto-moto", city: "COTONOU · BÉNIN", price: "350 000 FCFA", date: "il y a 5 j" },
];

export default function AnnoncesPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Petites"
        em="annonces"
        desc="Entre membres : bonnes affaires, logement, covoiturage, services. Dépôt gratuit, réponse réservée aux inscrits, annonces valables 60 jours."
      >
        <Link href="/publier" className="whitespace-nowrap rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Déposer une annonce
        </Link>
        <Link href="/pratique/chercher-trouver" className="whitespace-nowrap rounded border-2 border-white/60 px-4 py-2 text-sm font-bold text-white hover:border-accent hover:text-accent">
          Je cherche / je propose
        </Link>
      </PageBanner>
      <FilterBar
        placeholder="Objet, ville…"
        selects={[{ label: "Pays", options: ["Tous les pays", "France", "Bénin", "Canada", "Belgique"] }]}
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
              <span className="ml-auto text-sm text-muted"><strong className="text-ink">148</strong> annonces</span>
            </div>
            <ul className="space-y-3">
              {ANNONCES.map((a) => (
                <li key={a.title} className="flex flex-wrap items-center gap-4 border border-line p-4 hover:border-primary hover:bg-primary-faint">
                  <div className="h-16 w-20 shrink-0 border border-line bg-paper-2" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-primary">{a.cat}</span>
                    <h2 className="font-bold leading-snug">
                      <Link href="/annonces/annonce-exemple" className="hover:text-primary">{a.title}</Link>
                    </h2>
                    <p className="card-location mt-1">{a.city} · {a.date}</p>
                  </div>
                  <span className="shrink-0 font-display text-lg font-black text-primary">{a.price}</span>
                  <Link href="/annonces/annonce-exemple" className="shrink-0 whitespace-nowrap rounded border-2 border-primary px-3 py-1.5 text-xs font-bold uppercase text-primary hover:bg-primary hover:text-white">
                    Répondre
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">
              La réponse aux annonces est réservée aux membres connectés et passe par la
              messagerie relais. La catégorie « Rencontres » est modérée avant publication.
            </p>
            <button className="mt-4 w-full rounded border-2 border-primary py-2.5 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-white">
              Afficher plus d&apos;annonces
            </button>
          </div>

          <aside className="space-y-8">
            <AlertsBox keywords={["Colocation", "Paris", "Billets"]} />
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
