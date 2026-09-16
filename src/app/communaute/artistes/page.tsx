import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, PageBanner, FilterBar } from "@/components/site/chrome";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = { title: "Artistes & groupes" };

/* MAQUETTE — Annuaire artistes (CDC §7.5), fiches d'exemple. */

const ARTISTES = [
  { name: "Gangbé Brass Band*", city: "COTONOU · BÉNIN", disc: "Musique · fanfare", next: "Tournée Europe — oct. 2026" },
  { name: "DJ Wari", city: "PARIS · FRANCE", disc: "DJ · afrobeat", next: "Soirée BDM — 27 sept." },
  { name: "Troupe Agbadja", city: "LOMÉ · TOGO", disc: "Danse traditionnelle", next: null },
  { name: "Sena K.", city: "MONTRÉAL · CANADA", disc: "Chant · gospel", next: "Concert — 11 oct." },
  { name: "Collectif Zinsou Art", city: "COTONOU · BÉNIN", disc: "Arts visuels", next: "Expo — nov. 2026" },
  { name: "Kpanlingan Crew", city: "BRUXELLES · BELGIQUE", disc: "Percussions", next: null },
];

export default function ArtistesPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Artistes &"
        em="groupes"
        desc="Musiciens, danseurs, plasticiens, humoristes de la scène béninoise mondiale. Chaque artiste gère sa fiche et son agenda de dates. (* fiches d'exemple)"
      >
        <Link href="/publier" className="whitespace-nowrap rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Créer ma fiche artiste
        </Link>
      </PageBanner>
      <FilterBar
        placeholder="Nom, discipline, ville…"
        selects={[
          { label: "Pays", options: ["Tous les pays", "Bénin", "France", "Canada", "Belgique", "Togo"] },
          { label: "Discipline", options: ["Toutes les disciplines", "Musique", "Danse", "Arts visuels", "Humour", "Théâtre"] },
        ]}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <p className="mb-5 text-sm text-muted"><strong className="text-ink">43</strong> artistes et groupes</p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {ARTISTES.map((a) => (
                <article key={a.name} className="border border-line hover:border-primary">
                  <div className="flex aspect-[4/3] items-center justify-center bg-primary-darker font-display text-4xl font-black text-accent">
                    {a.name[0]}
                  </div>
                  <div className="p-4">
                    <h2 className="font-bold leading-tight">
                      <Link href="/communaute/membres/aichatou-s" className="hover:text-primary">{a.name}</Link>
                    </h2>
                    <p className="card-location mt-1">{a.city}</p>
                    <p className="mt-1.5 text-sm text-ink-2">{a.disc}</p>
                    {a.next && (
                      <p className="mt-2 flex items-center gap-1.5 rounded bg-accent-light px-2 py-1 text-xs font-bold text-ink"><CalendarDays aria-hidden className="h-3.5 w-3.5 shrink-0" /> {a.next}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <button className="mt-6 w-full rounded border-2 border-primary py-2.5 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-white">
              Afficher plus d&apos;artistes
            </button>
          </div>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">Vous êtes <em>artiste ?</em></h3>
              <p className="mt-2 text-sm text-ink-2">Fiche gratuite, agenda de vos dates, vos concerts dans l&apos;agenda du site et les alertes des fans.</p>
              <Link href="/publier" className="mt-3 inline-block whitespace-nowrap rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark">
                Créer ma fiche
              </Link>
            </div>
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
