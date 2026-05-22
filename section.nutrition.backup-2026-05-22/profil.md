<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Profil Nutri - Nutrition Configuration</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&amp;family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                        "primary-fixed": "#69f6b8",
                        "primary": "#69f6b8",
                        "tertiary-container": "#ebeaf0",
                        "primary-fixed-dim": "#58e7ab",
                        "outline": "#767575",
                        "on-primary": "#005a3c",
                        "surface-container-low": "#131313",
                        "outline-variant": "#484847",
                        "on-tertiary-container": "#56565b",
                        "tertiary-dim": "#e0dfe4",
                        "on-surface-variant": "#adaaaa",
                        "inverse-primary": "#006d4a",
                        "inverse-on-surface": "#565555",
                        "on-secondary": "#505252",
                        "surface-dim": "#0e0e0e",
                        "on-background": "#ffffff",
                        "on-error": "#490006",
                        "primary-container": "#06b77f",
                        "on-primary-fixed": "#00452d",
                        "surface-container-lowest": "#000000",
                        "on-secondary-container": "#d0d0d0",
                        "surface": "#0e0e0e",
                        "tertiary": "#faf9fe",
                        "secondary-fixed": "#e2e2e2",
                        "error-container": "#9f0519",
                        "background": "#0e0e0e",
                        "tertiary-fixed": "#eeedf3",
                        "primary-dim": "#58e7ab",
                        "on-tertiary-fixed": "#45464a",
                        "secondary-dim": "#d4d4d4",
                        "on-surface": "#ffffff",
                        "surface-variant": "#262626",
                        "error": "#ff716c",
                        "on-tertiary": "#5e5f63",
                        "on-primary-fixed-variant": "#006544",
                        "secondary-fixed-dim": "#d4d4d4",
                        "on-secondary-fixed-variant": "#5a5c5c",
                        "surface-tint": "#69f6b8"
                    },
                    fontFamily: {
                        "headline": ["Lexend"],
                        "body": ["Manrope"],
                        "label": ["Manrope"]
                    },
                    borderRadius: { "DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px" },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .glass-panel {
            background: rgba(26, 26, 26, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .glow-shadow {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 10px rgba(105, 246, 184, 0.05);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary-container">
<!-- Top Navigation -->
<header class="flex justify-between items-center px-6 h-16 w-full fixed top-0 z-50 bg-[#0e0e0e]/80 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#69f6b8] hover:opacity-80 transition-all cursor-pointer">menu</span>
<h1 class="font-lexend font-bold text-lg tracking-wide uppercase text-[#69f6b8]">Nutrition</h1>
</div>
<div class="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center overflow-hidden active:scale-95 transition-transform cursor-pointer">
<img class="w-full h-full object-cover" data-alt="professional portrait of a fit woman with athletic build in soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzxqTg-c56jdlB1Dh0wuZWDzmyEBgYShWapyTq-a-ZxWOaYlI5cseq6q9a9tLIfoCmYHUTA56rvqy5fqrXiT1CurdvIWkGX2FGle-pyjGR80bQunfE9r1vniQMpXaJCNEb5C5DbIwdZ9iqmk3N6p8jU9Hlr77gWnULBeXw2SrK9EFqr1sXOQMYACGcgn39I1lWJn9HgVXsXhhJ5Rw0k0MiVj0X4DHikzQa9jtZ9EuA0yY6JL9Z4M9sdkCP0OQ4JLxeotPEH4ujC3gq"/>
</div>
</header>
<main class="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
<!-- Header Section -->
<section class="space-y-2">
<span class="font-headline font-black text-primary uppercase tracking-[0.2em] text-xs">Profile Optimization</span>
<h2 class="font-headline font-extrabold text-4xl md:text-5xl tracking-tighter">Profil Nutri</h2>
<p class="text-on-surface-variant max-w-xl font-medium">Fine-tune your metabolic engine. Adjust your parameters to calculate your optimal daily energy expenditure.</p>
</section>
<!-- Bento Configuration Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- TDEE Calculator Block -->
<div class="lg:col-span-8 glass-panel rounded-xl p-8 border border-outline-variant/10 relative overflow-hidden group">
<div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors"></div>
<div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
<div class="space-y-8">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">calculate</span>
<h3 class="font-headline font-bold text-xl uppercase tracking-wider">TDEE Calculator</h3>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<label class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">Age</label>
<input class="w-full bg-surface-container-high border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/40 text-on-surface font-headline font-bold" type="number" value="28"/>
</div>
<div class="space-y-2">
<label class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">Height (cm)</label>
<input class="w-full bg-surface-container-high border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/40 text-on-surface font-headline font-bold" type="number" value="182"/>
</div>
<div class="space-y-2">
<label class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">Weight (kg)</label>
<input class="w-full bg-surface-container-high border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/40 text-on-surface font-headline font-bold" type="number" value="84"/>
</div>
<div class="space-y-2">
<label class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">Gender</label>
<select class="w-full bg-surface-container-high border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/40 text-on-surface font-headline font-bold appearance-none">
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>
</div>
</div>
<div class="space-y-2">
<label class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant ml-1">Activity Level</label>
<div class="grid grid-cols-1 gap-2">
<button class="flex items-center justify-between bg-surface-container-high p-4 rounded-xl text-left hover:bg-surface-container-highest transition-colors group">
<div>
<p class="font-bold text-sm">Moderate Exercise</p>
<p class="text-xs text-on-surface-variant">3-5 days/week active training</p>
</div>
<span class="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
</div>
</div>
<div class="flex flex-col items-center justify-center space-y-4 border-l border-outline-variant/10 pl-0 md:pl-12">
<p class="font-headline font-black text-on-surface-variant text-sm uppercase tracking-[0.3em]">Daily Burn</p>
<div class="relative">
<svg class="w-48 h-48 -rotate-90">
<circle class="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-width="8"></circle>
<circle class="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552" stroke-dashoffset="138" stroke-linecap="round" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="font-headline font-black text-5xl tracking-tighter">2,840</span>
<span class="font-body font-bold text-on-surface-variant text-xs uppercase tracking-widest mt-1">kcal</span>
</div>
</div>
<p class="text-center text-xs text-on-surface-variant leading-relaxed max-w-[200px]">Calculated based on the <span class="text-primary font-bold">Mifflin-St Jeor</span> equation for precision metabolic tracking.</p>
</div>
</div>
</div>
<!-- Goal Selection Block -->
<div class="lg:col-span-4 flex flex-col gap-6">
<div class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 flex-1">
<h3 class="font-headline font-bold text-sm uppercase tracking-widest text-on-surface-variant mb-6">Phase Selection</h3>
<div class="space-y-4">
<!-- Cut -->
<div class="p-4 rounded-xl bg-surface-container border border-outline-variant/20 flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-all group">
<div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
<span class="material-symbols-outlined">trending_down</span>
</div>
<div class="flex-1">
<p class="font-bold text-lg leading-none">Cut</p>
<p class="text-xs text-on-surface-variant mt-1">Caloric Deficit</p>
</div>
<div class="w-4 h-4 rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors"></div>
</div>
<!-- Maintain -->
<div class="p-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center gap-4 cursor-pointer relative overflow-hidden">
<div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">balance</span>
</div>
<div class="flex-1">
<p class="font-bold text-lg leading-none">Maintain</p>
<p class="text-xs text-primary/80 mt-1">Isocaloric State</p>
</div>
<div class="w-4 h-4 rounded-full border-2 border-primary bg-primary flex items-center justify-center">
<div class="w-1.5 h-1.5 rounded-full bg-on-primary"></div>
</div>
</div>
<!-- Bulk -->
<div class="p-4 rounded-xl bg-surface-container border border-outline-variant/20 flex items-center gap-4 cursor-pointer hover:border-primary/50 transition-all group">
<div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<span class="material-symbols-outlined">trending_up</span>
</div>
<div class="flex-1">
<p class="font-bold text-lg leading-none">Bulk</p>
<p class="text-xs text-on-surface-variant mt-1">Caloric Surplus</p>
</div>
<div class="w-4 h-4 rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors"></div>
</div>
</div>
</div>
</div>
<!-- Weight Tracker Section -->
<div class="lg:col-span-12 glass-panel rounded-xl p-8 border border-outline-variant/10">
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div class="space-y-6 flex-1">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">monitor_weight</span>
<h3 class="font-headline font-bold text-xl uppercase tracking-wider">Weight Evolution</h3>
</div>
<div class="flex gap-8">
<div class="space-y-1">
<p class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Current</p>
<div class="flex items-baseline gap-1">
<span class="font-headline font-black text-3xl">84.2</span>
<span class="font-body font-bold text-on-surface-variant text-xs">KG</span>
</div>
</div>
<div class="space-y-1">
<p class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Target</p>
<div class="flex items-baseline gap-1">
<span class="font-headline font-black text-3xl text-primary">80.0</span>
<span class="font-body font-bold text-on-surface-variant text-xs">KG</span>
</div>
</div>
<div class="space-y-1">
<p class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Diff</p>
<div class="flex items-baseline gap-1">
<span class="font-headline font-black text-3xl text-error">-4.2</span>
<span class="font-body font-bold text-on-surface-variant text-xs">KG</span>
</div>
</div>
</div>
</div>
<div class="w-full md:w-2/3 h-32 relative group">
<!-- Simulated Sparkline -->
<div class="absolute inset-0 flex items-end gap-1">
<div class="flex-1 bg-primary/20 rounded-t-sm h-[60%] group-hover:bg-primary/40 transition-all"></div>
<div class="flex-1 bg-primary/25 rounded-t-sm h-[65%] group-hover:bg-primary/40 transition-all"></div>
<div class="flex-1 bg-primary/20 rounded-t-sm h-[58%] group-hover:bg-primary/40 transition-all"></div>
<div class="flex-1 bg-primary/30 rounded-t-sm h-[70%] group-hover:bg-primary/40 transition-all"></div>
<div class="flex-1 bg-primary/40 rounded-t-sm h-[80%] group-hover:bg-primary/40 transition-all"></div>
<div class="flex-1 bg-primary/35 rounded-t-sm h-[75%] group-hover:bg-primary/40 transition-all"></div>
<div class="flex-1 bg-primary/50 rounded-t-sm h-[85%] group-hover:bg-primary/40 transition-all"></div>
<div class="flex-1 bg-primary/45 rounded-t-sm h-[82%] group-hover:bg-primary/40 transition-all"></div>
<div class="flex-1 bg-primary/60 rounded-t-sm h-[92%] group-hover:bg-primary/40 transition-all"></div>
<div class="flex-1 bg-primary/100 rounded-t-sm h-[100%]"></div>
</div>
<div class="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
<span>Week 1</span>
<span>Week 10 (Current)</span>
</div>
</div>
</div>
</div>
<!-- Macros and Preferences Section -->
<div class="lg:col-span-7 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
<div class="flex justify-between items-center mb-8">
<h3 class="font-headline font-bold text-xl uppercase tracking-wider">Macro Distribution</h3>
<div class="flex gap-2">
<button class="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20 hover:bg-primary/20 transition-colors">Protein Focus</button>
<button class="px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-widest border border-outline-variant/20 hover:border-primary/40 transition-all">Balanced</button>
</div>
</div>
<div class="space-y-8">
<div class="space-y-3">
<div class="flex justify-between items-center">
<span class="font-bold text-sm">Protein</span>
<span class="font-headline font-black text-primary">40%</span>
</div>
<input class="w-full h-2 bg-surface-container-highest rounded-full appearance-none accent-primary cursor-pointer" type="range"/>
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Target: 224g / Day</p>
</div>
<div class="space-y-3">
<div class="flex justify-between items-center">
<span class="font-bold text-sm">Carbohydrates</span>
<span class="font-headline font-black text-blue-400">30%</span>
</div>
<input class="w-full h-2 bg-surface-container-highest rounded-full appearance-none accent-blue-400 cursor-pointer" type="range"/>
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Target: 168g / Day</p>
</div>
<div class="space-y-3">
<div class="flex justify-between items-center">
<span class="font-bold text-sm">Fats</span>
<span class="font-headline font-black text-amber-400">30%</span>
</div>
<input class="w-full h-2 bg-surface-container-highest rounded-full appearance-none accent-amber-400 cursor-pointer" type="range"/>
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Target: 75g / Day</p>
</div>
</div>
</div>
<!-- Food Preferences -->
<div class="lg:col-span-5 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
<h3 class="font-headline font-bold text-xl uppercase tracking-wider mb-8">Dietary Profile</h3>
<div class="space-y-8">
<div>
<p class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-4">Active Exclusions</p>
<div class="flex flex-wrap gap-2">
<span class="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/20 flex items-center gap-2 group cursor-pointer hover:bg-error/10 hover:border-error/30 transition-all">
<span class="text-sm font-bold">Lactose</span>
<span class="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-error transition-colors">close</span>
</span>
<span class="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/20 flex items-center gap-2 group cursor-pointer hover:bg-error/10 hover:border-error/30 transition-all">
<span class="text-sm font-bold">Gluten</span>
<span class="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-error transition-colors">close</span>
</span>
<span class="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/20 flex items-center gap-2 group cursor-pointer hover:bg-error/10 hover:border-error/30 transition-all">
<span class="text-sm font-bold">Peanuts</span>
<span class="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-error transition-colors">close</span>
</span>
<button class="px-4 py-2 bg-primary/10 border border-dashed border-primary/30 rounded-lg text-primary text-sm font-bold flex items-center gap-2 hover:bg-primary/20 transition-all">
<span class="material-symbols-outlined text-[16px]">add</span>
                                Add Preference
                            </button>
</div>
</div>
<div>
<p class="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-4">Daily Tracking Goal</p>
<div class="bg-surface-container p-4 rounded-xl flex items-center gap-4">
<div class="p-3 bg-primary/20 rounded-lg text-primary">
<span class="material-symbols-outlined">notification_important</span>
</div>
<div>
<p class="text-sm font-bold">Smart Reminders</p>
<p class="text-xs text-on-surface-variant">Active 4 times daily</p>
</div>
<div class="ml-auto">
<div class="w-12 h-6 bg-primary rounded-full relative">
<div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Save Button -->
<div class="flex justify-end pt-8">
<button class="bg-primary-fixed text-on-primary-fixed font-headline font-black text-sm uppercase tracking-[0.2em] px-12 py-5 rounded-full shadow-[0_20px_40px_rgba(105,246,184,0.2)] hover:scale-105 active:scale-95 transition-all">
                Update Metabolic Profile
            </button>
</div>
</main>
<!-- Navigation Shell -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#131313]/90 backdrop-blur-2xl rounded-t-[28px] shadow-[0_-20px_40px_rgba(0,0,0,0.4),0_0_10px_rgba(105,246,184,0.05)]">
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 transition-all cursor-pointer">
<span class="material-symbols-outlined" data-icon="event_note">event_note</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Journal</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 transition-all cursor-pointer">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Dashboard</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 transition-all cursor-pointer">
<span class="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Recipes</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 transition-all cursor-pointer">
<span class="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Plan</span>
</div>
<div class="flex flex-col items-center justify-center text-[#69f6b8] bg-[#69f6b8]/10 rounded-[20px] px-4 py-2 transition-all">
<span class="material-symbols-outlined" data-icon="person" style="font-variation-settings: 'FILL' 1;">person</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest mt-1">Profile</span>
</div>
</nav>
</body></html>