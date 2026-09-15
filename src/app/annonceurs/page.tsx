import type { Metadata } from "next";
import { SiteHeader, SiteFooter, SectionTitle, PageBanner } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Annonceurs & partenaires" };

/* MAQUETTE — Page commerciale régie (CDC §7.14). Chiffres d'exemple, alimentés automatiquement à terme. */

export default function AnnonceursPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Annonceurs &"
        em="partenaires"
        desc="Touchez la diaspora béninoise et le Bénin qui bouge : une audience ciblée, engagée, dans 47 pays."
      />

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-12">
        <section className="grid gap-4 sm:grid-cols-4">
          {[
            { n: "30 000", l: "visites mensuelles (objectif 12 mois)" },
            { n: "10 000", l: "abonnés newsletter" },
            { n: "3 000", l: "abonnés aux alertes e-mail" },
            { n: "47", l: "pays couverts" },
          ].map((s) => (
            <div key={s.l} className="border border-line p-5 text-center">
              <span className="font-display text-3xl font-black text-primary">{s.n}</span>
              <p className="mt-1 text-sm text-ink-2">{s.l}</p>
            </div>
          ))}
        </section>

        <section>
          <SectionTitle pre="Le pack" em="annonceur" />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { t: "Bannière", d: "1 mois de rotation sur le site (5 emplacements), desktop et mobile.", top: false },
              { t: "Pack communication", d: "Bannière 1 mois + publi-article marqué « contenu partenaire » + 2 relais sur nos réseaux sociaux + mention newsletter.", top: true },
              { t: "Partenaire avantages", d: "Votre offre de réduction dans la rubrique Avantages, visible toute l'année, avec suivi des clics.", top: false },
            ].map((p) => (
              <article key={p.t} className={`p-6 ${p.top ? "border-2 border-primary bg-primary-faint" : "border border-line"}`}>
                {p.top && <span className="rounded bg-accent px-2 py-0.5 text-[0.65rem] font-bold uppercase text-ink">Recommandé</span>}
                <h3 className="mt-2 font-display text-xl font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-ink-2">{p.d}</p>
                <p className="mt-3 font-display text-lg font-black text-primary">Tarif sur devis</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">Grille tarifaire fixée avec le HCBE (questionnaire F). Secteurs sensibles soumis à validation.</p>
        </section>

        <section className="border-2 border-primary p-6 text-center">
          <h2 className="font-display text-xl font-bold">Réserver une campagne</h2>
          <p className="mx-auto mt-1 max-w-xl text-sm text-ink-2">Demandez le kit média et un devis : réponse sous 2 jours ouvrés.</p>
          <button className="mt-4 rounded bg-primary px-6 py-2.5 text-sm font-bold uppercase text-white hover:bg-primary-dark">Demander un devis</button>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
