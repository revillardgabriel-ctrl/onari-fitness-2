<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#06b6d4", /* Cyan accent */
                        "background-light": "#ffffff",
                        "background-dark": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Public Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "0.75rem", "xl": "1rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body { font-family: 'Public Sans', sans-serif; }
        .muscle-tag { @apply px-3 py-1 rounded-full text-xs font-semibold; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display">
<!-- Header / Top Navigation -->
<header class="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
<div class="flex items-center justify-between p-4 max-w-2xl mx-auto">
<button class="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h1 class="text-lg font-bold tracking-tight">Détails Exercice</h1>
<a class="flex items-center gap-1 bg-[#FF0000] text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition-opacity" href="#">
<span class="material-symbols-outlined text-base">play_circle</span>
                TUTO
            </a>
</div>
</header>
<main class="max-w-2xl mx-auto pb-32">
<!-- Hero Section -->
<section class="relative">
<div class="w-full aspect-video overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A person performing a heavy bench press in a modern gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_V-WMcqt6kMFJj-TMpsX7zbZLfJmcIHI24yi2G5xUipf3fVew_7ib3EMUcn1RWglLx0S1LxsHypPnfzZ67gQ2RUMNglvlCv4hNhoHHBQV01YXzBOcCXtwpvPYcyTZmLdLkNwd3de2YNRmXizwirV8K_b7SwjvrJ_iJIfDTqcV5y2geCzj7k6yS7G6eDfuOub5nDokAjzcsdhUS-cDXS3Go8CWRSAf1miBejGenlPQPPDoBEAmu35HL6QOyn4RhRhVrAL3Crsxx12Y"/>
</div>
<div class="px-4 -mt-8 relative z-10">
<div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800">
<div class="flex justify-between items-start mb-2">
<h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Développé Couché</h2>
<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Intermédiaire</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        L'exercice roi pour le développement de la force et de la masse musculaire du haut du corps.
                    </p>
</div>
</div>
</section>
<!-- Anatomy Section -->
<section class="px-4 mt-8">
<h3 class="text-xl font-bold mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">accessibility_new</span>
                Anatomie Musculaire
            </h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
<div class="relative aspect-square bg-white dark:bg-slate-900 rounded-lg p-4 flex items-center justify-center">
<img class="max-h-full opacity-80 mix-blend-multiply dark:mix-blend-normal" data-alt="Anatomical diagram of human torso muscles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWwDJBPqtPDpzzcxS0N9aX5qJz2FWTZonvD2aADi-hSAVAVpWpRq9KpHS_vqGZqUZ1OJiiJEsPgqe1_wWAyOt6p54PcejOtJUYwmO9wdQVQnD3mBJsOYUHeNEUWxos7tRzAhxuS7DjFh8438h_Qw3xd3a5EoPnSBRfxD-xboA53XFGItkq91NjikqbZnM1kGeY2RljSh-BZEI6gXQffAqk0OVTtsyGjAqaDQVi5MQuoooVqXmOpVvwqdBd-CEp3wx0QJnE2B0AjS_i"/>
</div>
<div class="flex flex-col justify-center space-y-4">
<div>
<p class="text-xs font-bold text-slate-400 uppercase mb-2">Muscle Principal</p>
<div class="flex flex-wrap gap-2">
<span class="bg-primary text-white muscle-tag">Grand Pectoral</span>
</div>
</div>
<div>
<p class="text-xs font-bold text-slate-400 uppercase mb-2">Muscles Secondaires</p>
<div class="flex flex-wrap gap-2">
<span class="bg-primary/20 text-primary muscle-tag">Triceps Brachial</span>
<span class="bg-primary/20 text-primary muscle-tag">Deltoïde Antérieur</span>
<span class="bg-primary/20 text-primary muscle-tag">Dentelé Antérieur</span>
</div>
</div>
</div>
</div>
</section>
<!-- Description Section -->
<section class="px-4 mt-8">
<h3 class="text-xl font-bold mb-3">Description</h3>
<p class="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "Le développé couché est bien plus qu'un simple exercice de poussée. C'est la référence ultime pour évaluer la puissance du torse. Maîtriser ce mouvement polyarticulaire demande une synchronisation parfaite entre stabilité, respiration et force brute."
            </p>
</section>
<!-- Rationale Section -->
<section class="px-4 mt-8">
<div class="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
<h3 class="text-emerald-800 dark:text-emerald-400 font-bold text-lg mb-2 flex items-center gap-2">
<span class="material-symbols-outlined">lightbulb</span>
                    Pourquoi faire cet exercice ?
                </h3>
<ul class="space-y-3 text-emerald-900/80 dark:text-emerald-300/80 text-sm">
<li class="flex gap-2">
<span class="material-symbols-outlined text-emerald-500 text-sm mt-0.5">check_circle</span>
<span><strong>Impact Polyarticulaire :</strong> Sollicite plusieurs groupes musculaires simultanément pour une efficacité maximale.</span>
</li>
<li class="flex gap-2">
<span class="material-symbols-outlined text-emerald-500 text-sm mt-0.5">check_circle</span>
<span><strong>Hypertrophie :</strong> Favorise une libération hormonale optimale pour la croissance musculaire globale.</span>
</li>
<li class="flex gap-2">
<span class="material-symbols-outlined text-emerald-500 text-sm mt-0.5">check_circle</span>
<span><strong>Force Transférable :</strong> Développe une poussée horizontale utile dans de nombreux sports et gestes quotidiens.</span>
</li>
</ul>
</div>
</section>
<!-- Analysis Section -->
<section class="px-4 mt-8">
<div class="grid grid-cols-2 gap-4">
<div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
<h4 class="text-primary font-bold text-sm mb-3 flex items-center gap-2">
<span class="material-symbols-outlined text-base">add_circle</span>
                        Points Forts
                    </h4>
<ul class="text-xs space-y-2 text-slate-500 dark:text-slate-400">
<li>• Gain de masse rapide</li>
<li>• Force explosive</li>
<li>• Progression linéaire aisée</li>
</ul>
</div>
<div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
<h4 class="text-rose-500 font-bold text-sm mb-3 flex items-center gap-2">
<span class="material-symbols-outlined text-base">warning</span>
                        Points Faibles
                    </h4>
<ul class="text-xs space-y-2 text-slate-500 dark:text-slate-400">
<li>• Stress articulaire (épaules)</li>
<li>• Sécurité sans partenaire</li>
<li>• Risque de déséquilibre si seul</li>
</ul>
</div>
</div>
</section>
<!-- Execution Guide -->
<section class="px-4 mt-8">
<h3 class="text-xl font-bold mb-4">Guide d'Exécution</h3>
<div class="space-y-6">
<!-- Step 1 -->
<div class="flex gap-4">
<div class="flex-shrink-0 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
<div>
<h4 class="font-bold text-slate-900 dark:text-white mb-1">Installation (Setup)</h4>
<p class="text-sm text-slate-600 dark:text-slate-400">Allongez-vous sur le banc, les yeux sous la barre. Pieds bien à plat au sol, omoplates serrées et dos légèrement cambré.</p>
</div>
</div>
<!-- Step 2 -->
<div class="flex gap-4">
<div class="flex-shrink-0 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
<div>
<h4 class="font-bold text-slate-900 dark:text-white mb-1">La Descente</h4>
<p class="text-sm text-slate-600 dark:text-slate-400">Inspirez et descendez la barre de façon contrôlée jusqu'au milieu de la poitrine (juste au-dessus des mamelons).</p>
</div>
</div>
<!-- Step 3 -->
<div class="flex gap-4">
<div class="flex-shrink-0 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
<div>
<h4 class="font-bold text-slate-900 dark:text-white mb-1">La Poussée (Press)</h4>
<p class="text-sm text-slate-600 dark:text-slate-400">Expirez en poussant la barre vers le haut avec puissance, en gardant les coudes légèrement rentrés vers l'intérieur.</p>
</div>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pb-safe z-50">
<div class="flex max-w-2xl mx-auto px-2 py-2">
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined">info</span>
<p class="text-[10px] font-bold uppercase tracking-tighter">Résumé</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">calendar_today</span>
<p class="text-[10px] font-medium uppercase tracking-tighter">Programme</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">fitness_center</span>
<p class="text-[10px] font-medium uppercase tracking-tighter">PROG</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">restaurant</span>
<p class="text-[10px] font-medium uppercase tracking-tighter">Nutrition</p>
</a>
<a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500" href="#">
<span class="material-symbols-outlined">person</span>
<p class="text-[10px] font-medium uppercase tracking-tighter">Profil</p>
</a>
</div>
</nav>
</body></html>