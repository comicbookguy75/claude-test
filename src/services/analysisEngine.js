/**
 * analysisEngine.js
 * Core logic for analysing which medications may be causing symptoms.
 */

/**
 * Normalise text for comparison - lowercase, strip punctuation.
 */
function normalise(text) {
  return (text || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()
}

/**
 * Check if a symptom matches a side effect string.
 * Uses partial matching and common variant handling.
 */
function symptomMatchesSideEffect(symptom, sideEffect) {
  const normSymptom = normalise(symptom)
  const normEffect = normalise(sideEffect)

  if (!normSymptom || !normEffect) return false

  // Direct includes match
  if (normEffect.includes(normSymptom)) return true
  if (normSymptom.includes(normEffect)) return true

  // Word-level partial match: all words of symptom present in side effect
  const symptomWords = normSymptom.split(' ').filter(w => w.length > 3)
  if (symptomWords.length > 0 && symptomWords.every(word => normEffect.includes(word))) return true

  // Common synonym mappings
  const synonyms = {
    'headache': ['head pain', 'migraine', 'cephalgia'],
    'nausea': ['feeling sick', 'nauseous', 'sick feeling', 'queasy'],
    'dizziness': ['dizzy', 'lightheaded', 'light-headed', 'vertigo', 'spinning'],
    'fatigue': ['tired', 'tiredness', 'exhaustion', 'lethargy', 'lethargic', 'weakness'],
    'insomnia': ['sleep problem', 'trouble sleeping', 'difficulty sleeping', 'sleeplessness', 'wakefulness'],
    'rash': ['skin rash', 'itching', 'itchy skin', 'hives', 'urticaria'],
    'stomach pain': ['abdominal pain', 'stomach ache', 'tummy pain', 'gut pain', 'abdominal discomfort'],
    'dry mouth': ['mouth dryness', 'xerostomia'],
    'blurred vision': ['blurry vision', 'vision changes', 'visual disturbance', 'sight problems'],
    'palpitations': ['heart pounding', 'fast heartbeat', 'heart racing', 'racing heart'],
    'constipation': ['difficulty passing stools', 'hard stools'],
    'diarrhoea': ['diarrhea', 'loose stools', 'loose bowels', 'frequent stools'],
    'anxiety': ['anxious', 'nervousness', 'feeling anxious', 'panic'],
    'low mood': ['depression', 'depressed', 'feeling low', 'sadness'],
    'muscle pain': ['myalgia', 'muscle ache', 'muscular pain', 'muscle soreness'],
    'joint pain': ['arthralgia', 'joint ache', 'joint discomfort'],
  }

  for (const [key, variants] of Object.entries(synonyms)) {
    if (normSymptom.includes(key) || key.includes(normSymptom)) {
      for (const variant of variants) {
        if (normEffect.includes(variant)) return true
      }
    }
    for (const variant of variants) {
      if (normSymptom.includes(variant)) {
        if (normEffect.includes(key)) return true
        for (const v2 of variants) {
          if (normEffect.includes(v2)) return true
        }
      }
    }
  }

  return false
}

/**
 * Score a single medication against the user's symptoms.
 * Returns { score, matchedSymptoms: [{symptom, category, sideEffect}] }
 */
function scoreMedication(medication, symptoms, sideEffects) {
  let score = 0
  const matchedSymptoms = []

  for (const symptomEntry of symptoms) {
    const symptomText = symptomEntry.text

    // Check common side effects
    for (const effect of (sideEffects.common || [])) {
      if (symptomMatchesSideEffect(symptomText, effect)) {
        score += 3
        matchedSymptoms.push({ symptom: symptomText, category: 'common', sideEffect: effect })
        break
      }
    }

    // Check uncommon side effects
    for (const effect of (sideEffects.uncommon || [])) {
      if (symptomMatchesSideEffect(symptomText, effect)) {
        score += 2
        matchedSymptoms.push({ symptom: symptomText, category: 'uncommon', sideEffect: effect })
        break
      }
    }

    // Check rare side effects
    for (const effect of (sideEffects.rare || [])) {
      if (symptomMatchesSideEffect(symptomText, effect)) {
        score += 1
        matchedSymptoms.push({ symptom: symptomText, category: 'rare', sideEffect: effect })
        break
      }
    }

    // Timing bonus: symptom started after medication started
    if (medication.startDate && symptomEntry.startDate) {
      const medDate = new Date(medication.startDate)
      const symDate = new Date(symptomEntry.startDate)
      if (symDate >= medDate) {
        score += 2
      }
    }
  }

  return { score, matchedSymptoms }
}

/**
 * Check interactions between a pair of medications.
 * Returns array of interaction warning strings found.
 */
function checkInteractionPair(med1, interactions1, med2Name) {
  if (!interactions1 || interactions1.length === 0) return []
  const normName = normalise(med2Name)
  const found = []
  for (const interaction of interactions1) {
    const normInteraction = normalise(interaction)
    // Check if the other drug name is mentioned
    const med2Words = normName.split(' ').filter(w => w.length > 3)
    if (med2Words.some(word => normInteraction.includes(word))) {
      found.push(interaction)
    }
    // Generic interaction warnings mentioning both meds
    if (normInteraction.includes(normName)) {
      found.push(interaction)
    }
  }
  // Deduplicate
  return [...new Set(found)]
}

/**
 * Determine likelihood label from score.
 */
function getLikelihood(score) {
  if (score >= 7) return 'High'
  if (score >= 3) return 'Medium'
  return 'Low'
}

/**
 * Main analysis function.
 * @param {Array} medications - User's medication list
 * @param {Array} symptoms - User's symptom list
 * @param {Object} medicineDataMap - Map of medicationId -> { sideEffects, interactions, found }
 * @returns {Array} Sorted analysis results
 */
export function runAnalysis(medications, symptoms, medicineDataMap) {
  if (!medications.length || !symptoms.length) return []

  const results = []

  // Analyse each individual medication
  for (const medication of medications) {
    const dataEntry = medicineDataMap[medication.id]
    const sideEffects = dataEntry?.sideEffects || { common: [], uncommon: [], rare: [] }
    const interactions = dataEntry?.interactions || []
    const found = dataEntry?.found !== false

    const { score, matchedSymptoms } = scoreMedication(medication, symptoms, sideEffects)

    const result = {
      type: 'single',
      medications: [medication],
      score,
      matchedSymptoms,
      interactions: [],
      likelihood: getLikelihood(score),
      notFound: !found,
    }

    results.push(result)
  }

  // Analyse pairwise drug interactions
  for (let i = 0; i < medications.length; i++) {
    for (let j = i + 1; j < medications.length; j++) {
      const med1 = medications[i]
      const med2 = medications[j]
      const data1 = medicineDataMap[med1.id]
      const data2 = medicineDataMap[med2.id]

      const interactionsFrom1 = checkInteractionPair(med1, data1?.interactions || [], med2.name)
      const interactionsFrom2 = checkInteractionPair(med2, data2?.interactions || [], med1.name)

      const allInteractions = [...interactionsFrom1, ...interactionsFrom2]

      if (allInteractions.length > 0) {
        // Score the interaction pair: check if any symptoms match interaction descriptions
        let interactionScore = allInteractions.length * 2
        const interactionSymptomMatches = []

        for (const symptomEntry of symptoms) {
          for (const interactionText of allInteractions) {
            if (symptomMatchesSideEffect(symptomEntry.text, interactionText)) {
              interactionScore += 3
              interactionSymptomMatches.push({
                symptom: symptomEntry.text,
                category: 'interaction',
                sideEffect: interactionText,
              })
              break
            }
          }
        }

        results.push({
          type: 'interaction',
          medications: [med1, med2],
          score: interactionScore,
          matchedSymptoms: interactionSymptomMatches,
          interactions: allInteractions.slice(0, 5),
          likelihood: getLikelihood(interactionScore),
          notFound: false,
        })
      }
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score)

  return results
}

/**
 * Generate "what to do" advice for a result.
 */
export function getAdvice(result) {
  const medNames = result.medications.map(m => m.name).join(' and ')

  if (result.likelihood === 'High') {
    return `Your symptoms strongly suggest ${medNames} may be involved. Do not stop taking your medication without speaking to your GP or pharmacist first. Contact your GP or call NHS 111 to discuss your symptoms. Keep a record of when symptoms occur and their severity.`
  }
  if (result.likelihood === 'Medium') {
    return `There is a possible link between your symptoms and ${medNames}. Mention this to your GP or pharmacist at your next appointment, or call NHS 111 for advice. Do not change your medication without professional guidance.`
  }
  return `There is a low likelihood that ${medNames} is causing your symptoms, but it cannot be ruled out. If symptoms persist, speak to your GP or pharmacist. Call NHS 111 if you are concerned.`
}
