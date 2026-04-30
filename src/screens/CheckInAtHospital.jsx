import { useState } from 'react'
import { MapPin, Phone, AlertCircle } from 'lucide-react'

export default function CheckInAtHospital({ data, onCheckIn }) {
  const [hasArrived, setHasArrived] = useState(false)

  const handleCheckIn = () => {
    setHasArrived(true)
    setTimeout(() => {
      onCheckIn()
    }, 1000)
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <MapPin className="text-emerald-700" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Check-in at the Hospital</h1>
          <p className="text-gray-600">Please confirm your arrival</p>
        </div>

        {/* Arrival Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          {/* Appointment Details */}
          <div className="border-b-2 border-gray-100 pb-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4">Appointment Details:</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Doctor:</span>
                <span className="font-bold text-gray-800">{data.selectedDoctor?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-bold text-gray-800">{formatDate(data.appointmentDate)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-bold text-gray-800">{data.appointmentTime}</span>
              </div>
            </div>
          </div>

          {/* Hospital Location Card */}
          <div className="bg-emerald-50 rounded-lg p-4 mb-6 border-l-4 border-emerald-600">
            <h4 className="font-bold text-gray-800 mb-2">Hospital Location</h4>
            <p className="text-sm text-gray-700 mb-3">
              General Healthcare Center, 123 Medical Plaza, Downtown Hospital District
            </p>
            <button className="text-sm text-emerald-700 font-semibold hover:underline flex items-center gap-2">
              <Phone size={16} />
              (123) 456-7890 for assistance
            </button>
          </div>

          {/* Status Message */}
          {!hasArrived && (
            <div className="bg-yellow-50 rounded-lg p-4 flex gap-3 mb-6">
              <AlertCircle className="text-yellow-600 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm font-semibold text-yellow-800">Please arrive on time</p>
                <p className="text-xs text-yellow-700">If you're going to be late, please call ahead</p>
              </div>
            </div>
          )}

          {/* Loading State */}
          {hasArrived && (
            <div className="bg-green-50 rounded-lg p-4 flex gap-3">
              <div className="text-2xl animate-spin">✓</div>
              <div>
                <p className="text-sm font-semibold text-green-800">Checking you in...</p>
                <p className="text-xs text-green-700">Please wait a moment</p>
              </div>
            </div>
          )}
        </div>

        {/* Check-in Button */}
        <button
          onClick={handleCheckIn}
          disabled={hasArrived}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
            hasArrived
              ? 'bg-green-600 cursor-not-allowed'
              : 'bg-emerald-600 hover:bg-emerald-700 cursor-pointer'
          }`}
        >
          {hasArrived ? 'Checked In ✓' : 'Check-in Now'}
        </button>

        {/* Info Text */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Press the button above when you arrive at the hospital
        </p>
      </div>
    </div>
  )
}
