import { useState } from 'react'

const COMMON_SYMPTOMS = [
  'Nausea', 'Headache', 'Dizziness', 'Fatigue', 'Insomnia',
  'Rash', 'Stomach pain', 'Dry mouth', 'Blurred vision', 'Palpitations',
  'Constipation', 'Diarrhoea', 'Anxiety', 'Low mood', 'Muscle pain', 'Joint pain',
]

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export default function SymptomInput({ symptoms, onAdd, onDelete }) {
  const [text, setText] = useState('')
  const [startDate, setStartDate] = useState('')
  const [severity, setSeverity] = useState(3)

  function handleAdd(e) {
    e && e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return

    // Avoid duplicate
    if (symptoms.some(s => s.text.toLowerCase() === trimmed.toLowerCase())) {
      setText('')
      return
    }

    onAdd({
      id: generateId(),
      text: trimmed,
      startDate: startDate,
      severity: severity,
    })
    setText('')
    setStartDate('')
    setSeverity(3)
  }

  function handleChip(symptomName) {
    if (symptoms.some(s => s.text.toLowerCase() === symptomName.toLowerCase())) return
    onAdd({
      id: generateId(),
      text: symptomName,
      startDate: startDate,
      severity: severity,
    })
  }

  const addedTexts = symptoms.map(s => s.text.toLowerCase())

  return (
    <div>
      <div className="card">
        <h2>Common Symptoms</h2>
        <p style={{ fontSize: '0.88rem', color: '#425563', marginBottom: '12px' }}>
          Click a symptom to quickly add it, or type a custom symptom below.
        </p>
        <div className="symptom-chip-list">
          {COMMON_SYMPTOMS.map(s => (
            <button
              key={s}
              className={`symptom-chip${addedTexts.includes(s.toLowerCase()) ? ' added' : ''}`}
              onClick={() => handleChip(s)}
              type="button"
              title={addedTexts.includes(s.toLowerCase()) ? 'Already added' : `Add ${s}`}
            >
              {addedTexts.includes(s.toLowerCase()) ? `✓ ${s}` : s}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Add a Symptom</h2>
        <form onSubmit={handleAdd}>
          <div className="form-group">
            <label htmlFor="symptom-text">Symptom description *</label>
            <input
              id="symptom-text"
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="e.g. Persistent headache, Feeling sick after meals"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="symptom-date">When did it start?</label>
              <input
                id="symptom-date"
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="form-group">
              <label>Severity (1–5)</label>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', paddingTop: '8px', flexWrap: 'wrap' }}>
                {[1,2,3,4,5].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setSeverity(n)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: severity >= n ? '#005EB8' : '#aeb7bd',
                      background: severity >= n ? '#005EB8' : 'white',
                      color: severity >= n ? 'white' : '#425563',
                      fontWeight: '700',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                    }}
                  >
                    {n}
                  </button>
                ))}
                <span style={{ fontSize: '0.82rem', color: '#425563' }}>
                  {severity === 1 ? 'Mild' : severity === 2 ? 'Mild-moderate' : severity === 3 ? 'Moderate' : severity === 4 ? 'Moderate-severe' : 'Severe'}
                </span>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={!text.trim()}>
            + Add Symptom
          </button>
        </form>
      </div>

      {symptoms.length > 0 && (
        <div className="card">
          <h2>Your Symptoms ({symptoms.length})</h2>
          {symptoms.map(symptom => (
            <SymptomItem key={symptom.id} symptom={symptom} onDelete={onDelete} />
          ))}
        </div>
      )}

      {symptoms.length === 0 && (
        <div className="card">
          <div className="empty-state">
            <p style={{ fontSize: '2rem', marginBottom: '8px' }}>🩺</p>
            <p style={{ fontWeight: '600', marginBottom: '4px' }}>No symptoms added yet</p>
            <p>Use the common symptoms chips above or the form to add symptoms.</p>
          </div>
        </div>
      )}
    </div>
  )
}

function SymptomItem({ symptom, onDelete }) {
  const dateStr = symptom.startDate
    ? `Started: ${new Date(symptom.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`
    : 'Start date not recorded'

  return (
    <div className="symptom-item">
      <div className="symptom-item-info">
        <h4 style={{ textTransform: 'capitalize' }}>{symptom.text}</h4>
        <p>
          {dateStr} &nbsp;|&nbsp; Severity:&nbsp;
          <span className="severity-display">
            {[1,2,3,4,5].map(n => (
              <span
                key={n}
                className={`severity-dot${symptom.severity >= n ? ' active' : ''}`}
              />
            ))}
          </span>
          &nbsp;{symptom.severity}/5
        </p>
      </div>
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(symptom.id)}>
        Remove
      </button>
    </div>
  )
}
