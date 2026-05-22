<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Tableau de bord - Obsidian Pulse</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&amp;family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "on-error-container": "#ffa8a3",
            "surface-bright": "#2c2c2c",
            "on-tertiary-fixed-variant": "#626267",
            "on-primary-container": "#002919",
            "surface-container-highest": "#262626",
            "secondary-container": "#454747",
            "surface-container": "#1a1a1a",
            "error-dim": "#d7383b",
            "secondary": "#e2e2e2",
            "surface-container-high": "#20201f",
            "inverse-surface": "#fcf9f8",
            "tertiary-fixed-dim": "#e0dfe4",
            "on-secondary-fixed": "#3e4040",
            "primary-fixed": "#10B981",
            "primary": "#10B981",
            "tertiary-container": "#ebeaf0",
            "primary-fixed-dim": "#10B981",
            "outline": "#767575",
            "on-primary": "#002919",
            "surface-container-low": "#131313",
            "outline-variant": "#484847",
            "on-tertiary-container": "#56565b",
            "tertiary-dim": "#e0dfe4",
            "on-surface-variant": "#adaaaa",
            "inverse-primary": "#059669",
            "inverse-on-surface": "#565555",
            "on-secondary": "#505252",
            "surface-dim": "#0e0e0e",
            "on-background": "#ffffff",
            "on-error": "#490006",
            "primary-container": "#065f46",
            "on-primary-fixed": "#00452d",
            "surface-container-lowest": "#000000",
            "on-secondary-container": "#d0d0d0",
            "surface": "#0e0e0e",
            "tertiary": "#faf9fe",
            "secondary-fixed": "#e2e2e2",
            "error-container": "#9f0519",
            "background": "#0e0e0e",
            "tertiary-fixed": "#eeedf3",
            "primary-dim": "#10B981",
            "on-tertiary-fixed": "#45464a",
            "secondary-dim": "#d4d4d4",
            "on-surface": "#ffffff",
            "surface-variant": "#262626",
            "error": "#ff716c",
            "on-tertiary": "#5e5f63",
            "on-primary-fixed-variant": "#006544",
            "secondary-fixed-dim": "#d4d4d4",
            "on-secondary-fixed-variant": "#5a5c5c",
            "surface-tint": "#10B981",
            "protein": "#3B82F6",
            "carbs": "#EF4444",
            "fats": "#10B981"
          },
          fontFamily: {
            "headline": ["Lexend"],
            "body": ["Lexend"],
            "label": ["Lexend"]
          },
          borderRadius: {"DEFAULT": "1.75rem", "lg": "2.5rem", "xl": "3.5rem", "full": "9999px"},
        },
      },
    }
  </script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    .glass-card {
      background: rgba(30, 30, 30, 0.4);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
      border-radius: 1.75rem;
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .chart-area-shadow {
      filter: drop-shadow(0 0 12px rgba(16, 185, 129, 0.4));
    }
    .text-glow {
      text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
    }
    .text-glow-protein { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
    .text-glow-carbs { text-shadow: 0 0 10px rgba(239, 68, 68, 0.5); }
    .text-glow-fats { text-shadow: 0 0 10px rgba(16, 185, 129, 0.5); }
    
    .ring-glow {
      filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.3));
    }
    .ring-glow-protein { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3)); }
    .ring-glow-carbs { filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.3)); }
    .ring-glow-fats { filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.3)); }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-[#080808] text-on-background font-body selection:bg-primary selection:text-on-primary">
<!-- TopAppBar -->
<header class="flex justify-between items-center px-6 h-18 w-full fixed top-0 z-50 bg-[#080808]/80 backdrop-blur-xl border-b border-white/5">
<div class="flex items-center gap-4">
<button class="text-primary hover:opacity-80 transition-all active:scale-95 tap-highlight-none">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 class="font-headline font-bold text-lg tracking-wider uppercase text-primary text-glow">Tableau de bord</h1>
</div>
<div class="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/40 hover:border-primary transition-all active:scale-95 cursor-pointer ring-4 ring-primary/10">
<img alt="User profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMbtnegmgd_7O-aqW8uDBPv_LIBsc0kZYEG7iViRsQITBVSTU9F8SPZPQmyGwxiw5ki9jT1_JNIS0MhuvrMl5qEijqcu982Sa4NeKRs9AQVLonoo9vMRWqftG-PbItzIYW1o2KPt7qdkEI9rL-Hf5JPWL4rSOVqIv1a8DsLRPnSIb7RnACYaSBKOcpc8mDVUJczvoW0Az1qzXdUZgLg-enSPOYL8BboiClq4Ku-gL8RuO-AJGlB3_5jxSwuI1vMgHk4VL-9VR-lSEx"/>
</div>
</header>
<main class="pt-24 pb-32 px-6 max-w-5xl mx-auto space-y-12">
<!-- Performance Section -->
<div class="flex flex-col items-center gap-6">
<div class="text-center w-full">
<h2 class="font-headline text-4xl font-extrabold tracking-tight">Performance</h2>
</div>
<!-- Horizontal Scrollable Time Tabs -->
<div class="w-full overflow-x-auto no-scrollbar -mx-6 px-6">
<div class="flex items-center gap-3 min-w-max pb-2">
<button class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors bg-white/5 border border-white/5">Hier</button>
<button class="px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-primary to-emerald-600 text-on-primary shadow-lg shadow-primary/30">Aujourd'hui</button>
<button class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors bg-white/5 border border-white/5">Demain</button>
<button class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors bg-white/5 border border-white/5">Jeu 20 Mars</button>
<button class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors bg-white/5 border border-white/5">Ven 21 Mars</button>
<button class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors bg-white/5 border border-white/5">Sam 22 Mars</button>
<button class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors bg-white/5 border border-white/5">Dim 23 Mars</button>
</div>
</div>
</div>
<!-- Top Summary: Macro Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Protein Card -->
<div class="glass-card p-6 relative overflow-hidden group">
<div class="flex justify-between items-start mb-4">
<div>
<span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Protéines</span>
<div class="flex items-baseline gap-1 mt-1">
<span class="text-3xl font-headline font-bold text-white">142</span>
<span class="text-xs font-medium text-on-surface-variant">/ 180g</span>
</div>
</div>
<div class="relative w-14 h-14 flex items-center justify-center ring-glow-protein">
<svg class="w-full h-full -rotate-90">
<circle class="text-surface-bright/50" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" stroke-width="4"></circle>
<circle class="text-protein" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" stroke-dasharray="150.8" stroke-dashoffset="33.2" stroke-linecap="round" stroke-width="5"></circle>
</svg>
<span class="absolute text-xs font-bold text-protein">78%</span>
</div>
</div>
<div class="h-2 w-full bg-surface-bright/30 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-protein to-blue-400 w-[78%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
<!-- Carbs Card -->
<div class="glass-card p-6 relative overflow-hidden">
<div class="flex justify-between items-start mb-4">
<div>
<span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Glucides</span>
<div class="flex items-baseline gap-1 mt-1">
<span class="text-3xl font-headline font-bold text-white">210</span>
<span class="text-xs font-medium text-on-surface-variant">/ 250g</span>
</div>
</div>
<div class="relative w-14 h-14 flex items-center justify-center ring-glow-carbs">
<svg class="w-full h-full -rotate-90">
<circle class="text-surface-bright/50" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" stroke-width="4"></circle>
<circle class="text-carbs" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" stroke-dasharray="150.8" stroke-dashoffset="24.1" stroke-linecap="round" stroke-width="5"></circle>
</svg>
<span class="absolute text-xs font-bold text-carbs">84%</span>
</div>
</div>
<div class="h-2 w-full bg-surface-bright/30 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-carbs to-red-400 w-[84%] rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
</div>
</div>
<!-- Fats Card -->
<div class="glass-card p-6 relative overflow-hidden">
<div class="flex justify-between items-start mb-4">
<div>
<span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Lipides</span>
<div class="flex items-baseline gap-1 mt-1">
<span class="text-3xl font-headline font-bold text-white">54</span>
<span class="text-xs font-medium text-on-surface-variant">/ 65g</span>
</div>
</div>
<div class="relative w-14 h-14 flex items-center justify-center ring-glow-fats">
<svg class="w-full h-full -rotate-90">
<circle class="text-surface-bright/50" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" stroke-width="4"></circle>
<circle class="text-fats" cx="28" cy="28" fill="transparent" r="24" stroke="currentColor" stroke-dasharray="150.8" stroke-dashoffset="25.6" stroke-linecap="round" stroke-width="5"></circle>
</svg>
<span class="absolute text-xs font-bold text-fats">83%</span>
</div>
</div>
<div class="h-2 w-full bg-surface-bright/30 rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-fats to-emerald-400 w-[83%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
<!-- Middle Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
<!-- Calorie Donut Card -->
<div class="md:col-span-5 glass-card p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
<div class="absolute top-0 right-0 p-6">
<span class="material-symbols-outlined text-primary/20 text-3xl" data-icon="restaurant">restaurant</span>
</div>
<div class="relative w-56 h-56 mb-8 group ring-glow">
<svg class="w-full h-full -rotate-90">
<circle class="text-white/5" cx="112" cy="112" fill="transparent" r="98" stroke="currentColor" stroke-width="14"></circle>
<circle class="transition-all duration-1000" cx="112" cy="112" fill="transparent" r="98" stroke="url(#emeraldGradientMain)" stroke-dasharray="615.7" stroke-dashoffset="184.7" stroke-linecap="round" stroke-width="18"></circle>
<defs>
<lineargradient id="emeraldGradientMain" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#10B981"></stop>
<stop offset="100%" stop-color="#34D399"></stop>
</lineargradient>
</defs>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-6xl font-headline font-black tracking-tighter text-white text-glow">640</span>
<span class="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mt-1">Kcal restants</span>
</div>
</div>
<div class="flex gap-10 w-full justify-around mt-2">
<div class="text-center">
<p class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Consommés</p>
<p class="font-headline font-bold text-2xl text-primary">1 760</p>
</div>
<div class="w-px h-10 bg-white/10 self-center"></div>
<div class="text-center">
<p class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Brûlés</p>
<p class="font-headline font-bold text-2xl text-secondary">420</p>
</div>
</div>
</div>
<!-- Streak & Area Chart -->
<div class="md:col-span-7 flex flex-col gap-8">
<!-- Streak Card -->
<div class="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 flex items-center justify-between group hover:border-primary/40 transition-all cursor-pointer" style="border-radius: 1.75rem;">
<div class="flex items-center gap-5">
<div class="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="local_fire_department" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
</div>
<div>
<h3 class="font-headline font-bold text-xl text-white">Série de 14 jours</h3>
<p class="text-sm text-on-surface-variant">Vous assurez ! Plus qu'un jour avant votre record.</p>
</div>
</div>
<span class="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
<!-- Kcal Evolution Area Chart -->
<div class="glass-card p-8 flex-grow">
<div class="flex justify-between items-center mb-8">
<h3 class="font-headline font-bold text-xs uppercase tracking-[0.2em]">Évolution Kcal</h3>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2">
<div class="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Mangé</span>
</div>
<div class="flex items-center gap-2">
<div class="w-2.5 h-2.5 rounded-full border-2 border-white/30"></div>
<span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Objectif</span>
</div>
</div>
</div>
<div class="relative h-40 w-full mt-4 chart-area-shadow">
<!-- Target Line (Dashed) -->
<svg class="absolute inset-0 h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<line stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3" stroke-width="0.8" x1="0" x2="100" y1="35" y2="35"></line>
<!-- Actual Eaten Area Chart -->
<defs>
<lineargradient id="areaGradientVibrant" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(16, 185, 129, 0.5)"></stop>
<stop offset="100%" stop-color="rgba(16, 185, 129, 0)"></stop>
</lineargradient>
</defs>
<path d="M 0 100 L 0 45 L 16.6 60 L 33.3 25 L 50 70 L 66.6 35 L 83.3 80 L 100 40 L 100 100 Z" fill="url(#areaGradientVibrant)"></path>
<path d="M 0 45 L 16.6 60 L 33.3 25 L 50 70 L 66.6 35 L 83.3 80 L 100 40" fill="none" stroke="#10B981" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
<!-- Data Points -->
<circle cx="33.3" cy="25" fill="#10B981" r="4" stroke="#080808" stroke-width="2"></circle>
<circle cx="100" cy="40" fill="#10B981" r="5" stroke="#080808" stroke-width="2"></circle>
</svg>
</div>
<div class="flex justify-between mt-6 px-1">
<span class="text-[10px] font-bold text-on-surface-variant/60 uppercase">Lun</span>
<span class="text-[10px] font-bold text-on-surface-variant/60 uppercase">Mar</span>
<span class="text-[10px] font-bold text-on-surface-variant/60 uppercase">Mer</span>
<span class="text-[10px] font-bold text-on-surface-variant/60 uppercase">Jeu</span>
<span class="text-[10px] font-bold text-on-surface-variant/60 uppercase">Ven</span>
<span class="text-[10px] font-bold text-on-surface-variant/60 uppercase">Sam</span>
<span class="text-[10px] font-bold text-primary uppercase text-glow">Dim</span>
</div>
</div>
</div>
</div>
<!-- Weekly Nutrient Distribution -->
<div class="glass-card p-10">
<div class="flex justify-between items-center mb-10">
<div>
<h3 class="font-headline font-bold text-2xl text-white">Répartition hebdomadaire</h3>
<p class="text-on-surface-variant text-sm mt-1">Analyse de la cohérence des macros</p>
</div>
<button class="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-all hover:border-primary/50">
<span class="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
          Filtrer
        </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-12">
<!-- Radar Chart Mockup (SVG) -->
<div class="md:col-span-1 flex flex-col items-center justify-center">
<div class="relative w-48 h-48 ring-glow">
<svg class="w-full h-full" viewbox="0 0 100 100">
<circle class="stroke-white/10" cx="50" cy="50" fill="none" r="15" stroke-width="1"></circle>
<circle class="stroke-white/10" cx="50" cy="50" fill="none" r="30" stroke-width="1"></circle>
<circle class="stroke-white/10" cx="50" cy="50" fill="none" r="45" stroke-width="1"></circle>
<line class="stroke-white/10" stroke-width="1" x1="50" x2="50" y1="5" y2="95"></line>
<line class="stroke-white/10" stroke-width="1" x1="5" x2="95" y1="50" y2="50"></line>
<!-- Protein Axis (Using diverse colors now) -->
<path class="filter drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" d="M 50 15 L 88 50 L 50 85 L 12 50 Z" fill="rgba(59, 130, 246, 0.4)" stroke="#3B82F6" stroke-linejoin="round" stroke-width="3"></path>
</svg>
<span class="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Protéines</span>
<span class="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Lipides</span>
<span class="absolute -right-6 top-1/2 -translate-y-1/2 text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Glucides</span>
<span class="absolute -left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Fibres</span>
</div>
<p class="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-primary text-glow">Équilibre Moyen : 92%</p>
</div>
<!-- Stacked Bars -->
<div class="md:col-span-3 space-y-8 flex flex-col justify-center">
<!-- Monday -->
<div class="space-y-3">
<div class="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">
<span>Lundi</span>
<span class="text-white">2 240 kcal</span>
</div>
<div class="h-4 w-full bg-white/5 rounded-full flex overflow-hidden border border-white/5">
<div class="h-full bg-protein" style="width: 30%"></div>
<div class="h-full bg-carbs" style="width: 50%"></div>
<div class="h-full bg-fats" style="width: 20%"></div>
</div>
</div>
<!-- Wednesday (Active) -->
<div class="space-y-3">
<div class="flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.15em] text-primary text-glow">
<span>Mercredi (Aujourd'hui)</span>
<span class="text-white">1 760 kcal</span>
</div>
<div class="h-5 w-full bg-white/5 rounded-full flex overflow-hidden ring-2 ring-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/5">
<div class="h-full bg-gradient-to-r from-protein to-blue-400" style="width: 28%"></div>
<div class="h-full bg-carbs" style="width: 55%"></div>
<div class="h-full bg-fats" style="width: 17%"></div>
</div>
</div>
<!-- Friday -->
<div class="space-y-3">
<div class="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">
<span>Vendredi</span>
<span class="text-white">2 100 kcal</span>
</div>
<div class="h-4 w-full bg-white/5 rounded-full flex overflow-hidden border border-white/5">
<div class="h-full bg-protein" style="width: 35%"></div>
<div class="h-full bg-carbs" style="width: 40%"></div>
<div class="h-full bg-fats" style="width: 25%"></div>
</div>
</div>
<!-- Legend -->
<div class="flex gap-8 pt-4">
<div class="flex items-center gap-2.5">
<div class="w-3.5 h-3.5 rounded-md bg-protein shadow-sm shadow-protein/40"></div>
<span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Protéines</span>
</div>
<div class="flex items-center gap-2.5">
<div class="w-3.5 h-3.5 rounded-md bg-carbs shadow-sm shadow-carbs/40"></div>
<span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Glucides</span>
</div>
<div class="flex items-center gap-2.5">
<div class="w-3.5 h-3.5 rounded-md bg-fats shadow-sm shadow-fats/40"></div>
<span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Lipides</span>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#080808]/90 backdrop-blur-3xl rounded-t-[32px] border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.6)]">
<!-- Journal -->
<a class="flex flex-col items-center justify-center text-zinc-500 px-4 py-2 hover:text-primary transition-all duration-300 group" href="#">
<span class="material-symbols-outlined text-2xl mb-1 group-hover:scale-110 transition-transform" data-icon="event_note">event_note</span>
<span class="text-[9px] font-bold uppercase tracking-widest">Journal</span>
</a>
<!-- Tableau de bord (Actif) -->
<a class="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-[24px] px-6 py-2.5 active:scale-95 transition-all duration-300 ring-1 ring-primary/20 shadow-lg shadow-primary/5" href="#">
<span class="material-symbols-outlined text-2xl mb-1 text-glow" data-icon="analytics" style="font-variation-settings: 'FILL' 1;">analytics</span>
<span class="text-[9px] font-bold uppercase tracking-widest text-glow">Tableau</span>
</a>
<!-- Recettes -->
<a class="flex flex-col items-center justify-center text-zinc-500 px-4 py-2 hover:text-primary transition-all duration-300 group" href="#">
<span class="material-symbols-outlined text-2xl mb-1 group-hover:scale-110 transition-transform" data-icon="auto_awesome">auto_awesome</span>
<span class="text-[9px] font-bold uppercase tracking-widest">Recettes</span>
</a>
<!-- Plan -->
<a class="flex flex-col items-center justify-center text-zinc-500 px-4 py-2 hover:text-primary transition-all duration-300 group" href="#">
<span class="material-symbols-outlined text-2xl mb-1 group-hover:scale-110 transition-transform" data-icon="calendar_month">calendar_month</span>
<span class="text-[9px] font-bold uppercase tracking-widest">Plan</span>
</a>
<!-- Profil -->
<a class="flex flex-col items-center justify-center text-zinc-500 px-4 py-2 hover:text-primary transition-all duration-300 group" href="#">
<span class="material-symbols-outlined text-2xl mb-1 group-hover:scale-110 transition-transform" data-icon="person">person</span>
<span class="text-[9px] font-bold uppercase tracking-widest">Profil</span>
</a>
</nav>
</body></html>