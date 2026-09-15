import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Back-office — Modération" };

/* MAQUETTE — Back-office rédaction/modération (CDC §7.17). Interface interne, chrome allégé. */

const FILES = [
  { file: "Articles membres", n: 4 },
  { file: "Offres d'emploi", n: 2 },
  { file: "Événements", n: 3 },
  { file: "Petites annonces", n: 6 },
  { file: "Bonnes adresses", n: 1 },
  { file: "Comptes pro à valider", n: 2 },
  { file: "Signalements", n: 1, urgent: true },
];

const ATTENTE = [
  { type: "Article membre", t: "Mon premier Noël à Cotonou après 15 ans", by: "Élodie Z.", d: "il y a 2 h" },
  { type: "Offre", t: "Ingénieur structures h/f — bureau d'études", by: "PME Fintech", d: "il y a 5 h" },
  { type: "Annonce (rencontres)", t: "Femme 34 ans cherche relation sérieuse…", by: "Membre #1204", d: "hier", sensible: true },
  { type: "Compte pro", t: "ASBL Racines Bénin — Bruxelles", by: "Inscription", d: "hier" },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-paper-2">
      {/* Barre admin */}
      <header className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
          <span className="font-display font-black">BDM <span className="text-accent">Admin</span></span>
          <nav className="flex gap-5 text-sm font-semibold text-white/80">
            {["Modération", "Rédaction", "Communauté", "Régie", "Newsletter", "Statistiques", "Paramètres"].map((n, i) => (
              <Link key={n} href="/admin" className={i === 0 ? "text-accent" : "hover:text-accent"}>{n}</Link>
            ))}
          </nav>
          <span className="ml-auto text-xs text-white/60">Connecté : modération · <Link href="/" className="underline hover:text-accent">voir le site</Link></span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="font-display text-2xl font-black">Files de modération</h1>
        <p className="mt-1 text-sm text-ink-2">Objectif de traitement : 48 h ouvrées. La catégorie « rencontres » et les premiers contenus d&apos;un compte passent toujours en validation a priori.</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-4 xl:grid-cols-7">
          {FILES.map((f) => (
            <button key={f.file} className={`border p-3 text-left ${f.urgent ? "border-danger bg-danger-light" : "border-line bg-paper hover:border-primary"}`}>
              <span className={`font-display text-2xl font-black ${f.urgent ? "text-danger" : "text-primary"}`}>{f.n}</span>
              <p className="text-xs font-semibold leading-tight text-ink-2">{f.file}</p>
            </button>
          ))}
        </div>

        <section className="mt-8 border border-line bg-paper">
          <div className="flex items-center gap-3 border-b border-line bg-paper-2 px-4 py-3">
            <h2 className="font-bold">En attente ({ATTENTE.length})</h2>
            <span className="ml-auto text-xs text-muted">tri : plus ancien d&apos;abord</span>
          </div>
          <ul className="divide-y divide-line">
            {ATTENTE.map((a) => (
              <li key={a.t} className="flex flex-wrap items-center gap-3 px-4 py-3">
                <span className={`rounded px-2 py-0.5 text-xs font-bold uppercase ${a.sensible ? "bg-danger-light text-danger" : "bg-primary-light text-primary-dark"}`}>{a.type}</span>
                <p className="min-w-0 flex-1 truncate font-semibold">{a.t}</p>
                <span className="text-xs text-muted">{a.by} · {a.d}</span>
                <div className="flex gap-2">
                  <button className="rounded bg-primary px-3 py-1.5 text-xs font-bold text-white hover:bg-primary-dark">Valider</button>
                  <button className="rounded border border-line px-3 py-1.5 text-xs font-bold text-ink-2 hover:border-primary hover:text-primary">Voir</button>
                  <button className="rounded border border-danger px-3 py-1.5 text-xs font-bold text-danger hover:bg-danger hover:text-white">Refuser</button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Publiés aujourd'hui", n: "12" },
            { t: "Alertes envoyées ce matin", n: "1 847" },
            { t: "Nouveaux inscrits (7 j)", n: "38" },
          ].map((s) => (
            <div key={s.t} className="border border-line bg-paper p-4">
              <span className="font-display text-3xl font-black text-primary">{s.n}</span>
              <p className="text-sm text-ink-2">{s.t}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
