import type { Metadata } from "next";
import { PageHead, Card, Badge, FilterChips } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Modération" };

/* MAQUETTE — Modération : files par type + panneau de détail (CDC §7.17). */

const FILES = [
  { l: "Tout", n: 19 },
  { l: "Articles membres", n: 4 },
  { l: "Offres", n: 2 },
  { l: "Événements", n: 3 },
  { l: "Annonces", n: 6 },
  { l: "Adresses", n: 1 },
  { l: "Comptes pro", n: 2 },
  { l: "Signalements", n: 1 },
];

const EN_ATTENTE = [
  { type: "Article membre", t: "Mon premier Noël à Cotonou après 15 ans", by: "Élodie Z. · Lyon", d: "il y a 2 h", sel: true },
  { type: "Offre", t: "Ingénieur structures h/f — bureau d'études", by: "PME Fintech", d: "il y a 5 h" },
  { type: "Annonce · rencontres", t: "Femme 34 ans cherche relation sérieuse…", by: "Membre #1204", d: "hier", sensible: true },
  { type: "Compte pro", t: "ASBL Racines Bénin — Bruxelles", by: "Inscription", d: "hier" },
  { type: "Événement", t: "Tournoi de foot inter-assos — Paris", by: "Amicale des Écureuils", d: "hier" },
  { type: "Adresse", t: "Restaurant Le Cotonou — Marseille", by: "proposé par Ulrich T.", d: "avant-hier" },
];

export default function ModerationPage() {
  return (
    <>
      <PageHead title="Modération" desc="Objectif de traitement : 48 h ouvrées. « Rencontres » et premiers contenus d'un compte : validation a priori." />

      <FilterChips items={FILES.map((f) => `${f.l} (${f.n})`)} />

      <div className="mt-5 grid gap-6 xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        {/* File d'attente */}
        <Card title="En attente (19)" action={<span className="text-xs text-muted">plus ancien d&apos;abord</span>}>
          <ul className="divide-y divide-line">
            {EN_ATTENTE.map((a) => (
              <li
                key={a.t}
                className={`cursor-pointer px-4 py-3 ${a.sel ? "border-l-4 border-primary bg-primary-faint" : "border-l-4 border-transparent hover:bg-primary-faint"}`}
              >
                <div className="flex items-center gap-2">
                  <Badge tone={a.sensible ? "red" : "blue"}>{a.type}</Badge>
                  <span className="ml-auto text-xs text-muted">{a.d}</span>
                </div>
                <p className="mt-1.5 truncate font-bold">{a.t}</p>
                <p className="text-xs text-ink-2">{a.by}</p>
              </li>
            ))}
          </ul>
        </Card>

        {/* Panneau de détail */}
        <Card title="Aperçu — Article membre">
          <div className="p-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="blue">Article membre</Badge>
              <Badge tone="gray">1re publication de ce compte</Badge>
              <span className="ml-auto text-xs text-muted">soumis il y a 2 h</span>
            </div>

            <h2 className="font-display mt-3 text-2xl font-extrabold leading-tight">
              Mon premier Noël à Cotonou après 15 ans
            </h2>
            <p className="mt-1 text-sm text-ink-2">
              par <strong>Élodie Z.</strong> · Lyon, France · mots-clés : Retour au pays, Fêtes, Cotonou
            </p>

            <div className="mt-4 max-w-2xl space-y-3 rounded border border-line bg-paper-2 p-4 text-sm leading-relaxed">
              <p>
                Quinze ans que je n&apos;avais pas passé décembre au pays. Quand l&apos;avion a
                touché la piste de Cadjèhoun, ma fille de huit ans a applaudi — elle qui ne
                connaissait le Bénin que par les récits de sa grand-mère…
              </p>
              <p className="text-muted">[ aperçu du contenu complet — 4 200 caractères, 2 photos jointes ]</p>
            </div>

            <div className="mt-5 border-t border-line pt-4">
              <label htmlFor="motif" className="mb-1 block text-sm font-bold">
                Message au membre (obligatoire en cas de refus)
              </label>
              <textarea
                id="motif"
                rows={2}
                placeholder="Ex. : merci de flouter les visages des enfants sur la photo 2…"
                className="w-full max-w-2xl rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary-dark">
                  ✓ Valider et publier
                </button>
                <button className="rounded border border-line px-4 py-2 text-sm font-bold text-ink-2 hover:border-primary hover:text-primary">
                  Valider + mettre à la une
                </button>
                <button className="rounded border border-danger px-4 py-2 text-sm font-bold text-danger hover:bg-danger hover:text-white">
                  Refuser
                </button>
                <button className="ml-auto text-sm font-semibold text-ink-2 hover:text-primary">
                  Passer au suivant →
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
