/**
 * Fetch ExerciseDB → sauvegarde locale uniquement (sans Firebase)
 * Usage: node fetch-only.js
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const RAPID_API_KEY = 'dea80da213mshfb4a4be34a09306p119be7jsnb61c24040b48';
const API_HOST      = 'exercisedb.p.rapidapi.com';
const PAGE_LIMIT    = 100;
const DELAY_MS      = 1200; // prudent pour le plan basic

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchPage(offset) {
  const { default: fetch } = await import('node-fetch');
  const res = await fetch(
    `https://${API_HOST}/exercises?limit=${PAGE_LIMIT}&offset=${offset}`,
    { headers: { 'X-RapidAPI-Key': RAPID_API_KEY, 'X-RapidAPI-Host': API_HOST } }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

async function main() {
  console.log('🏋️  Fetch ExerciseDB — mode local (sans Firebase)\n');

  let all = [];
  let offset = 0;
  let page = 1;

  while (true) {
    process.stdout.write(`Page ${page} (offset ${offset})... `);
    try {
      const data = await fetchPage(offset);
      if (!Array.isArray(data) || data.length === 0) {
        console.log('terminé.');
        break;
      }
      all = all.concat(data);
      console.log(`✅ ${data.length} exercices (total: ${all.length})`);
      if (data.length < PAGE_LIMIT) break;
      offset += PAGE_LIMIT;
      page++;
      await sleep(DELAY_MS);
    } catch (e) {
      console.log(`❌ ${e.message}`);
      if (e.message.includes('429')) {
        console.log('⚠️  Rate limit atteint — attente 60s...');
        await sleep(60000);
        continue;
      }
      break;
    }
  }

  console.log(`\n📦 ${all.length} exercices récupérés`);
  writeFileSync(join(__dirname, 'exercices_raw.json'), JSON.stringify(all, null, 2));
  console.log('💾 Sauvegardé : exercices_raw.json');

  // Stats rapides
  const byPart = {};
  for (const ex of all) byPart[ex.bodyPart] = (byPart[ex.bodyPart] || 0) + 1;
  console.log('\n📊 Par muscle :');
  Object.entries(byPart).sort(([,a],[,b])=>b-a).forEach(([k,v]) => console.log(`   ${k.padEnd(20)} ${v}`));

  const hasGif = all.filter(e => e.gifUrl).length;
  console.log(`\n🖼️  Avec GIF : ${hasGif}/${all.length}`);
}

main().catch(e => { console.error('💥', e.message); process.exit(1); });
