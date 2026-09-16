import Link from "next/link";
import type { Metadata } from "next";
import {
  SiteHeader,
  SiteFooter,
  SectionTitle,
  AdSlot,
  AlertsBox,
  KeywordChips,
} from "@/components/site/chrome";

export const metadata: Metadata = {
  title: "Retour à Cotonou : le parcours d'Aïchatou, ingénieure revenue de Montréal",
};

/* MAQUETTE — Article magazine (CDC §7.4), contenu d'exemple. */

const LIES = [
  "Investir dans l'immobilier à Cotonou depuis l'étranger : le guide",
  "Les secteurs qui recrutent au Bénin en 2026",
  "David : de Lyon à Ouidah, itinéraire d'un retour réussi",
];

export default function ArticlePage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            {/* Fil d'Ariane */}
            <nav className="text-xs uppercase tracking-wider text-muted">
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>{" "}
              ›{" "}
              <Link href="/magazine/article-exemple" className="hover:text-primary">
                Magazine
              </Link>{" "}
              › <span className="text-primary font-bold">Portraits</span>
            </nav>

            {/* Titre */}
            <span className="mt-4 inline-block bg-accent px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-ink">
              Portrait
            </span>
            <h1 className="font-display mt-3 text-3xl md:text-4xl font-black leading-tight">
              Retour à Cotonou : le parcours d&apos;Aïchatou, ingénieure revenue de Montréal
            </h1>
            <p className="mt-3 text-lg text-ink-2 leading-relaxed">
              Après neuf ans au Canada, Aïchatou a quitté son poste dans une grande firme pour
              monter son bureau d&apos;études à Cotonou. Elle raconte les démarches, les surprises
              et ce qu&apos;elle aurait aimé savoir avant de rentrer.
            </p>

            {/* Méta */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-line py-3 text-sm text-muted">
              <span>
                Par <strong className="text-ink">La Rédaction</strong>
              </span>
              <span>Publié le 14 septembre 2026</span>
              <span className="card-location">Cotonou · Bénin</span>
              <button className="ml-auto text-primary font-bold hover:underline">Partager</button>
            </div>

            {/* Image à la une */}
            <figure className="mt-6">
              <div className="aspect-video border border-line bg-paper-2 flex items-center justify-center text-muted text-sm">
                photo à la une
              </div>
              <figcaption className="mt-2 text-xs text-muted">
                Aïchatou sur le chantier de son premier projet à Fidjrossè. Crédit : exemple.
              </figcaption>
            </figure>

            {/* Corps */}
            <div className="prose-bdm mt-6 space-y-5 text-[1.05rem] leading-relaxed text-ink">
              <p>
                <strong>« On ne rentre pas au pays, on le réapprend. »</strong> Quand Aïchatou pose
                ses valises à Cotonou en janvier 2025, elle croit tout connaître de sa ville
                natale. Neuf ans à Montréal ont pourtant changé son regard — et la ville elle-même
                a changé encore plus vite.
              </p>
              <p>
                Diplômée de Polytechnique Montréal, elle travaillait sur de grands projets
                d&apos;infrastructures. « J&apos;avais un bon salaire, une routine confortable.
                Mais chaque mission me ramenait à la même question : pourquoi pas chez moi ? »
              </p>
              <blockquote className="border-l-4 border-accent bg-accent-light p-4 font-display text-xl font-bold leading-snug">
                « Le déclic, c&apos;est un chantier vu sur les réseaux : un pont, au Bénin,
                conçu par un cabinet étranger. Je me suis dit : la prochaine fois, ce sera nous. »
              </blockquote>
              <p>
                Le retour s&apos;est préparé sur dix-huit mois : économies, réseau, premières
                missions à distance pour des clients béninois, puis l&apos;immatriculation de son
                bureau d&apos;études. Aujourd&apos;hui, elle emploie six personnes, dont deux
                revenus de la diaspora comme elle.
              </p>
              <p>
                Ses conseils aux candidats au retour : « Venez tester avant de tout quitter.
                Gardez un pied dans votre réseau à l&apos;étranger. Et surtout, entourez-vous de
                gens qui sont rentrés avant vous — leurs erreurs valent de l&apos;or. »
              </p>
            </div>

            {/* Fin d'article : mots-clés + auteur + CTA */}
            <div className="mt-8 space-y-6 border-t border-line pt-6">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">
                  Mots-clés
                </p>
                <KeywordChips
                  keywords={["Retour au pays", "Cotonou", "BTP", "Entrepreneuriat", "Canada"]}
                />
                <button className="mt-3 text-sm font-bold uppercase text-primary hover:underline">
                  Créer une alerte sur ces mots-clés
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 border border-line bg-paper-2 p-4">
                <div className="h-12 w-12 rounded-full bg-primary-light" />
                <div className="min-w-0 flex-1">
                  <p className="font-bold">La Rédaction — Béninois du Monde</p>
                  <p className="text-sm text-muted">Portraits et parcours de la diaspora</p>
                </div>
                <button className="whitespace-nowrap rounded border-2 border-primary px-3 py-1.5 text-xs font-bold uppercase text-primary hover:bg-primary hover:text-white">
                  Écrire à l&apos;auteur
                </button>
              </div>

              <div className="border-2 border-primary p-4 text-center">
                <p className="font-display text-lg font-bold">
                  Vous avez un parcours à raconter ?
                </p>
                <p className="mt-1 text-sm text-ink-2">
                  Les membres publient directement leurs articles, relus par la rédaction.
                </p>
                <Link
                  href="/publier"
                  className="mt-3 inline-block whitespace-nowrap rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary-dark"
                >
                  Publier mon article
                </Link>
              </div>
            </div>

            {/* Articles liés */}
            <section className="mt-10">
              <SectionTitle pre="À lire" em="aussi" />
              <div className="grid gap-5 sm:grid-cols-3">
                {LIES.map((t) => (
                  <article key={t}>
                    <div className="aspect-[4/3] border border-line bg-paper-2 mb-2" />
                    <h3 className="font-bold leading-snug">
                      <Link href="#" className="hover:text-primary">
                        {t}
                      </Link>
                    </h3>
                  </article>
                ))}
              </div>
            </section>
          </article>

          {/* Colonne latérale */}
          <aside className="space-y-8">
            <AdSlot label="pavé latéral" />
            <AlertsBox keywords={["Retour au pays", "Portraits", "Cotonou"]} />
            <div>
              <h3 className="section-title text-sm border-b-2 border-line pb-2 mb-3">
                Dernières <em>offres</em>
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Développeur full-stack h/f — Cotonou",
                  "Chargé(e) de programme santé — Parakou",
                  "Comptable senior h/f — Abidjan",
                ].map((o) => (
                  <li key={o}>
                    <Link href="/emploi" className="font-semibold leading-snug hover:text-primary">
                      {o}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <AdSlot label="pavé latéral 2" />
          </aside>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
