// Bracket data — base amounts (Medical/Accidental/Natal)
// Funeral multiplier = 2x applied in components
// All members start at Bracket 1

export const brackets = [
  // Starter tier (under 1,000 cumulative members)
  { bracket: 1,  members: 100,   memberRange: '1–199',   principal: 200,   dependent: 100,   tier: 'starter' },
  { bracket: 2,  members: 200,   memberRange: '200–299', principal: 400,   dependent: 200,   tier: 'starter' },
  { bracket: 3,  members: 300,   memberRange: '300–399', principal: 600,   dependent: 300,   tier: 'starter' },
  { bracket: 4,  members: 400,   memberRange: '400–499', principal: 800,   dependent: 400,   tier: 'starter' },
  { bracket: 5,  members: 500,   memberRange: '500–599', principal: 1000,  dependent: 500,   tier: 'starter' },
  { bracket: 6,  members: 600,   memberRange: '600–699', principal: 1200,  dependent: 600,   tier: 'starter' },
  { bracket: 7,  members: 700,   memberRange: '700–799', principal: 1400,  dependent: 700,   tier: 'starter' },
  { bracket: 8,  members: 800,   memberRange: '800–899', principal: 1600,  dependent: 800,   tier: 'starter' },
  { bracket: 9,  members: 900,   memberRange: '900–999', principal: 1800,  dependent: 900,   tier: 'starter' },
  // Standard tier (1,000+ cumulative members)
  { bracket: 10,  members: 1000,  principal: 2000,  dependent: 1000,  tier: 'standard' },
  { bracket: 20,  members: 2000,  principal: 4000,  dependent: 2000,  tier: 'standard' },
  { bracket: 30,  members: 3000,  principal: 6000,  dependent: 3000,  tier: 'standard' },
  { bracket: 40,  members: 4000,  principal: 8000,  dependent: 4000,  tier: 'standard' },
  { bracket: 50,  members: 5000,  principal: 10000, dependent: 5000,  tier: 'standard' },
  { bracket: 100, members: 10000, principal: 20000, dependent: 10000, tier: 'standard' },
  { bracket: 150, members: 15000, principal: 30000, dependent: 15000, tier: 'standard' },
  { bracket: 200, members: 20000, principal: 40000, dependent: 20000, tier: 'standard' },
];

export const tierLabels = { starter: 'Starter', standard: 'Standard' };

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
export const spotlightBrackets = [0, 13, 16]; // Bracket 1, 50, 200
export const spotlightLabels = ['Starter', 'Growing', 'Maximum'];
