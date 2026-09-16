import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, RowActions, FilterChips, StatCard } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Communauté" };

/* MAQUETTE — Gestion des comptes : 4 annuaires, rôles, doublons, imports (CDC §7.17). */

const COMPTES = [
  { n: "Aïchatou S.", type: "Membre", tone: "blue" as const, ville: "Cotonou", inscrit: "12 août", pub: 3, st: "Actif", stTone: "green" as const },
  { n: "PME Fintech", type: "Entreprise", tone: "yellow" as const, ville: "Cotonou", inscrit: "3 sept.", pub: 4, st: "Actif", stTone: "green" as const },
  { n: "ASBL Racines Bénin", type: "Association", tone: "blue" as const, ville: "Bruxelles", inscrit: "hier", pub: 0, st: "À valider", stTone: "yellow" as const },
  { n: "BTP Horizon", type: "Entreprise", tone: "yellow" as const, ville: "Abidjan", inscrit: "hier", pub: 0, st: "À valider", stTone: "yellow" as const },
  { n: "DJ Wari", type: "Artiste", tone: "blue" as const, ville: "Paris", inscrit: "28 août", pub: 2, st: "Actif", stTone: "green" as const },
  { n: "Compte #0847", type: "Membre", tone: "blue" as const, ville: "—", inscrit: "10 sept.", pub: 0, st: "Banni (spam)", stTone: "red" as const },
];

export default function AdminCommunautePage() {
  return (
    <>
      <PageHead title="Communauté" desc="Les 4 annuaires, rôles, doublons, bannissements et imports.">
        <button className="rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          Importer des fiches (CSV)
        </button>
        <button className="rounded border border-line bg-paper px-4 py-2 text-sm font-bold text-ink-2 hover:border-primary hover:text-primary">
          Exporter
        </button>
      </PageHead>

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Membres" value="1 254" />
        <StatCard label="Entreprises" value="87" hint="2 à valider" tone="warn" />
        <StatCard label="Associations" value="152" hint="objectif 300" />
        <StatCard label="Artistes & groupes" value="43" />
      </div>

      <div className="mt-5">
        <FilterChips items={["Tous", "Membres", "Entreprises", "Associations", "Artistes", "À valider (2)", "Bannis", "Doublons possibles (3)"]} />
      </div>

      <Card className="mt-4">
        <TableShell head={<><Th>Compte</Th><Th>Type</Th><Th>Ville</Th><Th>Inscrit</Th><Th>Publications</Th><Th>Statut</Th><Th>&nbsp;</Th></>}>
          {COMPTES.map((c) => (
            <tr key={c.n} className="hover:bg-primary-faint">
              <Td className="font-semibold">{c.n}</Td>
              <Td><Badge tone={c.tone}>{c.type}</Badge></Td>
              <Td className="text-ink-2">{c.ville}</Td>
              <Td className="whitespace-nowrap text-muted">{c.inscrit}</Td>
              <Td className="tabular-nums">{c.pub}</Td>
              <Td><Badge tone={c.stTone}>{c.st}</Badge></Td>
              <Td><RowActions items={c.st === "À valider" ? ["Valider", "Refuser"] : ["Fiche", "Bannir"]} /></Td>
            </tr>
          ))}
        </TableShell>
      </Card>

      <p className="mt-3 text-xs text-muted">
        Fusion de doublons : sélectionner deux fiches → « Fusionner » conserve l&apos;historique des publications. Import CSV : modèle fourni (nom, type, pays, ville, e-mail de contact, secteurs).
      </p>
    </>
  );
}
