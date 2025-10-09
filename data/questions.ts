// Common Question 1 - PPE Type Selection

export type Option = {
  value: string;
  label: string;
  icon?: string;
  col?: number;
};
const question1 = {
  id: 1,
  question: "What type of PPE are you primarily looking for today?",
  type: "single" as const,
  required: true,
  col:2,
  options: [
    { value: "helmets", label: "Safety helmets", icon: "/icons/helmets.png" },
    { value: "hearing", label: "Hearing protection", icon: "/icons/hearing.png" },
    { value: "gloves", label: "Safety gloves", icon: "/icons/gloves.png" },
 { value: "footwear", label: "Safety footwear", icon: "/icons/footwears.png" },
    { value: "glasses", label: "Safety glasses", icon: "/icons/glasses.png" },

    { value: "respirators", label: "Respirators", icon: "/icons/respirators.png" },

    { value: "clothing", label: "Clothing", icon: "/icons/clothing.png" }
  ] as Option[],
};

// Questions for Safety Helmets
export const helmetsQuestions = [
  question1,
  {
    id: 2,
    question: "What primary task will this PPE be used for?",
    type: "multiple" as const,
    required: true,
    options: [
      { value: "a", label: "General maintenance or repair work" },
      { value: "b", label: "Handling chemicals or hazardous materials" },
      { value: "c", label: "Cutting or fabrication" },
      { value: "d", label: "Working at height or rescue" },
      { value: "e", label: "Operating heavy machinery" }
    ]
  },
  {
    id: 3,
    question: "What are the MOST significant potential hazards you need protection from?",
    type: "multiple" as const,
    required: true,
    options: [
      { value: "a", label: "Impact from falling objects" },
      { value: "b", label: "Side impact from moving objects" },
      { value: "c", label: "Chemical splashes" },
      { value: "d", label: "Electrical hazards" }
    ]
  },
  {
    id: 4,
    question: "Do you require a faceshield together with the helmet?",
    type: "single" as const,
    required: true,
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ]
  }
];

// Questions for Safety Glasses
export const glassesQuestions = [
  question1,
  {
    id: 2,
    question: "What industry will this PPE be used for?",
    type: "multiple" as const,
    required: true,
    options: [
      { value: "a", label: "Automotive" },
      { value: "b", label: "Construction work" },
      { value: "c", label: "Oil and Gas, Petrochemical, Refinery" },
      { value: "d", label: "Chemical" },
      { value: "e", label: "Healthcare, Pharmaceutical" },
      { value: "f", label: "Aviation" },
      { value: "g", label: "Metal processing, Hot work" },
      { value: "h", label: "Marine & Offshore" }
    ]
  }
];

// Questions for Hearing Protection
export const hearingQuestions = [
  question1,
  {
    id: 2,
    question: "Which type of hearing protection are you looking for?",
    type: "multiple" as const,
    required: true,
    options: [
      { value: "a", label: "Earplug" },
      { value: "b", label: "Earmuff" }
    ]
  }
];

// Questions for Respirators
export const respiratorsQuestions = [
  question1,
  {
    id: 2,
    question: "What shape of respirators do you required?",
    type: "multiple" as const,
    required: true,
    options: [
      { value: "a", label: "Cup" },
      { value: "b", label: "Folded" }
    ]
  },
  {
    id: 3,
    question: "What level of filter protection you required?",
    type: "multiple" as const,
    required: true,
    options: [
      { value: "a", label: "FFP2" },
      { value: "b", label: "FFP3" }
    ]
  }
];

// Questions for Safety Gloves
export const glovesQuestions = [
  question1,
  {
    id: 2,
    question: "What are the MOST significant potential hazards you need protection from?",
    type: "multiple" as const,
    required: true,
    options: [
      { value: "a", label: "Abrasion Slip" },
      { value: "b", label: "Cuts" },
      { value: "c", label: "Impact" },
      { value: "d", label: "Electrical" },
      { value: "e", label: "Chemical" },
      { value: "f", label: "Thermal Heat" },
      { value: "g", label: "Thermal Cold" }
    ]
  }
];

// Questions for Safety Footwear
export const footwearQuestions = [
  question1,
  {
    id: 2,
    question: "What is the area of application?",
    type: "single" as const,
    required: true,
    options: [
      { value: "a", label: "Light Duty (assembly, logistics)" },
      { value: "b", label: "Medium Duty (manufacturing, utilities)" },
      { value: "c", label: "Heavy Duty (mining, oil & gas)" }
    ]
  }
];

// Questions for Clothing
export const clothingQuestions = [
  question1,
  {
    id: 2,
    question: "What type of clothing are you primarily looking for today?",
    type: "multiple" as const,
    required: true,
    options: [
      { value: "a", label: "Liquid-tight" },
      { value: "b", label: "Spray-tight" },
      { value: "c", label: "Limited spray-tight" },
      { value: "d", label: "Particle-tight" }
    ]
  }
];

// Get questions based on PPE type
export const getQuestionsByPPEType = (ppeType: string) => {
  switch (ppeType) {
    case "helmets":
      return helmetsQuestions;
    case "glasses":
      return glassesQuestions;
    case "hearing":
      return hearingQuestions;
    case "respirators":
      return respiratorsQuestions;
    case "gloves":
      return glovesQuestions;
    case "footwear":
      return footwearQuestions;
    case "clothing":
      return clothingQuestions;
    default:
      return helmetsQuestions;
  }
};

// For backward compatibility
export const questionnaireData = helmetsQuestions;