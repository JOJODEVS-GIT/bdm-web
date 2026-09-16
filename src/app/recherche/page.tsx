import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Recherche" };

/* MAQUETTE — Recherche globale (CDC §7.15), résultats d'exemple pour « cotonou ». */

const RESULTATS = [
  { type: "Offre", t: "Développeur full-stack h/f — fintech, Cotonou", href: "/emploi/offre-exemple" },
  { type: "Article", t: "Retour à Cotonou : le parcours d'Aïchatou", href: "/magazine/article-exemple" },
  { type: "Membre", t: "Aïchatou S. — Cotonou · BTP", href: "/communaute/membres/aichatou-s" },
  { type: "Adresse", t: "Barber Cotonou Style — Lyon", href: "/adresses/adresse-exemple" },
  { type: "Annonce", t: "Studio meublé à louer, Fidjrossè, Cotonou", href: "/annonces" },
  { type: "Mot-clé", t: "Cotonou (214 contenus)", href: "/mot/exemple" },
];

export default function RecherchePage() {
  return (
    <>
      <SiteHeader />
      <div className="bg-primary-darker py-10 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="section-title text-2xl">Rechercher <em className="!text-accent">partout</em></h1>
          <div className="mt-4 flex max-w-2xl gap-2">
            <input
              type="search"
              defaultValue="cotonou"
              className="w-full rounded border-2 border-white/30 bg-white px-4 py-3 text-base text-ink focus:border-accent focus:outline-none"
            />
            <button className="rounded bg-accent px-6 py-3 text-sm font-bold uppercase text-ink hover:bg-accent-dark">OK</button>
          </div>
          <p className="mt-2 text-xs text-white/60">Articles, offres, membres, associations, adresses, événements, annonces, mots-clés…</p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {["Tout (63)", "Offres (9)", "Articles (14)", "Membres (22)", "Adresses (7)", "Événements (4)", "Annonces (7)"].map((f, i) => (
                <button key={f} className={i === 0 ? "rounded-full bg-primary px-3 py-1 text-xs font-bold text-white" : "rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-2 hover:border-primary hover:text-primary"}>{f}</button>
              ))}
            </div>
            <ul className="divide-y divide-line border border-line">
              {RESULTATS.map((r) => (
                <li key={r.t} className="flex items-center gap-4 p-4 hover:bg-primary-faint">
                  <span className="shrink-0 whitespace-nowrap rounded bg-primary-light px-2 py-1 text-xs font-bold uppercase text-primary-dark">{r.type}</span>
                  <p className="min-w-0 flex-1 font-bold leading-snug">
                    <Link href={r.href} className="hover:text-primary">{r.t}</Link>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted">Recherche propulsée par Meilisearch : tolérance aux fautes, suggestions instantanées (au développement).</p>
          </div>
          <aside className="space-y-8"><AdSlot label="pavé latéral" /></aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
