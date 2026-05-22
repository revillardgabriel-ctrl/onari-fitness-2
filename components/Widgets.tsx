import React from 'react';

// --- Activity Rings SVG Widget ---
export const ActivityRingsWidget = () => {
  // Using demo values to match the visual
  const cal = 146; const calTarget = 700;
  const min = 1; const minTarget = 60;
  const stand = 6; const standTarget = 12;

  // Calculations for stroke-dashoffset (Circle circumference)
  // R=70 -> C=440
  // R=55 -> C=345
  // R=40 -> C=251
  const off1 = 440 - (440 * Math.min(cal/calTarget, 1));
  const off2 = 345 - (345 * Math.min(min/minTarget, 1));
  const off3 = 251 - (251 * Math.min(stand/standTarget, 1));

  return (
    <div className="bg-card-bg rounded-[20px] p-5 mb-4 relative cursor-pointer" onClick={() => alert('Détails activité')}>
      <h3 className="text-lg font-bold mb-5 text-white">Anneaux Activité</h3>
      <div className="flex gap-8 items-center">
        <div className="relative w-[160px] h-[160px]">
          <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
            {/* Background Rings */}
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255, 45, 85, 0.2)" strokeWidth="12"/>
            <circle cx="80" cy="80" r="55" fill="none" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="12"/>
            <circle cx="80" cy="80" r="40" fill="none" stroke="rgba(176, 255, 0, 0.2)" strokeWidth="12"/>
            {/* Progress Rings */}
            <circle cx="80" cy="80" r="70" fill="none" stroke="#FF2D55" strokeWidth="12" strokeDasharray="440" strokeDashoffset={off1} strokeLinecap="round" className="transition-all duration-1000 ease-out"/>
            <circle cx="80" cy="80" r="55" fill="none" stroke="#00D4FF" strokeWidth="12" strokeDasharray="345" strokeDashoffset={off2} strokeLinecap="round" className="transition-all duration-1000 ease-out"/>
            <circle cx="80" cy="80" r="40" fill="none" stroke="#B0FF00" strokeWidth="12" strokeDasharray="251" strokeDashoffset={off3} strokeLinecap="round" className="transition-all duration-1000 ease-out"/>
          </svg>
        </div>
        <div className="flex-1 space-y-3">
          <div>
            <div className="text-xl font-extrabold text-[#FF2D55]">{cal}<span className="text-sm font-normal text-text-gray">/{calTarget}</span></div>
            <div className="text-[11px] text-text-gray">KCAL</div>
          </div>
          <div>
            <div className="text-xl font-extrabold text-[#00D4FF]">{min}<span className="text-sm font-normal text-text-gray">/{minTarget}</span></div>
            <div className="text-[11px] text-text-gray">MIN</div>
          </div>
          <div>
            <div className="text-xl font-extrabold text-green-neon">{stand}<span className="text-sm font-normal text-text-gray">/{standTarget}</span></div>
            <div className="text-[11px] text-text-gray">H</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Hydration Widget ---
export const HydrationWidget = () => {
  const current = 0; // ml
  const target = 2000;
  
  return (
    <div className="bg-card-bg rounded-[20px] p-6 mb-4 cursor-pointer" onClick={() => alert('Détails hydratation')}>
      <h3 className="text-[15px] font-bold mb-5 flex items-center gap-2">
        <span className="text-2xl">💧</span> Hydratation
      </h3>
      <div className="flex items-center gap-6">
        <div className="relative w-[80px] h-[140px] shrink-0">
          <svg width="80" height="140" viewBox="0 0 80 140">
            <path d="M25,10 L25,0 L55,0 L55,10 L60,15 L60,130 C60,135 55,140 50,140 L30,140 C25,140 20,135 20,130 L20,15 Z" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="2"/>
            <path d="M25,10 L25,0 L55,0 L55,10 L60,15 L60,130 C60,135 55,140 50,140 L30,140 C25,140 20,135 20,130 L20,15 Z" fill="rgba(0, 212, 255, 0.05)"/>
            {/* Water level would be dynamic here */}
            <defs>
                <linearGradient id="grad-water" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#0099CC" stopOpacity="0.9"/>
                </linearGradient>
            </defs>
            <rect x="20" y={140 - (current/target)*125} width="40" height={(current/target)*125} fill="url(#grad-water)" className="transition-all duration-700"/>
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-4xl font-black text-ring-cyan mb-2 leading-none">
            {current}<span className="text-base font-normal text-text-gray"> ml</span>
          </div>
          <div className="text-[13px] text-text-gray mb-4">sur {target} ml</div>
          <div className="flex gap-1.5 flex-wrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-6 h-8 border-2 border-[#00D4FF]/30 rounded flex flex-col justify-end overflow-hidden">
                 <div className={`w-full bg-ring-cyan transition-all duration-300 ${i < Math.floor((current/target)*8) ? 'h-full' : 'h-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Small Widgets Row (Steps & Distance) ---
export const StepsDistanceRow = () => {
  return (
    <div className="flex gap-4 mb-4">
      {/* Steps */}
      <div className="flex-1 bg-card-bg rounded-[20px] p-4 cursor-pointer" onClick={() => alert('Détails pas')}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[15px] font-bold">Pas</h3>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div className="text-[11px] text-text-gray mb-1.5">Aujourd'hui</div>
        <div className="text-[32px] font-black text-[#9D7CFF] tracking-wide leading-none mb-3">6 078</div>
        {/* Simple visual bar graph representation */}
        <div className="flex items-end h-[45px] gap-[2px] justify-between opacity-80">
           {[...Array(12)].map((_,i) => (
             <div key={i} className="w-[10%] bg-[#9D7CFF] rounded-sm" style={{height: `${Math.random() * 80 + 20}%`, opacity: Math.random() > 0.5 ? 1 : 0.4}}></div>
           ))}
        </div>
      </div>

      {/* Distance */}
      <div className="flex-1 bg-card-bg rounded-[20px] p-4 cursor-pointer" onClick={() => alert('Détails distance')}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[15px] font-bold">Distance</h3>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div className="text-[11px] text-text-gray mb-1.5">Aujourd'hui</div>
        <div className="text-[32px] font-black text-ring-cyan tracking-wide leading-none mb-3">4,65 KM</div>
        <div className="flex items-end h-[45px] gap-[2px] justify-between opacity-80">
           {[...Array(12)].map((_,i) => (
             <div key={i} className="w-[10%] bg-ring-cyan rounded-sm" style={{height: `${Math.random() * 80 + 20}%`, opacity: Math.random() > 0.5 ? 1 : 0.4}}></div>
           ))}
        </div>
      </div>
    </div>
  )
}
