/**
 * Built-in medication database for UK Medication Side Effect Analyser.
 * Side effect data sourced from NHS medicines information pages.
 */

export const MEDICATIONS_DB = {
  // ── PAINKILLERS ──────────────────────────────────────────────────────────────

  'paracetamol': {
    name: 'Paracetamol',
    also_known_as: ['Calpol', 'Panadol', 'Anadin', 'Panadol Extra'],
    category: 'Painkiller',
    sideEffects: {
      common: ['nausea', 'feeling sick'],
      uncommon: ['skin rash', 'itching', 'hives', 'flushing'],
      rare: ['liver damage', 'severe skin reaction', 'low blood pressure', 'blood disorders', 'kidney damage', 'anaphylaxis'],
    },
    interactions: [
      'warfarin – may increase bleeding risk with regular use',
      'alcohol – increases risk of liver damage',
      'carbamazepine – reduces paracetamol effectiveness',
      'metoclopramide – increases paracetamol absorption',
      'colestyramine – reduces paracetamol absorption',
    ],
  },

  'ibuprofen': {
    name: 'Ibuprofen',
    also_known_as: ['Nurofen', 'Calprofen', 'Brufen'],
    category: 'Painkiller / Anti-inflammatory (NSAID)',
    sideEffects: {
      common: ['indigestion', 'nausea', 'stomach pain', 'diarrhoea', 'constipation', 'headache', 'dizziness'],
      uncommon: ['heartburn', 'vomiting', 'bloating', 'wind', 'skin rash', 'itching', 'raised blood pressure', 'fluid retention'],
      rare: ['stomach ulcer', 'stomach bleed', 'severe skin reaction', 'kidney problems', 'liver problems', 'heart attack', 'stroke', 'asthma attack', 'meningitis'],
    },
    interactions: [
      'aspirin – increased risk of stomach bleed',
      'warfarin – increased risk of bleeding',
      'lithium – ibuprofen increases lithium levels',
      'methotrexate – increases methotrexate toxicity',
      'ACE inhibitors (e.g. ramipril, lisinopril) – reduces blood pressure lowering effect and increases kidney risk',
      'diuretics (e.g. furosemide) – reduces diuretic effect',
      'SSRIs (e.g. sertraline) – increased risk of stomach bleed',
    ],
  },

  'aspirin': {
    name: 'Aspirin',
    also_known_as: ['Disprin', 'Aspirin 75mg', 'Nu-Seals'],
    category: 'Painkiller / Antiplatelet',
    sideEffects: {
      common: ['indigestion', 'nausea', 'stomach pain', 'stomach upset'],
      uncommon: ['vomiting', 'skin rash', 'hives', 'bruising more easily', 'nosebleeds'],
      rare: ['stomach ulcer', 'stomach bleed', 'tinnitus (ringing in ears)', 'severe allergic reaction', 'liver damage', 'kidney damage', "Reye's syndrome (in children)"],
    },
    interactions: [
      'warfarin – significantly increases bleeding risk',
      'ibuprofen – increased risk of stomach bleed',
      'clopidogrel – increased bleeding risk when combined',
      'SSRIs – increased risk of bleeding',
      'methotrexate – increases methotrexate toxicity',
    ],
  },

  'codeine': {
    name: 'Codeine',
    also_known_as: ['Codeine Phosphate', 'Solpadeine', 'Nurofen Plus'],
    category: 'Opioid Painkiller',
    sideEffects: {
      common: ['constipation', 'feeling sick', 'nausea', 'drowsiness', 'dizziness', 'headache', 'dry mouth'],
      uncommon: ['vomiting', 'confusion', 'itching', 'skin rash', 'difficulty urinating', 'sweating', 'low blood pressure'],
      rare: ['breathing problems', 'dependence and addiction', 'hallucinations', 'seizures', 'adrenal insufficiency', 'low blood sodium'],
    },
    interactions: [
      'alcohol – increased sedation and breathing problems',
      'benzodiazepines (e.g. diazepam) – serious risk of respiratory depression',
      'MAOIs – serious interaction, avoid combination',
      'other opioids – additive effects',
      'sedatives and sleeping tablets – increased drowsiness',
    ],
  },

  'tramadol': {
    name: 'Tramadol',
    also_known_as: ['Zamadol', 'Zydol', 'Tramodol'],
    category: 'Opioid Painkiller',
    sideEffects: {
      common: ['nausea', 'vomiting', 'dizziness', 'constipation', 'headache', 'drowsiness', 'dry mouth', 'sweating'],
      uncommon: ['confusion', 'itching', 'skin rash', 'difficulty sleeping', 'anxiety', 'heart palpitations', 'low blood pressure'],
      rare: ['seizures', 'serotonin syndrome', 'hallucinations', 'dependence and withdrawal', 'difficulty breathing', 'severe skin reaction'],
    },
    interactions: [
      'SSRIs/SNRIs – risk of serotonin syndrome',
      'MAOIs – serious, potentially fatal interaction',
      'alcohol – increased sedation',
      'warfarin – may increase bleeding risk',
      'carbamazepine – reduces tramadol effectiveness',
      'benzodiazepines – increased risk of respiratory depression',
    ],
  },

  'naproxen': {
    name: 'Naproxen',
    also_known_as: ['Naprosyn', 'Feminax Ultra'],
    category: 'Painkiller / Anti-inflammatory (NSAID)',
    sideEffects: {
      common: ['indigestion', 'heartburn', 'stomach pain', 'nausea', 'diarrhoea', 'constipation', 'headache', 'dizziness'],
      uncommon: ['vomiting', 'wind', 'skin rash', 'ringing in ears', 'difficulty sleeping', 'blurred vision', 'fluid retention'],
      rare: ['stomach ulcer', 'stomach bleed', 'kidney problems', 'liver problems', 'severe skin reaction', 'asthma attack', 'heart attack', 'stroke'],
    },
    interactions: [
      'warfarin – increased bleeding risk',
      'lithium – increases lithium levels',
      'ACE inhibitors – reduces blood pressure effect and kidney risk',
      'diuretics – reduces diuretic effect',
      'SSRIs – increased risk of stomach bleed',
      'methotrexate – increases toxicity',
    ],
  },

  'diclofenac': {
    name: 'Diclofenac',
    also_known_as: ['Voltarol', 'Diclomax'],
    category: 'Painkiller / Anti-inflammatory (NSAID)',
    sideEffects: {
      common: ['indigestion', 'nausea', 'stomach pain', 'diarrhoea', 'headache', 'dizziness'],
      uncommon: ['vomiting', 'skin rash', 'raised liver enzymes', 'fluid retention', 'high blood pressure'],
      rare: ['stomach ulcer', 'stomach bleed', 'serious liver damage', 'kidney problems', 'heart attack', 'stroke', 'severe skin reaction'],
    },
    interactions: [
      'warfarin – increased bleeding risk',
      'lithium – increases lithium levels',
      'ACE inhibitors – reduces blood pressure effect',
      'methotrexate – increases toxicity',
      'SSRIs – increased risk of stomach bleed',
    ],
  },

  'co-codamol': {
    name: 'Co-codamol',
    also_known_as: ['Solpadol', 'Tylex', 'Kapake'],
    category: 'Painkiller (paracetamol + codeine)',
    sideEffects: {
      common: ['constipation', 'nausea', 'drowsiness', 'dizziness', 'feeling faint', 'vomiting'],
      uncommon: ['itching', 'skin rash', 'headache', 'dry mouth', 'confusion', 'difficulty urinating', 'sweating'],
      rare: ['liver damage (from paracetamol)', 'breathing problems', 'dependence and addiction', 'hallucinations', 'seizures'],
    },
    interactions: [
      'alcohol – increased sedation and liver risk',
      'MAOIs – dangerous interaction',
      'benzodiazepines – increased respiratory depression risk',
      'other opioids – additive effects',
      'warfarin – paracetamol component may increase bleeding risk',
    ],
  },

  // ── BLOOD PRESSURE / HEART ───────────────────────────────────────────────────

  'amlodipine': {
    name: 'Amlodipine',
    also_known_as: ['Istin'],
    category: 'Calcium Channel Blocker (Blood Pressure)',
    sideEffects: {
      common: ['ankle swelling', 'flushing', 'headache', 'dizziness', 'palpitations', 'feeling tired'],
      uncommon: ['nausea', 'stomach pain', 'skin rash', 'sleep disturbance', 'muscle cramps', 'low blood pressure', 'breathlessness'],
      rare: ['very low blood pressure', 'liver problems', 'worsening angina', 'heart attack (in some patients)', 'severe skin reaction', 'excessive gum growth'],
    },
    interactions: [
      'simvastatin – increases simvastatin levels, increases muscle damage risk',
      'cyclosporin – increases cyclosporin levels',
      'tacrolimus – increases tacrolimus levels',
      'rifampicin – reduces amlodipine effectiveness',
      'grapefruit juice – may increase amlodipine levels',
    ],
  },

  'ramipril': {
    name: 'Ramipril',
    also_known_as: ['Tritace', 'Lopace'],
    category: 'ACE Inhibitor (Blood Pressure)',
    sideEffects: {
      common: ['dry persistent cough', 'dizziness', 'headache', 'tiredness', 'nausea'],
      uncommon: ['low blood pressure', 'kidney problems', 'raised potassium', 'rash', 'taste changes', 'vomiting', 'stomach pain'],
      rare: ['angioedema (facial swelling)', 'severe skin reaction', 'liver damage', 'low white blood cell count', 'pancreatitis'],
    },
    interactions: [
      'NSAIDs (e.g. ibuprofen) – reduces blood pressure effect, increases kidney risk',
      'potassium supplements – risk of high potassium',
      'potassium-sparing diuretics (e.g. spironolactone) – risk of high potassium',
      'lithium – increases lithium levels',
      'insulin/diabetes medicines – may enhance blood sugar lowering effect',
    ],
  },

  'lisinopril': {
    name: 'Lisinopril',
    also_known_as: ['Zestril', 'Carace'],
    category: 'ACE Inhibitor (Blood Pressure)',
    sideEffects: {
      common: ['dry persistent cough', 'dizziness', 'headache', 'tiredness', 'low blood pressure'],
      uncommon: ['nausea', 'vomiting', 'diarrhoea', 'skin rash', 'raised potassium', 'kidney problems', 'taste disturbance'],
      rare: ['angioedema (swelling of face, lips, tongue)', 'liver damage', 'low white blood cells', 'severe skin reaction', 'pancreatitis'],
    },
    interactions: [
      'NSAIDs – reduces blood pressure effect, increases kidney risk',
      'potassium-sparing diuretics – risk of dangerously high potassium',
      'lithium – increases lithium levels',
      'insulin – may enhance blood sugar lowering',
      'gold injections – may cause flushing reactions',
    ],
  },

  'bisoprolol': {
    name: 'Bisoprolol',
    also_known_as: ['Cardicor', 'Emcor'],
    category: 'Beta Blocker (Blood Pressure / Heart)',
    sideEffects: {
      common: ['cold hands and feet', 'tiredness', 'dizziness', 'headache', 'feeling sick', 'slow heart rate'],
      uncommon: ['sleep problems', 'nightmares', 'depression', 'stomach upset', 'diarrhoea', 'constipation', 'difficulty breathing'],
      rare: ['worsening heart failure', 'heart block', 'impotence', 'hair loss', 'severe skin reaction', 'dry eyes'],
    },
    interactions: [
      'calcium channel blockers (e.g. verapamil) – risk of heart block and very slow heart rate',
      'antiarrhythmics – risk of bradycardia',
      'clonidine – stopping clonidine can cause rebound hypertension',
      'NSAIDs – may reduce blood pressure lowering effect',
      'insulin/diabetes medicines – may mask hypoglycaemia symptoms',
    ],
  },

  'atenolol': {
    name: 'Atenolol',
    also_known_as: ['Tenormin'],
    category: 'Beta Blocker (Blood Pressure)',
    sideEffects: {
      common: ['cold hands and feet', 'tiredness', 'slow heart rate', 'dizziness', 'nausea'],
      uncommon: ['sleep disturbance', 'nightmares', 'low blood pressure', 'depression', 'constipation', 'diarrhoea'],
      rare: ['heart block', 'worsening heart failure', 'impotence', 'dry eyes', 'severe skin reaction'],
    },
    interactions: [
      'verapamil – dangerous combination, risk of heart block',
      'clonidine – stopping clonidine may cause rebound hypertension',
      'NSAIDs – reduces blood pressure lowering effect',
      'insulin – masks symptoms of hypoglycaemia',
    ],
  },

  'losartan': {
    name: 'Losartan',
    also_known_as: ['Cozaar'],
    category: 'Angiotensin Receptor Blocker (Blood Pressure)',
    sideEffects: {
      common: ['dizziness', 'low blood pressure', 'raised potassium', 'kidney impairment'],
      uncommon: ['headache', 'tiredness', 'anaemia', 'low blood sugar in diabetic patients', 'muscle pain'],
      rare: ['angioedema', 'liver problems', 'severe skin reaction', 'migraine'],
    },
    interactions: [
      'NSAIDs – increases kidney risk',
      'potassium-sparing diuretics/supplements – risk of high potassium',
      'lithium – increases lithium levels',
      'rifampicin – reduces losartan levels',
      'fluconazole – increases losartan exposure',
    ],
  },

  'valsartan': {
    name: 'Valsartan',
    also_known_as: ['Diovan'],
    category: 'Angiotensin Receptor Blocker (Blood Pressure)',
    sideEffects: {
      common: ['dizziness', 'low blood pressure', 'raised potassium', 'headache'],
      uncommon: ['tiredness', 'nausea', 'back pain', 'kidney problems', 'low sodium'],
      rare: ['angioedema', 'liver problems', 'low white blood cells', 'severe skin reaction'],
    },
    interactions: [
      'NSAIDs – increases kidney risk',
      'potassium-sparing diuretics – high potassium risk',
      'lithium – increases lithium levels',
      'rifampicin – reduces valsartan levels',
    ],
  },

  'candesartan': {
    name: 'Candesartan',
    also_known_as: ['Amias'],
    category: 'Angiotensin Receptor Blocker (Blood Pressure)',
    sideEffects: {
      common: ['dizziness', 'headache', 'low blood pressure', 'raised potassium'],
      uncommon: ['back pain', 'joint pain', 'nausea', 'kidney problems', 'low sodium', 'low white blood cells'],
      rare: ['angioedema', 'liver problems', 'very low white blood cells (agranulocytosis)'],
    },
    interactions: [
      'NSAIDs – increased kidney risk',
      'potassium-sparing diuretics – high potassium risk',
      'lithium – increases lithium levels',
    ],
  },

  'bendroflumethiazide': {
    name: 'Bendroflumethiazide',
    also_known_as: ['Aprinox'],
    category: 'Thiazide Diuretic (Blood Pressure)',
    sideEffects: {
      common: ['low potassium', 'low sodium', 'increased thirst', 'passing more urine', 'dizziness'],
      uncommon: ['nausea', 'loss of appetite', 'raised blood glucose', 'gout', 'raised lipids', 'impotence'],
      rare: ['low magnesium', 'low calcium', 'low blood pressure', 'blood disorders', 'pancreatitis', 'jaundice'],
    },
    interactions: [
      'lithium – reduces lithium excretion, risk of toxicity',
      'NSAIDs – reduces diuretic effect',
      'ACE inhibitors – first dose hypotension risk',
      'digitalis (digoxin) – low potassium increases digoxin toxicity',
      'insulin/diabetes medicines – may impair blood sugar control',
    ],
  },

  'indapamide': {
    name: 'Indapamide',
    also_known_as: ['Natrilix', 'Tensaid'],
    category: 'Thiazide-like Diuretic (Blood Pressure)',
    sideEffects: {
      common: ['low potassium', 'low sodium', 'dizziness', 'headache'],
      uncommon: ['nausea', 'vomiting', 'skin rash', 'muscle cramps', 'fatigue', 'raised blood glucose'],
      rare: ['severe low potassium', 'low blood pressure', 'blood disorders', 'liver damage', 'severe skin reaction'],
    },
    interactions: [
      'lithium – increases lithium toxicity risk',
      'digoxin – low potassium increases digoxin toxicity',
      'antiarrhythmics – low potassium risk',
      'NSAIDs – reduces diuretic effect',
    ],
  },

  'furosemide': {
    name: 'Furosemide',
    also_known_as: ['Frusemide', 'Lasix'],
    category: 'Loop Diuretic',
    sideEffects: {
      common: ['passing more urine', 'low potassium', 'low sodium', 'dizziness', 'dehydration', 'muscle cramps'],
      uncommon: ['low blood pressure', 'gout', 'raised blood glucose', 'nausea', 'vomiting', 'diarrhoea', 'tinnitus'],
      rare: ['severe electrolyte imbalance', 'blood disorders', 'hearing loss (especially with high doses)', 'severe skin reaction', 'pancreatitis'],
    },
    interactions: [
      'digoxin – low potassium increases digoxin toxicity',
      'lithium – reduces lithium excretion',
      'NSAIDs – reduces diuretic effect, increases kidney risk',
      'aminoglycoside antibiotics – increased hearing loss risk',
      'ACE inhibitors – risk of very low blood pressure',
    ],
  },

  'spironolactone': {
    name: 'Spironolactone',
    also_known_as: ['Aldactone'],
    category: 'Potassium-sparing Diuretic',
    sideEffects: {
      common: ['raised potassium', 'low sodium', 'breast tenderness (men and women)', 'dizziness', 'nausea', 'stomach cramps'],
      uncommon: ['gynaecomastia (breast enlargement in men)', 'irregular periods', 'diarrhoea', 'skin rash', 'headache', 'confusion'],
      rare: ['very high potassium (dangerous)', 'liver problems', 'blood disorders', 'severe skin reaction'],
    },
    interactions: [
      'ACE inhibitors/ARBs – significant risk of dangerously high potassium',
      'NSAIDs – reduces diuretic effect, increases potassium risk',
      'potassium supplements – high potassium risk',
      'digoxin – spironolactone increases digoxin levels',
      'lithium – increases lithium levels',
    ],
  },

  'digoxin': {
    name: 'Digoxin',
    also_known_as: ['Lanoxin'],
    category: 'Cardiac Glycoside',
    sideEffects: {
      common: ['nausea', 'vomiting', 'diarrhoea', 'loss of appetite', 'feeling unwell'],
      uncommon: ['visual disturbances (yellow/green halos)', 'dizziness', 'headache', 'confusion', 'slow heart rate'],
      rare: ['heart rhythm problems (arrhythmias)', 'digoxin toxicity (serious)', 'hallucinations', 'depression', 'gynaecomastia'],
    },
    interactions: [
      'amiodarone – significantly increases digoxin levels',
      'verapamil – increases digoxin levels',
      'diuretics – low potassium increases digoxin toxicity',
      'spironolactone – increases digoxin levels',
      'erythromycin/clarithromycin – increases digoxin levels',
      'rifampicin – reduces digoxin levels',
    ],
  },

  'warfarin': {
    name: 'Warfarin',
    also_known_as: ['Coumadin', 'Marevan'],
    category: 'Anticoagulant',
    sideEffects: {
      common: ['bleeding more easily', 'bruising', 'nosebleeds', 'bleeding gums'],
      uncommon: ['heavy or prolonged periods', 'blood in urine', 'rectal bleeding', 'prolonged cuts taking longer to stop bleeding'],
      rare: ['serious internal bleeding', 'haemorrhagic stroke', 'skin necrosis', 'calcification of blood vessels', 'purple toe syndrome'],
    },
    interactions: [
      'aspirin/NSAIDs – significantly increased bleeding risk',
      'antibiotics (many) – can increase or decrease warfarin effect',
      'amiodarone – significantly increases warfarin effect',
      'carbamazepine/rifampicin – reduces warfarin effect',
      'alcohol – large amounts may increase bleeding risk',
      'cranberry juice – may increase warfarin effect',
      'vitamin K (in green vegetables) – reduces warfarin effect',
    ],
  },

  'apixaban': {
    name: 'Apixaban',
    also_known_as: ['Eliquis'],
    category: 'Anticoagulant (DOAC)',
    sideEffects: {
      common: ['bruising', 'nausea', 'anaemia', 'bleeding more easily'],
      uncommon: ['nosebleeds', 'heavy periods', 'blood in urine', 'rectal bleeding', 'low blood pressure'],
      rare: ['serious internal bleeding', 'haemorrhagic stroke', 'allergic reaction', 'liver problems'],
    },
    interactions: [
      'NSAIDs/aspirin – increased bleeding risk',
      'rifampicin – significantly reduces apixaban levels',
      'ketoconazole/itraconazole – increases apixaban levels',
      'carbamazepine/phenytoin – reduces apixaban levels',
      'St John\'s wort – reduces apixaban levels',
    ],
  },

  'rivaroxaban': {
    name: 'Rivaroxaban',
    also_known_as: ['Xarelto'],
    category: 'Anticoagulant (DOAC)',
    sideEffects: {
      common: ['nausea', 'bleeding', 'bruising', 'dizziness', 'tiredness'],
      uncommon: ['headache', 'low blood pressure', 'constipation', 'diarrhoea', 'stomach pain', 'anaemia'],
      rare: ['serious bleeding', 'jaundice', 'liver problems', 'allergic reaction', 'haemorrhagic stroke'],
    },
    interactions: [
      'NSAIDs/aspirin – increased bleeding risk',
      'rifampicin – significantly reduces rivaroxaban levels',
      'ketoconazole/itraconazole – increases rivaroxaban levels',
      'carbamazepine – reduces rivaroxaban levels',
      'St John\'s wort – reduces rivaroxaban levels',
    ],
  },

  'clopidogrel': {
    name: 'Clopidogrel',
    also_known_as: ['Plavix', 'Grepid'],
    category: 'Antiplatelet',
    sideEffects: {
      common: ['bruising', 'bleeding more easily', 'nosebleeds', 'diarrhoea', 'nausea'],
      uncommon: ['stomach pain', 'indigestion', 'gastritis', 'vomiting', 'stomach ulcer', 'skin rash', 'itching'],
      rare: ['thrombotic thrombocytopaenic purpura', 'severe skin reaction', 'liver problems', 'blood disorders'],
    },
    interactions: [
      'aspirin – increased bleeding risk',
      'NSAIDs – increased bleeding risk',
      'warfarin – increased bleeding risk',
      'omeprazole – may reduce clopidogrel effectiveness',
      'SSRIs – increased bleeding risk',
    ],
  },

  // ── CHOLESTEROL ──────────────────────────────────────────────────────────────

  'atorvastatin': {
    name: 'Atorvastatin',
    also_known_as: ['Lipitor'],
    category: 'Statin (Cholesterol)',
    sideEffects: {
      common: ['muscle aches and pains', 'headache', 'nausea', 'diarrhoea', 'raised blood glucose'],
      uncommon: ['memory problems', 'sleep problems', 'constipation', 'back pain', 'joint pain', 'tiredness', 'liver enzyme changes'],
      rare: ['myopathy (muscle disease)', 'rhabdomyolysis (severe muscle breakdown)', 'liver damage', 'interstitial lung disease', 'peripheral neuropathy'],
    },
    interactions: [
      'amlodipine – increases atorvastatin levels',
      'rifampicin – reduces atorvastatin levels',
      'colchicine – increased risk of muscle problems',
      'clarithromycin/erythromycin – increases atorvastatin levels',
      'grapefruit juice – may increase atorvastatin levels',
    ],
  },

  'simvastatin': {
    name: 'Simvastatin',
    also_known_as: ['Zocor'],
    category: 'Statin (Cholesterol)',
    sideEffects: {
      common: ['muscle pain', 'headache', 'nausea', 'diarrhoea', 'constipation'],
      uncommon: ['stomach pain', 'sleep problems', 'memory problems', 'liver enzyme changes', 'raised blood glucose'],
      rare: ['myopathy', 'rhabdomyolysis', 'liver damage', 'peripheral neuropathy', 'severe skin reaction'],
    },
    interactions: [
      'amlodipine – significantly increases simvastatin levels',
      'amiodarone – increases simvastatin levels',
      'clarithromycin/erythromycin – increases simvastatin levels significantly (avoid)',
      'diltiazem/verapamil – increases simvastatin levels',
      'grapefruit juice – increases simvastatin levels',
    ],
  },

  'rosuvastatin': {
    name: 'Rosuvastatin',
    also_known_as: ['Crestor'],
    category: 'Statin (Cholesterol)',
    sideEffects: {
      common: ['headache', 'muscle pain', 'nausea', 'constipation', 'stomach pain'],
      uncommon: ['diarrhoea', 'dizziness', 'sleep problems', 'liver enzyme changes', 'raised blood glucose'],
      rare: ['myopathy', 'rhabdomyolysis', 'liver damage', 'memory problems', 'peripheral neuropathy'],
    },
    interactions: [
      'ciclosporin – significantly increases rosuvastatin levels',
      'antacids – reduces rosuvastatin absorption',
      'anticoagulants – may increase anticoagulant effect',
      'colchicine – risk of muscle problems',
    ],
  },

  'pravastatin': {
    name: 'Pravastatin',
    also_known_as: ['Lipostat'],
    category: 'Statin (Cholesterol)',
    sideEffects: {
      common: ['headache', 'nausea', 'diarrhoea', 'muscle pain'],
      uncommon: ['stomach pain', 'constipation', 'sleep problems', 'dizziness', 'liver enzyme changes'],
      rare: ['myopathy', 'rhabdomyolysis (rare)', 'liver damage', 'peripheral neuropathy'],
    },
    interactions: [
      'ciclosporin – increases pravastatin levels',
      'colchicine – risk of muscle problems',
      'warfarin – may increase anticoagulant effect',
    ],
  },

  // ── DIABETES ─────────────────────────────────────────────────────────────────

  'metformin': {
    name: 'Metformin',
    also_known_as: ['Glucophage', 'Bolamyn'],
    category: 'Antidiabetic (Biguanide)',
    sideEffects: {
      common: ['nausea', 'vomiting', 'diarrhoea', 'stomach pain', 'loss of appetite', 'metallic taste in mouth'],
      uncommon: ['vitamin B12 deficiency (with long-term use)', 'reduced appetite', 'headache'],
      rare: ['lactic acidosis (serious, rare)', 'liver problems', 'skin reactions'],
    },
    interactions: [
      'alcohol – increased risk of lactic acidosis',
      'iodine-containing contrast media – temporary stop required before procedures',
      'ACE inhibitors – increased risk of low blood sugar',
      'cimetidine – increases metformin levels',
    ],
  },

  'gliclazide': {
    name: 'Gliclazide',
    also_known_as: ['Diamicron'],
    category: 'Antidiabetic (Sulphonylurea)',
    sideEffects: {
      common: ['low blood sugar (hypoglycaemia)', 'nausea', 'stomach upset', 'weight gain'],
      uncommon: ['vomiting', 'diarrhoea', 'constipation', 'skin rash', 'liver enzyme changes'],
      rare: ['severe hypoglycaemia', 'blood disorders', 'liver damage', 'severe skin reaction'],
    },
    interactions: [
      'alcohol – increases hypoglycaemia risk and causes flushing',
      'NSAIDs – increases hypoglycaemia risk',
      'fluconazole – increases gliclazide levels',
      'rifampicin – reduces gliclazide effect',
      'beta blockers – may mask hypoglycaemia symptoms',
    ],
  },

  'sitagliptin': {
    name: 'Sitagliptin',
    also_known_as: ['Januvia'],
    category: 'Antidiabetic (DPP-4 Inhibitor)',
    sideEffects: {
      common: ['upper respiratory tract infection', 'headache', 'hypoglycaemia (when combined with other diabetes medicines)'],
      uncommon: ['diarrhoea', 'nausea', 'dizziness', 'constipation'],
      rare: ['pancreatitis', 'severe joint pain', 'severe skin reaction', 'kidney problems'],
    },
    interactions: [
      'digoxin – slight increase in digoxin levels',
      'ciclosporin – may increase sitagliptin levels',
      'insulin/sulphonylureas – increased risk of hypoglycaemia',
    ],
  },

  'empagliflozin': {
    name: 'Empagliflozin',
    also_known_as: ['Jardiance'],
    category: 'Antidiabetic (SGLT-2 Inhibitor)',
    sideEffects: {
      common: ['genital thrush (yeast infection)', 'urinary tract infection', 'increased urination', 'dehydration'],
      uncommon: ['low blood pressure', 'constipation', 'increased thirst', 'nausea'],
      rare: ['diabetic ketoacidosis', 'Fournier\'s gangrene', 'urinary tract infection leading to sepsis', 'toe amputation risk with high CV risk'],
    },
    interactions: [
      'diuretics – increased dehydration risk',
      'insulin – may require insulin dose reduction',
      'rifampicin – reduces empagliflozin levels',
    ],
  },

  'dapagliflozin': {
    name: 'Dapagliflozin',
    also_known_as: ['Forxiga'],
    category: 'Antidiabetic (SGLT-2 Inhibitor)',
    sideEffects: {
      common: ['genital thrush (yeast infection)', 'urinary tract infection', 'back pain', 'increased urination'],
      uncommon: ['dizziness', 'rash', 'low blood pressure', 'dehydration', 'nausea'],
      rare: ['diabetic ketoacidosis', 'Fournier\'s gangrene', 'serious urinary tract infections', 'low blood volume'],
    },
    interactions: [
      'diuretics – increased dehydration risk',
      'insulin – may require insulin dose reduction',
      'rifampicin – reduces dapagliflozin levels',
    ],
  },

  'insulin-glargine': {
    name: 'Insulin (Glargine)',
    also_known_as: ['Lantus', 'Toujeo', 'Abasaglar'],
    category: 'Insulin (Long-acting)',
    sideEffects: {
      common: ['low blood sugar (hypoglycaemia)', 'injection site reactions (pain, redness, swelling)', 'weight gain'],
      uncommon: ['injection site lipodystrophy (fat changes at injection site)', 'oedema', 'visual disturbances'],
      rare: ['severe hypoglycaemia', 'anaphylaxis', 'sodium retention'],
    },
    interactions: [
      'alcohol – increases hypoglycaemia risk',
      'beta blockers – may mask hypoglycaemia symptoms',
      'ACE inhibitors – may increase insulin sensitivity',
      'corticosteroids – may increase blood glucose',
      'thiazide diuretics – may impair blood glucose control',
    ],
  },

  'pioglitazone': {
    name: 'Pioglitazone',
    also_known_as: ['Actos'],
    category: 'Antidiabetic (Thiazolidinedione)',
    sideEffects: {
      common: ['fluid retention', 'weight gain', 'low blood sugar (with other diabetes medicines)', 'headache', 'visual disturbances'],
      uncommon: ['anaemia', 'bone fractures (particularly in women)', 'nausea', 'joint pain'],
      rare: ['bladder cancer (with prolonged use)', 'heart failure (due to fluid retention)', 'liver problems', 'severe skin reaction'],
    },
    interactions: [
      'gemfibrozil – significantly increases pioglitazone levels',
      'rifampicin – reduces pioglitazone levels',
      'insulin – increased risk of fluid retention and low blood sugar',
    ],
  },

  // ── MENTAL HEALTH ────────────────────────────────────────────────────────────

  'sertraline': {
    name: 'Sertraline',
    also_known_as: ['Lustral'],
    category: 'Antidepressant (SSRI)',
    sideEffects: {
      common: ['nausea', 'diarrhoea', 'dry mouth', 'insomnia', 'drowsiness', 'dizziness', 'sweating', 'sexual problems', 'headache'],
      uncommon: ['vomiting', 'agitation', 'tremor', 'anxiety', 'palpitations', 'increased appetite', 'yawning'],
      rare: ['serotonin syndrome', 'mania', 'hyponatraemia (low sodium)', 'seizures', 'bleeding tendency', 'severe skin reaction'],
    },
    interactions: [
      'MAOIs – serious, potentially fatal interaction (avoid)',
      'tramadol – risk of serotonin syndrome',
      'NSAIDs – increased bleeding risk',
      'warfarin – may increase anticoagulant effect',
      'lithium – risk of serotonin toxicity',
      'St John\'s wort – risk of serotonin syndrome',
    ],
  },

  'fluoxetine': {
    name: 'Fluoxetine',
    also_known_as: ['Prozac', 'Oxactin'],
    category: 'Antidepressant (SSRI)',
    sideEffects: {
      common: ['nausea', 'headache', 'insomnia', 'diarrhoea', 'dry mouth', 'nervousness', 'dizziness', 'sweating'],
      uncommon: ['sexual dysfunction', 'tremor', 'vomiting', 'skin rash', 'hives', 'weight changes', 'palpitations'],
      rare: ['serotonin syndrome', 'mania', 'hyponatraemia', 'seizures', 'bleeding', 'pulmonary events', 'suicidal thoughts (particularly in young adults)'],
    },
    interactions: [
      'MAOIs – serious, potentially fatal (avoid)',
      'tramadol – serotonin syndrome risk',
      'warfarin – may increase bleeding risk',
      'tamoxifen – reduces tamoxifen effectiveness',
      'tricyclic antidepressants – increases TCA levels',
      'St John\'s wort – serotonin syndrome',
    ],
  },

  'citalopram': {
    name: 'Citalopram',
    also_known_as: ['Cipramil'],
    category: 'Antidepressant (SSRI)',
    sideEffects: {
      common: ['nausea', 'dry mouth', 'increased sweating', 'tremor', 'insomnia', 'diarrhoea', 'dizziness', 'tiredness'],
      uncommon: ['vomiting', 'agitation', 'weight changes', 'palpitations', 'sexual problems', 'headache'],
      rare: ['serotonin syndrome', 'QT interval prolongation (heart rhythm issue)', 'mania', 'hyponatraemia', 'seizures', 'abnormal bleeding'],
    },
    interactions: [
      'MAOIs – serious, potentially fatal (avoid)',
      'drugs that prolong QT interval – avoid combination',
      'tramadol – serotonin syndrome risk',
      'NSAIDs – increased bleeding risk',
      'lithium – serotonin toxicity risk',
    ],
  },

  'escitalopram': {
    name: 'Escitalopram',
    also_known_as: ['Cipralex'],
    category: 'Antidepressant (SSRI)',
    sideEffects: {
      common: ['nausea', 'headache', 'insomnia', 'dry mouth', 'diarrhoea', 'sweating', 'fatigue', 'sexual problems'],
      uncommon: ['agitation', 'anxiety', 'tremor', 'dizziness', 'weight changes', 'vomiting'],
      rare: ['serotonin syndrome', 'QT interval prolongation', 'mania', 'hyponatraemia', 'seizures'],
    },
    interactions: [
      'MAOIs – serious, potentially fatal (avoid)',
      'drugs that prolong QT interval – avoid',
      'NSAIDs – increased bleeding risk',
      'lithium – serotonin toxicity risk',
      'St John\'s wort – serotonin syndrome',
    ],
  },

  'amitriptyline': {
    name: 'Amitriptyline',
    also_known_as: ['Tryptizol', 'Elavil'],
    category: 'Antidepressant (Tricyclic)',
    sideEffects: {
      common: ['dry mouth', 'drowsiness', 'constipation', 'blurred vision', 'dizziness', 'difficulty urinating', 'weight gain', 'low blood pressure on standing'],
      uncommon: ['confusion', 'heart palpitations', 'difficulty sleeping', 'sweating', 'tremor', 'sexual dysfunction', 'nausea'],
      rare: ['cardiac arrhythmias', 'liver damage', 'blood disorders', 'mania', 'seizures', 'severe skin reaction'],
    },
    interactions: [
      'MAOIs – potentially fatal interaction (avoid)',
      'alcohol – increased sedation',
      'SSRIs/SNRIs – serotonin syndrome risk',
      'tramadol – increased risk of seizures and serotonin syndrome',
      'antiarrhythmics – increased risk of cardiac arrhythmias',
      'drugs that prolong QT interval – avoid',
    ],
  },

  'mirtazapine': {
    name: 'Mirtazapine',
    also_known_as: ['Zispin', 'Remeron'],
    category: 'Antidepressant (NaSSA)',
    sideEffects: {
      common: ['drowsiness', 'increased appetite', 'weight gain', 'dry mouth', 'constipation', 'dizziness'],
      uncommon: ['headache', 'low blood pressure on standing', 'oedema', 'vivid dreams', 'tremor'],
      rare: ['mania', 'seizures', 'blood disorders (low white blood cells)', 'liver damage', 'hyponatraemia', 'serotonin syndrome'],
    },
    interactions: [
      'MAOIs – potentially fatal (avoid)',
      'alcohol – increased sedation',
      'benzodiazepines – increased sedation',
      'SSRIs/SNRIs – serotonin syndrome risk',
      'cimetidine – increases mirtazapine levels',
    ],
  },

  'venlafaxine': {
    name: 'Venlafaxine',
    also_known_as: ['Efexor', 'Foraven'],
    category: 'Antidepressant (SNRI)',
    sideEffects: {
      common: ['nausea', 'headache', 'dizziness', 'insomnia', 'dry mouth', 'sweating', 'constipation', 'sexual problems', 'increased blood pressure'],
      uncommon: ['anxiety', 'tremor', 'vomiting', 'palpitations', 'abnormal vision', 'appetite loss', 'weight changes'],
      rare: ['serotonin syndrome', 'mania', 'hyponatraemia', 'seizures', 'bleeding', 'QT interval prolongation', 'severe skin reaction'],
    },
    interactions: [
      'MAOIs – serious, potentially fatal (avoid)',
      'tramadol – serotonin syndrome risk',
      'NSAIDs – increased bleeding risk',
      'lithium – serotonin toxicity risk',
      'drugs that increase blood pressure – additive effect',
    ],
  },

  'duloxetine': {
    name: 'Duloxetine',
    also_known_as: ['Cymbalta', 'Yentreve'],
    category: 'Antidepressant / Pain relief (SNRI)',
    sideEffects: {
      common: ['nausea', 'headache', 'dry mouth', 'constipation', 'dizziness', 'insomnia', 'drowsiness', 'sweating', 'fatigue'],
      uncommon: ['vomiting', 'diarrhoea', 'appetite decrease', 'tremor', 'palpitations', 'blurred vision', 'sexual dysfunction'],
      rare: ['serotonin syndrome', 'mania', 'liver damage', 'hyponatraemia', 'seizures', 'urinary retention'],
    },
    interactions: [
      'MAOIs – serious, potentially fatal (avoid)',
      'fluvoxamine – significantly increases duloxetine levels',
      'NSAIDs – increased bleeding risk',
      'tramadol – serotonin syndrome risk',
      'thioridazine – avoid combination',
    ],
  },

  'diazepam': {
    name: 'Diazepam',
    also_known_as: ['Valium', 'Stesolid'],
    category: 'Benzodiazepine (Anxiolytic)',
    sideEffects: {
      common: ['drowsiness', 'dizziness', 'confusion', 'unsteadiness', 'memory problems', 'muscle weakness'],
      uncommon: ['headache', 'slurred speech', 'low blood pressure', 'blurred vision', 'tremor', 'nausea'],
      rare: ['dependence and withdrawal on stopping', 'paradoxical agitation', 'respiratory depression', 'severe skin reaction', 'jaundice'],
    },
    interactions: [
      'alcohol – serious increased sedation and respiratory depression',
      'opioids – serious risk of respiratory depression and death',
      'other CNS depressants – additive sedation',
      'antifungals (ketoconazole) – increases diazepam levels',
      'rifampicin – reduces diazepam levels',
    ],
  },

  'lorazepam': {
    name: 'Lorazepam',
    also_known_as: ['Ativan'],
    category: 'Benzodiazepine (Anxiolytic)',
    sideEffects: {
      common: ['drowsiness', 'sedation', 'dizziness', 'weakness', 'unsteadiness'],
      uncommon: ['confusion', 'headache', 'memory problems', 'nausea', 'low blood pressure', 'respiratory depression'],
      rare: ['dependence and withdrawal', 'paradoxical reaction', 'suicidal thoughts', 'severe allergic reaction'],
    },
    interactions: [
      'alcohol – increased sedation and respiratory depression',
      'opioids – serious risk of respiratory depression',
      'clozapine – profound sedation and respiratory depression',
      'other CNS depressants – additive effects',
    ],
  },

  'zopiclone': {
    name: 'Zopiclone',
    also_known_as: ['Zimovane', 'Zileze'],
    category: 'Sleeping Tablet (Z-drug)',
    sideEffects: {
      common: ['bitter or metallic taste', 'dry mouth', 'drowsiness', 'dizziness', 'headache', 'nausea'],
      uncommon: ['confusion', 'memory problems (amnesia)', 'nightmares', 'agitation', 'sleepwalking'],
      rare: ['dependence and withdrawal', 'paradoxical insomnia', 'respiratory depression', 'sleepwalking with no memory of it', 'severe skin reaction'],
    },
    interactions: [
      'alcohol – serious increased sedation',
      'opioids – respiratory depression risk',
      'other CNS depressants – increased sedation',
      'erythromycin/clarithromycin – increases zopiclone levels',
      'rifampicin – reduces zopiclone levels',
    ],
  },

  'zolpidem': {
    name: 'Zolpidem',
    also_known_as: ['Stilnoct'],
    category: 'Sleeping Tablet (Z-drug)',
    sideEffects: {
      common: ['drowsiness', 'headache', 'dizziness', 'nausea', 'diarrhoea'],
      uncommon: ['confusion', 'memory problems', 'sleepwalking', 'hallucinations', 'aggression', 'nightmares'],
      rare: ['dependence', 'respiratory depression', 'complex sleep behaviours (sleep-driving)', 'severe skin reaction'],
    },
    interactions: [
      'alcohol – increased sedation',
      'opioids – respiratory depression risk',
      'CNS depressants – additive sedation',
      'rifampicin – reduces zolpidem levels',
      'fluconazole – increases zolpidem levels',
    ],
  },

  'quetiapine': {
    name: 'Quetiapine',
    also_known_as: ['Seroquel'],
    category: 'Antipsychotic',
    sideEffects: {
      common: ['drowsiness', 'dizziness', 'dry mouth', 'constipation', 'weight gain', 'low blood pressure on standing', 'raised blood glucose'],
      uncommon: ['blurred vision', 'headache', 'raised heart rate', 'nausea', 'raised cholesterol', 'peripheral oedema', 'difficulty urinating'],
      rare: ['tardive dyskinesia (involuntary movements)', 'neuroleptic malignant syndrome', 'QT interval prolongation', 'seizures', 'severe skin reaction', 'metabolic syndrome'],
    },
    interactions: [
      'alcohol – increased sedation',
      'drugs that prolong QT interval – avoid',
      'carbamazepine/rifampicin – significantly reduces quetiapine levels',
      'erythromycin/ketoconazole – increases quetiapine levels',
      'lithium – increased risk of neuroleptic malignant syndrome',
    ],
  },

  'olanzapine': {
    name: 'Olanzapine',
    also_known_as: ['Zyprexa', 'Zalasta'],
    category: 'Antipsychotic',
    sideEffects: {
      common: ['weight gain', 'drowsiness', 'increased appetite', 'raised blood glucose', 'raised cholesterol', 'dizziness', 'constipation'],
      uncommon: ['dry mouth', 'low blood pressure on standing', 'difficulty urinating', 'swelling', 'raised liver enzymes'],
      rare: ['tardive dyskinesia', 'neuroleptic malignant syndrome', 'seizures', 'blood clots (DVT)', 'severe skin reaction', 'pancreatitis'],
    },
    interactions: [
      'alcohol – increased sedation',
      'carbamazepine – reduces olanzapine levels',
      'fluvoxamine – significantly increases olanzapine levels',
      'ciprofloxacin – increases olanzapine levels',
      'drugs that lower seizure threshold – increased seizure risk',
    ],
  },

  'lithium': {
    name: 'Lithium',
    also_known_as: ['Priadel', 'Camcolit', 'Liskonum'],
    category: 'Mood Stabiliser',
    sideEffects: {
      common: ['fine tremor', 'increased thirst', 'increased urination', 'nausea', 'diarrhoea', 'weight gain', 'mild cognitive impairment'],
      uncommon: ['acne', 'hair thinning', 'skin reactions', 'thyroid problems (underactive thyroid)', 'kidney problems', 'oedema'],
      rare: ['lithium toxicity (nausea, vomiting, tremor, confusion, drowsiness, muscle weakness)', 'kidney failure', 'diabetes insipidus', 'cardiac arrhythmias'],
    },
    interactions: [
      'NSAIDs – increases lithium levels (risk of toxicity)',
      'ACE inhibitors/ARBs – increases lithium levels',
      'diuretics – thiazides increase lithium levels significantly',
      'SSRIs – serotonin syndrome risk',
      'antipsychotics – increased risk of toxicity and neuroleptic malignant syndrome',
    ],
  },

  'propranolol': {
    name: 'Propranolol',
    also_known_as: ['Inderal', 'Bedranol', 'Half-Inderal'],
    category: 'Beta Blocker (Anxiety / Blood Pressure)',
    sideEffects: {
      common: ['cold hands and feet', 'tiredness', 'slow heart rate', 'nausea', 'sleep problems', 'dizziness'],
      uncommon: ['diarrhoea', 'depression', 'nightmares', 'skin rash', 'low blood pressure', 'headache'],
      rare: ['worsening heart failure', 'heart block', 'impotence', 'severe bronchospasm', 'severe skin reaction', 'memory problems'],
    },
    interactions: [
      'verapamil/diltiazem – risk of heart block',
      'insulin – masks hypoglycaemia symptoms',
      'NSAIDs – reduces blood pressure lowering effect',
      'clonidine – rebound hypertension if clonidine stopped',
      'anaesthetics – may potentiate hypotension',
    ],
  },

  // ── STOMACH / GI ─────────────────────────────────────────────────────────────

  'omeprazole': {
    name: 'Omeprazole',
    also_known_as: ['Losec', 'Mepradec'],
    category: 'Proton Pump Inhibitor (Stomach)',
    sideEffects: {
      common: ['headache', 'stomach pain', 'nausea', 'diarrhoea', 'constipation', 'wind'],
      uncommon: ['vomiting', 'skin rash', 'dizziness', 'tiredness', 'sleep problems', 'dry mouth', 'swollen ankles'],
      rare: ['low magnesium (with long-term use)', 'low sodium', 'liver problems', 'severe skin reaction', 'C. difficile infection', 'bone fractures (long-term use)', 'interstitial nephritis'],
    },
    interactions: [
      'clopidogrel – reduces clopidogrel effectiveness',
      'methotrexate – increases methotrexate levels',
      'digoxin – increases digoxin levels',
      'ketoconazole/itraconazole – reduces absorption',
      'HIV medicines (atazanavir) – reduces their effect',
    ],
  },

  'lansoprazole': {
    name: 'Lansoprazole',
    also_known_as: ['Zoton', 'Lansoprazole'],
    category: 'Proton Pump Inhibitor (Stomach)',
    sideEffects: {
      common: ['headache', 'diarrhoea', 'stomach pain', 'nausea', 'constipation', 'wind'],
      uncommon: ['vomiting', 'dizziness', 'skin rash', 'tiredness', 'dry mouth', 'raised liver enzymes'],
      rare: ['low magnesium (long-term use)', 'C. difficile infection', 'bone fractures (long-term use)', 'severe skin reaction', 'interstitial nephritis', 'liver problems'],
    },
    interactions: [
      'clopidogrel – reduces clopidogrel effectiveness',
      'methotrexate – increases methotrexate levels',
      'ketoconazole – reduces absorption',
      'antacids – may affect absorption if taken together',
    ],
  },

  'pantoprazole': {
    name: 'Pantoprazole',
    also_known_as: ['Pantoloc'],
    category: 'Proton Pump Inhibitor (Stomach)',
    sideEffects: {
      common: ['headache', 'diarrhoea', 'nausea', 'stomach pain', 'constipation', 'wind'],
      uncommon: ['vomiting', 'dizziness', 'skin rash', 'sleep disturbance', 'raised liver enzymes'],
      rare: ['low magnesium (long-term use)', 'bone fractures', 'C. difficile', 'severe skin reaction', 'kidney problems'],
    },
    interactions: [
      'ketoconazole/itraconazole – reduces absorption',
      'methotrexate – increases methotrexate levels',
      'HIV medicines – may reduce their effect',
    ],
  },

  'ranitidine': {
    name: 'Ranitidine',
    also_known_as: ['Zantac'],
    category: 'H2 Blocker (Stomach)',
    sideEffects: {
      common: ['headache', 'diarrhoea', 'constipation', 'stomach pain', 'nausea'],
      uncommon: ['dizziness', 'tiredness', 'skin rash', 'joint pain', 'muscle pain'],
      rare: ['liver problems', 'blood disorders', 'confusion', 'heart arrhythmias', 'severe skin reaction'],
    },
    interactions: [
      'antacids – reduces ranitidine absorption',
      'ketoconazole/itraconazole – reduces their absorption',
      'warfarin – may increase anticoagulant effect',
      'procainamide – may increase procainamide levels',
    ],
  },

  'metoclopramide': {
    name: 'Metoclopramide',
    also_known_as: ['Maxolon', 'Prochlorperazine'],
    category: 'Anti-sickness / Prokinetic',
    sideEffects: {
      common: ['drowsiness', 'tiredness', 'restlessness', 'diarrhoea'],
      uncommon: ['involuntary muscle movements (particularly face and neck)', 'dizziness', 'headache', 'depression', 'anxiety'],
      rare: ['tardive dyskinesia (permanent involuntary movements)', 'neuroleptic malignant syndrome', 'methemoglobinaemia', 'gynaecomastia'],
    },
    interactions: [
      'opioid painkillers – reduces metoclopramide effectiveness',
      'alcohol – increased sedation',
      'other CNS depressants – increased sedation',
      'digoxin – reduces digoxin absorption',
      'ciclosporin – increases ciclosporin levels',
    ],
  },

  'domperidone': {
    name: 'Domperidone',
    also_known_as: ['Motilium'],
    category: 'Anti-sickness / Prokinetic',
    sideEffects: {
      common: ['dry mouth', 'headache', 'diarrhoea'],
      uncommon: ['reduced sex drive', 'breast tenderness', 'milk production', 'raised prolactin'],
      rare: ['QT interval prolongation (heart rhythm problem)', 'cardiac arrhythmias', 'serious cardiac events (rare)', 'extrapyramidal reactions'],
    },
    interactions: [
      'drugs that prolong QT interval – serious, avoid',
      'ketoconazole/itraconazole – increases domperidone levels significantly (avoid)',
      'erythromycin/clarithromycin – increases domperidone levels (avoid)',
      'antifungals – increases domperidone levels',
    ],
  },

  'loperamide': {
    name: 'Loperamide',
    also_known_as: ['Imodium', 'Arret', 'Normaloe'],
    category: 'Anti-diarrhoeal',
    sideEffects: {
      common: ['constipation', 'flatulence', 'headache', 'nausea', 'dizziness'],
      uncommon: ['abdominal pain or discomfort', 'dry mouth', 'stomach bloating', 'vomiting', 'tiredness', 'skin rash'],
      rare: ['serious bowel problems (paralytic ileus, toxic megacolon)', 'severe allergic reaction', 'heart rhythm problems with very high doses'],
    },
    interactions: [
      'gemfibrozil – increases loperamide levels',
      'quinidine/ritonavir – increases loperamide levels',
      'opioids – combined constipation effect',
    ],
  },

  'senna': {
    name: 'Senna',
    also_known_as: ['Senokot', 'Sennalax'],
    category: 'Laxative',
    sideEffects: {
      common: ['abdominal cramps', 'diarrhoea', 'nausea', 'discomfort'],
      uncommon: ['urine discoloration (harmless)', 'skin rash', 'allergic reaction'],
      rare: ['laxative dependence with long-term use', 'electrolyte imbalance', 'liver damage (very rare)'],
    },
    interactions: [
      'digoxin – laxative effect may cause low potassium, increasing digoxin toxicity',
      'oral medicines – accelerated bowel transit may reduce absorption',
      'diuretics – additive risk of low potassium',
    ],
  },

  // ── ANTIBIOTICS ──────────────────────────────────────────────────────────────

  'amoxicillin': {
    name: 'Amoxicillin',
    also_known_as: ['Amoxil'],
    category: 'Antibiotic (Penicillin)',
    sideEffects: {
      common: ['diarrhoea', 'nausea', 'skin rash'],
      uncommon: ['vomiting', 'headache', 'stomach pain', 'hives', 'itching', 'thrush'],
      rare: ['severe allergic reaction (anaphylaxis)', 'Stevens-Johnson syndrome', 'liver damage', 'blood disorders', 'C. difficile infection'],
    },
    interactions: [
      'warfarin – may increase anticoagulant effect',
      'methotrexate – increases methotrexate levels',
      'oral contraceptives – may reduce effectiveness (theoretical)',
      'allopurinol – increases risk of skin rash',
    ],
  },

  'flucloxacillin': {
    name: 'Flucloxacillin',
    also_known_as: ['Floxapen'],
    category: 'Antibiotic (Penicillinase-resistant Penicillin)',
    sideEffects: {
      common: ['nausea', 'vomiting', 'diarrhoea', 'stomach upset'],
      uncommon: ['skin rash', 'urticaria', 'thrush', 'abnormal liver tests'],
      rare: ['cholestatic jaundice (liver problem)', 'anaphylaxis', 'Stevens-Johnson syndrome', 'blood disorders', 'C. difficile infection'],
    },
    interactions: [
      'warfarin – may increase anticoagulant effect',
      'methotrexate – increases methotrexate levels',
      'oral contraceptives – theoretical reduction in effectiveness',
    ],
  },

  'trimethoprim': {
    name: 'Trimethoprim',
    also_known_as: ['Trimopan'],
    category: 'Antibiotic',
    sideEffects: {
      common: ['nausea', 'vomiting', 'stomach upset', 'skin rash', 'itching'],
      uncommon: ['diarrhoea', 'headache', 'photosensitivity (skin sensitivity to sun)', 'raised potassium'],
      rare: ['blood disorders (low white or red blood cells)', 'liver damage', 'severe skin reaction', 'aseptic meningitis'],
    },
    interactions: [
      'methotrexate – significantly increases methotrexate toxicity',
      'warfarin – increases anticoagulant effect',
      'ciclosporin – increased risk of kidney toxicity',
      'ACE inhibitors – risk of high potassium',
      'digoxin – increases digoxin levels',
    ],
  },

  'nitrofurantoin': {
    name: 'Nitrofurantoin',
    also_known_as: ['Macrobid', 'Macrodantin', 'Furadantin'],
    category: 'Antibiotic (Urinary Tract)',
    sideEffects: {
      common: ['nausea', 'vomiting', 'loss of appetite', 'diarrhoea', 'headache', 'dizziness'],
      uncommon: ['skin rash', 'itching', 'urine discoloration (yellow/brown – harmless)', 'muscle pain', 'hair loss'],
      rare: ['pulmonary reactions (lung problems)', 'liver damage', 'peripheral neuropathy', 'blood disorders', 'severe skin reaction'],
    },
    interactions: [
      'antacids containing magnesium – reduces nitrofurantoin absorption',
      'quinolone antibiotics – antagonistic interaction',
      'probenecid/sulfinpyrazone – increases nitrofurantoin levels',
    ],
  },

  'doxycycline': {
    name: 'Doxycycline',
    also_known_as: ['Vibramycin', 'Doxylar'],
    category: 'Antibiotic (Tetracycline)',
    sideEffects: {
      common: ['nausea', 'vomiting', 'diarrhoea', 'stomach upset', 'heartburn', 'photosensitivity'],
      uncommon: ['skin rash', 'itching', 'thrush (vaginal or oral)', 'headache', 'difficulty swallowing (oesophagitis)'],
      rare: ['severe skin reaction', 'liver damage', 'blood disorders', 'severe oesophageal ulceration', 'pseudotumour cerebri (raised intracranial pressure)'],
    },
    interactions: [
      'antacids/milk/calcium – reduces doxycycline absorption',
      'warfarin – may increase anticoagulant effect',
      'retinoids (isotretinoin) – increases risk of raised intracranial pressure (avoid)',
      'barbiturates/carbamazepine/phenytoin – reduces doxycycline levels',
      'oral contraceptives – theoretical reduction in effectiveness',
    ],
  },

  'clarithromycin': {
    name: 'Clarithromycin',
    also_known_as: ['Klaricid'],
    category: 'Antibiotic (Macrolide)',
    sideEffects: {
      common: ['nausea', 'vomiting', 'diarrhoea', 'stomach pain', 'altered taste', 'headache'],
      uncommon: ['skin rash', 'hives', 'elevated liver enzymes', 'insomnia', 'anxiety', 'dizziness'],
      rare: ['liver failure', 'C. difficile', 'severe skin reaction', 'cardiac arrhythmias (QT prolongation)', 'tooth discoloration in children'],
    },
    interactions: [
      'warfarin – significantly increases anticoagulant effect',
      'statins (simvastatin/atorvastatin) – significantly increases statin levels',
      'digoxin – significantly increases digoxin levels',
      'carbamazepine – increases carbamazepine levels',
      'drugs that prolong QT interval – avoid',
    ],
  },

  'metronidazole': {
    name: 'Metronidazole',
    also_known_as: ['Flagyl', 'Metrogel'],
    category: 'Antibiotic / Antiprotozoal',
    sideEffects: {
      common: ['nausea', 'vomiting', 'stomach pain', 'diarrhoea', 'loss of appetite', 'metallic taste in mouth'],
      uncommon: ['headache', 'dizziness', 'skin rash', 'itching', 'dark urine (harmless)', 'thrush'],
      rare: ['peripheral neuropathy (with prolonged use)', 'seizures', 'liver damage', 'blood disorders', 'severe skin reaction'],
    },
    interactions: [
      'alcohol – severe reaction (nausea, vomiting, flushing, palpitations) – avoid alcohol',
      'warfarin – significantly increases anticoagulant effect',
      'phenytoin – increases phenytoin levels',
      'lithium – increases lithium levels',
      'ciclosporin – may increase ciclosporin levels',
    ],
  },

  'cefalexin': {
    name: 'Cefalexin',
    also_known_as: ['Ceporex', 'Keflex'],
    category: 'Antibiotic (Cephalosporin)',
    sideEffects: {
      common: ['diarrhoea', 'nausea', 'stomach upset', 'vomiting'],
      uncommon: ['skin rash', 'hives', 'itching', 'headache', 'dizziness', 'thrush'],
      rare: ['anaphylaxis', 'C. difficile infection', 'Stevens-Johnson syndrome', 'liver dysfunction', 'blood disorders'],
    },
    interactions: [
      'warfarin – may increase anticoagulant effect',
      'metformin – may slightly increase metformin levels',
      'oral contraceptives – theoretical reduction in effectiveness',
    ],
  },

  'co-amoxiclav': {
    name: 'Co-amoxiclav',
    also_known_as: ['Augmentin'],
    category: 'Antibiotic (Penicillin + clavulanic acid)',
    sideEffects: {
      common: ['diarrhoea', 'nausea', 'stomach upset', 'vomiting', 'skin rash'],
      uncommon: ['headache', 'dizziness', 'thrush', 'hives', 'indigestion'],
      rare: ['cholestatic jaundice / hepatitis', 'anaphylaxis', 'Stevens-Johnson syndrome', 'C. difficile', 'blood disorders', 'interstitial nephritis'],
    },
    interactions: [
      'warfarin – increases anticoagulant effect',
      'methotrexate – increases methotrexate levels',
      'allopurinol – increased risk of skin rash',
      'oral contraceptives – theoretical effect',
    ],
  },

  'ciprofloxacin': {
    name: 'Ciprofloxacin',
    also_known_as: ['Ciproxin'],
    category: 'Antibiotic (Fluoroquinolone)',
    sideEffects: {
      common: ['nausea', 'diarrhoea', 'vomiting', 'stomach pain', 'headache', 'dizziness'],
      uncommon: ['skin rash', 'itching', 'raised liver enzymes', 'insomnia', 'agitation', 'joint pain', 'tendon problems'],
      rare: ['tendon rupture (especially Achilles)', 'peripheral neuropathy', 'QT interval prolongation', 'C. difficile', 'severe skin reaction', 'liver failure', 'seizures', 'psychosis'],
    },
    interactions: [
      'warfarin – significantly increases anticoagulant effect',
      'theophylline – significantly increases theophylline levels (toxicity risk)',
      'antacids/calcium/iron – reduces ciprofloxacin absorption',
      'NSAIDs – increased seizure risk',
      'drugs that prolong QT interval – avoid',
      'methotrexate – increases methotrexate levels',
    ],
  },

  // ── RESPIRATORY ──────────────────────────────────────────────────────────────

  'salbutamol': {
    name: 'Salbutamol',
    also_known_as: ['Ventolin', 'Salamol', 'Airomir'],
    category: 'Bronchodilator (Reliever Inhaler)',
    sideEffects: {
      common: ['tremor (shaking)', 'headache', 'heart palpitations', 'fast heart rate', 'muscle cramps'],
      uncommon: ['low potassium (with high doses)', 'hyperactivity in children', 'dizziness', 'throat irritation'],
      rare: ['paradoxical bronchospasm', 'cardiac arrhythmias', 'very low potassium (with high doses)', 'lactic acidosis (high doses intravenous)'],
    },
    interactions: [
      'beta blockers – may reduce salbutamol effectiveness',
      'diuretics – low potassium risk',
      'digoxin – low potassium may increase digoxin toxicity',
      'MAOIs – risk of severe hypertension',
      'theophylline – increased risk of low potassium and arrhythmias',
    ],
  },

  'beclometasone': {
    name: 'Beclometasone',
    also_known_as: ['Clenil Modulite', 'Qvar', 'Becotide'],
    category: 'Corticosteroid (Preventer Inhaler)',
    sideEffects: {
      common: ['oral thrush (candida)', 'hoarse voice', 'sore throat', 'cough'],
      uncommon: ['dysphonia', 'skin bruising (with high doses)', 'nausea'],
      rare: ['adrenal suppression (with very high doses)', 'growth retardation in children (high doses)', 'cataracts', 'glaucoma', 'osteoporosis (with very high doses)'],
    },
    interactions: [
      'ketoconazole – may increase systemic beclometasone levels',
      'ritonavir – may significantly increase beclometasone levels',
    ],
  },

  'salmeterol': {
    name: 'Salmeterol',
    also_known_as: ['Serevent'],
    category: 'Bronchodilator (Long-acting, LABA)',
    sideEffects: {
      common: ['tremor', 'palpitations', 'headache', 'muscle cramps'],
      uncommon: ['fast heart rate', 'irritation of mouth and throat', 'dizziness', 'low potassium'],
      rare: ['paradoxical bronchospasm', 'cardiac arrhythmias', 'severe allergic reaction'],
    },
    interactions: [
      'beta blockers – reduces salmeterol effectiveness',
      'MAOIs/tricyclic antidepressants – may potentiate cardiovascular effects',
      'QT-prolonging drugs – avoid',
      'diuretics – low potassium risk',
    ],
  },

  'tiotropium': {
    name: 'Tiotropium',
    also_known_as: ['Spiriva'],
    category: 'Bronchodilator (Long-acting Anticholinergic, LAMA)',
    sideEffects: {
      common: ['dry mouth', 'constipation', 'nausea', 'cough', 'throat irritation'],
      uncommon: ['difficulty urinating', 'blurred vision', 'dizziness', 'headache', 'skin rash', 'rapid heart rate'],
      rare: ['glaucoma (if powder contacts eyes)', 'urinary retention', 'atrial fibrillation', 'severe allergic reaction'],
    },
    interactions: [
      'other anticholinergic medicines – additive anticholinergic effects',
    ],
  },

  'montelukast': {
    name: 'Montelukast',
    also_known_as: ['Singulair'],
    category: 'Leukotriene Receptor Antagonist (Asthma/Hayfever)',
    sideEffects: {
      common: ['headache', 'stomach pain', 'thirst', 'nausea', 'diarrhoea'],
      uncommon: ['sleep problems', 'bad dreams', 'agitation', 'hyperactivity', 'dizziness', 'skin rash'],
      rare: ['neuropsychiatric events (depression, anxiety, suicidal thoughts)', 'Churg-Strauss syndrome', 'tremor', 'memory problems'],
    },
    interactions: [
      'rifampicin – reduces montelukast levels',
      'phenobarbital – reduces montelukast levels',
      'gemfibrozil – increases montelukast levels',
    ],
  },

  'prednisolone': {
    name: 'Prednisolone',
    also_known_as: ['Deltacortril', 'Deltastab'],
    category: 'Corticosteroid (Steroid)',
    sideEffects: {
      common: ['weight gain', 'increased appetite', 'insomnia', 'mood changes', 'indigestion', 'acne'],
      uncommon: ['high blood glucose', 'water retention', 'raised blood pressure', 'muscle weakness', 'skin thinning and bruising', 'infection susceptibility'],
      rare: ['adrenal suppression', 'osteoporosis', 'avascular necrosis of bone', 'cataracts', 'glaucoma', 'psychosis', 'peptic ulcer', 'Cushingoid features'],
    },
    interactions: [
      'NSAIDs – increased risk of stomach ulcer and bleed',
      'warfarin – may increase or decrease anticoagulant effect',
      'insulin/diabetes medicines – increases blood glucose',
      'live vaccines – avoid with high-dose steroids',
      'rifampicin – reduces prednisolone levels',
      'carbamazepine/phenytoin – reduces prednisolone levels',
    ],
  },

  'cetirizine': {
    name: 'Cetirizine',
    also_known_as: ['Piriteze', 'Zirtek', 'Benadryl Allergy'],
    category: 'Antihistamine (Hayfever / Allergy)',
    sideEffects: {
      common: ['drowsiness (less than older antihistamines)', 'headache', 'dry mouth', 'dizziness', 'nausea'],
      uncommon: ['stomach pain', 'diarrhoea', 'skin rash', 'tiredness', 'agitation'],
      rare: ['urinary retention', 'liver problems', 'palpitations', 'seizures', 'severe skin reaction'],
    },
    interactions: [
      'alcohol – increased sedation',
      'other CNS depressants – increased drowsiness',
      'theophylline – may reduce cetirizine clearance',
    ],
  },

  'loratadine': {
    name: 'Loratadine',
    also_known_as: ['Clarityn', 'Claritin'],
    category: 'Antihistamine (Hayfever / Allergy)',
    sideEffects: {
      common: ['headache', 'drowsiness (less than older antihistamines)', 'dry mouth', 'nausea'],
      uncommon: ['fatigue', 'nervousness', 'stomach pain', 'skin rash', 'dizziness'],
      rare: ['liver problems', 'hair loss', 'palpitations', 'severe allergic reaction'],
    },
    interactions: [
      'ketoconazole/erythromycin – increases loratadine levels',
      'alcohol – increased sedation',
      'cimetidine – increases loratadine levels',
    ],
  },

  'fexofenadine': {
    name: 'Fexofenadine',
    also_known_as: ['Telfast', 'Allevia'],
    category: 'Antihistamine (Hayfever / Allergy)',
    sideEffects: {
      common: ['headache', 'drowsiness', 'nausea', 'dizziness'],
      uncommon: ['fatigue', 'dry mouth', 'stomach pain', 'insomnia'],
      rare: ['palpitations', 'liver problems', 'severe allergic reaction'],
    },
    interactions: [
      'antacids (containing aluminium or magnesium) – reduces fexofenadine absorption',
      'apple/grapefruit/orange juice – reduces fexofenadine absorption',
      'ketoconazole/erythromycin – increases fexofenadine levels',
    ],
  },

  // ── THYROID / HORMONES ────────────────────────────────────────────────────────

  'levothyroxine': {
    name: 'Levothyroxine',
    also_known_as: ['Eltroxin', 'Thyroid'],
    category: 'Thyroid Hormone',
    sideEffects: {
      common: ['most side effects occur if dose is too high: palpitations', 'sweating', 'weight loss', 'insomnia', 'diarrhoea', 'tremor', 'headache', 'heat intolerance'],
      uncommon: ['restlessness', 'muscle cramps', 'flushing', 'vomiting', 'anxiety', 'increased appetite'],
      rare: ['angina', 'heart arrhythmias', 'hair loss (usually temporary)', 'allergic reaction to tablet excipients'],
    },
    interactions: [
      'antacids/calcium/iron – reduces levothyroxine absorption (take 4 hours apart)',
      'warfarin – increases anticoagulant effect',
      'antidiabetic medicines – may need dose adjustment',
      'carbamazepine/phenytoin/rifampicin – reduces levothyroxine effectiveness',
      'colestyramine – reduces levothyroxine absorption',
    ],
  },

  'carbimazole': {
    name: 'Carbimazole',
    also_known_as: ['Neo-Mercazole'],
    category: 'Antithyroid',
    sideEffects: {
      common: ['nausea', 'vomiting', 'headache', 'joint pain', 'skin rash', 'itching'],
      uncommon: ['hair loss', 'taste disturbance', 'stomach upset'],
      rare: ['agranulocytosis (dangerous drop in white blood cells – seek urgent medical advice if fever/sore throat)', 'liver damage', 'aplastic anaemia', 'vasculitis'],
    },
    interactions: [
      'warfarin – increases anticoagulant effect',
      'digoxin – as thyroid function normalises, digoxin levels may change',
      'theophylline – as thyroid function normalises, theophylline requirements change',
    ],
  },

  // ── OTHER COMMON ─────────────────────────────────────────────────────────────

  'allopurinol': {
    name: 'Allopurinol',
    also_known_as: ['Zyloric'],
    category: 'Xanthine Oxidase Inhibitor (Gout)',
    sideEffects: {
      common: ['skin rash (stop and seek advice)', 'nausea', 'diarrhoea', 'stomach upset'],
      uncommon: ['headache', 'dizziness', 'drowsiness', 'raised liver enzymes', 'altered blood counts'],
      rare: ['Stevens-Johnson syndrome', 'toxic epidermal necrolysis', 'drug hypersensitivity syndrome (DRESS)', 'liver damage', 'blood disorders', 'vasculitis'],
    },
    interactions: [
      'azathioprine/6-mercaptopurine – significantly increases their toxicity (dangerous, avoid or reduce dose)',
      'warfarin – increases anticoagulant effect',
      'ciclosporin – increases ciclosporin levels',
      'ampicillin/amoxicillin – increased risk of skin rash',
      'ACE inhibitors – increased risk of hypersensitivity reactions',
    ],
  },

  'colchicine': {
    name: 'Colchicine',
    also_known_as: ['Colchicine 500 micrograms'],
    category: 'Gout Treatment',
    sideEffects: {
      common: ['diarrhoea', 'nausea', 'vomiting', 'stomach pain', 'cramps'],
      uncommon: ['muscle weakness', 'raised liver enzymes'],
      rare: ['myopathy (muscle problems)', 'peripheral neuropathy', 'blood disorders (bone marrow suppression)', 'hair loss', 'severe colchicine toxicity (with overdose)'],
    },
    interactions: [
      'statins – significantly increased risk of muscle problems',
      'ciclosporin – increases colchicine levels',
      'macrolide antibiotics (clarithromycin) – increases colchicine levels',
      'P-glycoprotein/CYP3A4 inhibitors (ketoconazole, verapamil) – increases colchicine levels',
    ],
  },

  'hydroxychloroquine': {
    name: 'Hydroxychloroquine',
    also_known_as: ['Plaquenil'],
    category: 'Antimalarial / Disease-modifying Antirheumatic',
    sideEffects: {
      common: ['nausea', 'diarrhoea', 'stomach pain', 'headache', 'skin rash'],
      uncommon: ['vomiting', 'loss of appetite', 'dizziness', 'skin pigmentation changes', 'bleaching of hair'],
      rare: ['retinal toxicity (eye damage – requires regular eye checks)', 'cardiomyopathy', 'liver damage', 'blood disorders', 'severe skin reaction', 'seizures'],
    },
    interactions: [
      'digoxin – increases digoxin levels',
      'antidiabetic medicines – may enhance blood glucose lowering',
      'drugs that prolong QT interval – avoid',
      'mefloquine – increased seizure risk',
      'amiodarone – increased QT interval risk',
    ],
  },

  'gabapentin': {
    name: 'Gabapentin',
    also_known_as: ['Neurontin'],
    category: 'Anticonvulsant / Neuropathic Pain',
    sideEffects: {
      common: ['dizziness', 'drowsiness', 'tiredness', 'headache', 'nausea', 'vomiting', 'blurred vision', 'unsteadiness (ataxia)', 'weight gain'],
      uncommon: ['memory problems', 'confusion', 'dry mouth', 'constipation', 'diarrhoea', 'mood changes', 'impotence', 'swelling'],
      rare: ['suicidal thoughts', 'pancreatitis', 'severe skin reaction', 'low white blood cells', 'movement disorders'],
    },
    interactions: [
      'opioids – significantly increased respiratory depression risk',
      'alcohol – increased drowsiness and dizziness',
      'CNS depressants – additive sedation',
      'antacids – reduces gabapentin absorption',
      'morphine – may increase gabapentin levels',
    ],
  },

  'pregabalin': {
    name: 'Pregabalin',
    also_known_as: ['Lyrica'],
    category: 'Anticonvulsant / Neuropathic Pain / Anxiety',
    sideEffects: {
      common: ['dizziness', 'drowsiness', 'weight gain', 'blurred vision', 'difficulty concentrating', 'nausea', 'unsteadiness', 'dry mouth', 'constipation'],
      uncommon: ['vomiting', 'confusion', 'impotence', 'mood changes', 'swollen hands and feet', 'memory problems', 'muscle twitching'],
      rare: ['suicidal thoughts', 'Stevens-Johnson syndrome', 'respiratory depression', 'pancreatitis', 'low white blood cells'],
    },
    interactions: [
      'opioids – significantly increased respiratory depression risk',
      'alcohol – increased CNS depression',
      'benzodiazepines – increased sedation',
      'ACE inhibitors – increased risk of oedema',
    ],
  },

  'baclofen': {
    name: 'Baclofen',
    also_known_as: ['Lioresal'],
    category: 'Muscle Relaxant',
    sideEffects: {
      common: ['drowsiness', 'dizziness', 'weakness', 'nausea', 'low blood pressure', 'headache', 'confusion'],
      uncommon: ['vomiting', 'diarrhoea', 'constipation', 'dry mouth', 'urinary problems', 'insomnia', 'depression'],
      rare: ['hallucinations', 'euphoria', 'liver problems', 'seizures (on abrupt withdrawal)', 'respiratory depression', 'severe skin reaction'],
    },
    interactions: [
      'alcohol – increased sedation',
      'CNS depressants – additive sedation',
      'antihypertensives – enhanced blood pressure lowering',
      'tricyclic antidepressants – increased muscle hypotonia',
      'MAOIs – possible increased CNS depression',
    ],
  },

  'tamsulosin': {
    name: 'Tamsulosin',
    also_known_as: ['Flomax', 'Contiflo', 'Diffundox'],
    category: 'Alpha Blocker (Benign Prostatic Hyperplasia)',
    sideEffects: {
      common: ['dizziness', 'abnormal ejaculation (retrograde or absence)', 'headache'],
      uncommon: ['palpitations', 'low blood pressure on standing', 'constipation', 'diarrhoea', 'nausea', 'vomiting', 'skin rash', 'itching'],
      rare: ['syncope (fainting)', 'priapism', 'severe skin reaction', 'intraoperative floppy iris syndrome during eye surgery'],
    },
    interactions: [
      'other alpha blockers – significant low blood pressure risk',
      'antihypertensives – enhanced blood pressure lowering',
      'strong CYP3A4 inhibitors (e.g. ketoconazole) – increases tamsulosin levels',
      'PDE5 inhibitors (e.g. sildenafil) – increased risk of low blood pressure',
    ],
  },

  'finasteride': {
    name: 'Finasteride',
    also_known_as: ['Proscar', 'Propecia'],
    category: '5-alpha Reductase Inhibitor (BPH / Hair Loss)',
    sideEffects: {
      common: ['reduced sex drive (libido)', 'difficulty getting or maintaining an erection', 'decreased ejaculation volume'],
      uncommon: ['breast tenderness or enlargement (gynaecomastia)', 'depression', 'anxiety'],
      rare: ['persistent sexual side effects after stopping', 'testicular pain', 'high-grade prostate cancer (possible association)', 'severe allergic reaction'],
    },
    interactions: [
      'no significant drug interactions known at usual doses',
    ],
  },

  'sildenafil': {
    name: 'Sildenafil',
    also_known_as: ['Viagra', 'Revatio'],
    category: 'PDE5 Inhibitor (Erectile Dysfunction / Pulmonary Hypertension)',
    sideEffects: {
      common: ['headache', 'flushing', 'indigestion', 'dizziness', 'visual disturbances (blue tinge, blurred vision)', 'stuffy nose', 'muscle pain'],
      uncommon: ['low blood pressure', 'nausea', 'vomiting', 'skin rash', 'palpitations', 'fast heart rate'],
      rare: ['sudden loss of vision', 'sudden hearing loss', 'stroke', 'heart attack', 'priapism (prolonged erection)', 'severe skin reaction'],
    },
    interactions: [
      'nitrates (e.g. GTN, isosorbide mononitrate) – serious, potentially fatal drop in blood pressure (absolute contraindication)',
      'alpha blockers (e.g. tamsulosin) – increased risk of low blood pressure',
      'ritonavir/ketoconazole – significantly increases sildenafil levels',
      'rifampicin – reduces sildenafil levels',
      'other PDE5 inhibitors – do not combine',
    ],
  },
}

/**
 * Returns all medication entries as a flat array with their slug keys.
 */
export function getAllMedications() {
  return Object.entries(MEDICATIONS_DB).map(([slug, data]) => ({
    slug,
    ...data,
  }))
}
