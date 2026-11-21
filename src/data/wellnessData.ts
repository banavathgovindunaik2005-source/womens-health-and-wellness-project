export const TOPIC_IMAGES = {
  hero: '/src/assets/images/wellness_hero_editorial_1795246477974.jpg',
  hygiene: '/src/assets/images/topic_sustainable_hygiene_1795246477344.jpg',
  hormones: '/src/assets/images/topic_hormonal_nutrition_1795246477639.jpg',
  mentalHealth: '/src/assets/images/topic_mental_wellbeing_1795246478339.jpg',
  preventiveCare: '/src/assets/images/topic_preventive_care_1795246478194.jpg',
};

export interface PillarOverview {
  id: string;
  index: string;
  title: string;
  anchor: string;
  summary: string;
  keyTopics: string[];
}

export const HEALTH_PILLARS: PillarOverview[] = [
  {
    id: 'hygiene',
    index: '01',
    title: 'Menstrual Hygiene & Safer Products',
    anchor: '#hygiene',
    summary:
      'Evaluating irritation risks from synthetic fragrances and plastic-lined disposables while adopting breathable, sustainable alternatives.',
    keyTopics: [
      'Fragrance-free organic cotton pads',
      'Medical-grade menstrual cups',
      'Reusable period underwear',
    ],
  },
  {
    id: 'hormones',
    index: '02',
    title: 'Hormonal Health, PCOS & Thyroid',
    anchor: '#hormones',
    summary:
      'Understanding how nutrition, chronic stress, sleep, and environmental exposures interact with PCOS/PCOD and thyroid regulation.',
    keyTopics: [
      '28-day endocrine rhythm',
      'PCOS / PCOD lifestyle levers',
      'Thyroid-related disorder awareness',
    ],
  },
  {
    id: 'mental-health',
    index: '03',
    title: 'Mental Wellbeing Across Life Stages',
    anchor: '#mental-health',
    summary:
      'Recognizing emotional transitions from cyclical mood shifts and daily stress to postpartum depression and menopause.',
    keyTopics: [
      'Menstrual mood fluctuations',
      'Postpartum depression signals',
      'Menopausal emotional transitions',
    ],
  },
  {
    id: 'preventive-care',
    index: '04',
    title: 'Preventive Healthcare & Screenings',
    anchor: '#preventive-care',
    summary:
      'Encouraging early clinical awareness around cervical cancer screening, HPV vaccination, bone density, and iron-deficiency anemia.',
    keyTopics: [
      'HPV vaccination & cervical screening',
      'Bone mineral density protection',
      'Anemia & iron absorption habits',
    ],
  },
];

export interface HygieneProductOption {
  id: string;
  name: string;
  category: 'Conventional Concern' | 'Safer Alternative';
  irritationRisk: 'Elevated Risk' | 'Low Risk';
  fragranceStatus: string;
  materialComposition: string;
  wearWindow: string;
  environmentalImpact: string;
  hygieneProtocol: string;
  notes: string;
}

export const HYGIENE_PRODUCTS: HygieneProductOption[] = [
  {
    id: 'fragranced-plastic',
    name: 'Heavily Fragranced & Plastic-Based Pads',
    category: 'Conventional Concern',
    irritationRisk: 'Elevated Risk',
    fragranceStatus: 'Synthetic perfumes & deodorizing chemicals',
    materialComposition: 'Petrochemical top-sheet, SAP gels, non-breathable plastic backing',
    wearWindow: '4–6 hours (moisture & heat trapping)',
    environmentalImpact: 'High single-use landfill waste (up to 500+ years decomposition)',
    hygieneProtocol: 'Frequent replacement required to limit friction and skin maceration',
    notes:
      'Synthetic fragrances, dyes, and occluded plastic layers can disrupt skin barrier pH and trigger contact dermatitis, itching, or discomfort in sensitive individuals.',
  },
  {
    id: 'cotton-pads',
    name: 'Fragrance-Free Cotton Pads',
    category: 'Safer Alternative',
    irritationRisk: 'Low Risk',
    fragranceStatus: '100% fragrance-free, chlorine-free',
    materialComposition: 'Breathable unbleached or organic cotton top-sheet & cellulose core',
    wearWindow: '4–6 hours depending on flow volume',
    environmentalImpact: 'Lower chemical footprint; biodegradable plant-based options available',
    hygieneProtocol: 'Change every 4–6 hours; wash hands before and after replacement',
    notes:
      'Ideal entry transition from fragranced disposables—reduces exposure to volatile fragrance allergens while preserving airflow against sensitive skin.',
  },
  {
    id: 'menstrual-cup',
    name: 'Medical-Grade Silicone Menstrual Cup',
    category: 'Safer Alternative',
    irritationRisk: 'Low Risk',
    fragranceStatus: 'Zero fragrances, latex-free, dye-free options',
    materialComposition: '100% biocompatible medical-grade silicone or TPE',
    wearWindow: 'Up to 8–12 hours continuous wear',
    environmentalImpact: 'Minimal waste; single cup lasts 5–10 years',
    hygieneProtocol: 'Rinse with clean water on removal; sterilize by boiling 5 min between cycles',
    notes:
      'Collects rather than absorbs menstrual fluid, avoiding mucosal dryness while offering long-wear convenience and major waste reduction.',
  },
  {
    id: 'period-underwear',
    name: 'Reusable Period Underwear',
    category: 'Safer Alternative',
    irritationRisk: 'Low Risk',
    fragranceStatus: 'PFAS-free & fragrance-free textiles',
    materialComposition: 'Soft cotton/bamboo inner lining with multi-layer moisture-wicking gusset',
    wearWindow: '6–10 hours based on absorbency tier',
    environmentalImpact: 'Reusable for 2–4 years; eliminates hundreds of disposable items',
    hygieneProtocol: 'Rinse in cold water after wear, machine wash gentle, air dry completely',
    notes:
      'Combines familiar everyday comfort with high breathability—well suited for young girls, overnight wear, or backup protection.',
  },
];

export interface CyclePhase {
  id: string;
  name: string;
  dayRange: [number, number];
  estrogenLevel: string;
  progesteroneLevel: string;
  typicalExperience: string;
  supportiveFocus: string;
}

export const CYCLE_PHASES: CyclePhase[] = [
  {
    id: 'menstrual',
    name: 'Menstrual Phase',
    dayRange: [1, 5],
    estrogenLevel: 'Baseline Low',
    progesteroneLevel: 'Baseline Low',
    typicalExperience:
      'Uterine lining sheds; energy may dip alongside mild cramping or sensitivity to synthetic products.',
    supportiveFocus:
      'Prioritize fragrance-free cotton or breathable menstrual care, iron-rich foods with vitamin C, and gentle rest.',
  },
  {
    id: 'follicular',
    name: 'Follicular Phase',
    dayRange: [6, 13],
    estrogenLevel: 'Steadily Rising',
    progesteroneLevel: 'Low',
    typicalExperience:
      'FSH stimulates follicle growth while rising estrogen often supports sharper focus, steadier mood, and physical stamina.',
    supportiveFocus:
      'Ideal window for strength training, balanced protein intake, and consistent sleep timing.',
  },
  {
    id: 'ovulatory',
    name: 'Ovulatory Phase',
    dayRange: [14, 16],
    estrogenLevel: 'Peak',
    progesteroneLevel: 'Beginning Rise',
    typicalExperience:
      'LH surge triggers ovulation. Basal body temperature shifts slightly upward following release.',
    supportiveFocus:
      'Maintain hydration, fiber-rich whole foods, and cycle symptom tracking for hormonal baseline awareness.',
  },
  {
    id: 'luteal',
    name: 'Luteal Phase',
    dayRange: [17, 28],
    estrogenLevel: 'Secondary Moderate Peak',
    progesteroneLevel: 'Dominant Peak then Drop',
    typicalExperience:
      'Higher progesterone raises resting metabolic rate; late-luteal hormone drop can trigger mood shifts, bloating, or fatigue.',
    supportiveFocus:
      'Focus on complex carbohydrates, magnesium-rich greens, stress decompression, and tracking PMS/PMDD patterns.',
  },
];

export interface HormoneConditionFactor {
  id: string;
  factor: string;
  impactOnPCOS: string;
  impactOnThyroid: string;
  actionableStep: string;
}

export const HORMONE_FACTORS: HormoneConditionFactor[] = [
  {
    id: 'nutrition',
    factor: 'Nutrition & Glycemic Balance',
    impactOnPCOS:
      'High-glycemic spikes worsen insulin resistance, which can elevate androgen production and disrupt ovulation in PCOS/PCOD.',
    impactOnThyroid:
      'Adequate iodine, selenium, zinc, and iron support thyroid hormone synthesis and T4-to-T3 conversion.',
    actionableStep:
      'Pair fiber, lean protein, and healthy fats at meals; avoid extreme restrictive dieting.',
  },
  {
    id: 'stress',
    factor: 'Chronic Stress & Cortisol',
    impactOnPCOS:
      'Sustained cortisol elevation amplifies insulin resistance and adrenal androgen output, aggravating cycle irregularity.',
    impactOnThyroid:
      'Elevated stress hormones can suppress TSH signaling and slow peripheral conversion into active T3.',
    actionableStep:
      'Establish consistent 7–9h sleep windows, breathing routines, and scheduled screen-free recovery.',
  },
  {
    id: 'lifestyle',
    factor: 'Movement & Sedentary Patterns',
    impactOnPCOS:
      'Regular resistance and moderate aerobic activity directly improves skeletal muscle insulin sensitivity.',
    impactOnThyroid:
      'Consistent low-impact movement counteracts hypothyroid fatigue and supports metabolic rate.',
    actionableStep:
      'Aim for 150 minutes/week of moderate movement plus twice-weekly resistance exercise.',
  },
  {
    id: 'environment',
    factor: 'Environmental & Product Exposures',
    impactOnPCOS:
      'Endocrine-disrupting chemicals (phthalates, BPA, synthetic fragrances) can interfere with estrogen and androgen receptors.',
    impactOnThyroid:
      'Certain environmental pollutants and halogens can compete with thyroid iodine uptake over long-term exposure.',
    actionableStep:
      'Choose fragrance-free hygiene products, glass/stainless food storage, and transparent ingredient labels.',
  },
];

export interface MentalHealthStage {
  id: string;
  stage: string;
  contextLabel: string;
  biologicalContext: string;
  commonSignals: string[];
  evidenceSupport: string[];
  clinicalGuidance: string;
}

export const MENTAL_HEALTH_STAGES: MentalHealthStage[] = [
  {
    id: 'cyclical',
    stage: 'Menstrual Cycle Mood Changes',
    contextLabel: 'Luteal Fluctuations · PMS & PMDD',
    biologicalContext:
      'Rapid drops in estrogen and progesterone during the late luteal phase interact with serotonin and GABA neurotransmitter pathways.',
    commonSignals: [
      'Irritability or heightened emotional sensitivity 5–7 days before bleeding',
      'Sleep disruption, mental fog, or sudden dips in motivation',
      'Severe cyclical mood impairment interfering with school or work (possible PMDD)',
    ],
    evidenceSupport: [
      'Track symptoms across 2–3 consecutive cycles to identify predictable patterns',
      'Reduce caffeine/alcohol and stabilize blood sugar during the late luteal window',
      'Prioritize light outdoor movement and social support rather than self-criticism',
    ],
    clinicalGuidance:
      'Consult a gynecologist or mental health clinician if mood changes severely disrupt daily functioning every month.',
  },
  {
    id: 'stress',
    stage: 'Daily, Academic & Life Stress',
    contextLabel: 'HPA-Axis Load & Burnout Prevention',
    biologicalContext:
      'Chronic psychological stress activates the hypothalamic-pituitary-adrenal (HPA) axis, altering cortisol rhythms and menstrual regularity.',
    commonSignals: [
      'Persistent overwhelm, muscle tension, or racing thoughts at bedtime',
      'Delayed or skipped periods during high-pressure examination or work periods',
      'Emotional exhaustion and withdrawal from peer activities',
    ],
    evidenceSupport: [
      'Structured time-blocking and clear rest boundaries during high-demand weeks',
      '10-minute physiological sigh or mindfulness decompression routines',
      'Open peer conversation to reduce stigma around women’s health challenges',
    ],
    clinicalGuidance:
      'Seek counseling support when stress symptoms persist beyond two weeks or impair sleep and appetite.',
  },
  {
    id: 'postpartum',
    stage: 'Postpartum Depression',
    contextLabel: 'Post-Birth Hormonal Drop & Maternal Care',
    biologicalContext:
      'Following childbirth, estrogen and progesterone fall sharply within 48 hours alongside sleep deprivation and caregiving demands.',
    commonSignals: [
      'Persistent sadness, hopelessness, or tearfulness lasting beyond the first 2 weeks',
      'Difficulty bonding with the infant, overwhelming anxiety, or intrusive worries',
      'Severe insomnia even when the baby sleeps, or loss of appetite',
    ],
    evidenceSupport: [
      'Distinguish transient "baby blues" (days 3–14) from clinical postpartum depression',
      'Share nighttime caregiving shifts so the mother achieves uninterrupted 4–5 hour sleep blocks',
      'Normalize asking family and healthcare providers for early postpartum mental health screening',
    ],
    clinicalGuidance:
      'Postpartum depression is treatable and common—contact an obstetrician or mental health specialist promptly if symptoms last over 14 days.',
  },
  {
    id: 'menopause',
    stage: 'Emotional Changes During Menopause',
    contextLabel: 'Perimenopause & Menopausal Transition',
    biologicalContext:
      'Erratic and eventually declining ovarian estrogen during perimenopause affects thermoregulation, sleep architecture, and mood stability.',
    commonSignals: [
      'Sudden anxiety spikes, low mood, or uncharacteristic irritability',
      'Night sweats and fragmented sleep amplifying daytime cognitive fatigue',
      'Identity and life-stage stress occurring alongside physical transition',
    ],
    evidenceSupport: [
      'Maintain sleep hygiene in a cool, breathable bedroom environment',
      'Combine weight-bearing exercise with community support groups',
      'Discuss evidence-based hormonal or non-hormonal symptom options with a clinician',
    ],
    clinicalGuidance:
      'Schedule a dedicated menopause wellness consultation to address both emotional wellbeing and long-term bone/cardiovascular health.',
  },
];

export interface PreventiveTopic {
  id: string;
  title: string;
  stageTag: 'Adolescence (13–24)' | 'Reproductive (25–44)' | '45+ & Lifespan';
  summary: string;
  keyAction: string;
  nutritionOrCareNote: string;
}

export const PREVENTIVE_TOPICS: PreventiveTopic[] = [
  {
    id: 'hpv-vaccine',
    title: 'HPV Vaccination',
    stageTag: 'Adolescence (13–24)',
    summary:
      'Human Papillomavirus (HPV) vaccination protects against the high-risk viral strains responsible for most cervical cancers.',
    keyAction:
      'Recommended routinely in pre-teen/adolescent years (typically ages 9–14, with catch-up through age 26 per clinician guidance).',
    nutritionOrCareNote:
      'Early immunization provides the strongest preventive barrier before potential exposure.',
  },
  {
    id: 'cervical-screening',
    title: 'Cervical Cancer Awareness & Screening',
    stageTag: 'Reproductive (25–44)',
    summary:
      'Early precancerous cervical changes rarely cause noticeable symptoms, making scheduled screening essential.',
    keyAction:
      'Follow recommended Pap smear and/or high-risk HPV DNA testing intervals starting in early adulthood (typically age 21–25+).',
    nutritionOrCareNote:
      'Seek medical evaluation promptly for unexplained intermenstrual bleeding or persistent pelvic discomfort.',
  },
  {
    id: 'anemia',
    title: 'Anemia & Iron Deficiency Awareness',
    stageTag: 'Reproductive (25–44)',
    summary:
      'Regular menstrual blood loss increases iron requirements; unaddressed deficiency causes fatigue, dizziness, and reduced concentration.',
    keyAction:
      'Request periodic hemoglobin and serum ferritin checks, especially if periods are heavy or lasting over 7 days.',
    nutritionOrCareNote:
      'Pair iron sources (spinach, lentils, fortified grains, lean meat) with Vitamin C (citrus, bell peppers) and space away from tea/coffee.',
  },
  {
    id: 'bone-health',
    title: 'Bone Health & Osteoporosis Prevention',
    stageTag: '45+ & Lifespan',
    summary:
      'Peak bone mass is built before age 30, while declining estrogen during menopause accelerates bone mineral loss.',
    keyAction:
      'Combine weight-bearing and resistance training with calcium-rich foods, adequate Vitamin D, and DEXA bone density screening when advised.',
    nutritionOrCareNote:
      'Calcium (dairy, fortified plant milk, sesame, leafy greens) + morning sunlight / Vitamin D work together for skeletal strength.',
  },
];

export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    topic: 'Menstrual Hygiene',
    question:
      'Why should sensitive individuals avoid heavily fragranced and plastic-based menstrual pads?',
    options: [
      'They dissolve too quickly in cold water',
      'Synthetic perfumes and non-breathable plastics can trap moisture and cause skin irritation',
      'They cannot be worn during daytime hours',
      'They completely eliminate the need for handwashing',
    ],
    correctIndex: 1,
    explanation:
      'Synthetic fragrance chemicals and occluded plastic backing trap heat and moisture, increasing irritation risk compared with fragrance-free cotton pads, menstrual cups, or reusable period underwear.',
  },
  {
    id: 'q2',
    topic: 'Hormonal Health',
    question:
      'Which combination of factors can influence conditions like PCOS/PCOD and thyroid disorders?',
    options: [
      'Only genetics, with zero influence from daily habits',
      'Lifestyle, nutrition, chronic stress, environmental exposures, and hormonal imbalances',
      'Drinking cold water during menstruation',
      'Using reusable cotton underwear',
    ],
    correctIndex: 1,
    explanation:
      'Hormonal conditions such as PCOS/PCOD and thyroid disorders are shaped by a mix of endocrine balance, nutrition, stress physiology, sleep, lifestyle, and environmental exposures.',
  },
  {
    id: 'q3',
    topic: 'Mental Health',
    question:
      'What distinguishes postpartum depression from typical short-term "baby blues"?',
    options: [
      'Postpartum depression resolves automatically within 24 hours',
      'Postpartum depression persists beyond two weeks and involves deeper mood, sleep, or bonding distress requiring support',
      'Only occurs after menopause',
      'Has no connection to hormonal shifts',
    ],
    correctIndex: 1,
    explanation:
      'While mild mood swings ("baby blues") generally fade within two weeks of delivery, persistent sadness, severe anxiety, or exhaustion lasting longer indicates postpartum depression and warrants medical care.',
  },
  {
    id: 'q4',
    topic: 'Preventive Care',
    question:
      'Which dietary pairing improves plant-based iron absorption to help prevent iron-deficiency anemia?',
    options: [
      'Pairing iron-rich foods with strong black tea immediately after meals',
      'Pairing iron-rich foods (like lentils or spinach) with Vitamin C (like citrus or bell peppers)',
      'Avoiding all dietary carbohydrates',
      'Taking calcium supplements at the exact same minute as iron',
    ],
    correctIndex: 1,
    explanation:
      'Vitamin C enhances non-heme iron absorption, whereas tannins in tea/coffee and high calcium doses taken simultaneously can inhibit iron uptake.',
  },
  {
    id: 'q5',
    topic: 'Preventive Care',
    question:
      'Which two preventive strategies directly lower risk and enable early detection for cervical cancer and osteoporosis?',
    options: [
      'HPV vaccination/screening and lifelong weight-bearing exercise with calcium & Vitamin D',
      'Using scented feminine washes and avoiding sunlight entirely',
      'Skipping checkups until symptoms appear',
      'Replacing all meals with fruit juice',
    ],
    correctIndex: 0,
    explanation:
      'HPV vaccination plus routine cervical screening protect against cervical cancer, while peak bone-building nutrition (calcium + Vitamin D) and weight-bearing movement support lifelong bone density.',
  },
];
