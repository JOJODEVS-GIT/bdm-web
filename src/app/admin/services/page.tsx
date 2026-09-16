import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, RowActions, StatCard } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Services" };

/* MAQUETTE — Adresses, agenda, avantages, annonces, entraide, accueil (CDC §7.17). */

const ONGLETS = ["Bonnes adresses", "Agenda", "Avantages", "Petites annonces", "Entraide", "Accueil & hébergement"];

const ADRESSES = [
  { n: "Chez Maman Bénin", cat: "Restaurant", ville: "Paris", st: "En ligne · Recommandé", tone: "green" as const },
  { n: "Restaurant Le Cotonou", cat: "Restaurant", ville: "Marseille", st: "En modération", tone: "yellow" as const },
  { n: "Épicerie Dantokpa", cat: "Épicerie", ville: "Bruxelles", st: "Revendication en attente", tone: "yellow" as const },
  { n: "Salon Béninlook", cat: "Coiffure", ville: "Lyon", st: "Signalée fermée", tone: "red" as const },
];

export default function AdminServicesPage() {
  return (
    <>
      <PageHead title="Services" desc="Adresses, agenda, avantages partenaires, annonces, entraide, familles d'accueil." />

      {/* Onglets */}
      <div className="flex flex-wrap gap-1 border-b border-line">
        {ONGLETS.map((o, i) => (
          <button
            key={o}
            className={`rounded-t px-4 py-2.5 text-sm font-bold ${
              i === 0 ? "border border-b-0 border-line bg-paper text-primary" : "text-ink-2 hover:text-primary"
            }`}
          >
            {o}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-4">
        <StatCard label="Adresses en ligne" value="203" hint="objectif 200 ✓" />
        <StatCard label="À modérer" value="1" tone="warn" />
        <StatCard label="Revendications" value="1" tone="warn" hint="le gérant veut gérer sa fiche" />
        <StatCard label="Signalées" value="1" tone="danger" hint="fermée / erreur" />
      </div>

      <Card className="mt-4" title="Bonnes adresses" action={<button className="text-xs font-bold uppercase text-primary hover:underline">+ Ajouter une adresse</button>}>
        <TableShell head={<><Th>Adresse</Th><Th>Catégorie</Th><Th>Ville</Th><Th>Statut</Th><Th>&nbsp;</Th></>}>
          {ADRESSES.map((a) => (
            <tr key={a.n} className="hover:bg-primary-faint">
              <Td className="font-semibold">{a.n}</Td>
              <Td className="text-ink-2">{a.cat}</Td>
              <Td className="text-ink-2">{a.ville}</Td>
              <Td><Badge tone={a.tone}>{a.st}</Badge></Td>
              <Td><RowActions items={a.tone === "yellow" ? ["Valider", "Refuser"] : ["Modifier", "Voir"]} /></Td>
            </tr>
          ))}
        </TableShell>
      </Card>

      <p className="mt-3 text-xs text-muted">
        Chaque onglet reprend le même schéma : liste filtrable, badge de statut, validation en un clic. Les avantages partenaires affichent en plus le code promo, les dates de validité et le compteur de clics.
      </p>
    </>
  );
}
