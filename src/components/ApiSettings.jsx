import { useState } from 'react'

export default function ApiSettings({ apiKey, setApiKey }) {
  const [input, setInput] = useState(apiKey || '')
  const [saved, setSaved] = useState(false)

  function handleSave(e) {
    e.preventDefault()
    setApiKey(input.trim())
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <div className="card">
        <h2>API Settings</h2>
        <p style={{ marginBottom: '18px', color: '#425563', fontSize: '0.9rem', lineHeight: '1.6' }}>
          This app uses the <strong>NHS Medicines API</strong> to look up side effects and interactions for your
          medications. You need a free API key to use this feature.
        </p>

        <div style={{
          background: '#e8edee',
          border: '1px solid #aeb7bd',
          borderRadius: '4px',
          padding: '14px 16px',
          marginBottom: '20px',
          fontSize: '0.88rem',
          lineHeight: '1.6',
        }}>
          <strong>How to get a free NHS API key:</strong>
          <ol style={{ marginTop: '8px', paddingLeft: '18px', color: '#425563' }}>
            <li>Visit: <code style={{ background: '#fff', padding: '1px 5px', borderRadius: '2px' }}>developer.api.nhs.uk</code></li>
            <li>Create a free account</li>
            <li>Subscribe to the <strong>Medicines</strong> API</li>
            <li>Copy your subscription key and paste it below</li>
          </ol>
        </div>

        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="api-key-input">NHS API Subscription Key</label>
            <input
              id="api-key-input"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Enter your NHS API subscription key"
              autoComplete="off"
              spellCheck="false"
            />
            <p style={{ fontSize: '0.8rem', color: '#425563', marginTop: '6px' }}>
              Your key is stored only in your browser's localStorage and is never sent anywhere except directly to the NHS API.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button type="submit" className="btn btn-primary">
              Save API Key
            </button>
            {saved && (
              <span style={{ color: '#007f3b', fontWeight: '600', fontSize: '0.9rem' }}>
                ✓ Saved successfully
              </span>
            )}
          </div>
        </form>

        {apiKey && (
          <div style={{
            marginTop: '16px',
            background: '#e8f5e9',
            border: '1px solid #007f3b',
            borderRadius: '4px',
            padding: '10px 14px',
            fontSize: '0.88rem',
            color: '#007f3b',
          }}>
            ✓ API key is set. The app will use the NHS Medicines API for analysis.
          </div>
        )}

        {!apiKey && (
          <div style={{
            marginTop: '16px',
            background: '#fff3e0',
            border: '1px solid #d5680b',
            borderRadius: '4px',
            padding: '10px 14px',
            fontSize: '0.88rem',
            color: '#d5680b',
          }}>
            No API key set. You can still add medications and symptoms, but the analysis will not be able to
            fetch NHS side effect data.
          </div>
        )}
      </div>

      <div className="card">
        <h3>About This App</h3>
        <p style={{ fontSize: '0.9rem', color: '#425563', lineHeight: '1.7', marginBottom: '10px' }}>
          UK Medication Side Effect Analyser helps you understand whether your medications might be causing
          symptoms you are experiencing. It uses official NHS medicines information to cross-reference
          known side effects and drug interactions.
        </p>
        <p style={{ fontSize: '0.9rem', color: '#425563', lineHeight: '1.7' }}>
          <strong>Data sources used:</strong>
        </p>
        <ul style={{ paddingLeft: '20px', color: '#425563', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '6px' }}>
          <li>NHS Medicines API (official NHS medicines information)</li>
          <li>MHRA Yellow Card scheme guidance (interaction warnings)</li>
        </ul>
      </div>
    </div>
  )
}
