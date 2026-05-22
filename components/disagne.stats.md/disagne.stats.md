<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Bodybuilding Stats - Tracker</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#00d1ff", // Cyan accent requested
                        "background-light": "#f8f6f6",
                        "background-dark": "#221610",
                    },
                    fontFamily: {
                        "display": ["Public Sans", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1.5rem", // 24px+ requested
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body { font-family: 'Public Sans', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .active-icon { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
</head>
<body class="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
<!-- Header -->
<header class="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
<button class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h1 class="text-xl font-800 tracking-tight">Tableau de Bord</h1>
<button class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
<span class="material-symbols-outlined">share</span>
</button>
</header>
<main class="px-4 pb-32 space-y-8">
<!-- Weight Evolution Section -->
<section class="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 mt-4">
<div class="flex justify-between items-start mb-6">
<div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Évolution du poids</p>
<div class="flex items-baseline gap-2">
<h2 class="text-4xl font-800">82.5 <span class="text-lg font-medium">kg</span></h2>
<span class="bg-primary/10 text-primary px-2 py-0.5 rounded-lg text-xs font-bold">-2.4%</span>
</div>
</div>
<div class="bg-primary text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
                Actuel
            </div>
</div>
<div class="h-48 w-full relative">
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 400 150">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00d1ff" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#00d1ff" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,120 Q50,110 80,90 T160,70 T240,100 T320,50 T400,40 V150 H0 Z" fill="url(#chartGradient)"></path>
<path d="M0,120 Q50,110 80,90 T160,70 T240,100 T320,50 T400,40" fill="none" stroke="#00d1ff" stroke-linecap="round" stroke-width="4"></path>
<!-- Data Points -->
<circle cx="80" cy="90" fill="#00d1ff" r="5"></circle>
<circle cx="240" cy="100" fill="#00d1ff" r="5"></circle>
<circle cx="400" cy="40" fill="#00d1ff" r="6" stroke="white" stroke-width="2"></circle>
</svg>
</div>
<div class="flex justify-between mt-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
<span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span>
</div>
</section>
<!-- Training Calendar & Recent Sessions -->
<section class="space-y-4">
<div class="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
<div class="flex items-center justify-between mb-6">
<h3 class="text-xl font-800">Calendrier</h3>
<div class="flex gap-2">
<button class="p-1"><span class="material-symbols-outlined">chevron_left</span></button>
<span class="font-bold">Juin 2024</span>
<button class="p-1"><span class="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
<div class="grid grid-cols-7 text-center gap-y-4">
<div class="text-slate-400 text-xs font-bold">L</div>
<div class="text-slate-400 text-xs font-bold">M</div>
<div class="text-slate-400 text-xs font-bold">M</div>
<div class="text-slate-400 text-xs font-bold">J</div>
<div class="text-slate-400 text-xs font-bold">V</div>
<div class="text-slate-400 text-xs font-bold">S</div>
<div class="text-slate-400 text-xs font-bold">D</div>
<!-- Calendar Days Example -->
<div class="py-2 text-slate-300">27</div><div class="py-2 text-slate-300">28</div><div class="py-2 text-slate-300">29</div><div class="py-2 text-slate-300">30</div><div class="py-2 text-slate-300">31</div>
<div class="py-2 font-bold relative">1<div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div></div>
<div class="py-2 font-bold">2</div>
<div class="py-2 font-bold relative">3<div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div></div>
<div class="py-2 font-bold bg-primary/20 text-primary rounded-full">4</div>
<div class="py-2 font-bold">5</div>
<div class="py-2 font-bold relative">6<div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div></div>
<div class="py-2 font-bold">7</div>
<div class="py-2 font-bold">8</div>
<div class="py-2 font-bold">9</div>
</div>
</div>
<div class="space-y-3">
<h4 class="text-lg font-800 px-2">Séances Récentes</h4>
<div class="space-y-3">
<div class="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between shadow-sm border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
<span class="material-symbols-outlined">fitness_center</span>
</div>
<div>
<p class="font-bold">Push Day (A)</p>
<p class="text-xs text-slate-500">Hier • 65 min</p>
</div>
</div>
<span class="material-symbols-outlined text-green-500 active-icon">check_circle</span>
</div>
<div class="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between shadow-sm border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
<span class="material-symbols-outlined">reorder</span>
</div>
<div>
<p class="font-bold">Pull Day (B)</p>
<p class="text-xs text-slate-500">3 juin • 72 min</p>
</div>
</div>
<span class="material-symbols-outlined text-green-500 active-icon">check_circle</span>
</div>
</div>
</div>
</section>
<!-- Volume Hebdo / Muscle Progress Bars -->
<section class="grid grid-cols-1 gap-4">
<div class="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
<div class="flex items-center justify-between mb-6">
<h3 class="text-lg font-800">Volume Hebdo. / Muscle</h3>
<span class="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg uppercase tracking-wider">Objectif Hebdo</span>
</div>
<div class="space-y-5">
<!-- Pectoraux -->
<div class="space-y-1.5">
<div class="flex justify-between items-end">
<span class="text-sm font-800 text-slate-700 dark:text-slate-200 uppercase tracking-tight">Pectoraux</span>
<span class="text-xs font-bold text-slate-500 dark:text-slate-400">12 / 15 séries</span>
</div>
<div class="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-rose-500 rounded-full" style="width: 80%"></div>
</div>
</div>
<!-- Dos -->
<div class="space-y-1.5">
<div class="flex justify-between items-end">
<span class="text-sm font-800 text-slate-700 dark:text-slate-200 uppercase tracking-tight">Dos</span>
<span class="text-xs font-bold text-slate-500 dark:text-slate-400">14 / 16 séries</span>
</div>
<div class="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-emerald-500 rounded-full" style="width: 87.5%"></div>
</div>
</div>
<!-- Jambes -->
<div class="space-y-1.5">
<div class="flex justify-between items-end">
<span class="text-sm font-800 text-slate-700 dark:text-slate-200 uppercase tracking-tight">Jambes</span>
<span class="text-xs font-bold text-slate-500 dark:text-slate-400">18 / 18 séries</span>
</div>
<div class="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-blue-500 rounded-full shadow-sm" style="width: 100%"></div>
</div>
</div>
<!-- Bras -->
<div class="space-y-1.5">
<div class="flex justify-between items-end">
<span class="text-sm font-800 text-slate-700 dark:text-slate-200 uppercase tracking-tight">Bras</span>
<span class="text-xs font-bold text-slate-500 dark:text-slate-400">8 / 12 séries</span>
</div>
<div class="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-amber-500 rounded-full" style="width: 66%"></div>
</div>
</div>
<!-- Épaules -->
<div class="space-y-1.5">
<div class="flex justify-between items-end">
<span class="text-sm font-800 text-slate-700 dark:text-slate-200 uppercase tracking-tight">Épaules</span>
<span class="text-xs font-bold text-slate-500 dark:text-slate-400">6 / 10 séries</span>
</div>
<div class="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-purple-500 rounded-full" style="width: 60%"></div>
</div>
</div>
</div>
</div>
<!-- Intensity Trend (kept for value) -->
<div class="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
<h3 class="text-lg font-800 mb-2">Durée vs Intensité</h3>
<p class="text-xs text-slate-500 mb-6">Tendance des 4 dernières semaines</p>
<div class="relative h-32 flex items-center justify-center">
<svg class="w-full h-full" viewbox="0 0 200 100">
<path d="M10,80 L50,60 L90,70 L130,40 L170,20" fill="none" stroke="#00d1ff" stroke-linecap="round" stroke-width="3"></path>
<path d="M10,90 L50,85 L90,75 L130,80 L170,65" fill="none" stroke="#cbd5e1" stroke-dasharray="4" stroke-width="2"></path>
</svg>
<div class="absolute bottom-0 left-0 flex gap-4">
<div class="flex items-center gap-1">
<div class="w-2 h-2 rounded-full bg-primary"></div>
<span class="text-[10px] font-bold">Intensité</span>
</div>
<div class="flex items-center gap-1">
<div class="w-2 h-2 rounded-full bg-slate-300"></div>
<span class="text-[10px] font-bold">Durée</span>
</div>
</div>
</div>
</div>
</section>
<!-- Personal Records -->
<section class="space-y-4">
<h3 class="text-xl font-800 px-2">Records Personnels</h3>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
<!-- Bench Press -->
<div class="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Athlete performing a heavy bench press" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkSIuW8BE7kveYM4RNr4kE2Gag4ZwA9uUs3Q21w0VgbzsxFP83mrkcGQ_kXHFl8nhhg58CEgcIsQ8HUfWYEd7z8TFY-q5FK-9g2-ZJjqVS_LipKVBxaaAKyQ8nCNGXyPC0QGiIErKmEYzSDhEbqf0hBCHNdvqR7wP9B_cmhDW-7zBFx9vRkOH7olju2SzC082wDh72yp1HrEJjQhmiGK_js1nBkcRND_Ji3dCdBegtbFGzCP-y1YFKGXeij9sutku7NwX6faASzhjP"/>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div class="absolute bottom-4 left-4 text-white">
<p class="text-xs font-bold uppercase text-primary mb-1">Bench Press</p>
<h4 class="text-2xl font-800 tracking-tighter">120 KG</h4>
</div>
</div>
<!-- Squat -->
<div class="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Person performing a back squat with barbell" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWfPNiwgHqIF81CZuDr_Rqrr39ECcTZT0uWqUzoPjaFbTa0o-G2uZV_OEjmgWl6Ggq4OKDou_mfbRKrIDpGM-7sxbymodjbEcfK6LATF0UyJF4IxQpZKEvsVmmhjntT9un7bkT7-h2UBj_HeOr6dG1UaFpQkqXSSdfA0z-TM3HYix49XfMgrXHYEQ-Seo6cUAAuHlV9cbyOZxH28x6IaxAYsSK7T3kae27opzh_cbMGb7JjXyKhZdS0hkaqQESvrY6rAeidMHVe4GV"/>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div class="absolute bottom-4 left-4 text-white">
<p class="text-xs font-bold uppercase text-primary mb-1">Squat</p>
<h4 class="text-2xl font-800 tracking-tighter">165 KG</h4>
</div>
</div>
<!-- Deadlift -->
<div class="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Lifter deadlifting heavy weight in gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlaFEVQ07-BqPVy08jw1HZYiyDHyc6e0ps0o9jYHl9i7zgg69cLBybKJmRJgrvKIRRD9og7CTGnURFJNynw3JsNZTV_whJBGbDiNAU4XsegHZMrAk60Y-ezz_Y-GwLancGDo-8spIU3Dn9usVF4TbQGSt8mi750YaM49OBeYbNR_znKXJSJoaRQtI17zaoZMjVgEw3712NCiHIBjziPAmZdHPGy9AxbiqUyPK7B5S-5DfsH1mGm62j270dINnDOJxykiv4_Nj7Q43j"/>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div class="absolute bottom-4 left-4 text-white">
<p class="text-xs font-bold uppercase text-primary mb-1">Deadlift</p>
<h4 class="text-2xl font-800 tracking-tighter">210 KG</h4>
</div>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 pb-8 pt-3 px-6 z-50">
<div class="max-w-md mx-auto flex justify-between items-center">
<a class="flex flex-col items-center gap-1 text-slate-400" href="#">
<span class="material-symbols-outlined">home</span>
<span class="text-[10px] font-bold uppercase">Accueil</span>
</a>
<a class="flex flex-col items-center gap-1 text-slate-400" href="#">
<span class="material-symbols-outlined">assignment</span>
<span class="text-[10px] font-bold uppercase">Programmes</span>
</a>
<a class="flex flex-col items-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined active-icon">leaderboard</span>
<span class="text-[10px] font-bold uppercase">Stats</span>
</a>
<a class="flex flex-col items-center gap-1 text-slate-400" href="#">
<span class="material-symbols-outlined">nutrition</span>
<span class="text-[10px] font-bold uppercase">Nutrition</span>
</a>
<a class="flex flex-col items-center gap-1 text-slate-400" href="#">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-bold uppercase">Profil</span>
</a>
</div>
</nav>
</body></html>