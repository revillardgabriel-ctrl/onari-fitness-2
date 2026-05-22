<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0ddff2",
                        "background-light": "#f5f8f8",
                        "background-dark": "#102122",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<title>Résumé de Séance - Bodybuilding Pro</title>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-white font-display text-slate-900 antialiased">
<!-- Header Section -->
<header class="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-100">
<span class="material-symbols-outlined text-slate-900 cursor-pointer">close</span>
<h2 class="text-lg font-bold tracking-tight">Résumé de Séance</h2>
<button class="bg-primary/10 text-primary p-2 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-xl">share</span>
</button>
</header>
<main class="max-w-md mx-auto pb-32">
<!-- Hero Section -->
<div class="px-6 pt-10 pb-6 text-center">
<div class="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
<span class="material-symbols-outlined text-primary text-5xl fill-1">trophy</span>
</div>
<h1 class="text-4xl font-extrabold tracking-tight mb-2">Félicitations !</h1>
<p class="text-slate-500 font-medium">Vous avez surpassé vos limites aujourd'hui.</p>
</div>
<!-- Progress Ring Visual -->
<div class="flex justify-center py-6">
<div class="relative flex items-center justify-center">
<svg class="w-48 h-48 transform -rotate-90">
<circle class="text-slate-100" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-width="12"></circle>
<circle class="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552.92" stroke-dashoffset="110" stroke-linecap="round" stroke-width="12"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-4xl font-black">92%</span>
<span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Objectif</span>
</div>
</div>
</div>
<!-- Key Stats Grid -->
<div class="grid grid-cols-3 gap-3 px-6 mb-10">
<div class="bg-slate-50 rounded-2xl p-4 flex flex-col items-center border border-slate-100">
<span class="material-symbols-outlined text-primary mb-2">timer</span>
<span class="text-sm font-semibold text-slate-500">Durée</span>
<span class="text-lg font-bold">1h 15</span>
<span class="text-[10px] font-bold text-emerald-500">+5m</span>
</div>
<div class="bg-slate-50 rounded-2xl p-4 flex flex-col items-center border border-slate-100">
<span class="material-symbols-outlined text-primary mb-2">weight</span>
<span class="text-sm font-semibold text-slate-500">Volume</span>
<span class="text-lg font-bold">12.4k</span>
<span class="text-[10px] font-bold text-emerald-500">+250kg</span>
</div>
<div class="bg-slate-50 rounded-2xl p-4 flex flex-col items-center border border-slate-100">
<span class="material-symbols-outlined text-primary mb-2">bolt</span>
<span class="text-sm font-semibold text-slate-500">Intensité</span>
<span class="text-lg font-bold">High</span>
<span class="text-[10px] font-bold text-emerald-500">Peak</span>
</div>
</div>
<!-- PR / Records Section -->
<div class="px-6 mb-10">
<div class="flex items-center justify-between mb-4">
<h3 class="text-xl font-bold">Volume par Groupe Musculaire</h3>
</div>
<div class="grid grid-cols-2 gap-3">
<!-- Pectoraux -->
<div class="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center shadow-sm">
<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
<span class="material-symbols-outlined text-primary text-xl">fitness_center</span>
</div>
<span class="text-xs font-semibold text-slate-500">Pectoraux</span>
<span class="text-lg font-bold">12 Sets</span>
</div>
<!-- Dos -->
<div class="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center shadow-sm">
<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
<span class="material-symbols-outlined text-primary text-xl">back_hand</span>
</div>
<span class="text-xs font-semibold text-slate-500">Dos</span>
<span class="text-lg font-bold">9 Sets</span>
</div>
<!-- Bras -->
<div class="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center shadow-sm">
<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
<span class="material-symbols-outlined text-primary text-xl">exercise</span>
</div>
<span class="text-xs font-semibold text-slate-500">Bras</span>
<span class="text-lg font-bold">6 Sets</span>
</div>
<!-- Jambes -->
<div class="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center shadow-sm">
<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
<span class="material-symbols-outlined text-primary text-xl">directions_run</span>
</div>
<span class="text-xs font-semibold text-slate-500">Jambes</span>
<span class="text-lg font-bold">8 Sets</span>
</div>
</div>
<div class="mt-4 text-center">
<button class="text-primary text-sm font-bold flex items-center justify-center gap-1 mx-auto">
            Voir plus
            <span class="material-symbols-outlined text-sm">keyboard_arrow_down</span>
</button>
</div>
</div>
<!-- Exercise Summary List -->
<div class="px-6 mb-6">
<h3 class="text-xl font-bold mb-4">Détails de la séance</h3>
<div class="space-y-4">
<!-- Card 1 -->
<div class="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
<div class="flex justify-between items-start mb-4">
<div>
<h4 class="font-bold text-lg">Développé couché</h4>
<p class="text-slate-400 text-sm font-medium">Poitrine • Haltères</p>
</div>
<span class="text-primary font-bold">4 Sets</span>
</div>
<div class="space-y-2">
<div class="flex justify-between text-sm py-1 border-b border-slate-50">
<span class="text-slate-500">Série 1</span>
<span class="font-bold">12 x 40kg</span>
</div>
<div class="flex justify-between text-sm py-1 border-b border-slate-50">
<span class="text-slate-500">Série 2</span>
<span class="font-bold">10 x 42.5kg</span>
</div>
<div class="flex justify-between text-sm py-1 border-b border-slate-50">
<span class="text-slate-500">Série 3</span>
<span class="font-bold">8 x 45kg</span>
</div>
<div class="flex justify-between text-sm py-1">
<span class="text-slate-500">Série 4</span>
<span class="font-bold">6 x 45kg <span class="text-primary text-[10px] ml-1">PR</span></span>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
<div class="flex justify-between items-start mb-4">
<div>
<h4 class="font-bold text-lg">Squat</h4>
<p class="text-slate-400 text-sm font-medium">Jambes • Barre</p>
</div>
<span class="text-primary font-bold">3 Sets</span>
</div>
<div class="space-y-2">
<div class="flex justify-between text-sm py-1 border-b border-slate-50">
<span class="text-slate-500">Série 1</span>
<span class="font-bold">5 x 120kg</span>
</div>
<div class="flex justify-between text-sm py-1 border-b border-slate-50">
<span class="text-slate-500">Série 2</span>
<span class="font-bold">3 x 135kg</span>
</div>
<div class="flex justify-between text-sm py-1">
<span class="text-slate-500">Série 3</span>
<span class="font-bold">1 x 145kg <span class="text-primary text-[10px] ml-1">PR</span></span>
</div>
</div>
</div>
</div>
</div>
<!-- Extra CTA -->
<div class="px-6 py-4">
<button class="w-full bg-primary text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                Enregistrer &amp; Terminer
                <span class="material-symbols-outlined">check_circle</span>
</button>
</div>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 pb-6 pt-2 flex justify-between items-center z-50">
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-900" href="#">
<span class="material-symbols-outlined fill-1">fact_check</span>
<p class="text-[10px] font-bold uppercase tracking-wider">Résumé</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400" href="#">
<span class="material-symbols-outlined">calendar_month</span>
<p class="text-[10px] font-medium uppercase tracking-wider">Programme</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400" href="#">
<span class="material-symbols-outlined">monitoring</span>
<p class="text-[10px] font-medium uppercase tracking-wider">Prog</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400" href="#">
<span class="material-symbols-outlined">restaurant</span>
<p class="text-[10px] font-medium uppercase tracking-wider">Nutrition</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400" href="#">
<span class="material-symbols-outlined">person</span>
<p class="text-[10px] font-medium uppercase tracking-wider">Profil</p>
</a>
</nav>
</body></html>