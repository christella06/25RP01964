import { useState } from 'react'
import { Clock, CheckCircle2 } from 'lucide-react'

export default function FollowUpReminder({ onFinish }) {
  const [reminders, setReminders] = useState({
    coughSyrup: '',
    antipyreticMedication: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const medications = [
    { id: 'coughSyrup', name: 'Cough Syrup', icon: '💊' },
    { id: 'antipyreticMedication', name: 'Antipyretic Medication', icon: '💊' }
  ]

  const timeOptions = ['08:00 AM', '09:00 AM', '12:00 PM', '03:00 PM', '06:00 PM', '09:00 PM']

  const handleSetReminder = (medId, time) => {
    setReminders({ ...reminders, [medId]: time })
  }

  const handleFinish = () => {
    if (reminders.coughSyrup && reminders.antipyreticMedication) {
      setSubmitted(true)
      setTimeout(() => {
        onFinish()
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Clock className="text-purple-600" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Follow-up Reminder</h1>
          <p className="text-gray-600">Set reminders for your medications:</p>
        </div>

        {!submitted ? (
          <>
            {/* Medications */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="space-y-6">
                {medications.map(med => (
                  <div key={med.id} className="border-b-2 border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{med.icon}</span>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Medication</p>
                        <p className="font-bold text-gray-800">{med.name}</p>
                      </div>
                    </div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Time:</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeOptions.map(time => (
                        <button
                          key={time}
                          onClick={() => handleSetReminder(med.id, time)}
                          className={`py-2 px-2 rounded-lg border-2 text-sm font-medium transition-all ${
                            reminders[med.id] === time
                              ? 'border-purple-600 bg-purple-600 text-white'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-purple-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    {reminders[med.id] && (
                      <div className="mt-3 flex items-center gap-2 bg-green-50 p-2 rounded">
                        <CheckCircle2 className="text-green-600" size={16} />
                        <span className="text-sm text-green-700 font-medium">Reminder set for {reminders[med.id]}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Finish Button */}
            <button
              onClick={handleFinish}
              disabled={!reminders.coughSyrup || !reminders.antipyreticMedication}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                reminders.coughSyrup && reminders.antipyreticMedication
                  ? 'bg-purple-600 hover:bg-purple-700 cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Finish
            </button>

            {/* Info */}
            <p className="text-center text-xs text-gray-500 mt-4">
              Set reminders for all medications to proceed
            </p>
          </>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <div className="flex justify-center mb-4 animate-bounce">
              <CheckCircle2 className="text-green-600" size={60} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">All Set!</h2>
            <p className="text-gray-600">Your reminders have been saved. Take care and follow your treatment plan.</p>
            <p className="text-sm text-gray-500 mt-4">Redirecting...</p>
          </div>
        )}
      </div>
    </div>
  )
}
