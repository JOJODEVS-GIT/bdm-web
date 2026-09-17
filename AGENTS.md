# bdm-web — Béninois du Monde

> **Commence par lire `ETAT-PROJET.md`** (niveau du projet, liens vitaux, prochaine étape) et tiens-le à jour à chaque étape franchie.

Portail média + communautaire de la diaspora béninoise (modèle : reunionnaisdumonde.com).
Client : HCBE. Dev : Josué (JOJO.DEV's). Cahier des charges : Notion « 🇧🇯 Béninois du Monde » + `~/Desktop/HCBE-reprise/CDC-Beninois-du-Monde-v2.md`.

## Stack

Next.js 15 (App Router) + TypeScript strict · Tailwind v4 (tokens dans `src/app/globals.css`) · Prisma + PostgreSQL (Neon en prod, Docker en local) · Meilisearch · Auth.js · Resend/Brevo · MapLibre + MapTiler · FedaPay · n8n · Vercel.

## Commandes

- `pnpm dev` — dev server (Turbopack)
- `docker compose up -d` — Postgres (5432) + Meilisearch (7700) locaux
- `pnpm prisma migrate dev` — migrations ; `pnpm prisma studio` — inspecter la base
- `pnpm lint && pnpm tsc --noEmit && pnpm build` — à faire passer avant tout commit

## Structure prévue

- `src/app/(site)` — pages publiques (accueil, emploi, magazine, communauté, adresses, agenda…)
- `src/app/(compte)` — espace membre connecté
- `src/app/(admin)` — back-office rédaction/modération
- `src/app/api` — webhooks, RSS, iCal, sitemap, endpoints n8n
- `prisma/schema.prisma` — modèle central : entité générique `Content` typée + géolocalisée + taguée par `Keyword`

## Règles du projet

- **Design** : single-theme fond blanc, esprit magazine. Vert #008751 = navigation/actions, jaune #FCD116 = mises en avant, rouge #E8112D = alertes UNIQUEMENT. Titres Fraunces, texte Source Sans 3. Tokens et classes utilitaires (`.section-title`, `.card-location`, `.tricolor`) dans `globals.css` — ne pas hardcoder de couleurs.
- **Mobile d'abord** ; la colonne latérale passe en fin de page sur mobile.
- **Jamais d'e-mail exposé** : tout contact passe par un formulaire relais (`Message`).
- **Tout contenu** porte lieu (pays/ville) + mots-clés ; toute liste a filtres, compteur et « Voir sur la carte ».
- **Modération** : contenu membre → statut `IN_MODERATION` avant `PUBLISHED`.
- **Français** : UI et messages d'erreur en français.
- Pas de secret dans le code : variables dans `.env` (voir `.env.example`), Gitleaks tourne en CI.

## Branches

`main` = production, `staging` = préprod, travail en `feat/*` → PR vers `staging`.
