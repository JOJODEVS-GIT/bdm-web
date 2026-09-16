import type { Metadata } from "next";
import { PageHead, Card, TableShell, Th, Td, StatCard } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Statistiques" };

/* MAQUETTE — Audience et activité ; Plausible intégré + export mensuel (CDC §7.17). */

export default function AdminStatsPage() {
  return (
    <>
      <PageHead title="Statistiques" desc="Audience (Plausible), contenus, alertes — et l'export mensuel pour le rapport HCBE.">
        <button className="whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          Exporter le rapport du mois (PDF)
        </button>
      </PageHead>

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Visites (30 j)" value="24 812" hint="objectif 30 000 — 42 % Bénin, 48 % diaspora" />
        <StatCard label="Pages vues (30 j)" value="96 034" />
        <StatCard label="Durée moyenne" value="3 min 12" />
        <StatCard label="Sources" value="52 % réseaux" hint="31 % Google · 17 % direct" />
      </div>

      <Card className="mt-5" title="Audience — 30 derniers jours (Plausible)">
        <div className="flex h-56 items-end gap-1 px-4 pb-4 pt-6">
          {[38, 42, 35, 51, 47, 44, 58, 52, 49, 63, 55, 61, 70, 64, 59, 72, 68, 75, 66, 71, 80, 74, 69, 82, 78, 85, 79, 88, 84, 92].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-primary/70 hover:bg-primary" style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="border-t border-line px-4 py-2 text-xs text-muted">
          Graphique d&apos;exemple — le vrai tableau Plausible sera intégré ici (sans cookies, chiffres partageables avec les annonceurs).
        </p>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Pages les plus vues (30 j)">
          <TableShell head={<><Th>Page</Th><Th>Vues</Th></>}>
            {[
              { p: "/emploi", v: "18 204" },
              { p: "/magazine/…parcours-aichatou", v: "9 861" },
              { p: "/ (accueil)", v: "8 442" },
              { p: "/communaute/membres", v: "5 108" },
              { p: "/adresses", v: "3 954" },
            ].map((r) => (
              <tr key={r.p} className="hover:bg-primary-faint">
                <Td className="font-semibold">{r.p}</Td>
                <Td className="tabular-nums">{r.v}</Td>
              </tr>
            ))}
          </TableShell>
        </Card>
        <Card title="Activité de la plateforme (30 j)">
          <TableShell head={<><Th>Indicateur</Th><Th>Valeur</Th></>}>
            {[
              { p: "Contenus publiés", v: "212 (dont 71 % communauté)" },
              { p: "Offres actives en moyenne", v: "39" },
              { p: "Candidatures transmises", v: "342" },
              { p: "Alertes e-mail envoyées", v: "48 120" },
              { p: "Messages relais échangés", v: "186" },
              { p: "Signalements traités", v: "9 (délai moyen 11 h)" },
            ].map((r) => (
              <tr key={r.p} className="hover:bg-primary-faint">
                <Td className="font-semibold">{r.p}</Td>
                <Td className="text-ink-2">{r.v}</Td>
              </tr>
            ))}
          </TableShell>
        </Card>
      </div>
    </>
  );
}
