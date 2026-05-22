import React, { useState, useEffect } from 'react';
import { Program, Semaine, Seance, Exercice, Serie } from '../types';

interface ProgramManagerProps {
  onSave: (program: Program) => void;
  onCancel: () => void;
  programToEdit?: Program | null;
}

const SESSION_TYPES = [
  'Push', 'Pull', 'Legs', 'Upper Body', 'Lower Body', 'Full Body', 'Cardio', 'HIIT', 'Mobilité', 'Autre'
];

// --- Données de configuration ---

const BLOCK_TYPES = [
  { id: 'warmup', name: 'Échauffement', desc: 'Mobilité, activation', icon: '🔥', color: 'text-orange-500', border: 'border-orange-500', bg: 'bg-orange-500', bgLight: 'bg-orange-500/10' },
  { id: 'hypertrophy', name: 'Hypertrophie', desc: 'Prise de masse, 8-15 reps', icon: '💪', color: 'text-purple-500', border: 'border-purple-500', bg: 'bg-purple-500', bgLight: 'bg-purple-500/10' },
  { id: 'strength', name: 'Force', desc: 'Charges lourdes, 1-6 reps', icon: '⚡️', color: 'text-red-500', border: 'border-red-500', bg: 'bg-red-500', bgLight: 'bg-red-500/10' },
  { id: 'endurance', name: 'Endurance', desc: 'Haute répétition, 15-30+ reps', icon: '🏃', color: 'text-blue-500', border: 'border-blue-500', bg: 'bg-blue-500', bgLight: 'bg-blue-500/10' },
  { id: 'cardio', name: 'Cardio', desc: 'Course, vélo, rameur', icon: '❤️', color: 'text-pink-500', border: 'border-pink-500', bg: 'bg-pink-500', bgLight: 'bg-pink-500/10' },
  { id: 'cooldown', name: 'Retour au calme', desc: 'Stretching, relaxation', icon: '🧘', color: 'text-teal-500', border: 'border-teal-500', bg: 'bg-teal-500', bgLight: 'bg-teal-500/10' },
];

const EXERCISE_DB = [
  { name: 'Pompes classiques', muscle: 'Pecs', type: 'Poids du corps', niveau: 'debutant' },
  { name: 'Pompes larges', muscle: 'Pecs', type: 'Poids du corps', niveau: 'debutant' },
  { name: 'Pompes serrées', muscle: 'Triceps', type: 'Poids du corps', niveau: 'intermediaire' },
  { name: 'Pompes déclinées', muscle: 'Pecs', type: 'Poids du corps', niveau: 'intermediaire' },
  { name: 'Pompes inclinées', muscle: 'Pecs', type: 'Poids du corps', niveau: 'debutant' },
  { name: 'Squat', muscle: 'Jambes', type: 'Barre', niveau: 'intermediaire' },
  { name: 'Tractions', muscle: 'Dos', type: 'Poids du corps', niveau: 'avance' },
  { name: 'Développé Couché', muscle: 'Pecs', type: 'Barre', niveau: 'intermediaire' },
  { name: 'Curl Biceps', muscle: 'Bras', type: 'Haltères', niveau: 'debutant' },
  { name: 'Élévations Latérales', muscle: 'Épaules', type: 'Haltères', niveau: 'debutant' },
];

// --- Composants UI ---

const SectionTitle = ({ icon, title }: { icon: string, title: string }) => (
  <div className="flex items-center gap-2 mb-4 text-green-neon">
    <span className="text-xl">{icon}</span>
    <h3 className="font-bold text-base uppercase tracking-wider">{title}</h3>
  </div>
);

const StyledInput = ({ label, value, onChange, placeholder, type = 'text' }: any) => (
  <div className="mb-4">
    <label className="block text-[10px] font-bold text-text-gray uppercase mb-2 ml-1">{label}</label>
    {type === 'textarea' ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-card-bg-light rounded-xl p-4 text-white text-sm placeholder-white/30 outline-none focus:ring-1 focus:ring-green-neon transition-all min-h-[100px] resize-none"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-card-bg-light rounded-xl p-4 text-white text-sm placeholder-white/30 outline-none focus:ring-1 focus:ring-green-neon transition-all"
      />
    )}
  </div>
);

const StyledSelect = ({ label, value, onChange, options }: any) => (
  <div className="mb-4">
    <label className="block text-[10px] font-bold text-text-gray uppercase mb-2 ml-1">{label} *</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-card-bg-light rounded-xl p-4 text-white text-sm appearance-none outline-none focus:ring-1 focus:ring-green-neon transition-all pr-10"
      >
        <option value="" disabled>Sélectionne</option>
        {options.map((opt: any) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </div>
  </div>
);

// --- NOUVEAU : Configurateur d'Exercice (Pixel Perfect + Dynamic Techniques) ---

const ExerciseConfigurator = ({ 
  exerciseName, 
  blockType, 
  initialData, 
  onSave, 
  onCancel 
}: { 
  exerciseName: string, 
  blockType: string, 
  initialData?: Exercice, 
  onSave: (ex: Exercice) => void, 
  onCancel: () => void 
}) => {
  const defaultSeriesCount = Array.isArray(initialData?.series) ? initialData.series.length : 3;
  const [nbSeries, setNbSeries] = useState(defaultSeriesCount);
  const [restTime, setRestTime] = useState(initialData?.repos || '90 secondes');
  const [notes, setNotes] = useState(initialData?.notes || '');

  const generateSeries = (count: number) => {
    const existing = Array.isArray(initialData?.series) ? initialData.series : [];
    return Array(count).fill(null).map((_, i) => existing[i] || {
      reps: '10-12 reps',
      charge: '',
      rpe: 6,
      technique: 'Aucune',
      details: ''
    });
  };

  const [seriesData, setSeriesData] = useState<Serie[]>(generateSeries(defaultSeriesCount));

  useEffect(() => {
    setSeriesData(prev => {
      if (nbSeries > prev.length) {
        const toAdd = nbSeries - prev.length;
        const newSeries = Array(toAdd).fill({ reps: '10-12 reps', charge: '', rpe: 6, technique: 'Aucune', details: '' });
        return [...prev, ...newSeries];
      } else {
        return prev.slice(0, nbSeries);
      }
    });
  }, [nbSeries]);

  const updateSerie = (index: number, field: keyof Serie, value: any) => {
    const newData = [...seriesData];
    newData[index] = { ...newData[index], [field]: value };
    // Reset details if technique changes to 'Aucune'
    if (field === 'technique' && value === 'Aucune') {
        newData[index].details = '';
    }
    setSeriesData(newData);
  };

  const handleSave = () => {
    const ex: Exercice = {
      nom: exerciseName,
      type: blockType,
      series: seriesData,
      reps: seriesData[0].reps,
      repos: restTime,
      charge: seriesData[0].charge || '---',
      notes: notes
    };
    onSave(ex);
  };

  return (
    <div className="fixed inset-0 bg-black z-[90] flex flex-col animate-fade-in">
       <div className="px-5 py-4 flex items-center gap-4 bg-black border-b border-white/5 sticky top-0 z-10">
        <button onClick={onCancel} className="w-10 h-10 rounded-full bg-card-bg-light flex items-center justify-center text-white/80 hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <h2 className="font-bold text-xl text-white truncate">{exerciseName}</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 pb-32">
        
        {/* BLOC 1: Nombre de séries (Bordure verte) */}
        <div className="rounded-[24px] p-5 mb-6 border border-[#B0FF00]/50 bg-[#121412]">
           <label className="block text-[15px] font-bold text-[#B0FF00] mb-3">Nombre de séries</label>
           <div className="relative">
              <select 
                value={nbSeries}
                onChange={(e) => setNbSeries(parseInt(e.target.value))}
                className="w-full bg-[#1C1C1E] rounded-xl p-4 text-white text-base font-bold outline-none border border-white/10 appearance-none"
              >
                {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} séries</option>)}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#B0FF00] text-xs">▼</div>
           </div>
        </div>

        {/* BLOC 2: Config par série (Bordure Cyan) */}
        <div className="rounded-[24px] p-5 mb-6 border border-[#00D4FF]/30 bg-[#0A181C]">
           <h3 className="text-[17px] font-bold text-[#00D4FF] mb-6">Configuration série par série</h3>

           <div className="space-y-8">
             {seriesData.map((serie, idx) => (
               <div key={idx} className="relative">
                  <div className="text-[15px] font-bold text-[#00D4FF] mb-4">Série {idx + 1}</div>
                  
                  {/* Reps */}
                  <div className="mb-5">
                     <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">RÉPÉTITIONS</label>
                     <div className="relative">
                        <select 
                          value={serie.reps}
                          onChange={(e) => updateSerie(idx, 'reps', e.target.value)}
                          className="w-full bg-[#12181B] border border-[#00D4FF]/30 rounded-xl p-3.5 text-white text-sm font-bold outline-none appearance-none focus:border-[#00D4FF] transition-colors"
                        >
                          {['1-5 reps', '6-8 reps', '8-10 reps', '10-12 reps', '12-15 reps', '15-20 reps', 'AMRAP'].map(r => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#00D4FF] text-xs">▼</div>
                     </div>
                  </div>

                  {/* Charge */}
                  <div className="mb-5">
                     <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">CHARGE (KG)</label>
                     <input 
                        value={serie.charge}
                        onChange={(e) => updateSerie(idx, 'charge', e.target.value)}
                        placeholder="Ex: 70"
                        className="w-full bg-[#12181B] border border-white/10 rounded-xl p-3.5 text-white text-sm font-bold outline-none focus:border-[#00D4FF] placeholder-white/20 transition-colors"
                     />
                  </div>

                  {/* RPE Slider (Specifique) */}
                  <div className="mb-5 bg-[#12181B] border border-orange-500/20 rounded-xl p-4">
                     <div className="flex justify-between items-end mb-4">
                        <div className="flex flex-col">
                            <label className="text-[10px] font-bold text-gray-400 uppercase mb-1">RPE (EFFORT PERÇU)</label>
                            <div className="flex justify-between w-full text-[9px] text-gray-500 gap-8">
                                <span>Facile</span>
                                <span>Maximum</span>
                            </div>
                        </div>
                        <span className="text-xl font-black text-orange-400">{serie.rpe}/10</span>
                     </div>
                     
                     <div className="relative h-2 w-full rounded-full bg-gradient-to-r from-green-neon via-yellow-400 to-red-600">
                        <input 
                            type="range" min="1" max="10" step="0.5"
                            value={serie.rpe}
                            onChange={(e) => updateSerie(idx, 'rpe', parseFloat(e.target.value))}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div 
                            className="absolute top-1/2 -mt-2.5 h-5 w-5 bg-[#007AFF] rounded-full border-2 border-white shadow-md pointer-events-none"
                            style={{ left: `calc(${((serie.rpe - 1) / 9) * 100}% - 10px)` }}
                        ></div>
                     </div>
                  </div>

                  {/* Technique */}
                  <div className="mb-4">
                     <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">TECHNIQUE D'INTENSIFICATION</label>
                     <div className="relative">
                        <select 
                          value={serie.technique}
                          onChange={(e) => updateSerie(idx, 'technique', e.target.value)}
                          className="w-full bg-[#12181B] border border-purple-500/30 rounded-xl p-3.5 text-white text-sm font-bold outline-none appearance-none focus:border-purple-500 transition-colors"
                        >
                          {['Aucune', 'Drop Set', 'Rest Pause', 'Superset', 'Tempo', 'Partielles'].map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-purple-400 text-xs">▼</div>
                     </div>
                  </div>

                  {/* --- CHAMPS DYNAMIQUES SELON TECHNIQUE --- */}
                  
                  {/* Cas: Superset avec Animation */}
                  {serie.technique === 'Superset' && (
                    <div className="mt-2 bg-purple-500/10 border border-purple-500/40 rounded-xl p-4 animate-fade-in relative overflow-hidden group">
                       <div className="absolute inset-0 bg-purple-500/5 animate-pulse pointer-events-none"></div>
                       <div className="flex items-center gap-2 mb-3 relative z-10">
                          <span className="text-lg animate-bounce">🔗</span>
                          <label className="text-[11px] font-bold text-purple-400 uppercase tracking-wide">Exercice en Superset</label>
                       </div>
                       <div className="relative z-10">
                           <input 
                              value={serie.details || ''}
                              onChange={(e) => updateSerie(idx, 'details', e.target.value)}
                              placeholder="En attente de liaison..."
                              className="w-full bg-[#12181B] border border-purple-500/50 rounded-lg p-3 text-white text-sm placeholder-white/40 focus:border-purple-500 outline-none shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all"
                           />
                           <div className="absolute right-3 top-3 text-[10px] text-purple-400 animate-pulse font-bold">LIAISON ACTIVE</div>
                       </div>
                    </div>
                  )}

                  {/* Cas: Tempo */}
                  {serie.technique === 'Tempo' && (
                    <div className="mt-2 bg-[#00D4FF]/10 border border-[#00D4FF]/40 rounded-xl p-4 animate-fade-in">
                       <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg">⏱</span>
                          <label className="text-[11px] font-bold text-[#00D4FF] uppercase tracking-wide">Tempo (Excentrique - Pause - Conc.)</label>
                       </div>
                       <input 
                          value={serie.details || ''}
                          onChange={(e) => updateSerie(idx, 'details', e.target.value)}
                          placeholder="Ex: 3-0-1-0"
                          className="w-full bg-[#12181B] border border-[#00D4FF]/20 rounded-lg p-3 text-white text-sm placeholder-white/20 focus:border-[#00D4FF] outline-none"
                       />
                    </div>
                  )}

                  {/* Cas: Drop Set */}
                  {serie.technique === 'Drop Set' && (
                    <div className="mt-2 bg-red-500/10 border border-red-500/40 rounded-xl p-4 animate-fade-in">
                       <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg">📉</span>
                          <label className="text-[11px] font-bold text-red-500 uppercase tracking-wide">Détails Drop Set</label>
                       </div>
                       <input 
                          value={serie.details || ''}
                          onChange={(e) => updateSerie(idx, 'details', e.target.value)}
                          placeholder="Ex: -20% charge, échec"
                          className="w-full bg-[#12181B] border border-red-500/20 rounded-lg p-3 text-white text-sm placeholder-white/20 focus:border-red-500 outline-none"
                       />
                    </div>
                  )}

                  {idx < seriesData.length - 1 && <div className="h-px bg-white/5 my-8"></div>}
               </div>
             ))}
           </div>
        </div>

        {/* BLOC 3: Temps de repos (Bordure Orange) */}
        <div className="rounded-[24px] p-5 mb-6 border border-orange-500/50 bg-[#1C150B]">
           <label className="block text-[15px] font-bold text-orange-500 mb-3">Temps de repos</label>
           <div className="relative">
              <select 
                value={restTime}
                onChange={(e) => setRestTime(e.target.value)}
                className="w-full bg-[#000000]/40 rounded-xl p-4 text-white text-base font-bold outline-none border border-orange-500/20 appearance-none"
              >
                {['30 secondes', '45 secondes', '60 secondes', '90 secondes', '2 minutes', '3 minutes', '5 minutes'].map(t => (
                   <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-orange-500 text-xs">▼</div>
           </div>
        </div>

        {/* BLOC 4: Remarques (Bordure Violette) */}
        <div className="rounded-[24px] p-5 mb-6 border border-purple-500/50 bg-[#161221]">
           <label className="block text-[15px] font-bold text-purple-400 mb-3 flex items-center gap-2">
             <span>📝</span> Remarques / Consignes
           </label>
           <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Focus contraction, amplitude complète..."
              className="w-full bg-[#000000]/40 rounded-xl p-4 text-white text-sm outline-none min-h-[100px] placeholder-white/20 resize-none border border-purple-500/20"
           />
        </div>

      </div>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-black border-t border-white/10 z-20 max-w-[428px] mx-auto">
        <button onClick={handleSave} className="w-full bg-gradient-to-r from-green-neon to-ring-cyan text-black font-black text-lg py-4 rounded-xl shadow-lg shadow-green-neon/20 hover:scale-[1.02] transition-transform">
          {initialData ? 'Modifier l\'exercice' : 'Ajouter à la séance'}
        </button>
      </div>

    </div>
  );
};

// --- Sélecteur de Type de Bloc ---

const BlockTypeSelector = ({ onSelect, onBack }: { onSelect: (type: string) => void, onBack: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black z-[70] flex flex-col animate-fade-in">
       <div className="px-5 py-4 flex items-center justify-center relative bg-black border-b border-white/5">
          <button onClick={onBack} className="absolute left-5 w-10 h-10 rounded-full bg-card-bg-light flex items-center justify-center text-white/80 hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <h2 className="font-bold text-xl text-white">Type de bloc</h2>
       </div>

       <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
          {BLOCK_TYPES.map((block) => (
            <div 
              key={block.id}
              onClick={() => onSelect(block.name)}
              className={`border-2 ${block.border} rounded-[20px] p-5 cursor-pointer bg-card-bg transition-transform hover:scale-[1.02] active:scale-95`}
            >
               <div className="text-3xl mb-2">{block.icon}</div>
               <h3 className={`text-lg font-bold ${block.color} mb-1`}>{block.name}</h3>
               <p className="text-sm text-text-gray">{block.desc}</p>
            </div>
          ))}
       </div>
    </div>
  );
};

// --- Bibliothèque d'Exercices ---

const ExerciseLibrary = ({ onSelect, onBack, blockType }: { onSelect: (exName: string) => void, onBack: () => void, blockType: string }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Tout');
  
  const filters = ['Tout', 'Pecs', 'Dos', 'Jambes', 'Épaules', 'Bras', 'Abdos'];

  const filteredExercises = EXERCISE_DB.filter(ex => {
    const matchSearch = ex.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'Tout' || ex.muscle === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="fixed inset-0 bg-black z-[80] flex flex-col animate-fade-in">
       <div className="px-5 py-4 flex items-center justify-between bg-black border-b border-white/5">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="w-10 h-10 rounded-full bg-card-bg-light flex items-center justify-center text-white/80 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <h2 className="font-bold text-xl text-white">Bibliothèque</h2>
          </div>
          <button onClick={onBack} className="bg-green-neon text-black px-4 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
            ✓ Terminer
          </button>
       </div>

       <div className="flex-1 overflow-y-auto px-5 py-6 pb-32">
          <div className="bg-card-bg-light rounded-xl flex items-center px-4 py-3 mb-6 border border-white/5">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" className="mr-3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
             <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher..."
                className="bg-transparent outline-none text-white w-full placeholder-gray-500"
                autoFocus
             />
          </div>

          <button className="w-full bg-green-neon text-black font-bold py-3.5 rounded-xl mb-6 shadow-lg shadow-green-neon/10 hover:opacity-90 transition-opacity">
            + Créer un exercice
          </button>

          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
            {filters.map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                  filter === f 
                  ? 'bg-green-neon text-black' 
                  : 'bg-card-bg-light text-white border border-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="text-xs text-text-gray mb-4">{filteredExercises.length} exercices au total</div>

          <div className="space-y-4">
             {filteredExercises.map((ex, i) => (
               <div 
                 key={i} 
                 onClick={() => onSelect(ex.name)}
                 className="flex items-center pl-4 py-1 cursor-pointer group"
               >
                  <div className="w-1 h-12 bg-green-neon rounded-full mr-4 group-hover:scale-y-110 transition-transform origin-center"></div>
                  <div>
                     <div className="text-lg font-bold text-white mb-0.5 group-hover:text-green-neon transition-colors">{ex.name}</div>
                     <div className="text-sm text-text-gray">{ex.type} • {ex.niveau}</div>
                  </div>
               </div>
             ))}
             {filteredExercises.length === 0 && (
               <div className="text-center py-10 text-text-gray italic">Aucun exercice trouvé.</div>
             )}
          </div>
       </div>
    </div>
  );
};


// --- Vue Détail Séance (SessionDetail) ---

const SessionDetail = ({ seance, onUpdate, onBack }: { seance: Seance, onUpdate: (s: Seance) => void, onBack: () => void }) => {
  const [viewState, setViewState] = useState<'list' | 'editInfo' | 'selectBlockType' | 'exerciseLibrary' | 'configureExercise'>('list');
  const [selectedBlockType, setSelectedBlockType] = useState<string | null>(null);
  const [pendingExerciseName, setPendingExerciseName] = useState<string | null>(null);
  const [editingExerciseIndex, setEditingExerciseIndex] = useState<number | null>(null);

  const [tempInfo, setTempInfo] = useState({
    jour: seance.jour,
    type: 'Full Body',
    nom: seance.nom,
    notes: seance.notes || ''
  });

  useEffect(() => {
    const matchedType = SESSION_TYPES.find(t => seance.nom.includes(t));
    setTempInfo({
      jour: seance.jour,
      type: matchedType || 'Full Body',
      nom: seance.nom,
      notes: seance.notes || ''
    });
  }, [seance]);

  const startAddProcess = () => setViewState('selectBlockType');

  const handleBlockTypeSelect = (type: string) => {
    setSelectedBlockType(type);
    setViewState('exerciseLibrary');
  };

  const handleExerciseSelect = (exName: string) => {
    setPendingExerciseName(exName);
    setEditingExerciseIndex(null);
    setViewState('configureExercise');
  };

  const handleConfigSave = (configuredEx: Exercice) => {
    const currentExercices = seance.exercices || [];
    
    if (editingExerciseIndex !== null) {
        const updated = currentExercices.map((ex, i) => i === editingExerciseIndex ? configuredEx : ex);
        onUpdate({ ...seance, exercices: updated });
    } else {
        onUpdate({ ...seance, exercices: [...currentExercices, configuredEx] });
    }
    
    setViewState('list');
    setSelectedBlockType(null);
    setPendingExerciseName(null);
    setEditingExerciseIndex(null);
  };

  const handleEditExercise = (idx: number) => {
    const ex = seance.exercices[idx];
    setPendingExerciseName(ex.nom);
    setSelectedBlockType(ex.type || 'Standard');
    setEditingExerciseIndex(idx);
    setViewState('configureExercise');
  };

  const handleRemoveExercice = (exIdx: number) => {
    if(window.confirm("Supprimer cet exercice ?")) {
        const currentExercices = seance.exercices || [];
        const newExercices = currentExercices.filter((_, idx) => idx !== exIdx);
        onUpdate({ ...seance, exercices: newExercices });
    }
  };

  const saveSessionInfo = () => {
    const finalName = tempInfo.nom.trim() === '' ? tempInfo.type : tempInfo.nom;
    onUpdate({
      ...seance,
      jour: tempInfo.jour,
      nom: finalName,
      notes: tempInfo.notes
    });
    setViewState('list');
  };

  const groupedExercises: { [key: string]: { ex: Exercice, idx: number }[] } = {};
  (seance.exercices || []).forEach((ex, idx) => {
      const type = ex.type || 'Autre';
      if (!groupedExercises[type]) groupedExercises[type] = [];
      groupedExercises[type].push({ ex, idx });
  });

  if (viewState === 'selectBlockType') {
    return <BlockTypeSelector onSelect={handleBlockTypeSelect} onBack={() => setViewState('list')} />;
  }

  if (viewState === 'exerciseLibrary') {
    return <ExerciseLibrary 
      onSelect={handleExerciseSelect} 
      onBack={() => setViewState('selectBlockType')} 
      blockType={selectedBlockType || ''}
    />;
  }

  if (viewState === 'configureExercise') {
    const exToEdit = editingExerciseIndex !== null ? seance.exercices[editingExerciseIndex] : undefined;
    return <ExerciseConfigurator 
      exerciseName={pendingExerciseName || 'Exercice'}
      blockType={selectedBlockType || 'Standard'}
      initialData={exToEdit}
      onSave={handleConfigSave}
      onCancel={() => setViewState('list')}
    />;
  }

  if (viewState === 'editInfo') {
     return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[80] flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-[#1C1C1E] w-full max-w-md rounded-[24px] p-6 shadow-2xl border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-2xl text-gray-400">⚙️</span>
            <h2 className="text-xl font-bold text-white">Modifier la séance</h2>
          </div>
          <div className="space-y-4">
              <StyledInput label="NOM DE LA SÉANCE" value={tempInfo.nom} onChange={(v:any) => setTempInfo({...tempInfo, nom: v})} />
              <StyledSelect label="JOUR" value={tempInfo.jour} onChange={(v:any) => setTempInfo({...tempInfo, jour: v})} options={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']} />
          </div>
          <div className="flex gap-3 mt-8">
            <button onClick={() => setViewState('list')} className="flex-1 bg-[#2C2C2E] text-white font-bold py-4 rounded-xl">Annuler</button>
            <button onClick={saveSessionInfo} className="flex-1 bg-gradient-to-r from-green-neon to-ring-cyan text-black font-bold py-4 rounded-xl">Enregistrer</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-[60] flex flex-col animate-fade-in overflow-hidden">
      
      <div className="px-5 py-4 flex items-center gap-4 bg-black border-b border-white/5 sticky top-0 z-10">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-card-bg-light flex items-center justify-center text-white/80 hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <h2 className="font-bold text-xl text-white truncate max-w-[250px]">{seance.nom} <span className="text-text-gray font-normal text-base">- {seance.jour}</span></h2>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 pb-32 flex flex-col">
        <h3 className="text-white font-bold text-2xl mb-6">Blocs d'exercices</h3>

        {/* LISTE GROUPÉE (PIXEL PERFECT) */}
        <div className="space-y-8 flex-1">
          
          {Object.entries(groupedExercises).map(([type, items]) => {
              const blockConfig = BLOCK_TYPES.find(b => b.name === type) || { icon: '🏋️', color: 'text-white', border: 'border-white', bg: 'bg-gray-800', bgLight: 'bg-gray-700' };
              
              return (
                  <div key={type} className="relative">
                      {/* LIGNE DE CONNEXION GAUCHE (CONTINUE) */}
                      <div className={`absolute left-0 top-6 bottom-0 w-[4px] ${blockConfig.bg} rounded-full`}></div>

                      {/* HEADER DU GROUPE */}
                      <div className="flex items-center justify-between mb-4 pl-5">
                          <div className="flex flex-col">
                              <div className={`flex items-center gap-2 font-black uppercase tracking-wider ${blockConfig.color}`}>
                                  <span className="text-xl">{blockConfig.icon}</span>
                                  <span>{type}</span>
                              </div>
                              <div className="text-sm text-gray-500 font-medium ml-8">{items.length} exercice(s)</div>
                          </div>
                          
                          <button 
                             onClick={() => { setSelectedBlockType(type); setViewState('exerciseLibrary'); }}
                             className={`px-4 py-2 rounded-xl ${blockConfig.bg} text-white font-bold text-sm shadow-lg hover:brightness-110 transition-all`}
                          >
                             + Ajouter
                          </button>
                      </div>

                      {/* LISTE DES EXERCICES (Avec bordure de connexion) */}
                      <div className="space-y-3 pl-5">
                          {items.map(({ ex, idx }) => (
                              <div key={idx} className="bg-[#1C1C1E] rounded-[16px] p-4 flex justify-between items-center group relative border border-transparent hover:border-white/10 transition-all">
                                  
                                  <div className="flex-1">
                                      <h4 className="text-[17px] font-bold text-white mb-1">{ex.nom}</h4>
                                      <div className="text-[13px] text-gray-400 font-medium">
                                          {Array.isArray(ex.series) ? ex.series.length : 3} séries • {ex.reps} • {Array.isArray(ex.series) && ex.series[0].charge ? `${ex.series[0].charge}kg` : '?kg'}
                                      </div>
                                  </div>

                                  <div className="flex items-center gap-2">
                                      {/* Bouton Drag (Points) */}
                                      <button className="w-10 h-10 rounded-xl bg-[#2C2C2E] text-gray-500 flex items-center justify-center hover:bg-[#3A3A3C]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                                            <circle cx="9" cy="9" r="1.5" />
                                            <circle cx="15" cy="9" r="1.5" />
                                            <circle cx="9" cy="15" r="1.5" />
                                            <circle cx="15" cy="15" r="1.5" />
                                        </svg>
                                      </button>
                                      
                                      {/* Bouton Edit (Crayon Vert/Jaune) */}
                                      <button 
                                        onClick={() => handleEditExercise(idx)}
                                        className="w-10 h-10 rounded-xl border border-[#B0FF00]/60 bg-[#B0FF00]/10 text-[#B0FF00] flex items-center justify-center hover:bg-[#B0FF00]/20 transition-colors"
                                      >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                                      </button>
                                      
                                      {/* Bouton Delete (Poubelle Rouge) */}
                                      <button 
                                        onClick={() => handleRemoveExercice(idx)}
                                        className="w-10 h-10 rounded-xl border border-red-500/60 bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500/20 transition-colors"
                                      >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                      </button>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              );
          })}

          {(seance.exercices || []).length === 0 && (
             <div className="flex flex-col items-center justify-center py-20 text-center">
               <span className="text-6xl mb-4">💪</span>
               <p className="text-lg text-white font-medium mb-1">Aucun exercice ajouté</p>
               <p className="text-sm text-text-gray">Clique sur "+ Ajouter un bloc"</p>
             </div>
          )}
        </div>

        <div className="mt-8 space-y-3">
          <button 
            onClick={startAddProcess}
            className="w-full py-4 rounded-xl border border-green-neon text-green-neon font-bold text-base uppercase tracking-wide hover:bg-green-neon hover:text-black transition-all flex items-center justify-center gap-2"
          >
            + Ajouter un bloc
          </button>
          
          <button 
            onClick={() => setViewState('editInfo')}
            className="w-full py-4 rounded-xl border border-ring-cyan text-ring-cyan font-bold text-base uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-ring-cyan hover:text-black transition-all"
          >
            <span>⚙️</span> Modifier infos (nom, jour)
          </button>
        </div>

      </div>
    </div>
  );
};

// --- Create Form ---

const CreateForm = ({ onNext, onCancel }: { onNext: (data: any) => void, onCancel: () => void }) => {
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    niveau: 'Débutant',
    objectif: 'Masse',
    duree: 4,
    seances: 3,
    materiel: 'Salle de sport complète',
    dureeSeance: 60,
    contraintes: ''
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="px-5 pt-6 pb-10 animate-fade-in h-screen overflow-y-auto bg-black">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[34px] font-black text-green-neon tracking-tight">Nouveau</h1>
        <button onClick={onCancel} className="text-white font-bold">Annuler</button>
      </div>

      <div className="space-y-6">
         <StyledInput label="NOM DU PROGRAMME" value={formData.nom} onChange={(v: any) => handleChange('nom', v)} placeholder="Ex: PPL Mass Builder" />
         
         <StyledInput label="DESCRIPTION" value={formData.description} onChange={(v: any) => handleChange('description', v)} placeholder="Bref résumé..." type="textarea" />

         <div className="grid grid-cols-2 gap-4">
            <StyledSelect label="NIVEAU" value={formData.niveau} onChange={(v: any) => handleChange('niveau', v)} options={['Débutant', 'Intermédiaire', 'Avancé']} />
            <StyledSelect label="OBJECTIF" value={formData.objectif} onChange={(v: any) => handleChange('objectif', v)} options={['Masse', 'Force', 'Perte de poids', 'Endurance', 'Hybride']} />
         </div>

         <div className="grid grid-cols-2 gap-4">
            <StyledInput label="DURÉE (SEMAINES)" value={formData.duree} onChange={(v: any) => handleChange('duree', parseInt(v) || 0)} type="number" />
            <StyledInput label="SÉANCES / SEMAINE" value={formData.seances} onChange={(v: any) => handleChange('seances', parseInt(v) || 0)} type="number" />
         </div>

         <StyledSelect label="MATÉRIEL DISPONIBLE" value={formData.materiel} onChange={(v: any) => handleChange('materiel', v)} options={['Salle de sport complète', 'Haltères seulement', 'Poids du corps', 'Élastiques', 'Maison (Mixte)']} />
         
         <StyledInput label="DURÉE SÉANCE (MIN)" value={formData.dureeSeance} onChange={(v: any) => handleChange('dureeSeance', parseInt(v) || 0)} type="number" />
         
         <StyledInput label="CONTRAINTES / BLESSURES" value={formData.contraintes} onChange={(v: any) => handleChange('contraintes', v)} placeholder="Ex: Mal au genou droit..." type="textarea" />
      </div>

      <div className="mt-10 mb-20">
        <button 
          onClick={() => {
            if(!formData.nom) return alert('Le nom est requis');
            onNext(formData);
          }}
          className="w-full bg-gradient-to-r from-green-neon to-ring-cyan text-black font-black text-lg py-4 rounded-xl shadow-lg shadow-green-neon/20 hover:scale-[1.02] transition-transform"
        >
          CONTINUER
        </button>
      </div>
    </div>
  );
};

// --- Program Builder ---

const ProgramBuilder = ({ initialData, onSave, onBack }: { initialData: any, onSave: (p: Program) => void, onBack: () => void }) => {
  const [weeks, setWeeks] = useState<Semaine[]>([]);
  const [activeWeek, setActiveWeek] = useState(1);
  const [editingSession, setEditingSession] = useState<{ weekIdx: number, sessionIdx: number } | null>(null);

  useEffect(() => {
    // Generer la structure si vide
    if (weeks.length === 0 && initialData) {
        if (initialData.semaines && initialData.semaines.length > 0) {
            // CHARGEMENT PROGRAMME EXISTANT
            setWeeks(initialData.semaines);
        } else {
            // NOUVEAU PROGRAMME
            const newWeeks: Semaine[] = [];
            for (let w = 1; w <= initialData.duree; w++) {
                const seances: Seance[] = [];
                for (let s = 1; s <= initialData.seances; s++) {
                    seances.push({
                        nom: `Séance ${s}`,
                        jour: 'Lundi',
                        duree: initialData.dureeSeance,
                        exercices: []
                    });
                }
                newWeeks.push({ numero: w, seances });
            }
            setWeeks(newWeeks);
        }
    }
  }, [initialData]);

  const handleSessionUpdate = (updatedSession: Seance) => {
    if (editingSession) {
      const newWeeks = [...weeks];
      newWeeks[editingSession.weekIdx].seances[editingSession.sessionIdx] = updatedSession;
      setWeeks(newWeeks);
    }
  };

  const saveProgram = () => {
    const finalProgram: Program = {
      // Si on édite, on garde l'ID et la date, sinon on crée
      id: initialData.id || Date.now(),
      dateCreation: initialData.dateCreation || new Date().toISOString(),
      ...initialData,
      semaines: weeks,
      semaineActive: initialData.semaineActive || 1
    };
    onSave(finalProgram);
  };
  
  if (editingSession !== null) {
      const session = weeks[editingSession.weekIdx]?.seances[editingSession.sessionIdx];
      if (!session) return null; // Safety check
      return (
          <SessionDetail 
             seance={session} 
             onUpdate={(s) => handleSessionUpdate(s)} 
             onBack={() => setEditingSession(null)} 
          />
      );
  }

  return (
    <div className="px-5 pt-6 pb-32 animate-fade-in h-screen overflow-y-auto bg-black">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-white font-bold">Retour</button>
        <h1 className="text-xl font-black text-white text-center">Structure</h1>
        <button onClick={saveProgram} className="text-green-neon font-bold">Valider</button>
      </div>

      <div className="mb-6 bg-card-bg p-4 rounded-2xl border border-white/5">
         <h2 className="font-bold text-white text-lg">{initialData.nom}</h2>
         <p className="text-text-gray text-sm">{weeks.length} semaines • {initialData.seances} séances/sem</p>
      </div>

      <div className="space-y-4">
         {weeks.map((week, wIdx) => (
             <div key={week.numero} className="border border-white/10 rounded-2xl overflow-hidden bg-card-bg">
                <div 
                  className="bg-[#2C2C2E] p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => setActiveWeek(activeWeek === week.numero ? -1 : week.numero)}
                >
                   <h3 className="font-bold text-white">Semaine {week.numero}</h3>
                   <div className={`transition-transform duration-300 ${activeWeek === week.numero ? 'rotate-180' : ''}`}>▼</div>
                </div>
                
                {activeWeek === week.numero && (
                   <div className="bg-black/20 p-4 space-y-3">
                      {week.seances.map((seance, sIdx) => (
                         <div 
                           key={sIdx} 
                           onClick={() => setEditingSession({ weekIdx: wIdx, sessionIdx: sIdx })}
                           className="bg-card-bg-light p-4 rounded-xl flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors border border-white/5"
                         >
                            <div>
                               <div className="font-bold text-white">{seance.nom}</div>
                               <div className="text-xs text-text-gray mt-1">{seance.exercices.length} exercices</div>
                            </div>
                            <div className="text-green-neon text-sm font-bold">Modifier &gt;</div>
                         </div>
                      ))}
                   </div>
                )}
             </div>
         ))}
      </div>
    </div>
  );
};


// --- Main Wrapper ---

export const ProgramManager: React.FC<ProgramManagerProps> = ({ onSave, onCancel, programToEdit }) => {
  const [step, setStep] = useState<'create' | 'build'>('create');
  const [draftData, setDraftData] = useState<any>(null);

  useEffect(() => {
    if (programToEdit) {
      setDraftData(programToEdit);
      setStep('build');
    }
  }, [programToEdit]);

  const handleFormNext = (data: any) => {
    setDraftData(data);
    setStep('build');
  };

  if (step === 'create') {
    return <CreateForm onNext={handleFormNext} onCancel={onCancel} />;
  }

  return (
    <ProgramBuilder 
      initialData={draftData} 
      onSave={onSave} 
      onBack={() => {
        if (programToEdit) {
           onCancel(); // Si on édite, retour = annuler
        } else {
           setStep('create');
        }
      }} 
    />
  );
};

export default ProgramManager;