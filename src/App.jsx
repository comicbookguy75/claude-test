import { useState } from 'react'
import './App.css'
import { useLocalStorage } from './hooks/useLocalStorage'
import MedicationForm from './components/MedicationForm'
import MedicationList from './components/MedicationList'
import SymptomInput from './components/SymptomInput'
import AnalysisResults from './components/AnalysisResults'
import ApiSettings from './components/ApiSettings'

const TABS = [
  { id: 'medications', label: '💊 Medications' },
  { id: 'symptoms', label: '🩺 Symptoms' },
  { id: 'analysis', label: '🔍 Analysis' },
  { id: 'settings', label: '⚙️ Settings' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('medications')
  const [medications, setMedications] = useLocalStorage('uk-med-medications', [])
  const [symptoms, setSymptoms] = useLocalStorage('uk-med-symptoms', [])
  const [apiKey, setApiKey] = useLocalStorage('uk-med-api-key', '')
  const [editingMed, setEditingMed] = useState(null)

  function handleAddMedication(med) {
    setMedications(prev => [...prev, med])
  }

  function handleDeleteMedication(id) {
    setMedications(prev => prev.filter(m => m.id !== id))
  }

  function handleEditMedication(med) {
    setEditingMed(med)
  }

  function handleEditDone(updatedMed) {
    if (updatedMed) {
      setMedications(prev => prev.map(m => m.id === updatedMed.id ? updatedMed : m))
    }
    setEditingMed(null)
  }

  function handleAddSymptom(symptom) {
    setSymptoms(prev => [...prev, symptom])
  }

  function handleDeleteSymptom(id) {
    setSymptoms(prev => prev.filter(s => s.id !== id))
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <h1>
            <span>NHS</span>
            UK Medication Side Effect Analyser
          </h1>
          <nav>
            <ul className="nav-tabs">
              {TABS.map(tab => (
                <li
                  key={tab.id}
                  className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  {tab.id === 'medications' && medications.length > 0 && (
                    <span style={{
                      display: 'inline-block',
                      background: 'rgba(255,255,255,0.3)',
                      borderRadius: '10px',
                      padding: '1px 7px',
                      fontSize: '0.75rem',
                      marginLeft: '6px',
                    }}>
                      {medications.length}
                    </span>
                  )}
                  {tab.id === 'symptoms' && symptoms.length > 0 && (
                    <span style={{
                      display: 'inline-block',
                      background: 'rgba(255,255,255,0.3)',
                      borderRadius: '10px',
                      padding: '1px 7px',
                      fontSize: '0.75rem',
                      marginLeft: '6px',
                    }}>
                      {symptoms.length}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {activeTab === 'medications' && (
          <div>
            <div className="card">
              <h2>{editingMed ? `Edit: ${editingMed.name}` : 'Add a Medication'}</h2>
              {!apiKey && (
                <div className="no-api-key-banner" style={{ marginBottom: '16px' }}>
                  <strong>Tip:</strong> Add an NHS API key in{' '}
                  <button
                    onClick={() => setActiveTab('settings')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#005EB8',
                      fontWeight: '700',
                      cursor: 'pointer',
                      padding: '0',
                      textDecoration: 'underline',
                      fontSize: 'inherit',
                    }}
                  >
                    Settings
                  </button>
                  {' '}to enable drug name search autocomplete.
                </div>
              )}
              <MedicationForm
                onAdd={handleAddMedication}
                apiKey={apiKey}
                editingMed={editingMed}
                onEditDone={handleEditDone}
              />
            </div>

            <div className="card">
              <h2>
                Your Medications
                {medications.length > 0 && (
                  <span style={{ fontWeight: '400', fontSize: '0.9rem', color: '#425563', marginLeft: '8px' }}>
                    ({medications.length})
                  </span>
                )}
              </h2>
              <MedicationList
                medications={medications}
                onDelete={handleDeleteMedication}
                onEdit={handleEditMedication}
              />
            </div>
          </div>
        )}

        {activeTab === 'symptoms' && (
          <SymptomInput
            symptoms={symptoms}
            onAdd={handleAddSymptom}
            onDelete={handleDeleteSymptom}
          />
        )}

        {activeTab === 'analysis' && (
          <AnalysisResults
            medications={medications}
            symptoms={symptoms}
            apiKey={apiKey}
          />
        )}

        {activeTab === 'settings' && (
          <ApiSettings apiKey={apiKey} setApiKey={setApiKey} />
        )}
      </main>

      <footer style={{
        background: '#003087',
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
        padding: '14px 20px',
        fontSize: '0.8rem',
        lineHeight: '1.6',
      }}>
        <p>
          This tool is for information purposes only and does not constitute medical advice.
          Always consult a healthcare professional before changing your medication.
        </p>
        <p style={{ marginTop: '4px' }}>
          NHS data provided by the NHS Medicines API &nbsp;·&nbsp; Not affiliated with NHS England
        </p>
      </footer>
    </div>
  )
}
