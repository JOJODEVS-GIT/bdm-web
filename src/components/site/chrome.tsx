import Link from "next/link";
import { Bell } from "lucide-react";
import { MapBand } from "./map-band";

/* Composants de structure partagés par toutes les pages publiques. */

export const NAV = [
  { label: "Emploi & stages", href: "/emploi" },
  { label: "Magazine", href: "/magazine" },
  { label: "Communauté", href: "/communaute" },
  { label: "Bonnes adresses", href: "/adresses" },
  { label: "Agenda", href: "/agenda" },
  { label: "Avantages", href: "/avantages" },
  { label: "Annonces", href: "/annonces" },
];

export function SiteHeader({ mapDefaultOpen = false }: { mapDefaultOpen?: boolean }) {
  return (
    <>
      <header className="border-b border-line">
        {/* Style A « Institutionnel inversé » : rangée haute en vert profond */}
        <div className="bg-primary-darker text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6">
            <Link href="/" className="shrink-0">
              <span className="font-display text-3xl font-extrabold leading-none">
                Béninois<span className="text-accent"> du Monde</span>
              </span>
              <span className="mt-1.5 block text-[0.7rem] uppercase tracking-[0.25em] text-white/60">
                Le réseau de la diaspora béninoise
              </span>
            </Link>

            <div className="hidden items-center gap-5 md:flex">
              <Link
                href="/recherche"
                aria-label="Rechercher"
                className="text-white/80 hover:text-accent"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </Link>
              <Link
                href="/connexion"
                className="text-[0.95rem] font-semibold text-white/85 hover:text-accent"
              >
                Se connecter
              </Link>
              <Link
                href="/publier"
                className="rounded bg-accent px-5 py-2.5 text-[0.95rem] font-bold text-ink hover:bg-accent-dark"
              >
                Publier
              </Link>
            </div>

            <button
              className="rounded border border-white/40 px-3 py-2 text-sm font-semibold md:hidden"
              aria-label="Ouvrir le menu"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Nav en clair sous le bandeau vert, soulignement vert au survol */}
        <nav className="hidden bg-paper md:block">
          <div className="mx-auto flex max-w-6xl gap-x-9 px-4 py-3.5 text-[0.95rem] font-bold uppercase tracking-wide">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-ink-2 underline-offset-8 decoration-primary hover:text-primary hover:underline hover:decoration-2"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Carte : ouverte sur l'accueil, repliée ailleurs */}
      <MapBand defaultOpen={mapDefaultOpen} />
    </>
  );
}

/* Icônes de marques (retirées de Lucide) — SVG inline, chemins simple-icons. */
type BrandProps = React.SVGProps<SVGSVGElement>;
const Fb = (p: BrandProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden {...p}>
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
  </svg>
);
const Li = (p: BrandProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
);
const Ig = (p: BrandProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden {...p}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
  </svg>
);
const Xx = (p: BrandProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden {...p}>
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65Z" />
  </svg>
);
const Yt = (p: BrandProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden {...p}>
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
  </svg>
);

const SITEMAP: { title: string; href: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Magazine",
    href: "/magazine",
    links: [
      { label: "Portraits", href: "/magazine/article-exemple" },
      { label: "Béninois qui comptent", href: "/magazine/beninois-qui-comptent" },
      { label: "Actualités", href: "/magazine" },
      { label: "Spécial retour", href: "/retour-au-pays" },
    ],
  },
  {
    title: "Communauté",
    href: "/communaute",
    links: [
      { label: "Membres", href: "/communaute/membres" },
      { label: "Entreprises", href: "/communaute/entreprises" },
      { label: "Associations", href: "/communaute/associations" },
      { label: "Artistes / groupes", href: "/communaute/artistes" },
      { label: "Articles membres", href: "/magazine" },
    ],
  },
  {
    title: "Emploi & stages",
    href: "/emploi",
    links: [
      { label: "Offres d'emploi", href: "/emploi" },
      { label: "Espace recruteur", href: "/emploi/recruteurs" },
      { label: "Déposer une offre", href: "/publier" },
    ],
  },
  { title: "Bonnes adresses", href: "/adresses", links: [] },
  { title: "Agenda", href: "/agenda", links: [] },
  { title: "Avantages", href: "/avantages", links: [] },
  {
    title: "Pratique",
    href: "/annonces",
    links: [
      { label: "Alertes / notifications", href: "/compte" },
      { label: "Petites annonces", href: "/annonces" },
      { label: "Chercher / trouver", href: "/pratique/chercher-trouver" },
      { label: "Mémoire & racines", href: "/memoire" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-12 bg-primary-darker text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Rangée 1 : logo + réseaux | plan du site */}
        <div className="grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)]">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-extrabold leading-none">
                Béninois<span className="text-accent"> du Monde</span>
              </span>
            </Link>

            {/* Réseaux sociaux (liens à brancher sur les vrais comptes HCBE) */}
            <ul className="mt-5 flex flex-wrap items-center gap-2.5">
              {[
                { icon: Fb, label: "Facebook" },
                { icon: Li, label: "LinkedIn" },
                { icon: Ig, label: "Instagram" },
                { icon: Xx, label: "X (Twitter)" },
                { icon: Yt, label: "YouTube" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded bg-white/10 hover:bg-accent hover:text-ink"
                  >
                    <s.icon />
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/compte"
              className="mt-3 inline-flex items-center gap-2 rounded bg-accent px-3 py-2 text-xs font-bold uppercase tracking-wide text-ink hover:bg-accent-dark"
            >
              <Bell aria-hidden className="h-4 w-4" /> Mes alertes
            </Link>
          </div>

          {/* Plan du site en colonnes, comme le modèle */}
          <nav
            aria-label="Plan du site"
            className="hidden grid-cols-2 gap-x-8 gap-y-8 sm:grid md:grid-cols-4 xl:grid-cols-7"
          >
            {SITEMAP.map((col) => (
              <ul key={col.title} className="space-y-2 text-sm">
                <li>
                  <Link href={col.href} className="font-bold uppercase tracking-wide text-white hover:text-accent">
                    {col.title}
                  </Link>
                </li>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/70 hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* Rangée 2 : partenaires | liens de bas de page */}
        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[230px_minmax(0,1fr)]">
          <div>
            <ul className="flex flex-wrap items-center gap-2">
              {["HCBE", "RÉP. DU BÉNIN", "GOOGLE ACTUS"].map((p) => (
                <li
                  key={p}
                  className="flex h-12 w-[70px] items-center justify-center rounded bg-white/10 px-1 text-center text-[0.6rem] font-bold leading-tight text-white/70"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              Portail de la diaspora édité par le Haut Conseil des Béninois de l&apos;Extérieur.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-semibold">
              {[
                { label: "Contact", href: "/hcbe" },
                { label: "Annonceurs", href: "/annonceurs" },
                { label: "Confidentialité", href: "#" },
                { label: "Infos légales", href: "#" },
                { label: "Accueil & hébergement", href: "/pratique/chercher-trouver" },
                { label: "Notifications", href: "/compte" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/85 hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/50">© 2026 Béninois du Monde — HCBE. Tous droits réservés.</p>
          </div>
        </div>
      </div>
      <div className="tricolor" aria-hidden />
    </footer>
  );
}

export function SectionTitle({ pre, em, href }: { pre: string; em: string; href?: string }) {
  return (
    <div className="mb-5 flex items-baseline justify-between border-b-2 border-line pb-2">
      <h2 className="section-title text-lg text-ink">
        {pre} <em>{em}</em>
      </h2>
      {href && (
        <Link href={href} className="text-sm font-semibold text-primary hover:underline">
          Tout voir →
        </Link>
      )}
    </div>
  );
}

export function AdSlot({ label }: { label: string }) {
  return (
    <div className="flex h-24 items-center justify-center border border-dashed border-line bg-paper-2 text-xs uppercase tracking-widest text-muted">
      Publicité — {label}
    </div>
  );
}

export function AlertsBox({ keywords }: { keywords: string[] }) {
  return (
    <div className="border-2 border-primary p-4">
      <h3 className="section-title text-sm">
        Gérer mes <em>alertes</em>
      </h3>
      <p className="mt-2 text-sm text-ink-2">
        Recevez par e-mail les offres, articles et événements qui correspondent à vos mots-clés.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {keywords.map((k) => (
          <span
            key={k}
            className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark"
          >
            {k}
          </span>
        ))}
      </div>
      <button className="mt-4 w-full rounded bg-primary py-2 text-sm font-bold text-white hover:bg-primary-dark">
        Créer une alerte
      </button>
    </div>
  );
}

export function KeywordChips({ keywords }: { keywords: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {keywords.map((k) => (
        <Link
          key={k}
          href="/mot/exemple"
          className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark hover:bg-primary hover:text-white"
        >
          {k}
        </Link>
      ))}
    </div>
  );
}

/* Bandeau de rubrique vert profond, partagé par les pages de section. */
export function PageBanner({
  pre,
  em,
  desc,
  children,
}: {
  pre: string;
  em: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-primary-darker py-8 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="section-title text-2xl md:text-3xl">
          {pre} <em className="!text-accent">{em}</em>
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-white/80">{desc}</p>
        {children && <div className="mt-4 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}

/* Barre filtres standard sous le bandeau (CDC §7.1). */
export function FilterBar({
  placeholder,
  selects,
}: {
  placeholder: string;
  selects: { label: string; options: string[] }[];
}) {
  return (
    <div className="border-b border-line bg-paper-2">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-4">
        <input
          type="search"
          placeholder={placeholder}
          className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none sm:w-64"
        />
        {selects.map((s) => (
          <select
            key={s.label}
            aria-label={s.label}
            className="rounded border border-line bg-paper px-3 py-2 text-sm"
          >
            {s.options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        ))}
        <button className="rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          Rechercher
        </button>
        <button className="ml-auto text-sm font-bold uppercase text-primary hover:underline">
          Voir sur la carte
        </button>
      </div>
    </div>
  );
}
