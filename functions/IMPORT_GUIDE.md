# Import ExerciseDB → Firebase — Guide complet

## Ce que tu obtiendras
- **1 300+ exercices** avec noms, muscles, équipement
- **GIFs animés** hébergés sur Firebase Storage (accès illimité, permanent)
- **Firestore** collection `exercices_db` pour requêtes dynamiques
- **EXERCICE_LIB** mis à jour dans app.html

---

## Étape 1 — Clé Firebase (Service Account)

1. Va sur [Firebase Console](https://console.firebase.google.com)
2. Ton projet → ⚙️ Paramètres → **Comptes de service**
3. Clique **Générer une nouvelle clé privée**
4. Renomme le fichier téléchargé en `serviceAccountKey.json`
5. Place-le dans le dossier `functions/`

---

## Étape 2 — Clé RapidAPI (ExerciseDB)

1. Va sur [rapidapi.com/justin-WFnsXH_t6/api/exercisedb](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
2. Souscris au plan **Basic** (~9€/mois) ou **Ultra** pour aller plus vite
3. Copie ta **X-RapidAPI-Key** depuis le dashboard

---

## Étape 3 — Activer Firebase Storage

Dans la Firebase Console :
- **Storage** → Commencer → choisir région `europe-west1` (ou `us-central1`)
- Les GIFs seront dans le bucket `ton-projet.appspot.com`

---

## Étape 4 — Lancer l'import

```bash
cd /Users/69latriksbir/Downloads/onari-fitness-2/functions

# Installer les dépendances si pas déjà fait
npm install

# Lancer l'import (~30-60 min pour 1300 exercices + GIFs)
node --experimental-vm-modules import-exercises.js --key TA_CLE_RAPIDAPI
```

### Ce que fait le script :
1. Récupère tous les exercices par pages de 100
2. Sauvegarde `exercices_raw.json` (backup immédiat)
3. Pour chaque exercice : upload GIF → Storage, écriture → Firestore
4. Sauvegarde `exercices_export.json` à la fin

---

## Étape 5 — Générer EXERCICE_LIB

```bash
node generate-exercice-lib.js
```

Ça génère `exercice_lib_snippet.js`. Ouvre `app.html`, cherche :
```js
const EXERCICE_LIB = {
```
Et remplace tout le bloc par le contenu du snippet.

---

## Étape 6 — Déployer

```bash
cp ../app.html ../deploy/index.html
firebase deploy --only hosting
```

---

## Coût & timing

| Phase | Durée | Coût |
|-------|-------|------|
| Import RapidAPI (1 mois Basic) | — | ~9€ |
| Firebase Storage (1300 GIFs ~500KB chacun) | permanent | ~0.65 Go = ~0.01€/mois |
| Firestore (1300 docs) | permanent | < 1€/mois |
| **Total** | **1 fois** | **~10€** |

Après l'import, tu peux annuler RapidAPI. Firebase paye mensuellement mais c'est cents.

---

## En cas d'erreur

- `exercices_errors.json` liste les exercices qui ont échoué
- Tu peux relancer le script : il **skip** les GIFs déjà uploadés sur Storage
- Si erreur Firestore : vérifie que `serviceAccountKey.json` a les droits Firestore

---

## Résultat dans l'app

Les exercices seront disponibles :
- Dans `EXERCICE_LIB` (inline dans app.html) pour la création de séances
- Via Firestore pour une recherche dynamique future
- Les GIFs s'affichent dans la fiche exercice
