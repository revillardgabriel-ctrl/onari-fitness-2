{
  "id": "questionnaire_intermediaire",
  "level": "intermediate",
  "version": "1.0",
  "total_questions": 17,
  "estimated_duration_min": 5,

  "system_prompt": "Tu es un coach sportif expert. Tu dois poser un questionnaire structuré à un pratiquant de niveau INTERMÉDIAIRE (1 à 3 ans d'entraînement régulier) pour collecter toutes les informations nécessaires à la création d'un programme ultra-personnalisé. Tu poses les questions UNE PAR UNE dans l'ordre exact ci-dessous. Tu n'inventes aucune question supplémentaire. Tu reformules légèrement si l'utilisateur ne comprend pas, mais tu ne changes pas le sens. Après chaque réponse, tu confirmes en une phrase courte et tu passes à la suivante. Quand toutes les questions sont complétées, tu génères un JSON de profil utilisateur structuré selon le schema défini et tu annonces que le programme va être créé.",

  "questions": [
    {
      "id": "Q1",
      "order": 1,
      "section": "Profil de base",
      "question": "Âge, poids (kg) et taille (cm) ?",
      "type": "numeric",
      "fields": ["age", "weight_kg", "height_cm"]
    },
    {
      "id": "Q2",
      "order": 2,
      "section": "Profil de base",
      "question": "Depuis combien de temps tu t'entraînes régulièrement ?",
      "type": "single_choice",
      "options": ["Moins d'1 an", "1–2 ans", "2–3 ans"],
      "maps_to": "experience_years"
    },
    {
      "id": "Q3",
      "order": 3,
      "section": "Profil de base",
      "question": "Tu pratiques un sport en dehors de la salle ?",
      "type": "conditional",
      "if_yes": "Lequel, combien de fois par semaine, et à quel niveau ? (loisir ou compétition)",
      "if_no": "Passe à la question suivante",
      "maps_to": "side_sport"
    },
    {
      "id": "Q4",
      "order": 4,
      "section": "Profil de base",
      "question": "Quel programme tu suivais avant et est-ce qu'il fonctionnait ?",
      "type": "single_choice",
      "options": ["Full body", "PPL", "Upper-Lower", "Aléatoire", "Aucun programme structuré"],
      "maps_to": "previous_program"
    },
    {
      "id": "Q5",
      "order": 5,
      "section": "Performances actuelles",
      "question": "Tu connais tes charges de travail habituelles sur les grands mouvements ? Donne la charge et le nombre de reps que tu fais dessus. Si tu connais ton 1RM estimé, encore mieux.",
      "type": "open",
      "example": "Ex : développé couché 80kg × 8 reps, squat 100kg × 6 reps, soulevé de terre 120kg × 5 reps",
      "note": "Si tu ne fais pas certains de ces mouvements, dis-le simplement.",
      "maps_to": "working_weights"
    },
    {
      "id": "Q6",
      "order": 6,
      "section": "Performances actuelles",
      "question": "Sur tes exercices principaux, à quelle intensité tu travailles en ce moment ?",
      "type": "single_choice",
      "options": [
        "Léger — beaucoup de reps, peu de charge",
        "Modéré — 6 à 12 reps avec un effort réel",
        "Lourd — 5 reps et moins, proches du max",
        "Ça change selon les jours"
      ],
      "maps_to": "current_intensity"
    },
    {
      "id": "Q7",
      "order": 7,
      "section": "Objectif",
      "question": "Quel est ton objectif principal cette saison ?",
      "type": "single_choice",
      "options": ["Prise de masse", "Sèche", "Force", "Recomposition", "Performance sportive"],
      "maps_to": "goal_primary"
    },
    {
      "id": "Q8",
      "order": 8,
      "section": "Objectif",
      "question": "Tu as un objectif secondaire ?",
      "type": "conditional",
      "if_yes": "Décris-le librement. Ex : prendre du muscle tout en améliorant le cardio, sécher sans perdre de force...",
      "if_no": "Passe à la question suivante",
      "maps_to": "goal_secondary"
    },
    {
      "id": "Q9",
      "order": 9,
      "section": "Objectif",
      "question": "Tu as des groupes musculaires en retard que tu veux absolument prioriser ?",
      "type": "multi_choice",
      "options": ["Dos", "Épaules", "Bras", "Pectoraux", "Jambes", "Fessiers", "Abdominaux", "Aucun en particulier"],
      "maps_to": "priority_muscles"
    },
    {
      "id": "Q10",
      "order": 10,
      "section": "Organisation",
      "question": "Combien de séances par semaine tu peux faire et combien de temps as-tu par séance ?",
      "type": "numeric",
      "example": "Ex : 4 séances × 60 minutes",
      "fields": ["sessions_per_week", "session_duration_min"]
    },
    {
      "id": "Q11",
      "order": 11,
      "section": "Organisation",
      "question": "Tu connais le RPE (échelle d'effort de 1 à 10) ? Tu l'utilises déjà ?",
      "type": "single_choice",
      "options": [
        "Oui je l'utilise",
        "J'en ai entendu parler mais je ne l'utilise pas",
        "Non jamais entendu"
      ],
      "maps_to": "knows_rpe"
    },
    {
      "id": "Q12",
      "order": 12,
      "section": "Organisation",
      "question": "Tu fais du cardio en dehors de la musculation ?",
      "type": "conditional",
      "if_yes": "Type (marche, running, vélo, HIIT...), fréquence par semaine et durée par session ?",
      "if_no": "Passe à la question suivante",
      "maps_to": "cardio"
    },
    {
      "id": "Q13",
      "order": 13,
      "section": "Équipement & santé",
      "question": "Quel équipement as-tu accès ?",
      "type": "single_choice",
      "options": [
        "Salle complète (barres, haltères, câbles, machines)",
        "Salle basique",
        "Haltères + quelques machines",
        "À domicile",
        "Extérieur"
      ],
      "maps_to": "equipment"
    },
    {
      "id": "Q14",
      "order": 14,
      "section": "Équipement & santé",
      "question": "Tu as des blessures passées ou actuelles dont je dois tenir compte ?",
      "type": "multi_choice",
      "options": ["Épaules", "Dos lombaire", "Genoux", "Poignets", "Aucune"],
      "maps_to": "injuries"
    },
    {
      "id": "Q15",
      "order": 15,
      "section": "Équipement & santé",
      "question": "Comment tu dors et quel est ton niveau de stress en ce moment ?",
      "type": "composite",
      "sub_questions": [
        {
          "label": "Sommeil",
          "options": ["Moins de 6h", "6–7h", "7–8h", "Plus de 8h"],
          "maps_to": "sleep_hours"
        },
        {
          "label": "Stress",
          "options": ["Faible", "Modéré", "Élevé"],
          "maps_to": "stress_level"
        }
      ]
    },
    {
      "id": "Q16",
      "order": 16,
      "section": "Préférences",
      "question": "Quels exercices tu aimes faire et tu veux absolument retrouver dans ton programme ?",
      "type": "open",
      "example": "Ex : développé couché, squat, tirage poitrine, curl...",
      "note": "Pas de bonne ou mauvaise réponse.",
      "maps_to": "preferred_exercises"
    },
    {
      "id": "Q17",
      "order": 17,
      "section": "Préférences",
      "question": "À l'inverse, quels exercices tu détestes ou tu veux éviter ? (douleur, technique trop complexe, ou simplement pas fan)",
      "type": "open",
      "example": "Ex : soulevé de terre, dips, leg press...",
      "note": "Si aucun, dis-le simplement.",
      "maps_to": "avoided_exercises"
    }
  ],

  "output_schema": {
    "level": "intermediate",
    "age": null,
    "gender": null,
    "weight_kg": null,
    "height_cm": null,
    "experience_years": null,
    "side_sport": {
      "name": null,
      "frequency_per_week": null,
      "level": "casual | competitive"
    },
    "previous_program": null,
    "working_weights": {
      "bench_press_kg": null,
      "bench_press_reps": null,
      "squat_kg": null,
      "squat_reps": null,
      "deadlift_kg": null,
      "deadlift_reps": null,
      "ohp_kg": null,
      "ohp_reps": null
    },
    "current_intensity": "light | moderate | heavy | variable",
    "goal_primary": "muscle_gain | fat_loss | strength | recomp | performance",
    "goal_secondary": null,
    "priority_muscles": [],
    "sessions_per_week": null,
    "session_duration_min": null,
    "knows_rpe": true,
    "cardio": {
      "type": null,
      "frequency_per_week": null,
      "duration_min": null
    },
    "equipment": [],
    "injuries": [],
    "sleep_hours": null,
    "stress_level": "low | moderate | high",
    "preferred_exercises": [],
    "avoided_exercises": []
  }
}