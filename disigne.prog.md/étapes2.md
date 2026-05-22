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
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-24">
<!-- Header Section -->
<header class="sticky top-0 z-30 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 pt-6 pb-4">
<div class="flex items-center justify-between mb-6">
<button class="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<h1 class="text-xl font-bold tracking-tight">Bibliothèque d'Exercices</h1>
<button class="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-primary">
<span class="material-symbols-outlined text-2xl">filter_list</span>
</button>
</div>
<!-- Search Bar -->
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400">search</span>
</div>
<input class="block w-full pl-11 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-400" placeholder="Rechercher un exercice (ex: Développé couché)" type="text"/>
</div>
</header>
<main class="px-6 space-y-8 mt-4">
<!-- Featured Muscle Groups Grid -->
<section>
<div class="flex items-center justify-between mb-4">
<h2 class="text-lg font-bold">Groupes Musculaires</h2>
<button class="text-sm font-semibold text-primary">Tout voir</button>
</div>
<div class="grid grid-cols-2 gap-4">
<!-- Card 1 -->
<div class="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Professional fitness athlete training chest muscles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzTwi2ssLFsqKFNdMfW618fOTFFy3QwL6TJN1MkDkVFpcQRMol30blGEgAbLWQP4ubeDjFaQCtfPHXsnQS7NHklFrw_u5AtL3H8RaRViDP8ERC9bhRErrJVcTrdvg6JsbVuJk6qjUFsWMZ_ZWzfTKmgn_0oW4opIkAvb8s7ZURv2iB4P24rW4ljqg4jNGYhI9RsfVrG4WNZLIBW13WdIpXiAANi60AOwSWp2g5_GdWshsM4Z9zMG27zrPN_zslcHTKZK-eYKGWJIpb"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-4 left-4">
<p class="text-white font-bold text-lg">Pectoraux</p>
<p class="text-white/70 text-xs">24 exercices</p>
</div>
</div>
<!-- Card 2 -->
<div class="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close up of well defined back muscles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkgb6mnSQyXx9zxkrTuKVG3AA9GdjbFpqdqlXxx7ajCFtgjMxke5L1lIAI_BjPmeCs8Q_qSLi5WVAlTzMOxlaiB2x9xmVwFmZ3JqJqEDtroyyZyHl0lXySw6UvHB927DwsYZNY96Mo93OC1VdXnQUz_N1gRaEuoZ5VxFsAyXqPKd9HORrlG8THBNHgZhcLxx5OZmz7vHuH5BDstJuxTn9mMiyjgQ0poZt4KTqtPRHzTeAIgQErKicXEVrOJp8WrK777Zx6bDBQfc4v"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-4 left-4">
<p class="text-white font-bold text-lg">Dos</p>
<p class="text-white/70 text-xs">32 exercices</p>
</div>
</div>
<!-- Card 3 -->
<div class="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Athlete showing defined shoulder and arm muscles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0UnSZgE8WLV7tok3vBvNc5SMpspUnJVgUFcaT4uok-bEpbq4cDZVLCEGz8eObQGEj6xJ_pROPgI926LCnYURy5wK5MRL3y4ZoAYtKNXdL0iwFFs50PsB0bB14_7tLNhmdXkYMwiy-hw7f2Nec7ajWd-b7rKXlTazG6Df5ZPqSQWzF9E8W08gtIFTTanIQ8NF6dJbWjdu5wCqAITg-UvwQ6xxIW0KRTXkN_Kfqkdu5RP9F8uN6HgURS9u_snlYQtZ2jpLnIMXkQJDz"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-4 left-4">
<p class="text-white font-bold text-lg">Épaules</p>
<p class="text-white/70 text-xs">18 exercices</p>
</div>
</div>
<!-- Card 4 -->
<div class="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Muscular legs of a sprinter in starting position" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOcUj4VzgYkEJIqXEIPol8nhmFAQFsvg_c-c3ZEqGlBo7z0FiOeWQ9FP1xTQHnjXMLFp_NcTv03c7N1hOnTlzSujiOTxWJ8K-PQhXD5YOkGhw2EKfeuCWj9Y8kOJEbSVAdxCWy3BaC7OIarBmLF8lolygY1oN0MQS2Xr6Vi4xsyhR5uHf_YBTHp_kNY9URr9jtADoNUrt2-24l4W9COwRHsTvlBYEUzQFly93KXvUj7z4ZQu5uZgFKlIXVuPHXxfGLHriFoEk2Mna-"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-4 left-4">
<p class="text-white font-bold text-lg">Jambes</p>
<p class="text-white/70 text-xs">42 exercices</p>
</div>
</div>
</div>
</section>
<!-- Popular Exercises List -->
<section class="pb-8">
<div class="flex items-center justify-between mb-4">
<h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">Populaires cette semaine</h2>
</div>
<div class="space-y-4">
<!-- Exercise Item 1 -->
<div class="flex items-center gap-4 p-3 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
<div class="size-16 rounded-xl overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="Barbell bench press demonstration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFgSdMiIwB3Be6CAM3IKIodszGB-t9tvNSE2CwXTeLj9idVC2EnyGa9_jrvLb5LH3ZMjC0mgJYZhJiG0NUu8j7PjI6W5y-SakBEgU-QNYIxlZJ57Hn1obCcXc28wxkVOfzN3GhyOh3S9EiAkR0l_GrozIhPpgJ3yIabxYqWzQfeM_TkYb3PsbWFA313mDeKucU9fpP6ny7RH8QABj9mCKjlurGels2e0MB20R_rGy3bPuB2i9gYHkz-PdeWMgJSaygSLQvjCC9yO9s"/>
</div>
<div class="flex-1">
<h3 class="font-semibold text-slate-900 dark:text-slate-100">Développé Couché</h3>
<div class="flex items-center gap-2 mt-1">
<span class="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md">Pectoraux</span>
<span class="text-slate-400 text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-sm leading-none">fitness_center</span>
                                Barre
                            </span>
</div>
</div>
<button class="size-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined text-xl">add_circle</span>
</button>
</div>
<!-- Exercise Item 2 -->
<div class="flex items-center gap-4 p-3 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
<div class="size-16 rounded-xl overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="Squat exercise with barbell" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1KMe9Fojk8PrZ3d2WyK_ywqXjnQZVz_7zQ-6WzKqlG7pcMUBbGZ_KvN2iFheKvClgcEGBt4E9UA5g1cMuF9AICV1Dwlfnc6KZZ7QMBcxUufPPyZrRHgwT_y6aLmK7Xh1PkwbAO34xEp_t8_TRCESDSd3xoxzZjf_4hUoKBP4CkcRjZ0W2J8wLLn_nWjNwOcew_R2pWBNFIPiAMxos20Rsvb9l2BC3T59J9MSbzz4RDXARdpZOIYQJ6qyo949rCIKegVceytEpUQ8g"/>
</div>
<div class="flex-1">
<h3 class="font-semibold text-slate-900 dark:text-slate-100">Squat Arrière</h3>
<div class="flex items-center gap-2 mt-1">
<span class="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md">Jambes</span>
<span class="text-slate-400 text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-sm leading-none">fitness_center</span>
                                Barre
                            </span>
</div>
</div>
<button class="size-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined text-xl">add_circle</span>
</button>
</div>
<!-- Exercise Item 3 -->
<div class="flex items-center gap-4 p-3 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
<div class="size-16 rounded-xl overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="Dumbbell lateral raise movement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkwaUaXP1Sa6FbUIEUQXMKU2Gq967Y-yOJr1RowvVNVXnpqIqNQ2H4-C53C6rAPax5U3r5twa067KATl_Jx6I2kY4fZFW1UnhF0HYstjnyDrn2Y3_kUdXL0BSYIzBUWvSV-VupOsrWoPqzz6uYSfQK_gTpYweo2gFFweYn9jxUL6CpIU2lpG8n4f-J-RNcigf2q22XJKzE02QJHnI3X7jiBu7H7FvTeZu16ieNCCSlXAJ-MZSas0y7y5pO7Hg1UHBMDppFfEI_EOqv"/>
</div>
<div class="flex-1">
<h3 class="font-semibold text-slate-900 dark:text-slate-100">Élévations Latérales</h3>
<div class="flex items-center gap-2 mt-1">
<span class="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md">Épaules</span>
<span class="text-slate-400 text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-sm leading-none">fitness_center</span>
                                Haltères
                            </span>
</div>
</div>
<button class="size-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined text-xl">add_circle</span>
</button>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-2 pb-6 pt-2">
<div class="flex items-center justify-around max-w-lg mx-auto">
<a class="flex flex-col items-center gap-1 p-2 text-slate-400" href="#">
<span class="material-symbols-outlined text-[26px]">grid_view</span>
<span class="text-[10px] font-medium leading-none">Dashboard</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 text-slate-400" href="#">
<span class="material-symbols-outlined text-[26px]">calendar_today</span>
<span class="text-[10px] font-medium leading-none">Programmes</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 text-primary" href="#">
<span class="material-symbols-outlined text-[28px] fill-1">fitness_center</span>
<span class="text-[10px] font-bold leading-none">Exercices</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 text-slate-400" href="#">
<span class="material-symbols-outlined text-[26px]">restaurant</span>
<span class="text-[10px] font-medium leading-none">Nutrition</span>
</a>
<a class="flex flex-col items-center gap-1 p-2 text-slate-400" href="#">
<span class="material-symbols-outlined text-[26px]">person</span>
<span class="text-[10px] font-medium leading-none">Profil</span>
</a>
</div>
</nav>
<style>
        .fill-1 { font-variation-settings: 'FILL' 1; }
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    </style>
</body></html>