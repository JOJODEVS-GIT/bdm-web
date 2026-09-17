import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Connexion" };

/* MAQUETTE — Connexion / inscription (Auth.js au développement). */

export default function ConnexionPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid max-w-4xl gap-8 px-4 py-12 md:grid-cols-2">
        <section className="border border-line p-6">
          <h1 className="section-title text-xl">Se <em>connecter</em></h1>
          <form className="mt-5 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-bold">E-mail</label>
              <input id="email" type="email" className="w-full rounded border border-line bg-paper px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label htmlFor="pass" className="mb-1 block text-sm font-bold">Mot de passe</label>
              <input id="pass" type="password" className="w-full rounded border border-line bg-paper px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" /> Se souvenir de moi</label>
              <Link href="#" className="font-semibold text-primary hover:underline">Mot de passe oublié ?</Link>
            </div>
            <button type="button" className="w-full rounded bg-primary py-2.5 text-sm font-bold uppercase text-white hover:bg-primary-dark">Connexion</button>
            <button type="button" className="w-full rounded border-2 border-line py-2.5 text-sm font-bold text-ink-2 hover:border-primary hover:text-primary">Recevoir un lien magique par e-mail</button>
          </form>
        </section>

        <section className="border-2 border-primary bg-primary-faint p-6">
          <h2 className="section-title text-xl">Pas encore <em>membre ?</em></h2>
          <p className="mt-3 text-sm text-ink-2">L&apos;inscription est gratuite et ouverte à tous : particuliers, entreprises, associations, artistes.</p>
          <ul className="mt-4 space-y-2 text-sm">
            {["Profil dans l'annuaire mondial", "Publication directe : articles, offres, événements, annonces", "Alertes e-mail sur vos mots-clés", "CV visible des recruteurs si vous le souhaitez", "Avantages et réductions partenaires"].map((b) => (
              <li key={b} className="flex gap-2"><span className="font-bold text-primary">✓</span>{b}</li>
            ))}
          </ul>
          <Link href="/inscription" className="mt-5 inline-block rounded bg-primary px-6 py-2.5 text-sm font-bold uppercase text-white hover:bg-primary-dark">
            Créer mon compte gratuit
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
