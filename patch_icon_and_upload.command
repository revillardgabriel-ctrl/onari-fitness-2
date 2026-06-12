#!/bin/bash
# ── ONARI — Patch icône + Upload (v2, sips natif) ──

ICON_SRC="$HOME/Downloads/onari-fitness-2/Onari Fitness/Onari Fitness/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png"
WORK_DIR="/tmp/ONARI_patch_v2"
NEW_IPA="/tmp/ONARI_patched.ipa"

echo ""
echo "╔══════════════════════════════════════╗"
echo "║  ONARI — Patch icône + Upload v2     ║"
echo "╚══════════════════════════════════════╝"
echo ""

# Trouver l'IPA automatiquement
IPA_SRC=$(find "$HOME/Desktop" "$HOME/Downloads" /tmp -name "ONARI.ipa" -o -name "Onari*.ipa" 2>/dev/null | head -1)
if [ -z "$IPA_SRC" ]; then
  echo "❌ IPA introuvable. Où est ton fichier .ipa ?"
  echo "   Glisse-dépose le fichier ici et appuie sur Entrée :"
  read IPA_SRC
  IPA_SRC="${IPA_SRC// /\\ }"
fi

echo "✓ Icône : $ICON_SRC ($(du -h "$ICON_SRC" 2>/dev/null | cut -f1))"
echo "✓ IPA   : $IPA_SRC ($(du -h "$IPA_SRC" 2>/dev/null | cut -f1))"
echo ""

if [ ! -f "$ICON_SRC" ]; then echo "❌ Icône introuvable"; read; exit 1; fi
if [ ! -f "$IPA_SRC" ] || [ ! -s "$IPA_SRC" ]; then echo "❌ IPA introuvable ou vide"; read; exit 1; fi

# 1. Extraire
echo "► Extraction IPA..."
rm -rf "$WORK_DIR" && mkdir -p "$WORK_DIR"
unzip -q "$IPA_SRC" -d "$WORK_DIR"
APP_PATH=$(find "$WORK_DIR/Payload" -name "*.app" -maxdepth 1 | head -1)
echo "✓ Bundle : $APP_PATH"

# 2. Remplacer les icônes avec sips (natif macOS, pas besoin de PIL)
echo "► Remplacement icônes avec sips..."
for SIZE in 20 29 40 58 60 76 80 87 120 152 167 180 1024; do
  for SCALE in 1 2 3; do
    PX=$((SIZE * SCALE))
    NAME="AppIcon${SIZE}x${SIZE}@${SCALE}x.png"
    sips -z $PX $PX "$ICON_SRC" --out "$APP_PATH/$NAME" &>/dev/null && echo "  ✓ $NAME" || true
  done
done
# Taille directe aussi
sips -z 1024 1024 "$ICON_SRC" --out "$APP_PATH/AppIcon-1024.png" &>/dev/null && echo "  ✓ AppIcon-1024.png"
sips -z 180 180  "$ICON_SRC" --out "$APP_PATH/AppIcon60x60@3x.png" &>/dev/null && echo "  ✓ AppIcon60x60@3x.png"
sips -z 120 120  "$ICON_SRC" --out "$APP_PATH/AppIcon60x60@2x.png" &>/dev/null && echo "  ✓ AppIcon60x60@2x.png"

# Remplacer les PNGs existants dans le bundle (s'il y en a)
find "$APP_PATH" -name "AppIcon*.png" -not -path "*/Assets.car" | while read f; do
  SIZE=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/ {print $2}')
  if [ -n "$SIZE" ]; then
    sips -z $SIZE $SIZE "$ICON_SRC" --out "$f" &>/dev/null && echo "  ✓ Remplacé: $(basename $f) (${SIZE}px)"
  fi
done
echo "✓ Icônes remplacées"

# 3. Trouver l'identité de signature
echo "► Recherche identité de signature..."
SIGN_ID=$(codesign -dv "$APP_PATH" 2>&1 | grep "^Authority=" | head -1 | sed 's/Authority=//')
if [ -z "$SIGN_ID" ]; then
  SIGN_ID=$(security find-identity -v -p codesigning 2>/dev/null | grep -E "iPhone Distribution|Apple Distribution" | head -1 | sed 's/.*"\(.*\)"/\1/')
fi
echo "  → $SIGN_ID"

# 4. Re-signer
echo "► Re-signature..."
codesign --force --sign "$SIGN_ID" --preserve-metadata=entitlements "$APP_PATH" 2>&1
echo "✓ Signé"

# 5. Repackager
echo "► Repackage IPA..."
cd "$WORK_DIR" && zip -qr "$NEW_IPA" Payload
echo "✓ $(du -h "$NEW_IPA" | cut -f1) — $NEW_IPA"

# 6. Upload
echo ""
echo "► Upload sur l'App Store..."
ALTOOL="/Applications/Xcode.app/Contents/SharedFrameworks/ContentDelivery.framework/Resources/altool"
"$ALTOOL" --upload-app \
  --type ios \
  --file "$NEW_IPA" \
  --username "revillardgabriel@gmail.com" \
  --password "@keychain:AC_PASSWORD" \
  --output-format normal 2>&1 | tail -20

echo ""
echo "╔══════════════════════════╗"
echo "║  ✅  Terminé !           ║"
echo "╚══════════════════════════╝"
echo "Appuie sur Entrée pour fermer..."
read
