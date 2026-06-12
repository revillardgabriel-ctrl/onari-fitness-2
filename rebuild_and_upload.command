#!/bin/bash
# ── ONARI Fitness — Rebuild icône + Upload App Store ──

set -e

PROJECT_DIR="$HOME/Downloads/onari-fitness-2/Onari Fitness"
SCHEME="Onari Fitness"
ARCHIVE_PATH="/tmp/ONARI.xcarchive"
EXPORT_PATH="/tmp/ONARI-export"
EXPORT_OPTIONS="$HOME/Downloads/onari-fitness-2/ExportOptions.plist"

echo ""
echo "╔════════════════════════════════════════╗"
echo "║   ONARI Fitness — Rebuild + Upload     ║"
echo "╚════════════════════════════════════════╝"
echo ""

# 1. Créer ExportOptions.plist si absent
if [ ! -f "$EXPORT_OPTIONS" ]; then
cat > "$EXPORT_OPTIONS" << 'PLIST'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>method</key>
    <string>app-store-connect</string>
    <key>teamID</key>
    <string>AUTO</string>
    <key>uploadBitcode</key>
    <false/>
    <key>uploadSymbols</key>
    <true/>
    <key>signingStyle</key>
    <string>automatic</string>
    <key>destination</key>
    <string>export</string>
</dict>
</plist>
PLIST
echo "✓ ExportOptions.plist créé"
fi

# 2. Build & Archive
echo "► Build & Archive en cours..."
xcodebuild archive \
  -project "$PROJECT_DIR/Onari Fitness.xcodeproj" \
  -scheme "$SCHEME" \
  -configuration Release \
  -archivePath "$ARCHIVE_PATH" \
  -allowProvisioningUpdates \
  CODE_SIGN_STYLE=Automatic \
  | tail -5

echo "✓ Archive créée"

# 3. Export IPA
echo "► Export IPA..."
rm -rf "$EXPORT_PATH"
xcodebuild -exportArchive \
  -archivePath "$ARCHIVE_PATH" \
  -exportPath "$EXPORT_PATH" \
  -exportOptionsPlist "$EXPORT_OPTIONS" \
  -allowProvisioningUpdates \
  | tail -3

IPA_PATH=$(find "$EXPORT_PATH" -name "*.ipa" | head -1)
echo "✓ IPA exporté : $IPA_PATH"

# 4. Upload via altool
echo ""
echo "► Upload sur l'App Store..."
ALTOOL="/Applications/Xcode.app/Contents/SharedFrameworks/ContentDelivery.framework/Resources/altool"

"$ALTOOL" --upload-app \
  --type ios \
  --file "$IPA_PATH" \
  --apiIssuer "$(security find-generic-password -s 'ASC_ISSUER_ID' -w 2>/dev/null || echo 'ISSUER_ID_ICI')" \
  --apiKey "$(security find-generic-password -s 'ASC_API_KEY' -w 2>/dev/null || echo 'KEY_ID_ICI')" \
  --output-format normal 2>&1 | tail -10 \
  || \
  "$ALTOOL" --upload-app \
    --type ios \
    --file "$IPA_PATH" \
    --username "revillardgabriel@gmail.com" \
    --password "@keychain:AC_PASSWORD" \
    --output-format normal 2>&1 | tail -10

echo ""
echo "╔══════════════════════════╗"
echo "║  ✅  Upload terminé !    ║"
echo "╚══════════════════════════╝"
echo ""
echo "Appuie sur Entrée pour fermer..."
read
