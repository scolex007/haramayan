// Bracket data — base amounts (Medical/Accidental/Natal)
// Funeral multiplier = 2x applied in components
// All members start at Bracket 1

export const brackets = [
  { bracket: 1,   members: 1000,  principal: 2000,  dependent: 1000  },
  { bracket: 20,  members: 2000,  principal: 4000,  dependent: 2000  },
  { bracket: 30,  members: 3000,  principal: 6000,  dependent: 3000  },
  { bracket: 40,  members: 4000,  principal: 8000,  dependent: 4000  },
  { bracket: 50,  members: 5000,  principal: 10000, dependent: 5000  },
  { bracket: 100, members: 10000, principal: 20000, dependent: 10000 },
  { bracket: 150, members: 15000, principal: 30000, dependent: 15000 },
  { bracket: 200, members: 20000, principal: 40000, dependent: 20000 },
];

export const severityTiers = { severe: 1.0, moderate: 0.7, mild: 0.5 };
export const erRates = { principal: 0.05, dependent: 0.02 };

export const programs = [
  { id: 'medical',    label: 'Medical',    icon: '🏥', multiplier: 1 },
  { id: 'accidental', label: 'Accidental', icon: '⚠️', multiplier: 1 },
  { id: 'natal',      label: 'Natal Care', icon: '👶', multiplier: 1 },
  { id: 'funeral',    label: 'Funeral',    icon: '🕊️', multiplier: 2, badge: '2x Coverage' },
];

// Probationary contingency (first 2 months)
export const probationaryContingency = { principal: 2000, dependent: 1000 };

// Spotlight bracket indices for cards
export const spotlightBrackets = [0, 4, 7]; // Bracket 1, 50, 200
export const spotlightLabels = ['Starter', 'Growing', 'Maximum'];
