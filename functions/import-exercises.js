/**
 * ══════════════════════════════════════════════════════
 *  Onari Fitness — Import ExerciseDB → Firebase
 * ══════════════════════════════════════════════════════
 *
 * Usage:
 *   node import-exercises.js --key YOUR_RAPIDAPI_KEY
 *
 * Ce script :
 *  1. Récupère TOUS les exercices depuis ExerciseDB (RapidAPI)
 *  2. Télécharge chaque GIF → Firebase Storage (exercices-gifs/)
 *  3. Écrit les données dans Firestore (collection "exercices_db")
 *  4. Génère un fichier exercices_export.json (backup local)
 *
 * Prerequisites :
 *   npm install node-fetch@3 firebase-admin
 *   Avoir serviceAccountKey.json dans ce dossier
 *   (Firebase Console → Paramètres → Comptes de service → Générer clé)
 * ══════════════════════════════════════════════════════
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Parse CLI args ────────────────────────────────────
const args = process.argv.slice(2);
const keyArg = args.indexOf('--key');
const RAPID_API_KEY = keyArg !== -1 ? args[keyArg + 1] : process.env.RAPIDAPI_KEY;

if (!RAPID_API_KEY) {
  console.error('❌  Clé API manquante. Lance: node import-exercises.js --key TA_CLE');
  console.error('   (ou exporte RAPIDAPI_KEY dans ton shell)');
  process.exit(1);
}

// ── Firebase Admin ────────────────────────────────────
const serviceKeyPath = join(__dirname, 'serviceAccountKey.json');
if (!existsSync(serviceKeyPath)) {
  console.error('❌  serviceAccountKey.json introuvable dans functions/');
  console.error('   Firebase Console → Paramètres → Comptes de service → Générer une nouvelle clé privée');
  process.exit(1);
}

import admin from 'firebase-admin';
const serviceAccount = JSON.parse(readFileSync(serviceKeyPath, 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: `${serviceAccount.project_id}.appspot.com`,
});

const db    = admin.firestore();
const bucket = admin.storage().bucket();

// ── ExerciseDB Config ─────────────────────────────────
const API_HOST   = 'exercisedb.p.rapidapi.com';
const PAGE_LIMIT = 100;   // max par requête (API: 0-2000)
const DELAY_MS   = 600;   // pause entre requêtes pour éviter le rate-limit

// Mapping bodyPart ExerciseDB → muscle principal Onari
const BODY_PART_MAP = {
  'back':         'Dos',
  'cardio':       'Cardio',
  'chest':        'Pectoraux',
  'lower arms':   'Avant-bras',
  'lower legs':   'Mollets',
  'neck':         'Cou',
  'shoulders':    'Épaules',
  'upper arms':   'Bras',
  'upper legs':   'Quadriceps',
  'waist':        'Abdominaux',
};

// Mapping equipment ExerciseDB → équipement Onari
const EQUIP_MAP = {
  'assisted':       'Poids de corps',
  'band':           'Élastique',
  'barbell':        'Barre',
  'body weight':    'Poids de corps',
  'bosu ball':      'BOSU',
  'cable':          'Câble',
  'dumbbell':       'Haltères',
  'elliptical machine': 'Cardio machine',
  'ez barbell':     'Barre EZ',
  'hammer':         'Haltères',
  'kettlebell':     'Kettlebell',
  'leverage machine': 'Machine',
  'medicine ball':  'Medicine ball',
  'olympic barbell': 'Barre olympique',
  'resistance band': 'Élastique',
  'roller':         'Rouleau',
  'rope':           'Corde',
  'skierg machine': 'SkiErg',
  'sled machine':   'Sled',
  'smith machine':  'Smith machine',
  'stability ball': 'Swiss ball',
  'stationary bike': 'Vélo',
  'stepmill machine': 'Stepper',
  'tire':           'Pneu',
  'trap bar':       'Trap bar',
  'upper body ergometer': 'Ergomètre',
  'weighted':       'Lestage',
  'wheel roller':   'Roue abdominale',
};

// ── Helpers ───────────────────────────────────────────
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchJSON(url, options) {
  const { default: fetch } = await import('node-fetch');
  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.json();
}

async function uploadGif(gifUrl, exerciseId) {
  const { default: fetch } = await import('node-fetch');
  const destPath = `exercices-gifs/${exerciseId}.gif`;

  // Vérifie si déjà uploadé
  const file = bucket.file(destPath);
  const [exists] = await file.exists();
  if (exists) {
    const [meta] = await file.getMetadata();
    return meta.mediaLink || await getPublicUrl(file, destPath);
  }

  const res = await fetch(gifUrl);
  if (!res.ok) throw new Error(`GIF fetch failed: ${res.status}`);

  const buffer = Buffer.from(await res.arrayBuffer());

  await file.save(buffer, {
    metadata: { contentType: 'image/gif', cacheControl: 'public, max-age=31536000' },
    public: true,
  });

  return `https://storage.googleapis.com/${bucket.name}/${destPath}`;
}

async function getPublicUrl(file, destPath) {
  return `https://storage.googleapis.com/${bucket.name}/${destPath}`;
}

function mapExercise(ex) {
  return {
    id:           ex.id,
    nom:          capitalizeWords(ex.name),
    nom_en:       ex.name,
    muscle:       BODY_PART_MAP[ex.bodyPart] || capitalizeWords(ex.bodyPart),
    muscle_cible: ex.target ? capitalizeWords(ex.target) : null,
    secondaires:  (ex.secondaryMuscles || []).map(m => capitalizeWords(m)),
    instructions: ex.instructions || [],
    description:  ex.description || null,
    difficulte:   ex.difficulty || null,
    equipement:   EQUIP_MAP[ex.equipment] || capitalizeWords(ex.equipment),
    equipement_en: ex.equipment,
    categorie:    ex.bodyPart,
    type:         ex.category || null,
    gif_url:      null,   // sera rempli après upload
    gif_local:    ex.gifUrl,
    source:       'exercisedb',
  };
}

function capitalizeWords(str) {
  if (!str) return str;
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

// ── Main ──────────────────────────────────────────────
async function main() {
  console.log('🏋️  Onari Fitness — Import ExerciseDB');
  console.log('─'.repeat(50));

  // Étape 1 : Compter le total
  console.log('\n📊 Récupération du nombre total d\'exercices...');
  const countData = await fetchJSON(
    `https://${API_HOST}/exercises?limit=0&offset=0`,
    { headers: { 'X-RapidAPI-Key': RAPID_API_KEY, 'X-RapidAPI-Host': API_HOST } }
  );
  // L'API retourne un tableau — on récupère juste la taille max en paginant
  // Alternative: /exercises?limit=1 et regarder le header x-total-count
  // ExerciseDB ne retourne pas de total header, on pagine jusqu'à épuisement

  console.log('📥 Récupération de tous les exercices par pages...');
  let allExercises = [];
  let offset = 0;
  let page = 1;

  while (true) {
    process.stdout.write(`   Page ${page} (offset ${offset})... `);
    const data = await fetchJSON(
      `https://${API_HOST}/exercises?limit=${PAGE_LIMIT}&offset=${offset}`,
      { headers: { 'X-RapidAPI-Key': RAPID_API_KEY, 'X-RapidAPI-Host': API_HOST } }
    );

    if (!Array.isArray(data) || data.length === 0) {
      console.log('fin.');
      break;
    }

    allExercises = allExercises.concat(data);
    console.log(`${data.length} exercices`);

    if (data.length < PAGE_LIMIT) break;

    offset += PAGE_LIMIT;
    page++;
    await sleep(DELAY_MS);
  }

  console.log(`\n✅ Total récupéré : ${allExercises.length} exercices\n`);

  // Sauvegarde locale brute (sécurité)
  writeFileSync(
    join(__dirname, 'exercices_raw.json'),
    JSON.stringify(allExercises, null, 2)
  );
  console.log('💾 Sauvegarde brute : exercices_raw.json');

  // Étape 2 : Upload GIFs + Firestore
  console.log('\n🖼️  Upload GIFs → Firebase Storage + écriture Firestore...\n');

  const batch_size = 50;
  const results = [];
  let errors = [];

  for (let i = 0; i < allExercises.length; i++) {
    const ex = allExercises[i];
    const mapped = mapExercise(ex);

    process.stdout.write(
      `[${String(i + 1).padStart(4)}/${allExercises.length}] ${mapped.nom.slice(0, 35).padEnd(35)} `
    );

    // Upload GIF
    try {
      if (ex.gifUrl) {
        mapped.gif_url = await uploadGif(ex.gifUrl, ex.id);
        process.stdout.write('🖼️  ');
      } else {
        process.stdout.write('⬜ ');
      }
    } catch (e) {
      process.stdout.write('❌ gif ');
      errors.push({ id: ex.id, nom: ex.name, error: e.message });
    }

    // Écriture Firestore
    try {
      await db.collection('exercices_db').doc(ex.id).set({
        ...mapped,
        updated_at: admin.firestore.FieldValue.serverTimestamp(),
      });
      process.stdout.write('✅\n');
    } catch (e) {
      process.stdout.write(`❌ fs: ${e.message}\n`);
      errors.push({ id: ex.id, error: `Firestore: ${e.message}` });
    }

    results.push(mapped);

    // Pause toutes les 50 requêtes
    if ((i + 1) % batch_size === 0) {
      await sleep(DELAY_MS * 2);
    }
  }

  // Export final
  writeFileSync(
    join(__dirname, 'exercices_export.json'),
    JSON.stringify(results, null, 2)
  );

  if (errors.length > 0) {
    writeFileSync(
      join(__dirname, 'exercices_errors.json'),
      JSON.stringify(errors, null, 2)
    );
  }

  console.log('\n' + '─'.repeat(50));
  console.log(`✅ Import terminé !`);
  console.log(`   ${results.length} exercices importés`);
  console.log(`   ${errors.length} erreurs (voir exercices_errors.json)`);
  console.log(`   💾 Backup local : exercices_export.json`);
  console.log('\nProchaine étape : node generate-exercice-lib.js');
  console.log('(génère le bloc EXERCICE_LIB pour app.html)');
}

main().catch(err => {
  console.error('\n💥 Erreur fatale :', err.message);
  process.exit(1);
});
