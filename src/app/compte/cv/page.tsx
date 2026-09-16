import Link from "next/link";
import type { Metadata } from "next";
import { FileUser, Upload } from "lucide-react";

export const metadata: Metadata = { title: "Mon CV" };

/* MAQUETTE — CV du candidat : fichier, visibilité CVthèque (CDC §7.3). */

export default function CvPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Mon CV</h1>
        <p className="mt-1 text-sm text-ink-2">Votre CV sert à postuler en un clic et, si vous l&apos;acceptez, à être trouvé par les recruteurs.</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 border border-line p-5">
        <FileUser aria-hidden className="h-10 w-10 text-primary" strokeWidth={1.8} />
        <div className="min-w-0 flex-1">
          <p className="font-bold">cv-aichatou-2026.pdf</p>
          <p className="text-xs text-muted">Ajouté le 12 août · 240 Ko</p>
        </div>
        <button className="whitespace-nowrap rounded border-2 border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white">
          <Upload aria-hidden className="mr-1.5 inline h-4 w-4" /> Remplacer
        </button>
        <button className="text-sm font-bold text-danger hover:underline">Supprimer</button>
      </div>

      <div className="space-y-3 border border-line p-5">
        <p className="font-bold">Visibilité auprès des recruteurs</p>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]" />
          <span>
            <strong>CV publié dans la CVthèque.</strong> Les recruteurs partenaires RH peuvent trouver mon
            profil et mon CV avec mes critères (métier, ville, mobilité). Le badge « CV publié »
            s&apos;affiche sur mon profil.
          </span>
        </label>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]" />
          <span><strong>Alerte candidat.</strong> Être prévenu·e quand une offre correspond à mes mots-clés.</span>
        </label>
        <div className="flex flex-wrap items-center gap-2 pt-1 text-sm">
          <span className="font-bold">Disponibilité :</span>
          <select className="rounded border border-line bg-paper px-2 py-1.5 text-sm">
            <option>Ouverte aux opportunités</option>
            <option>En recherche active</option>
            <option>Indisponible</option>
          </select>
          <span className="font-bold ml-3">Mobilité :</span>
          <select className="rounded border border-line bg-paper px-2 py-1.5 text-sm">
            <option>Bénin uniquement</option>
            <option>Bénin + Afrique de l&apos;Ouest</option>
            <option>International</option>
          </select>
        </div>
      </div>

      <p className="text-sm text-ink-2">
        3 candidatures envoyées avec ce CV — <Link href="/compte/candidatures" className="font-bold text-primary hover:underline">voir mes candidatures →</Link>
      </p>
    </div>
  );
}
