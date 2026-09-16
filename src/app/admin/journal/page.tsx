import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, FilterChips } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Journal d'activité" };

/* MAQUETTE — Journal d'audit : qui a fait quoi, quand (CDC §10.3). */

const LOGS = [
  { q: "Validation", d: "Article « Mon premier Noël à Cotonou » validé et publié", by: "Modératrice A.", t: "16 sept. 09:41", tone: "green" as const },
  { q: "Refus", d: "Annonce refusée (motif : coordonnées dans le texte)", by: "Modératrice A.", t: "16 sept. 09:12", tone: "red" as const },
  { q: "Compte", d: "BTP Horizon validé comme entreprise", by: "Josué", t: "15 sept. 18:03", tone: "green" as const },
  { q: "Régie", d: "Bannière « École partenaire » programmée (pavé milieu)", by: "Josué", t: "15 sept. 17:40", tone: "blue" as const },
  { q: "Paramètre", d: "Quota offres tests passé de 2 à 3", by: "Josué", t: "14 sept. 11:20", tone: "yellow" as const },
  { q: "Bannissement", d: "Compte #0847 banni (spam répété)", by: "Josué", t: "13 sept. 22:08", tone: "red" as const },
  { q: "Une", d: "« Retour à Cotonou » ajouté à la une (position 1)", by: "Rédaction", t: "13 sept. 08:00", tone: "blue" as const },
];

export default function AdminJournalPage() {
  return (
    <>
      <PageHead title="Journal d'activité" desc="Toutes les actions sensibles, horodatées et attribuées. Conservation 12 mois.">
        <button className="rounded border border-line bg-paper px-4 py-2 text-sm font-bold text-ink-2 hover:border-primary hover:text-primary">
          Exporter (CSV)
        </button>
      </PageHead>

      <FilterChips items={["Tout", "Validations", "Refus", "Comptes", "Régie", "Paramètres", "Par personne"]} />

      <Card className="mt-4">
        <TableShell head={<><Th>Type</Th><Th>Action</Th><Th>Par</Th><Th>Quand</Th></>}>
          {LOGS.map((l) => (
            <tr key={l.d} className="hover:bg-primary-faint">
              <Td><Badge tone={l.tone}>{l.q}</Badge></Td>
              <Td className="font-semibold">{l.d}</Td>
              <Td className="text-ink-2">{l.by}</Td>
              <Td className="whitespace-nowrap text-muted">{l.t}</Td>
            </tr>
          ))}
        </TableShell>
      </Card>
    </>
  );
}
