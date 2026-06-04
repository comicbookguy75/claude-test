export default function ApiSettings() {
  return (
    <div>
      <div className="card">
        <h2>About This App</h2>

        <div style={{
          background: '#e8f0fb',
          border: '1px solid #005EB8',
          borderRadius: '4px',
          padding: '14px 16px',
          marginBottom: '20px',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          color: '#003087',
        }}>
          <strong>No internet connection required.</strong> All medication data is built into the app — analysis runs entirely on your device.
        </div>

        <ul style={{ paddingLeft: '20px', color: '#425563', fontSize: '0.9rem', lineHeight: '1.9', marginBottom: '16px' }}>
          <li>Built-in database of <strong>60+ common UK medications</strong></li>
          <li>Side effect data sourced from <strong>NHS medicines information pages</strong></li>
          <li>Covers painkillers, blood pressure, cholesterol, diabetes, mental health, antibiotics, respiratory, and more</li>
          <li>Drug interaction data included for each medicine</li>
          <li>Works fully offline — no API key or account needed</li>
        </ul>
      </div>

      <div className="card" style={{ borderLeft: '4px solid #da291c' }}>
        <h3 style={{ color: '#da291c', marginBottom: '10px' }}>Important Disclaimer</h3>
        <p style={{ fontSize: '0.9rem', color: '#425563', lineHeight: '1.7', marginBottom: '10px' }}>
          <strong>This app is not a substitute for professional medical advice.</strong> The information provided is for
          general informational purposes only and should not be used to diagnose, treat, or make any medical decisions.
        </p>
        <p style={{ fontSize: '0.9rem', color: '#425563', lineHeight: '1.7', marginBottom: '10px' }}>
          Always consult your <strong>GP, pharmacist, or other qualified healthcare professional</strong> before making
          any changes to your medications or if you are concerned about side effects.
        </p>
        <p style={{ fontSize: '0.9rem', color: '#425563', lineHeight: '1.7' }}>
          If you experience a serious or unexpected reaction to a medication, contact your GP or call <strong>111</strong>.
          In an emergency, call <strong>999</strong>.
        </p>
      </div>

      <div className="card">
        <h3>Data Sources</h3>
        <ul style={{ paddingLeft: '20px', color: '#425563', fontSize: '0.9rem', lineHeight: '1.8', marginTop: '8px' }}>
          <li>NHS medicines information (nhs.uk/medicines)</li>
          <li>British National Formulary (BNF) interaction data</li>
          <li>MHRA Yellow Card scheme guidance</li>
        </ul>
        <p style={{ fontSize: '0.85rem', color: '#6d7880', marginTop: '12px' }}>
          Medication data is periodically reviewed but may not reflect the very latest NHS guidance. Always check the current
          NHS medicine page or speak to a pharmacist for up-to-date information.
        </p>
      </div>
    </div>
  )
}
