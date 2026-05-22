<!DOCTYPE html>

<html lang="fr"><head>
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
<title>Créer un Programme - Fitness App</title>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
<div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-24">
<!-- Header -->
<div class="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 justify-between border-b border-slate-200 dark:border-slate-800">
<button class="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Nouveau Programme</h2>
</div>
<!-- Hero Image Section -->
<div class="px-4 py-4">
<div class="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 shadow-lg">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Powerful bodybuilder lifting heavy dumbbells in a dark modern gym" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7k0ZJlJtwxAxb9-vNT29uxJeNIqNgTh9mZdMmaqv20Lpcv4SMlH79WscBRLgEsp8TzL39LzFeaDG3dmU_IoGwJUvTUXaqGUbkJGRPJlHHMIYgrQBTM6zX0WOMLMLEKty30RQd-ODcgQWQPmPptikYIFGiind9gz5MoWQ8a_I9x44UpecdT9an2g3Pm2V4j7cxEuGAkuUpzo-ftq9DolCSeh8uZuAyxBDMYMBEzM7XXbINZnb4p_S6tKFx76kDo3BmhJK13s92c_Jo')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
<span class="text-primary text-xs font-bold uppercase tracking-widest mb-1">Étape 1 sur 3</span>
<h1 class="text-white text-2xl font-black tracking-tight leading-none uppercase">Définir les bases</h1>
</div>
</div>
</div>
<!-- Program Name Input -->
<div class="px-4 py-3">
<label class="flex flex-col gap-2">
<span class="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider">Nom du Programme</span>
<input class="form-input flex w-full rounded-xl text-slate-900 dark:text-slate-100 border-none bg-white dark:bg-slate-800 shadow-sm focus:ring-2 focus:ring-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 text-base font-medium" placeholder="Ex: Force Athlétique Hivernale" value=""/>
</label>
</div>
<!-- Program Type Grid -->
<div class="px-4 py-6">
<h3 class="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider mb-4">Structure d'entraînement</h3>
<div class="grid grid-cols-2 gap-3">
<button class="flex flex-col items-center justify-center p-4 bg-primary text-slate-900 rounded-xl border-2 border-primary shadow-md">
<span class="material-symbols-outlined text-3xl mb-2">layers</span>
<span class="font-bold text-sm">PPL (Push/Pull)</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl border-2 border-transparent hover:border-primary/50 transition-all shadow-sm">
<span class="material-symbols-outlined text-3xl mb-2">accessibility_new</span>
<span class="font-bold text-sm">Full Body</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl border-2 border-transparent hover:border-primary/50 transition-all shadow-sm">
<span class="material-symbols-outlined text-3xl mb-2">splitscreen</span>
<span class="font-bold text-sm">Upper / Lower</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl border-2 border-transparent hover:border-primary/50 transition-all shadow-sm">
<span class="material-symbols-outlined text-3xl mb-2">star</span>
<span class="font-bold text-sm">Bro Split</span>
</button>
</div>
</div>
<!-- Duration & Frequency -->
<div class="px-4 py-4 space-y-6">
<div>
<h3 class="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider mb-3">Durée du cycle</h3>
<div class="flex flex-wrap gap-2">
<button class="px-5 py-2 rounded-full bg-primary/20 dark:bg-primary/10 text-primary border border-primary/30 font-bold text-sm">4 Semaines</button>
<button class="px-5 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-bold text-sm">8 Semaines</button>
<button class="px-5 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-bold text-sm">12 Semaines</button>
</div>
</div>
<div>
<h3 class="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider mb-3">Fréquence hebdomadaire</h3>
<div class="flex flex-wrap gap-2">
<button class="px-5 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-bold text-sm">3 Jours</button>
<button class="px-5 py-2 rounded-full bg-primary/20 dark:bg-primary/10 text-primary border border-primary/30 font-bold text-sm">4 Jours</button>
<button class="px-5 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-bold text-sm">5 Jours</button>
<button class="px-5 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-bold text-sm">6 Jours</button>
</div>
</div>
</div>
<!-- Goal Selection -->
<div class="px-4 py-6">
<h3 class="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider mb-4">Objectif Principal</h3>
<div class="space-y-3">
<button class="w-full flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-primary shadow-sm">
<div class="bg-primary/20 p-2 rounded-lg text-primary">
<span class="material-symbols-outlined">fitness_center</span>
</div>
<div class="text-left">
<p class="font-bold text-slate-900 dark:text-slate-100 leading-tight">Hypertrophie</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Volume musculaire maximal</p>
</div>
</button>
<button class="w-full flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all shadow-sm">
<div class="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg text-slate-600 dark:text-slate-400">
<span class="material-symbols-outlined">bolt</span>
</div>
<div class="text-left">
<p class="font-bold text-slate-900 dark:text-slate-100 leading-tight">Force Pure</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Force maximale sur les mouvements de base</p>
</div>
</button>
<button class="w-full flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all shadow-sm">
<div class="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg text-slate-600 dark:text-slate-400">
<span class="material-symbols-outlined">local_fire_department</span>
</div>
<div class="text-left">
<p class="font-bold text-slate-900 dark:text-slate-100 leading-tight">Sèche &amp; Définition</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Maintenir le muscle, brûler les graisses</p>
</div>
</button>
</div>
</div>
<!-- Bottom CTA -->
<div class="px-4 py-4 pb-28">
<button class="w-full py-4 bg-primary text-slate-900 font-black uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">
                Étape Suivante
            </button>
</div>
<!-- Bottom Navigation Bar -->
<div class="fixed bottom-0 left-0 right-0 z-50 flex border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pb-6 pt-3">
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">dashboard</span>
<p class="text-[10px] font-bold leading-normal tracking-wide uppercase">Résumé</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">calendar_today</span>
<p class="text-[10px] font-bold leading-normal tracking-wide uppercase">Programme</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">trending_up</span>
<p class="text-[10px] font-bold leading-normal tracking-wide uppercase">Prog</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">restaurant</span>
<p class="text-[10px] font-bold leading-normal tracking-wide uppercase">Nutrition</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">person</span>
<p class="text-[10px] font-bold leading-normal tracking-wide uppercase">Profil</p>
</a>
</div>
</div>
</body></html>