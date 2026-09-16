import type { Metadata } from "next";
import { Bell } from "lucide-react";

export const metadata: Metadata = { title: "Mes alertes" };

/* MAQUETTE — Gestion des alertes par mots-clés (CDC §7.1). */

const ALERTES = [
  { k: ["BTP", "Cotonou"], types: "Offres + articles", freq: "Quotidien", on: true },
  { k: ["Retour au pays"], types: "Tout", freq: "Quotidien", on: true },
  { k: ["Événements", "Paris"], types: "Événements", freq: "Immédiat", on: true },
  { k: ["Marchés publics", "Bénin"], types: "Offres", freq: "Quotidien", on: true },
  { k: ["Concerts"], types: "Événements", freq: "Quotidien", on: false },
];

export default function AlertesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Mes alertes</h1>
        <p className="mt-1 text-sm text-ink-2">
          Recevez par e-mail les nouveaux contenus qui correspondent à vos mots-clés. Envoi groupé chaque matin à 7h, ou immédiat.
        </p>
      </div>

      {/* Créer une alerte */}
      <div className="border-2 border-primary p-4">
        <p className="font-bold">Créer une alerte</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <input
            placeholder="Mots-clés (ex. : Santé, Montréal…)"
            className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none sm:w-64"
          />
          <select className="rounded border border-line bg-paper px-3 py-2 text-sm">
            <option>Tous les contenus</option>
            <option>Offres d&apos;emploi</option>
            <option>Articles</option>
            <option>Événements</option>
            <option>Annonces</option>
          </select>
          <select className="rounded border border-line bg-paper px-3 py-2 text-sm">
            <option>Quotidien (7h)</option>
            <option>Immédiat</option>
          </select>
          <button className="rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
            <Bell aria-hidden className="mr-1.5 inline h-4 w-4" /> Créer
          </button>
        </div>
      </div>

      {/* Liste */}
      <ul className="divide-y divide-line border border-line">
        {ALERTES.map((a) => (
          <li key={a.k.join()} className="flex flex-wrap items-center gap-3 p-4">
            <div className="flex flex-wrap gap-1.5">
              {a.k.map((k) => (
                <span key={k} className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark">{k}</span>
              ))}
            </div>
            <span className="text-sm text-ink-2">{a.types}</span>
            <select defaultValue={a.freq} className="rounded border border-line bg-paper px-2 py-1 text-xs">
              <option>Quotidien</option>
              <option>Immédiat</option>
            </select>
            <label className="ml-auto flex items-center gap-2 text-xs font-bold">
              <input type="checkbox" defaultChecked={a.on} className="h-4 w-4 accent-[var(--color-primary)]" />
              {a.on ? "Active" : "En pause"}
            </label>
            <button className="text-xs font-bold text-danger hover:underline">Supprimer</button>
          </li>
        ))}
      </ul>

      <p className="text-xs text-muted">5 alertes · dernière réception : ce matin 7h02 (3 nouveaux contenus).</p>
    </div>
  );
}
