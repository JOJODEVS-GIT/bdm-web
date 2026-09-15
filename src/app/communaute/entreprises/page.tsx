import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, PageBanner, FilterBar } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Annuaire des entreprises" };

/* MAQUETTE — Annuaire entreprises (CDC §7.5), fiches d'exemple. */

const ENTREPRISES = [
  { name: "PME Fintech", city: "COTONOU · BÉNIN", sector: "Paiement digital", size: "45 salariés", offres: 3 },
  { name: "Wax & Co", city: "MONTRÉAL · CANADA", sector: "Mode", size: "8 salariés", offres: 0 },
  { name: "BTP Horizon", city: "ABIDJAN · CÔTE D'IVOIRE", sector: "Construction", size: "120 salariés", offres: 2 },
  { name: "Saveurs du Golfe", city: "PARIS · FRANCE", sector: "Restauration", size: "15 salariés", offres: 1 },
  { name: "AgroBénin Export", city: "ALLADA · BÉNIN", sector: "Agroalimentaire", size: "60 salariés", offres: 1 },
  { name: "Cabinet Sègbo Conseil", city: "BRUXELLES · BELGIQUE", sector: "Juridique", size: "6 salariés", offres: 0 },
];

export default function EntreprisesPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Toutes les"
        em="entreprises"
        desc="Les entreprises béninoises et de la diaspora : elles se présentent, publient leurs actualités et recrutent directement sur le site."
      >
        <Link href="/publier" className="rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Inscrire mon entreprise
        </Link>
        <Link href="/emploi/recruteurs" className="rounded border-2 border-white/60 px-4 py-2 text-sm font-bold text-white hover:border-accent hover:text-accent">
          Espace recruteur
        </Link>
      </PageBanner>
      <FilterBar
        placeholder="Nom, secteur, ville…"
        selects={[
          { label: "Pays", options: ["Tous les pays", "Bénin", "France", "Canada", "Côte d'Ivoire", "Belgique"] },
          { label: "Secteur", options: ["Tous les secteurs", "Tech", "BTP", "Restauration", "Mode", "Agroalimentaire", "Juridique"] },
        ]}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <p className="mb-5 text-sm text-muted"><strong className="text-ink">87</strong> entreprises</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {ENTREPRISES.map((e) => (
                <article key={e.name} className="border border-line p-4 hover:border-primary hover:bg-primary-faint">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-line bg-paper-2 text-xs font-bold text-muted">LOGO</div>
                    <div className="min-w-0">
                      <h2 className="font-bold leading-tight">
                        <Link href="/emploi/offre-exemple" className="hover:text-primary">{e.name}</Link>
                      </h2>
                      <p className="card-location mt-0.5">{e.city}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ink-2">{e.sector} · {e.size}</p>
                  {e.offres > 0 && (
                    <p className="mt-2">
                      <Link href="/emploi" className="text-xs font-bold uppercase text-primary hover:underline">
                        {e.offres} offre{e.offres > 1 ? "s" : ""} en cours →
                      </Link>
                    </p>
                  )}
                </article>
              ))}
            </div>
            <button className="mt-6 w-full rounded border-2 border-primary py-2.5 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-white">
              Afficher plus de résultats
            </button>
          </div>

          <aside className="space-y-8">
            <div className="border border-line bg-paper-2 p-4">
              <h3 className="section-title text-sm">Recruter <em>ici</em></h3>
              <p className="mt-2 text-sm text-ink-2">3 offres tests gratuites, stages illimités. Partenaire RH pour la CVthèque et la mise en avant.</p>
              <Link href="/emploi/recruteurs" className="mt-3 inline-block text-sm font-bold uppercase text-primary hover:underline">
                Découvrir →
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
