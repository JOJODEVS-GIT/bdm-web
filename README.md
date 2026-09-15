# Béninois du Monde — bdm-web

Le média et le réseau des Béninois où qu'ils vivent. Portail Next.js construit pour le HCBE sur le modèle des grands sites de diaspora : magazine, emploi, annuaires communautaires, bonnes adresses, agenda, avantages partenaires, mémoire et racines.

## Démarrer

```bash
pnpm install
docker compose up -d        # Postgres + Meilisearch
cp .env.example .env        # puis compléter
pnpm prisma migrate dev
pnpm dev
```

## Scripts

| Commande | Rôle |
| --- | --- |
| `pnpm dev` | Serveur de dev (http://localhost:3000) |
| `pnpm build` | Build de production |
| `pnpm lint` / `pnpm tsc --noEmit` | Qualité |
| `pnpm prisma studio` | Explorer la base |

## Documentation

- Cahier des charges v2 : Notion « 🇧🇯 Béninois du Monde »
- Conventions du repo : `AGENTS.md`
