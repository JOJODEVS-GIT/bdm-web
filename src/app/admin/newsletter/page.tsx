import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, RowActions, StatCard } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Newsletter & alertes" };

/* MAQUETTE — Newsletter (Brevo) + supervision des alertes mots-clés (CDC §7.13). */

const CAMPAGNES = [
  { n: "Newsletter de septembre", seg: "Tous (10 214)", st: "Programmée · 20 sept. 8h", tone: "yellow" as const, ouv: "—" },
  { n: "Newsletter d'août", seg: "Tous (9 730)", st: "Envoyée", tone: "green" as const, ouv: "41 %" },
  { n: "Spécial emploi — recruteurs", seg: "Entreprises (87)", st: "Envoyée", tone: "green" as const, ouv: "56 %" },
];

export default function AdminNewsletterPage() {
  return (
    <>
      <PageHead title="Newsletter & alertes" desc="Campagnes Brevo et supervision des alertes par mots-clés (Resend).">
        <button className="whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          + Composer la newsletter
        </button>
      </PageHead>

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Abonnés newsletter" value="10 214" hint="+484 ce mois · double opt-in" />
        <StatCard label="Abonnés aux alertes" value="2 861" hint="objectif 3 000" />
        <StatCard label="Alertes envoyées ce matin" value="1 847" hint="ouverture 41 %" />
        <StatCard label="Désinscriptions (30 j)" value="12" hint="0,1 %" />
      </div>

      <Card className="mt-5" title="Campagnes">
        <TableShell head={<><Th>Campagne</Th><Th>Segment</Th><Th>Statut</Th><Th>Ouverture</Th><Th>&nbsp;</Th></>}>
          {CAMPAGNES.map((c) => (
            <tr key={c.n} className="hover:bg-primary-faint">
              <Td className="font-semibold">{c.n}</Td>
              <Td className="text-ink-2">{c.seg}</Td>
              <Td><Badge tone={c.tone}>{c.st}</Badge></Td>
              <Td className="tabular-nums">{c.ouv}</Td>
              <Td><RowActions items={["Ouvrir", "Stats"]} /></Td>
            </tr>
          ))}
        </TableShell>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Composer — sélection du mois">
          <p className="px-4 pt-3 text-sm text-ink-2">
            La newsletter se compose en cochant les contenus du mois : articles, offres,
            événements. Aperçu, test, puis envoi ou programmation via Brevo.
          </p>
          <ul className="space-y-2 p-4 text-sm">
            {["☑ Retour à Cotonou : le parcours d'Aïchatou", "☑ 12 nouvelles offres au Bénin", "☑ Agenda : 8 événements d'octobre", "☐ Dossier : ouvrir un compte bancaire…"].map((c) => (
              <li key={c} className="rounded border border-line px-3 py-2 font-semibold">{c}</li>
            ))}
          </ul>
        </Card>
        <Card title="Top alertes mots-clés">
          <TableShell head={<><Th>Mot-clé</Th><Th>Abonnés</Th><Th>Envois (7 j)</Th></>}>
            {[
              { k: "Emploi Cotonou", a: 412, e: 386 },
              { k: "Retour au pays", a: 388, e: 122 },
              { k: "Informatique", a: 246, e: 208 },
              { k: "Événements Paris", a: 201, e: 64 },
            ].map((r) => (
              <tr key={r.k} className="hover:bg-primary-faint">
                <Td className="font-semibold">{r.k}</Td>
                <Td className="tabular-nums">{r.a}</Td>
                <Td className="tabular-nums">{r.e}</Td>
              </tr>
            ))}
          </TableShell>
        </Card>
      </div>
    </>
  );
}
