"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

/* Bande « carte de la diaspora » — vraie carte interactive MapLibre + OpenStreetMap,
   comme le site modèle. Ouverte par défaut sur l'accueil, repliée ailleurs.
   Les compteurs par ville sont des données d'exemple (branchés à la base en S5). */

const VILLES: { name: string; n: number; lng: number; lat: number; big?: boolean }[] = [
  { name: "Cotonou", n: 312, lng: 2.39, lat: 6.37, big: true },
  { name: "Paris", n: 214, lng: 2.35, lat: 48.85, big: true },
  { name: "Bruxelles", n: 96, lng: 4.35, lat: 50.85 },
  { name: "Marseille", n: 71, lng: 5.37, lat: 43.3 },
  { name: "Montréal", n: 88, lng: -73.57, lat: 45.5 },
  { name: "New York", n: 64, lng: -74.01, lat: 40.71 },
  { name: "Abidjan", n: 57, lng: -4.02, lat: 5.35 },
  { name: "Dakar", n: 43, lng: -17.47, lat: 14.72 },
  { name: "Lomé", n: 39, lng: 1.22, lat: 6.13 },
  { name: "Lagos", n: 52, lng: 3.38, lat: 6.52 },
  { name: "Libreville", n: 18, lng: 9.44, lat: 0.42 },
  { name: "Canton", n: 22, lng: 113.26, lat: 23.13 },
];

const FILTRES = ["Membres", "Associations", "Adresses", "Événements"];

export function MapBand({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!open || !containerRef.current || mapRef.current) return;

    let map: maplibregl.Map;
    try {
        map = new maplibregl.Map({
        container: containerRef.current,
        style: {
          version: 8,
          sources: {
            osm: {
              type: "raster",
              tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
              tileSize: 256,
              attribution: "© OpenStreetMap",
            },
          },
          layers: [{ id: "osm", type: "raster", source: "osm" }],
        },
        bounds: [
          [-82, -8],
          [118, 55],
        ],
        fitBoundsOptions: { padding: { top: 30, bottom: 30, left: 70, right: 70 } },
        minZoom: 0.8,
        maxZoom: 12,
        attributionControl: { compact: true },
      });

      // Navigation au clic sur +/- ; pas de zoom à la molette (la page doit défiler)
      map.scrollZoom.disable();
      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();
      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

      for (const v of VILLES) {
        const el = document.createElement("button");
        el.className = v.big ? "bdm-marker bdm-marker-big" : "bdm-marker";
        el.innerHTML = `<b>${v.n}</b>&nbsp;${v.name}`;
        el.setAttribute("aria-label", `${v.n} membres à ${v.name}`);
        new maplibregl.Marker({ element: el, anchor: "center" })
          .setLngLat([v.lng, v.lat])
          .addTo(map);
      }

      mapRef.current = map;
    } catch {
      // WebGL indisponible (navigateur ancien, capture headless) : le fond
      // stylisé du conteneur sert de carte de repli, sans planter la page.
      return;
    }
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [open]);

  return (
    <section aria-label="Carte de la diaspora">
      {/* Ouvreur façon site modèle : chevron + texte replier/déplier */}
      <div className="border-b border-line bg-paper-2">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="group mx-auto flex items-center gap-2 py-2.5 text-[0.78rem] font-bold uppercase tracking-[0.15em] text-primary hover:text-primary-dark"
        >
          <ChevronDown
            aria-hidden
            className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            strokeWidth={2.5}
          />
          {open ? "Replier la carte" : "Déplier la carte"}
        </button>
      </div>

      {open && (
        <div className="relative border-b border-line">
          <div ref={containerRef} className="h-[380px] w-full bg-[#dfe9e2]" />

          {/* Légende + filtres */}
          <div className="absolute bottom-3 left-3 z-10 rounded bg-paper/95 px-3 py-2 shadow-sm">
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
                      : "border border-line bg-paper text-ink-2 hover:border-primary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
