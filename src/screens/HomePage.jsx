import { Heart, Calendar, CheckCircle, ArrowRight } from 'lucide-react'

export default function HomePage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="mx-auto w-full max-w-6xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/20 text-emerald-700 font-medium text-sm">
                <Heart size={16} />
                <span>Living Care Experience</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Your health, 
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> simplified</span>
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              A calm, intuitive journey from symptom checking through appointment booking, hospital navigation, and personalized follow-up care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onStart}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300 transform hover:scale-105"
              >
                Start Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/20">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">👩‍⚕️</div>
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">👨‍⚕️</div>
                </div>
                <p className="text-sm font-medium text-gray-700">Trusted by healthcare providers</p>
              </div>
            </div>
          </div>

          {/* Right Content - Glasmorphism Cards */}
          <div className="relative h-full">
            <div className="space-y-4">
              {/* Main Glass Card */}
              <div className="group rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/30 hover:border-white/40">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white shadow-lg">
                      <Heart size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Symptom Recognition</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Smart, reassuring symptom selection that guides you through the check-in process without feeling overwhelming.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 p-6 shadow-xl hover:shadow-xl transition-all duration-300 hover:bg-white/30 hover:border-white/40 cursor-pointer transform hover:scale-105 hover:-translate-y-1">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                      <Calendar size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900">Quick Booking</h4>
                    <p className="text-sm text-gray-600">
                      Reserve your spot in seconds
                    </p>
                  </div>
                </div>

                <div className="group rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 p-6 shadow-xl hover:shadow-xl transition-all duration-300 hover:bg-white/30 hover:border-white/40 cursor-pointer transform hover:scale-105 hover:-translate-y-1">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-green-400 flex items-center justify-center text-white shadow-lg">
                      <CheckCircle size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900">Real-time Updates</h4>
                    <p className="text-sm text-gray-600">
                      Know your position in queue
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Info Card */}
              <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-emerald-200/30 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </div>
                <p className="text-sm font-medium text-gray-800">
                  <span className="text-emerald-700 font-bold">Zero stress.</span> Just clear guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation style to index.css */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
