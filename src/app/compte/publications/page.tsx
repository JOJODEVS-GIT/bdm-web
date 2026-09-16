import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mes publications" };

/* MAQUETTE — Publications du membre et leurs statuts (CDC §7.16). */

const PUBS = [
  { t: "Retour à Cotonou : mon parcours", type: "Article", d: "14 sept.", vues: "2 341", st: "En ligne", tone: "bg-primary-light text-primary-dark" },
  { t: "Afterwork BTP & diaspora — Cotonou", type: "Événement", d: "2 sept.", vues: "412", st: "En ligne", tone: "bg-primary-light text-primary-dark" },
  { t: "Ingénieur structures h/f", type: "Offre", d: "hier", vues: "—", st: "En modération", tone: "bg-accent-light text-ink" },
  { t: "Vends casque chantier + EPI neufs", type: "Annonce", d: "28 août", vues: "97", st: "Expirée le 27 oct.", tone: "bg-paper-2 text-ink-2 border border-line" },
];

export default function PublicationsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-extrabold">Mes publications</h1>
          <p className="mt-1 text-sm text-ink-2">Tout ce que vous avez publié, avec son statut et ses vues.</p>
        </div>
        <Link href="/publier" className="rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          + Publier
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {["Tout (4)", "Articles (1)", "Événements (1)", "Offres (1)", "Annonces (1)"].map((f, i) => (
          <button key={f} className={i === 0 ? "rounded-full bg-primary px-3 py-1 text-xs font-bold text-white" : "rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-2 hover:border-primary hover:text-primary"}>
            {f}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="bg-paper-2 text-left text-xs font-bold uppercase tracking-wider text-ink-2">
            <tr><th className="px-4 py-2.5">Contenu</th><th className="px-4 py-2.5">Type</th><th className="px-4 py-2.5">Publié</th><th className="px-4 py-2.5">Vues</th><th className="px-4 py-2.5">Statut</th><th className="px-4 py-2.5"></th></tr>
          </thead>
          <tbody className="divide-y divide-line">
            {PUBS.map((p) => (
              <tr key={p.t} className="hover:bg-primary-faint">
                <td className="px-4 py-3 font-bold">{p.t}</td>
                <td className="px-4 py-3 text-ink-2">{p.type}</td>
                <td className="whitespace-nowrap px-4 py-3 text-muted">{p.d}</td>
                <td className="px-4 py-3 tabular-nums">{p.vues}</td>
                <td className="px-4 py-3"><span className={`whitespace-nowrap rounded px-2 py-0.5 text-xs font-bold ${p.tone}`}>{p.st}</span></td>
                <td className="px-4 py-3">
                  <div className="flex flex-nowrap justify-end gap-2">
                    <button className="whitespace-nowrap rounded border border-line px-2.5 py-1 text-xs font-bold text-ink-2 hover:border-primary hover:text-primary">Modifier</button>
                    <button className="whitespace-nowrap rounded border border-danger px-2.5 py-1 text-xs font-bold text-danger hover:bg-danger hover:text-white">Retirer</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted">
        Un contenu « en modération » est visible de vous seul. Une annonce expirée peut être renouvelée 60 jours depuis « Modifier ».
      </p>
    </div>
  );
}
