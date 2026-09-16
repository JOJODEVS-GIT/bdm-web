import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, RowActions } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Paramètres" };

/* MAQUETTE — Paramètres : quotas, e-mails, réseaux, pages légales, comptes admin (CDC §7.17). */

const ADMINS = [
  { n: "Josué", role: "Administrateur", tone: "green" as const, deux: "2FA activée" },
  { n: "Responsable rédaction (à nommer)", role: "Rédaction", tone: "yellow" as const, deux: "—" },
  { n: "Modérateur 1 (à nommer)", role: "Modérateur", tone: "yellow" as const, deux: "—" },
];

export default function AdminParametresPage() {
  return (
    <>
      <PageHead title="Paramètres" desc="Quotas, e-mails automatiques, réseaux sociaux, pages légales et équipe d'administration." />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Quotas & règles de publication">
          <ul className="divide-y divide-line text-sm">
            {[
              { l: "Offres tests gratuites par entreprise", v: "3" },
              { l: "Stages / volontariat", v: "Gratuit, illimité" },
              { l: "Durée de vie d'une petite annonce", v: "60 jours renouvelables" },
              { l: "Modération a priori", v: "Rencontres + 1re publication d'un compte" },
              { l: "Délai cible de modération", v: "48 h ouvrées" },
            ].map((x) => (
              <li key={x.l} className="flex items-center justify-between gap-4 px-4 py-3">
                <span className="text-ink-2">{x.l}</span>
                <span className="flex items-center gap-2 font-bold">
                  {x.v}
                  <button className="text-xs font-bold uppercase text-primary hover:underline">Modifier</button>
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="E-mails automatiques">
          <ul className="divide-y divide-line text-sm">
            {[
              "Bienvenue + confirmation d'adresse",
              "Contenu validé / refusé (avec motif)",
              "Candidature transmise au recruteur",
              "Alerte quotidienne mots-clés",
              "Offre sur le point d'expirer (recruteur)",
              "Double opt-in newsletter",
            ].map((x) => (
              <li key={x} className="flex items-center justify-between gap-4 px-4 py-3">
                <span className="font-semibold">{x}</span>
                <RowActions items={["Modifier le texte", "Tester"]} />
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Réseaux sociaux & liens">
          <ul className="divide-y divide-line text-sm">
            {[
              { l: "Facebook", v: "à brancher (question 41)" },
              { l: "LinkedIn", v: "à brancher" },
              { l: "Instagram", v: "à brancher" },
              { l: "X (Twitter)", v: "à brancher" },
              { l: "YouTube", v: "à brancher" },
              { l: "Relais automatique n8n", v: "désactivé (S7)" },
            ].map((x) => (
              <li key={x.l} className="flex items-center justify-between gap-4 px-4 py-3">
                <span className="font-semibold">{x.l}</span>
                <Badge tone="yellow">{x.v}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Pages légales">
          <ul className="divide-y divide-line text-sm">
            {[
              { l: "Mentions légales", st: "À rédiger (infos HCBE manquantes)", tone: "red" as const },
              { l: "Politique de confidentialité", st: "À rédiger", tone: "red" as const },
              { l: "CGU & charte de publication", st: "À rédiger", tone: "red" as const },
              { l: "CGV annonceurs & partenaires RH", st: "À rédiger", tone: "red" as const },
              { l: "Politique cookies (pub)", st: "À rédiger", tone: "red" as const },
            ].map((x) => (
              <li key={x.l} className="flex items-center justify-between gap-4 px-4 py-3">
                <span className="font-semibold">{x.l}</span>
                <Badge tone={x.tone}>{x.st}</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-6" title="Équipe d'administration" action={<button className="text-xs font-bold uppercase text-primary hover:underline">+ Inviter</button>}>
        <TableShell head={<><Th>Personne</Th><Th>Rôle</Th><Th>Sécurité</Th><Th>&nbsp;</Th></>}>
          {ADMINS.map((a) => (
            <tr key={a.n} className="hover:bg-primary-faint">
              <Td className="font-semibold">{a.n}</Td>
              <Td><Badge tone={a.tone}>{a.role}</Badge></Td>
              <Td className="text-ink-2">{a.deux}</Td>
              <Td><RowActions items={["Modifier", "Retirer"]} /></Td>
            </tr>
          ))}
        </TableShell>
        <p className="border-t border-line px-4 py-2.5 text-xs text-muted">
          La 2FA est obligatoire pour les rôles rédaction, modération et admin (CDC §10.3).
        </p>
      </Card>
    </>
  );
}
