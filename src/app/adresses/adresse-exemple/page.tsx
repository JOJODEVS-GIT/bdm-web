import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, KeywordChips } from "@/components/site/chrome";
import { Star } from "lucide-react";

export const metadata: Metadata = { title: "Chez Maman Bénin — Restaurant, Paris 18e" };

/* MAQUETTE — Fiche bonne adresse (CDC §7.6), contenu d'exemple. */

export default function AdressePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            <nav className="text-xs uppercase tracking-wider text-muted">
              <Link href="/" className="hover:text-primary">Accueil</Link> ›{" "}
              <Link href="/adresses" className="hover:text-primary">Bonnes adresses</Link> ›{" "}
              <span className="font-bold text-primary">Chez Maman Bénin</span>
            </nav>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <div className="aspect-[4/3] border border-line bg-paper-2 sm:col-span-2 sm:row-span-2 sm:aspect-auto" />
              <div className="aspect-[4/3] border border-line bg-paper-2" />
              <div className="flex aspect-[4/3] items-center justify-center border border-line bg-paper-2 text-sm font-bold text-muted">+ 6 photos</div>
            </div>

            <div className="mt-5 flex flex-wrap items-start gap-3">
              <div className="min-w-0 flex-1">
                <span className="rounded bg-accent px-2 py-0.5 text-[0.65rem] font-bold uppercase text-ink"><Star aria-hidden className="mr-1 inline h-3 w-3 fill-current" /> Recommandé</span>
                <h1 className="font-display mt-2 text-3xl font-black leading-tight">Chez Maman Bénin</h1>
                <p className="text-sm font-bold uppercase tracking-wide text-primary">Restaurant béninois</p>
                <p className="card-location mt-1">12 rue exemple · Paris 18e · France</p>
              </div>
              <button className="whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">Itinéraire</button>
              <button className="whitespace-nowrap rounded border-2 border-primary px-4 py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white">Appeler</button>
            </div>

            <p className="mt-5 max-w-2xl leading-relaxed">
              Depuis 2009, Maman Bénin fait voyager le 18e arrondissement : amiwo, dja, poisson
              braisé, aloko et sodabi maison. Salle de 40 couverts, plats à emporter, traiteur
              pour vos événements associatifs.
            </p>

            <div className="mt-6 grid max-w-2xl gap-x-8 gap-y-3 border border-line p-5 text-sm sm:grid-cols-2">
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted">Horaires</p><p className="mt-0.5">Mar–Dim · 12h–15h / 19h–23h</p></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted">Téléphone</p><p className="mt-0.5">+33 1 23 45 67 89</p></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted">Site / réseaux</p><p className="mt-0.5 text-primary font-semibold">chezmamanbenin.example</p></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted">Budget</p><p className="mt-0.5">15–25 € par personne</p></div>
            </div>

            <div className="mt-5 flex aspect-[3/1] items-center justify-center border border-line bg-[#dfe9e2] text-sm text-muted">
              carte du quartier (MapLibre)
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5">
              <KeywordChips keywords={["Restaurant", "Paris", "Cuisine béninoise"]} />
              <button className="ml-auto text-sm font-semibold text-ink-2 hover:text-danger">Signaler (fermé, erreur…)</button>
            </div>

            <section className="mt-8">
              <h2 className="section-title text-lg border-b-2 border-line pb-2 mb-4">À proximité</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {["Épicerie Wologuede", "Barber Zongo", "Tissus Ganhi"].map((n) => (
                  <article key={n} className="border border-line p-3">
                    <div className="mb-2 aspect-[4/3] bg-paper-2" />
                    <p className="font-bold leading-tight">{n}</p>
                    <p className="card-location mt-0.5">PARIS · FRANCE</p>
                  </article>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">Vous êtes le <em>gérant ?</em></h3>
              <p className="mt-2 text-sm text-ink-2">Revendiquez cette fiche pour la mettre à jour et répondre à la communauté.</p>
              <button className="mt-3 rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">Revendiquer la fiche</button>
            </div>
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
