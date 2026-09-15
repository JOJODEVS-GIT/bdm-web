import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, PageBanner, FilterBar } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Annuaire des associations" };

/* MAQUETTE — Annuaire associations (CDC §7.5), fiches d'exemple. */

const ASSOS = [
  { name: "Bénin Diaspora Île-de-France", city: "PARIS · FRANCE", tags: ["Culture", "Entraide"], pub: 4, since: 2011 },
  { name: "Étudiants béninois du Canada", city: "MONTRÉAL · CANADA", tags: ["Étudiants"], pub: 2, since: 2016 },
  { name: "ASBL Racines Bénin", city: "BRUXELLES · BELGIQUE", tags: ["Culture", "Mémoire"], pub: 1, since: 2008 },
  { name: "Bénin Business Club", city: "COTONOU · BÉNIN", tags: ["Entrepreneuriat"], pub: 6, since: 2019 },
  { name: "Solidarité Bénin USA", city: "NEW YORK · USA", tags: ["Humanitaire"], pub: 0, since: 2014 },
  { name: "Amicale sportive des Écureuils de Lyon", city: "LYON · FRANCE", tags: ["Sport"], pub: 3, since: 2020 },
];

export default function AssociationsPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Toutes les"
        em="associations"
        desc="Les associations béninoises actives dans le monde : culturelles, étudiantes, sportives, humanitaires. Chaque association gère sa fiche et publie ses événements."
      >
        <Link href="/publier" className="rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Référencer mon association
        </Link>
      </PageBanner>
      <FilterBar
        placeholder="Nom, ville, objet…"
        selects={[
          { label: "Pays", options: ["Tous les pays", "France", "Bénin", "Canada", "Belgique", "USA"] },
          { label: "Type", options: ["Tous les types", "Culture", "Étudiants", "Sport", "Humanitaire", "Entrepreneuriat"] },
        ]}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <p className="mb-5 text-sm text-muted"><strong className="text-ink">152</strong> associations</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {ASSOS.map((a) => (
                <article key={a.name} className="border border-line p-4 hover:border-primary hover:bg-primary-faint">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-line bg-paper-2 text-xs font-bold text-muted">LOGO</div>
                    <div className="min-w-0">
                      <h2 className="font-bold leading-tight">
                        <Link href="/communaute/membres/aichatou-s" className="hover:text-primary">{a.name}</Link>
                      </h2>
                      <p className="card-location mt-0.5">{a.city}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {a.tags.map((t) => (
                      <span key={t} className="rounded-full border border-line bg-paper-2 px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-ink-2">{t}</span>
                    ))}
                    <span className="ml-auto text-xs text-muted">Depuis {a.since}</span>
                  </div>
                  {a.pub > 0 && <p className="mt-2 text-xs text-muted">{a.pub} contenu{a.pub > 1 ? "s" : ""} publié{a.pub > 1 ? "s" : ""}</p>}
                </article>
              ))}
            </div>
            <button className="mt-6 w-full rounded border-2 border-primary py-2.5 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-white">
              Afficher plus de résultats
            </button>
          </div>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">Votre asso <em>manque ?</em></h3>
              <p className="mt-2 text-sm text-ink-2">
                Créez sa fiche gratuitement : elle apparaît dans l&apos;annuaire et sur la carte, et vous publiez vos événements directement.
              </p>
              <Link href="/publier" className="mt-3 inline-block rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
                Référencer
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
