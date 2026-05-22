
Image 2.html
<!DOCTYPE html>

<html class="light" lang="fr"><head>
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
                    borderRadius: {
                        "DEFAULT": "1rem",
                        "lg": "1.75rem", // 28px as requested
                        "xl": "3rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; }
        .muscle-hot-high { fill: #ef4444; }
        .muscle-hot-mid { fill: #f97316; }
        .muscle-hot-low { fill: #fbbf24; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
<!-- Header -->
<header class="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4">
<div class="flex items-center justify-between max-w-md mx-auto">
<button class="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h1 class="text-lg font-bold tracking-tight">Anatomie de l'effort</h1>
<button class="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined">info</span>
</button>
</div>
</header>
<main class="flex-1 max-w-md mx-auto w-full px-4 pb-32">
<!-- View Toggle -->
<div class="mt-4 mb-6">
<div class="flex h-12 w-full items-center justify-center rounded-full bg-slate-200/50 dark:bg-slate-800 p-1">
<label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-4 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm transition-all duration-200">
<span class="text-sm font-semibold">Face</span>
<input checked="" class="hidden" name="view-toggle" type="radio"/>
</label>
<label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-4 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm transition-all duration-200 text-slate-500">
<span class="text-sm font-semibold">Dos</span>
<input class="hidden" name="view-toggle" type="radio"/>
</label>
</div>
</div>
<!-- Anatomical Visualization -->
<section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden mb-6">
<div class="relative p-8 flex justify-center items-center aspect-[3/4]">
<!-- Skeleton/Muscle Placeholder -->
<div class="w-full h-full bg-contain bg-center bg-no-repeat" data-alt="Anatomical muscle map diagram front view" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7xE2kTTnpGrZgi-oeTX4W4ZvcUBsZUo7x3NfrJLzhEtvR6NqUNK8z9n2Gq4NwoLBQLDMp0clNGgBLVA8-Zz1bTUmiAGDtNBw_bDLLLBKFK6REEwrU9yqkZLqBJzc3UugX6ZgG3-8Gg2vOCN7zxpBu__tzKW7sq5fh0Aa1yXqeoylNF7dTA3U7M_jgTMYqPcDal7rGZMPz0suQemKWyIjEhyxCv2oCmo2qpepo8GM3jltjNKGwip4s9N6lQ4zll7ubvdKuTonBQhFs')">
<!-- Overlay visualization hints -->
<div class="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
<div class="w-24 h-16 bg-red-500 rounded-full blur-2xl translate-y-[-80px]"></div>
<div class="w-20 h-32 bg-orange-500 rounded-full blur-2xl translate-y-[100px] translate-x-[-40px]"></div>
<div class="w-20 h-32 bg-orange-500 rounded-full blur-2xl translate-y-[100px] translate-x-[40px]"></div>
</div>
</div>
<!-- Legend Overlay -->
<div class="absolute bottom-4 right-4 flex flex-col gap-1">
<div class="flex items-center gap-2 text-[10px] font-medium text-slate-500">
<span class="size-2 rounded-full bg-red-500"></span> Élevé
                    </div>
<div class="flex items-center gap-2 text-[10px] font-medium text-slate-500">
<span class="size-2 rounded-full bg-orange-500"></span> Moyen
                    </div>
<div class="flex items-center gap-2 text-[10px] font-medium text-slate-500">
<span class="size-2 rounded-full bg-yellow-400"></span> Faible
                    </div>
</div>
</div>
</section>
<!-- Muscle Stats List -->
<section>
<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold">Répartition Musculaire</h3>
<span class="text-xs font-medium bg-primary/10 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full">7 derniers jours</span>
</div>
<div class="space-y-3">
<!-- Muscle Item -->
<div class="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
<div class="flex items-center gap-4">
<div class="size-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<span class="material-symbols-outlined">fitness_center</span>
</div>
<div>
<p class="font-bold text-sm">Pectoraux</p>
<p class="text-xs text-slate-500">18 Séries • Focus élevé</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-red-500">92%</p>
<div class="w-16 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-1">
<div class="h-full bg-red-500 rounded-full" style="width: 92%"></div>
</div>
</div>
</div>
<!-- Muscle Item -->
<div class="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
<div class="flex items-center gap-4">
<div class="size-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<span class="material-symbols-outlined">accessibility_new</span>
</div>
<div>
<p class="font-bold text-sm">Quadriceps</p>
<p class="text-xs text-slate-500">12 Séries • Modéré</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-orange-500">65%</p>
<div class="w-16 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-1">
<div class="h-full bg-orange-500 rounded-full" style="width: 65%"></div>
</div>
</div>
</div>
<!-- Muscle Item -->
<div class="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
<div class="flex items-center gap-4">
<div class="size-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-600">
<span class="material-symbols-outlined">sports_gymnastics</span>
</div>
<div>
<p class="font-bold text-sm">Deltoïdes</p>
<p class="text-xs text-slate-500">6 Séries • Entretien</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-yellow-600">38%</p>
<div class="w-16 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-1">
<div class="h-full bg-yellow-400 rounded-full" style="width: 38%"></div>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-2 pb-6 pt-3 z-20">
<div class="max-w-md mx-auto flex justify-around items-center">
<a class="flex flex-col items-center gap-1 group" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">dashboard</span>
<span class="text-[10px] font-medium text-slate-500">Résumé</span>
</a>
<a class="flex flex-col items-center gap-1 group" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">calendar_month</span>
<span class="text-[10px] font-medium text-slate-500">Programme</span>
</a>
<a class="flex flex-col items-center gap-1 group" href="#">
<div class="relative">
<span class="material-symbols-outlined text-primary fill-[1]">query_stats</span>
<span class="absolute -top-1 -right-1 flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
</div>
<span class="text-[10px] font-bold text-slate-900 dark:text-white">Prog</span>
</a>
<a class="flex flex-col items-center gap-1 group" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">restaurant</span>
<span class="text-[10px] font-medium text-slate-500">Nutrition</span>
</a>
<a class="flex flex-col items-center gap-1 group" href="#">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">person</span>
<span class="text-[10px] font-medium text-slate-500">Profil</span>
</a>
</div>
</nav>
</body></html>