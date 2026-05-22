<!DOCTYPE html>
<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Résumé Dashboard Naturel et Épuré</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#000000",
                        "background-light": "#F4F4F9",
                        "background-dark": "#000000",
                        "card-light": "#FFFFFF",
                        "card-dark": "#1C1C1E",
                        "text-light": "#000000",
                        "text-dark": "#FFFFFF",
                        "text-muted-light": "#8E8E93",
                        "text-muted-dark": "#98989D",
                        "accent-green": "#a3e635",
                        "accent-red": "#f43f5e",
                        "accent-blue": "#0ea5e9",
                        "accent-purple": "#a855f7",
                        "accent-orange": "#f97316",
                        "accent-indigo": "#6366f1"
                    },
                    fontFamily: {
                        display: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "1.25rem",
                        'organic': '28px'
                    },
                    boxShadow: {
                        'organic': '0 4px 20px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0,0,0,0.02)',
                    }
                },
            },
        };
    </script>
<style>
        body {
            font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .ring-container {
            position: relative;
            width: 140px;
            height: 140px;
        }
        .ring {
            fill: transparent;
            stroke-width: 14;
            stroke-linecap: round;
        }
        .ring-bg {
            fill: transparent;
            stroke-width: 14;
            opacity: 0.2;
        }
        .ring-red {
            stroke: #f43f5e;
            stroke-dasharray: 400;
            stroke-dashoffset: 80;
        }
        .ring-green {
            stroke: #a3e635;
            stroke-dasharray: 300;
            stroke-dashoffset: 200;
        }
        .ring-blue {
            stroke: #0ea5e9;
            stroke-dasharray: 200;
            stroke-dashoffset: 180;
        }
        .calories-ring-container {
            position: relative;
            width: 120px;
            height: 120px;
        }
        .calories-ring {
            fill: transparent;
            stroke-width: 12;
            stroke-linecap: round;
        }
        .calories-ring-bg {
            fill: transparent;
            stroke-width: 12;
            opacity: 0.2;
            stroke: #f97316;
        }
        .calories-ring-fg {
            stroke: #f97316;
            stroke-dasharray: 280;
            stroke-dashoffset: 260;
        }
        .sleep-ring-container {
            position: relative;
            width: 120px;
            height: 120px;
        }
        .sleep-ring {
            fill: transparent;
            stroke-width: 12;
            stroke-linecap: round;
        }
        .sleep-ring-bg {
            fill: transparent;
            stroke-width: 12;
            opacity: 0.2;
            stroke: #6366f1;
        }
        .sleep-ring-fg {
            stroke: #6366f1;
            stroke-dasharray: 280;
            stroke-dashoffset: 60;
        }
        .area-chart {
            width: 100%;
            height: 50px;
            margin-top: auto;
        }
        .bottle {
            width: 40px;
            height: 100px;
            border: 2px solid #0ea5e9;
            border-radius: 8px 8px 12px 12px;
            position: relative;
            margin-right: 20px;
        }
        .bottle::before {
            content: '';
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 10px;
            border: 2px solid #0ea5e9;
            border-bottom: none;
            border-radius: 4px 4px 0 0;
        }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display min-h-screen transition-colors duration-300 relative">
<div class="max-w-md mx-auto px-4 py-8 pb-32">
<header class="flex justify-between items-center mb-8">
<div>
<p class="text-text-muted-light dark:text-text-muted-dark text-sm font-medium uppercase tracking-wider mb-1">Aperçu de ta journée</p>
<h1 class="text-4xl font-black tracking-tight">Résumé</h1>
</div>
<div class="flex gap-3">
<button class="w-10 h-10 rounded-full bg-card-light dark:bg-card-dark shadow-organic flex items-center justify-center text-text-light dark:text-text-dark">
<span class="material-symbols-outlined text-xl">edit</span>
</button>
<div class="w-10 h-10 rounded-full bg-gradient-to-br from-accent-green to-accent-blue flex items-center justify-center text-black font-bold shadow-organic text-lg">
                    G
                </div>
</div>
</header>
<div class="bg-card-light dark:bg-card-dark rounded-organic p-6 mb-5 shadow-organic relative overflow-hidden">
<div class="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
<span class="material-symbols-outlined text-[150px] text-yellow-500">bolt</span>
</div>
<div class="flex items-center gap-2 mb-4">
<div class="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse"></div>
<span class="text-xs font-bold text-accent-green tracking-wider uppercase">En cours</span>
</div>
<h2 class="text-3xl font-bold mb-2 tracking-tight">gab</h2>
<p class="text-text-muted-light dark:text-text-muted-dark text-sm mb-5">Aucune description</p>
<div class="flex gap-2">
<span class="bg-background-light dark:bg-gray-800 text-text-light dark:text-text-dark text-xs font-semibold px-4 py-2 rounded-full">Semaine 1</span>
<span class="bg-background-light dark:bg-gray-800 text-text-light dark:text-text-dark text-xs font-semibold px-4 py-2 rounded-full">2 séances/sem</span>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-organic p-6 mb-5 shadow-organic">
<h2 class="text-xl font-bold mb-6 tracking-tight">Anneaux Activité</h2>
<div class="flex items-center justify-between px-2">
<div class="ring-container mx-auto">
<svg class="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
<circle class="ring-bg stroke-accent-red" cx="80" cy="80" r="65"></circle>
<circle class="ring ring-red" cx="80" cy="80" r="65"></circle>
<circle class="ring-bg stroke-accent-green" cx="80" cy="80" r="48"></circle>
<circle class="ring ring-green" cx="80" cy="80" r="48"></circle>
<circle class="ring-bg stroke-accent-blue" cx="80" cy="80" r="31"></circle>
<circle class="ring ring-blue" cx="80" cy="80" r="31"></circle>
</svg>
</div>
<div class="space-y-4 pl-4 border-l border-gray-100 dark:border-gray-800">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-accent-red text-xl">local_fire_department</span>
<div>
<div class="flex items-baseline gap-1">
<span class="text-2xl font-bold text-accent-red">146</span>
<span class="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">/700</span>
</div>
<span class="text-[10px] text-text-muted-light dark:text-text-muted-dark font-bold tracking-wider uppercase">KCAL</span>
</div>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-accent-green text-xl">timer</span>
<div>
<div class="flex items-baseline gap-1">
<span class="text-2xl font-bold text-accent-green">1</span>
<span class="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">/60</span>
</div>
<span class="text-[10px] text-text-muted-light dark:text-text-muted-dark font-bold tracking-wider uppercase">MIN</span>
</div>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-accent-blue text-xl">accessibility_new</span>
<div>
<div class="flex items-baseline gap-1">
<span class="text-2xl font-bold text-accent-blue">6</span>
<span class="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">/12</span>
</div>
<span class="text-[10px] text-text-muted-light dark:text-text-muted-dark font-bold tracking-wider uppercase">H</span>
</div>
</div>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-4 mb-5">
<div class="bg-card-light dark:bg-card-dark rounded-organic p-5 shadow-organic flex flex-col h-44 overflow-hidden relative">
<div class="z-10 relative">
<div class="flex justify-between items-center mb-1">
<h3 class="font-bold text-sm tracking-tight">Pas</h3>
<span class="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-sm">chevron_right</span>
</div>
<p class="text-[11px] text-text-muted-light dark:text-text-muted-dark mb-2 font-medium uppercase tracking-wide">Aujourd'hui</p>
<div class="text-2xl font-bold text-accent-purple">6 078</div>
</div>
<div class="area-chart absolute bottom-0 left-0 right-0 w-full opacity-30 text-accent-purple">
<svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
<path d="M0,50 L0,30 Q10,20 20,35 T40,25 T60,40 T80,15 T100,5 L100,50 Z" fill="currentColor"></path>
</svg>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-organic p-5 shadow-organic flex flex-col h-44 overflow-hidden relative">
<div class="z-10 relative">
<div class="flex justify-between items-center mb-1">
<h3 class="font-bold text-sm tracking-tight">Distance</h3>
<span class="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark text-sm">chevron_right</span>
</div>
<p class="text-[11px] text-text-muted-light dark:text-text-muted-dark mb-2 font-medium uppercase tracking-wide">Aujourd'hui</p>
<div class="text-2xl font-bold text-accent-blue">4,65 <span class="text-sm font-semibold">KM</span></div>
</div>
<div class="area-chart absolute bottom-0 left-0 right-0 w-full opacity-30 text-accent-blue">
<svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
<path d="M0,50 L0,40 Q15,45 25,25 T50,30 T75,10 T100,20 L100,50 Z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-organic p-6 mb-5 shadow-organic">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-accent-orange text-xl">local_fire_department</span>
<h2 class="text-xl font-bold tracking-tight">Calories</h2>
</div>
<div class="flex items-center gap-6">
<div class="calories-ring-container flex-shrink-0 relative flex items-center justify-center">
<svg class="w-full h-full transform -rotate-90 absolute top-0 left-0" viewBox="0 0 100 100">
<circle class="calories-ring-bg" cx="50" cy="50" r="42"></circle>
<circle class="calories-ring calories-ring-fg" cx="50" cy="50" r="42"></circle>
</svg>
<div class="text-center z-10">
<div class="text-3xl font-black text-accent-orange leading-none tracking-tighter">2800</div>
<div class="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-1 font-bold uppercase tracking-wider">restantes</div>
</div>
</div>
<div class="flex-1 space-y-5">
<div>
<div class="flex justify-between text-xs mb-1.5 font-semibold">
<span class="text-text-muted-light dark:text-text-muted-dark">Consommé</span>
<span class="font-bold text-accent-red">0</span>
</div>
<div class="h-2 bg-background-light dark:bg-gray-800 rounded-full overflow-hidden">
<div class="h-full bg-accent-red rounded-full" style="width: 5%"></div>
</div>
</div>
<div>
<div class="flex justify-between text-xs mb-1.5 font-semibold">
<span class="text-text-muted-light dark:text-text-muted-dark">Brûlé</span>
<span class="font-bold text-accent-blue">146</span>
</div>
<div class="h-2 bg-background-light dark:bg-gray-800 rounded-full overflow-hidden">
<div class="h-full bg-accent-blue rounded-full" style="width: 15%"></div>
</div>
</div>
</div>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-organic p-6 mb-5 shadow-organic">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-accent-blue text-xl">water_drop</span>
<h2 class="text-xl font-bold tracking-tight">Hydratation</h2>
</div>
<div class="flex items-center">
<div class="bottle"></div>
<div class="flex-1 ml-4">
<div class="flex items-baseline gap-1 mb-1">
<span class="text-4xl font-black text-accent-blue tracking-tighter">0</span>
<span class="text-sm text-text-muted-light dark:text-text-muted-dark font-bold uppercase tracking-wider">ml</span>
</div>
<p class="text-sm text-text-muted-light dark:text-text-muted-dark mb-4 font-medium">sur 2000 ml</p>
<div class="flex gap-2">
<button class="w-8 h-8 rounded-full border-2 border-accent-blue/30 bg-transparent flex-shrink-0 transition-colors hover:bg-accent-blue/10"></button>
<button class="w-8 h-8 rounded-full border-2 border-accent-blue/30 bg-transparent flex-shrink-0 transition-colors hover:bg-accent-blue/10"></button>
<button class="w-8 h-8 rounded-full border-2 border-accent-blue/30 bg-transparent flex-shrink-0 transition-colors hover:bg-accent-blue/10"></button>
<button class="w-8 h-8 rounded-full border-2 border-accent-blue/30 bg-transparent flex-shrink-0 transition-colors hover:bg-accent-blue/10"></button>
<button class="w-8 h-8 rounded-full border-2 border-accent-blue/30 bg-transparent flex-shrink-0 transition-colors hover:bg-accent-blue/10"></button>
<button class="w-8 h-8 rounded-full border-2 border-accent-blue/30 bg-transparent flex-shrink-0 transition-colors hover:bg-accent-blue/10"></button>
<button class="w-8 h-8 rounded-full border-2 border-accent-blue/30 bg-transparent flex-shrink-0 transition-colors hover:bg-accent-blue/10"></button>
<button class="w-8 h-8 rounded-full border-2 border-accent-blue/30 bg-transparent flex-shrink-0 transition-colors hover:bg-accent-blue/10"></button>
</div>
</div>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-organic p-6 mb-5 shadow-organic">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-accent-indigo text-xl">dark_mode</span>
<h2 class="text-xl font-bold tracking-tight">Sommeil</h2>
</div>
<div class="flex items-center gap-6">
<div class="sleep-ring-container flex-shrink-0 relative flex items-center justify-center">
<svg class="w-full h-full transform -rotate-90 absolute top-0 left-0" viewBox="0 0 100 100">
<circle class="sleep-ring-bg" cx="50" cy="50" r="42"></circle>
<circle class="sleep-ring sleep-ring-fg" cx="50" cy="50" r="42"></circle>
</svg>
<div class="text-center z-10">
<div class="text-2xl font-black text-accent-indigo leading-none tracking-tighter">7<span class="text-base">h</span> 30</div>
<div class="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-1 font-bold uppercase tracking-wider">Total</div>
</div>
</div>
<div class="flex-1 space-y-4">
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-accent-indigo"></div>
<div>
<div class="text-sm font-bold text-text-light dark:text-text-dark">Profond</div>
<div class="text-xs text-text-muted-light dark:text-text-muted-dark">2h 15m</div>
</div>
</div>
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-accent-blue"></div>
<div>
<div class="text-sm font-bold text-text-light dark:text-text-dark">Léger</div>
<div class="text-xs text-text-muted-light dark:text-text-muted-dark">4h 45m</div>
</div>
</div>
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-accent-orange"></div>
<div>
<div class="text-sm font-bold text-text-light dark:text-text-dark">Éveillé</div>
<div class="text-xs text-text-muted-light dark:text-text-muted-dark">30m</div>
</div>
</div>
</div>
</div>
</div>
<div class="bg-card-light dark:bg-card-dark rounded-organic p-6 mb-5 shadow-organic">
<div class="flex items-center gap-2 mb-6">
<span class="text-xl">🥗</span>
<h2 class="text-xl font-bold tracking-tight">Macronutriments</h2>
</div>
<div class="space-y-6">
<div>
<div class="flex justify-between items-end mb-2">
<span class="text-lg font-bold">Protéines</span>
<span class="text-xl font-bold text-accent-blue">0%</span>
</div>
<div class="h-3 bg-background-light dark:bg-gray-800 rounded-full overflow-hidden mb-1">
<div class="h-full bg-accent-blue rounded-full" style="width: 5%"></div>
</div>
<div class="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
0g / 140g
</div>
</div>
<div>
<div class="flex justify-between items-end mb-2">
<span class="text-lg font-bold">Glucides</span>
<span class="text-xl font-bold text-accent-green">0%</span>
</div>
<div class="h-3 bg-background-light dark:bg-gray-800 rounded-full overflow-hidden mb-1">
<div class="h-full bg-accent-green rounded-full" style="width: 5%"></div>
</div>
<div class="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
0g / 350g
</div>
</div>
<div>
<div class="flex justify-between items-end mb-2">
<span class="text-lg font-bold">Lipides</span>
<span class="text-xl font-bold text-accent-orange">0%</span>
</div>
<div class="h-3 bg-background-light dark:bg-gray-800 rounded-full overflow-hidden mb-1">
<div class="h-full bg-accent-orange rounded-full" style="width: 5%"></div>
</div>
<div class="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
0g / 93g
</div>
</div>
</div>
</div>
</div>
<nav class="fixed bottom-0 left-0 right-0 bg-card-light/90 dark:bg-card-dark/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 px-6 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<div class="flex justify-between items-end max-w-md mx-auto pb-6">
<a class="flex flex-col items-center gap-1 text-accent-green flex-1" href="#">
<span class="material-symbols-outlined text-2xl font-variation-settings-[FILL:1]">home</span>
<span class="text-[10px] font-medium">Résumé</span>
</a>
<a class="flex flex-col items-center gap-1 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors flex-1" href="#">
<span class="material-symbols-outlined text-2xl">calendar_month</span>
<span class="text-[10px] font-medium">Programme</span>
</a>
<a class="flex flex-col items-center gap-1 text-white transition-colors relative flex-1" href="#">
<div class="w-12 h-12 bg-gradient-to-br from-accent-green to-accent-blue rounded-full flex items-center justify-center shadow-lg transform -translate-y-1 mb-0.5">
<span class="material-symbols-outlined text-2xl">stacked_line_chart</span>
</div>
<span class="text-[10px] font-medium text-text-light dark:text-text-dark">Prog</span>
</a>
<a class="flex flex-col items-center gap-1 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors flex-1" href="#">
<span class="material-symbols-outlined text-2xl">restaurant</span>
<span class="text-[10px] font-medium">Nutrition</span>
</a>
<a class="flex flex-col items-center gap-1 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors flex-1" href="#">
<span class="material-symbols-outlined text-2xl">person</span>
<span class="text-[10px] font-medium">Profil</span>
</a>
</div>
</nav>
</body></html>