import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, PageBanner } from "@/components/site/chrome";
import { UserRound, Building2, HeartHandshake, Music4 } from "lucide-react";

export const metadata: Metadata = { title: "Créer un compte" };

/* MAQUETTE — Inscription gratuite, 4 types de comptes (CDC §7.5). */

const TYPES = [
  { icon: UserRound, t: "Membre", d: "Particulier de la diaspora ou du Bénin : profil, alertes, CV, publications.", active: true },
  { icon: Building2, t: "Entreprise", d: "Fiche entreprise, actualités, recrutement (3 offres tests gratuites)." },
  { icon: HeartHandshake, t: "Association", d: "Fiche association, événements, appels à bénévoles." },
  { icon: Music4, t: "Artiste / groupe", d: "Fiche artiste, agenda de dates, actualités." },
];

export default function InscriptionPage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Créer un"
        em="compte gratuit"
        desc="Membres, entreprises, associations et artistes : l'inscription est gratuite et le reste. Vous publiez directement, la modération valide."
      />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            {/* Étape 1 : type de compte */}
            <h2 className="section-title mb-4 border-b-2 border-line pb-2 text-lg">
              1. Je suis <em>…</em>
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {TYPES.map((t) => (
                <button
                  key={t.t}
                  aria-pressed={t.active}
                  className={`flex h-full flex-col border p-4 text-left ${
                    t.active ? "border-2 border-primary bg-primary-faint" : "border-line hover:border-primary"
                  }`}
                >
                  <t.icon aria-hidden className="h-7 w-7 text-primary" strokeWidth={2.2} />
                  <span className="mt-2 block font-bold">{t.t}</span>
                  <span className="mt-1 block text-sm text-ink-2">{t.d}</span>
                </button>
              ))}
            </div>

            {/* Étape 2 : formulaire (exemple : membre) */}
            <h2 className="section-title mb-4 mt-10 border-b-2 border-line pb-2 text-lg">
              2. Mes <em>informations</em>
            </h2>
            <form className="space-y-5 border border-line p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="prenom" className="mb-1 block text-sm font-bold">Prénom *</label>
                  <input id="prenom" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="nom" className="mb-1 block text-sm font-bold">Nom *</label>
                  <input id="nom" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-bold">E-mail *</label>
                  <input id="email" type="email" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                  <p className="mt-1 text-xs text-muted">Un lien de confirmation vous sera envoyé.</p>
                </div>
                <div>
                  <label htmlFor="pays" className="mb-1 block text-sm font-bold">Pays de résidence *</label>
                  <select id="pays" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm">
                    <option>Bénin</option><option>France</option><option>Canada</option>
                    <option>Belgique</option><option>USA</option><option>Autre…</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ville" className="mb-1 block text-sm font-bold">Ville *</label>
                  <input id="ville" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="secteur" className="mb-1 block text-sm font-bold">Secteur d&apos;activité</label>
                  <select id="secteur" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm">
                    <option>Informatique</option><option>Santé</option><option>BTP</option>
                    <option>Éducation</option><option>Commerce</option><option>Autre…</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mdp" className="mb-1 block text-sm font-bold">Mot de passe *</label>
                  <input id="mdp" type="password" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="mdp2" className="mb-1 block text-sm font-bold">Confirmer *</label>
                  <input id="mdp2" type="password" className="w-full rounded border border-line bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                </div>
              </div>

              <div className="space-y-2 border-t border-line pt-4 text-sm">
                <label className="flex items-start gap-2.5">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]" />
                  <span>J&apos;accepte les <Link href="/legal/cgu" className="font-bold text-primary hover:underline">CGU et la charte de publication</Link>. *</span>
                </label>
                <label className="flex items-start gap-2.5">
                  <input type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]" />
                  <span>Je souhaite apparaître dans l&apos;annuaire public des membres (modifiable à tout moment).</span>
                </label>
                <label className="flex items-start gap-2.5">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]" />
                  <span>Je m&apos;abonne à la newsletter mensuelle.</span>
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button type="button" className="whitespace-nowrap rounded bg-primary px-6 py-2.5 text-sm font-bold uppercase text-white hover:bg-primary-dark">
                  Créer mon compte
                </button>
                <span className="text-sm text-ink-2">
                  Déjà inscrit·e ? <Link href="/connexion" className="font-bold text-primary hover:underline">Se connecter</Link>
                </span>
              </div>
              <p className="text-xs text-muted">Protection anti-robot Turnstile au développement. Comptes pro (entreprise, association, artiste) : validation par la modération avant mise en ligne de la fiche.</p>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="border-2 border-primary bg-primary-faint p-5">
              <h3 className="section-title text-sm">Gratuit, <em>vraiment</em></h3>
              <ul className="mt-3 space-y-2 text-sm">
                {["Profil dans l'annuaire mondial", "Publication directe de vos contenus", "Alertes e-mail sur vos mots-clés", "CV visible des recruteurs si vous voulez", "Avantages partenaires réservés aux membres"].map((b) => (
                  <li key={b} className="flex gap-2"><span className="font-bold text-primary">✓</span>{b}</li>
                ))}
              </ul>
            </div>
            <p className="text-xs leading-relaxed text-muted">
              Vos données restent les vôtres : visibilité champ par champ, export et suppression
              en libre-service. <Link href="/legal/confidentialite" className="font-bold text-primary hover:underline">Politique de confidentialité</Link>.
            </p>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
