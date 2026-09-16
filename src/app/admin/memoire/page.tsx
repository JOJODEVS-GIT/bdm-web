import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, RowActions, StatCard } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Mémoire & HCBE" };

/* MAQUETTE — Contenus mémoire (validation historique) + pages institutionnelles. */

const LIEUX = [
  { n: "Porte du Non-Retour", ville: "Ouidah", st: "Validé historiquement", tone: "green" as const },
  { n: "Route de l'Esclave", ville: "Ouidah", st: "Validé historiquement", tone: "green" as const },
  { n: "Palais royaux d'Abomey", ville: "Abomey", st: "Sources à compléter", tone: "yellow" as const },
  { n: "Temple des Pythons", ville: "Ouidah", st: "Validé historiquement", tone: "green" as const },
];

export default function AdminMemoirePage() {
  return (
    <>
      <PageHead title="Mémoire & HCBE" desc="Lieux, itinéraires, bibliothèque, guides — et pages institutionnelles du HCBE." />

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Lieux de mémoire" value="24" hint="repris de l'ancien site" />
        <StatCard label="Itinéraires" value="2" />
        <StatCard label="Ressources culturelles" value="5" />
        <StatCard label="Guides pratiques" value="4" />
      </div>

      <Card className="mt-5" title="Lieux de mémoire" action={<button className="whitespace-nowrap text-xs font-bold uppercase text-primary hover:underline">+ Ajouter un lieu</button>}>
        <TableShell head={<><Th>Lieu</Th><Th>Ville</Th><Th>Validation historique</Th><Th>&nbsp;</Th></>}>
          {LIEUX.map((l) => (
            <tr key={l.n} className="hover:bg-primary-faint">
              <Td className="font-semibold">{l.n}</Td>
              <Td className="text-ink-2">{l.ville}</Td>
              <Td><Badge tone={l.tone}>{l.st}</Badge></Td>
              <Td><RowActions items={["Modifier", "Sources"]} /></Td>
            </tr>
          ))}
        </TableShell>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Pages institutionnelles">
          <ul className="divide-y divide-line text-sm">
            {[
              { p: "Missions du HCBE", st: "Texte d'exemple — à remplacer", tone: "yellow" as const },
              { p: "Bureau exécutif (6 postes)", st: "Photos et noms manquants", tone: "yellow" as const },
              { p: "Ambassades & consulats", st: "4 / liste complète attendue", tone: "yellow" as const },
              { p: "Charte de la communauté", st: "À rédiger", tone: "red" as const },
            ].map((x) => (
              <li key={x.p} className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="font-semibold">{x.p}</span>
                <Badge tone={x.tone}>{x.st}</Badge>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Validation historique">
          <p className="p-4 text-sm text-ink-2">
            Tout contenu mémoire passe par le valideur historique désigné par le HCBE
            (questionnaire H) avant publication. Le badge « Validé historiquement »
            s&apos;affiche sur le site avec les sources citées.
          </p>
        </Card>
      </div>
    </>
  );
}
