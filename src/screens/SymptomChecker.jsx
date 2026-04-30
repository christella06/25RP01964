import { useState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function SymptomChecker({ onNext }) {
  const [selected, setSelected] = useState([])

  const symptoms = ['Fever', 'Cough', 'Headache', 'Fatigue', 'Nausea']

  const toggleSymptom = (symptom) => {
    setSelected(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    )
  }

  const handleNext = () => {
    if (selected.length > 0) {
      onNext(selected)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <AlertCircle className="text-emerald-700" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Symptom Checker</h1>
          <p className="text-gray-600">Please select your symptoms below</p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="space-y-3">
            {symptoms.map(symptom => (
              <button
                key={symptom}
                onClick={() => toggleSymptom(symptom)}
                className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                  selected.includes(symptom)
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-gray-200 bg-white hover:border-emerald-300'
                }`}
              >
                <span className={`font-medium ${selected.includes(symptom) ? 'text-emerald-700' : 'text-gray-700'}`}>
                  on {symptom}
                </span>
                <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
                  selected.includes(symptom)
                    ? 'bg-emerald-700 border-emerald-700'
                    : 'border-gray-300'
                }`}>
                  {selected.includes(symptom) && (
                    <CheckCircle2 className="text-white" size={16} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={selected.length === 0}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
            selected.length > 0
              ? 'bg-emerald-700 hover:bg-emerald-800 cursor-pointer'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </button>

        {/* Info Text */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Selected: {selected.length} symptom{selected.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  )
}
