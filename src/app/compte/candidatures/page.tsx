import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mes candidatures" };

/* MAQUETTE — Suivi des candidatures (CDC §7.3). */

const CANDIDATURES = [
  { o: "Cheffe de projet BTP — groupe régional", org: "BTP Horizon · Abidjan", d: "12 sept.", st: "Entretien proposé 🎉", tone: "bg-accent-light text-ink" },
  { o: "Ingénieur structures h/f — bureau d'études", org: "Cabinet · Cotonou", d: "8 sept.", st: "CV consulté", tone: "bg-primary-light text-primary-dark" },
  { o: "Consultante génie civil — mission 6 mois", org: "ONG · Parakou", d: "1 sept.", st: "Transmise", tone: "bg-paper-2 text-ink-2 border border-line" },
];

export default function CandidaturesPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Mes candidatures</h1>
        <p className="mt-1 text-sm text-ink-2">Le suivi de vos candidatures envoyées depuis le site.</p>
      </div>

      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[560px] text-sm">
          <thead className="bg-paper-2 text-left text-xs font-bold uppercase tracking-wider text-ink-2">
            <tr><th className="px-4 py-2.5">Offre</th><th className="px-4 py-2.5">Recruteur</th><th className="px-4 py-2.5">Envoyée</th><th className="px-4 py-2.5">Statut</th><th className="px-4 py-2.5"></th></tr>
          </thead>
          <tbody className="divide-y divide-line">
            {CANDIDATURES.map((c) => (
              <tr key={c.o} className="hover:bg-primary-faint">
                <td className="px-4 py-3 font-bold">{c.o}</td>
                <td className="px-4 py-3 text-ink-2">{c.org}</td>
                <td className="whitespace-nowrap px-4 py-3 text-muted">{c.d}</td>
                <td className="px-4 py-3"><span className={`rounded px-2 py-0.5 text-xs font-bold ${c.tone}`}>{c.st}</span></td>
                <td className="px-4 py-3 text-right">
                  <Link href="/emploi/offre-exemple" className="text-xs font-bold uppercase text-primary hover:underline">Voir l&apos;offre</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted">
        « Transmise » : le recruteur a reçu votre CV. « CV consulté » : il l&apos;a ouvert. Votre e-mail
        n&apos;est jamais communiqué sans votre action.
      </p>
      <Link href="/emploi" className="inline-block rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary-dark">
        Voir les offres du moment
      </Link>
    </div>
  );
}
