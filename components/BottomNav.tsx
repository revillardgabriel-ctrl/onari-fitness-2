import React from 'react';
import { Section } from '../types';

interface BottomNavProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentSection, onNavigate }) => {
  const getPillPosition = () => {
    switch(currentSection) {
      case 'resume': return 'left-[4%]';
      case 'training': return 'left-[24%]';
      case 'prog': return 'left-[44%]';
      case 'nutrition': return 'left-[64%]';
      case 'profil': return 'left-[84%]';
      default: return 'left-[4%]';
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1E]/95 backdrop-blur-xl border-t border-white/10 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-[428px] mx-auto relative flex justify-around items-center py-2">
        {/* Animated Pill */}
        <div className={`absolute top-2 bottom-2 w-[18%] bg-gradient-to-br from-green-neon to-ring-cyan rounded-full transition-all duration-300 ease-out z-0 ${getPillPosition()}`} />

        <NavItem 
          active={currentSection === 'resume'} 
          onClick={() => onNavigate('resume')} 
          label="Résumé"
          icon={<svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2.5"/><circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="2.5" opacity="0.6"/><circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="2.5" opacity="0.3"/></svg>}
        />
        <NavItem 
          active={currentSection === 'training'} 
          onClick={() => onNavigate('training')} 
          label="Entraînement"
          icon={<svg width="24" height="24" viewBox="0 0 28 28" fill="none"><path d="M8 14C8 14 10 8 14 8C18 8 20 14 20 14C20 14 18 20 14 20C10 20 8 14 8 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>}
        />
        <NavItem 
          active={currentSection === 'prog'} 
          onClick={() => onNavigate('prog')} 
          label="Prog"
          icon={<svg width="24" height="24" viewBox="0 0 28 28" fill="none"><rect x="4" y="12" width="4" height="4" rx="1" fill="currentColor"/><rect x="20" y="12" width="4" height="4" rx="1" fill="currentColor"/><rect x="11" y="13" width="6" height="2" rx="1" fill="currentColor"/><line x1="8" y1="14" x2="11" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><line x1="17" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>}
        />
        <NavItem 
          active={currentSection === 'nutrition'} 
          onClick={() => onNavigate('nutrition')} 
          label="Nutrition"
          icon={<svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="15" r="9" stroke="currentColor" strokeWidth="2.5"/><path d="M14 6V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M19 8L16.5 10.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>}
        />
        <NavItem 
          active={currentSection === 'profil'} 
          onClick={() => onNavigate('profil')} 
          label="Profil"
          icon={<svg width="24" height="24" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="11" r="5" stroke="currentColor" strokeWidth="2.5"/><path d="M6 24C6 20 9 17 14 17C19 17 22 20 22 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>}
        />
      </div>
    </div>
  );
};

const NavItem: React.FC<{ active: boolean; onClick: () => void; label: string; icon: React.ReactNode }> = ({ active, onClick, label, icon }) => (
  <div onClick={onClick} className="flex-1 flex flex-col items-center gap-1 py-2 cursor-pointer relative z-10">
    <div className={`w-7 h-7 flex items-center justify-center transition-colors duration-300 ${active ? 'text-black' : 'text-white/60'}`}>
      {icon}
    </div>
    <span className={`text-[10px] font-bold transition-colors duration-300 ${active ? 'text-black' : 'text-white/60'}`}>{label}</span>
  </div>
);

export default BottomNav;