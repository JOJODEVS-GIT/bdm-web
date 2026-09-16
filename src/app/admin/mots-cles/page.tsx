import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, RowActions, FilterChips, StatCard } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Mots-clés" };

/* MAQUETTE — Référentiel des mots-clés : 3 familles, fusion, stats (CDC §7.1). */

const MOTS = [
  { k: "Informatique", fam: "Secteur", tone: "blue" as const, contenus: 214, profils: 246, alertes: 246 },
  { k: "Cotonou", fam: "Lieu", tone: "green" as const, contenus: 312, profils: 189, alertes: 412 },
  { k: "Retour au pays", fam: "Thème", tone: "yellow" as const, contenus: 96, profils: 74, alertes: 388 },
  { k: "Santé", fam: "Secteur", tone: "blue" as const, contenus: 88, profils: 132, alertes: 158 },
  { k: "Paris", fam: "Lieu", tone: "green" as const, contenus: 187, profils: 214, alertes: 201 },
  { k: "Vodun & culture", fam: "Thème", tone: "yellow" as const, contenus: 41, profils: 12, alertes: 87 },
  { k: "Informatiques (doublon ?)", fam: "Secteur", tone: "red" as const, contenus: 3, profils: 1, alertes: 0 },
];

export default function AdminMotsClesPage() {
  return (
    <>
      <PageHead title="Mots-clés" desc="Le référentiel qui relie tout : contenus, profils, alertes, pages /mot/.">
        <button className="whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          + Nouveau mot-clé
        </button>
        <button className="rounded border border-line bg-paper px-4 py-2 text-sm font-bold text-ink-2 hover:border-primary hover:text-primary">
          Fusionner la sélection
        </button>
      </PageHead>

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Mots-clés au total" value="287" hint="objectif 300 au lancement" />
        <StatCard label="Secteurs" value="64" />
        <StatCard label="Lieux (pays + villes)" value="171" />
        <StatCard label="Thèmes" value="52" />
      </div>

      <div className="mt-5">
        <FilterChips items={["Tous", "Secteurs", "Lieux", "Thèmes", "Doublons possibles (1)", "Sans usage"]} />
      </div>

      <Card className="mt-4">
        <TableShell head={<><Th>Mot-clé</Th><Th>Famille</Th><Th>Contenus</Th><Th>Profils</Th><Th>Alertes</Th><Th>&nbsp;</Th></>}>
          {MOTS.map((m) => (
            <tr key={m.k} className="hover:bg-primary-faint">
              <Td className="font-semibold">{m.k}</Td>
              <Td><Badge tone={m.tone}>{m.fam}</Badge></Td>
              <Td className="tabular-nums">{m.contenus}</Td>
              <Td className="tabular-nums">{m.profils}</Td>
              <Td className="tabular-nums">{m.alertes}</Td>
              <Td><RowActions items={m.tone === "red" ? ["Fusionner", "Supprimer"] : ["Renommer", "Voir la page"]} /></Td>
            </tr>
          ))}
        </TableShell>
      </Card>

      <p className="mt-3 text-xs text-muted">
        Renommer un mot-clé met à jour tous les contenus, profils et alertes liés. La fusion
        transfère les abonnements d&apos;alertes vers le mot-clé conservé.
      </p>
    </>
  );
}
