import Link from "next/link";
import { Bell } from "lucide-react";

/* MAQUETTE — Tableau de bord membre : vue connectée d'exemple (Aïchatou). */

export default function ComptePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Bonjour Aïchatou 👋</h1>
        <p className="mt-1 text-sm text-ink-2">Voici l&apos;activité de votre compte.</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { n: "3", l: "publications en ligne", href: "/compte/publications" },
          { n: "5", l: "alertes actives", href: "/compte/alertes" },
          { n: "128", l: "vues sur mon profil ce mois", href: "/compte/profil" },
        ].map((s) => (
          <Link key={s.l} href={s.href} className="border border-line p-4 hover:border-primary">
            <span className="font-display text-3xl font-extrabold text-primary">{s.n}</span>
            <p className="text-sm text-ink-2">{s.l}</p>
          </Link>
        ))}
      </section>

      <section>
        <h2 className="section-title mb-4 border-b-2 border-line pb-2 text-lg">
          Mes <em>publications</em>
        </h2>
        <ul className="divide-y divide-line border border-line text-sm">
          {[
            { t: "Retour à Cotonou : mon parcours", type: "Article", s: "En ligne", ok: true },
            { t: "Afterwork BTP & diaspora — Cotonou", type: "Événement", s: "En ligne", ok: true },
            { t: "Ingénieur structures h/f", type: "Offre", s: "En modération", ok: false },
          ].map((p) => (
            <li key={p.t} className="flex flex-wrap items-center gap-3 p-4">
              <span className="whitespace-nowrap rounded bg-primary-light px-2 py-0.5 text-xs font-bold uppercase text-primary-dark">
                {p.type}
              </span>
              <p className="min-w-0 flex-1 font-bold">{p.t}</p>
              <span className={`whitespace-nowrap rounded px-2 py-0.5 text-xs font-bold ${p.ok ? "bg-primary-light text-primary-dark" : "bg-accent-light text-ink"}`}>
                {p.s}
              </span>
              <Link href="/compte/publications" className="whitespace-nowrap text-xs font-bold uppercase text-primary hover:underline">
                Gérer
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/publier" className="mt-4 inline-block rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          + Publier un contenu
        </Link>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="border border-line p-5">
          <h2 className="section-title text-base">
            Mes <em>alertes</em>
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {["BTP + Cotonou", "Retour au pays", "Événements Paris"].map((a) => (
              <span key={a} className="flex items-center gap-1.5 rounded-full border border-primary px-3 py-1.5 text-sm font-semibold text-primary-dark">
                <Bell aria-hidden className="h-3.5 w-3.5" /> {a}
              </span>
            ))}
          </div>
          <Link href="/compte/alertes" className="mt-3 inline-block text-xs font-bold uppercase text-primary hover:underline">
            Gérer mes 5 alertes →
          </Link>
        </div>
        <div className="border border-line bg-paper-2 p-5">
          <h2 className="section-title text-base">
            Mon <em>CV</em>
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded bg-accent px-2 py-1 text-xs font-bold uppercase text-ink">CV publié</span>
            <span className="font-semibold">cv-aichatou-2026.pdf</span>
          </div>
          <Link href="/compte/cv" className="mt-3 inline-block text-xs font-bold uppercase text-primary hover:underline">
            Gérer mon CV et ma visibilité →
          </Link>
        </div>
      </section>
    </div>
  );
}
