import Link from "next/link";
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

export function SiteFooter() {
  return (
    <footer className="mt-12 bg-primary-darker text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl font-black">Béninois du Monde</p>
          <p className="mt-2 text-sm text-white/70">
            Le média et le réseau des Béninois où qu&apos;ils vivent. Édité par le HCBE.
          </p>
        </div>
        <nav className="space-y-2 text-sm">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="block text-white/80 hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>
        <nav className="space-y-2 text-sm">
          {[
            { label: "Mémoire & racines", href: "/memoire" },
            { label: "Le HCBE", href: "/hcbe" },
            { label: "Espace recruteur", href: "/emploi/recruteurs" },
            { label: "Annonceurs", href: "/annonceurs" },
            { label: "Contact", href: "/hcbe" },
            { label: "Mentions légales", href: "#" },
            { label: "Confidentialité", href: "#" },
          ].map((l) => (
            <Link key={l.label} href={l.href} className="block text-white/80 hover:text-accent">
              {l.label}
            </Link>
          ))}
        </nav>
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
