/**
 * ══════════════════════════════════════════════════════
 *  Onari Fitness — Générer EXERCICE_LIB depuis Firestore
 * ══════════════════════════════════════════════════════
 *
 * Usage (après import-exercises.js) :
 *   node generate-exercice-lib.js
 *
 * Lit exercices_export.json (ou Firestore) et génère :
 *   - exercice_lib_snippet.js  → coller dans app.html
 * ══════════════════════════════════════════════════════
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const exportPath = join(__dirname, 'exercices_export.json');
if (!existsSync(exportPath)) {
  console.error('❌  exercices_export.json introuvable. Lance d\'abord import-exercises.js');
  process.exit(1);
}

const exercises = JSON.parse(readFileSync(exportPath, 'utf8'));
console.log(`📥 ${exercises.length} exercices chargés`);

// Construit la map EXERCICE_LIB compatible avec l'app
// Format actuel dans app.html:
// const EXERCICE_LIB = {
//   'Nom': { muscles: ['Muscle1'], equipment: 'Équipement', gif: 'url...' },
// }

const lib = {};

for (const ex of exercises) {
  const key = ex.nom; // nom français capitalisé

  const muscles = [];
  if (ex.muscle)        muscles.push(ex.muscle);
  if (ex.muscle_cible && ex.muscle_cible !== ex.muscle) muscles.push(ex.muscle_cible);
  if (ex.secondaires)   muscles.push(...ex.secondaires.slice(0, 2));

  lib[key] = {
    muscles:    [...new Set(muscles)],
    equipment:  ex.equipement || 'Poids de corps',
    gif:        ex.gif_url || null,
    categorie:  ex.categorie || null,
    id:         ex.id,
  };
}

// Trier par nom
const sorted = Object.fromEntries(
  Object.entries(lib).sort(([a], [b]) => a.localeCompare(b, 'fr'))
);

// Générer le snippet JS
const snippet = `// ══ EXERCICE_LIB — Généré automatiquement depuis ExerciseDB ══
// ${exercises.length} exercices importés le ${new Date().toLocaleDateString('fr-FR')}
// NE PAS MODIFIER MANUELLEMENT — relancer generate-exercice-lib.js

const EXERCICE_LIB = ${JSON.stringify(sorted, null, 2)};
`;

writeFileSync(join(__dirname, 'exercice_lib_snippet.js'), snippet);

// Stats par catégorie
const byCategory = {};
for (const ex of exercises) {
  const cat = ex.muscle || 'Autre';
  byCategory[cat] = (byCategory[cat] || 0) + 1;
}

console.log('\n📊 Répartition par muscle principal :');
Object.entries(byCategory)
  .sort(([,a],[,b]) => b - a)
  .forEach(([cat, count]) => {
    const bar = '█'.repeat(Math.round(count / 10));
    console.log(`   ${cat.padEnd(20)} ${String(count).padStart(4)}  ${bar}`);
  });

const withGif = exercises.filter(e => e.gif_url).length;
console.log(`\n✅ Snippet généré : exercice_lib_snippet.js`);
console.log(`   ${Object.keys(sorted).length} exercices`);
console.log(`   ${withGif}/${exercises.length} avec GIF Firebase`);
console.log('\n📋 Pour intégrer dans app.html :');
console.log('   Cherche "const EXERCICE_LIB" dans app.html');
console.log('   Remplace le bloc par le contenu de exercice_lib_snippet.js');
