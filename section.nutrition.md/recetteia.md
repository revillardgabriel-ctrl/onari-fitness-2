<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
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
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
            background: rgba(26, 26, 26, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .text-gradient-primary {
            background: linear-gradient(135deg, #69f6b8 0%, #06b77f 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
<!-- Top Navigation Shell -->
<nav class="flex justify-between items-center px-6 h-16 w-full fixed top-0 z-50 bg-[#0e0e0e]/80 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#69f6b8] hover:opacity-80 transition-all active:scale-95 transition-transform cursor-pointer">menu</span>
<h1 class="font-lexend font-bold text-lg tracking-wide uppercase text-[#69f6b8]">Nutrition</h1>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex gap-8 items-center">
<span class="font-label text-[10px] font-semibold uppercase tracking-widest text-zinc-500 hover:opacity-80 transition-all cursor-pointer">Journal</span>
<span class="font-label text-[10px] font-semibold uppercase tracking-widest text-zinc-500 hover:opacity-80 transition-all cursor-pointer">Tableau</span>
<span class="font-label text-[10px] font-semibold uppercase tracking-widest text-[#69f6b8] hover:opacity-80 transition-all cursor-pointer">Recettes</span>
<span class="font-label text-[10px] font-semibold uppercase tracking-widest text-zinc-500 hover:opacity-80 transition-all cursor-pointer">Plan</span>
</div>
<div class="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
<img class="w-full h-full object-cover" data-alt="professional portrait of a fit woman with athletic aesthetic, minimalist lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPOQN5YD33Jhm0GUY9saMuxLkhPoVzHEFh5Z9kdz9jIdkNMIs4w3FWNB-axzU5XoxV9ffepb7fmnvh2bwF67IPStVMfbQOD_EXAGBlZvVK72nCMWUoDdO6xRfpTW7O_gwo73IJjtKs-sRa5Ns0Tjmt6g3JRXyWOnZTVRsvRTi6k49svgbOmU2kWEzSB0Za6u4voI4qunXCKNDAGZb1U6P_Bli0QzBJbA4zNkyFBPnxcWMrV6BQANGo_thVb-QcoSP_w8d8YVkvkfef"/>
</div>
</div>
</nav>
<main class="pt-24 pb-32 px-6 max-w-5xl mx-auto min-h-screen">
<!-- Search & AI Section -->
<header class="mb-12 space-y-8">
<div class="flex flex-col gap-2">
<h2 class="font-headline text-4xl font-extrabold tracking-tight">Recettes</h2>
<p class="text-on-surface-variant text-sm font-medium tracking-wide">Optimisez votre carburant avec précision.</p>
</div>
<div class="space-y-4">
<!-- AI Generator Trigger -->
<button class="w-full bg-primary-container text-on-primary-container font-headline font-bold py-5 rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(105,246,184,0.2)] hover:opacity-90 active:scale-[0.98] transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
<span>GÉNÉRER AVEC L'IA</span>
</button>
<!-- Search Bar -->
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-4 text-zinc-500">search</span>
<input class="w-full bg-surface-container-high border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/30 placeholder:text-zinc-600 transition-all" placeholder="Rechercher un ingrédient ou un plat..." type="text"/>
</div>
<!-- Filters Carousel -->
<div class="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
<button class="flex-shrink-0 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label text-xs font-bold uppercase tracking-wider">Tous</button>
<button class="flex-shrink-0 px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label text-xs font-bold uppercase tracking-wider hover:bg-surface-bright transition-colors">High Protein</button>
<button class="flex-shrink-0 px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label text-xs font-bold uppercase tracking-wider hover:bg-surface-bright transition-colors">Low Carb</button>
<button class="flex-shrink-0 px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label text-xs font-bold uppercase tracking-wider hover:bg-surface-bright transition-colors">Vegan</button>
<button class="flex-shrink-0 px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label text-xs font-bold uppercase tracking-wider hover:bg-surface-bright transition-colors">Quick</button>
</div>
</div>
</header>
<!-- Recipe Grid -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Recipe Card 1 -->
<div class="group glass-card rounded-xl overflow-hidden border border-outline-variant/5 hover:border-primary/20 transition-all duration-500">
<div class="relative h-64 w-full overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="vibrant poke bowl with salmon, avocado, and fresh greens on a dark slate background, professional culinary photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYgdyeLCUzGiatysnlOhfkrar6T1HMaGd9EmFC4qemhMVjYmVHDZQyDX2Tm1hyY2FiHFCjCXUa42KSKvzn2ASvXOW1gk1PnNZg6UGoEqnEbEdFbKHbEumshyVBGw0LsKzz1aiLZktSq825Nzzlq2vNgNO5HzJMUguCUWzcNPWaFL048PSUOqRfKZj9gkYsLwog0TjAYpXxcxm3JS94qOFZFRdp1ZtqSg22WHSsNSmNas4u4Mooqg1pDFjV8ERJ6MZeoKYX25vN5pPn"/>
<div class="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
<span class="material-symbols-outlined text-primary text-lg" style="font-variation-settings: 'FILL' 1;">timer</span>
<span class="text-[10px] font-bold text-white uppercase tracking-tighter">15 MIN</span>
</div>
<div class="absolute bottom-4 left-4 flex gap-2">
<span class="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[9px] font-black px-2 py-0.5 rounded uppercase">High Protein</span>
</div>
</div>
<div class="p-6 space-y-4">
<div class="space-y-1">
<h3 class="font-headline text-xl font-bold leading-tight group-hover:text-primary transition-colors">Bowl Saumon &amp; Quinoa Premium</h3>
<p class="text-on-surface-variant text-xs font-medium">Riche en Oméga-3 et nutriments essentiels.</p>
</div>
<div class="flex justify-between items-end border-t border-outline-variant/10 pt-4">
<div class="flex gap-4">
<div class="flex flex-col">
<span class="text-[10px] text-zinc-500 font-bold uppercase">Prot</span>
<span class="text-sm font-bold">34g</span>
</div>
<div class="flex flex-col">
<span class="text-[10px] text-zinc-500 font-bold uppercase">Carbs</span>
<span class="text-sm font-bold">42g</span>
</div>
</div>
<div class="text-right">
<span class="block text-[10px] text-zinc-500 font-black uppercase tracking-widest">Energie</span>
<span class="text-2xl font-headline font-black text-primary italic">540 <small class="text-[10px] font-normal not-italic opacity-70">KCAL</small></span>
</div>
</div>
</div>
</div>
<!-- Recipe Card 2 -->
<div class="group glass-card rounded-xl overflow-hidden border border-outline-variant/5 hover:border-primary/20 transition-all duration-500">
<div class="relative h-64 w-full overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="gourmet vegan salad with roasted chickpeas, kale, and lemon tahini dressing, dark moody fitness aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYLMhPsptaIY1DOMLK2B8qpqif7gHvFysGLV0XTmcWCry1YtdK6eNeW54ma8C0sZ0uyUO6wQFBqhXnxunm7ZBZKkPtwy9Uk72tJUnfoymEY1doPUOOd5cIkKEzrtz4s43W483Rfg54gPUIHtLCQFtwUmXWkTaRYbS5EhwIG3TBedgqINUHmCfUvB2ow5a3WptHCovC2INVXW4sYh9uSf3qzdFMFhwBIsjBZT40zex2jAx1wVfnPQkgC5kuieoPY6pkj5b0iMu3hJPc"/>
<div class="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
<span class="material-symbols-outlined text-primary text-lg" style="font-variation-settings: 'FILL' 1;">timer</span>
<span class="text-[10px] font-bold text-white uppercase tracking-tighter">10 MIN</span>
</div>
<div class="absolute bottom-4 left-4 flex gap-2">
<span class="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[9px] font-black px-2 py-0.5 rounded uppercase">Vegan</span>
<span class="bg-surface-bright/40 backdrop-blur-md border border-outline-variant/30 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase">Low Carb</span>
</div>
</div>
<div class="p-6 space-y-4">
<div class="space-y-1">
<h3 class="font-headline text-xl font-bold leading-tight group-hover:text-primary transition-colors">Salade Détox Obsidian Kale</h3>
<p class="text-on-surface-variant text-xs font-medium">Puissant antioxydant pour récupération post-effort.</p>
</div>
<div class="flex justify-between items-end border-t border-outline-variant/10 pt-4">
<div class="flex gap-4">
<div class="flex flex-col">
<span class="text-[10px] text-zinc-500 font-bold uppercase">Prot</span>
<span class="text-sm font-bold">12g</span>
</div>
<div class="flex flex-col">
<span class="text-[10px] text-zinc-500 font-bold uppercase">Carbs</span>
<span class="text-sm font-bold">18g</span>
</div>
</div>
<div class="text-right">
<span class="block text-[10px] text-zinc-500 font-black uppercase tracking-widest">Energie</span>
<span class="text-2xl font-headline font-black text-primary italic">320 <small class="text-[10px] font-normal not-italic opacity-70">KCAL</small></span>
</div>
</div>
</div>
</div>
<!-- Recipe Card 3 -->
<div class="group glass-card rounded-xl overflow-hidden border border-outline-variant/5 hover:border-primary/20 transition-all duration-500">
<div class="relative h-64 w-full overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="perfectly grilled lean steak with steamed asparagus and roasted sweet potato, high contrast photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD26ETaCxllkSTzGiaGqmGktFw4C0yDRsAqfU--geSDb-907QUeNuXDap3S1-XxJc4MNvqr_NlpsxVfaUZSVESNtVJLM9MZN2M7ECXQSYo5QWCkXTZFPCQCcbjCeOTGXcCR1hefQYnbYbTpj6E8VcVrrd9jIf4Vojtguwaokxl7OGq02UPFyMpCtNyJlfZnba1AO_20FyGrSTnVJiDkrjO_dO-Hz9yKqxCljGKRPX7ccA-KzFaaxGtHX_3DHrRJTJWRBx4wHRhhepc9"/>
<div class="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
<span class="material-symbols-outlined text-primary text-lg" style="font-variation-settings: 'FILL' 1;">timer</span>
<span class="text-[10px] font-bold text-white uppercase tracking-tighter">25 MIN</span>
</div>
<div class="absolute bottom-4 left-4 flex gap-2">
<span class="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[9px] font-black px-2 py-0.5 rounded uppercase">High Protein</span>
</div>
</div>
<div class="p-6 space-y-4">
<div class="space-y-1">
<h3 class="font-headline text-xl font-bold leading-tight group-hover:text-primary transition-colors">Steak de Boeuf &amp; Asperges</h3>
<p class="text-on-surface-variant text-xs font-medium">Développement musculaire et force athlétique.</p>
</div>
<div class="flex justify-between items-end border-t border-outline-variant/10 pt-4">
<div class="flex gap-4">
<div class="flex flex-col">
<span class="text-[10px] text-zinc-500 font-bold uppercase">Prot</span>
<span class="text-sm font-bold">48g</span>
</div>
<div class="flex flex-col">
<span class="text-[10px] text-zinc-500 font-bold uppercase">Carbs</span>
<span class="text-sm font-bold">12g</span>
</div>
</div>
<div class="text-right">
<span class="block text-[10px] text-zinc-500 font-black uppercase tracking-widest">Energie</span>
<span class="text-2xl font-headline font-black text-primary italic">680 <small class="text-[10px] font-normal not-italic opacity-70">KCAL</small></span>
</div>
</div>
</div>
</div>
<!-- Recipe Card 4 -->
<div class="group glass-card rounded-xl overflow-hidden border border-outline-variant/5 hover:border-primary/20 transition-all duration-500">
<div class="relative h-64 w-full overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="overnight oats with blueberries and chia seeds in a glass jar, moody dark background with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqHmKWe3WOPndHHRm_xISDYXQo8rZRxsVoG6MLuqyWCKXURcXyRRgTtwJ1uE35EqKlIjZT3pbmgB0JT94wEo6YOXhi5qaaA9ytHyOLcDw9qBfaFMCexyb-7KtHNr0UwMSEglEcPIVr_S6D4yUrGeqheubTOrklDF4IdLt4f04IyOrUelQjAvM8izpon3xFbisHYnzw8A2E6_d7gMAUVZz_z4j3KQeyqvK8mhxjYyKmCNr6w-bNzd5dED3YUcgl7Ahs5gLN3cv3pXiw"/>
<div class="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
<span class="material-symbols-outlined text-primary text-lg" style="font-variation-settings: 'FILL' 1;">timer</span>
<span class="text-[10px] font-bold text-white uppercase tracking-tighter">05 MIN</span>
</div>
<div class="absolute bottom-4 left-4 flex gap-2">
<span class="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[9px] font-black px-2 py-0.5 rounded uppercase">Quick</span>
</div>
</div>
<div class="p-6 space-y-4">
<div class="space-y-1">
<h3 class="font-headline text-xl font-bold leading-tight group-hover:text-primary transition-colors">Overnight Oats Blue Pro</h3>
<p class="text-on-surface-variant text-xs font-medium">Petit-déjeuner haute performance prêt à l'emploi.</p>
</div>
<div class="flex justify-between items-end border-t border-outline-variant/10 pt-4">
<div class="flex gap-4">
<div class="flex flex-col">
<span class="text-[10px] text-zinc-500 font-bold uppercase">Prot</span>
<span class="text-sm font-bold">22g</span>
</div>
<div class="flex flex-col">
<span class="text-[10px] text-zinc-500 font-bold uppercase">Carbs</span>
<span class="text-sm font-bold">58g</span>
</div>
</div>
<div class="text-right">
<span class="block text-[10px] text-zinc-500 font-black uppercase tracking-widest">Energie</span>
<span class="text-2xl font-headline font-black text-primary italic">410 <small class="text-[10px] font-normal not-italic opacity-70">KCAL</small></span>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Shell -->
<footer class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#131313]/90 backdrop-blur-2xl rounded-t-[28px] shadow-[0_-20px_40px_rgba(0,0,0,0.4),0_0_10px_rgba(105,246,184,0.05)]">
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1">event_note</span>
<span class="font-label text-[10px] font-semibold uppercase tracking-widest">Journal</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1">analytics</span>
<span class="font-label text-[10px] font-semibold uppercase tracking-widest">Tableau</span>
</div>
<div class="flex flex-col items-center justify-center text-[#69f6b8] bg-[#69f6b8]/10 rounded-[20px] px-4 py-2 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
<span class="font-label text-[10px] font-semibold uppercase tracking-widest">Recettes</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1">calendar_month</span>
<span class="font-label text-[10px] font-semibold uppercase tracking-widest">Plan</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1">person</span>
<span class="font-label text-[10px] font-semibold uppercase tracking-widest">Profil</span>
</div>
</footer>
</body></html>