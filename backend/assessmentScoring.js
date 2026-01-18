// assessmentScoring.js - SINGLE SOURCE OF TRUTH
module.exports = {
  // ROUND 1 (10 Questions = Max 50 points)
  round1Scoring: {
    sleepHours: (hours) => {
      if (hours < 4) return 10;      // Very bad = high score
      if (hours >= 4 && hours < 6) return 8;
      if (hours >= 6 && hours < 8) return 4;
      if (hours >= 8) return 2;      // Good = low score
      return 5;
    },
    hobbyInterest: { 1: 10, 2: 8, 3: 6, 4: 4, 5: 2 },        // Low interest = high score
    focusLevel: { 1: 2, 2: 4, 3: 6, 4: 8, 5: 10 },           // Poor focus = high score  
    feelSupported: { "yes definitely": 2, "somewhat": 6, "no not really": 10 },
    overwhelmed: { 1: 2, 2: 4, 3: 6, 4: 8, 5: 10 },          // Very overwhelmed = high score
    appetite: { "normal": 2, "poor": 10, "overeating": 10 },
    tiredness: { "rarely": 2, "sometimes": 6, "often": 8, "constantly": 10 },
    weeklyActivity: { "daily": 2, "3-4": 4, "1-2": 8, "rarely": 10 },
    mentalHealth: { 1: 10, 2: 8, 3: 6, 4: 4, 5: 2 },         // Poor MH = high score
    deadlinePressure: { "Not at all": 2, "Mild": 6, "Moderate": 8, "Severe": 10 }
  },

  // ROUND 2 (7 Questions = Max 50 points)  
  round2Scoring: {
    mealRegularity: { 1: 10, 2: 8, 3: 6, 4: 4, 5: 2 },      // Irregular = high score
    physicalSymptoms: { "Never": 2, "Sometimes": 6, "Often": 10 },
    hopelessness: { "Not at all": 2, "Sometimes": 8, "Often": 10 },
    socialIsolation: { "Never": 2, "Sometimes": 6, "Often": 10 },
    selfHarm: { "Never": 2, "Rarely": 6, "Sometimes": 10, "Often": 10 },
    mindfulness: { "Regularly": 2, "Occasionally": 6, "Never": 10 }
  }
};
