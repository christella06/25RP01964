import { useState } from 'react'
import { Calendar, Clock } from 'lucide-react'

export default function BookAppointment({ doctor, onBook }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const timeSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '02:00 PM', '02:30 PM', '03:00 PM']

  const handleBook = () => {
    if (date && time) {
      onBook(date, time)
    }
  }

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Calendar className="text-emerald-700" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Book an Appointment</h1>
          <p className="text-gray-600">Select a date and time for your appointment:</p>
        </div>

        {/* Doctor Info Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{doctor?.avatar || '👨‍⚕️'}</div>
            <div>
              <p className="text-xs text-gray-500">Selected Doctor</p>
              <h3 className="font-bold text-gray-800">{doctor?.name}</h3>
              <p className="text-sm text-emerald-700">{doctor?.specialty}</p>
            </div>
          </div>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          {/* Date Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Choose Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={getTodayDate()}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
            />
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Choose Time:</label>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  onClick={() => setTime(slot)}
                  className={`py-2 px-3 rounded-lg border-2 font-medium transition-all ${
                    time === slot
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-emerald-300'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        {date && time && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
            <p className="text-sm text-gray-700">
              <span className="font-bold">Selected:</span> {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {time}
            </p>
          </div>
        )}

        {/* Confirm Button */}
        <button
          onClick={handleBook}
          disabled={!date || !time}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
            date && time
              ? 'bg-emerald-700 hover:bg-emerald-800 cursor-pointer'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  )
}
