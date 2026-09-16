import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, PageBanner } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Chercher / Trouver" };

/* MAQUETTE — Entraide (CDC §7.9), demandes d'exemple. */

const DEMANDES = [
  { type: "JE CHERCHE", text: "Un notaire de confiance pour un achat de terrain à Abomey-Calavi", by: "Rodrigue H. · Bruxelles", d: "il y a 1 h" },
  { type: "JE PROPOSE", text: "Aide aux démarches CAQ/études pour étudiants arrivant à Montréal", by: "Mariam A. · Montréal", d: "hier" },
  { type: "JE CHERCHE", text: "Groupe WhatsApp des Béninois de Lyon", by: "Élodie Z. · Lyon", d: "hier" },
  { type: "JE PROPOSE", text: "Place dans mon conteneur groupage départ Le Havre → Cotonou (nov.)", by: "Jean-Eudes K. · Paris", d: "il y a 2 j" },
];

export default function ChercherTrouverPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Chercher /"
        em="trouver"
        desc="Le mur d'entraide de la communauté : je cherche, je propose. Réponses entre membres, par messagerie relais."
      >
        <Link href="/publier" className="whitespace-nowrap rounded bg-accent px-4 py-2 text-sm font-bold text-ink hover:bg-accent-dark">
          Publier une demande
        </Link>
      </PageBanner>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <div className="mb-5 flex items-center gap-2">
              {["Tout", "Je cherche", "Je propose"].map((f, i) => (
                <button key={f} className={i === 0 ? "rounded-full bg-primary px-3 py-1 text-xs font-bold text-white" : "rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-2 hover:border-primary hover:text-primary"}>{f}</button>
              ))}
            </div>
            <ul className="space-y-3">
              {DEMANDES.map((d) => (
                <li key={d.text} className="border border-line p-4 hover:border-primary hover:bg-primary-faint">
                  <span className={`rounded px-2 py-0.5 text-[0.65rem] font-bold ${d.type === "JE CHERCHE" ? "bg-primary text-white" : "bg-accent text-ink"}`}>{d.type}</span>
                  <p className="mt-2 font-bold leading-snug">{d.text}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p className="card-location">{d.by} · {d.d}</p>
                    <button className="ml-auto rounded border-2 border-primary px-3 py-1 text-xs font-bold uppercase text-primary hover:bg-primary hover:text-white">Répondre</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-8"><AdSlot label="pavé latéral" /></aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
