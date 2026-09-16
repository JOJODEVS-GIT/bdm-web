#!/bin/zsh
# Lanceur du site Béninois du Monde en local.
# Double-clique ce fichier : le serveur démarre et le site s'ouvre dans le navigateur.
# Pour arrêter : ferme la fenêtre Terminal (ou Ctrl+C dedans).

cd "$(dirname "$0")"

PORT=3457
URL="http://localhost:$PORT"

# Déjà lancé ? On ouvre juste le navigateur.
if curl -s -o /dev/null --max-time 2 "$URL"; then
  echo "✅ Le serveur tourne déjà — ouverture de $URL"
  open "$URL"
  exit 0
fi

echo "🚀 Démarrage du site Béninois du Monde sur $URL …"
echo "   (première compilation : ~10 secondes)"

# Ouvre le navigateur dès que le serveur répond
( for i in {1..60}; do
    sleep 2
    curl -s -o /dev/null --max-time 2 "$URL" && { open "$URL"; exit 0; }
  done ) &

exec pnpm dev --port $PORT
