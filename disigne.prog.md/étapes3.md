<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
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
                        "display": ["Inter"]
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
<body class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-24">
<!-- Top Navigation -->
<header class="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 border-b border-primary/10">
<div class="flex items-center justify-between mb-4">
<button class="p-2 hover:bg-primary/10 rounded-full transition-colors">
<span class="material-icons-round text-slate-900 dark:text-slate-100">arrow_back</span>
</button>
<div class="text-center">
<p class="text-[10px] uppercase tracking-widest font-bold text-primary">Étape 3 sur 5</p>
<h1 class="text-xl font-bold">Pectoraux</h1>
</div>
<button class="p-2 hover:bg-primary/10 rounded-full transition-colors">
<span class="material-icons-round text-slate-900 dark:text-slate-100">search</span>
</button>
</div>
<!-- Progress Bar -->
<div class="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
<div class="w-3/5 h-full bg-primary"></div>
</div>
</header>
<main class="px-6 py-6">
<!-- Exercise List -->
<div class="space-y-4">
<!-- Exercise Item 1 -->
<div class="bg-white dark:bg-slate-900 p-4 rounded border border-primary/5 shadow-sm flex items-center gap-4">
<div class="w-16 h-16 rounded bg-primary/10 flex items-center justify-center overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="Close up of weight bench and barbell" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZixOkaVcK_iXpgMceiIZi4iLzb4Bd46Xnwu66sRti-RTn5ma2AWpVH2pWftO3oL7yUuCsUlmywdaYkjOkmeS54CvkKBYo8c-vbEYLqmngdo7A8EZqlVrCs3BwxD9hjQ88iLaPSU7JBq2lj-9UP4FJy7E9NLt672otnqrg8LIBU5GOZH4GiWszgTg6E2_uFzh3eDzGgzjkg2iL8Czrbh54ZW8dNFm0IfaAz15SLWqzJOrY-XB3XBNsRdR3lrWc7RRQ1jx7SP0CvzmX"/>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<h3 class="font-bold text-slate-900 dark:text-slate-100">Développé couché</h3>
<button class="text-primary">
<span class="material-icons-round">add_circle</span>
</button>
</div>
<div class="flex flex-wrap gap-2 mt-2">
<span class="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Intermédiaire</span>
<span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">Barre, Banc</span>
</div>
</div>
</div>
<!-- Exercise Item 2 -->
<div class="bg-white dark:bg-slate-900 p-4 rounded border border-primary/5 shadow-sm flex items-center gap-4">
<div class="w-16 h-16 rounded bg-primary/10 flex items-center justify-center overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="Dumbbells on the gym floor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_C4j99MsSxW0fxpqgeFav9s2Zy5ocNaOBKsjzKGdM9krBrhG2fRaB3_w4zA8yEfTUmikstxMEcwGhzIeiamt-2ApA9_B5R4rJNog8TPqjSb1r1BExmmjx6eXWs3_xW-8WSFGSAgsDDWq63jA5sDQVEaZEs9NhqFj3BRZuO0l6gSvE1CN5iyt_eQE9eoeTng7hq6f5TgOjMlNNJcKvB63uOWknmozWk1t29mqkTMGm-7Iem7f_aXfQs1lpUXyeAeXa0UL20jvBs430"/>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<h3 class="font-bold text-slate-900 dark:text-slate-100">Écarté couché</h3>
<button class="text-primary">
<span class="material-icons-round">add_circle</span>
</button>
</div>
<div class="flex flex-wrap gap-2 mt-2">
<span class="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Débutant</span>
<span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">Haltères, Banc</span>
</div>
</div>
</div>
<!-- Exercise Item 3 -->
<div class="bg-white dark:bg-slate-900 p-4 rounded border border-primary/5 shadow-sm flex items-center gap-4">
<div class="w-16 h-16 rounded bg-primary/10 flex items-center justify-center overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="Gym equipment parallel bars for dips" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0JkQ4ukRm9oFG5lq3s0MsIZj6abZYdzeCb1D-2CA5jPRsVCWgKacLp5BQiywmqHOu5_faaWClVeSXKLLQYNN_G59KdJxf3rjYukNEDdWsfPc4yFE7wYpl_DrSt8ogSprXCTxqwnWcy7xzK6LgdMZJxABwN-y1gsY51OuXBdiPKIaaiIuQwHGqpnorBGYUzQOFLjYIakbKvZzbBpOIWRs_iIxuIWgfTdLMWARfZhaAoKwiIxqWYpxyguSmPI3j_5o-f0jKoqntRPMA"/>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<h3 class="font-bold text-slate-900 dark:text-slate-100">Dips</h3>
<button class="text-primary">
<span class="material-icons-round">add_circle</span>
</button>
</div>
<div class="flex flex-wrap gap-2 mt-2">
<span class="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Intermédiaire</span>
<span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">Poids du corps</span>
</div>
</div>
</div>
<!-- Exercise Item 4 -->
<div class="bg-white dark:bg-slate-900 p-4 rounded border border-primary/5 shadow-sm flex items-center gap-4">
<div class="w-16 h-16 rounded bg-primary/10 flex items-center justify-center overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="Cable machine in a modern gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWTePCLXchupn_OLPw6WrK6vSoHoRAjMCJLShHexnJCY6wi7Zo-2k7K1qAx65vV8kUge395kMmsu7fdN7hzzDJr5Gnfwhaf8jZdwmu2DKo2y-OIZLz2FnNkcDpmMB-lFnsKfWvBS7sBC9KoDpn3kcVEm1RhKUxgoJPMFZTm_ASSNM8w7Dxa9qA3mgTPCNchZdwn5kuMm8msTKUdB7zUGqEd6H4_GvClGchWzdulePJa5QbQqTLRBFUkWI1P6HmaPHqgXgPUB-2OLhV"/>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<h3 class="font-bold text-slate-900 dark:text-slate-100">Poulie vis-à-vis</h3>
<button class="text-primary">
<span class="material-icons-round">add_circle</span>
</button>
</div>
<div class="flex flex-wrap gap-2 mt-2">
<span class="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Débutant</span>
<span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">Poulies</span>
</div>
</div>
</div>
<!-- Exercise Item 5 -->
<div class="bg-white dark:bg-slate-900 p-4 rounded border border-primary/5 shadow-sm flex items-center gap-4">
<div class="w-16 h-16 rounded bg-primary/10 flex items-center justify-center overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="Person doing pushups on a mat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPPXfl5SK2JsfxcenicNiIafBIeaknhhB3HdNSjFM-bsLwx5S0xjDYvNEXhmtuNxF63TxRP5WsEGjoobsgmqdIuDCPg6zPDHaEW_UmTBOuo7q5i40TohG8GzI0wqvCMt_UOjPN91xSA3qa7jZE8Gg3dVB7o-kqAgknytGJy9gmY4yuZuOq4gBT22Stn2bd3C6v7KVmpVvvDyBXnrIgjeiRH-2sBHOkWxVnXoOUab252pp6OW6wMwudrFBF1aZUMwnQAQOaiw-_jK7Q"/>
</div>
<div class="flex-1">
<div class="flex justify-between items-start">
<h3 class="font-bold text-slate-900 dark:text-slate-100">Pompes</h3>
<button class="text-primary">
<span class="material-icons-round text-primary/40">check_circle</span>
</button>
</div>
<div class="flex flex-wrap gap-2 mt-2">
<span class="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Débutant</span>
<span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">Poids du corps</span>
</div>
</div>
</div>
</div>
<div class="mt-8">
<button class="w-full bg-primary text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                Continuer l'étape suivante
            </button>
</div>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-primary/5 px-6 pb-6 pt-3 flex justify-between items-center z-50">
<a class="flex flex-col items-center gap-1 group" href="#">
<span class="material-icons-round text-slate-400 group-hover:text-primary transition-colors">dashboard</span>
<span class="text-[10px] font-medium text-slate-400 group-hover:text-primary">Résumé</span>
</a>
<a class="flex flex-col items-center gap-1 group" href="#">
<span class="material-icons-round text-primary transition-colors">fitness_center</span>
<span class="text-[10px] font-medium text-primary">Programme</span>
</a>
<a class="flex flex-col items-center gap-1 group" href="#">
<div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center -mt-8 shadow-lg shadow-primary/30 text-slate-900">
<span class="material-icons-round">trending_up</span>
</div>
<span class="text-[10px] font-medium text-slate-400 group-hover:text-primary">Prog</span>
</a>
<a class="flex flex-col items-center gap-1 group" href="#">
<span class="material-icons-round text-slate-400 group-hover:text-primary transition-colors">restaurant</span>
<span class="text-[10px] font-medium text-slate-400 group-hover:text-primary">Nutrition</span>
</a>
<a class="flex flex-col items-center gap-1 group" href="#">
<span class="material-icons-round text-slate-400 group-hover:text-primary transition-colors">person</span>
<span class="text-[10px] font-medium text-slate-400 group-hover:text-primary">Profil</span>
</a>
</nav>
</body></html>