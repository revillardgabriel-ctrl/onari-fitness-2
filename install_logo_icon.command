#!/bin/bash
# ── ONARI — Installe le vrai logo Canva comme icône app ──

LOGO_URL="https://export-download.canva.com/oIwR0/DAHLhuoIwR0/-1/0/0001-379933521627675628.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20260603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260603T030020Z&X-Amz-Expires=48961&X-Amz-Signature=fbc00d3fa66efec6c92f0960e226d1bb8a2982e21160329f23bda61f5d269094&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2003%20Jun%202026%2016%3A36%3A21%20GMT"

BASE="$HOME/Downloads/onari-fitness-2"
APPICONSET="$BASE/Onari Fitness/Onari Fitness/Assets.xcassets/AppIcon.appiconset"
DEPLOY_ICONS="$BASE/deploy/icons"

echo ""
echo "╔══════════════════════════════════╗"
echo "║  ONARI — Installation logo Canva ║"
echo "╚══════════════════════════════════╝"
echo ""

echo "► Téléchargement du logo Canva (1024x1024)..."
curl -L -o /tmp/AppIcon_canva.png "$LOGO_URL"

if [ ! -f /tmp/AppIcon_canva.png ]; then
  echo "❌ Erreur : impossible de télécharger le logo. L'URL a peut-être expiré."
  echo "   Contacte Gabriel pour régénérer l'export."
  read
  exit 1
fi

echo "✓ Logo téléchargé ($(du -h /tmp/AppIcon_canva.png | cut -f1))"

echo "► Installation dans Xcode AppIcon..."
cp /tmp/AppIcon_canva.png "$APPICONSET/AppIcon-1024.png"
echo "✓ AppIcon.appiconset mis à jour"

echo "► Génération des variantes PWA..."
python3 << PYEOF
from PIL import Image
img = Image.open("/tmp/AppIcon_canva.png").convert("RGB")
sizes = {
    "$DEPLOY_ICONS/apple-touch-icon.png": 180,
    "$DEPLOY_ICONS/icon-192.png": 192,
    "$DEPLOY_ICONS/icon-512.png": 512,
}
for path, size in sizes.items():
    img.resize((size, size), Image.LANCZOS).save(path, "PNG")
    print(f"  ✓ {size}x{size}px")
PYEOF

echo ""
echo "╔══════════════════════════════════╗"
echo "║  ✅ Logo installé partout !      ║"
echo "╚══════════════════════════════════╝"
echo ""
echo "Prochaine étape : lance rebuild_and_upload.command"
echo "pour rebuilder l'app et uploader sur l'App Store."
echo ""
echo "Appuie sur Entrée pour fermer..."
read
