import { useState } from 'react'
import { CheckCircle, Bell, ArrowRight } from 'lucide-react'

export default function AppointmentConfirmed({ data, onContinue }) {
  const [reminder, setReminder] = useState(false)

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
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4 animate-bounce">
            <CheckCircle className="text-green-600" size={60} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Appointment Confirmed!</h1>
          <p className="text-gray-600">Your appointment details are as follows:</p>
        </div>

        {/* Details Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="space-y-4 border-b-2 border-gray-100 pb-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-100">
                  <span className="text-lg">{data.selectedDoctor?.avatar || '👨‍⚕️'}</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">DOCTOR</p>
                <p className="font-bold text-gray-800">{data.selectedDoctor?.name}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-100">
                  <span>📅</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">DATE</p>
                <p className="font-bold text-gray-800">{formatDate(data.appointmentDate)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100">
                  <span>⏰</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">TIME</p>
                <p className="font-bold text-gray-800">{data.appointmentTime}</p>
              </div>
            </div>
          </div>

          {/* Reminder Option */}
          <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg cursor-pointer" onClick={() => setReminder(!reminder)}>
            <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${
              reminder
                ? 'bg-emerald-600 border-emerald-600'
                : 'border-gray-300'
            }`}>
              {reminder && (
                <svg className="text-white w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Send me a reminder</p>
            </div>
            <Bell className={`w-5 h-5 ${reminder ? 'text-emerald-600' : 'text-gray-400'}`} />
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full py-3 rounded-lg font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all flex items-center justify-center gap-2"
        >
          Continue to Check-in
          <ArrowRight size={20} />
        </button>

        {/* Info Text */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Please arrive 10 minutes early for check-in
        </p>
      </div>
    </div>
  )
}
