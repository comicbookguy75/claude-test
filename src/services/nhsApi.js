const NHS_API_BASE = 'https://api.nhs.uk/medicines'

/**
 * Search for a medicine by name using the NHS Medicines API.
 * Returns an array of search result items.
 */
export async function searchMedicine(drugName, apiKey) {
  if (!apiKey) throw new Error('No NHS API key provided')
  const url = `${NHS_API_BASE}/?term=${encodeURIComponent(drugName)}`
  const response = await fetch(url, {
    headers: {
      'subscription-key': apiKey,
    },
  })
  if (!response.ok) {
    throw new Error(`NHS API search failed: ${response.status} ${response.statusText}`)
  }
  const data = await response.json()
  // The search response returns a list of significant links / entries
  // Format: { significantLink: [...], ... } or { mainEntityOfPage: [...] }
  const results = []
  if (data.significantLink && Array.isArray(data.significantLink)) {
    for (const link of data.significantLink) {
      results.push({
        name: link.name || link.headline || drugName,
        url: link.url || '',
        slug: extractSlug(link.url || ''),
        description: link.description || '',
      })
    }
  }
  return results
}

/**
 * Get full medicine details from NHS API by slug.
 */
export async function getMedicineDetails(slug, apiKey) {
  if (!apiKey) throw new Error('No NHS API key provided')
  const url = `${NHS_API_BASE}/${slug}`
  const response = await fetch(url, {
    headers: {
      'subscription-key': apiKey,
    },
  })
  if (!response.ok) {
    throw new Error(`NHS API medicine details failed: ${response.status} ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

/**
 * Extract slug from a NHS medicines URL.
 * e.g. https://api.nhs.uk/medicines/paracetamol -> paracetamol
 */
function extractSlug(url) {
  const parts = url.split('/')
  return parts[parts.length - 1] || ''
}

/**
 * Parse HTML content string using DOMParser and return plain text.
 */
function parseHtmlToText(html) {
  if (!html) return ''
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    return doc.body.textContent || ''
  } catch {
    return html.replace(/<[^>]+>/g, ' ')
  }
}

/**
 * Find sections in the NHS medicine data that match a headline keyword.
 * Returns an array of text content strings from matching sections.
 */
function findSectionsByHeadline(medicineData, keyword) {
  const results = []
  const pages = medicineData.mainEntityOfPage || []
  for (const page of pages) {
    const headline = (page.headline || '').toLowerCase()
    if (headline.includes(keyword.toLowerCase())) {
      if (page.text) {
        results.push(parseHtmlToText(page.text))
      }
      // Sometimes content is nested
      if (page.mainEntityOfPage) {
        for (const sub of page.mainEntityOfPage) {
          if (sub.text) results.push(parseHtmlToText(sub.text))
        }
      }
    }
    // Recurse into sub-pages
    if (page.mainEntityOfPage) {
      for (const sub of page.mainEntityOfPage) {
        const subHeadline = (sub.headline || '').toLowerCase()
        if (subHeadline.includes(keyword.toLowerCase())) {
          if (sub.text) results.push(parseHtmlToText(sub.text))
        }
      }
    }
  }
  return results
}

/**
 * Extract side effects from medicine API data.
 * Returns { common: string[], uncommon: string[], rare: string[] }
 */
export function extractSideEffects(medicineData) {
  const sideEffects = { common: [], uncommon: [], rare: [] }
  if (!medicineData) return sideEffects

  const sections = findSectionsByHeadline(medicineData, 'side effect')
  const allText = sections.join('\n')

  if (!allText) return sideEffects

  // Parse out the side effect lists
  // NHS pages typically list side effects in sections like:
  // "Common side effects" / "Uncommon side effects" / "Rare side effects"
  const lines = allText.split(/[\n\r]+/).map(l => l.trim()).filter(Boolean)

  let currentCategory = null
  for (const line of lines) {
    const lower = line.toLowerCase()
    if (lower.includes('common side effect') && !lower.includes('uncommon') && !lower.includes('rare')) {
      currentCategory = 'common'
      continue
    } else if (lower.includes('uncommon side effect') || lower.includes('less common')) {
      currentCategory = 'uncommon'
      continue
    } else if (lower.includes('rare side effect') || lower.includes('serious side effect')) {
      currentCategory = 'rare'
      continue
    }

    if (currentCategory && line.length > 2 && line.length < 200) {
      // Clean up bullet points, numbers etc
      const cleaned = line.replace(/^[-•*\d.]+\s*/, '').trim()
      if (cleaned.length > 2) {
        sideEffects[currentCategory].push(cleaned.toLowerCase())
      }
    }
  }

  // If we didn't find categorised side effects, put everything in common
  if (sideEffects.common.length === 0 && sideEffects.uncommon.length === 0) {
    for (const line of lines) {
      const cleaned = line.replace(/^[-•*\d.]+\s*/, '').trim().toLowerCase()
      if (cleaned.length > 2 && cleaned.length < 150) {
        // Skip lines that look like headings or instructions
        if (!cleaned.includes('tell your') && !cleaned.includes('contact your') && !cleaned.includes('go to')) {
          sideEffects.common.push(cleaned)
        }
      }
    }
  }

  return sideEffects
}

/**
 * Extract drug interaction information from medicine API data.
 * Returns array of interaction description strings.
 */
export function extractInteractions(medicineData) {
  if (!medicineData) return []

  const sections = findSectionsByHeadline(medicineData, 'other medicines')
  const sections2 = findSectionsByHeadline(medicineData, 'interactions')
  const sections3 = findSectionsByHeadline(medicineData, 'taking')

  const allText = [...sections, ...sections2, ...sections3].join('\n')
  if (!allText) return []

  const lines = allText.split(/[\n\r]+/).map(l => l.trim()).filter(Boolean)
  const interactions = []
  for (const line of lines) {
    const cleaned = line.replace(/^[-•*\d.]+\s*/, '').trim().toLowerCase()
    if (cleaned.length > 5 && cleaned.length < 300) {
      interactions.push(cleaned)
    }
  }
  return interactions
}
