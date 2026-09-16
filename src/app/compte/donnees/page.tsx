import type { Metadata } from "next";
import { Download, Trash2 } from "lucide-react";

export const metadata: Metadata = { title: "Mes données" };

/* MAQUETTE — Export, consentements, suppression (APDP / RGPD — CDC §10.3). */

export default function DonneesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Mes données</h1>
        <p className="mt-1 text-sm text-ink-2">
          Vos droits sur vos données personnelles (loi béninoise 2017-20 et RGPD) : consulter, exporter, supprimer.
        </p>
      </div>

      <div className="space-y-3 border border-line p-5">
        <p className="font-bold">Mes consentements</p>
        {[
          { l: "Apparaître dans l'annuaire public des membres", on: true },
          { l: "CV consultable par les recruteurs partenaires", on: true },
          { l: "Recevoir la newsletter mensuelle", on: true },
          { l: "Recevoir les alertes e-mail de mes mots-clés", on: true },
          { l: "Être contacté·e pour des témoignages presse", on: false },
        ].map((c) => (
          <label key={c.l} className="flex items-center gap-3 text-sm">
            <input type="checkbox" defaultChecked={c.on} className="h-4 w-4 accent-[var(--color-primary)]" />
            {c.l}
          </label>
        ))}
        <button className="mt-2 rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">Enregistrer</button>
      </div>

      <div className="flex flex-wrap items-center gap-4 border border-line p-5">
        <div className="min-w-0 flex-1">
          <p className="font-bold">Exporter mes données</p>
          <p className="text-sm text-ink-2">Profil, publications, candidatures, messages : un fichier ZIP (JSON + PDF) envoyé par e-mail.</p>
        </div>
        <button className="whitespace-nowrap rounded border-2 border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white">
          <Download aria-hidden className="mr-1.5 inline h-4 w-4" /> Demander l&apos;export
        </button>
      </div>

      <div className="border-2 border-danger bg-danger-light p-5">
        <p className="font-bold text-danger">Supprimer mon compte</p>
        <p className="mt-1 text-sm text-ink">
          Profil, publications et alertes supprimés définitivement sous 30 jours (délai de rétractation).
          Les contenus déjà partagés dans les alertes e-mail envoyées ne peuvent pas être rappelés.
        </p>
        <button className="mt-3 rounded bg-danger px-4 py-2 text-sm font-bold text-white hover:opacity-90">
          <Trash2 aria-hidden className="mr-1.5 inline h-4 w-4" /> Demander la suppression
        </button>
      </div>
    </div>
  );
}
