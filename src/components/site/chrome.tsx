import Link from "next/link";

/* Composants de structure partagés par toutes les pages publiques. */

export const NAV = [
  { label: "Emploi & stages", href: "/emploi" },
  { label: "Magazine", href: "/magazine/article-exemple" },
  { label: "Communauté", href: "/communaute/membres" },
  { label: "Bonnes adresses", href: "/adresses" },
  { label: "Agenda", href: "/agenda" },
  { label: "Avantages", href: "/avantages" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4 gap-4">
          <Link href="/" className="shrink-0">
            <span className="font-display text-2xl font-black text-primary-darker leading-none">
              Béninois<span className="text-primary"> du Monde</span>
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted">
              Le réseau de la diaspora béninoise
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/connexion"
              className="text-sm font-semibold text-ink-2 hover:text-primary"
            >
              Se connecter
            </Link>
            <Link
              href="/publier"
              className="rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark"
            >
              Publier
            </Link>
          </div>
          <button
            className="md:hidden rounded border border-line px-3 py-2 text-sm font-semibold"
            aria-label="Ouvrir le menu"
          >
            Menu
          </button>
        </div>
        <nav className="hidden md:flex gap-6 pb-3 text-sm font-bold uppercase tracking-wide">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-ink-2 hover:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-12 bg-primary-darker text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl font-black">Béninois du Monde</p>
          <p className="mt-2 text-sm text-white/70">
            Le média et le réseau des Béninois où qu&apos;ils vivent. Édité par le HCBE.
          </p>
        </div>
        <nav className="text-sm space-y-2">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="block text-white/80 hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>
        <nav className="text-sm space-y-2">
          {["Le HCBE", "Annonceurs", "Contact", "Mentions légales", "Confidentialité"].map((l) => (
            <Link key={l} href="#" className="block text-white/80 hover:text-accent">
              {l}
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
    <div className="flex items-baseline justify-between border-b-2 border-line pb-2 mb-5">
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
    <div className="flex items-center justify-center border border-dashed border-line bg-paper-2 text-muted text-xs uppercase tracking-widest h-24">
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
          href="#"
          className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark hover:bg-primary hover:text-white"
        >
          {k}
        </Link>
      ))}
    </div>
  );
}
