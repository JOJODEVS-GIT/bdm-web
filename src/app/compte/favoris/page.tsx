import Link from "next/link";
import type { Metadata } from "next";
import { Heart } from "lucide-react";

export const metadata: Metadata = { title: "Mes favoris" };

/* MAQUETTE — Contenus mis de côté par le membre. */

const FAVORIS = [
  { t: "Investir dans l'immobilier à Cotonou depuis l'étranger", type: "Guide", href: "/retour-au-pays" },
  { t: "Développeur full-stack h/f — fintech", type: "Offre", href: "/emploi/offre-exemple" },
  { t: "Chez Maman Bénin — restaurant, Paris 18e", type: "Adresse", href: "/adresses/adresse-exemple" },
  { t: "Conférence : investir au Bénin en 2027", type: "Événement", href: "/agenda/evenement-exemple" },
  { t: "-10 % sur les billets Cotonou ↔ Paris", type: "Avantage", href: "/avantages" },
];

export default function FavorisPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl font-extrabold">Mes favoris</h1>
        <p className="mt-1 text-sm text-ink-2">Les contenus que vous avez mis de côté avec le cœur.</p>
      </div>

      <ul className="divide-y divide-line border border-line">
        {FAVORIS.map((f) => (
          <li key={f.t} className="flex items-center gap-4 p-4 hover:bg-primary-faint">
            <span className="shrink-0 rounded bg-primary-light px-2 py-1 text-xs font-bold uppercase text-primary-dark">{f.type}</span>
            <p className="min-w-0 flex-1 font-bold leading-snug">
              <Link href={f.href} className="hover:text-primary">{f.t}</Link>
            </p>
            <button aria-label={`Retirer ${f.t} des favoris`} className="text-danger hover:scale-110">
              <Heart aria-hidden className="h-5 w-5 fill-current" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
