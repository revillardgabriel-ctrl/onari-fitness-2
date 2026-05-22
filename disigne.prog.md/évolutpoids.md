<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
<title>Weight Evolution - Fitness App</title>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
<!-- Top Navigation / Header -->
<header class="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between">
<button class="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
</button>
<h1 class="text-lg font-bold tracking-tight">Weight Progress</h1>
<button class="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-slate-900 dark:text-slate-100">more_horiz</span>
</button>
</header>
<main class="flex-1 overflow-y-auto px-4 pb-24">
<!-- Summary Stats Cards -->
<div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
<div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm flex flex-col gap-1">
<span class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current</span>
<span class="text-2xl font-bold">72.5<span class="text-sm font-medium ml-1">kg</span></span>
<div class="flex items-center gap-1 mt-1 text-rose-500">
<span class="material-symbols-outlined text-sm">trending_down</span>
<span class="text-xs font-semibold">-0.5%</span>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm flex flex-col gap-1">
<span class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Lost</span>
<span class="text-2xl font-bold text-primary">4.2<span class="text-sm font-medium ml-1">kg</span></span>
<div class="flex items-center gap-1 mt-1 text-emerald-500">
<span class="material-symbols-outlined text-sm">check_circle</span>
<span class="text-xs font-semibold">Active</span>
</div>
</div>
<div class="col-span-2 md:col-span-1 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm flex flex-col gap-1">
<span class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Goal Weight</span>
<span class="text-2xl font-bold">68.0<span class="text-sm font-medium ml-1">kg</span></span>
<div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
<div class="bg-primary h-full w-[85%] rounded-full"></div>
</div>
<span class="text-[10px] font-bold text-slate-400 mt-1 self-end uppercase">85% reached</span>
</div>
</div><button class="w-full mt-8 mb-2 py-4 px-6 bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 text-primary-dark dark:text-primary rounded-full flex items-center justify-center gap-3 transition-all active:scale-[0.98] border border-transparent">
<span class="material-symbols-outlined font-medium">add</span>
<span class="font-bold tracking-tight text-base">Mettre à jour le poids</span>
</button>
<!-- Chart Section -->
<section class="mt-8 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/60 dark:border-slate-800 shadow-sm">
<div class="flex items-end justify-between mb-6">
<div>
<h2 class="text-xl font-bold">Evolution</h2>
<p class="text-slate-500 text-sm">Weight loss trend - Last 4 months</p>
</div>
<div class="bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300">
                    Monthly
                </div>
</div>
<!-- SVG Chart -->
<div class="relative w-full h-64 mt-4">
<svg class="w-full h-full overflow-visible" viewbox="0 0 400 200">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0ddff2" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#0ddff2" stop-opacity="0"></stop>
</lineargradient>
</defs>
<!-- Grid Lines -->
<line class="text-slate-100 dark:text-slate-800" stroke="currentColor" stroke-width="1" x1="0" x2="400" y1="40" y2="40"></line>
<line class="text-slate-100 dark:text-slate-800" stroke="currentColor" stroke-width="1" x1="0" x2="400" y1="80" y2="80"></line>
<line class="text-slate-100 dark:text-slate-800" stroke="currentColor" stroke-width="1" x1="0" x2="400" y1="120" y2="120"></line>
<line class="text-slate-100 dark:text-slate-800" stroke="currentColor" stroke-width="1" x1="0" x2="400" y1="160" y2="160"></line>
<!-- Area Fill -->
<path d="M0,150 Q50,140 100,100 T200,80 T300,50 T400,30 L400,200 L0,200 Z" fill="url(#chartGradient)"></path>
<!-- Line Path -->
<path d="M0,150 Q50,140 100,100 T200,80 T300,50 T400,30" fill="none" stroke="#0ddff2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
<!-- Data Points -->
<circle cx="100" cy="100" fill="#0ddff2" r="5" stroke="white" stroke-width="2"></circle>
<circle cx="200" cy="80" fill="#0ddff2" r="5" stroke="white" stroke-width="2"></circle>
<circle cx="300" cy="50" fill="#0ddff2" r="5" stroke="white" stroke-width="2"></circle>
<circle cx="400" cy="30" fill="#0ddff2" r="6" stroke="white" stroke-width="3"></circle>
</svg>
</div>
<!-- Chart X-Axis Labels -->
<div class="flex justify-between mt-4 px-1">
<span class="text-xs font-semibold text-slate-400">OCT</span>
<span class="text-xs font-semibold text-slate-400">NOV</span>
<span class="text-xs font-semibold text-slate-400">DEC</span>
<span class="text-xs font-semibold text-slate-400 uppercase">Jan</span>
</div>
</section>
<!-- Insights / Activity List -->
<section class="mt-8">
<h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">History Highlights</h3>
<div class="space-y-3">
<div class="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="size-10 rounded-full bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary">calendar_today</span>
</div>
<div>
<p class="font-bold text-sm">Last Weigh-in</p>
<p class="text-xs text-slate-500">January 12, 2024</p>
</div>
</div>
<p class="font-bold text-sm text-rose-500">-0.4 kg</p>
</div>
<div class="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="size-10 rounded-full bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary">emoji_events</span>
</div>
<div>
<p class="font-bold text-sm">Weight Goal Milestone</p>
<p class="text-xs text-slate-500">New record reached</p>
</div>
</div>
<span class="material-symbols-outlined text-primary">chevron_right</span>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-2 pb-6 pt-2">
<div class="max-w-md mx-auto flex items-center justify-around">
<a class="flex flex-1 flex-col items-center gap-1 group" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">dashboard</span>
<span class="text-[10px] font-medium text-slate-500">Résumé</span>
</a>
<a class="flex flex-1 flex-col items-center gap-1 group" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">event_note</span>
<span class="text-[10px] font-medium text-slate-500">Programme</span>
</a>
<a class="flex flex-1 flex-col items-center gap-1 relative" href="#">
<div class="absolute -top-3 bg-primary size-12 rounded-full flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-white dark:border-background-dark">
<span class="material-symbols-outlined text-slate-900 font-bold" style="font-variation-settings: 'FILL' 1">trending_up</span>
</div>
<span class="text-[10px] font-bold text-primary mt-8">Prog</span>
</a>
<a class="flex flex-1 flex-col items-center gap-1 group" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">restaurant</span>
<span class="text-[10px] font-medium text-slate-500">Nutrition</span>
</a>
<a class="flex flex-1 flex-col items-center gap-1 group" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">person</span>
<span class="text-[10px] font-medium text-slate-500">Profil</span>
</a>
</div>
</nav>
</body></html>