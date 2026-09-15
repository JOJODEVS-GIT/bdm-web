import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, PageBanner, FilterBar } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Avantages & réductions" };

/* MAQUETTE — Avantages partenaires (CDC §7.8), offres d'exemple. */

const DEALS = [
  { deal: "-10 % sur les billets Cotonou ↔ Paris", partner: "AGENCE VOYAGE PARTENAIRE", cond: "Code promo membre, toute l'année", cat: "Voyage" },
  { deal: "Frais réduits sur vos transferts d'argent", partner: "PARTENAIRE TRANSFERT", cond: "Premier transfert offert", cat: "Argent" },
  { deal: "-15 % sur l'hôtel à Ouidah", partner: "HÔTEL PARTENAIRE", cond: "Séjour de 2 nuits minimum", cat: "Hôtel" },
  { deal: "Pack étudiant : assurance à tarif diaspora", partner: "ASSUREUR PARTENAIRE", cond: "Sur justificatif étudiant", cat: "Assurance" },
  { deal: "-20 % sur le fret vers Cotonou", partner: "TRANSITAIRE PARTENAIRE", cond: "À partir de 2 m³", cat: "Fret" },
  { deal: "1 mois offert sur la fibre au Bénin", partner: "TÉLÉCOM PARTENAIRE", cond: "Nouvel abonnement 12 mois", cat: "Télécom" },
];

export default function AvantagesPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Avantages &"
        em="réductions"
        desc="Des offres négociées pour la communauté chez nos partenaires : billets d'avion, transferts d'argent, hôtels, télécoms. Gratuites pour les membres."
      >
        <Link href="/annonceurs" className="rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Devenir partenaire
        </Link>
      </PageBanner>
      <FilterBar
        placeholder="Partenaire, ville…"
        selects={[{ label: "Catégorie", options: ["Toutes", "Voyage", "Argent", "Hôtel", "Assurance", "Fret", "Télécom"] }]}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <p className="mb-5 text-sm text-muted"><strong className="text-ink">{DEALS.length * 2}</strong> avantages actifs</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {DEALS.map((d) => (
                <article key={d.deal} className="flex flex-col border-l-4 border-accent bg-accent-light p-5">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-ink-2">{d.cat}</span>
                  <h2 className="mt-1 font-display text-lg font-bold leading-snug">{d.deal}</h2>
                  <p className="card-location mt-2">{d.partner}</p>
                  <p className="mt-1 text-sm text-ink-2">{d.cond}</p>
                  <button className="mt-4 self-start rounded bg-primary px-4 py-2 text-xs font-bold uppercase text-white hover:bg-primary-dark">
                    Voir le code promo
                  </button>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">Réservé aux <em>membres</em></h3>
              <p className="mt-2 text-sm text-ink-2">Les codes promo s&apos;affichent avec un compte gratuit. Une raison de plus de rejoindre la communauté.</p>
              <Link href="/publier" className="mt-3 inline-block rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
                Créer mon compte
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
