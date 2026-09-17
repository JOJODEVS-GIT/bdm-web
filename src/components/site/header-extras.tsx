"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { NAV } from "./nav-data";

/* Barre sticky compacte : apparaît après 280 px de défilement (proposition 1). */

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-40 bg-primary-darker text-white shadow-md transition-transform duration-200 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-12 w-full items-center gap-7 px-6">
        <Link href="/" className="shrink-0 font-display text-lg font-extrabold leading-none">
          Béninois<span className="text-accent"> du Monde</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 text-[0.78rem] font-bold uppercase tracking-wide lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap text-white/85 hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-4">
          <Link href="/recherche" aria-label="Rechercher" className="text-white/80 hover:text-accent">
            <Search aria-hidden className="h-4.5 w-4.5" />
          </Link>
          <Link
            href="/publier"
            className="whitespace-nowrap rounded bg-accent px-4 py-1.5 text-[0.8rem] font-bold text-ink hover:bg-accent-dark"
          >
            Publier
          </Link>
        </div>
      </div>
    </div>
  );
}

/* Fil d'Ariane systématique sous la navigation (proposition 3). */

const LABELS: Record<string, string> = {
  emploi: "Emploi & stages",
  "offre-exemple": "Développeur full-stack h/f",
  recruteurs: "Espace recruteur",
  magazine: "Magazine",
  "article-exemple": "Retour à Cotonou",
  "beninois-qui-comptent": "Béninois qui comptent",
  "retour-au-pays": "Retour au pays",
  communaute: "Communauté",
  membres: "Membres",
  "aichatou-s": "Aïchatou S.",
  associations: "Associations",
  entreprises: "Entreprises",
  artistes: "Artistes & groupes",
  adresses: "Bonnes adresses",
  "adresse-exemple": "Chez Maman Bénin",
  agenda: "Agenda",
  "evenement-exemple": "Pique-nique des Béninois d'IDF",
  avantages: "Avantages",
  annonces: "Petites annonces",
  pratique: "Pratique",
  "chercher-trouver": "Chercher / trouver",
  accueil: "Accueil & hébergement",
  memoire: "Mémoire & racines",
  hcbe: "Le HCBE",
  annonceurs: "Annonceurs",
  mot: "Mot-clé",
  exemple: "Retour au pays",
  recherche: "Recherche",
  publier: "Publier",
  connexion: "Connexion",
  contact: "Contact",
  compte: "Mon espace",
  profil: "Mon profil public",
  publications: "Mes publications",
  alertes: "Mes alertes",
  cv: "Mon CV",
  candidatures: "Mes candidatures",
  favoris: "Mes favoris",
  securite: "Sécurité",
  donnees: "Mes données",
  legal: "Informations légales",
  "mentions-legales": "Mentions légales",
  confidentialite: "Confidentialité",
  cgu: "CGU",
};

function labelFor(seg: string) {
  if (LABELS[seg]) return LABELS[seg];
  const s = decodeURIComponent(seg).replace(/-/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function Crumbs() {
  const pathname = usePathname();
  if (pathname === "/" || pathname.startsWith("/admin")) return null;

  const parts = pathname.split("/").filter(Boolean);
  // /legal est un segment sans page propre : on ne le rend pas cliquable
  const crumbs = parts.map((seg, i) => ({
    seg,
    label: labelFor(seg),
    href: "/" + parts.slice(0, i + 1).join("/"),
    clickable: !(seg === "legal" || seg === "mot" || seg === "pratique"),
  }));

  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-line bg-paper-2">
      <ol className="flex w-full flex-wrap items-center gap-x-2 gap-y-0.5 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-wider text-muted">
        <li>
          <Link href="/" className="whitespace-nowrap hover:text-primary">Accueil</Link>
        </li>
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-x-2">
            <span aria-hidden>›</span>
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="whitespace-nowrap font-bold text-primary">{c.label}</span>
            ) : c.clickable ? (
              <Link href={c.href} className="whitespace-nowrap hover:text-primary">{c.label}</Link>
            ) : (
              <span className="whitespace-nowrap">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
