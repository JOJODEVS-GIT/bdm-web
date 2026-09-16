import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, PageBanner } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Accueil & hébergement" };

/* MAQUETTE — Familles d'accueil (CDC §7.10) : étudiants à l'étranger, visiteurs au Bénin. */

const HOTES = [
  { n: "Famille K.", city: "MONTRÉAL · CANADA", txt: "Chambre pour étudiant·e béninois·e, quartier universitaire, repas partagés." },
  { n: "Tante Rosine", city: "PARIS · FRANCE", txt: "Accueil temporaire d'arrivants (2 semaines max), aide aux démarches." },
  { n: "Famille A.", city: "COTONOU · BÉNIN", txt: "Accueille les afro-descendants en visite racines : immersion, cuisine, fon." },
];

export default function AccueilHebergementPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Accueil &"
        em="hébergement"
        desc="Des familles de la communauté accueillent : étudiants béninois qui arrivent à l'étranger, visiteurs et afro-descendants au Bénin. Mise en relation modérée, gratuite entre membres."
      >
        <Link href="/publier" className="whitespace-nowrap rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Devenir famille d&apos;accueil
        </Link>
        <button className="whitespace-nowrap rounded border-2 border-white/60 px-4 py-2 text-sm font-bold text-white hover:border-accent hover:text-accent">
          Chercher un accueil
        </button>
      </PageBanner>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              {[
                { n: "1", t: "La famille crée sa fiche", d: "Ville, type d'accueil, durée, conditions." },
                { n: "2", t: "Le HCBE vérifie", d: "Échange avec la famille avant mise en ligne." },
                { n: "3", t: "Mise en relation modérée", d: "Messagerie relais, jamais de coordonnées publiées." },
              ].map((s) => (
                <div key={s.n} className="border border-line p-4">
                  <span className="font-display text-2xl font-black text-line">{s.n}</span>
                  <p className="mt-1 font-bold">{s.t}</p>
                  <p className="text-sm text-ink-2">{s.d}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {HOTES.map((h) => (
                <article key={h.n} className="flex h-full flex-col border border-line p-4 hover:border-primary hover:bg-primary-faint">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light font-display font-bold text-primary-dark">{h.n[8] ?? h.n[0]}</span>
                    <div>
                      <h2 className="font-bold leading-tight">{h.n}</h2>
                      <p className="card-location mt-0.5">{h.city}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ink-2">{h.txt}</p>
                  <p className="mt-auto pt-3">
                    <button className="whitespace-nowrap rounded border-2 border-primary px-3 py-1.5 text-xs font-bold uppercase text-primary hover:bg-primary hover:text-white">
                      Écrire (relais)
                    </button>
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">
              Fiches d&apos;exemple. L&apos;accueil est un service entre membres : le HCBE vérifie les fiches mais chacun reste responsable de sa mise en relation (charte à accepter).
            </p>
          </div>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">Vous partez <em>étudier ?</em></h3>
              <p className="mt-2 text-sm text-ink-2">Créez votre compte et publiez votre recherche d&apos;accueil : les familles de votre ville de destination seront alertées.</p>
              <Link href="/publier" className="mt-3 inline-block whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">Publier ma recherche</Link>
            </div>
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
