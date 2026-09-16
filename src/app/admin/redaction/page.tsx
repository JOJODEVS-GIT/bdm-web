import type { Metadata } from "next";
import { PageHead, Card, Badge, TableShell, Th, Td, RowActions, FilterChips } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Rédaction" };

/* MAQUETTE — Rédaction : articles, une, rubriques, célébrités, médias (CDC §7.17). */

const ARTICLES = [
  { t: "Retour à Cotonou : le parcours d'Aïchatou", rub: "Portraits", statut: "En ligne", tone: "green" as const, une: true, date: "14 sept.", vues: "2 341" },
  { t: "Les secteurs qui recrutent au Bénin en 2026", rub: "Emploi", statut: "En ligne", tone: "green" as const, une: true, date: "13 sept.", vues: "1 876" },
  { t: "Interview : l'ambassadeur du Bénin en France", rub: "Actualités", statut: "Programmé · 18 sept. 7h", tone: "yellow" as const, une: false, date: "—", vues: "—" },
  { t: "Angélique Kidjo au Zénith : la diaspora en chœur", rub: "Culture", statut: "En ligne", tone: "green" as const, une: false, date: "12 sept.", vues: "1 204" },
  { t: "Dossier : ouvrir un compte bancaire depuis l'étranger", rub: "Retour au pays", statut: "Brouillon", tone: "gray" as const, une: false, date: "—", vues: "—" },
];

export default function RedactionPage() {
  return (
    <>
      <PageHead title="Rédaction" desc="Articles, mise à la une, rubriques, Béninois qui comptent, médiathèque.">
        <button className="rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          + Écrire un article
        </button>
        <button className="rounded border border-line bg-paper px-4 py-2 text-sm font-bold text-ink-2 hover:border-primary hover:text-primary">
          Gérer la une (9 emplacements)
        </button>
      </PageHead>

      <div className="mb-4 grid gap-4 sm:grid-cols-3">
        {[
          { v: "128", l: "articles publiés" },
          { v: "3", l: "programmés cette semaine" },
          { v: "8 / 50", l: "fiches Béninois qui comptent" },
        ].map((s) => (
          <div key={s.l} className="rounded border border-line bg-paper p-4">
            <span className="font-display text-2xl font-extrabold text-primary">{s.v}</span>
            <p className="text-sm text-ink-2">{s.l}</p>
          </div>
        ))}
      </div>

      <FilterChips items={["Tous", "En ligne", "Programmés", "Brouillons", "Portraits", "Actualités", "Retour au pays", "Célébrités"]} />

      <Card className="mt-4">
        <TableShell head={<><Th>Titre</Th><Th>Rubrique</Th><Th>Statut</Th><Th>À la une</Th><Th>Publié</Th><Th>Vues</Th><Th>&nbsp;</Th></>}>
          {ARTICLES.map((a) => (
            <tr key={a.t} className="hover:bg-primary-faint">
              <Td className="max-w-[320px] truncate font-semibold">{a.t}</Td>
              <Td className="text-ink-2">{a.rub}</Td>
              <Td><Badge tone={a.tone}>{a.statut}</Badge></Td>
              <Td>{a.une ? <Badge tone="yellow">★ Une</Badge> : <span className="text-muted">—</span>}</Td>
              <Td className="whitespace-nowrap text-muted">{a.date}</Td>
              <Td className="tabular-nums text-ink-2">{a.vues}</Td>
              <Td><RowActions items={["Modifier", "Voir"]} /></Td>
            </tr>
          ))}
        </TableShell>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Béninois qui comptent" action={<button className="whitespace-nowrap text-xs font-bold uppercase text-primary hover:underline">+ Nouvelle fiche</button>}>
          <ul className="divide-y divide-line text-sm">
            {["Angélique Kidjo — Musique", "Djimon Hounsou — Cinéma", "Steve Mounié — Football"].map((c) => (
              <li key={c} className="flex items-center justify-between px-4 py-2.5">
                <span className="font-semibold">{c}</span>
                <RowActions items={["Modifier"]} />
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Médiathèque" action={<button className="whitespace-nowrap text-xs font-bold uppercase text-primary hover:underline">Téléverser</button>}>
          <div className="grid grid-cols-4 gap-2 p-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square rounded border border-line bg-paper-2" />
            ))}
          </div>
          <p className="px-4 pb-3 text-xs text-muted">51 fichiers · 340 Mo — images optimisées en WebP à l&apos;envoi</p>
        </Card>
      </div>
    </>
  );
}
