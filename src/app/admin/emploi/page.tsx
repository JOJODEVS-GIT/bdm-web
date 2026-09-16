import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, RowActions, FilterChips, StatCard } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Emploi" };

/* MAQUETTE — Gestion emploi : offres, candidatures, recruteurs, partenaires RH (CDC §7.17). */

const OFFRES = [
  { t: "Développeur full-stack h/f", org: "PME Fintech", st: "En ligne", tone: "green" as const, cand: 14, exp: "14 nov." },
  { t: "Ingénieur structures h/f", org: "PME Fintech", st: "En modération", tone: "yellow" as const, cand: 0, exp: "—" },
  { t: "Chargé(e) de programme santé", org: "ONG Bénin Avenir", st: "En ligne", tone: "green" as const, cand: 22, exp: "30 sept. ⚠️" },
  { t: "Stage marketing digital", org: "Startup e-commerce", st: "En ligne", tone: "green" as const, cand: 31, exp: "5 oct." },
  { t: "Comptable senior h/f", org: "Cabinet d'expertise", st: "Expirée", tone: "gray" as const, cand: 9, exp: "1 sept." },
];

const RECRUTEURS = [
  { org: "PME Fintech", plan: "Partenaire RH", tone: "yellow" as const, quota: "Illimité", offres: 3 },
  { org: "ONG Bénin Avenir", plan: "Gratuit", tone: "gray" as const, quota: "2 / 3 offres tests", offres: 1 },
  { org: "Cabinet d'expertise", plan: "Gratuit", tone: "gray" as const, quota: "3 / 3 — quota épuisé", offres: 0 },
];

export default function AdminEmploiPage() {
  return (
    <>
      <PageHead title="Emploi" desc="Offres, candidatures, recruteurs et partenaires RH.">
        <button className="rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          + Créer une offre
        </button>
      </PageHead>

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Offres actives" value="42" hint="objectif : 100 en permanence" />
        <StatCard label="Candidatures (7 j)" value="87" />
        <StatCard label="CV publiés en CVthèque" value="156" />
        <StatCard label="Partenaires RH" value="4" hint="objectif : 20" />
      </div>

      <div className="mt-5">
        <FilterChips items={["Toutes (48)", "En ligne (42)", "En modération (2)", "Expirent sous 7 j (3)", "Expirées"]} />
      </div>

      <Card className="mt-4" title="Offres">
        <TableShell head={<><Th>Offre</Th><Th>Recruteur</Th><Th>Statut</Th><Th>Candidatures</Th><Th>Expire</Th><Th>&nbsp;</Th></>}>
          {OFFRES.map((o) => (
            <tr key={o.t} className="hover:bg-primary-faint">
              <Td className="font-semibold">{o.t}</Td>
              <Td className="text-ink-2">{o.org}</Td>
              <Td><Badge tone={o.tone}>{o.st}</Badge></Td>
              <Td className="tabular-nums">{o.cand}</Td>
              <Td className="whitespace-nowrap text-muted">{o.exp}</Td>
              <Td><RowActions items={["Voir", "Modifier"]} /></Td>
            </tr>
          ))}
        </TableShell>
      </Card>

      <Card className="mt-6" title="Recruteurs" action={<button className="text-xs font-bold uppercase text-primary hover:underline">Passer un compte en Partenaire RH</button>}>
        <TableShell head={<><Th>Structure</Th><Th>Formule</Th><Th>Quota</Th><Th>Offres en ligne</Th><Th>&nbsp;</Th></>}>
          {RECRUTEURS.map((r) => (
            <tr key={r.org} className="hover:bg-primary-faint">
              <Td className="font-semibold">{r.org}</Td>
              <Td><Badge tone={r.tone}>{r.plan}</Badge></Td>
              <Td className="text-ink-2">{r.quota}</Td>
              <Td className="tabular-nums">{r.offres}</Td>
              <Td><RowActions items={["Fiche", "Contacter"]} /></Td>
            </tr>
          ))}
        </TableShell>
      </Card>
    </>
  );
}
