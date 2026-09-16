import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter, PageBanner } from "@/components/site/chrome";

/* MAQUETTE — Pages légales : gabarit commun, contenus à rédiger avec le HCBE (questionnaire J). */

const PAGES: Record<string, { title: string; em: string; sections: string[] }> = {
  "mentions-legales": {
    title: "Mentions",
    em: "légales",
    sections: ["Éditeur du site", "Directeur de la publication", "Hébergement", "Propriété intellectuelle", "Responsabilité éditoriale et modération", "Droit applicable"],
  },
  confidentialite: {
    title: "Politique de",
    em: "confidentialité",
    sections: ["Données collectées", "Finalités et bases légales", "Visibilité choisie par le membre", "Durées de conservation", "Vos droits (APDP / RGPD)", "Cookies et mesure d'audience", "Contact données personnelles"],
  },
  cgu: {
    title: "CGU & charte de",
    em: "publication",
    sections: ["Inscription et comptes", "Règles de publication", "Modération et signalements", "Petites annonces et mises en relation", "Comptes professionnels et quotas", "Suspension et bannissement"],
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = PAGES[slug];
  return { title: page ? `${page.title} ${page.em}` : "Page légale" };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <PageBanner pre={page.title} em={page.em} desc="Version maquette — le contenu définitif sera rédigé avec le HCBE et son conseil juridique (atelier de cadrage, bloc J)." />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="max-w-2xl space-y-6">
          <p className="rounded border-l-4 border-accent bg-accent-light p-4 text-sm font-semibold">
            ⚠️ Document à compléter : forme juridique, siège et immatriculation du HCBE attendus (questionnaire, bloc A et J).
          </p>
          {page.sections.map((s, i) => (
            <section key={s}>
              <h2 className="section-title text-lg">{i + 1}. {s}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">
                [À rédiger — validé par le conseil juridique du HCBE avant mise en ligne.]
              </p>
            </section>
          ))}
          <nav className="flex flex-wrap gap-4 border-t border-line pt-4 text-sm font-bold text-primary">
            {Object.entries(PAGES).filter(([k]) => k !== slug).map(([k, v]) => (
              <Link key={k} href={`/legal/${k}`} className="hover:underline">{v.title} {v.em} →</Link>
            ))}
          </nav>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
