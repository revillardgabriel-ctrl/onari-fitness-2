import React, { useState, useEffect } from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const STATS = [
  { value: '< 60s', label: 'Pour ton programme' },
  { value: '100%', label: 'Personnalisé' },
  { value: '0€', label: 'Gratuit' },
];

const STEPS = [
  { icon: '⚡', text: 'Réponds à 5 questions rapides' },
  { icon: '🤖', text: 'L\'IA génère ton programme' },
  { icon: '🏋️', text: 'Entraîne-toi dès maintenant' },
];

export const LandingPage = ({ onStart }: LandingPageProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Petit délai pour déclencher l'animation d'entrée
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`min-h-screen bg-black text-white flex flex-col transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="relative flex-1 flex flex-col px-6 pt-16 pb-6 overflow-hidden">

        {/* Glow background */}
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-[#B0FF00]/10 blur-[80px] pointer-events-none" />
        <div className="absolute top-[200px] right-[-60px] w-[200px] h-[200px] rounded-full bg-[#00D4FF]/8 blur-[60px] pointer-events-none" />

        {/* Logo / Badge app */}
        <div className="flex justify-center mb-10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B0FF00] flex items-center justify-center shadow-[0_0_24px_rgba(176,255,0,0.5)]">
              <span className="text-black text-2xl font-black">O</span>
            </div>
            <span className="text-white text-xl font-black tracking-tight">onari</span>
          </div>
        </div>

        {/* Headline principale */}
        <div className="relative z-10 text-center mb-4">
          <h1 className="text-[40px] font-black leading-[1.1] tracking-tight mb-4">
            Ton programme<br />
            <span className="text-[#B0FF00]">sur mesure</span><br />
            en 60 secondes.
          </h1>
          <p className="text-[16px] text-[#98989D] leading-relaxed max-w-[300px] mx-auto">
            Réponds à quelques questions.<br />
            Reçois un plan d'entraînement complet, maintenant.
          </p>
        </div>

        {/* Mockup / Visual card */}
        <div className="relative z-10 mx-auto w-full max-w-[320px] my-8">
          <div className="bg-[#1C1C1E] rounded-[28px] p-5 border border-white/5 shadow-2xl">
            {/* Header carte programme */}
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B0FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B0FF00]" />
              </span>
              <span className="text-[10px] font-black text-[#B0FF00] uppercase tracking-widest">Programme généré</span>
            </div>
            <h3 className="text-[18px] font-black text-white mb-1">Force & Explosivité</h3>
            <p className="text-[12px] text-[#98989D] mb-4">4 semaines · 3 séances/sem</p>

            {/* Aperçu séances */}
            <div className="space-y-2">
              {[
                { jour: 'Lun', nom: 'Squat · Bench · Deadlift', duree: '55 min' },
                { jour: 'Mer', nom: 'Power Clean · Press · Pull-up', duree: '50 min' },
                { jour: 'Ven', nom: 'Sprint · Pliometrie · Core', duree: '45 min' },
              ].map((s) => (
                <div key={s.jour} className="flex justify-between items-center bg-[#2C2C2E] rounded-xl px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-black text-[#00D4FF] w-6">{s.jour}</span>
                    <span className="text-[11px] font-medium text-white/80">{s.nom}</span>
                  </div>
                  <span className="text-[10px] text-[#98989D] shrink-0 ml-2">{s.duree}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-3 -right-3 bg-[#B0FF00] text-black text-[10px] font-black px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(176,255,0,0.6)] uppercase tracking-wide">
            Gratuit
          </div>
        </div>

        {/* Stats row */}
        <div className="relative z-10 flex justify-center gap-6 mb-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[20px] font-black text-[#B0FF00] leading-none">{s.value}</div>
              <div className="text-[10px] text-[#98989D] mt-0.5 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Étapes rapides */}
        <div className="relative z-10 bg-[#1C1C1E] rounded-[20px] p-5 border border-white/5 mb-8">
          <div className="space-y-3">
            {STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2C2C2E] flex items-center justify-center text-lg shrink-0">
                  {step.icon}
                </div>
                <span className="text-[13px] font-medium text-white/80">{step.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── CTA STICKY BOTTOM ─────────────────────────────── */}
      <div className="sticky bottom-0 px-6 pb-10 pt-4 bg-gradient-to-t from-black via-black/95 to-transparent">
        <button
          onClick={onStart}
          className="w-full py-5 rounded-2xl bg-[#B0FF00] text-black font-black text-[17px] uppercase tracking-wide shadow-[0_0_28px_rgba(176,255,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          Commencer — Gratuit
        </button>
        <p className="text-center text-[11px] text-[#98989D] mt-3">
          Aucun compte requis · 100% gratuit
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
