import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site/chrome";
import { Bell } from "lucide-react";

export const metadata: Metadata = { title: "Mon espace" };

/* MAQUETTE — Tableau de bord membre (CDC §7.16), vue connectée d'exemple (Aïchatou). */

const MENU = ["Tableau de bord", "Mon profil public", "Mes publications", "Mes alertes", "Mon CV", "Mes candidatures", "Mes favoris", "Sécurité", "Mes données"];

export default function ComptePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="border border-line">
            <div className="flex items-center gap-3 border-b border-line bg-paper-2 p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display font-black text-ink">A</span>
              <div><p className="font-bold leading-tight">Aïchatou S.</p><p className="text-xs text-muted">Membre · Cotonou</p></div>
            </div>
            <nav className="p-2 text-sm">
              {MENU.map((m, i) => (
                <Link key={m} href="/compte" className={`block rounded px-3 py-2 font-semibold ${i === 0 ? "bg-primary text-white" : "text-ink-2 hover:bg-primary-faint hover:text-primary"}`}>{m}</Link>
              ))}
            </nav>
          </aside>

          <div className="space-y-8">
            <section className="grid gap-4 sm:grid-cols-3">
              {[
                { n: "3", l: "publications en ligne" },
                { n: "5", l: "alertes actives" },
                { n: "128", l: "vues sur mon profil ce mois" },
              ].map((s) => (
                <div key={s.l} className="border border-line p-4">
                  <span className="font-display text-3xl font-black text-primary">{s.n}</span>
                  <p className="text-sm text-ink-2">{s.l}</p>
                </div>
              ))}
            </section>

            <section>
              <h2 className="section-title text-lg border-b-2 border-line pb-2 mb-4">Mes <em>publications</em></h2>
              <ul className="divide-y divide-line border border-line text-sm">
                {[
                  { t: "Retour à Cotonou : mon parcours", type: "Article", s: "En ligne", ok: true },
                  { t: "Afterwork BTP & diaspora — Cotonou", type: "Événement", s: "En ligne", ok: true },
                  { t: "Ingénieur structures h/f", type: "Offre", s: "En modération", ok: false },
                ].map((p) => (
                  <li key={p.t} className="flex flex-wrap items-center gap-3 p-4">
                    <span className="rounded bg-primary-light px-2 py-0.5 text-xs font-bold uppercase text-primary-dark">{p.type}</span>
                    <p className="min-w-0 flex-1 font-bold">{p.t}</p>
                    <span className={`rounded px-2 py-0.5 text-xs font-bold ${p.ok ? "bg-primary-light text-primary-dark" : "bg-accent-light text-ink"}`}>{p.s}</span>
                    <button className="text-xs font-bold uppercase text-primary hover:underline">Modifier</button>
                  </li>
                ))}
              </ul>
              <Link href="/publier" className="mt-4 inline-block rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary-dark">+ Publier un contenu</Link>
            </section>

            <section>
              <h2 className="section-title text-lg border-b-2 border-line pb-2 mb-4">Mes <em>alertes</em></h2>
              <div className="flex flex-wrap gap-2">
                {["BTP + Cotonou", "Retour au pays", "Événements Paris", "Marchés publics Bénin", "Concerts"].map((a) => (
                  <span key={a} className="flex items-center gap-2 rounded-full border border-primary px-3 py-1.5 text-sm font-semibold text-primary-dark">
                    <Bell aria-hidden className="h-3.5 w-3.5" /> {a} <button aria-label={`Supprimer l'alerte ${a}`} className="text-muted hover:text-danger">✕</button>
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted">Envoi groupé chaque matin à 7h — modifiable alerte par alerte.</p>
            </section>

            <section className="border border-line bg-paper-2 p-5">
              <h2 className="section-title text-base">Mon <em>CV</em></h2>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded bg-accent px-2 py-1 text-xs font-bold uppercase text-ink">CV publié</span>
                <span className="font-semibold">cv-aichatou-2026.pdf</span>
                <span className="text-muted">· visible des recruteurs partenaires</span>
                <button className="ml-auto text-xs font-bold uppercase text-primary hover:underline">Remplacer</button>
                <button className="text-xs font-bold uppercase text-ink-2 hover:text-danger">Retirer</button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
