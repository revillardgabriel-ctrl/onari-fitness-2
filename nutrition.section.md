
Image 2.html
<!DOCTYPE html>
<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Nutrition Optimisée avec Balance Claire</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#000000",
                        "accent": "#00e5ff",
                        "background-light": "#f8fafc",
                        "background-dark": "#0a0a0a",
                        "soft-blue": "#3b82f6",
                        "soft-orange": "#f97316",
                        "soft-yellow": "#eab308",
                        "track-bg": "#e2e8f0"
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    boxShadow: {
                        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                        'card': '0 2px 10px rgba(0, 0, 0, 0.02)'
                    }
                },
            },
        }
    </script>
<style>
        body { min-height: max(884px, 100dvh); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom, 16px); }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden pb-24">
<header class="flex items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 pb-2 justify-between sticky top-0 z-10 border-b border-slate-100 dark:border-slate-800">
<div class="flex items-center flex-1 justify-between max-w-md mx-auto w-full">
<button class="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
<span class="material-symbols-outlined text-2xl">chevron_left</span>
</button>
<div class="flex flex-col items-center">
<h2 class="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">Mercredi 15 Octobre</h2>
</div>
<button class="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
<span class="material-symbols-outlined text-2xl">chevron_right</span>
</button>
</div>
</header>
<main class="flex-1 max-w-md mx-auto w-full flex flex-col gap-6 p-4">
<section class="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-card flex flex-col items-center gap-8 border border-slate-50 dark:border-slate-800">
<div class="relative w-[220px] h-[220px] flex items-center justify-center">
<svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle class="text-track-bg dark:text-slate-800" cx="50" cy="50" fill="none" r="44" stroke="currentColor" stroke-width="8"></circle>
<circle cx="50" cy="50" fill="none" r="44" stroke="#00e5ff" stroke-dasharray="276.46" stroke-dashoffset="63.58" stroke-linecap="round" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center text-center">
<span class="text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white leading-none mb-1">1850</span>
<span class="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">/ 2400 kcal</span>
<span class="text-[13px] text-[#00e5ff] font-bold">550 restantes</span>
</div>
</div>
<div class="w-full flex flex-col gap-5 px-2">
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<span class="text-sm font-semibold text-[#334155] dark:text-slate-300">Protéines (60%)</span>
<span class="text-sm font-bold text-[#3b82f6]">150g / 180g</span>
</div>
<div class="h-2 w-full bg-track-bg dark:bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-[#3b82f6] rounded-full" style="width: 83%"></div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<span class="text-sm font-semibold text-[#334155] dark:text-slate-300">Glucides (25%)</span>
<span class="text-sm font-bold text-[#f97316]">120g / 240g</span>
</div>
<div class="h-2 w-full bg-track-bg dark:bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-[#f97316] rounded-full" style="width: 50%"></div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<span class="text-sm font-semibold text-[#334155] dark:text-slate-300">Lipides (15%)</span>
<span class="text-sm font-bold text-[#eab308]">45g / 70g</span>
</div>
<div class="h-2 w-full bg-track-bg dark:bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-[#eab308] rounded-full" style="width: 64%"></div>
</div>
</div>
</div>
</section>
<section class="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-soft border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
<div class="flex justify-between items-center px-1">
<h3 class="font-bold text-base text-slate-900 dark:text-slate-100 tracking-tight">Balance Énergétique</h3>
<span class="material-symbols-outlined text-slate-400 text-sm">sync</span>
</div>
<div class="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4">
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 font-semibold mb-1">Consommé</span>
<span class="font-extrabold text-xl text-slate-900 dark:text-white leading-none">1850</span>
</div>
<span class="text-slate-400 font-bold text-xl">-</span>
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 font-semibold mb-1">Brûlé</span>
<span class="font-extrabold text-xl text-slate-900 dark:text-white leading-none">450</span>
</div>
<span class="text-slate-400 font-bold text-xl">=</span>
<div class="flex flex-col items-center">
<span class="text-xs text-slate-500 font-semibold mb-1">Net</span>
<span class="font-extrabold text-xl text-[#00e5ff] dark:text-[#00e5ff] leading-none">1400</span>
</div>
</div>
</section>
<div class="bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100/50 dark:border-emerald-800/30 rounded-2xl p-4 flex gap-4 items-start shadow-soft">
<div class="p-2 bg-emerald-100 dark:bg-emerald-800/50 rounded-full text-emerald-600 dark:text-emerald-400 shrink-0">
<span class="material-symbols-outlined text-xl">lightbulb</span>
</div>
<div>
<h4 class="text-sm font-bold text-emerald-900 dark:text-emerald-100 mb-1">Conseil du Jour</h4>
<p class="text-xs text-emerald-700/80 dark:text-emerald-300/80 leading-relaxed">Tu manques de protéines aujourd'hui. Pense à en ajouter à ton prochain repas pour optimiser ta récupération musculaire.</p>
</div>
</div>
<section class="flex flex-col gap-3">
<div class="flex justify-between items-end px-1">
<h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">Prochain Repas</h3>
<span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Déjeuner</span>
</div>
<div class="relative w-full h-64 rounded-3xl overflow-hidden shadow-soft group cursor-pointer">
<img alt="Salade poulet" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS0OOBCfkYoCsAJcBvpSNv52gqFbSMDg-u5zoRiWzOae9x2vebGLxbkXDm2Jc1_IkKjMRkFi4SFp12gbTayyQOUZ7RTztkiFlSK4vMWTSdn-C1IUcIlFN8eOb76zkrWnWYALHorqUQMcomCJ3fmRligWKoneczx6LkI9PSG0W8rjvPkz-IIlBp6WhoWlThfa35tTwepr3dHtW6256VRMmaFhbyNXvxMr13GoxAqP6h9NC6ofPbczthEzZMVV7dF9-nGXlalStp52oe"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div class="absolute inset-0 p-5 flex flex-col justify-between">
<div class="flex justify-between items-start">
<div class="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-wider">
                        OBJECTIF: 750 KCAL
                    </div>
<button class="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition">
<span class="material-symbols-outlined">edit</span>
</button>
</div>
<div class="flex flex-col gap-2">
<h4 class="text-white text-2xl font-bold leading-tight">Salade Quinoa &amp; Poulet Grillé</h4>
<div class="flex gap-4 text-white/80 text-xs font-medium">
<span class="flex items-center gap-1"><div class="w-2 h-2 rounded-full bg-soft-blue"></div> 50g P</span>
<span class="flex items-center gap-1"><div class="w-2 h-2 rounded-full bg-soft-orange"></div> 60g G</span>
<span class="flex items-center gap-1"><div class="w-2 h-2 rounded-full bg-soft-yellow"></div> 20g L</span>
</div>
</div>
</div>
</div>
</section>
<section class="flex flex-col gap-3">
<div class="flex justify-between items-end px-1">
<h3 class="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">Hydratation</h3>
<span class="text-xs font-semibold text-blue-500">1L / 2L</span>
</div>
<div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
<div class="flex-none bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl flex items-center justify-center border border-blue-100 dark:border-blue-800/30">
<span class="material-symbols-outlined text-blue-500 text-3xl" style="font-variation-settings: 'FILL' 1;">water_drop</span>
</div>
<div class="flex-none bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl flex items-center justify-center border border-blue-100 dark:border-blue-800/30">
<span class="material-symbols-outlined text-blue-500 text-3xl" style="font-variation-settings: 'FILL' 1;">water_drop</span>
</div>
<div class="flex-none bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl flex items-center justify-center border border-blue-100 dark:border-blue-800/30">
<span class="material-symbols-outlined text-blue-500 text-3xl" style="font-variation-settings: 'FILL' 1;">water_drop</span>
</div>
<div class="flex-none bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl flex items-center justify-center border border-blue-100 dark:border-blue-800/30">
<span class="material-symbols-outlined text-blue-500 text-3xl" style="font-variation-settings: 'FILL' 1;">water_drop</span>
</div>
<div class="flex-none bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700/50">
<span class="material-symbols-outlined text-slate-300 dark:text-slate-600 text-3xl">water_drop</span>
</div>
<div class="flex-none bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700/50">
<span class="material-symbols-outlined text-slate-300 dark:text-slate-600 text-3xl">water_drop</span>
</div>
<button class="flex-none bg-white dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-center border border-dashed border-blue-200 dark:border-blue-700 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10">
<span class="material-symbols-outlined text-3xl">add</span>
</button>
</div>
</section>
<section class="flex flex-col gap-3">
<h3 class="text-base font-bold text-slate-900 dark:text-slate-100 px-1 tracking-tight">Ajout Rapide</h3>
<div class="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
<button class="relative min-w-[100px] bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:border-slate-300 transition-colors">
<div class="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
<img alt="Banane" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxTzi6tJ7XTIzjZ3zthyISG00NuUftkX1wlVEUMzCJnfPWttdG4bMePVSSaXLFZZ0cC22ShbSdyyIBcFUcnpFCeLpmUBkLCVt2eJtkJRUV1mi8FzJJp-qPTld2o8HLT3C5wR72wr1HNq3q0bQAirdFy0fwnfuEuDcE0ZRWlgdOoMN7MBa9JOa2BnkQsoTQJy0YTfOyoPfUkgOzC0xeE2MjDypslESEKd7neYg1GM0ID7MrR-zwBm8vvkOFqo0rw1GBx_mvZk2HQddE"/>
</div>
<div class="flex flex-col items-center">
<span class="text-sm font-semibold text-slate-800 dark:text-slate-200">Banane</span>
<span class="text-xs text-slate-500">105 kcal</span>
</div>
<div class="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
<span class="material-symbols-outlined text-sm">add</span>
</div>
</button>
<button class="relative min-w-[100px] bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:border-slate-300 transition-colors">
<div class="w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
<span class="material-symbols-outlined text-slate-400 text-2xl">blender</span>
</div>
<div class="flex flex-col items-center">
<span class="text-sm font-semibold text-slate-800 dark:text-slate-200">Whey</span>
<span class="text-xs text-slate-500">110 kcal</span>
</div>
<div class="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
<span class="material-symbols-outlined text-sm">add</span>
</div>
</button>
<button class="relative min-w-[100px] bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:border-slate-300 transition-colors">
<div class="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
<img alt="Riz" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBc5FUVZB4LqGsxmtjrRhUU1y483X28nZJxBMAIL7ieWsQ7PdcgbpBEXSDuAs9Um2vLOEPgeOhfFVYzbhsYVOzmZcZKUvoXTb5visMdAAxMLx44O9lcAW12b6rVaSR3A75uokNRiZqDIje9TwJ1IQufWOGbdincGv_DgQTbsOSBdV1W8jUoZbtnDGADPo0bFKLfQhOm1mk0fqGJVcgwat_sJ-Izmm1X1fonPKDx93WMRKgLUT-dy1Pkx9hgnNaeGDSbNsvxNm234cV"/>
</div>
<div class="flex flex-col items-center">
<span class="text-sm font-semibold text-slate-800 dark:text-slate-200">Riz 100g</span>
<span class="text-xs text-slate-500">130 kcal</span>
</div>
<div class="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
<span class="material-symbols-outlined text-sm">add</span>
</div>
</button>
</div>
</section>
<section class="flex flex-col gap-3 mb-6">
<h3 class="text-base font-bold text-slate-900 dark:text-slate-100 px-1 tracking-tight">Compléments</h3>
<div class="grid grid-cols-2 gap-3">
<label class="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 cursor-pointer group hover:border-slate-300">
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 transition-colors">Créatine 5g</span>
<div class="relative flex items-center justify-center w-6 h-6">
<input checked="" class="peer appearance-none w-6 h-6 border-2 border-slate-300 rounded-lg checked:bg-slate-900 checked:border-slate-900 transition-colors cursor-pointer" type="checkbox"/>
<span class="material-symbols-outlined text-white absolute text-sm opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
</div>
</label>
<label class="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 cursor-pointer group hover:border-slate-300">
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 transition-colors">Oméga-3</span>
<div class="relative flex items-center justify-center w-6 h-6">
<input checked="" class="peer appearance-none w-6 h-6 border-2 border-slate-300 rounded-lg checked:bg-slate-900 checked:border-slate-900 transition-colors cursor-pointer" type="checkbox"/>
<span class="material-symbols-outlined text-white absolute text-sm opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
</div>
</label>
<label class="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800 cursor-pointer group hover:border-slate-300 col-span-2">
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 transition-colors">Vitamines &amp; Minéraux</span>
<div class="relative flex items-center justify-center w-6 h-6">
<input class="peer appearance-none w-6 h-6 border-2 border-slate-300 rounded-lg checked:bg-slate-900 checked:border-slate-900 transition-colors cursor-pointer" type="checkbox"/>
<span class="material-symbols-outlined text-white absolute text-sm opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
</div>
</label>
</div>
</section>
</main>
<button class="fixed bottom-24 right-6 w-14 h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:scale-105 transition-transform active:scale-95 z-20">
<span class="material-symbols-outlined text-3xl">add</span>
</button>
<nav class="fixed bottom-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 px-2 pb-safe pt-2 z-30">
<div class="flex justify-between max-w-md mx-auto">
<a class="flex flex-col items-center justify-center p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex-1 gap-1" href="#">
<span class="material-symbols-outlined text-2xl">home</span>
<span class="text-[10px] font-medium tracking-wide">Résumé</span>
</a>
<a class="flex flex-col items-center justify-center p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex-1 gap-1" href="#">
<span class="material-symbols-outlined text-2xl">calendar_month</span>
<span class="text-[10px] font-medium tracking-wide">Programme</span>
</a>
<a class="flex flex-col items-center justify-center p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex-1 gap-1" href="#">
<span class="material-symbols-outlined text-2xl">monitoring</span>
<span class="text-[10px] font-medium tracking-wide">Prog</span>
</a>
<a class="flex flex-col items-center justify-center p-2 text-slate-900 dark:text-white flex-1 gap-1 relative" href="#">
<div class="absolute -top-1 w-1 h-1 bg-slate-900 dark:bg-white rounded-full"></div>
<span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">restaurant_menu</span>
<span class="text-[10px] font-bold tracking-wide">Nutrition</span>
</a>
<a class="flex flex-col items-center justify-center p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex-1 gap-1" href="#">
<span class="material-symbols-outlined text-2xl">person</span>
<span class="text-[10px] font-medium tracking-wide">Profil</span>
</a>
</div>
</nav>
</body></html>