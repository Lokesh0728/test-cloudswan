import React from 'react'
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react'

interface CareerCTAProps {
  onExploreCourses?: () => void
  onContactUs?: () => void
}

export const CareerCTA: React.FC<CareerCTAProps> = ({
  onExploreCourses,
  onContactUs,
}) => {
  return (
    <section
      id="career-cta"
      aria-label="Join Cloudswan Solution Career CTA"
      className="relative w-full overflow-hidden bg-slate-950 text-white py-20 sm:py-28"
    >
      {/* Background Soft Ambient Orange Glows & Subtle Tech Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Orange Center-Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-accent-500/15 rounded-full blur-3xl" />
        {/* Secondary Warm Ambient Glow */}
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[300px] bg-accent-500/10 rounded-full blur-3xl" />

        {/* Subtle geometric circles */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Small Highlight Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 text-accent-400 text-xs sm:text-sm font-semibold tracking-wider uppercase animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-accent-500" />
          <span>CAREER ACCELERATION IN COIMBATORE</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Join Us —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-500 to-accent-300">
            Let's Build Your Career
          </span>{' '}
          Together
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Whether you want to start a career, change fields, or upgrade your
          skills, Cloudswan Solution is here to guide you every step of the
          way.
        </p>

        {/* Highlight Callout */}
        <div className="inline-block p-4 sm:px-6 sm:py-3 rounded-2xl bg-slate-900/90 border border-accent-500/30 shadow-lg shadow-accent-500/10">
          <p className="text-sm sm:text-base font-semibold text-accent-300">
            ✨ Start your journey with us — learn, grow, and get job-ready.
          </p>
        </div>

        {/* Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onExploreCourses}
            className="px-8 py-4 text-sm sm:text-base font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 transition-all duration-200 flex items-center gap-2 group cursor-pointer hover:-translate-y-0.5"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onContactUs}
            className="px-8 py-4 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-accent-500/50 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 shadow-xs"
          >
            <PhoneCall className="w-4 h-4 text-accent-400" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Bottom Trust Line */}
        <div className="pt-6 text-xs text-slate-500 flex items-center justify-center gap-4">
          <span>✓ Free Career Counseling</span>
          <span>•</span>
          <span>✓ Flexible Weekday & Weekend Batches</span>
          <span>•</span>
          <span>✓ Coimbatore Campus & Online</span>
        </div>
      </div>
    </section>
  )
}
