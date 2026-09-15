"use client";

import { useState } from "react";

/* Bande « carte de la diaspora » — ouverte par défaut sur l'accueil,
   repliée partout ailleurs. Aperçu maquette : la vraie carte MapLibre
   arrive avec le développement (CDC §7.1 géolocalisation). */

const VILLES = [
  { name: "Cotonou", n: "312", top: "54%", left: "49.5%", big: true },
  { name: "Paris", n: "214", top: "26%", left: "47%", big: true },
  { name: "Bruxelles", n: "96", top: "21%", left: "48.5%" },
  { name: "Marseille", n: "71", top: "31%", left: "48%" },
  { name: "Montréal", n: "88", top: "27%", left: "28%" },
  { name: "New York", n: "64", top: "33%", left: "27%" },
  { name: "Abidjan", n: "57", top: "60%", left: "43.5%" },
  { name: "Dakar", n: "43", top: "48%", left: "41%" },
  { name: "Lomé", n: "39", top: "63%", left: "47.5%" },
  { name: "Lagos", n: "52", top: "56%", left: "54%" },
  { name: "Libreville", n: "18", top: "70%", left: "52.5%" },
  { name: "Canton", n: "22", top: "44%", left: "79%" },
];

const FILTRES = ["Membres", "Associations", "Adresses", "Événements"];

export function MapBand({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section aria-label="Carte de la diaspora">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full bg-primary-darker py-3 text-center text-sm font-bold uppercase tracking-[0.15em] text-accent hover:bg-primary-dark"
      >
        {open ? "▴ Replier la carte de la diaspora" : "▾ Déplier la carte de la diaspora"}
      </button>

      {open && (
        <div className="relative h-[340px] overflow-hidden border-b border-line bg-[#dfe9e2]">
          {/* Fond « carte » stylisé */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 45% 40%, #c3d6c9 0 18%, transparent 19%), radial-gradient(circle at 30% 30%, #c3d6c9 0 12%, transparent 13%), radial-gradient(circle at 75% 45%, #c3d6c9 0 14%, transparent 15%), linear-gradient(#cfdcd3 1px, transparent 1px), linear-gradient(90deg, #cfdcd3 1px, transparent 1px)",
              backgroundSize: "auto, auto, auto, 40px 40px, 40px 40px",
            }}
          />

          {/* Marqueurs villes */}
          {VILLES.map((v) => (
            <button
              key={v.name}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full font-bold shadow-sm hover:z-10 hover:scale-105 ${
                v.big
                  ? "z-[5] bg-primary text-white px-3 py-1.5 text-sm"
                  : "bg-paper text-primary-dark border border-primary px-2 py-1 text-xs"
              }`}
              style={{ top: v.top, left: v.left }}
            >
              {v.n} <span className="font-semibold">{v.name}</span>
            </button>
          ))}

          {/* Légende + filtres */}
          <div className="absolute bottom-3 left-3 rounded bg-paper/95 px-3 py-2 shadow-sm">
            <p className="text-sm font-bold">
              1 254 membres · <span className="text-primary">47 pays</span>
            </p>
            <div className="mt-1.5 flex gap-1.5">
              {FILTRES.map((f, i) => (
                <button
                  key={f}
                  className={`rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold ${
                    i === 0
                      ? "bg-primary text-white"
                      : "border border-line text-ink-2 hover:border-primary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <p className="absolute bottom-3 right-3 rounded bg-paper/80 px-2 py-1 text-[0.65rem] uppercase tracking-wider text-muted">
            Aperçu maquette — carte interactive MapLibre à venir
          </p>
        </div>
      )}
    </section>
  );
}
