import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, RowActions, StatCard } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Régie publicitaire" };

/* MAQUETTE — Bannières maison, contrats partenaires, publi-articles (CDC §7.14). */

const BANNIERES = [
  { n: "Compagnie aérienne — promo Cotonou", slot: "Bandeau haut", periode: "1–30 sept.", imp: "48 210", clics: "612", ctr: "1,3 %", st: "Active", tone: "green" as const },
  { n: "Transfert d'argent — frais offerts", slot: "Pavé latéral 1", periode: "1–30 sept.", imp: "39 800", clics: "343", ctr: "0,9 %", st: "Active", tone: "green" as const },
  { n: "École partenaire — rentrée", slot: "Pavé milieu", periode: "à partir du 20 sept.", imp: "—", clics: "—", ctr: "—", st: "Programmée", tone: "yellow" as const },
  { n: "Hôtel Ouidah — basse saison", slot: "Bas de page", periode: "août", imp: "61 004", clics: "298", ctr: "0,5 %", st: "Terminée", tone: "gray" as const },
];

export default function AdminRegiePage() {
  return (
    <>
      <PageHead title="Régie publicitaire" desc="Bannières maison, contrats partenaires, publi-articles et chiffres pour la page Annonceurs.">
        <button className="whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          + Nouvelle bannière
        </button>
        <button className="rounded border border-line bg-paper px-4 py-2 text-sm font-bold text-ink-2 hover:border-primary hover:text-primary">
          Kit média (PDF)
        </button>
      </PageHead>

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Campagnes actives" value="2" />
        <StatCard label="Impressions (30 j)" value="149 014" />
        <StatCard label="Clics (30 j)" value="1 253" hint="CTR moyen 0,9 %" />
        <StatCard label="Demandes de devis" value="3" tone="warn" hint="à rappeler" />
      </div>

      <Card className="mt-5" title="Bannières">
        <TableShell head={<><Th>Campagne</Th><Th>Emplacement</Th><Th>Période</Th><Th>Impressions</Th><Th>Clics</Th><Th>CTR</Th><Th>Statut</Th><Th>&nbsp;</Th></>}>
          {BANNIERES.map((b) => (
            <tr key={b.n} className="hover:bg-primary-faint">
              <Td className="font-semibold">{b.n}</Td>
              <Td className="text-ink-2">{b.slot}</Td>
              <Td className="whitespace-nowrap text-muted">{b.periode}</Td>
              <Td className="tabular-nums">{b.imp}</Td>
              <Td className="tabular-nums">{b.clics}</Td>
              <Td className="tabular-nums">{b.ctr}</Td>
              <Td><Badge tone={b.tone}>{b.st}</Badge></Td>
              <Td><RowActions items={["Modifier", "Stats"]} /></Td>
            </tr>
          ))}
        </TableShell>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Emplacements">
          <ul className="divide-y divide-line text-sm">
            {[
              "Bandeau haut (toutes pages) — 1 rotation",
              "Pavé latéral 1 et 2 (toutes pages)",
              "Pavé milieu (accueil)",
              "Bas de page (toutes pages)",
              "Liens promotionnels (colonne latérale)",
              "À la une sponsorisée (accueil, marquée « partenaire »)",
            ].map((e) => (
              <li key={e} className="px-4 py-2.5 text-ink-2">{e}</li>
            ))}
          </ul>
        </Card>
        <Card title="Publi-articles & contrats">
          <ul className="divide-y divide-line text-sm">
            {[
              { t: "Publi-article : « S'assurer en tant qu'expatrié »", st: "En ligne · marqué partenaire", tone: "green" as const },
              { t: "Contrat Partenaire RH — PME Fintech", st: "Actif jusqu'au 31 déc.", tone: "green" as const },
              { t: "Pack annonceur — Compagnie aérienne", st: "Devis envoyé", tone: "yellow" as const },
            ].map((x) => (
              <li key={x.t} className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="font-semibold">{x.t}</span>
                <Badge tone={x.tone}>{x.st}</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
