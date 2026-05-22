<!DOCTYPE html>

<html lang="fr"><head><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Configuration de l'exercice - Fitness App</title>
<!-- BEGIN: Tailwind CSS & Config -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#0ddff2',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            'md': '0.375rem',
            'lg': '0.5rem',
            'xl': '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            'full': '9999px',
          }
        }
      }
    }
  </script>
<!-- END: Tailwind CSS & Config -->
<style data-purpose="typography">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
  </style>
<style data-purpose="layout">
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  </style>
</head>
<body class="bg-white text-slate-900 min-h-screen pb-32">
<!-- BEGIN: Navigation Header -->
<header class="sticky top-0 bg-white/80 backdrop-blur-md z-50 px-4 pt-6 pb-2">
<div class="flex items-center justify-between mb-4">
<button class="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors" data-purpose="back-button">
<svg fill="none" height="24" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
</button>
<div class="flex-1 px-8">
<div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div class="h-full bg-primary w-4/5 rounded-full"></div>
</div>
<p class="text-[10px] text-center font-bold text-slate-400 mt-2 uppercase tracking-widest">Étape 4 sur 5</p>
</div>
<div class="w-10"></div> <!-- Spacer for balance -->
</div>
</header>
<!-- END: Navigation Header -->
<main class="px-4 space-y-8">
<!-- BEGIN: Exercise Title Section -->
<section class="space-y-1" id="exercise-info">
<h1 class="text-3xl font-extrabold tracking-tight">Développé incliné</h1>
<div class="flex gap-2">
<span class="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full">Pectoraux (Haut)</span>
<span class="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full">Triceps</span>
</div>
</section>
<!-- END: Exercise Title Section -->
<!-- BEGIN: Set Count Selector -->
<section class="space-y-3" id="sets-count">
<h2 class="text-sm font-bold text-slate-400 uppercase tracking-wider">Nombre de séries</h2>
<div class="flex justify-between items-center bg-slate-50 p-1 rounded-full">
<button class="w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold text-slate-400">1</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold text-slate-400">2</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 font-bold">3</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold text-slate-400">4</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold text-slate-400">5</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold text-slate-400">6</button>
</div>
</section>
<!-- END: Set Count Selector -->
<!-- BEGIN: Set Configuration Cards -->
<section class="space-y-4" id="sets-configuration">
<!-- Card Template -->
<div class="bg-white border border-slate-100 shadow-sm rounded-3xl p-5 space-y-4" data-purpose="set-card">
<h3 class="font-bold text-lg">Série 1</h3>
<div class="grid grid-cols-2 gap-4">
<!-- Reps -->
<div class="space-y-2">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Répétitions</p>
<div class="flex items-center justify-between bg-slate-50 rounded-2xl p-1">
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">-</button>
<span class="font-bold text-slate-700">8 - 12</span>
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">+</button>
</div>
</div>
<!-- RPE -->
<div class="space-y-2">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Intensité (RPE)</p>
<div class="flex items-center justify-between bg-slate-50 rounded-2xl p-1">
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">-</button>
<span class="font-bold text-slate-700">8</span>
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">+</button>
</div>
</div>
</div>
<div class="pt-2 space-y-3 border-t border-slate-50 mt-2">
<div class="flex justify-between items-center">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ajustement précis RPE</p>
<span class="text-sm font-black text-primary bg-primary/10 px-2 py-0.5 rounded-lg">8.0</span>
</div>
<input class="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" max="10" min="0" step="0.5" type="range" value="8"/>
<div class="flex justify-between px-1">
<span class="text-[8px] font-bold text-slate-300">Facile</span>
<span class="text-[8px] font-bold text-slate-300">Échec</span>
</div>
</div></div>
<div class="bg-white border border-slate-100 shadow-sm rounded-3xl p-5 space-y-4" data-purpose="set-card">
<h3 class="font-bold text-lg">Série 2</h3>
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Répétitions</p>
<div class="flex items-center justify-between bg-slate-50 rounded-2xl p-1">
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">-</button>
<span class="font-bold text-slate-700">8 - 12</span>
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">+</button>
</div>
</div>
<div class="space-y-2">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Intensité (RPE)</p>
<div class="flex items-center justify-between bg-slate-50 rounded-2xl p-1">
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">-</button>
<span class="font-bold text-slate-700">8</span>
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">+</button>
</div>
</div>
</div>
<div class="pt-2 space-y-3 border-t border-slate-50 mt-2">
<div class="flex justify-between items-center">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ajustement précis RPE</p>
<span class="text-sm font-black text-primary bg-primary/10 px-2 py-0.5 rounded-lg">8.0</span>
</div>
<input class="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" max="10" min="0" step="0.5" type="range" value="8"/>
<div class="flex justify-between px-1">
<span class="text-[8px] font-bold text-slate-300">Facile</span>
<span class="text-[8px] font-bold text-slate-300">Échec</span>
</div>
</div></div>
<div class="bg-white border border-slate-100 shadow-sm rounded-3xl p-5 space-y-4" data-purpose="set-card">
<h3 class="font-bold text-lg text-primary flex items-center gap-2">
          Série 3
          <span class="text-[10px] px-2 py-0.5 bg-primary/10 rounded-full">Dernière</span>
</h3>
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Répétitions</p>
<div class="flex items-center justify-between bg-slate-50 rounded-2xl p-1">
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">-</button>
<span class="font-bold text-slate-700">AMRAP</span>
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">+</button>
</div>
</div>
<div class="space-y-2">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Intensité (RPE)</p>
<div class="flex items-center justify-between bg-slate-50 rounded-2xl p-1">
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">-</button>
<span class="font-bold text-slate-700">10</span>
<button class="w-8 h-8 flex items-center justify-center bg-white rounded-xl shadow-sm">+</button>
</div>
</div>
</div>
<div class="pt-2 space-y-3 border-t border-slate-50 mt-2">
<div class="flex justify-between items-center">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ajustement précis RPE</p>
<span class="text-sm font-black text-primary bg-primary/10 px-2 py-0.5 rounded-lg">10.0</span>
</div>
<input class="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" max="10" min="0" step="0.5" type="range" value="10"/>
<div class="flex justify-between px-1">
<span class="text-[8px] font-bold text-slate-300">Facile</span>
<span class="text-[8px] font-bold text-slate-300">Échec</span>
</div>
</div></div>
</section>
<!-- END: Set Configuration Cards -->
<!-- BEGIN: Rest Time Selector -->
<section class="space-y-3" id="rest-time">
<h2 class="text-sm font-bold text-slate-400 uppercase tracking-wider px-1">Temps de repos</h2>
<div class="flex overflow-x-auto no-scrollbar gap-3 pb-2">
<button class="flex-none px-6 py-3 rounded-2xl border border-slate-100 bg-slate-50 text-sm font-bold text-slate-500">45s</button>
<button class="flex-none px-6 py-3 rounded-2xl border-2 border-primary bg-primary/5 text-sm font-extrabold text-primary">1 min</button>
<button class="flex-none px-6 py-3 rounded-2xl border border-slate-100 bg-slate-50 text-sm font-bold text-slate-500">1:30</button>
<button class="flex-none px-6 py-3 rounded-2xl border border-slate-100 bg-slate-50 text-sm font-bold text-slate-500">2 min</button>
<button class="flex-none px-6 py-3 rounded-2xl border border-slate-100 bg-slate-50 text-sm font-bold text-slate-500">3 min</button>
</div>
</section>
<!-- END: Rest Time Selector -->
<!-- BEGIN: Intensification Techniques -->
<section class="space-y-3 pb-8" id="intensification">
<h2 class="text-sm font-bold text-slate-400 uppercase tracking-wider px-1">Technique d'intensification</h2>
<div class="grid grid-cols-2 gap-3">
<button class="flex flex-col items-center justify-center p-4 rounded-3xl border border-slate-100 bg-slate-50 transition-all active:scale-95">
<div class="w-10 h-10 mb-2 rounded-full bg-slate-200 flex items-center justify-center">
<svg class="h-6 w-6 text-slate-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</div>
<span class="text-sm font-bold text-slate-600">Normal</span>
</button>
<button class="flex flex-col items-center justify-center p-4 rounded-3xl border-2 border-primary bg-primary/5 transition-all active:scale-95 ring-2 ring-primary/20 ring-offset-2">
<div class="w-10 h-10 mb-2 rounded-full bg-primary flex items-center justify-center text-white">
<svg class="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</div>
<span class="text-sm font-extrabold text-primary">Super Set</span>
</button>
<button class="flex flex-col items-center justify-center p-4 rounded-3xl border border-slate-100 bg-slate-50 transition-all active:scale-95">
<div class="w-10 h-10 mb-2 rounded-full bg-slate-200 flex items-center justify-center">
<svg class="h-6 w-6 text-slate-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</div>
<span class="text-sm font-bold text-slate-600">Drop Set</span>
</button>
<button class="flex flex-col items-center justify-center p-4 rounded-3xl border border-slate-100 bg-slate-50 transition-all active:scale-95">
<div class="w-10 h-10 mb-2 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<span class="text-xs font-black">2x</span>
</div>
<span class="text-sm font-bold text-slate-600">Clusters</span>
</button>
</div>
</section>
<!-- END: Intensification Techniques -->
</main>
<!-- BEGIN: Bottom Interaction Area -->
<div class="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-100 z-50 px-4 pt-4 pb-8">
<button class="w-full bg-primary text-white font-black text-lg py-4 rounded-full shadow-xl shadow-primary/40 active:scale-[0.98] transition-all" data-purpose="save-button">
      Enregistrer l'exercice
    </button>
<!-- BEGIN: Main Tab Navigation -->
<nav class="flex justify-between items-center mt-6 px-4" data-purpose="bottom-nav">
<div class="flex flex-col items-center gap-1 opacity-40">
<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<span class="text-[10px] font-bold">Résumé</span>
</div>
<div class="flex flex-col items-center gap-1 text-primary">
<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
<span class="text-[10px] font-bold">Programme</span>
</div>
<div class="flex flex-col items-center gap-1 opacity-40">
<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span class="text-[10px] font-bold">Prog</span>
</div>
<div class="flex flex-col items-center gap-1 opacity-40">
<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>
<span class="text-[10px] font-bold">Nutrition</span>
</div>
<div class="flex flex-col items-center gap-1 opacity-40">
<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span class="text-[10px] font-bold">Profil</span>
</div>
</nav>
<!-- END: Main Tab Navigation -->
</div>
<!-- END: Bottom Interaction Area -->
</body></html>