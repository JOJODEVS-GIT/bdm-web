import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, PageBanner } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Mot-clé : Retour au pays" };

/* MAQUETTE — Page mot-clé (CDC §7.1) : tout le contenu lié à un mot-clé + alerte. */

const CONTENUS = [
  { type: "Article", t: "Retour à Cotonou : le parcours d'Aïchatou", href: "/magazine/article-exemple" },
  { type: "Offre", t: "Développeur full-stack h/f — accompagnement relocalisation", href: "/emploi/offre-exemple" },
  { type: "Guide", t: "Préparer son retour : la checklist administrative", href: "/retour-au-pays" },
  { type: "Événement", t: "Conférence : investir au Bénin en 2027", href: "/agenda/evenement-exemple" },
  { type: "Membre", t: "Aïchatou S. — Cotonou · BTP", href: "/communaute/membres/aichatou-s" },
];

export default function MotClePage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Mot-clé :"
        em="retour au pays"
        desc="Tous les contenus liés à ce mot-clé : articles, offres, événements, membres, adresses. Abonnez-vous pour recevoir chaque nouveauté par e-mail."
      >
        <button className="rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          🔔 Créer une alerte sur ce mot-clé
        </button>
      </PageBanner>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {["Tout (47)", "Articles (12)", "Offres (9)", "Événements (5)", "Membres (18)", "Adresses (3)"].map((f, i) => (
                <button key={f} className={i === 0 ? "rounded-full bg-primary px-3 py-1 text-xs font-bold text-white" : "rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-2 hover:border-primary hover:text-primary"}>{f}</button>
              ))}
            </div>
            <ul className="divide-y divide-line border border-line">
              {CONTENUS.map((c) => (
                <li key={c.t} className="flex items-center gap-4 p-4 hover:bg-primary-faint">
                  <span className="shrink-0 rounded bg-primary-light px-2 py-1 text-xs font-bold uppercase text-primary-dark">{c.type}</span>
                  <p className="min-w-0 flex-1 font-bold leading-snug">
                    <Link href={c.href} className="hover:text-primary">{c.t}</Link>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">Mots-clés <em>proches</em></h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Investir au Bénin", "Emploi Bénin", "Installation", "Immobilier", "Cotonou"].map((k) => (
                  <Link key={k} href="/mot/exemple" className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark hover:bg-primary hover:text-white">{k}</Link>
                ))}
              </div>
            </div>
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
