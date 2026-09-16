import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sécurité" };

/* MAQUETTE — Mot de passe, 2FA, sessions (CDC §7.16). */

const SESSIONS = [
  { d: "MacBook — Safari · Cotonou", t: "Session actuelle", now: true },
  { d: "iPhone — application web · Cotonou", t: "il y a 2 h", now: false },
  { d: "PC — Chrome · Paris", t: "il y a 9 jours", now: false },
];

export default function SecuritePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Sécurité</h1>
        <p className="mt-1 text-sm text-ink-2">Mot de passe, double authentification et appareils connectés.</p>
      </div>

      <div className="border border-line p-5">
        <p className="font-bold">Changer mon mot de passe</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {["Mot de passe actuel", "Nouveau mot de passe", "Confirmer"].map((l) => (
            <div key={l}>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted">{l}</label>
              <input type="password" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
            </div>
          ))}
        </div>
        <button className="mt-4 rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary-dark">Mettre à jour</button>
      </div>

      <div className="flex flex-wrap items-center gap-4 border border-line p-5">
        <div className="min-w-0 flex-1">
          <p className="font-bold">Double authentification (2FA)</p>
          <p className="text-sm text-ink-2">Un code depuis votre application d&apos;authentification à chaque connexion. Recommandé.</p>
        </div>
        <button className="rounded border-2 border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white">Activer</button>
      </div>

      <div className="border border-line">
        <div className="flex items-center justify-between border-b border-line bg-paper-2 px-4 py-3">
          <p className="font-bold">Appareils connectés</p>
          <button className="text-xs font-bold text-danger hover:underline">Déconnecter tout sauf ici</button>
        </div>
        <ul className="divide-y divide-line text-sm">
          {SESSIONS.map((s) => (
            <li key={s.d} className="flex items-center gap-3 px-4 py-3">
              <span className={`h-2 w-2 rounded-full ${s.now ? "bg-primary" : "bg-line"}`} />
              <span className="min-w-0 flex-1 font-semibold">{s.d}</span>
              <span className="text-xs text-muted">{s.t}</span>
              {!s.now && <button className="text-xs font-bold text-danger hover:underline">Déconnecter</button>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
