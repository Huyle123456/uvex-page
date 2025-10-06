// Product matching logic based on questionnaire answers

export interface Product {
  articleNo: string;
  productName: string;
  q1Answer: string;
  q2Answers: string[]; // For helmets: tasks, For glasses: industries
  q3Answers?: string[]; // Only for helmets (hazards)
  q4Answer?: string; // Only for helmets (faceshield)
  image?: string; // Product image path
  video?: string; // Product video path
}

export const products: Product[] = [
  // Safety Helmets
  {
    articleNo: "9736030",
    productName: "uvex pronamic alpine E white",
    q1Answer: "helmets",
    q2Answers: ["d"],
    q3Answers: ["a", "b", "c", "d"],
    q4Answer: "no",
    image: "/product-images/helmets/pronamic-alpine-white/1.png"
  },
  {
    articleNo: "9770031",
    productName: "uvex pheos E-S-WR safety helmet",
    q1Answer: "helmets",
    q2Answers: ["a", "b", "c", "e"],
    q3Answers: ["a", "c", "d"],
    q4Answer: "no",
    image: "/product-images/helmets/pheos-e-s-wr/1.jpg"
  },
  {
    articleNo: "9916200",
    productName: "uvex pronamic half visor clear",
    q1Answer: "helmets",
    q2Answers: ["a", "c", "e"],
    q3Answers: ["a", "b"],
    q4Answer: "yes",
    image: "/product-images/helmets/pronamic-half-visor/4.jpg"
  },
  {
    articleNo: "9906006",
    productName: "uvex pheos magnetic visor SLB1",
    q1Answer: "helmets",
    q2Answers: ["a", "b", "c", "e"],
    q3Answers: ["c", "d"],
    q4Answer: "yes",
    image: "/product-images/helmets/pheos-magnetic-visor/1.jpg"
  },
  {
    articleNo: "9772730",
    productName: "uvex pheos B-WR safety helmet",
    q1Answer: "helmets",
    q2Answers: ["a", "c", "e"],
    q3Answers: ["a"],
    q4Answer: "no",
    image: "/product-images/helmets/pheos-b-wr/1.png"
  },

  // Safety Glasses
  {
    articleNo: "9181880",
    productName: "uvex suXXeed spectacles variomatic",
    q1Answer: "glasses",
    q2Answers: ["b", "c", "f"],
    image: "/product-images/glasses/suxxeed/1.jpg"
  },
  {
    articleNo: "9183265",
    productName: "uvex i-5 safety spectacles clear",
    q1Answer: "glasses",
    q2Answers: ["a", "b", "c", "e", "f", "h"],
    image: "/product-images/glasses/i-5/1.png"
  },
  {
    articleNo: "9193064",
    productName: "uvex sportstyle spectacles CBR65",
    q1Answer: "glasses",
    q2Answers: ["a", "b", "c", "e", "f", "h"],
    image: "/product-images/glasses/sportstyle/1.png"
  },
  {
    articleNo: "9198175",
    productName: "uvex pheos cx2 glasses IR-ex 5",
    q1Answer: "glasses",
    q2Answers: ["c", "g", "h"],
    image: "/product-images/glasses/pheos-cx2/1.jpg"
  },
  {
    articleNo: "9169295",
    productName: "uvex super OTG planet glasses",
    q1Answer: "glasses",
    q2Answers: ["a", "b", "c", "d", "e", "f", "h"],
    image: "/product-images/glasses/super-otg-planet/1.png"
  },
  {
    articleNo: "9321904",
    productName: "hypervision CB cl. AF transl.grey",
    q1Answer: "glasses",
    q2Answers: ["a", "c", "d", "e", "f", "h"],
    image: "/product-images/glasses/hypervision-cb/1.jpg"
  },
  {
    articleNo: "9302290",
    productName: "ultrasonic clear planet",
    q1Answer: "glasses",
    q2Answers: ["a", "b", "c", "d", "e", "f", "h"],
    image: "/product-images/glasses/ultrasonic-planet/1.png"
  },
  {
    articleNo: "9320466",
    productName: "uvex megasonic CB clear",
    q1Answer: "glasses",
    q2Answers: ["a", "b", "c", "d", "e", "f", "h"],
    image: "/product-images/glasses/megasonic-cb/1.jpg"
  },
  {
    articleNo: "9302500",
    productName: "uvex ultrasonic CR goggles",
    q1Answer: "glasses",
    q2Answers: ["d", "e"],
    image: "/product-images/glasses/ultrasonic-cr/1.jpg"
  },
  {
    articleNo: "9302045",
    productName: "uvex ultrasonic flip-up welding shade 5 safety spec",
    q1Answer: "glasses",
    q2Answers: ["c", "g", "h"],
    image: "/product-images/glasses/ultrasonic-flip-up-welding/1.jpg"
  },
  {
    articleNo: "9301633",
    productName: "uvex ultravision wide-vision goggle",
    q1Answer: "glasses",
    q2Answers: ["c", "d", "g", "h"],
    image: "/product-images/glasses/ultravision/1.jpg"
  },
  {
    articleNo: "9190275",
    productName: "uvex i-3 spectacles clear",
    q1Answer: "glasses",
    q2Answers: ["a", "b", "c", "d", "e", "f", "g", "h"],
    image: "/product-images/glasses/i-3/1.jpg"
  },
  {
    articleNo: "9122885",
    productName: "ultrashield bu. mirr. 14% wh/bk",
    q1Answer: "glasses",
    q2Answers: ["b", "c", "f", "h"],
    image: "/product-images/glasses/suxxeed/1.jpg"
  },

  // Hearing Protection
  {
    articleNo: "2124099",
    productName: "xact-fit test system",
    q1Answer: "hearing",
    q2Answers: ["a"],
    image: "/product-images/hearing/xact-fit-test/1.png"
  },
  {
    articleNo: "2630220",
    productName: "uvex K20H",
    q1Answer: "hearing",
    q2Answers: ["b"],
    image: "/product-images/hearing/k20h/1.png"
  },
  {
    articleNo: "2640001",
    productName: "uvex aXess one",
    q1Answer: "hearing",
    q2Answers: ["b"],
    image: "/product-images/hearing/axess-one/1.png"
  },
  {
    articleNo: "2111238",
    productName: "uvex whisper + reusable earplugs",
    q1Answer: "hearing",
    q2Answers: ["a"],
    image: "/product-images/hearing/whisper-reusable/1.jpg"
  },
  {
    articleNo: "2112001",
    productName: "uvex x-fit disposable earplugs",
    q1Answer: "hearing",
    q2Answers: ["a"],
    image: "/product-images/hearing/x-fit-disposable/1.jpg"
  },
  {
    articleNo: "2111988",
    productName: "uvex dispenser \"one2click\" magnetic",
    q1Answer: "hearing",
    q2Answers: ["a"],
    image: "/product-images/hearing/dispenser-one2click-magnetic/1.jpg"
  },

  // Respirators
  {
    articleNo: "8762200",
    productName: "uvex silv-Air c 2200 FFP2 preformed mask",
    q1Answer: "respirators",
    q2Answers: ["a"],
    q3Answers: ["a"],
    image: "/product-images/respirators/silv-air-c-2200-ffp2/1.jpg"
  },
  {
    articleNo: "8762220",
    productName: "uvex silv-Air c 2220 FFP2 preformed mask",
    q1Answer: "respirators",
    q2Answers: ["a"],
    q3Answers: ["a"],
    image: "/product-images/respirators/silv-air-c-2220-ffp2/3.jpg"
  },
  {
    articleNo: "8762313",
    productName: "uvex silv-Air 2310 planet",
    q1Answer: "respirators",
    q2Answers: ["a"],
    q3Answers: ["b"],
    image: "/product-images/respirators/silv-air-2310-planet/1.jpg"
  },
  {
    articleNo: "8763200",
    productName: "uvex silv-Air c 3200 FFP2 folding mask",
    q1Answer: "respirators",
    q2Answers: ["b"],
    q3Answers: ["a"],
    image: "/product-images/respirators/silv-air-c-3200-ffp2-fold/1.jpg"
  },
  {
    articleNo: "8763220",
    productName: "FFP2 folding mask uvex silv-Air c 3220",
    q1Answer: "respirators",
    q2Answers: ["b"],
    q3Answers: ["a"],
    image: "/product-images/respirators/silv-air-c-3220/1.jpg"
  },
  {
    articleNo: "8763310",
    productName: "uvex silv-Air c 3310 FFP3 folding mask",
    q1Answer: "respirators",
    q2Answers: ["b"],
    q3Answers: ["b"],
    image: "/product-images/respirators/silv-air-c-3310-ffp3/4.jpg"
  },

  // Safety Gloves
  {
    articleNo: "60070",
    productName: "phynomic XG planet",
    q1Answer: "gloves",
    q2Answers: ["a"],
    image: "/product-images/gloves/phynomic-xg/1.png"
  },
  {
    articleNo: "60090",
    productName: "Bamboo TwinFlex D",
    q1Answer: "gloves",
    q2Answers: ["a", "b", "f"],
    image: "/product-images/gloves/bamboo-twinflex-d/1.png"
  },
  {
    articleNo: "60023",
    productName: "uvex profi pure Hydro-Grip",
    q1Answer: "gloves",
    q2Answers: ["a", "f"],
    image: "/product-images/gloves/profi-pure-hydro-grip/1.png"
  },
  {
    articleNo: "60094",
    productName: "phynomic F XG protexxion zone protection gloves",
    q1Answer: "gloves",
    q2Answers: ["a", "b", "f"],
    image: "/product-images/gloves/phynomic-f-xg-protexxion-zone/1.jpg"
  },
  {
    articleNo: "60048",
    productName: "uvex phynomic C XG ESD",
    q1Answer: "gloves",
    q2Answers: ["a", "b"],
    image: "/product-images/gloves/phynomic-c-xg-esd/1.jpg"
  },
  {
    articleNo: "60663",
    productName: "HexArmor Helix® 3001",
    q1Answer: "gloves",
    q2Answers: ["a", "b", "c"],
    image: "/product-images/gloves/helix-3001/1.jpg"
  },
  {
    articleNo: "60666",
    productName: "Rescue glove HexArmor®Helix® Series 3007",
    q1Answer: "gloves",
    q2Answers: ["a", "b", "c", "f"],
    image: "/product-images/gloves/helix-3007/1.jpg"
  },
  {
    articleNo: "60180",
    productName: "uvex rubiflex S NB60SZ chemical protection glove",
    q1Answer: "gloves",
    q2Answers: ["e", "f"],
    image: "/product-images/gloves/rubiflex-s-nb60sz/1.jpg"
  },
  {
    articleNo: "60557",
    productName: "uvex rubiflex S XG35B chemical protection glove",
    q1Answer: "gloves",
    q2Answers: ["a", "e", "f"],
    image: "/product-images/gloves/rubiflex-s-xg35b/1.png"
  },
  {
    articleNo: "60840",
    productName: "uvex power protect V1000",
    q1Answer: "gloves",
    q2Answers: ["d"],
    image: "/product-images/gloves/power-protect-v1000-electrician/1.jpg"
  },
  {
    articleNo: "60838",
    productName: "uvex arc protect g1 - arc flash protection",
    q1Answer: "gloves",
    q2Answers: ["a", "d", "f"],
    image: "/product-images/gloves/arc-protect-g1-arc-flash-protection/1.jpg"
  },
  {
    articleNo: "60026",
    productName: "athletic lite xt",
    q1Answer: "gloves",
    q2Answers: ["a", "f"],
    image: "/product-images/gloves/athletic-lite-xt/1.jpg"
  },
  {
    articleNo: "60894",
    productName: "uvex unidur 6679 foam HV",
    q1Answer: "gloves",
    q2Answers: ["a", "b"],
    image: "/product-images/gloves/unidur-6679-foam-hv/1.jpg"
  },
  {
    articleNo: "60842",
    productName: "uvex unilite thermo FC safety glove",
    q1Answer: "gloves",
    q2Answers: ["a", "b", "f", "g"],
    image: "/product-images/gloves/unilite-thermo-fc/1.jpg"
  },

  // Safety Footwear
  {
    articleNo: "68082",
    productName: "uvex 1 x-craft planet safety shoes S1 PL low shoe",
    q1Answer: "footwear",
    q2Answers: ["a"],
    image: "/product-images/footwear/1-x-craft-planet-s1-pl-low/1.jpg"
  },
  {
    articleNo: "68448",
    productName: "uvex 1 G2 shoe S2 SRC",
    q1Answer: "footwear",
    q2Answers: ["a"],
    image: "/product-images/footwear/1-g2-s2-src/1.png"
  },
  {
    articleNo: "65292",
    productName: "uvex 2 MACSOLE® safety shoes S3L boots",
    q1Answer: "footwear",
    q2Answers: ["c"],
    image: "/product-images/footwear/2-macsole-s3l/1.jpg"
  },
  {
    articleNo: "95692",
    productName: "uvex 2 xenova® lace-up boot S3 SRC with Boa® Fit System",
    q1Answer: "footwear",
    q2Answers: ["b"],
    image: "/product-images/footwear/2-xenova-lace-up-s3-src-with-boa-fit-system/1.jpg"
  },
  {
    articleNo: "68722",
    productName: "uvex3 lace up boot",
    q1Answer: "footwear",
    q2Answers: ["c"],
    image: "/product-images/footwear/3-lace-up-s3-src/1.jpg"
  },
  {
    articleNo: "67353",
    productName: "heckel maccrossroad Meta",
    q1Answer: "footwear",
    q2Answers: ["c"],
    image: "/product-images/footwear/maccrossroad-meta/1.png"
  },

  // Clothing
  {
    articleNo: "17595",
    productName: "uvex 5/6 classic light chemical protection suit",
    q1Answer: "clothing",
    q2Answers: ["c", "d"],
    image: "/product-images/clothing/5-6-classic-light/1.jpg"
  },
  {
    articleNo: "89880",
    productName: "uvex 3B classic chemical protection suit",
    q1Answer: "clothing",
    q2Answers: ["a", "b", "d"],
    image: "/product-images/clothing/3b-classic/1.jpg"
  },
  {
    articleNo: "98375",
    productName: "uvex 4B disposable coverall chemical protection",
    q1Answer: "clothing",
    q2Answers: ["b", "c", "d"],
    image: "/product-images/clothing/4b-disposable-coverall/1.jpg"
  }
];

// Helper function to check if array contains any of the required values
const containsAny = (arr: string[], required: string[]): boolean => {
  return required.some((val) => arr.includes(val));
};

export interface QuestionnaireAnswers {
  q1: string;
  q2: string[];
  q3?: string[]; // Optional for glasses
  q4?: string; // Optional for glasses
}

export const getMatchingProducts = (
  answers: QuestionnaireAnswers
): Product[] => {
  return products.filter((product) => {
    // Question 1: Must match PPE type
    if (product.q1Answer !== answers.q1) return false;

    // Question 2: Must match at least one (shape/industry/task/type)
    if (!containsAny(answers.q2, product.q2Answers)) return false;

    // For helmets: Check Q3 and Q4
    if (product.q1Answer === "helmets") {
      // Question 3: Must match at least one hazard
      if (answers.q3 && product.q3Answers) {
        if (!containsAny(answers.q3 || [], product.q3Answers || [])) return false;
      }

      // Question 4: Must match faceshield requirement
      if (answers.q4 && product.q4Answer) {
        if (product.q4Answer !== answers.q4) return false;
      }
    }

    // For respirators: Check Q3 (filter level)
    if (product.q1Answer === "respirators") {
      if (answers.q3 && product.q3Answers) {
        if (!containsAny(answers.q3 || [], product.q3Answers || [])) return false;
      }
    }

    return true;
  });
};

export const getBestMatchingProduct = (
  answers: QuestionnaireAnswers
): Product | null => {
  const matching = products.filter((product) => {
    if (product.q1Answer !== answers.q1) return false;

    // For helmets, also check Q4
    if (product.q1Answer === "helmets" && answers.q4 && product.q4Answer) {
      if (product.q4Answer !== answers.q4) return false;
    }

    return true;
  });

  if (matching.length === 0) return null;

  // Score each product based on how many criteria match
  const scored = matching.map((product) => {
    let score = 0;

    // Count matching in Q2 (shape/tasks/industries/type)
    const matchingQ2 = product.q2Answers.filter((val) =>
      answers.q2.includes(val)
    ).length;
    score += matchingQ2;

    // For helmets: Count matching hazards in Q3
    if (product.q1Answer === "helmets" && answers.q3 && product.q3Answers) {
      const matchingQ3 = (product.q3Answers || []).filter((hazard) =>
        (answers.q3 || []).includes(hazard)
      ).length;
      score += matchingQ3;
    }

    // For respirators: Count matching filter levels in Q3
    if (product.q1Answer === "respirators" && answers.q3 && product.q3Answers) {
      const matchingQ3 = (product.q3Answers || []).filter((level) =>
        (answers.q3 || []).includes(level)
      ).length;
      score += matchingQ3;
    }

    return { product, score };
  });

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  return scored[0].product;
};


