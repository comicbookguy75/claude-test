import { useState, useRef, useEffect } from 'react'
import { searchMedicine } from '../services/nhsApi'

const DOSE_UNITS = ['mg', 'mcg', 'g', 'ml', 'units']
const TIMES_OF_DAY = ['Morning', 'Midday', 'Afternoon', 'Evening', 'Bedtime', 'Night']

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export default function MedicationForm({ onAdd, editingMed, onEditDone }) {
  const isEditing = !!editingMed

  const [name, setName] = useState(editingMed?.name || '')
  const [dose, setDose] = useState(editingMed?.dose || '')
  const [unit, setUnit] = useState(editingMed?.unit || 'mg')
  const [frequency, setFrequency] = useState(editingMed?.frequency || 1)
  const [times, setTimes] = useState(editingMed?.times || [])
  const [startDate, setStartDate] = useState(editingMed?.startDate || '')
  const [slug, setSlug] = useState(editingMed?.slug || '')

  const [searchResults, setSearchResults] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)

  const searchTimeout = useRef(null)
  const dropdownRef = useRef(null)

  // Reset when editingMed changes
  useEffect(() => {
    if (editingMed) {
      setName(editingMed.name || '')
      setDose(editingMed.dose || '')
      setUnit(editingMed.unit || 'mg')
      setFrequency(editingMed.frequency || 1)
      setTimes(editingMed.times || [])
      setStartDate(editingMed.startDate || '')
      setSlug(editingMed.slug || '')
    }
  }, [editingMed])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleNameChange(e) {
    const val = e.target.value
    setName(val)
    setSlug('')

    clearTimeout(searchTimeout.current)
    if (val.length < 2) {
      setSearchResults([])
      setShowDropdown(false)
      return
    }

    searchTimeout.current = setTimeout(() => {
      const results = searchMedicine(val)
      setSearchResults(results)
      setShowDropdown(results.length > 0)
    }, 200)
  }

  function handleSelectResult(result) {
    setName(result.name)
    setSlug(result.slug)
    setShowDropdown(false)
    setSearchResults([])
  }

  function toggleTime(time) {
    setTimes(prev =>
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return

    const med = {
      id: isEditing ? editingMed.id : generateId(),
      name: name.trim(),
      dose: dose,
      unit: unit,
      frequency: Number(frequency),
      times: times,
      startDate: startDate,
      slug: slug,
    }

    if (isEditing) {
      onEditDone(med)
    } else {
      onAdd(med)
      // Reset form
      setName('')
      setDose('')
      setUnit('mg')
      setFrequency(1)
      setTimes([])
      setStartDate('')
      setSlug('')
    }
  }

  function handleCancel() {
    onEditDone(null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="med-name">Drug Name *</label>
        <div className="autocomplete-wrap" ref={dropdownRef}>
          <input
            id="med-name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="e.g. Paracetamol, Lisinopril, Metformin"
            required
            autoComplete="off"
          />
          {showDropdown && searchResults.length > 0 && (
            <ul className="autocomplete-list">
              {searchResults.map((r, i) => (
                <li key={i} onMouseDown={() => handleSelectResult(r)}>
                  <strong>{r.name}</strong>
                  {r.description && (
                    <span style={{ color: '#425563', fontSize: '0.82rem', display: 'block' }}>
                      {r.description.slice(0, 80)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group" style={{ flex: 2 }}>
          <label htmlFor="med-dose">Dosage</label>
          <input
            id="med-dose"
            type="number"
            value={dose}
            onChange={e => setDose(e.target.value)}
            placeholder="e.g. 500"
            min="0"
            step="any"
          />
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label htmlFor="med-unit">Unit</label>
          <select id="med-unit" value={unit} onChange={e => setUnit(e.target.value)}>
            {DOSE_UNITS.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div className="form-group" style={{ flex: 1 }}>
          <label htmlFor="med-freq">Times per day</label>
          <select id="med-freq" value={frequency} onChange={e => setFrequency(e.target.value)}>
            {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Time(s) of Day</label>
        <div className="checkbox-group">
          {TIMES_OF_DAY.map(time => (
            <label
              key={time}
              className={`checkbox-label${times.includes(time) ? ' checked' : ''}`}
            >
              <input
                type="checkbox"
                checked={times.includes(time)}
                onChange={() => toggleTime(time)}
                style={{ display: 'none' }}
              />
              {time}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="med-start">Start Date</label>
        <input
          id="med-start"
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button type="submit" className="btn btn-primary">
          {isEditing ? '✓ Save Changes' : '+ Add Medication'}
        </button>
        {isEditing && (
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}
