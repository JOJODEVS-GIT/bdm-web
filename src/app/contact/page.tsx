import type { Metadata } from "next";
import { SiteHeader, SiteFooter, PageBanner } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Contact" };

/* MAQUETTE — Formulaire de contact routé par motif (CDC §7.12). */

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Nous"
        em="écrire"
        desc="Une question, un partenariat, un problème sur le site : votre message est routé au bon service selon le motif."
      />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <form className="max-w-2xl space-y-5 border border-line p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="nom" className="mb-1 block text-sm font-bold">Votre nom *</label>
                <input id="nom" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-bold">Votre e-mail *</label>
                <input id="email" type="email" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
              </div>
            </div>
            <div>
              <label htmlFor="motif" className="mb-1 block text-sm font-bold">Motif *</label>
              <select id="motif" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm sm:w-2/3">
                <option>Question générale</option>
                <option>Question consulaire (HCBE)</option>
                <option>Devenir annonceur / partenaire</option>
                <option>Recruteur : partenariat RH</option>
                <option>Presse</option>
                <option>Signaler un problème sur le site</option>
                <option>Données personnelles</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-bold">Votre message *</label>
              <textarea id="message" rows={6} className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
            </div>
            <label className="flex items-start gap-2 text-xs text-ink-2">
              <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]" />
              J&apos;accepte que mes informations soient utilisées pour traiter ma demande. *
            </label>
            <button type="button" className="rounded bg-primary px-6 py-2.5 text-sm font-bold uppercase text-white hover:bg-primary-dark">
              Envoyer
            </button>
            <p className="text-xs text-muted">Réponse sous 2 jours ouvrés. Protection anti-robot Turnstile au développement.</p>
          </form>

          <aside className="space-y-6">
            <div className="border-2 border-primary p-4 text-sm">
              <h3 className="section-title text-sm">Avant d&apos;écrire</h3>
              <ul className="mt-2 space-y-1.5 text-ink-2">
                <li>• Pour un membre : bouton « Écrire » sur son profil.</li>
                <li>• Pour une offre : postulez depuis l&apos;offre.</li>
                <li>• Pour un contenu problématique : bouton « Signaler ».</li>
              </ul>
            </div>
            <div className="border border-line bg-paper-2 p-4 text-sm">
              <h3 className="section-title text-sm">Attention aux <em>faux intermédiaires</em></h3>
              <p className="mt-2 text-ink-2">
                Le site ne demande jamais d&apos;argent pour une candidature ou une mise en relation.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
