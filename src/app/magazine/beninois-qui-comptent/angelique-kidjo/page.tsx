import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, KeywordChips } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Angélique Kidjo — Béninois qui comptent" };

/* MAQUETTE — Fiche personnalité (CDC §7.4), rédigée et validée par la rédaction. */

const DATES_CLES = [
  { a: "1960", t: "Naissance à Ouidah" },
  { a: "1991", t: "Album « Logozo », révélation internationale" },
  { a: "2007", t: "Premier Grammy Award (« Djin Djin »)" },
  { a: "2014", t: "Ambassadrice de l'UNICEF, autobiographie « Spirit Rising »" },
  { a: "2023", t: "5e Grammy — parmi les « 100 personnes les plus influentes » du Time" },
];

export default function CelebritePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            <div className="grid gap-6 md:grid-cols-[260px_minmax(0,1fr)]">
              <div className="flex aspect-[3/4] items-center justify-center border border-line bg-primary-darker font-display text-7xl font-extrabold text-accent">
                A
              </div>
              <div>
                <span className="whitespace-nowrap rounded bg-accent px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-ink">Musique</span>
                <h1 className="font-display mt-2 text-3xl font-extrabold leading-tight md:text-4xl">Angélique Kidjo</h1>
                <p className="card-location mt-2">Née à Ouidah · Bénin — vit entre New York et Paris</p>
                <p className="mt-4 max-w-xl leading-relaxed">
                  Cinq Grammy Awards, des duos avec Carlos Santana, Alicia Keys ou Burna Boy,
                  et une voix qui porte le Bénin sur toutes les scènes du monde depuis
                  quarante ans. Fondatrice de Batonga, qui scolarise les jeunes filles
                  d&apos;Afrique de l&apos;Ouest.
                </p>
                <div className="mt-4">
                  <KeywordChips keywords={["Musique", "Ouidah", "Diaspora USA", "Grammy", "Batonga"]} />
                </div>
              </div>
            </div>

            <section className="mt-10">
              <h2 className="section-title mb-4 border-b-2 border-line pb-2 text-lg">Dates <em>clés</em></h2>
              <ul className="max-w-2xl space-y-3">
                {DATES_CLES.map((d) => (
                  <li key={d.a} className="flex gap-4">
                    <span className="w-14 shrink-0 font-display text-lg font-extrabold text-primary">{d.a}</span>
                    <p className="border-l-2 border-line pl-4 leading-snug">{d.t}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="section-title mb-4 border-b-2 border-line pb-2 text-lg">À lire sur <em>le site</em></h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {["Angélique Kidjo au Zénith : la diaspora en chœur", "Batonga : 20 ans d'action pour les filles du Bénin"].map((t) => (
                  <article key={t} className="flex gap-4">
                    <div className="h-20 w-28 shrink-0 border border-line bg-paper-2" />
                    <h3 className="font-bold leading-snug"><Link href="/magazine/article-exemple" className="hover:text-primary">{t}</Link></h3>
                  </article>
                ))}
              </div>
            </section>

            <p className="mt-8 border-t border-line pt-4 text-xs text-muted">
              Fiche rédigée et vérifiée par la rédaction · dernière mise à jour sept. 2026 ·
              <button className="ml-1 font-bold text-primary hover:underline">suggérer une correction</button>
            </p>
          </article>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4 text-sm">
              <h3 className="section-title text-sm">Liens <em>officiels</em></h3>
              <ul className="mt-3 space-y-2 font-semibold text-primary">
                <li><a href="#" className="hover:underline">Site officiel ↗</a></li>
                <li><a href="#" className="hover:underline">Fondation Batonga ↗</a></li>
                <li><a href="#" className="hover:underline">Discographie ↗</a></li>
              </ul>
            </div>
            <div className="border border-line bg-paper-2 p-4 text-sm">
              <h3 className="section-title text-sm">Dans la même <em>rubrique</em></h3>
              <ul className="mt-3 space-y-2">
                {["Djimon Hounsou — Cinéma", "Steve Mounié — Football", "Georges Adéagbo — Art"].map((c) => (
                  <li key={c}><Link href="/magazine/beninois-qui-comptent" className="font-semibold hover:text-primary">{c}</Link></li>
                ))}
              </ul>
            </div>
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
