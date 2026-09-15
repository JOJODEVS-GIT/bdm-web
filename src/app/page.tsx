import Link from "next/link";

/*
 * MAQUETTE — Accueil (CDC §7.2), données d'exemple uniquement.
 * Ordre des sections calqué sur le modèle : carte dépliable, à la une,
 * emploi, derniers articles, bonnes adresses, avantages, agenda,
 * colonne latérale (pub, alertes, populaire).
 */

const alaUne = [
  {
    title: "Retour à Cotonou : le parcours d'Aïchatou, ingénieure revenue de Montréal",
    cat: "Portrait",
    location: "Cotonou · Bénin",
  },
  {
    title: "Les secteurs qui recrutent au Bénin en 2026 : le grand dossier",
    cat: "Emploi",
    location: "Bénin",
  },
  {
    title: "La communauté béninoise de Paris prépare la fête nationale du 1er août",
    cat: "Communauté",
    location: "Paris · France",
  },
];

const offres = [
  { title: "Développeur full-stack h/f — fintech", org: "PME · Cotonou", type: "CDI" },
  { title: "Chargé(e) de programme santé", org: "ONG · Parakou", type: "CDD" },
  { title: "Comptable senior h/f", org: "Cabinet · Abidjan", type: "CDI" },
  { title: "Stage marketing digital (6 mois)", org: "Startup · Cotonou", type: "Stage" },
];

const articles = [
  { title: "Angélique Kidjo au Zénith : la diaspora en chœur", cat: "Culture" },
  { title: "Investir dans l'immobilier à Cotonou depuis l'étranger : le guide", cat: "Retour au pays" },
  { title: "Étudier au Canada : les bourses ouvertes aux Béninois cette année", cat: "Étudiants" },
  { title: "Le vodun expliqué à mes enfants nés en France", cat: "Mémoire" },
];

const adresses = [
  { name: "Chez Maman Bénin", cat: "Restaurant", city: "PARIS 18e" },
  { name: "Épicerie Dantokpa", cat: "Épicerie", city: "BRUXELLES" },
  { name: "Salon Wax & Co", cat: "Mode", city: "MONTRÉAL" },
];

const avantages = [
  { deal: "-10 % sur les billets Cotonou ↔ Paris", partner: "AGENCE PARTENAIRE" },
  { deal: "Frais réduits sur vos transferts d'argent", partner: "PARTENAIRE TRANSFERT" },
  { deal: "-15 % sur l'hôtel à Ouidah", partner: "HÔTEL PARTENAIRE" },
  { deal: "Pack étudiant : assurance à tarif diaspora", partner: "ASSUREUR PARTENAIRE" },
];

const agenda = [
  { title: "Pique-nique des Béninois d'Île-de-France", date: "27 SEPT · 12H00", city: "Paris" },
  { title: "Conférence : investir au Bénin en 2027", date: "4 OCT · 18H30", city: "Bruxelles + visio" },
  { title: "Soirée culturelle Bénin Canada", date: "11 OCT · 20H00", city: "Montréal" },
];

const nav = [
  { label: "Emploi & stages", href: "/emploi" },
  { label: "Magazine", href: "/magazine" },
  { label: "Communauté", href: "/communaute" },
  { label: "Bonnes adresses", href: "/adresses" },
  { label: "Agenda", href: "/agenda" },
  { label: "Avantages", href: "/avantages" },
];

function SectionTitle({ pre, em, href }: { pre: string; em: string; href: string }) {
  return (
    <div className="flex items-baseline justify-between border-b-2 border-line pb-2 mb-5">
      <h2 className="section-title text-lg text-ink">
        {pre} <em>{em}</em>
      </h2>
      <Link href={href} className="text-sm font-semibold text-primary hover:underline">
        Tout voir →
      </Link>
    </div>
  );
}

function AdSlot({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center border border-dashed border-line bg-paper-2 text-muted text-xs uppercase tracking-widest h-24">
      Publicité — {label}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* En-tête */}
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-4 gap-4">
            <Link href="/" className="shrink-0">
              <span className="font-display text-2xl font-black text-primary-darker leading-none">
                Béninois<span className="text-primary"> du Monde</span>
              </span>
              <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                Le réseau de la diaspora béninoise
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/connexion"
                className="text-sm font-semibold text-ink-2 hover:text-primary"
              >
                Se connecter
              </Link>
              <Link
                href="/publier"
                className="rounded bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark"
              >
                Publier
              </Link>
            </div>
            <button
              className="md:hidden rounded border border-line px-3 py-2 text-sm font-semibold"
              aria-label="Ouvrir le menu"
            >
              Menu
            </button>
          </div>
          <nav className="hidden md:flex gap-6 pb-3 text-sm font-bold uppercase tracking-wide">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-ink-2 hover:text-primary">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Carte dépliable */}
      <button className="w-full bg-primary-darker py-2.5 text-center text-sm font-bold uppercase tracking-[0.15em] text-accent hover:bg-primary-dark">
        ▾ Déplier la carte de la diaspora
      </button>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          {/* Colonne principale */}
          <div className="space-y-12">
            {/* À la une */}
            <section>
              <SectionTitle pre="À la" em="une" href="/magazine" />
              <div className="grid gap-5 md:grid-cols-3">
                {alaUne.map((a, i) => (
                  <article
                    key={a.title}
                    className={i === 0 ? "md:col-span-3 md:grid md:grid-cols-2 md:gap-6" : ""}
                  >
                    <div
                      className={`bg-paper-2 border border-line ${
                        i === 0 ? "aspect-video" : "aspect-[4/3]"
                      } mb-3 flex items-center justify-center text-muted text-xs`}
                    >
                      photo
                    </div>
                    <div>
                      <span className="inline-block bg-accent px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-ink">
                        {a.cat}
                      </span>
                      <h3
                        className={`font-display font-bold leading-snug mt-2 ${
                          i === 0 ? "text-2xl" : "text-base"
                        }`}
                      >
                        <Link href="#" className="hover:text-primary">
                          {a.title}
                        </Link>
                      </h3>
                      <p className="card-location mt-2">{a.location}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Emploi */}
            <section>
              <SectionTitle pre="Offres" em="emploi & stages" href="/emploi" />
              <ul className="divide-y divide-line border border-line">
                {offres.map((o) => (
                  <li key={o.title} className="flex items-center gap-4 p-4 hover:bg-primary-faint">
                    <div className="min-w-0 flex-1">
                      <p className="font-bold leading-snug">{o.title}</p>
                      <p className="card-location mt-1">{o.org}</p>
                    </div>
                    <span className="shrink-0 rounded bg-primary-light px-2 py-1 text-xs font-bold text-primary-dark">
                      {o.type}
                    </span>
                    <Link
                      href="#"
                      className="shrink-0 rounded border-2 border-primary px-3 py-1.5 text-xs font-bold uppercase text-primary hover:bg-primary hover:text-white"
                    >
                      Consulter
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Derniers articles */}
            <section>
              <SectionTitle pre="Les derniers" em="articles" href="/magazine" />
              <div className="grid gap-5 sm:grid-cols-2">
                {articles.map((a) => (
                  <article key={a.title} className="flex gap-4">
                    <div className="h-20 w-28 shrink-0 border border-line bg-paper-2" />
                    <div>
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-primary">
                        {a.cat}
                      </span>
                      <h3 className="mt-1 font-bold leading-snug">
                        <Link href="#" className="hover:text-primary">
                          {a.title}
                        </Link>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <AdSlot label="pavé milieu" />

            {/* Bonnes adresses */}
            <section>
              <SectionTitle pre="Bonnes" em="adresses" href="/adresses" />
              <div className="grid gap-5 sm:grid-cols-3">
                {adresses.map((a) => (
                  <article key={a.name} className="border border-line">
                    <div className="aspect-[4/3] bg-paper-2" />
                    <div className="p-3">
                      <p className="card-location">{a.city}</p>
                      <h3 className="font-bold leading-snug mt-1">{a.name}</h3>
                      <p className="text-sm text-ink-2">{a.cat}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Avantages */}
            <section>
              <SectionTitle pre="Avantages &" em="réductions" href="/avantages" />
              <div className="grid gap-4 sm:grid-cols-2">
                {avantages.map((a) => (
                  <div
                    key={a.deal}
                    className="flex items-center justify-between gap-3 border-l-4 border-accent bg-accent-light p-4"
                  >
                    <div>
                      <p className="font-bold leading-snug">{a.deal}</p>
                      <p className="card-location mt-1">{a.partner}</p>
                    </div>
                    <Link
                      href="#"
                      className="shrink-0 text-xs font-bold uppercase text-primary hover:underline"
                    >
                      Consulter
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Agenda */}
            <section>
              <SectionTitle pre="Événements" em="à venir" href="/agenda" />
              <ul className="space-y-3">
                {agenda.map((e) => (
                  <li key={e.title} className="flex items-center gap-4 border border-line p-4">
                    <span className="shrink-0 rounded bg-primary px-3 py-2 text-center text-xs font-bold uppercase leading-tight text-white">
                      {e.date}
                    </span>
                    <div>
                      <p className="font-bold leading-snug">{e.title}</p>
                      <p className="card-location mt-1">{e.city}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Colonne latérale */}
          <aside className="space-y-8">
            <AdSlot label="pavé latéral" />
            <div className="border-2 border-primary p-4">
              <h3 className="section-title text-sm">
                Gérer mes <em>alertes</em>
              </h3>
              <p className="mt-2 text-sm text-ink-2">
                Recevez par e-mail les offres, articles et événements qui correspondent à vos
                mots-clés.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Emploi", "Paris", "Retour au pays", "Informatique", "Étudiants"].map((k) => (
                  <span
                    key={k}
                    className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark"
                  >
                    {k}
                  </span>
                ))}
              </div>
              <button className="mt-4 w-full rounded bg-primary py-2 text-sm font-bold text-white hover:bg-primary-dark">
                Créer une alerte
              </button>
            </div>
            <div>
              <h3 className="section-title text-sm border-b-2 border-line pb-2 mb-3">
                Populaire <em>sur le site</em>
              </h3>
              <ol className="space-y-3 text-sm">
                {articles.slice(0, 3).map((a, i) => (
                  <li key={a.title} className="flex gap-3">
                    <span className="font-display text-2xl font-black text-line leading-none">
                      {i + 1}
                    </span>
                    <Link href="#" className="font-semibold leading-snug hover:text-primary">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
            <AdSlot label="pavé latéral 2" />
          </aside>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="mt-12 bg-primary-darker text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-black">Béninois du Monde</p>
            <p className="mt-2 text-sm text-white/70">
              Le média et le réseau des Béninois où qu&apos;ils vivent. Édité par le HCBE.
            </p>
          </div>
          <nav className="text-sm space-y-2">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="block text-white/80 hover:text-accent">
                {n.label}
              </Link>
            ))}
          </nav>
          <nav className="text-sm space-y-2">
            {["Le HCBE", "Annonceurs", "Contact", "Mentions légales", "Confidentialité"].map(
              (l) => (
                <Link key={l} href="#" className="block text-white/80 hover:text-accent">
                  {l}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className="tricolor" aria-hidden />
      </footer>
    </>
  );
}
