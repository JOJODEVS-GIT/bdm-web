import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, SectionTitle, PageBanner } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Espace recruteur" };

/* MAQUETTE — Espace recruteur (CDC §7.3) : comment ça marche + partenaire RH + CVthèque. */

export default function RecruteursPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Espace"
        em="recruteur"
        desc="Recrutez au Bénin et dans la diaspora : publiez gratuitement vos premières offres, passez partenaire RH pour la CVthèque et la visibilité."
      >
        <Link href="/publier" className="rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Publier une offre (3 tests gratuits)
        </Link>
      </PageBanner>

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-12">
        <section>
          <SectionTitle pre="Comment ça" em="marche ?" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { n: "1", t: "Inscrivez votre structure", d: "Compte entreprise ou association gratuit, fiche dans l'annuaire." },
              { n: "2", t: "Publiez vos offres", d: "3 offres tests gratuites. Stages et volontariat : toujours gratuits." },
              { n: "3", t: "Recevez les candidatures", d: "CV directement dans votre tableau de bord, alertes envoyées aux candidats correspondants." },
            ].map((s) => (
              <article key={s.n} className="border border-line p-5">
                <span className="font-display text-3xl font-black text-line">{s.n}</span>
                <h3 className="mt-1 font-bold">{s.t}</h3>
                <p className="mt-1 text-sm text-ink-2">{s.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-primary p-6">
            <h2 className="section-title text-lg">Devenir <em>partenaire RH</em></h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Offres illimitées et mises en avant (accueil, newsletter, alertes)",
                "Accès complet à la CVthèque et aux CV PDF",
                "Alertes « nouveau CV » sur vos critères",
                "Relais de vos recrutements sur nos réseaux sociaux",
                "Logo dans « Ils recrutent »",
              ].map((b) => (
                <li key={b} className="flex gap-2"><span className="text-primary font-bold">✓</span>{b}</li>
              ))}
            </ul>
            <button className="mt-5 rounded bg-primary px-5 py-2.5 text-sm font-bold uppercase text-white hover:bg-primary-dark">
              Demander un devis
            </button>
            <p className="mt-2 text-xs text-muted">Abonnement mensuel ou annuel — tarif fixé avec le HCBE (questionnaire D).</p>
          </div>

          <div className="border border-line bg-paper-2 p-6">
            <h2 className="section-title text-lg">La <em>CVthèque</em></h2>
            <p className="mt-3 text-sm text-ink-2">
              Des centaines de candidats au Bénin et dans la diaspora, avec CV publié et
              critères vérifiés : métier, secteur, ville, mobilité, niveau d&apos;études.
            </p>
            <div className="mt-4 space-y-2">
              {["Développeuse full-stack · Cotonou · 5 ans", "Comptable senior · Abidjan · mobile Bénin", "Infirmier DE · Lyon · retour envisagé"].map((c) => (
                <div key={c} className="flex items-center gap-3 border border-line bg-paper p-3 text-sm">
                  <span className="rounded bg-accent px-1.5 py-0.5 text-[0.6rem] font-bold uppercase text-ink">CV</span>
                  <span className="font-semibold">{c}</span>
                  <span className="ml-auto text-xs text-muted">🔒 partenaire</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">Aperçu anonymisé — l&apos;accès complet est réservé aux partenaires RH.</p>
          </div>
        </section>

        <section>
          <SectionTitle pre="Ils nous font" em="confiance" />
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {["SONEB", "MTN", "ONG BA", "SOBEBRA", "UAC", "PORT"].map((l) => (
              <div key={l} className="flex aspect-square items-center justify-center border border-line bg-paper-2 text-xs font-bold text-muted">{l}</div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
