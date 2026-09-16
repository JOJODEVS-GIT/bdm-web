import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, SectionTitle, PageBanner } from "@/components/site/chrome";

export const metadata: Metadata = { title: "Le HCBE" };

/* MAQUETTE — Page institutionnelle HCBE (CDC §7.12), contenus à fournir par le HCBE. */

const BUREAU = ["Président·e", "Vice-président·e", "Secrétaire général·e", "Trésorier·ère", "Chargé·e de communication", "Conseiller·ère juridique"];

const CONSULATS = [
  { city: "Paris · France", type: "Ambassade", tel: "+33 1 XX XX XX XX" },
  { city: "Bruxelles · Belgique", type: "Ambassade", tel: "+32 2 XX XX XX" },
  { city: "Washington · USA", type: "Ambassade", tel: "+1 202 XXX XXXX" },
  { city: "Ottawa · Canada", type: "Ambassade", tel: "+1 613 XXX XXXX" },
];

export default function HcbePage() {
  return (
    <>
      <SiteHeader />
      <PageBanner
        pre="Le"
        em="HCBE"
        desc="Le Haut Conseil des Béninois de l'Extérieur édite Béninois du Monde. Missions, bureau exécutif et services aux ressortissants."
      />

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-12">
        <section>
          <SectionTitle pre="Nos" em="missions" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { t: "Fédérer", d: "Rassembler les Béninois de l'extérieur et leurs associations autour d'un réseau commun." },
              { t: "Servir", d: "Informer sur les démarches consulaires, l'installation et le retour au pays." },
              { t: "Connecter", d: "Relier la diaspora aux opportunités du Bénin : emploi, investissement, culture." },
            ].map((m) => (
              <article key={m.t} className="border border-line p-5">
                <h3 className="font-display text-lg font-bold text-primary">{m.t}</h3>
                <p className="mt-1 text-sm text-ink-2">{m.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">Textes d&apos;exemple — les missions officielles seront fournies par le HCBE (questionnaire H).</p>
        </section>

        <section>
          <SectionTitle pre="Le bureau" em="exécutif" />
          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-6">
            {BUREAU.map((r) => (
              <article key={r} className="border border-line p-3 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light font-display text-xl font-black text-primary-dark">?</div>
                <p className="mt-2 text-sm font-bold leading-tight">Nom à venir</p>
                <p className="text-xs text-muted">{r}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle pre="Services" em="consulaires" />
          <div className="tablewrap overflow-x-auto border border-line">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-paper-2 text-left text-xs font-bold uppercase tracking-wider text-ink-2">
                  <th className="p-3">Représentation</th><th className="p-3">Type</th><th className="p-3">Téléphone</th><th className="p-3"></th>
                </tr>
              </thead>
              <tbody>
                {CONSULATS.map((c) => (
                  <tr key={c.city} className="border-t border-line hover:bg-primary-faint">
                    <td className="p-3 font-bold">{c.city}</td>
                    <td className="p-3">{c.type}</td>
                    <td className="p-3">{c.tel}</td>
                    <td className="p-3 text-right"><button className="whitespace-nowrap text-xs font-bold uppercase text-primary hover:underline">Détails →</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">Liste complète des ambassades et consulats à fournir par le HCBE.</p>
        </section>

        <section className="border-2 border-primary p-6 text-center">
          <h2 className="font-display text-xl font-bold">Nous écrire</h2>
          <p className="mx-auto mt-1 max-w-xl text-sm text-ink-2">Question consulaire, presse, partenariat : le formulaire de contact route votre message au bon service.</p>
          <Link href="/contact" className="mt-4 inline-block rounded bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary-dark">Ouvrir le formulaire de contact</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
