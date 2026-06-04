export default function Disclaimer() {
  return (
    <div style={{
      background: '#fff9c4',
      border: '2px solid #d5680b',
      borderRadius: '4px',
      padding: '14px 18px',
      marginBottom: '20px',
      fontSize: '0.9rem',
      lineHeight: '1.5',
    }}>
      <strong style={{ color: '#d5680b', display: 'block', marginBottom: '6px', fontSize: '1rem' }}>
        ⚠️ Important Medical Disclaimer
      </strong>
      This tool is for information purposes only and is <strong>NOT a substitute for professional medical advice</strong>.
      Always consult your GP, pharmacist, or call <strong>NHS 111</strong> before making any changes to your medication.
      If you are experiencing a medical emergency, call <strong>999</strong>.
    </div>
  )
}
