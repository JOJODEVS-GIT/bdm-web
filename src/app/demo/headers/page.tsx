import Link from "next/link";
import type { Metadata } from "next";
import { Search, Menu } from "lucide-react";
import { NAV } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Démo — 3 styles d'en-tête" };

/* PAGE DE DÉMO INTERNE — 3 propositions de style pour l'en-tête.
   À supprimer une fois le choix fait. */

function Label({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-3 pt-10">
      <span className="rounded bg-ink px-2 py-1 font-display text-sm font-bold text-white">
        Proposition {n}
      </span>
      <span className="ml-3 font-display text-lg font-bold">{t}</span>
      <p className="mt-1 text-sm text-muted">{d}</p>
    </div>
  );
}

export default function HeadersDemoPage() {
  return (
    <div className="pb-16">
      <div className="bg-ink py-6 text-center text-white">
        <h1 className="font-display text-2xl font-bold">3 styles d&apos;en-tête au choix</h1>
        <p className="mt-1 text-sm text-white/70">
          Compare, choisis (A, B ou C) — ou mixe : « le A avec le bouton du C ».
        </p>
      </div>

      {/* ============ A — INSTITUTIONNEL INVERSÉ ============ */}
      <Label
        n="A"
        t="Institutionnel inversé"
        d="Tout l'en-tête en vert profond : présence forte, très « portail officiel de la diaspora ». La nav repasse en clair pour respirer."
      />
      <header className="border-b border-line">
        <div className="bg-primary-darker text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6">
            <Link href="#" className="shrink-0">
              <span className="font-display text-3xl font-extrabold leading-none">
                Béninois<span className="text-accent"> du Monde</span>
              </span>
              <span className="mt-1.5 block text-[0.7rem] uppercase tracking-[0.25em] text-white/60">
                Le réseau de la diaspora béninoise
              </span>
            </Link>
            <div className="hidden items-center gap-5 md:flex">
              <Search aria-hidden className="h-5 w-5 text-white/80" />
              <Link href="#" className="text-[0.95rem] font-semibold text-white/85 hover:text-accent">
                Se connecter
              </Link>
              <Link
                href="#"
                className="rounded bg-accent px-5 py-2.5 text-[0.95rem] font-bold text-ink hover:bg-accent-dark"
              >
                Publier
              </Link>
            </div>
            <Menu aria-hidden className="h-6 w-6 md:hidden" />
          </div>
        </div>
        <nav className="hidden bg-paper md:block">
          <div className="mx-auto flex max-w-6xl gap-x-9 px-4 py-3.5 text-[0.95rem] font-bold uppercase tracking-wide">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href="#"
                className="text-ink-2 underline-offset-8 decoration-primary hover:text-primary hover:underline hover:decoration-2"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* ============ B — PRESSE CENTRÉE ============ */}
      <Label
        n="B"
        t="Presse centrée"
        d="Logo centré comme une une de journal : très éditorial, solennel, met la marque au milieu. Nav centrée avec séparateurs."
      />
      <header className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-7">
          <div className="flex items-center gap-4">
            <Search aria-hidden className="h-5 w-5 text-ink-2" />
            <span className="hidden text-xs uppercase tracking-widest text-muted lg:block">
              Mardi 15 septembre 2026
            </span>
          </div>
          <Link href="#" className="text-center">
            <span className="font-display text-4xl font-extrabold leading-none text-primary-darker">
              Béninois<span className="text-primary"> du Monde</span>
            </span>
            <span className="mt-2 block text-[0.7rem] uppercase tracking-[0.3em] text-muted">
              Unis pour le Bénin · forts dans le monde
            </span>
          </Link>
          <div className="flex items-center justify-end gap-4">
            <Link href="#" className="hidden text-[0.95rem] font-semibold text-ink-2 hover:text-primary md:block">
              Se connecter
            </Link>
            <Link
              href="#"
              className="rounded bg-primary px-5 py-2.5 text-[0.95rem] font-bold text-white hover:bg-primary-dark"
            >
              Publier
            </Link>
          </div>
        </div>
        <nav className="hidden border-y border-line bg-paper-2 md:block">
          <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3 text-[0.9rem] font-bold uppercase tracking-wide">
            {NAV.map((n, i) => (
              <span key={n.href} className="flex items-center">
                {i > 0 && <span aria-hidden className="mx-4 text-line">•</span>}
                <Link href="#" className="text-ink-2 hover:text-primary">
                  {n.label}
                </Link>
              </span>
            ))}
          </div>
        </nav>
      </header>

      {/* ============ C — COMPACT APP ============ */}
      <Label
        n="C"
        t="Compact app"
        d="Tout sur une seule rangée : gain de place énorme, esprit application moderne. Idéal si l'en-tête doit rester collé en haut au défilement."
      />
      <header className="border-b border-line bg-paper shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-7 px-4 py-4">
          <Link href="#" className="shrink-0">
            <span className="font-display text-2xl font-extrabold leading-none text-primary-darker">
              Béninois<span className="text-primary"> du Monde</span>
            </span>
            <span className="mt-1 block h-[3px] w-full rounded bg-gradient-to-r from-benin-green via-benin-yellow to-benin-red" />
          </Link>
          <nav className="hidden flex-1 items-center gap-6 text-[0.82rem] font-bold uppercase tracking-wide lg:flex">
            {NAV.map((n) => (
              <Link key={n.href} href="#" className="text-ink-2 hover:text-primary">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex shrink-0 items-center gap-4">
            <Search aria-hidden className="h-5 w-5 text-ink-2" />
            <Link href="#" className="hidden text-sm font-semibold text-ink-2 hover:text-primary md:block">
              Se connecter
            </Link>
            <Link
              href="#"
              className="rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark"
            >
              Publier
            </Link>
            <Menu aria-hidden className="h-6 w-6 lg:hidden" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pt-12 text-center">
        <p className="text-sm text-muted">
          Rappel : l&apos;en-tête actuel du site est un 4e style (logo à gauche sur blanc, nav
          verte en dessous). Dis-moi ta lettre préférée et je l&apos;applique partout.
        </p>
        <Link href="/" className="mt-3 inline-block rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary-dark">
          ← Revoir l&apos;en-tête actuel
        </Link>
      </div>
    </div>
  );
}
