import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mon profil public" };

/* MAQUETTE — Édition du profil avec visibilité champ par champ (CDC §7.16). */

const CHAMPS = [
  { l: "Nom affiché", v: "Aïchatou S.", vis: "Public" },
  { l: "Photo", v: "aichatou.jpg", vis: "Public" },
  { l: "Ville / pays", v: "Cotonou · Bénin", vis: "Public" },
  { l: "Profession", v: "Ingénieure structures — fondatrice", vis: "Public" },
  { l: "Formation", v: "Polytechnique Montréal (génie civil)", vis: "Membres connectés" },
  { l: "LinkedIn", v: "linkedin.com/in/aichatou-exemple", vis: "Membres connectés" },
  { l: "Téléphone", v: "+229 XX XX XX XX", vis: "Privé" },
];

export default function ProfilComptePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-extrabold">Mon profil public</h1>
          <p className="mt-1 text-sm text-ink-2">
            Vous choisissez, champ par champ, ce qui est visible de tous, des membres connectés, ou de personne.
          </p>
        </div>
        <Link href="/communaute/membres/aichatou-s" className="rounded border-2 border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white">
          Voir mon profil comme visiteur
        </Link>
      </div>

      <div className="border border-line">
        <div className="flex items-center justify-between border-b border-line bg-paper-2 px-4 py-3">
          <p className="font-bold">Visibilité dans l&apos;annuaire</p>
          <label className="flex items-center gap-2 text-sm font-semibold">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-[var(--color-primary)]" />
            J&apos;apparais dans l&apos;annuaire des membres
          </label>
        </div>
        <ul className="divide-y divide-line">
          {CHAMPS.map((c) => (
            <li key={c.l} className="grid items-center gap-2 px-4 py-3 sm:grid-cols-[140px_minmax(0,1fr)_170px]">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">{c.l}</span>
              <input
                defaultValue={c.v}
                className="w-full rounded border border-line bg-paper px-3 py-1.5 text-sm focus:border-primary focus:outline-none"
              />
              <select defaultValue={c.vis} className="rounded border border-line bg-paper px-2 py-1.5 text-sm">
                <option>Public</option>
                <option>Membres connectés</option>
                <option>Privé</option>
              </select>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label htmlFor="bio" className="mb-1 block text-sm font-bold">Bio (visible sur le profil)</label>
        <textarea
          id="bio"
          rows={4}
          className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none"
          defaultValue="Ingénieure diplômée de Polytechnique Montréal, revenue à Cotonou en 2025 après neuf ans au Canada…"
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-bold">Mes mots-clés (secteurs, lieux, thèmes)</p>
        <div className="flex flex-wrap items-center gap-2">
          {["BTP", "Entrepreneuriat", "Retour au pays", "Cotonou", "Canada"].map((k) => (
            <span key={k} className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark">
              {k} ✕
            </span>
          ))}
          <input placeholder="Ajouter…" className="w-28 rounded border border-line bg-paper px-2 py-1 text-xs focus:border-primary focus:outline-none" />
        </div>
        <p className="mt-1 text-xs text-muted">Ils déterminent où votre profil apparaît et les alertes qui vous concernent.</p>
      </div>

      <div className="flex gap-3 border-t border-line pt-4">
        <button className="rounded bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary-dark">Enregistrer</button>
        <button className="text-sm font-semibold text-ink-2 hover:text-primary">Annuler</button>
      </div>
    </div>
  );
}
