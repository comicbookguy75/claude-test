import { MEDICATIONS_DB } from '../data/medications.js'

/**
 * Search for a medicine by name using the local built-in database.
 * Matches against name, also_known_as, and partial matches on the slug key.
 * Returns an array of { name, slug, description } objects.
 */
export function searchMedicine(drugName) {
  if (!drugName || drugName.trim().length < 2) return []

  const query = drugName.trim().toLowerCase()
  const results = []

  for (const [slug, data] of Object.entries(MEDICATIONS_DB)) {
    const nameMatch = data.name.toLowerCase().includes(query)
    const slugMatch = slug.includes(query)
    const aliasMatch = (data.also_known_as || []).some(alias =>
      alias.toLowerCase().includes(query)
    )

    if (nameMatch || slugMatch || aliasMatch) {
      results.push({
        name: data.name,
        slug,
        description: data.category || '',
      })
    }
  }

  // Sort exact/starts-with matches first
  results.sort((a, b) => {
    const aStarts = a.name.toLowerCase().startsWith(query) ? 0 : 1
    const bStarts = b.name.toLowerCase().startsWith(query) ? 0 : 1
    if (aStarts !== bStarts) return aStarts - bStarts
    return a.name.localeCompare(b.name)
  })

  return results.slice(0, 10)
}

/**
 * Return the full entry for a medication by slug.
 * Returns null if not found.
 */
export function getMedicineData(slug) {
  if (!slug) return null
  const key = slug.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  return MEDICATIONS_DB[key] || null
}

/**
 * Extract side effects from medicine data.
 * Returns { common: string[], uncommon: string[], rare: string[] }
 */
export function extractSideEffects(medicineData) {
  if (!medicineData) return { common: [], uncommon: [], rare: [] }
  return medicineData.sideEffects || { common: [], uncommon: [], rare: [] }
}

/**
 * Extract drug interaction information from medicine data.
 * Returns array of interaction description strings.
 */
export function extractInteractions(medicineData) {
  if (!medicineData) return []
  return medicineData.interactions || []
}
