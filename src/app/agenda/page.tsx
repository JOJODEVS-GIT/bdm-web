import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, AlertsBox, PageBanner, FilterBar } from "@/components/site/chrome";
import { CalendarPlus } from "lucide-react";

export const metadata: Metadata = { title: "Agenda" };

/* MAQUETTE — Agenda (CDC §7.7), événements d'exemple. */

const EVENTS = [
  { title: "Pique-nique des Béninois d'Île-de-France", date: "SAM 27 SEPT", time: "12h00", city: "Paris · France", org: "Bénin Diaspora IDF", cat: "Pique-nique" },
  { title: "Conférence : investir au Bénin en 2027", date: "SAM 4 OCT", time: "18h30", city: "Bruxelles + visio", org: "Bénin Business Club", cat: "Conférence" },
  { title: "Soirée culturelle Bénin Canada", date: "SAM 11 OCT", time: "20h00", city: "Montréal · Canada", org: "Étudiants béninois du Canada", cat: "Soirée" },
  { title: "Concert Gangbé Brass Band", date: "VEN 17 OCT", time: "20h30", city: "Lyon · France", org: "Gangbé Brass*", cat: "Concert" },
  { title: "Culte d'action de grâce — fête nationale", date: "DIM 2 AOÛT", time: "10h00", city: "New York · USA", org: "Église Céleste ND", cat: "Religieux" },
];

export default function AgendaPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Les événements"
        em="à venir"
        desc="Soirées, concerts, conférences, pique-niques de la diaspora béninoise. Publiés par les associations, les artistes et les membres."
      >
        <Link href="/publier" className="rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Annoncer un événement
        </Link>
        <button className="rounded border-2 border-white/60 px-4 py-2 text-sm font-bold text-white hover:border-accent hover:text-accent">
          <CalendarPlus aria-hidden className="mr-1.5 inline h-4 w-4" /> S&apos;abonner (iCal)
        </button>
      </PageBanner>
      <FilterBar
        placeholder="Événement, ville, organisateur…"
        selects={[
          { label: "Pays", options: ["Tous les pays", "France", "Canada", "Belgique", "USA", "Bénin"] },
          { label: "Catégorie", options: ["Toutes", "Soirée", "Concert", "Conférence", "Pique-nique", "Religieux", "Sport"] },
        ]}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <button className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">À venir</button>
              <button className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-2 hover:border-primary hover:text-primary">Passés</button>
              <span className="ml-auto text-sm text-muted"><strong className="text-ink">{EVENTS.length}</strong> événements</span>
            </div>
            <ul className="space-y-3">
              {EVENTS.map((e) => (
                <li key={e.title} className="flex flex-wrap items-center gap-4 border border-line p-4 hover:border-primary hover:bg-primary-faint">
                  <div className="w-20 shrink-0 rounded bg-primary py-2 text-center leading-tight text-white">
                    <span className="block text-[0.65rem] font-bold uppercase">{e.date}</span>
                    <span className="block text-sm font-black">{e.time}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-primary">{e.cat}</span>
                    <h2 className="font-bold leading-snug">
                      <Link href="/agenda/evenement-exemple" className="hover:text-primary">{e.title}</Link>
                    </h2>
                    <p className="card-location mt-1">{e.city} — par {e.org}</p>
                  </div>
                  <Link href="/agenda/evenement-exemple" className="shrink-0 whitespace-nowrap rounded border-2 border-primary px-3 py-1.5 text-xs font-bold uppercase text-primary hover:bg-primary hover:text-white">
                    Voir
                  </Link>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded border-2 border-primary py-2.5 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-white">
              Afficher plus d&apos;événements
            </button>
          </div>

          <aside className="space-y-8">
            <AlertsBox keywords={["Paris", "Concerts", "Conférences"]} />
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
