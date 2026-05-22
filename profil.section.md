<!DOCTYPE html>
<html lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Profil - Statistiques</title>
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
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-white text-text-light min-h-screen pb-24">
<main class="max-w-md mx-auto p-4 space-y-6">
<header class="flex justify-between items-center py-2">
<h1 class="text-3xl font-extrabold tracking-tight text-text-light">Profil</h1>
<button class="w-10 h-10 rounded-full bg-surface-hover-light flex items-center justify-center text-text-muted-light hover:bg-gray-200 transition-colors">
<span class="material-icons">settings</span>
</button>
</header>
<section class="bg-white rounded-[28px] p-6 flex flex-col items-center border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
<div class="relative mb-4">
<div class="w-24 h-24 rounded-full bg-gradient-to-tr from-accent-blue to-primary flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                    G
                </div>
<div class="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white flex items-center justify-center p-1">
<div class="w-full h-full bg-primary rounded-full flex items-center justify-center text-white shadow-sm">
<span class="material-icons text-sm">photo_camera</span>
</div>
</div>
</div>
<h2 class="text-2xl font-bold mb-1">Gabriel</h2>
<p class="text-sm text-text-muted-light mb-2">Mode local</p>
<p class="text-sm text-text-muted-light mb-4">Entrepreneur · ONARI</p>
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">
<span>🔥</span> Streak 7 jours
            </div>
</section>
<section class="space-y-4">
<h3 class="text-xl font-bold flex items-center gap-2">
<span>📊</span> Statistiques
            </h3>
<div class="flex overflow-x-auto no-scrollbar gap-2 pb-2">
<button class="px-5 py-2 rounded-full border border-primary text-primary font-medium text-sm whitespace-nowrap bg-primary/5">
                    Total
                </button>
<button class="px-5 py-2 rounded-full border border-gray-200 text-text-muted-light font-medium text-sm whitespace-nowrap hover:bg-gray-50 transition-colors">
                    Ce mois
                </button>
<button class="px-5 py-2 rounded-full border border-gray-200 text-text-muted-light font-medium text-sm whitespace-nowrap hover:bg-gray-50 transition-colors">
                    Semaine
                </button>
<button class="px-5 py-2 rounded-full border border-gray-200 text-text-muted-light font-medium text-sm whitespace-nowrap hover:bg-gray-50 transition-colors">
                    Aujourd'hui
                </button>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="bg-white rounded-[28px] p-5 flex flex-col items-center justify-center text-center border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] relative overflow-hidden group">
<div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span class="text-3xl mb-2">💪</span>
<span class="text-4xl font-extrabold text-primary mb-1">42</span>
<span class="text-xs font-medium text-text-muted-light uppercase tracking-wider">Séances</span>
</div>
<div class="bg-white rounded-[28px] p-5 flex flex-col items-center justify-center text-center border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
<span class="text-3xl mb-2">⚖️</span>
<span class="text-4xl font-extrabold text-primary mb-1">75</span>
<span class="text-xs font-medium text-text-muted-light uppercase tracking-wider">Poids (kg)</span>
</div>
<div class="bg-white rounded-[28px] p-5 flex flex-col items-center justify-center text-center border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] relative overflow-hidden group">
<div class="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span class="text-3xl mb-2">⏱️</span>
<span class="text-4xl font-extrabold text-accent-blue mb-1">28h</span>
<span class="text-xs font-medium text-text-muted-light uppercase tracking-wider">Temps</span>
</div>
<div class="bg-white rounded-[28px] p-5 flex flex-col items-center justify-center text-center border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] relative overflow-hidden group">
<div class="absolute inset-0 bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span class="text-3xl mb-2">🔥</span>
<span class="text-4xl font-extrabold text-accent-orange mb-1">18.2k</span>
<span class="text-xs font-medium text-text-muted-light uppercase tracking-wider">Calories</span>
</div>
</div>
</section>
<section class="mt-8">
<div class="flex justify-between items-center mb-6">
<h3 class="text-xl font-bold flex items-center gap-2">
<span>🏆</span> Records personnels
                </h3>
<button class="text-accent-blue text-sm font-semibold hover:underline">Modifier</button>
</div>
<div class="space-y-4">
<div class="relative bg-white rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 flex h-32">
<div class="w-1/3 h-full bg-gray-200">
<img alt="Realistic photo of a person performing a bench press with a barbell" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwCOYrhWyV6171kqhHj5CUbZBnhTw2wHtbBOzlYrzaC4w1EDp1soE1Ojafaozb5e-50wiVKpojL5M1UjJ3s3Dz3cNCXiaBPx0wcE-38US3LZ9h91Kt5QoGwjbwDXOpMV3U7VLP_Qo6fGHGV7-5ZdePBKd9pPdn8UAvz47mZ5uGljSz1MT6YPi_lWQ1S9wxY0fUHxiXgWK1ho8uo__REA-U00ChCrweY_5LPTRMb4laZov_nTAAvT1f1NuDNo5v_Qskc5BFyFZMKjbq"/>
</div>
<div class="w-2/3 p-4 flex flex-col justify-center">
<div class="flex justify-between items-start">
<h4 class="font-bold text-gray-900 text-lg leading-tight">Développé couché</h4>
<span class="bg-yellow-100 text-yellow-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider flex items-center gap-1 shrink-0 ml-2">
<span class="material-icons text-[12px]">emoji_events</span> PR
                        </span>
</div>
<p class="text-3xl font-extrabold text-primary mt-2">95 kg</p>
</div>
</div>
<div class="relative bg-white rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 flex h-32">
<div class="w-1/3 h-full bg-gray-200">
<img alt="Realistic action shot of someone doing a back squat" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZXYPNUcFiMrpmFP8AXSnGC-6MVfo00Qo2JiFTw-_HOvHEYn8oXu-SFQPTCDkSyfdwzrIPhkBRydI6fsELtpbZe_1dA9X88AEmgwO30EEJnKoPIPMfABrZJrXr4lsEZQ5rqtv32Z_bC_7V7KBODhy__ZvEWetJgBNFF8YcpR2szWvtYS_oRou6rAJ9qEIeYY_fzbUjusH7qbMFaiSy2mIE_picblLo2RvKL15cafPM9mFsGHZE9m-1PJJQeKafM-cyPQkbkoi6rGiM"/>
</div>
<div class="w-2/3 p-4 flex flex-col justify-center">
<div class="flex justify-between items-start">
<h4 class="font-bold text-gray-900 text-lg leading-tight">Squat</h4>
<span class="bg-yellow-100 text-yellow-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider flex items-center gap-1 shrink-0 ml-2">
<span class="material-icons text-[12px]">emoji_events</span> PR
                        </span>
</div>
<p class="text-3xl font-extrabold text-accent-blue mt-2">130 kg</p>
</div>
</div>
<div class="relative bg-white rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 flex h-32">
<div class="w-1/3 h-full bg-gray-200">
<img alt="Realistic photo of someone performing a deadlift" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmUaTWnOqj6SsMyfHmW9jpzFZUj9IbQpIj2vi8m0E3lpyhYP7TXT0NmV51rFQAf89zemkVV-qx4v6dRHf55vlmIaKzYyfjaqj2Hj0mwt6JOfkjBFZsiO5vaSdUV5M2FK7LrafiZItw9dktxTHmqeLX5v6ie7ZHkw7uAJh_RpFw8plaYhcjgRD262k65yjWLbGpG8xm5fTyvcxNaMmcecAKcFjcB8ZXmcGWde_mTVTwXtkcWErewMZcGfQ9g3gZaMAE9meLXN6yx0r7"/>
</div>
<div class="w-2/3 p-4 flex flex-col justify-center">
<div class="flex justify-between items-start">
<h4 class="font-bold text-gray-900 text-lg leading-tight">Soulevé de terre</h4>
<span class="bg-yellow-100 text-yellow-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider flex items-center gap-1 shrink-0 ml-2">
<span class="material-icons text-[12px]">emoji_events</span> PR
                        </span>
</div>
<p class="text-3xl font-extrabold text-accent-orange mt-2">150 kg</p>
</div>
</div>
<div class="relative bg-white rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 flex h-32">
<div class="w-1/3 h-full bg-gray-200">
<img alt="Realistic photo of someone doing a pull-up on a bar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1gArLMXpRW6KC0SWKnoe6w6Jn3fg40mtajiti4BiBTi971R4TkwXUyuny2Ggs623cFt3NY6ofJ_joKEUgAWDlTM0MPxOTt4qo5ajJjBoHDJkLJ8UK0rDPSteeN_CVti1cN1MRzsfkrhensh4cSZQMrZc7_B64NJ_ZJYyU9Shh3rUkje3l1eovf9UFzPXQpHPVvphW0PyUWHZbJQVxp6apFOtdZzPIOOrMlqZkGgGsIVWwm48x7vhHTW8I2iMK5T-Khw0Nnu7cLCMy"/>
</div>
<div class="w-2/3 p-4 flex flex-col justify-center">
<div class="flex justify-between items-start">
<h4 class="font-bold text-gray-900 text-lg leading-tight">Tractions</h4>
<span class="bg-yellow-100 text-yellow-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider flex items-center gap-1 shrink-0 ml-2">
<span class="material-icons text-[12px]">emoji_events</span> PR
                        </span>
</div>
<p class="text-3xl font-extrabold text-primary mt-2">25 reps</p>
</div>
</div>
</div>
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
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors py-2 px-1">
<span class="material-icons">show_chart</span>
<span class="text-[10px] font-medium">Prog</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors py-2 px-1">
<span class="material-icons">restaurant</span>
<span class="text-[10px] font-medium">Nutrition</span>
</button>
<button class="flex flex-col items-center gap-1 text-primary py-2 px-1">
<span class="material-icons">person</span>
<span class="text-[10px] font-medium">Profil</span>
</button>
</nav>
</body></html>