<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Nutrition - Meal Plan</title>
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
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .glass-card {
            background: rgba(26, 26, 26, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
<!-- TopAppBar -->
<header class="flex justify-between items-center px-6 h-16 w-full fixed top-0 z-50 bg-[#0e0e0e]/80 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#69f6b8] cursor-pointer active:scale-95 transition-transform" data-icon="menu">menu</span>
<h1 class="font-lexend font-bold text-lg tracking-wide uppercase text-[#69f6b8]">Nutrition</h1>
</div>
<div class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30 active:scale-95 transition-transform cursor-pointer">
<img alt="User" data-alt="professional portrait of a fit woman with athletic features in soft studio lighting with a dark minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFJi25J8IdR-8LJ7HTnkaNWY05CvWrUh4SNeN1aRUJ-BosQmeQrqTMYWFVqmaPRgYfDc1EzUyqjp89BLruKJmDNwnWg3PVjwfq6CKx1meYf6iXTufbBE2qAqEQbj7XZaXTdf4e4hGoPaWimH0ta0RJHxWP8HQOzh25KJP_rS4Px3KnbvoXrnlkfk0vCPtqKklBndEPwS9MWUhyoqU7LTG1Hvb1IKSF1gHyzzq8p-GjZYT5R4QeB2T-WO4AOnI78NX47FXEnjJdD4Xm"/>
</div>
</header>
<main class="pt-24 pb-32 px-6 max-w-5xl mx-auto min-h-screen">
<!-- Header Actions Section -->
<section class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 class="font-headline text-3xl font-extrabold tracking-tight mb-2">Weekly Plan</h2>
<p class="text-on-surface-variant text-sm font-medium">Fuel your performance with precision timing.</p>
</div>
<div class="flex gap-3">
<button class="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase shadow-[0_10px_20px_rgba(6,183,127,0.2)] active:scale-95 transition-all">
<span class="material-symbols-outlined text-lg" data-icon="auto_awesome">auto_awesome</span>
                    Auto-fill IA
                </button>
<button class="flex items-center justify-center bg-surface-container-high text-on-surface px-4 py-3.5 rounded-xl font-semibold text-sm border border-outline-variant/10 active:scale-95 transition-all">
<span class="material-symbols-outlined" data-icon="shopping_basket">shopping_basket</span>
</button>
</div>
</section>
<!-- Horizontal Week Scroll -->
<section class="mb-10 -mx-6 px-6 overflow-x-auto hide-scrollbar flex gap-4 scroll-smooth">
<div class="flex flex-col items-center justify-center min-w-[72px] h-24 rounded-2xl bg-surface-container-low text-zinc-500 cursor-pointer hover:bg-surface-container-high transition-colors">
<span class="text-[10px] font-bold uppercase tracking-widest mb-1">Mon</span>
<span class="font-headline text-xl font-bold">12</span>
</div>
<div class="flex flex-col items-center justify-center min-w-[72px] h-24 rounded-2xl bg-surface-container-low text-zinc-500 cursor-pointer hover:bg-surface-container-high transition-colors">
<span class="text-[10px] font-bold uppercase tracking-widest mb-1">Tue</span>
<span class="font-headline text-xl font-bold">13</span>
</div>
<!-- Active Day -->
<div class="flex flex-col items-center justify-center min-w-[72px] h-24 rounded-2xl bg-primary text-on-primary-container cursor-pointer shadow-[0_15px_30px_rgba(105,246,184,0.2)]">
<span class="text-[10px] font-bold uppercase tracking-widest mb-1">Wed</span>
<span class="font-headline text-xl font-bold">14</span>
<div class="w-1.5 h-1.5 rounded-full bg-on-primary-container mt-1"></div>
</div>
<div class="flex flex-col items-center justify-center min-w-[72px] h-24 rounded-2xl bg-surface-container-low text-zinc-500 cursor-pointer hover:bg-surface-container-high transition-colors">
<span class="text-[10px] font-bold uppercase tracking-widest mb-1">Thu</span>
<span class="font-headline text-xl font-bold">15</span>
</div>
<div class="flex flex-col items-center justify-center min-w-[72px] h-24 rounded-2xl bg-surface-container-low text-zinc-500 cursor-pointer hover:bg-surface-container-high transition-colors">
<span class="text-[10px] font-bold uppercase tracking-widest mb-1">Fri</span>
<span class="font-headline text-xl font-bold">16</span>
</div>
<div class="flex flex-col items-center justify-center min-w-[72px] h-24 rounded-2xl bg-surface-container-low text-zinc-500 cursor-pointer hover:bg-surface-container-high transition-colors">
<span class="text-[10px] font-bold uppercase tracking-widest mb-1">Sat</span>
<span class="font-headline text-xl font-bold">17</span>
</div>
<div class="flex flex-col items-center justify-center min-w-[72px] h-24 rounded-2xl bg-surface-container-low text-zinc-500 cursor-pointer hover:bg-surface-container-high transition-colors">
<span class="text-[10px] font-bold uppercase tracking-widest mb-1">Sun</span>
<span class="font-headline text-xl font-bold">18</span>
</div>
</section>
<!-- Meal Slots Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
<!-- Breakfast Slot (Filled) -->
<div class="glass-card rounded-xl overflow-hidden group border border-outline-variant/5">
<div class="relative h-40 w-full overflow-hidden">
<img alt="Breakfast" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="vibrant smoothie bowl with spinach, berries, seeds and almond butter on a dark slate surface, professional culinary lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Q4u4Y0pGf9tA3RHS0W5Ar9mVkZiIoHAwxNYMz_I8tc93uNZVazSif5LeLSh-0STgfddUXHaRJOmltHnUDGzvVn7X4O8OvXtboSs0f7sOmBATbwNBoO58YkdSLyKoAnaqae20zt44x0nHScCZMcuWhYpYjSpmLtOHA61iOBkAjvGaEIXU_y_tbfgW6scg_1ty03gFlzVllDQXJEVT7VZApMTYgPDG9hOlJmw-7xynU_zBhfms1WZrb64Ahj28IDpUolgM_5JXxIrf"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
<div class="absolute bottom-4 left-6">
<span class="bg-primary/20 backdrop-blur-md text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter mb-1 inline-block">Breakfast</span>
<h3 class="font-headline text-xl font-bold text-white">Green Energy Bowl</h3>
</div>
</div>
<div class="p-6 flex justify-between items-center">
<div class="flex items-center gap-4">
<div>
<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Energy</p>
<p class="font-headline font-bold text-primary">420 KCAL</p>
</div>
<div class="w-px h-8 bg-outline-variant/20"></div>
<div>
<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Protein</p>
<p class="font-headline font-bold">24g</p>
</div>
</div>
<button class="w-10 h-10 rounded-full flex items-center justify-center bg-surface-bright text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg" data-icon="edit">edit</span>
</button>
</div>
</div>
<!-- Lunch Slot (Filled) -->
<div class="glass-card rounded-xl overflow-hidden group border border-outline-variant/5">
<div class="relative h-40 w-full overflow-hidden">
<img alt="Lunch" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="grilled salmon fillet with asparagus and quinoa salad on a dark ceramic plate, elegant top-down view, moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHmha_UMLAP0msP0DIYJ6ZTU4bEa7AowwfvX9AJC9dpjF-GSg03JWAljETA2Ev2UIiMRE4_UOsNbGWITjb0ozSy36VbAlJFed7CImDnwVFMKhgcVUZ2sGNHBBLu8_jEznZTHTmq2-P7jPzl9PX3NXpkV-OvX-6IMZFGvVOSbDnIbB6lh2S7cxI-s5CvZpuENH5roqWZL9cL-2tWIEVwq5JP6ln_Ni9YRi1_myznklp3QjcxulJNRaN9psfyMzBP377234umY5c1DJ-"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
<div class="absolute bottom-4 left-6">
<span class="bg-primary/20 backdrop-blur-md text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter mb-1 inline-block">Lunch</span>
<h3 class="font-headline text-xl font-bold text-white">Macro Salmon Plate</h3>
</div>
</div>
<div class="p-6 flex justify-between items-center">
<div class="flex items-center gap-4">
<div>
<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Energy</p>
<p class="font-headline font-bold text-primary">650 KCAL</p>
</div>
<div class="w-px h-8 bg-outline-variant/20"></div>
<div>
<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Protein</p>
<p class="font-headline font-bold">48g</p>
</div>
</div>
<button class="w-10 h-10 rounded-full flex items-center justify-center bg-surface-bright text-on-surface hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg" data-icon="edit">edit</span>
</button>
</div>
</div>
<!-- Dinner Slot (Empty) -->
<div class="bg-surface-container-low rounded-xl p-6 border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center min-h-[160px] group hover:border-primary/40 transition-colors cursor-pointer">
<div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary" data-icon="add">add</span>
</div>
<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Dinner</p>
<p class="text-sm font-semibold text-zinc-500">Add a meal to your plan</p>
</div>
<!-- Snack Slot (Empty) -->
<div class="bg-surface-container-low rounded-xl p-6 border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center min-h-[160px] group hover:border-primary/40 transition-colors cursor-pointer">
<div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary" data-icon="add">add</span>
</div>
<p class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Snack</p>
<p class="text-sm font-semibold text-zinc-500">Add a meal to your plan</p>
</div>
</div>
<!-- Daily Summary Section -->
<section class="mb-12">
<div class="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 shadow-2xl relative overflow-hidden">
<!-- Decorative background glow -->
<div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
<h4 class="text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-8">Daily Performance Summary</h4>
<div class="flex flex-col lg:flex-row gap-12 lg:items-center">
<!-- Main Metric -->
<div class="flex flex-col">
<span class="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mb-1">Planned Intake</span>
<div class="flex items-baseline gap-2">
<span class="font-headline text-5xl font-black text-white">1,070</span>
<span class="font-headline text-lg font-bold text-zinc-600">KCAL</span>
</div>
<div class="mt-4 flex items-center gap-2">
<div class="h-1.5 flex-1 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full" style="width: 48%;"></div>
</div>
<span class="text-[10px] font-bold text-zinc-500">48% of 2,200</span>
</div>
</div>
<!-- Macro Split -->
<div class="flex-1 grid grid-cols-3 gap-6">
<div class="space-y-1">
<div class="flex justify-between items-end">
<span class="text-[10px] font-bold text-zinc-500 uppercase">Protein</span>
<span class="font-headline text-sm font-bold">72g</span>
</div>
<div class="h-1 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-primary-container" style="width: 65%;"></div>
</div>
</div>
<div class="space-y-1">
<div class="flex justify-between items-end">
<span class="text-[10px] font-bold text-zinc-500 uppercase">Carbs</span>
<span class="font-headline text-sm font-bold">115g</span>
</div>
<div class="h-1 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-zinc-400" style="width: 42%;"></div>
</div>
</div>
<div class="space-y-1">
<div class="flex justify-between items-end">
<span class="text-[10px] font-bold text-zinc-500 uppercase">Fats</span>
<span class="font-headline text-sm font-bold">38g</span>
</div>
<div class="h-1 bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-secondary-container" style="width: 38%;"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#131313]/90 backdrop-blur-2xl rounded-t-[28px] shadow-[0_-20px_40px_rgba(0,0,0,0.4),0_0_10px_rgba(105,246,184,0.05)]">
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1" data-icon="event_note">event_note</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest">Journal</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1" data-icon="analytics">analytics</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest">Dashboard</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1" data-icon="auto_awesome">auto_awesome</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest">Recipes</span>
</div>
<div class="flex flex-col items-center justify-center text-[#69f6b8] bg-[#69f6b8]/10 rounded-[20px] px-4 py-2 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1" data-icon="calendar_month">calendar_month</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest">Plan</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-4 py-2 hover:text-[#69f6b8]/80 active:scale-90 transition-all duration-300 ease-out cursor-pointer">
<span class="material-symbols-outlined mb-1" data-icon="person">person</span>
<span class="font-manrope text-[10px] font-semibold uppercase tracking-widest">Profile</span>
</div>
</nav>
</body></html>