
export interface Program {
  id: number;
  nom: string;
  description: string;
  niveau: string;
  objectif: string;
  duree: number;
  seances: number;
  materiel: string;
  dureeSeance: number;
  contraintes: string;
  dateCreation: string;
  semaines: Semaine[];
  semaineActive: number;
}

export interface Semaine {
  numero: number;
  seances: Seance[];
}

export interface Seance {
  nom: string;
  jour: string;
  duree: number;
  notes?: string;
  blocs?: Bloc[];
  exercices: Exercice[];
}

export interface Bloc {
  nom: string;
  type: string;
  exercices: Exercice[];
}

export interface Exercice {
  nom: string;
  series: Serie[] | string;
  reps: string;
  repos: string | number;
  charge: string;
  notes: string;
  type?: string;
  completed?: boolean;
  performance?: any[];
  supersetAvec?: Exercice;
}

export interface Serie {
  reps: string;
  charge: string;
  rpe: number;
  technique: string;
  poids?: number;
  details?: string;
}

export type Section = 'resume' | 'training' | 'prog' | 'nutrition' | 'profil';