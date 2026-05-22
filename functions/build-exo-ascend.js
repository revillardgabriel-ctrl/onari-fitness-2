/**
 * Build EXO_ASCEND depuis ascend_detailed.json
 * Fait correspondre les noms anglais API ↔ noms français EXERCICE_LIB
 * Usage: node build-exo-ascend.js
 */

import { readFileSync, writeFileSync } from 'fs';

const detailed = JSON.parse(readFileSync('ascend_detailed.json', 'utf8'));

// ── Dictionnaire de traduction termes clés FR→EN ──────────────
const FR_TO_EN = {
  // Mouvements
  'développé': 'press', 'couché': 'bench', 'incliné': 'incline', 'décliné': 'decline',
  'militaire': 'military', 'arnold': 'arnold', 'écarté': 'fly', 'écartés': 'fly',
  'tirage': 'pulldown', 'traction': 'pull', 'tractions': 'pull-up', 'curl': 'curl',
  'extension': 'extension', 'élévation': 'raise', 'élévations': 'raise',
  'squat': 'squat', 'fente': 'lunge', 'fentes': 'lunge', 'soulevé': 'deadlift',
  'hip thrust': 'hip thrust', 'crunch': 'crunch', 'planche': 'plank',
  'gainage': 'plank', 'dips': 'dip', 'pompes': 'push-up', 'rowing': 'row',
  'shrug': 'shrug', 'face pull': 'face pull', 'leg press': 'leg press',
  'leg curl': 'leg curl', 'leg extension': 'leg extension', 'hip': 'hip',
  'pull over': 'pullover', 'pullover': 'pullover', 'russian': 'russian',
  'burpee': 'burpee', 'kettlebell': 'kettlebell', 'swing': 'swing',
  'turkish': 'turkish', 'dead bug': 'dead bug', 'bird dog': 'bird dog',
  'superman': 'superman', 'hollow': 'hollow', 'dragon flag': 'dragon flag',
  // Équipements
  'barre': 'barbell', 'haltères': 'dumbbell', 'haltère': 'dumbbell',
  'câble': 'cable', 'machine': 'machine', 'poulie': 'cable', 'kettlebell': 'kettlebell',
  'smith': 'smith', 'poids du corps': 'bodyweight', 'élastique': 'band',
  'bandes': 'band', 'swiss ball': 'stability ball',
  // Muscles
  'pectoraux': 'chest', 'dos': 'back', 'épaules': 'shoulder', 'biceps': 'bicep',
  'triceps': 'tricep', 'quadriceps': 'quad', 'ischio': 'hamstring', 'fessiers': 'glute',
  'mollets': 'calf', 'abdominaux': 'abs', 'avant-bras': 'forearm',
  // Positions/variantes
  'unilatéral': 'unilateral', 'bilatéral': 'bilateral', 'alterné': 'alternating',
  'alternés': 'alternating', 'assis': 'seated', 'debout': 'standing',
  'couché': 'lying', 'supiné': 'supinated', 'prono': 'pronated',
  'marteau': 'hammer', 'prise serrée': 'close grip', 'prise large': 'wide grip',
  'neutre': 'neutral', 'inversé': 'reverse', 'roumain': 'romanian',
};

function normalize(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // enlève accents
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

function frToEnTokens(frName) {
  let en = normalize(frName);
  for (const [fr, enWord] of Object.entries(FR_TO_EN)) {
    en = en.replace(new RegExp('\\b' + normalize(fr) + '\\b', 'g'), enWord);
  }
  return en.split(' ').filter(Boolean);
}

function scoreMatch(frName, apiName) {
  const frTokens = new Set(frToEnTokens(frName));
  const apiTokens = new Set(normalize(apiName).split(' '));
  let score = 0;
  for (const t of frTokens) {
    if (t.length < 3) continue;
    for (const a of apiTokens) {
      if (a === t) score += 3;
      else if (a.includes(t) || t.includes(a)) score += 1;
    }
  }
  return score;
}

// ── Build index API par nom normalisé ──────────────────────────
const apiIndex = new Map();
for (const ex of detailed) {
  apiIndex.set(normalize(ex.name), ex);
}

// ── Charge EXERCICE_LIB depuis app.html ────────────────────────
const appHtml = readFileSync('../app.html', 'utf8');
const libMatch = appHtml.match(/const EXERCICE_LIB = (\[[\s\S]*?\n\];)/);
if (!libMatch) { console.error('EXERCICE_LIB non trouvé'); process.exit(1); }

// Extrait tous les noms d'exercices
const exoNames = [];
const exoGroupRe = /\{ g:'([^']+)'.*?exos:\[([\s\S]*?)\]\}/g;
let m;
while ((m = exoGroupRe.exec(libMatch[1])) !== null) {
  const group = m[1];
  const names = m[2].match(/'([^']+)'/g)?.map(n => n.slice(1,-1)) || [];
  names.forEach(n => exoNames.push({ nom: n, group }));
}
console.log(`📚 ${exoNames.length} exercices dans EXERCICE_LIB`);
console.log(`📦 ${detailed.length} exercices dans l'API\n`);

// ── Matching ───────────────────────────────────────────────────
const MANUAL_MAP = {
  'Développé couché barre':          'Barbell Bench Press',
  'Développé couché haltères':       'Dumbbell Bench Press',
  'Développé incliné barre':         'Incline Barbell Bench Press',
  'Développé incliné haltères':      'Incline Dumbbell Press',
  'Développé décliné barre':         'Decline Bench Press',
  'Développé militaire barre':       'Barbell Overhead Press',
  'Développé militaire haltères':    'Dumbbell Shoulder Press',
  'Arnold press':                    'Arnold Press',
  'Dips parallèles':                 'Triceps Dip',
  'Pompes':                          'Push-Up',
  'Squat barre':                     'Barbell Squat',
  'Squat haltères':                  'Dumbbell Squat',
  'Squat gobelet':                   'Goblet Squat',
  'Fentes haltères':                 'Dumbbell Lunge',
  'Fentes marchées':                 'Walking Lunge',
  'Hip thrust barre':                'Barbell Hip Thrust',
  'Soulevé de terre barre':          'Deadlift',
  'Soulevé de terre roumain':        'Romanian Deadlift',
  'Tractions':                       'Pull-Up',
  'Tractions prise serrée':          'Close Grip Pull-Up',
  'Curl barre':                      'Barbell Curl',
  'Curl haltères':                   'Dumbbell Curl',
  'Curl marteau':                    'Hammer Curl',
  'Extensions corde poulie':         'Tricep Rope Pushdown',
  'Extensions poulie haute droite':  'Tricep Pushdown',
  'Crunchs':                         'Crunch',
  'Gainage planche':                 'Plank',
  'Russian twists lesté':            'Russian Twist',
  'Élévations latérales haltères':   'Dumbbell Lateral Raise',
  'Face pulls':                      'Face Pull',
  'Shrugs barre':                    'Barbell Shrug',
  'Shrugs haltères':                 'Dumbbell Shrug',
  'Leg press':                       'Leg Press',
  'Leg curl couché':                 'Lying Leg Curl',
  'Leg extension':                   'Leg Extension',
  'Hip thrust poids corps':          'Hip Thrust',
  'Toes to bar':                     'Toes to Bar',
  'Kettlebell swing':                'Kettlebell Swing',
  'Turkish get-up':                  'Turkish Get-Up',
};

const result = {};
let matched = 0, auto = 0, missed = 0;

for (const { nom } of exoNames) {
  // 1. Map manuel
  if (MANUAL_MAP[nom]) {
    const apiEx = detailed.find(e => normalize(e.name) === normalize(MANUAL_MAP[nom]))
                || detailed.find(e => e.name.toLowerCase().includes(MANUAL_MAP[nom].toLowerCase()));
    if (apiEx) {
      result[nom] = { videoUrl: apiEx.videoUrl || null, img720: apiEx.imageUrls?.['720p'] || apiEx.imageUrl || null, tips: apiEx.exerciseTips?.slice(0,3) || [], variations: apiEx.variations?.slice(0,3) || [] };
      matched++;
      continue;
    }
  }

  // 2. Match exact normalisé
  const normFr = normalize(nom);
  if (apiIndex.has(normFr)) {
    const apiEx = apiIndex.get(normFr);
    result[nom] = { videoUrl: apiEx.videoUrl || null, img720: apiEx.imageUrls?.['720p'] || apiEx.imageUrl || null, tips: apiEx.exerciseTips?.slice(0,3) || [], variations: apiEx.variations?.slice(0,3) || [] };
    auto++;
    continue;
  }

  // 3. Score fuzzy
  let best = null, bestScore = 0;
  for (const apiEx of detailed) {
    const s = scoreMatch(nom, apiEx.name);
    if (s > bestScore) { bestScore = s; best = apiEx; }
  }
  if (bestScore >= 4 && best) {
    result[nom] = { videoUrl: best.videoUrl || null, img720: best.imageUrls?.['720p'] || best.imageUrl || null, tips: best.exerciseTips?.slice(0,3) || [], variations: best.variations?.slice(0,3) || [] };
    auto++;
  } else {
    missed++;
  }
}

console.log(`✅ Correspondances manuelles : ${matched}`);
console.log(`🤖 Correspondances automatiques : ${auto}`);
console.log(`❌ Sans correspondance : ${missed}`);
console.log(`📊 Taux de couverture : ${Math.round((matched+auto)*100/exoNames.length)}%`);

// Filtre : garde seulement ceux avec vidéo ou image
const withMedia = Object.fromEntries(Object.entries(result).filter(([,v]) => v.videoUrl || v.img720));
console.log(`\n🎬 Avec vidéo ou image : ${Object.keys(withMedia).length}/${Object.keys(result).length}`);

// Génère le snippet JS
const snippet = `/* ── Médias AscendAPI — Généré automatiquement le ${new Date().toLocaleDateString('fr-FR')} ── */
const EXO_ASCEND = ${JSON.stringify(withMedia, null, 2)};`;

writeFileSync('exo_ascend_snippet.js', snippet);
writeFileSync('exo_ascend_full.json', JSON.stringify(result, null, 2));
console.log('\n💾 exo_ascend_snippet.js prêt à injecter dans app.html');
