import { useState } from 'react'
import { User, Phone, Award } from 'lucide-react'

export default function FindDoctor({ symptoms, onSelectDoctor }) {
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const doctors = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      specialty: 'General Practitioner',
      available: true,
      avatar: '👩‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. John Doe',
      specialty: 'Pediatrician',
      available: true,
      avatar: '👨‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      specialty: 'Cardiologist',
      available: true,
      avatar: '👩‍⚕️'
    }
  ]

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor)
    onSelectDoctor(doctor)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Award className="text-emerald-700" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find a Doctor</h1>
          <p className="text-gray-600">Based on your symptoms, we recommend the following doctors:</p>
        </div>

        {/* Doctors List */}
        <div className="space-y-4 mb-6">
          {doctors.map(doctor => (
            <button
              key={doctor.id}
              onClick={() => handleSelectDoctor(doctor)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                selectedDoctor?.id === doctor.id
                  ? 'border-emerald-600 bg-emerald-50 shadow-sm'
                  : 'border-gray-200 bg-white shadow-sm hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{doctor.avatar}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-700 font-medium">Available</span>
                  </div>
                </div>
                {selectedDoctor?.id === doctor.id && (
                  <div className="flex-shrink-0 w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="text-white w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => selectedDoctor && handleSelectDoctor(selectedDoctor)}
          disabled={!selectedDoctor}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
            selectedDoctor
              ? 'bg-emerald-700 hover:bg-emerald-800 cursor-pointer'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Book Appointment
        </button>
      </div>
    </div>
  )
}
