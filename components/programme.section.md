<!DOCTYPE html>
<html lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Entraînement avec Volume de Séries</title>
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
            min-height: max(884px, 100dvh);
            background-color: #ffffff;
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
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="text-text-light min-h-screen pb-24 bg-white">
<main class="max-w-md mx-auto p-4 space-y-8">
<header class="space-y-1 pt-2 flex items-center justify-between">
<div>
<h1 class="text-3xl font-black tracking-tight text-black">Entraînement</h1>
<p class="text-sm font-semibold text-gray-500">Vendredi 6 Mars</p>
</div>
<button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black">
<span class="material-icons">history</span>
</button>
</header>
<section class="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="relative w-16 h-16">
<svg class="w-16 h-16" viewBox="0 0 100 100">
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
<section class="space-y-4">
<h2 class="text-xl font-bold text-black px-1">Split de la Semaine</h2>
<div class="flex justify-between items-center px-1">
<div class="flex flex-col items-center gap-2">
<div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
<span class="text-sm font-black text-gray-600">PUSH</span>
</div>
<span class="text-[10px] font-bold text-gray-500 uppercase">Lundi</span>
</div>
<div class="flex flex-col items-center gap-2 relative">
<div class="w-16 h-16 rounded-full bg-accent-cyan flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
<span class="text-sm font-black text-white">PULL</span>
</div>
<div class="absolute -bottom-1 w-1.5 h-1.5 bg-accent-cyan rounded-full"></div>
<span class="text-[10px] font-bold text-accent-cyan uppercase mt-1">Mardi</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
<span class="text-sm font-black text-gray-600">LEGS</span>
</div>
<span class="text-[10px] font-bold text-gray-500 uppercase">Mercredi</span>
</div>
<div class="flex flex-col items-center gap-2">
<div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
<span class="text-sm font-black text-gray-600">REPOS</span>
</div>
<span class="text-[10px] font-bold text-gray-500 uppercase">Jeudi</span>
</div>
</div>
</section>
<section class="space-y-4">
<div class="rounded-[24px] p-5 shadow-xl relative overflow-hidden text-white bg-black">
<img alt="Workout Background" class="absolute inset-0 w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxVCYr65ssI2e1lzkoK4ht6TwBajgc6UTDSfT2DKk9_qB6ii8ihE38XjCXiZkWlGRyLE3dSw7ke59RBLXTx9S5clJNNmf_w_Z2kw77pFyJBNDEK4Cv8fPsFFU_-qHSZV_GuYORoBcqZ9mLotPfq2AsvGzBGVU31Lr1vyJkWLMoTg5pR939wgHSXcRt-Fd7t8PlCphQWm56AcOPG61jFX36G5uajt2Aqw89X_FmI3mWI4l9edfMkbY0w94jLoHxPx8exlooyww-VUo0"/>
<div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div class="relative z-10">
<span class="inline-block px-2 py-1 bg-black/50 text-accent-cyan border border-accent-cyan/30 text-[10px] font-bold rounded mb-3 uppercase tracking-wide backdrop-blur-sm">Aujourd'hui</span>
<h2 class="text-2xl font-black mb-1">Séance du Jour</h2>
<h3 class="text-lg font-bold text-gray-200 mb-4">Push - Pecs / Épaules / Triceps</h3>
<div class="flex items-center gap-4 mb-6">
<div class="flex items-center gap-1.5 text-sm font-medium">
<span class="material-icons text-gray-300 text-base">format_list_bulleted</span>
8 exercices
</div>
<div class="flex items-center gap-1.5 text-sm font-medium">
<span class="material-icons text-gray-300 text-base">schedule</span>
1h15
</div>
</div>
<div class="bg-black/40 border border-white/10 backdrop-blur-md rounded-xl p-3 flex items-start gap-3 mb-6">
<span class="material-icons text-accent-cyan text-sm mt-0.5">lightbulb</span>
<p class="text-xs font-medium text-gray-200">Note: 3 exos à augmenter par rapport à la dernière séance.</p>
</div>
<button class="w-full py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-primary text-black font-black text-lg shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
DÉMARRER <span class="material-icons">play_arrow</span>
</button>
</div>
</div>
</section>
<section class="space-y-4">
<h2 class="text-xl font-bold text-black px-1">Dernière Séance</h2>
<div class="border border-gray-100 rounded-[20px] p-4 bg-gray-50 flex items-center justify-between">
<div>
<h4 class="font-extrabold text-black text-sm">Legs - Quads / Ischios / Mollets</h4>
<p class="text-xs text-gray-500 mt-0.5 font-medium">Mercredi 4 Mars</p>
<div class="flex items-center gap-2 mt-2">
<span class="text-xs font-bold text-black bg-gray-200 px-2 py-1 rounded">Vol: 12,450 kg</span>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span class="material-icons">arrow_upward</span>
</div>
<span class="text-[10px] font-bold text-green-600">+450kg</span>
</div>
</div>
</section>
<section class="space-y-4">
<div class="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
<div class="flex-shrink-0 w-32 bg-gray-50 border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 text-center">
<div class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
<span class="material-icons text-lg">add</span>
</div>
<span class="text-xs font-bold text-black">Séance Libre</span>
</div>
<div class="flex-shrink-0 w-32 bg-gray-50 border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 text-center">
<div class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
<span class="material-icons text-lg">repeat</span>
</div>
<span class="text-xs font-bold text-black">Répéter Séance</span>
</div>
<div class="flex-shrink-0 w-32 bg-gray-50 border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 text-center">
<div class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
<span class="material-icons text-lg">timer</span>
</div>
<span class="text-xs font-bold text-black">Timer</span>
</div>
</div>
</section>
<section class="space-y-4">
<h2 class="text-xl font-bold text-black px-1">PRs Récents</h2>
<div class="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
<div class="flex-shrink-0 bg-white border-2 border-primary/30 rounded-xl p-3 flex items-center gap-3">
<div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
<span class="material-icons text-sm">emoji_events</span>
</div>
<div>
<p class="text-xs font-bold text-black">Bench: 100kg</p>
<p class="text-[10px] font-medium text-gray-500">(Hier) 🔥</p>
</div>
</div>
<div class="flex-shrink-0 bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-3">
<div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-black">
<span class="material-icons text-sm">emoji_events</span>
</div>
<div>
<p class="text-xs font-bold text-black">Squat: 140kg</p>
<p class="text-[10px] font-medium text-gray-500">(Il y a 3j)</p>
</div>
</div>
</div>
</section>
<section class="space-y-4 pb-6">
<h2 class="text-xl font-bold text-black px-1">Volume de Séries (Cette sem.)</h2>
<div class="bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-4">
<div class="space-y-1">
<div class="flex justify-between items-end mb-1">
<span class="text-sm font-bold text-black">Pectoraux</span>
<span class="text-xs font-bold text-accent-blue">12 séries</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 relative">
<div class="bg-accent-blue h-2.5 rounded-full" style="width: 80%"></div>
<div class="absolute w-1 h-3 bg-black top-[-1px]" style="left: 70%"></div>
</div>
<p class="text-[10px] text-gray-500 text-right mt-0.5">Objectif: 10</p>
</div>
<div class="space-y-1">
<div class="flex justify-between items-end mb-1">
<span class="text-sm font-bold text-black">Dos</span>
<span class="text-xs font-bold text-accent-orange">10 séries</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 relative">
<div class="bg-accent-orange h-2.5 rounded-full" style="width: 66%"></div>
<div class="absolute w-1 h-3 bg-black top-[-1px]" style="left: 80%"></div>
</div>
<p class="text-[10px] text-gray-500 text-right mt-0.5">Objectif: 12</p>
</div>
<div class="space-y-1">
<div class="flex justify-between items-end mb-1">
<span class="text-sm font-bold text-black">Jambes</span>
<span class="text-xs font-bold text-accent-green">15 séries</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 relative">
<div class="bg-accent-green h-2.5 rounded-full" style="width: 100%"></div>
<div class="absolute w-1 h-3 bg-black top-[-1px]" style="left: 90%"></div>
</div>
<p class="text-[10px] text-gray-500 text-right mt-0.5">Objectif: 14</p>
</div>
</div>
</section>
</main>
<nav class="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 pb-safe pt-2 px-6 flex justify-between items-center z-50 max-w-md mx-auto">
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-black transition-colors py-2 px-1">
<span class="material-icons">dashboard</span>
<span class="text-[10px] font-bold">Résumé</span>
</button>
<button class="flex flex-col items-center gap-1 text-black py-2 px-1">
<span class="material-icons">fitness_center</span>
<span class="text-[10px] font-bold">Programme</span>
</button>
<button class="flex flex-col items-center gap-1 py-2 px-1 relative text-black">
<div class="absolute -top-6 w-14 h-14 rounded-full bg-black flex items-center justify-center text-primary shadow-lg border-4 border-white glow-green">
<span class="material-icons text-2xl">add</span>
</div>
<span class="text-[10px] font-black mt-8">Prog</span>
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