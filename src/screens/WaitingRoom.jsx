import { useState, useEffect } from 'react'
import { RefreshCw, AlertCircle } from 'lucide-react'

export default function WaitingRoom({ data, onCalled }) {
  const [waitingTime, setWaitingTime] = useState(15)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  const handleCalled = () => {
    onCalled()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Waiting Room</h1>
          <p className="text-gray-600">You are currently waiting to see:</p>
        </div>

        {/* Doctor Info */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{data.selectedDoctor?.avatar || '👨‍⚕️'}</div>
            <div>
              <p className="text-xs text-gray-500 font-medium">YOUR DOCTOR</p>
              <h3 className="font-bold text-gray-800">{data.selectedDoctor?.name}</h3>
              <p className="text-sm text-gray-600">{data.selectedDoctor?.specialty}</p>
            </div>
          </div>
        </div>

        {/* Main Status Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          {/* Estimated Wait Time */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-2">Estimated wait time</p>
            <div className="flex items-center justify-center gap-3">
              <div className="text-5xl font-bold text-green-600">{waitingTime}</div>
              <div className="text-2xl text-gray-600">minutes</div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm">In Queue</span>
          </div>

          {/* Info */}
          <div className="border-t-2 border-gray-100 pt-6 text-center">
            <p className="text-sm text-gray-700">
              You are in queue. The doctor will call you soon.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Please stay in this area and keep your phone with you
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleCalled}
            className="w-full py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-all"
          >
            Doctor Called You
          </button>

          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              isRefreshing
                ? 'bg-gray-200 text-gray-700 cursor-not-allowed'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
            Refresh Status
          </button>
        </div>

        {/* Message */}
        <div className="bg-emerald-50 rounded-lg p-3 mt-6 flex gap-2">
          <AlertCircle className="text-emerald-600 flex-shrink-0" size={18} />
          <p className="text-xs text-emerald-800">
            If you need assistance, please approach the reception.
          </p>
        </div>
      </div>
    </div>
  )
}
