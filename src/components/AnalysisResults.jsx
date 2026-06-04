import { useState, useCallback } from 'react'
import { getMedicineDetails, extractSideEffects, extractInteractions } from '../services/nhsApi'
import { runAnalysis, getAdvice } from '../services/analysisEngine'
import Disclaimer from './Disclaimer'

export default function AnalysisResults({ medications, symptoms, apiKey }) {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState({ current: 0, total: 0, label: '' })
  const [results, setResults] = useState(null)
  const [fetchErrors, setFetchErrors] = useState([])
  const [hasRun, setHasRun] = useState(false)

  const runAnalysisHandler = useCallback(async () => {
    if (!medications.length || !symptoms.length) return

    setLoading(true)
    setResults(null)
    setFetchErrors([])
    setHasRun(true)

    const errors = []
    const medicineDataMap = {}

    setProgress({ current: 0, total: medications.length, label: 'Fetching NHS medicine data...' })

    for (let i = 0; i < medications.length; i++) {
      const med = medications[i]
      setProgress({ current: i + 1, total: medications.length, label: `Looking up ${med.name}...` })

      if (!apiKey) {
        medicineDataMap[med.id] = {
          sideEffects: { common: [], uncommon: [], rare: [] },
          interactions: [],
          found: false,
        }
        continue
      }

      try {
        // If we have a slug from search autocomplete, use it; otherwise derive from name
        const slug = med.slug || med.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        const details = await getMedicineDetails(slug, apiKey)
        const sideEffects = extractSideEffects(details)
        const interactions = extractInteractions(details)
        medicineDataMap[med.id] = { sideEffects, interactions, found: true }
      } catch (err) {
        errors.push({ medication: med.name, message: err.message })
        medicineDataMap[med.id] = {
          sideEffects: { common: [], uncommon: [], rare: [] },
          interactions: [],
          found: false,
        }
      }
    }

    setFetchErrors(errors)
    setProgress({ current: medications.length, total: medications.length, label: 'Running analysis...' })

    const analysisResults = runAnalysis(medications, symptoms, medicineDataMap)
    setResults(analysisResults)
    setLoading(false)
  }, [medications, symptoms, apiKey])

  if (!medications.length || !symptoms.length) {
    return (
      <div className="card">
        <div className="empty-state">
          <p style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</p>
          <p style={{ fontWeight: '600', marginBottom: '8px' }}>Ready to analyse</p>
          {!medications.length && <p>Please add at least one medication in the <strong>Medications</strong> tab.</p>}
          {!symptoms.length && <p>Please add at least one symptom in the <strong>Symptoms</strong> tab.</p>}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Disclaimer />

      {!apiKey && (
        <div className="no-api-key-banner">
          <strong>⚠️ No NHS API key set.</strong> Analysis will run but cannot fetch official NHS side effect data.
          Go to <strong>Settings</strong> to add your free NHS API key for accurate results.
        </div>
      )}

      <div className="card">
        <h2>Run Analysis</h2>
        <p style={{ color: '#425563', fontSize: '0.9rem', marginBottom: '16px' }}>
          Ready to analyse <strong>{medications.length}</strong> medication{medications.length > 1 ? 's' : ''} against{' '}
          <strong>{symptoms.length}</strong> symptom{symptoms.length > 1 ? 's' : ''}.
        </p>

        <button
          className="btn btn-primary"
          onClick={runAnalysisHandler}
          disabled={loading}
          style={{ fontSize: '1rem', padding: '12px 28px' }}
        >
          {loading ? 'Analysing...' : hasRun ? '↺ Re-run Analysis' : '▶ Run Analysis'}
        </button>

        {loading && (
          <div className="loading-state" style={{ marginTop: '24px' }}>
            <div className="spinner" />
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>{progress.label}</p>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                style={{ width: `${progress.total > 0 ? (progress.current / progress.total) * 100 : 0}%` }}
              />
            </div>
            <p style={{ fontSize: '0.82rem' }}>{progress.current} of {progress.total} medications processed</p>
          </div>
        )}
      </div>

      {!loading && fetchErrors.length > 0 && (
        <div className="card" style={{ borderLeft: '4px solid #d5680b' }}>
          <h3 style={{ color: '#d5680b', marginBottom: '10px' }}>⚠️ Some medications could not be looked up</h3>
          {fetchErrors.map((err, i) => (
            <p key={i} style={{ fontSize: '0.88rem', color: '#425563', marginBottom: '4px' }}>
              <strong>{err.medication}:</strong> {err.message === 'No NHS API key provided'
                ? 'No API key set — visit Settings to add one.'
                : err.message.includes('404') || err.message.includes('not found')
                  ? 'Not found in NHS medicines database.'
                  : err.message}
            </p>
          ))}
        </div>
      )}

      {!loading && results !== null && (
        <div>
          {results.length === 0 ? (
            <div className="card">
              <div className="empty-state">
                <p style={{ fontSize: '2rem', marginBottom: '8px' }}>✅</p>
                <p style={{ fontWeight: '600', marginBottom: '8px' }}>No matches found</p>
                <p>
                  No known side effects matching your symptoms were found in the NHS data.
                  This does not mean your medications are not causing your symptoms — always consult your GP or pharmacist.
                </p>
              </div>
            </div>
          ) : (
            <>
              <p style={{ color: '#425563', fontSize: '0.88rem', marginBottom: '12px' }}>
                Found <strong>{results.length}</strong> possible cause{results.length > 1 ? 's' : ''}. Results are ranked by likelihood.
              </p>
              {results.map((result, idx) => (
                <ResultCard key={idx} result={result} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}

function ResultCard({ result }) {
  const [expanded, setExpanded] = useState(true)

  const headerColours = {
    High: { bg: '#fde8e6', border: '#da291c', text: '#b01c11' },
    Medium: { bg: '#fff3e0', border: '#d5680b', text: '#b05200' },
    Low: { bg: '#e8f5e9', border: '#007f3b', text: '#005c2b' },
  }
  const colours = headerColours[result.likelihood]

  const medNames = result.medications.map(m => m.name).join(' + ')
  const advice = getAdvice(result)

  const commonMatches = result.matchedSymptoms.filter(m => m.category === 'common')
  const uncommonMatches = result.matchedSymptoms.filter(m => m.category === 'uncommon')
  const rareMatches = result.matchedSymptoms.filter(m => m.category === 'rare')
  const interactionMatches = result.matchedSymptoms.filter(m => m.category === 'interaction')

  return (
    <div className="analysis-result-card">
      <div
        className="analysis-result-header"
        style={{ background: colours.bg, borderBottom: `2px solid ${colours.border}`, cursor: 'pointer' }}
        onClick={() => setExpanded(e => !e)}
      >
        <div>
          <div style={{ fontWeight: '700', fontSize: '1rem', color: '#003087', textTransform: 'capitalize' }}>
            {result.type === 'interaction' ? '⚡ Interaction: ' : '💊 '}{medNames}
          </div>
          <div style={{ fontSize: '0.82rem', color: '#425563', marginTop: '3px' }}>
            {result.matchedSymptoms.length} symptom match{result.matchedSymptoms.length !== 1 ? 'es' : ''}
            {result.notFound && ' · Not found in NHS database'}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className={`likelihood-badge likelihood-${result.likelihood.toLowerCase()}`}>
            {result.likelihood} Likelihood
          </span>
          <span style={{ color: '#425563', fontSize: '1.2rem' }}>{expanded ? '▲' : '▼'}</span>
        </div>
      </div>

      {expanded && (
        <div className="analysis-result-body">
          {result.notFound && (
            <div style={{
              background: '#f0f4f5',
              border: '1px solid #aeb7bd',
              borderRadius: '4px',
              padding: '10px 14px',
              marginBottom: '14px',
              fontSize: '0.88rem',
              color: '#425563',
            }}>
              ℹ️ This medicine was not found in the NHS medicines database. Side effects could not be checked automatically.
              Check the NHS website or speak to your pharmacist for information about side effects.
            </div>
          )}

          {result.matchedSymptoms.length === 0 && !result.notFound && (
            <p style={{ color: '#425563', fontSize: '0.9rem', marginBottom: '14px' }}>
              No direct symptom matches found in NHS data for this medicine.
            </p>
          )}

          {commonMatches.length > 0 && (
            <MatchSection
              title="Common Side Effect Matches"
              matches={commonMatches}
              dotClass="match-common"
              label="Common"
            />
          )}
          {uncommonMatches.length > 0 && (
            <MatchSection
              title="Uncommon Side Effect Matches"
              matches={uncommonMatches}
              dotClass="match-uncommon"
              label="Uncommon"
            />
          )}
          {rareMatches.length > 0 && (
            <MatchSection
              title="Rare Side Effect Matches"
              matches={rareMatches}
              dotClass="match-rare"
              label="Rare"
            />
          )}

          {result.type === 'interaction' && result.interactions.length > 0 && (
            <div style={{ marginBottom: '14px' }}>
              <div className="section-label">Drug Interaction Warnings</div>
              <div className="interaction-warning">
                {result.interactions.slice(0, 3).map((interaction, i) => (
                  <p key={i} style={{ marginBottom: i < result.interactions.length - 1 ? '6px' : '0', fontSize: '0.88rem' }}>
                    {interaction.charAt(0).toUpperCase() + interaction.slice(1)}
                  </p>
                ))}
              </div>
              {interactionMatches.length > 0 && (
                <MatchSection
                  title="Symptoms Matching Interaction Effects"
                  matches={interactionMatches}
                  dotClass="match-interaction"
                  label="Interaction"
                />
              )}
            </div>
          )}

          <TimingSection result={result} />

          <div className="info-box">
            <strong style={{ display: 'block', marginBottom: '6px', color: '#003087' }}>What to do</strong>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{advice}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function MatchSection({ title, matches, dotClass, label }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div className="section-label">{title}</div>
      <ul className="match-list">
        {matches.map((m, i) => (
          <li key={i}>
            <span className={`match-dot ${dotClass}`} />
            <span>
              <strong style={{ textTransform: 'capitalize' }}>{m.symptom}</strong>
              {m.sideEffect && m.sideEffect !== m.symptom.toLowerCase() && (
                <span style={{ color: '#425563', fontSize: '0.82rem' }}>
                  {' '} — matches: "{m.sideEffect.slice(0, 80)}{m.sideEffect.length > 80 ? '…' : ''}"
                </span>
              )}
              <span className={`tag tag-${dotClass.replace('match-', '')}`} style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
                {label}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TimingSection({ result }) {
  const timingNotes = []

  for (const med of result.medications) {
    if (!med.startDate) continue
    const medDate = new Date(med.startDate)
    const medDateStr = medDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    timingNotes.push(`${med.name} started on ${medDateStr}`)
  }

  if (timingNotes.length === 0) return null

  return (
    <div style={{ marginBottom: '14px' }}>
      <div className="section-label">Timing Analysis</div>
      <div style={{ background: '#f0f4f5', borderRadius: '4px', padding: '10px 14px', fontSize: '0.88rem' }}>
        {timingNotes.map((note, i) => (
          <p key={i} style={{ marginBottom: i < timingNotes.length - 1 ? '4px' : '0', color: '#425563' }}>
            📅 {note}
          </p>
        ))}
        <p style={{ marginTop: '6px', color: '#425563' }}>
          Symptoms that started after a medication was begun may be more likely related to that medication.
          Check if your symptom dates align with your medication start dates in the Symptoms tab.
        </p>
      </div>
    </div>
  )
}
