import React, { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import { ActivityRingsWidget, HydrationWidget, StepsDistanceRow } from './components/Widgets';
import { Section, Program, Seance } from './types';
import ProgramManager from './components/ProgramManager';
import LandingPage from './components/LandingPage';

// --- Session Player Overlay ---
// Composant pour "Jouer" une séance (Affiche les exercices en mode lecture/exécution)
const SessionPlayer = ({ seance, onClose }: { seance: Seance, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col animate-fade-in">
       {/* Header du Player */}
       <div className="px-5 py-6 bg-[#1C1C1E] border-b border-white/5 flex justify-between items-center sticky top-0">
          <div>
            <div className="text-[10px] font-bold text-green-neon uppercase tracking-widest mb-1">Entraînement en cours</div>
            <h2 className="text-xl font-black text-white">{seance.nom}</h2>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-[#2C2C2E] text-white flex items-center justify-center hover:bg-white/10">✕</button>
       </div>

       <div className="flex-1 overflow-y-auto px-5 py-6 pb-32">
          {/* Liste des exercices à faire */}
          <div className="space-y-6">
             {seance.exercices.length > 0 ? seance.exercices.map((ex, i) => (
                <div key={i} className="bg-card-bg-light rounded-[24px] p-6 border border-white/5 relative">
                   <div className="absolute left-0 top-6 bottom-6 w-1 bg-green-neon rounded-r-full"></div>
                   <div className="pl-3">
                      <h3 className="text-xl font-bold text-white mb-4">{ex.nom}</h3>
                      <div className="grid grid-cols-3 gap-2">
                         <div className="bg-black/30 rounded-xl p-3 text-center border border-white/5">
                            <div className="text-[10px] text-text-gray uppercase font-bold mb-1">Séries</div>
                            <div className="font-bold text-white">{typeof ex.series === 'string' ? ex.series : (Array.isArray(ex.series) ? ex.series.length : '3')}</div>
                         </div>
                         <div className="bg-black/30 rounded-xl p-3 text-center border border-white/5">
                            <div className="text-[10px] text-text-gray uppercase font-bold mb-1">Reps</div>
                            <div className="font-bold text-white">{ex.reps}</div>
                         </div>
                         <div className="bg-black/30 rounded-xl p-3 text-center border border-white/5">
                            <div className="text-[10px] text-text-gray uppercase font-bold mb-1">Repos</div>
                            <div className="font-bold text-white">{ex.repos}</div>
                         </div>
                      </div>
                      
                      {/* Checkbox factice pour valider */}
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
                         <div className="w-6 h-6 rounded border border-white/30 flex items-center justify-center cursor-pointer hover:border-green-neon"></div>
                         <span className="text-sm text-text-gray">Marquer comme fait</span>
                      </div>
                   </div>
                </div>
             )) : (
                <div className="text-center text-text-gray py-10 italic">Aucun exercice dans cette séance.</div>
             )}
          </div>
       </div>

       <div className="p-5 bg-gradient-to-t from-black to-transparent fixed bottom-0 left-0 right-0 max-w-[428px] mx-auto">
          <button onClick={onClose} className="w-full py-4 rounded-2xl bg-green-neon text-black font-black text-lg shadow-[0_0_20px_rgba(176,255,0,0.4)] hover:scale-[1.02] transition-transform">
             TERMINER LA SÉANCE
          </button>
       </div>
    </div>
  );
}

// --- Page Résumé (Accueil) ---

const ResumePage = ({ activeProgram }: { activeProgram: Program | null }) => (
  <div className="px-5 pb-32 pt-6 animate-fade-in">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-[34px] font-bold tracking-tight">Résumé</h1>
        <p className="text-sm text-text-gray mt-1">Aperçu de ta journée</p>
      </div>
      <div className="flex gap-3">
        <button className="w-12 h-12 rounded-full bg-card-bg flex items-center justify-center text-xl hover:bg-white/10 transition-colors">✏️</button>
        <button className="w-12 h-12 rounded-full bg-card-bg flex items-center justify-center hover:bg-white/10 transition-colors">
           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-neon to-ring-cyan flex items-center justify-center text-black font-bold text-lg">G</div>
        </button>
      </div>
    </div>
    
    <div className="space-y-4">
      {/* WIDGET PROGRAMME ACTIF (Design Accueil) */}
      {activeProgram ? (
        <div className="bg-card-bg rounded-[24px] p-6 border border-green-neon/20 relative overflow-hidden shadow-[0_0_20px_rgba(176,255,0,0.1)] mb-4 group cursor-pointer">
           <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl group-hover:scale-110 transition-transform duration-500">⚡️</div>
           
           <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                 <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-neon opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-neon"></span>
                    </span>
                    <span className="text-[11px] font-black text-green-neon uppercase tracking-widest">EN COURS</span>
                 </div>
                 <h3 className="text-2xl font-black text-white mb-1">{activeProgram.nom}</h3>
                 <p className="text-sm text-text-gray line-clamp-1">{activeProgram.description || 'Aucune description'}</p>
              </div>
           </div>

           <div className="flex flex-wrap gap-2 relative z-10">
              <span className="px-3 py-1.5 rounded-lg bg-[#3A3A3C] text-xs font-bold text-white border border-white/5">
                Semaine {activeProgram.semaineActive}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#3A3A3C] text-xs font-bold text-white border border-white/5">
                {activeProgram.seances} séances/sem
              </span>
           </div>
        </div>
      ) : (
        // Widget vide si aucun programme actif
        <div className="bg-card-bg rounded-[24px] p-6 border border-dashed border-white/10 text-center mb-4">
           <div className="text-4xl mb-2">💤</div>
           <h3 className="font-bold text-white">Repos</h3>
           <p className="text-xs text-text-gray mt-1">Aucun programme actif.</p>
        </div>
      )}

      <ActivityRingsWidget />
      <StepsDistanceRow />
      
      <div className="bg-card-bg rounded-[20px] p-6 mb-4 cursor-pointer hover:bg-card-bg-light transition-colors">
         <h3 className="text-[15px] font-bold mb-5 flex items-center gap-2"><span className="text-2xl">🔥</span> Calories</h3>
         <div className="flex items-center gap-6">
            <div className="relative w-[120px] h-[120px] shrink-0 flex items-center justify-center">
               <div className="absolute inset-0 rounded-full border-[16px] border-[#FF9500]/10"></div>
               <svg className="absolute inset-0 w-full h-full -rotate-90">
                 <circle cx="60" cy="60" r="52" fill="none" stroke="#FF9500" strokeWidth="16" strokeDasharray="327" strokeDashoffset="100" strokeLinecap="round" />
               </svg>
               <div className="text-center z-10">
                 <div className="text-3xl font-black text-[#FF9500] leading-none">2800</div>
                 <div className="text-[10px] text-text-gray mt-1">restantes</div>
               </div>
            </div>
            <div className="flex-1 space-y-4">
               <div>
                 <div className="flex justify-between mb-1"><span className="text-[11px] text-text-gray">Consommé</span><span className="text-[13px] font-bold text-[#FF2D55]">0</span></div>
                 <div className="h-1 bg-[#FF2D55]/20 rounded-full overflow-hidden"><div className="h-full w-0 bg-[#FF2D55]"></div></div>
               </div>
               <div>
                 <div className="flex justify-between mb-1"><span className="text-[11px] text-text-gray">Brûlé</span><span className="text-[13px] font-bold text-ring-cyan">146</span></div>
                 <div className="h-1 bg-ring-cyan/20 rounded-full overflow-hidden"><div className="h-full w-[10%] bg-ring-cyan"></div></div>
               </div>
            </div>
         </div>
      </div>

      <HydrationWidget />
    </div>
  </div>
);

// --- Page Entraînement (ex-Training/Formation) ---

const TrainingPage = ({ activeProgram }: { activeProgram: Program | null }) => {
  const [playingSession, setPlayingSession] = useState<Seance | null>(null);

  // Récupérer les séances de la semaine active
  const activeWeekIndex = (activeProgram?.semaineActive || 1) - 1;
  const currentSessions = activeProgram?.semaines[activeWeekIndex]?.seances || [];

  return (
    <>
      {playingSession && (
        <SessionPlayer seance={playingSession} onClose={() => setPlayingSession(null)} />
      )}
      
      <div className="px-5 pb-32 pt-6 animate-fade-in">
        <div className="flex justify-between items-center mb-6 pb-5 border-b border-separator">
          <div>
            <h1 className="text-[34px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-green-neon to-ring-cyan">Entraînement</h1>
            <p className="text-sm text-text-gray mt-1">
              {activeProgram ? activeProgram.nom : 'Aucun programme actif'}
            </p>
          </div>
          <button className="w-12 h-12 rounded-full bg-gradient-to-br from-green-neon to-ring-cyan text-black flex items-center justify-center text-2xl font-bold shadow-lg shadow-green-neon/20">
            {activeProgram ? '▶' : '➕'}
          </button>
        </div>
        
        {activeProgram ? (
          <div className="animate-fade-in space-y-5">
            
            {/* Header Semaine */}
            <div className="flex justify-between items-end mb-2">
               <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Semaine {activeProgram.semaineActive}</h2>
                  <div className="text-sm text-text-gray">{currentSessions.length} séances prévues</div>
               </div>
            </div>

            {/* LISTE DES SÉANCES DYNAMIQUES */}
            <div className="space-y-4">
              {currentSessions.length > 0 ? (
                currentSessions.map((seance, idx) => (
                  <div key={idx} className="bg-card-bg rounded-[24px] p-6 border border-white/5 relative group transition-all hover:bg-card-bg-light">
                     
                     <div className="flex justify-between items-start mb-4">
                        <div>
                           <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#3A3A3C] rounded-lg mb-2">
                               <span className="text-green-neon text-[10px] font-black uppercase tracking-wider">{seance.jour}</span>
                           </div>
                           <h3 className="text-xl font-bold text-white">{seance.nom}</h3>
                           <p className="text-sm text-text-gray mt-1">{seance.exercices.length} exercices • {seance.duree} min</p>
                        </div>
                        
                        <button 
                           onClick={() => setPlayingSession(seance)}
                           className="w-10 h-10 rounded-full bg-green-neon text-black flex items-center justify-center shadow-lg shadow-green-neon/20 hover:scale-110 transition-transform"
                        >
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </button>
                     </div>

                     {/* Preview exercices (max 3) */}
                     <div className="space-y-1.5 border-t border-white/5 pt-3">
                        {seance.exercices.slice(0, 3).map((ex, i) => (
                           <div key={i} className="flex justify-between text-xs">
                              <span className="text-white/80 font-medium">{ex.nom}</span>
                              <span className="text-text-gray">{Array.isArray(ex.series) ? ex.series.length : ex.series} x {ex.reps}</span>
                           </div>
                        ))}
                        {seance.exercices.length > 3 && (
                           <div className="text-[10px] text-text-gray italic pt-1">+ {seance.exercices.length - 3} autres exercices</div>
                        )}
                        {seance.exercices.length === 0 && (
                           <div className="text-xs text-text-gray italic">Aucun exercice configuré.</div>
                        )}
                     </div>

                  </div>
                ))
              ) : (
                <div className="text-center py-10 border border-dashed border-white/10 rounded-2xl">
                   <p className="text-text-gray">Aucune séance dans cette semaine.</p>
                </div>
              )}
            </div>

            {activeProgram.contraintes && (
              <div className="bg-[#2C2C2E]/50 rounded-2xl p-5 border border-white/5 mt-4">
                 <h3 className="text-xs font-bold text-text-gray uppercase mb-2 flex items-center gap-2">
                   <span>📝</span> Notes du programme
                 </h3>
                 <p className="text-sm text-white/80 italic leading-relaxed">"{activeProgram.contraintes}"</p>
              </div>
            )}

          </div>
        ) : (
          <div className="text-center py-16 opacity-70">
            <div className="text-7xl mb-4 grayscale opacity-50">🏋️‍♂️</div>
            <h2 className="text-2xl font-bold mb-2">Prêt à t'entraîner ?</h2>
            <p className="text-text-gray max-w-[250px] mx-auto">Crée ou sélectionne un programme pour commencer ton suivi.</p>
          </div>
        )}
      </div>
    </>
  );
};

// --- Page Programmes (Liste) ---

interface ProgPageProps {
  programs: Program[];
  activeProgramId: number | null;
  onCreateClick: () => void;
  onActivate: (id: number) => void;
  onEdit: (program: Program) => void;
  onDelete: (id: number) => void;
}

const ProgPage = ({ programs, activeProgramId, onCreateClick, onActivate, onEdit, onDelete }: ProgPageProps) => (
  <div className="px-5 pb-32 pt-6 animate-fade-in">
    {/* HEADER avec Titre et Boutons */}
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-[34px] font-black text-green-neon tracking-tight">Création</h1>
      <div className="flex gap-3">
        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-orange-400 text-black text-xl flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-orange-500/20">
          💪
        </button>
        <button 
           onClick={onCreateClick} 
           className="w-12 h-12 rounded-full bg-green-neon text-black text-2xl font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-green-neon/20"
        >
          +
        </button>
      </div>
    </div>
    
    {/* CARTE IA PREMIUM (JAUNE) */}
    <div className="bg-[#12120B] border border-[#FFD700]/30 rounded-[24px] p-6 mb-8 relative cursor-pointer group overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.05)]">
      <div className="absolute top-4 right-4 bg-[#FFD700]/10 border border-[#FFD700]/40 text-[#FFD700] px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase z-10">PREMIUM</div>
      
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="text-4xl bg-[#FFD700]/10 p-2 rounded-2xl border border-[#FFD700]/20">🤖</div>
        <div>
           <h3 className="text-[19px] font-bold text-[#FFD700]">Programme IA Personnalisé</h3>
        </div>
      </div>
      
      <p className="text-[13px] text-gray-400 mb-6 leading-relaxed relative z-10">Génération intelligente basée sur tes objectifs, morphologie et contraintes</p>
      
      <button className="relative z-10 w-[140px] py-3 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] font-bold text-sm hover:bg-[#FFD700]/20 transition-colors flex items-center justify-center gap-2">
         <span>✨</span> Découvrir
      </button>
    </div>

    {/* LISTE DES PROGRAMMES */}
    {programs.length > 0 ? (
      <div className="space-y-6">
        {programs.map((prog) => {
          const isActive = activeProgramId === prog.id;
          return (
            <div 
              key={prog.id} 
              onClick={() => onEdit(prog)}
              className="bg-card-bg rounded-[24px] p-6 border border-white/5 relative group transition-all hover:border-white/20 hover:bg-card-bg-light cursor-pointer"
            >
              
              {/* Header Carte */}
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-2xl font-bold text-white tracking-tight">{prog.nom}</h3>
                <button 
                  onClick={(e) => { e.stopPropagation(); onDelete(prog.id); }}
                  className="text-gray-600 hover:text-white transition-colors p-2 -mr-2"
                >
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>

              <p className="text-[13px] text-text-gray mb-5">{prog.description || 'Aucune description'}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 rounded-full bg-[#2C2C2E] text-green-neon text-xs font-bold">
                   {prog.duree} semaines
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#2C2C2E] text-ring-cyan text-xs font-bold">
                   {prog.seances} séances/sem
                </span>
                <span className="px-1 py-1.5 rounded-full bg-transparent text-white text-xs font-bold flex items-center gap-1">
                   💪 {prog.objectif}
                </span>
              </div>

              {isActive ? (
                <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-green-neon to-ring-cyan text-black font-black text-[13px] shadow-[0_0_15px_rgba(176,255,0,0.3)] flex items-center justify-center gap-2 uppercase tracking-wide cursor-default" onClick={(e) => e.stopPropagation()}>
                   <div className="w-4 h-4 bg-black border border-white rounded flex items-center justify-center">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg>
                   </div>
                   PROGRAMME ACTIF
                </button>
              ) : (
                <button 
                  onClick={(e) => { e.stopPropagation(); onActivate(prog.id); }}
                  className="w-full py-3.5 rounded-xl bg-[#2C2C2E] text-white font-bold text-[13px] hover:bg-[#3A3A3C] transition-colors border border-white/5 uppercase tracking-wide hover:border-green-neon hover:text-green-neon"
                >
                  ACTIVER
                </button>
              )}

            </div>
          );
        })}
      </div>
    ) : (
      <div className="text-center py-10 border border-dashed border-white/10 rounded-[24px]">
        <div className="text-5xl mb-4 opacity-50">📋</div>
        <p className="text-base mb-6 text-white/80">Tu n'as pas encore de programme.</p>
        <button 
          onClick={onCreateClick}
          className="bg-[#2C2C2E] text-white px-6 py-3 rounded-xl font-bold hover:bg-green-neon hover:text-black transition-all"
        >
          Créer votre programme
        </button>
      </div>
    )}
  </div>
);

const NutritionPage = () => (
  <div className="px-5 pt-16 text-center animate-fade-in">
    <div className="text-7xl mb-6 animate-bounce-slow">🥑</div>
    <h2 className="text-2xl font-bold mb-3">Nutrition</h2>
    <p className="text-text-gray leading-relaxed max-w-[300px] mx-auto">
      La section nutrition arrive bientôt.<br/>
      Prépare-toi à suivre tes macros comme un pro.
    </p>
  </div>
);

const ProfilePage = () => (
  <div className="px-5 pb-32 pt-6 animate-fade-in">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-[28px] font-bold">Profil</h1>
      <button className="w-12 h-12 rounded-full bg-card-bg-light flex items-center justify-center text-xl hover:bg-white/10 transition-colors">⚙️</button>
    </div>

    <div className="bg-card-bg rounded-[24px] p-8 text-center mb-5 border border-white/5">
      <div className="relative w-[120px] h-[120px] mx-auto mb-5 rounded-full bg-gradient-to-br from-green-neon to-ring-cyan flex items-center justify-center text-[56px] font-black text-black shadow-lg shadow-green-neon/30">
        G
      </div>
      <h2 className="text-2xl font-extrabold mb-1.5 text-white">Gabriel</h2>
      <div className="text-sm text-text-gray mb-4">Mode local</div>
      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-neon/10 border border-green-neon/50 rounded-full text-sm font-bold text-green-neon">
        <span>🔥</span> Streak 7 jours
      </div>
    </div>

    <div className="bg-card-bg rounded-[24px] p-6 mb-5 border border-white/5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">📊 Statistiques</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
          <div className="text-3xl mb-2">💪</div>
          <div className="text-[28px] font-black text-green-neon mb-1">42</div>
          <div className="text-xs text-gray-400 font-bold uppercase">Séances</div>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
          <div className="text-3xl mb-2">⚖️</div>
          <div className="text-[28px] font-black text-green-neon mb-1">75</div>
          <div className="text-xs text-gray-400 font-bold uppercase">Poids (kg)</div>
        </div>
      </div>
    </div>
  </div>
);

// --- DONNÉES PAR DÉFAUT DU PROGRAMME "gab" ---
const DEFAULT_PROGRAM: Program = {
  id: 1,
  nom: "gab",
  description: "Aucune description",
  niveau: "Intermédiaire",
  objectif: "masse",
  duree: 4,
  seances: 2,
  materiel: "Salle de sport complète",
  dureeSeance: 60,
  contraintes: "",
  dateCreation: new Date().toISOString(),
  semaines: [
    {
      numero: 1,
      seances: [
        { nom: "Séance A", jour: "Lundi", duree: 60, exercices: [] },
        { nom: "Séance B", jour: "Jeudi", duree: 60, exercices: [] }
      ]
    }
  ],
  semaineActive: 1
};

const App = () => {
  const [showLanding, setShowLanding] = useState<boolean>(() => {
    return !localStorage.getItem('onari_launched');
  });
  const [currentSection, setCurrentSection] = useState<Section>('resume');
  // Initialisation avec le programme "gab" par défaut
  const [programs, setPrograms] = useState<Program[]>([DEFAULT_PROGRAM]);
  // Le programme "gab" (id 1) est actif par défaut
  const [activeProgramId, setActiveProgramId] = useState<number | null>(1);
  const [isManagingProgram, setIsManagingProgram] = useState(false);
  const [programToEdit, setProgramToEdit] = useState<Program | null>(null);

  const handleLandingStart = () => {
    localStorage.setItem('onari_launched', '1');
    setShowLanding(false);
  };

  // --- PERSISTANCE LOCALE (LocalStorage) ---
  useEffect(() => {
    // Charger les données au démarrage
    const savedProgs = localStorage.getItem('onari_programs');
    const savedActiveId = localStorage.getItem('onari_active_id');
    
    if (savedProgs) {
      try {
        const parsed = JSON.parse(savedProgs);
        // Si le local storage est vide ou tableau vide, on garde le défaut, sinon on remplace
        if (parsed && parsed.length > 0) {
            setPrograms(parsed);
        }
      } catch (e) {
        console.error("Erreur lecture sauvegarde programmes", e);
      }
    }
    
    if (savedActiveId) {
       setActiveProgramId(Number(savedActiveId));
    }
  }, []);

  useEffect(() => {
    // Sauvegarder à chaque modification
    localStorage.setItem('onari_programs', JSON.stringify(programs));
    if (activeProgramId) {
      localStorage.setItem('onari_active_id', String(activeProgramId));
    } else {
      localStorage.removeItem('onari_active_id');
    }
  }, [programs, activeProgramId]);


  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener('touchmove', preventDefault, { passive: false });
    return () => document.removeEventListener('touchmove', preventDefault);
  }, []);

  const handleSaveFinalProgram = (finalProgram: Program) => {
    setPrograms((prev) => {
      // Check if updating existing program
      const existingIndex = prev.findIndex(p => p.id === finalProgram.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = finalProgram;
        return updated;
      }
      return [...prev, finalProgram];
    });

    // Si on éditait le programme actif ou un nouveau, on le définit comme actif
    setActiveProgramId(finalProgram.id);
    
    // Reset state
    setIsManagingProgram(false);
    setProgramToEdit(null);
    
    // Redirection vers 'training' pour montrer que c'est prêt
    setCurrentSection('training'); 
  };

  const handleDeleteProgram = (id: number) => {
    if (window.confirm('Es-tu sûr de vouloir supprimer ce programme ?')) {
      const newProgs = programs.filter(p => p.id !== id);
      setPrograms(newProgs);
      if (activeProgramId === id) {
        setActiveProgramId(null);
      }
    }
  };

  const handleActivateProgram = (id: number) => {
    setActiveProgramId(id);
    setCurrentSection('training'); // Redirection vers l'entraînement pour commencer tout de suite
  };
  
  const handleEditProgram = (program: Program) => {
    setProgramToEdit(program);
    setIsManagingProgram(true);
  };

  const activeProgram = programs.find(p => p.id === activeProgramId) || null;

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-green-neon selection:text-black">
      <div className="max-w-[428px] mx-auto min-h-screen bg-black relative shadow-2xl overflow-hidden">

        {showLanding ? (
          <LandingPage onStart={handleLandingStart} />
        ) : isManagingProgram ? (
          <ProgramManager
            programToEdit={programToEdit}
            onSave={handleSaveFinalProgram}
            onCancel={() => {
              setIsManagingProgram(false);
              setProgramToEdit(null);
            }}
          />
        ) : (
          <>
            {currentSection === 'resume' && <ResumePage activeProgram={activeProgram} />}
            {currentSection === 'training' && <TrainingPage activeProgram={activeProgram} />}
            {currentSection === 'prog' && (
              <ProgPage
                programs={programs}
                activeProgramId={activeProgramId}
                onCreateClick={() => {
                  setProgramToEdit(null);
                  setIsManagingProgram(true);
                }}
                onActivate={handleActivateProgram}
                onEdit={handleEditProgram}
                onDelete={handleDeleteProgram}
              />
            )}
            {currentSection === 'nutrition' && <NutritionPage />}
            {currentSection === 'profil' && <ProfilePage />}
            <BottomNav currentSection={currentSection} onNavigate={setCurrentSection} />
          </>
        )}
        
      </div>
    </div>
  );
};

export default App;