export default function MedicationList({ medications, onDelete, onEdit }) {
  if (medications.length === 0) {
    return (
      <div className="empty-state">
        <p style={{ fontSize: '2rem', marginBottom: '8px' }}>💊</p>
        <p style={{ fontWeight: '600', marginBottom: '4px' }}>No medications added yet</p>
        <p>Use the form above to add your medications.</p>
      </div>
    )
  }

  return (
    <div>
      {medications.map(med => (
        <MedicationCard key={med.id} med={med} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  )
}

function MedicationCard({ med, onDelete, onEdit }) {
  const doseStr = med.dose ? `${med.dose} ${med.unit}` : 'Dose not specified'
  const freqStr = med.frequency === 1 ? 'Once daily' : `${med.frequency} times daily`
  const timesStr = med.times && med.times.length > 0 ? med.times.join(', ') : 'Times not specified'
  const dateStr = med.startDate
    ? new Date(med.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'Start date not set'

  return (
    <div className="medication-card">
      <div className="medication-card-info">
        <h4 style={{ textTransform: 'capitalize' }}>{med.name}</h4>
        <p>
          <span className="tag tag-blue">{doseStr}</span>
          <span className="tag">{freqStr}</span>
          <span className="tag">{timesStr}</span>
        </p>
        <p style={{ marginTop: '6px', color: '#425563', fontSize: '0.82rem' }}>
          Started: {dateStr}
        </p>
      </div>
      <div className="medication-card-actions">
        <button className="btn btn-edit" onClick={() => onEdit(med)}>Edit</button>
        <button className="btn btn-danger" onClick={() => onDelete(med.id)}>Remove</button>
      </div>
    </div>
  )
}
