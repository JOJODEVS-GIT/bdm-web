import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, SectionTitle, AdSlot, AlertsBox, PageBanner } from "@/components/site/chrome";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = { title: "Retour au pays" };

/* MAQUETTE — Dossier permanent « Retour au pays » (CDC §7.4), contenus d'exemple. */

const TEMOIGNAGES = [
  { title: "Retour à Cotonou : le parcours d'Aïchatou, ingénieure revenue de Montréal", loc: "Cotonou · Bénin" },
  { title: "David : de Lyon à Ouidah, itinéraire d'un retour réussi", loc: "Ouidah · Bénin" },
  { title: "Après 20 ans aux USA, Nadia a ouvert sa clinique à Parakou", loc: "Parakou · Bénin" },
];

const GUIDES = [
  "Préparer son retour : la checklist administrative complète",
  "Investir dans l'immobilier à Cotonou depuis l'étranger",
  "Créer son entreprise au Bénin : APIEx, formalités et pièges",
  "Scolariser ses enfants au Bénin après l'étranger",
];

export default function RetourPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Spécial"
        em="retour au pays"
        desc="Témoignages de ceux qui l'ont fait, guides pratiques et offres d'emploi au Bénin : tout pour préparer un retour réussi."
      >
        <Link href="/publier" className="rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Raconter mon retour
        </Link>
        <Link href="/emploi" className="rounded border-2 border-white/60 px-4 py-2 text-sm font-bold text-white hover:border-accent hover:text-accent">
          Voir les offres au Bénin
        </Link>
      </PageBanner>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-10">
            <section>
              <SectionTitle pre="Ils sont" em="rentrés" />
              <div className="grid gap-6 sm:grid-cols-3">
                {TEMOIGNAGES.map((t) => (
                  <article key={t.title}>
                    <div className="mb-3 aspect-[4/3] border border-line bg-paper-2" />
                    <h3 className="font-bold leading-snug">
                      <Link href="/magazine/article-exemple" className="hover:text-primary">{t.title}</Link>
                    </h3>
                    <p className="card-location mt-1.5">{t.loc}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle pre="Guides" em="pratiques" />
              <ul className="divide-y divide-line border border-line">
                {GUIDES.map((g) => (
                  <li key={g} className="flex items-center gap-4 p-4 hover:bg-primary-faint">
                    <BookOpen aria-hidden className="h-5 w-5 shrink-0 text-primary" strokeWidth={2.2} />
                    <p className="min-w-0 flex-1 font-bold leading-snug">
                      <Link href="/magazine/article-exemple" className="hover:text-primary">{g}</Link>
                    </p>
                    <span className="shrink-0 text-xs font-bold uppercase text-primary">Lire →</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionTitle pre="Travailler" em="au Bénin" href="/emploi" />
              <ul className="divide-y divide-line border border-line">
                {[
                  { t: "Développeur full-stack h/f — fintech", o: "PME · Cotonou", c: "CDI" },
                  { t: "Ingénieur agronome — filière ananas", o: "Coopérative · Allada", c: "CDI" },
                  { t: "Chargé(e) de programme santé", o: "ONG · Parakou", c: "CDD" },
                ].map((o) => (
                  <li key={o.t} className="flex items-center gap-4 p-4 hover:bg-primary-faint">
                    <div className="min-w-0 flex-1">
                      <p className="font-bold leading-snug">{o.t}</p>
                      <p className="card-location mt-1">{o.o}</p>
                    </div>
                    <span className="shrink-0 rounded bg-primary-light px-2 py-1 text-xs font-bold text-primary-dark">{o.c}</span>
                    <Link href="/emploi/offre-exemple" className="shrink-0 rounded border-2 border-primary px-3 py-1.5 text-xs font-bold uppercase text-primary hover:bg-primary hover:text-white">
                      Consulter
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-8">
            <AlertsBox keywords={["Retour au pays", "Bénin", "Investir", "Emploi"]} />
            <div className="border border-line bg-paper-2 p-4">
              <h3 className="section-title text-sm">Le HCBE vous <em>accompagne</em></h3>
              <p className="mt-2 text-sm text-ink-2">
                Services consulaires, installation, investissement : les ressources officielles pour votre retour.
              </p>
              <Link href="/hcbe" className="mt-3 inline-block text-sm font-bold uppercase text-primary hover:underline">
                Voir les services →
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
