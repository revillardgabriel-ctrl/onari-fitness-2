!DOCTYPE html>

<html lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Entraînement - Tableau de Bord</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: "#84cc16",
                        "background-light": "#ffffff",
                        "surface-light": "#ffffff",
                        "surface-hover-light": "#f3f4f6",
                        "border-light": "#f3f4f6",
                        "text-light": "#000000",
                        "text-muted-light": "#6b7280",
                        "accent-blue": "#3b82f6",
                        "accent-orange": "#f97316",
                        "accent-red": "#ef4444",
                        "accent-cyan": "#06b6d4",
                        "accent-green": "#22c55e",
                        "dark-overlay": "rgba(0, 0, 0, 0.6)"
                    },
                    fontFamily: {
                        display: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "1rem",
                        'xl': '1.5rem',
                        '2xl': '2rem',
                    },
                },
            },
        };
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
            min-height: 100dvh;
            background-color: #ffffff;
            -webkit-tap-highlight-color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .pb-safe {
            padding-bottom: env(safe-area-inset-bottom, 1rem);
        }
        .glow-cyan {
            box-shadow: 0 0 15px rgba(6, 182, 212, 0.6);
        }
        .glow-green {
            box-shadow: 0 0 15px rgba(132, 204, 22, 0.6);
        }
        .progress-ring__circle {
            transition: stroke-dashoffset 0.35s;
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
        }
    </style>
</head>
<body class="text-text-light min-h-screen pb-32 bg-white">
<main class="max-w-md mx-auto p-4 space-y-8">
<!-- Header -->
<header class="space-y-1 pt-2 flex items-center justify-between">
<div>
<h1 class="text-3xl font-black tracking-tight text-black">Entraînement</h1>
<p class="text-sm font-semibold text-gray-500">Vendredi 6 Mars</p>
</div>
<button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black">
<span class="material-icons">history</span>
</button>
</header>
<!-- Weekly Summary -->
<section class="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="relative w-16 h-16">
<svg class="w-16 h-16" viewbox="0 0 100 100">
<circle class="text-gray-200 stroke-current" cx="50" cy="50" fill="transparent" r="40" stroke-width="8"></circle>
<circle class="text-primary stroke-current progress-ring__circle" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="251.2" stroke-dashoffset="100.48" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex items-center justify-center flex-col">
<span class="text-sm font-black text-black">3/5</span>
</div>
</div>
<div>
<h3 class="font-bold text-black text-sm">Séances Hebdo</h3>
<p class="text-xs font-medium text-gray-500">Objectif: 5 séances</p>
</div>
</div>
<div class="bg-black text-primary px-3 py-1.5 rounded-lg flex items-center gap-1.5">
<span class="material-icons text-sm">local_fire_department</span>
<span class="text-xs font-bold whitespace-nowrap">Streak: 12 sem.</span>
</div>
</section>
<!-- Split of the Week (7 days) -->
<section class="space-y-4">
<h2 class="text-xl font-bold text-black px-1">Split de la Semaine</h2>
<div class="flex justify-between items-center px-1">
<div class="flex flex-col items-center gap-2">
<div class="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
<span class="text-[10px] font-black text-gray-600">PUSH</span>
</div>
<span class="text-[10px] font-bold text-gray-400 uppercase">L</span>
</div>
<div class="flex flex-col items-center gap-2 relative">
<div class="w-11 h-11 rounded-full bg-accent-cyan flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.4)]">
<span class="text-[10px] font-black text-white">PULL</span>
</div>
<div class="absolute -bottom-1 w-1 h-1 bg-accent-cyan rounded-full"></div>
<span class="text-[10px] font-bold text-accent-cyan uppercase mt-1">M</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
<span class="text-[10px] font-black text-gray-600">LEGS</span>
</div>
<span class="text-[10px] font-bold text-gray-400 uppercase">M</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-11 h-11 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
<span class="text-[10px] font-black text-gray-400">REST</span>
</div>
<span class="text-[10px] font-bold text-gray-400 uppercase">J</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
<span class="text-[10px] font-black text-gray-600">PUSH</span>
</div>
<span class="text-[10px] font-bold text-gray-400 uppercase">V</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
<span class="text-[10px] font-black text-gray-600">PULL</span>
</div>
<span class="text-[10px] font-bold text-gray-400 uppercase">S</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-11 h-11 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
<span class="text-[10px] font-black text-gray-400">REST</span>
</div>
<span class="text-[10px] font-bold text-gray-400 uppercase">D</span>
</div>
</div>
</section>
<!-- Workout of the Day -->
<section class="space-y-4">
<div class="rounded-[28px] p-6 shadow-xl relative overflow-hidden text-white bg-black">
<img alt="Workout Background" class="absolute inset-0 w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJcoTsrI9K1jqmVoH3nvopsv434KxxY9F4gK8PmFgsURnjO65MvwnnmOJPoYYHHx67PnwOrd0zyal6MyNPkeKL1IUAKKysWPVNqABpDBNsjmmwyu4sifBh8TbINjwrGQrDuZCBpLfSbmfoZvhQKmPPbLmumecCvTdo_aI_RYGXtOcdaM2PcReytFb68rktD0e7O61re4I5wKPB2jUZt_whZnebAE-KnjKTHODzg2jU7BmSvClCwg-KD-_rUlEDbQEyNQUl1cM8zw9L"/>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div class="relative z-10">
<span class="inline-block px-2.5 py-1 bg-black/50 text-accent-cyan border border-accent-cyan/30 text-[10px] font-bold rounded mb-3 uppercase tracking-wider backdrop-blur-sm">Aujourd'hui</span>
<h2 class="text-3xl font-black mb-1">Séance du Jour</h2>
<h3 class="text-lg font-bold text-gray-200 mb-5">Pull - Dos / Arrière d'épaules / Biceps</h3>
<div class="flex items-center gap-5 mb-8">
<div class="flex items-center gap-2 text-sm font-semibold">
<span class="material-icons text-gray-300 text-lg">format_list_bulleted</span>
                            9 exercices
                        </div>
<div class="flex items-center gap-2 text-sm font-semibold">
<span class="material-icons text-gray-300 text-lg">schedule</span>
                            1h20
                        </div>
</div>
<button class="w-full py-4 rounded-2xl bg-gradient-to-r from-accent-cyan to-primary text-black font-black text-lg shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all">
                        DÉMARRER <span class="material-icons">play_arrow</span>
</button>
</div>
</div>
<!-- Prochaine séance preview -->
<div class="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center justify-between mx-1 shadow-sm">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
<span class="material-icons text-lg">event_repeat</span>
</div>
<div>
<p class="text-xs font-bold text-black">Demain : LEGS</p>
<p class="text-[10px] font-medium text-gray-500">8 exercices — 1h10 estimée</p>
</div>
</div>
<span class="material-icons text-gray-300">chevron_right</span>
</div>
</section>
<!-- Activity Calendar -->
<section class="space-y-4">
<div class="flex items-center justify-between px-1">
<h2 class="text-xl font-bold text-black">Calendrier d'Activité</h2>
<span class="text-xs font-bold text-gray-500 uppercase">Mars 2025</span>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-2xl p-4">
<div class="grid grid-cols-7 gap-2">
<div class="text-[10px] font-bold text-gray-400 text-center">L</div>
<div class="text-[10px] font-bold text-gray-400 text-center">M</div>
<div class="text-[10px] font-bold text-gray-400 text-center">M</div>
<div class="text-[10px] font-bold text-gray-400 text-center">J</div>
<div class="text-[10px] font-bold text-gray-400 text-center">V</div>
<div class="text-[10px] font-bold text-gray-400 text-center">S</div>
<div class="text-[10px] font-bold text-gray-400 text-center">D</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-gray-300">24</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-gray-300">25</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-gray-300">26</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-gray-300">27</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-gray-300">28</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-black bg-primary/20 rounded-lg border border-primary/30">1</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-black bg-primary/20 rounded-lg border border-primary/30">2</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-black bg-primary/20 rounded-lg border border-primary/30">3</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-black bg-primary/20 rounded-lg border border-primary/30">4</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-gray-400">5</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-black bg-accent-cyan/10 ring-2 ring-accent-cyan rounded-lg">6</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-gray-400">7</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-gray-400">8</div>
<div class="h-8 flex items-center justify-center text-[11px] font-bold text-gray-400">9</div>
</div>
</div>
</section>
<!-- Progress Analytics -->
<section class="space-y-4">
<h2 class="text-xl font-bold text-black px-1">Analyses de Progression</h2>
<div class="grid grid-cols-2 gap-4">
<div class="bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-3">
<p class="text-xs font-bold text-gray-500 uppercase tracking-tight">Volume Hebdo</p>
<div class="flex items-end gap-1.5 h-16">
<div class="bg-primary/20 w-full h-[40%] rounded-t-sm"></div>
<div class="bg-primary/40 w-full h-[60%] rounded-t-sm"></div>
<div class="bg-primary/60 w-full h-[55%] rounded-t-sm"></div>
<div class="bg-primary w-full h-[85%] rounded-t-sm"></div>
<div class="bg-gray-200 w-full h-[0%] rounded-t-sm"></div>
</div>
<div class="flex justify-between items-center">
<span class="text-sm font-black text-black">42.5k kg</span>
<span class="text-[10px] font-bold text-green-600">+8%</span>
</div>
</div>
<div class="bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-3">
<p class="text-xs font-bold text-gray-500 uppercase tracking-tight">Durée Moy.</p>
<div class="flex items-center justify-center h-16">
<div class="relative w-12 h-12">
<svg class="w-12 h-12" viewbox="0 0 100 100">
<circle class="text-gray-200 stroke-current" cx="50" cy="50" fill="transparent" r="40" stroke-width="10"></circle>
<circle class="text-accent-cyan stroke-current" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="251.2" stroke-dashoffset="62.8" stroke-linecap="round" stroke-width="10"></circle>
</svg>
<span class="absolute inset-0 flex items-center justify-center text-[10px] font-black">75m</span>
</div>
</div>
<div class="flex justify-between items-center pt-1">
<span class="text-sm font-black text-black">1h15</span>
<span class="text-[10px] font-bold text-gray-400">Stable</span>
</div>
</div>
</div>
</section>
<!-- Fatigue Musculaire -->
<section class="space-y-4">
<h2 class="text-xl font-bold text-black px-1">Fatigue Musculaire</h2>
<div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
<div class="flex gap-6 items-start">
<div class="relative w-1/2">
<!-- Visual indicators / Heatmap effect overlays -->
<div class="absolute top-[18%] left-[25%] w-3 h-3 bg-accent-orange/80 rounded-full animate-pulse ring-4 ring-accent-orange/20"></div>
<div class="absolute top-[28%] left-[45%] w-3 h-3 bg-accent-green/80 rounded-full ring-4 ring-accent-green/20"></div>
<div class="absolute top-[55%] left-[35%] w-3 h-3 bg-accent-red/80 rounded-full ring-4 ring-accent-red/20"></div>
</div>
<div class="w-1/2 space-y-5">
<div class="space-y-1">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-accent-green"></div>
<span class="text-[11px] font-black text-black">Pectoraux</span>
</div>
<p class="text-[10px] text-gray-500 font-medium">Prêt à l'effort</p>
<div class="w-full bg-gray-100 h-1 rounded-full mt-1">
<div class="bg-accent-green h-full rounded-full w-[90%]"></div>
</div>
</div>
<div class="space-y-1">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-accent-orange"></div>
<span class="text-[11px] font-black text-black">Dos</span>
</div>
<p class="text-[10px] text-gray-500 font-medium">Récupération recommandée</p>
<div class="w-full bg-gray-100 h-1 rounded-full mt-1">
<div class="bg-accent-orange h-full rounded-full w-[45%]"></div>
</div>
</div>
<div class="space-y-1">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-accent-red"></div>
<span class="text-[11px] font-black text-black">Jambes</span>
</div>
<p class="text-[10px] text-gray-500 font-medium">Fatigue critique (72h)</p>
<div class="w-full bg-gray-100 h-1 rounded-full mt-1">
<div class="bg-accent-red h-full rounded-full w-[15%]"></div>
</div>
</div>
<div class="pt-2">
<button class="w-full py-2 rounded-xl border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:bg-gray-50 transition-colors">
                                Détails par muscle
                            </button>
</div>
</div>
</div>
</div>
</section>
<!-- Volume de Séries Bar Chart -->
<section class="space-y-4 pb-12">
<h2 class="text-xl font-bold text-black px-1">Volume de Séries (Cette sem.)</h2>
<div class="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-6">
<div class="space-y-1.5">
<div class="flex justify-between items-end mb-1">
<span class="text-sm font-bold text-black">Pectoraux</span>
<div class="flex items-baseline gap-1">
<span class="text-sm font-black text-accent-blue">12</span>
<span class="text-[10px] font-bold text-gray-400">/ 10</span>
</div>
</div>
<div class="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
<div class="bg-accent-blue h-full rounded-full" style="width: 80%"></div>
</div>
<p class="text-[10px] text-gray-500 font-semibold mt-1">Volume recommandé atteint ✅</p>
</div>
<div class="space-y-1.5">
<div class="flex justify-between items-end mb-1">
<span class="text-sm font-bold text-black">Dos</span>
<div class="flex items-baseline gap-1">
<span class="text-sm font-black text-accent-orange">10</span>
<span class="text-[10px] font-bold text-gray-400">/ 12</span>
</div>
</div>
<div class="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
<div class="bg-accent-orange h-full rounded-full" style="width: 66%"></div>
</div>
<p class="text-[10px] text-gray-500 font-semibold mt-1">2 séries restantes pour l'objectif</p>
</div>
<div class="space-y-1.5">
<div class="flex justify-between items-end mb-1">
<span class="text-sm font-bold text-black">Jambes</span>
<div class="flex items-baseline gap-1">
<span class="text-sm font-black text-accent-green">15</span>
<span class="text-[10px] font-bold text-gray-400">/ 14</span>
</div>
</div>
<div class="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
<div class="bg-accent-green h-full rounded-full" style="width: 100%"></div>
</div>
<p class="text-[10px] text-gray-500 font-semibold mt-1">Surcompensation positive 🚀</p>
</div>
<div class="space-y-1.5">
<div class="flex justify-between items-end mb-1">
<span class="text-sm font-bold text-black">Épaules</span>
<div class="flex items-baseline gap-1">
<span class="text-sm font-black text-accent-red">6</span>
<span class="text-[10px] font-bold text-gray-400">/ 8</span>
</div>
</div>
<div class="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
<div class="bg-accent-red h-full rounded-full" style="width: 45%"></div>
</div>
</div>
</div>
</section>
</main>
<!-- Navigation -->
<nav class="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-100 pb-safe pt-2 px-6 flex justify-between items-center z-50 max-w-md mx-auto shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition-colors py-2 px-1">
<span class="material-icons">dashboard</span>
<span class="text-[10px] font-bold">Résumé</span>
</button>
<button class="flex flex-col items-center gap-1 text-black py-2 px-1">
<span class="material-icons">fitness_center</span>
<span class="text-[10px] font-bold">Programme</span>
</button>
<button class="flex flex-col items-center gap-1 py-2 px-1 relative text-black">
<div class="absolute -top-6 w-14 h-14 rounded-full bg-black flex items-center justify-center text-primary shadow-lg border-4 border-white active:scale-90 transition-transform glow-green">
<span class="material-icons text-2xl">add</span>
</div>
<span class="text-[10px] font-black mt-8 uppercase tracking-widest">Prog</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition-colors py-2 px-1">
<span class="material-icons">restaurant</span>
<span class="text-[10px] font-bold">Nutrition</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition-colors py-2 px-1">
<span class="material-icons">person</span>
<span class="text-[10px] font-bold">Profil</span>
</button>
</nav>
</body></html>