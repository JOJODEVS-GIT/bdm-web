import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site/chrome";

/* Page 404 personnalisée. */

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center">
        <p className="font-display text-[6rem] font-extrabold leading-none text-primary-light">404</p>
        <h1 className="font-display mt-2 text-2xl font-extrabold">Cette page n&apos;existe pas (ou plus)</h1>
        <p className="mt-2 max-w-md text-ink-2">
          Le lien est peut-être ancien, ou la page a été retirée par la modération.
        </p>

        <form action="/recherche" className="mt-7 flex w-full max-w-md gap-2">
          <input
            type="search"
            name="q"
            placeholder="Rechercher sur le site…"
            className="w-full rounded border border-line bg-paper px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
          />
          <button className="whitespace-nowrap rounded bg-primary px-5 py-2.5 text-sm font-bold uppercase text-white hover:bg-primary-dark">
            Chercher
          </button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { label: "Accueil", href: "/" },
            { label: "Offres d'emploi", href: "/emploi" },
            { label: "Magazine", href: "/magazine" },
            { label: "Communauté", href: "/communaute" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded border-2 border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
