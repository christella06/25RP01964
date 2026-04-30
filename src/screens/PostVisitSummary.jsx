import { CheckCircle, Pill, AlertCircle } from 'lucide-react'

export default function PostVisitSummary({ onNext }) {
  const visitData = {
    doctor: {
      name: 'Dr. Jane Smith',
      avatar: '👩‍⚕️'
    },
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    time: '10:00 AM',
    diagnosis: 'Common Cold',
    medications: [
      'Rest and Hydration',
      'Cough Syrup',
      'Antipyretic Medication'
    ]
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="text-emerald-600" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Post-Visit Summary</h1>
          <p className="text-gray-600">Your visit details are as follows:</p>
        </div>

        {/* Visit Details Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          {/* Doctor & Date Info */}
          <div className="flex items-center gap-3 pb-6 border-b-2 border-gray-100 mb-6">
            <div className="text-4xl">{visitData.doctor.avatar}</div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium">DOCTOR</p>
              <p className="font-bold text-gray-800">{visitData.doctor.name}</p>
            </div>
          </div>

          {/* Visit Time */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Date:</span>
              <span className="font-bold text-gray-800">{visitData.date}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Time:</span>
              <span className="font-bold text-gray-800">{visitData.time}</span>
            </div>
          </div>

          {/* Diagnosis */}
          <div className="bg-orange-50 rounded-lg p-4 mb-6 border-l-4 border-orange-500">
            <p className="text-xs text-gray-500 font-medium mb-1">DIAGNOSIS</p>
            <p className="text-lg font-bold text-gray-800">{visitData.diagnosis}</p>
          </div>

          {/* Prescribed Medications */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Pill size={18} className="text-emerald-600" />
              Prescribed Medications:
            </h3>
            <ul className="space-y-2">
              {visitData.medications.map((med, idx) => (
                <li key={idx} className="flex items-start gap-3 p-2 bg-gray-50 rounded">
                  <span className="text-emerald-600 font-bold text-lg flex-shrink-0">•</span>
                  <span className="text-gray-700">{med}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Note */}
          <div className="bg-emerald-50 rounded-lg p-4 flex gap-3">
            <AlertCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
            <div className="text-sm text-emerald-900">
              <p className="font-semibold mb-1">Follow the prescribed medications carefully</p>
              <p className="text-xs">If symptoms persist or worsen, contact your doctor immediately</p>
            </div>
          </div>
        </div>

        {/* Next Steps Button */}
        <button
          onClick={onNext}
          className="w-full py-3 rounded-lg font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all"
        >
          Next Steps
        </button>

        {/* Info */}
        <p className="text-center text-xs text-gray-500 mt-4">
          You will now be guided through your follow-up care
        </p>
      </div>
    </div>
  )
}
