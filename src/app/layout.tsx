import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

/* Typo « administrative » : Public Sans — la police officielle open source
   du design system du gouvernement américain (USWDS), même esprit que la
   Marianne de l'État français. Une seule famille = rendu institutionnel.
   Graisses fortes (700/800) pour les titres, 400/600 pour le texte. */

const display = Public_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const body = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Béninois du Monde",
    template: "%s — Béninois du Monde",
  },
  description:
    "Le média et le réseau des Béninois où qu'ils vivent : emploi, communauté, bonnes adresses, agenda, mémoire et racines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="tricolor" aria-hidden />
        {children}
      </body>
    </html>
  );
}
