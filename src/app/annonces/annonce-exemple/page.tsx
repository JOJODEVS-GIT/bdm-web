import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, KeywordChips } from "@/components/site/chrome";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = { title: "Cède billet Paris–Cotonou du 20 déc." };

/* MAQUETTE — Fiche petite annonce (CDC §7.9), données d'exemple. */

export default function AnnoncePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="min-w-0">
            {/* Photos */}
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="aspect-[4/3] border border-line bg-paper-2 sm:col-span-2 sm:row-span-2 sm:aspect-auto" />
              <div className="aspect-[4/3] border border-line bg-paper-2" />
              <div className="flex aspect-[4/3] items-center justify-center border border-line bg-paper-2 text-sm font-bold text-muted">+ 1 photo</div>
            </div>

            <div className="mt-5 flex flex-wrap items-start gap-4">
              <div className="min-w-0 flex-1">
                <span className="text-[0.7rem] font-bold uppercase tracking-wider text-primary">Bonnes affaires</span>
                <h1 className="font-display mt-1 text-2xl font-extrabold leading-tight md:text-3xl">
                  Cède billet Paris–Cotonou du 20 décembre (modifiable)
                </h1>
                <p className="card-location mt-2">Paris · France — publiée il y a 2 h</p>
              </div>
              <p className="shrink-0 font-display text-3xl font-extrabold text-primary">450 €</p>
            </div>

            <div className="prose-bdm mt-5 max-w-2xl space-y-3 leading-relaxed">
              <p>
                Billet aller simple Paris CDG → Cotonou du 20 décembre, compagnie régulière,
                bagage 2 × 23 kg. Changement de nom possible (frais compagnie ~60 € inclus
                dans le prix). Je cède pour raison familiale.
              </p>
              <p className="text-sm text-ink-2">Remise en main propre du dossier à Paris ou tout par e-mail via la messagerie du site.</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5">
              <button className="whitespace-nowrap rounded bg-primary px-6 py-2.5 text-sm font-bold uppercase text-white hover:bg-primary-dark">
                Répondre à l&apos;annonce
              </button>
              <span className="text-xs text-muted">Réservé aux membres connectés · messagerie relais</span>
              <button className="ml-auto whitespace-nowrap text-sm font-semibold text-ink-2 hover:text-danger">Signaler</button>
            </div>

            <div className="mt-5">
              <KeywordChips keywords={["Billets d'avion", "Paris", "Cotonou", "Décembre"]} />
            </div>

            <div className="mt-6 flex max-w-2xl gap-3 rounded border-l-4 border-accent bg-accent-light p-4 text-sm">
              <ShieldAlert aria-hidden className="h-5 w-5 shrink-0" />
              <p>
                <strong>Conseils de sécurité :</strong> ne payez jamais d&apos;avance sans garantie,
                privilégiez la remise en main propre, et signalez toute demande suspecte.
                Le site ne gère pas les paiements entre membres.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="border border-line p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Publiée par</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light font-display font-bold text-primary-dark">J</span>
                <div>
                  <Link href="/communaute/membres/aichatou-s" className="font-bold hover:text-primary">Jean-Eudes K.</Link>
                  <p className="text-xs text-muted">Paris · membre depuis 2026</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-ink-2">3 annonces publiées · répond en général sous 24 h</p>
              <Link href="/annonces" className="mt-2 inline-block whitespace-nowrap text-xs font-bold uppercase text-primary hover:underline">Ses autres annonces →</Link>
            </div>
            <div className="border border-line bg-paper-2 p-4 text-sm">
              <h3 className="section-title text-sm">Annonces <em>similaires</em></h3>
              <ul className="mt-3 space-y-2">
                {["Billet Bruxelles–Cotonou 18 déc. — 420 €", "2 places Cotonou–Paris 3 janv. — 390 €"].map((a) => (
                  <li key={a}><Link href="/annonces" className="font-semibold hover:text-primary">{a}</Link></li>
                ))}
              </ul>
            </div>
            <AdSlot label="pavé latéral" />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
