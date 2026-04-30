import { useMemo, useState } from 'react'
import HomePage from './screens/HomePage'
import SymptomChecker from './screens/SymptomChecker'
import FindDoctor from './screens/FindDoctor'
import BookAppointment from './screens/BookAppointment'
import AppointmentConfirmed from './screens/AppointmentConfirmed'
import CheckInAtHospital from './screens/CheckInAtHospital'
import WaitingRoom from './screens/WaitingRoom'
import PostVisitSummary from './screens/PostVisitSummary'
import FollowUpReminder from './screens/FollowUpReminder'
import './App.css'

const steps = [
  { key: 'symptomChecker', label: 'Symptoms' },
  { key: 'findDoctor', label: 'Doctor' },
  { key: 'bookAppointment', label: 'Book' },
  { key: 'appointmentConfirmed', label: 'Confirm' },
  { key: 'checkInAtHospital', label: 'Check-in' },
  { key: 'waitingRoom', label: 'Waiting' },
  { key: 'postVisitSummary', label: 'Summary' },
  { key: 'followUpReminder', label: 'Follow-up' },
]

function App() {
  const [screen, setScreen] = useState('home')
  const [appointmentData, setAppointmentData] = useState({
    symptoms: [],
    selectedDoctor: null,
    appointmentDate: '',
    appointmentTime: '',
  })

  const currentIndex = useMemo(() => steps.findIndex((step) => step.key === screen), [screen])

  const handleSymptomSelect = (symptoms) => {
    setAppointmentData({ ...appointmentData, symptoms })
    setScreen('findDoctor')
  }

  const handleDoctorSelect = (doctor) => {
    setAppointmentData({ ...appointmentData, selectedDoctor: doctor })
    setScreen('bookAppointment')
  }

  const handleBookAppointment = (date, time) => {
    setAppointmentData({ ...appointmentData, appointmentDate: date, appointmentTime: time })
    setScreen('appointmentConfirmed')
  }

  const handleCheckIn = () => {
    setScreen('waitingRoom')
  }

  const handleEnterWaitingRoom = () => {
    setScreen('postVisitSummary')
  }

  const handlePostVisitComplete = () => {
    setScreen('followUpReminder')
  }

  const handleRestart = () => {
    setScreen('home')
    setAppointmentData({
      symptoms: [],
      selectedDoctor: null,
      appointmentDate: '',
      appointmentTime: '',
    })
  }

  const currentStepLabel = currentIndex >= 0 ? steps[currentIndex]?.label : 'Home'

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <nav className="mb-6 flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-700 text-white shadow-sm">
              LC
            </div>
            <div>
              <p className="text-sm tracking-[0.28em] text-emerald-700">Living Care</p>
              <p className="text-xl font-semibold text-slate-950">Patient Experience</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <button
              onClick={() => setScreen('home')}
              className={`rounded-full px-4 py-2 transition ${screen === 'home' ? 'bg-emerald-700 text-white' : 'hover:bg-slate-100'}`}
            >
              Home
            </button>
            <button
              onClick={() => setScreen('symptomChecker')}
              className={`rounded-full px-4 py-2 transition ${screen !== 'home' ? 'bg-emerald-700 text-white' : 'hover:bg-slate-100'}`}
            >
              Start journey
            </button>
          </div>
        </nav>

        {screen !== 'home' && (
          <header className="mb-6 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-emerald-700">Patient journey</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{currentStepLabel}</h2>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                Follow each step for a calmer visit.
              </div>
            </div>
          </header>
        )}

        <main className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="relative">
            {screen === 'home' && <HomePage onStart={() => setScreen('symptomChecker')} />}
            {screen === 'symptomChecker' && <SymptomChecker onNext={handleSymptomSelect} />}
            {screen === 'findDoctor' && <FindDoctor symptoms={appointmentData.symptoms} onSelectDoctor={handleDoctorSelect} />}
            {screen === 'bookAppointment' && <BookAppointment doctor={appointmentData.selectedDoctor} onBook={handleBookAppointment} />}
            {screen === 'appointmentConfirmed' && <AppointmentConfirmed data={appointmentData} onContinue={() => setScreen('checkInAtHospital')} />}
            {screen === 'checkInAtHospital' && <CheckInAtHospital data={appointmentData} onCheckIn={handleCheckIn} />}
            {screen === 'waitingRoom' && <WaitingRoom data={appointmentData} onCalled={handleEnterWaitingRoom} />}
            {screen === 'postVisitSummary' && <PostVisitSummary onNext={handlePostVisitComplete} />}
            {screen === 'followUpReminder' && <FollowUpReminder onFinish={handleRestart} />}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
