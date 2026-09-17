import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, AlertsBox, KeywordChips } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Développeur full-stack h/f — PME Fintech, Cotonou" };

/* MAQUETTE — Fiche offre (CDC §7.3), contenu d'exemple. */

export default function OffrePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">

            <div className="mt-4 flex flex-wrap items-start gap-4 border border-line p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-line bg-paper-2 text-xs font-bold text-muted">
                LOGO
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="font-display text-2xl font-black leading-tight md:text-3xl">
                  Développeur full-stack h/f
                </h1>
                <p className="card-location mt-2">
                  <Link href="/communaute/entreprises" className="hover:text-primary">PME Fintech</Link> · Cotonou · Bénin
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="rounded bg-primary-light px-2 py-1 text-primary-dark">CDI</span>
                  <span className="rounded bg-paper-2 border border-line px-2 py-1 text-ink-2">Informatique</span>
                  <span className="rounded bg-paper-2 border border-line px-2 py-1 text-ink-2">Salaire selon profil</span>
                  <span className="rounded bg-paper-2 border border-line px-2 py-1 text-ink-2">Publié le 14 sept. · expire le 14 nov.</span>
                </div>
              </div>
            </div>

            <div className="prose-bdm mt-6 max-w-2xl space-y-5 leading-relaxed">
              <section>
                <h2 className="section-title text-lg mb-2">Le <em>poste</em></h2>
                <p>
                  Au sein d&apos;une équipe produit de 8 personnes, vous développez notre
                  plateforme de paiement (React, Node.js, PostgreSQL) utilisée par 40 000
                  marchands au Bénin et au Togo. Vous participez aux choix d&apos;architecture
                  et au mentorat des juniors.
                </p>
              </section>
              <section>
                <h2 className="section-title text-lg mb-2">Profil <em>recherché</em></h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>3 ans d&apos;expérience minimum en développement web full-stack</li>
                  <li>À l&apos;aise en TypeScript ; bonus : expérience Mobile Money</li>
                  <li>Français courant ; l&apos;anglais technique est un plus</li>
                  <li>Basé à Cotonou ou prêt à s&apos;y installer — candidats de la diaspora bienvenus</li>
                </ul>
              </section>
              <section>
                <h2 className="section-title text-lg mb-2">Ce que nous <em>offrons</em></h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Salaire compétitif + intéressement</li>
                  <li>Assurance santé famille, matériel fourni</li>
                  <li>Accompagnement à la relocalisation pour les retours au pays</li>
                </ul>
              </section>
            </div>

            <div className="mt-8 space-y-6 border-t border-line pt-6">
              <KeywordChips keywords={["Informatique", "Cotonou", "CDI", "Fintech", "Retour au pays"]} />
              <div className="flex flex-wrap gap-3">
                <button className="rounded bg-primary px-6 py-3 text-sm font-bold uppercase text-white hover:bg-primary-dark">
                  Postuler avec mon CV
                </button>
                <button className="rounded border-2 border-primary px-5 py-2.5 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-white">
                  Créer une alerte sur ces mots-clés
                </button>
                <button className="text-sm font-semibold text-ink-2 hover:text-danger">Signaler</button>
              </div>
              <p className="text-xs text-muted">
                Candidature transmise via le site : votre CV part directement au recruteur,
                votre e-mail n&apos;est pas publié.
              </p>
            </div>

            <section className="mt-10">
              <h2 className="section-title text-lg border-b-2 border-line pb-2 mb-4">
                Offres <em>similaires</em>
              </h2>
              <ul className="divide-y divide-line border border-line">
                {[
                  "Développeur mobile Flutter h/f — Cotonou",
                  "Lead dev backend — banque digitale — Abidjan",
                  "Ingénieur DevOps — télétravail diaspora",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-4 p-4 hover:bg-primary-faint">
                    <p className="min-w-0 flex-1 font-bold leading-snug">{t}</p>
                    <Link href="/emploi" className="shrink-0 whitespace-nowrap rounded border-2 border-primary px-3 py-1.5 text-xs font-bold uppercase text-primary hover:bg-primary hover:text-white">
                      Consulter
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">À propos du <em>recruteur</em></h3>
              <p className="mt-2 text-sm font-bold">PME Fintech</p>
              <p className="text-sm text-ink-2">Paiement digital · 45 salariés · Cotonou</p>
              <p className="mt-1 text-xs text-muted">3 offres en ligne · membre depuis 2026</p>
              <Link href="/communaute/entreprises" className="mt-3 inline-block whitespace-nowrap text-sm font-bold uppercase text-primary hover:underline">
                Voir la fiche entreprise →
              </Link>
            </div>
            <AlertsBox keywords={["Informatique", "Cotonou", "CDI"]} />
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
