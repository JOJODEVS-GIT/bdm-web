import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, AdSlot, KeywordChips } from "@/components/site/chrome";
import { CalendarPlus } from "lucide-react";

export const metadata: Metadata = { title: "Pique-nique des Béninois d'Île-de-France" };

/* MAQUETTE — Fiche événement (CDC §7.7), contenu d'exemple. */

export default function EvenementPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">

            <div className="mt-4 flex aspect-[21/9] items-center justify-center border border-line bg-paper-2 text-sm text-muted">visuel de l&apos;événement</div>

            <span className="mt-5 inline-block bg-accent px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-ink">Pique-nique</span>
            <h1 className="font-display mt-2 text-3xl font-black leading-tight md:text-4xl">
              Pique-nique des Béninois d&apos;Île-de-France
            </h1>

            <div className="mt-5 grid max-w-2xl gap-x-8 gap-y-3 border border-line p-5 text-sm sm:grid-cols-2">
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted">Date</p><p className="mt-0.5 font-bold">Samedi 27 septembre 2026 · 12h00 – 19h00</p></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted">Lieu</p><p className="mt-0.5">Bois de Vincennes, pelouse de Reuilly · Paris</p></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted">Organisateur</p><p className="mt-0.5"><Link href="/communaute/associations" className="font-semibold text-primary hover:underline">Bénin Diaspora Île-de-France</Link></p></div>
              <div><p className="text-xs font-bold uppercase tracking-wider text-muted">Entrée</p><p className="mt-0.5">Libre — chacun apporte un plat</p></div>
            </div>

            <div className="mt-5 max-w-2xl space-y-4 leading-relaxed">
              <p>
                Le grand pique-nique annuel de la communauté : retrouvailles, jeux pour les
                enfants, tournoi de pétanque, musique live et le concours du meilleur amiwo.
                Venez en famille, invitez vos amis !
              </p>
              <p className="text-sm text-ink-2">Contact par formulaire relais — l&apos;e-mail de l&apos;organisateur n&apos;est pas publié.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded bg-primary px-5 py-2.5 text-sm font-bold uppercase text-white hover:bg-primary-dark"><CalendarPlus aria-hidden className="mr-1.5 inline h-4 w-4" /> Ajouter à mon agenda</button>
              <button className="rounded border-2 border-primary px-4 py-2 text-sm font-bold uppercase text-primary hover:bg-primary hover:text-white">Écrire à l&apos;organisateur</button>
              <button className="text-sm font-semibold text-ink-2 hover:text-primary">Partager</button>
            </div>

            <div className="mt-6 border-t border-line pt-5">
              <KeywordChips keywords={["Paris", "Pique-nique", "Famille", "Île-de-France"]} />
            </div>

            <div className="mt-6 flex aspect-[3/1] items-center justify-center border border-line bg-[#dfe9e2] text-sm text-muted">
              carte du lieu (MapLibre)
            </div>
          </article>

          <aside className="space-y-8">
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">Aussi à <em>Paris</em></h3>
              <ul className="mt-3 space-y-3 text-sm">
                {["Soirée afrobeat DJ Wari — 27 sept.", "Messe de rentrée communautaire — 5 oct.", "Tournoi de foot inter-assos — 12 oct."].map((t) => (
                  <li key={t}>
                    <Link href="/agenda" className="font-semibold leading-snug hover:text-primary">{t}</Link>
                  </li>
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
