<!DOCTYPE html>
<html lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Mes Programmes</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
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
                        "text-light": "#111827",
                        "text-muted-light": "#6b7280",
                        "accent-blue": "#0ea5e9",
                        "accent-orange": "#f97316",
                        "accent-red": "#ef4444"
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
        .gradient-border {
            position: relative;
            background: #fff;
            background-clip: padding-box;
            border: 2px solid transparent;
            border-radius: 28px;
        }
        .gradient-border::before {
            content: "";
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -2px;
            border-radius: inherit;
            background: linear-gradient(to right, #0ea5e9, #84cc16);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-gray-50 text-text-light min-h-screen pb-24">
<main class="max-w-md mx-auto p-4 space-y-6">
<header class="flex justify-between items-center py-2">
<h1 class="text-3xl font-extrabold tracking-tight text-text-light">Mes Programmes</h1>
<button class="w-12 h-12 rounded-full bg-gradient-to-tr from-accent-blue to-primary flex items-center justify-center text-white shadow-lg transition-transform active:scale-95">
<span class="material-icons text-3xl">add</span>
</button>
</header>
<section class="space-y-4">
<h2 class="text-xl font-bold text-text-light px-1">Programmes Actifs</h2>
<div class="relative bg-white rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
<img alt="Workout" class="absolute inset-0 w-full h-full object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-gprEf0Sp0cDoZ6dinnT1GQn2411-AfAb6osgFI1QcFj5O9bWMfXQ0V6Hk8Q2wKmqGogLSoYS3KdzsbtfgvFPhFVXihWxiHoIfuQZB1TQas9rGuohVsFwLS0vGTC0LbFON9LNu7DkKU2AygTwUpyGDhJxIv2RLkTLzlXEQsbCoIiClKaqRzCtkEm5L5WDYFNiduh841uC6H7ruAOkeqBFb7IFbvPFBTguXyPgjz75Zftnr9b-DGxffsge9rLjfc7hukQtJxYXmFip"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div class="relative p-6 flex flex-col h-48 justify-end text-white">
<div class="flex justify-between items-end mb-2">
<div>
<span class="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2 uppercase tracking-wide">En cours</span>
<h3 class="text-2xl font-extrabold">Hypertrophie</h3>
</div>
<div class="text-right">
<span class="text-sm font-medium opacity-90 block">Semaine 2 sur 8</span>
</div>
</div>
<div class="w-full bg-white/30 rounded-full h-2 mt-2">
<div class="bg-primary h-2 rounded-full" style="width: 25%"></div>
</div>
</div>
</div>
</section>
<section class="space-y-4 pt-2">
<div class="gradient-border p-5 cursor-pointer hover:scale-[1.02] transition-transform shadow-md">
<div class="flex items-center gap-4">
<div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-primary/20 flex items-center justify-center">
<span class="material-icons text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-primary text-3xl">smart_toy</span>
</div>
<div>
<h3 class="text-lg font-bold text-text-light">Création Assistée (IA)</h3>
<p class="text-sm text-text-muted-light">Générez un programme sur mesure</p>
</div>
<span class="material-icons text-gray-400 ml-auto">chevron_right</span>
</div>
</div>
</section>
<section class="space-y-4">
<div class="flex justify-between items-center px-1">
<h2 class="text-xl font-bold text-text-light">Bibliothèque</h2>
<button class="text-accent-blue text-sm font-semibold">Voir tout</button>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="bg-white rounded-[24px] p-4 border border-gray-100 shadow-sm flex flex-col gap-3">
<div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-accent-orange">
<span class="material-icons">fitness_center</span>
</div>
<div>
<h4 class="font-bold text-text-light">Full Body</h4>
<p class="text-xs text-text-muted-light">3 jours / sem</p>
</div>
</div>
<div class="bg-white rounded-[24px] p-4 border border-gray-100 shadow-sm flex flex-col gap-3">
<div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-accent-blue">
<span class="material-icons">accessibility_new</span>
</div>
<div>
<h4 class="font-bold text-text-light">Push Pull Legs</h4>
<p class="text-xs text-text-muted-light">6 jours / sem</p>
</div>
</div>
<div class="bg-white rounded-[24px] p-4 border border-gray-100 shadow-sm flex flex-col gap-3">
<div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-accent-red">
<span class="material-icons">directions_run</span>
</div>
<div>
<h4 class="font-bold text-text-light">Cardio HIIT</h4>
<p class="text-xs text-text-muted-light">2 jours / sem</p>
</div>
</div>
<div class="bg-white rounded-[24px] p-4 border border-gray-100 shadow-sm flex flex-col gap-3">
<div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
<span class="material-icons">self_improvement</span>
</div>
<div>
<h4 class="font-bold text-text-light">Mobilité</h4>
<p class="text-xs text-text-muted-light">Quotidien</p>
</div>
</div>
</div>
</section>
<section class="mt-8 mb-6 text-center">
<button class="inline-flex items-center gap-2 px-6 py-3 bg-surface-hover-light rounded-full text-text-muted-light hover:text-text-light hover:bg-gray-200 transition-colors">
<span class="material-icons">bar_chart</span>
<span class="font-semibold text-sm">Voir l'évolution du poids</span>
</button>
</section>
</main>
<nav class="fixed bottom-0 left-0 right-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe pt-2 px-6 flex justify-between items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] max-w-md mx-auto">
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors py-2 px-1">
<span class="material-icons">dashboard</span>
<span class="text-[10px] font-medium">Résumé</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors py-2 px-1">
<span class="material-icons">fitness_center</span>
<span class="text-[10px] font-medium">Programme</span>
</button>
<button class="flex flex-col items-center gap-1 py-2 px-1 relative">
<div class="absolute -top-4 w-12 h-12 rounded-full bg-gradient-to-tr from-accent-blue to-primary flex items-center justify-center text-white shadow-lg shadow-accent-blue/30 border-4 border-white">
<span class="material-icons">view_list</span>
</div>
<span class="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-primary mt-6">Prog</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors py-2 px-1">
<span class="material-icons">restaurant</span>
<span class="text-[10px] font-medium">Nutrition</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors py-2 px-1">
<span class="material-icons">person</span>
<span class="text-[10px] font-medium">Profil</span>
</button>
</nav>
</body></html>