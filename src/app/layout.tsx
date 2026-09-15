import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const body = Source_Sans_3({
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
