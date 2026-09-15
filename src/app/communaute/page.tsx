import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, SectionTitle, AdSlot, PageBanner } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Communauté" };

/* MAQUETTE — Accueil communauté (CDC §7.5) : nouveaux inscrits par type. */

const TYPES = [
  { label: "Membres", href: "/communaute/membres", n: "1 254", nouveaux: ["Aïchatou S. — Cotonou", "Jean-Eudes K. — Paris", "Mariam A. — Montréal"] },
  { label: "Entreprises", href: "/communaute/entreprises", n: "87", nouveaux: ["PME Fintech — Cotonou", "Wax & Co — Montréal", "BTP Horizon — Abidjan"] },
  { label: "Associations", href: "/communaute/associations", n: "152", nouveaux: ["Bénin Diaspora IDF — Paris", "Étudiants béninois du Canada", "ASBL Racines — Bruxelles"] },
  { label: "Artistes & groupes", href: "/communaute/artistes", n: "43", nouveaux: ["Gangbé Brass — Cotonou", "DJ Wari — Paris", "Troupe Agbadja — Lomé"] },
];

export default function CommunautePage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="La"
        em="communauté"
        desc="Membres, entreprises, associations, artistes : quatre annuaires alimentés par les inscrits eux-mêmes. Inscription gratuite, publication directe."
      >
        <Link href="/publier" className="rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Créer mon profil gratuit
        </Link>
      </PageBanner>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {TYPES.map((t) => (
                <section key={t.label} className="border border-line p-5">
                  <div className="flex items-baseline justify-between border-b-2 border-line pb-2">
                    <h2 className="section-title text-base">
                      {t.label.split(" ")[0]} <em>{t.label.split(" ").slice(1).join(" ") || " "}</em>
                    </h2>
                    <span className="font-display text-2xl font-black text-primary">{t.n}</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    {t.nouveaux.map((n) => (
                      <li key={n} className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary-dark">
                          {n[0]}
                        </span>
                        <span className="font-semibold">{n}</span>
                        <span className="ml-auto rounded bg-accent px-1.5 py-0.5 text-[0.6rem] font-bold uppercase text-ink">
                          Nouveau
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href={t.href} className="mt-4 inline-block text-sm font-bold uppercase text-primary hover:underline">
                    Tout l&apos;annuaire →
                  </Link>
                </section>
              ))}
            </div>

            <section>
              <SectionTitle pre="Publié par la" em="communauté" href="/magazine" />
              <ul className="divide-y divide-line border border-line">
                {[
                  { t: "Le vodun expliqué à mes enfants nés en France", by: "Élodie Z. · membre", type: "Article" },
                  { t: "Afterwork BTP & diaspora — Cotonou", by: "Aïchatou S. · membre", type: "Événement" },
                  { t: "Ingénieur structures h/f — bureau d'études", by: "PME Fintech · entreprise", type: "Offre" },
                ].map((c) => (
                  <li key={c.t} className="flex items-center gap-4 p-4 hover:bg-primary-faint">
                    <span className="shrink-0 rounded bg-primary-light px-2 py-1 text-xs font-bold uppercase text-primary-dark">{c.type}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold leading-snug">{c.t}</p>
                      <p className="mt-0.5 text-xs text-muted">{c.by}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="border-2 border-primary bg-primary-faint p-4 text-center">
              <p className="font-display text-lg font-bold">Inscrivez-vous, publiez</p>
              <p className="mt-1 text-sm text-ink-2">Profil gratuit, visibilité mondiale, publication directe de vos contenus.</p>
              <Link href="/publier" className="mt-3 inline-block rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary-dark">
                Je m&apos;inscris
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
