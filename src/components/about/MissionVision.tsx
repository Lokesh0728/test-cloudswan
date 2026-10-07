import React from 'react'
import { Target, Compass, Sparkles } from 'lucide-react'

export const MissionVision: React.FC = () => {
  return (
    <section
      id="mission-vision"
      aria-label="Our Mission and Vision"
      className="py-16 sm:py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pill & Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent-500" />
            <span>PURPOSE & DIRECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Purpose & Future Focus
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Guided by a commitment to high-impact career outcomes and industry excellence.
          </p>
        </div>

        {/* Two Large Premium Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT: MISSION (Crisp White & Warm Accent) */}
          <div className="group relative bg-gradient-to-br from-white via-white to-accent-50/30 rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between">
            {/* Watermark Number & Icon */}
            <div className="absolute -right-4 -bottom-6 select-none pointer-events-none text-slate-100 group-hover:text-accent-50 transition-colors duration-500 font-extrabold text-8xl sm:text-9xl tracking-tighter opacity-70">
              01
            </div>
            <div className="absolute top-8 right-8 text-slate-100 group-hover:text-accent-100/60 transition-colors duration-500 pointer-events-none">
              <Target className="w-24 h-24 stroke-[1]" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-accent-600 text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 text-accent-500" />
                <span>OUR MISSION</span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Practical Training That Builds Real Careers
              </h3>

              {/* Text */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                To deliver high-quality, practical, and career-focused training
                that equips students and professionals with the skills needed to
                succeed in today’s competitive job market.
              </p>
            </div>

            {/* Bottom decorative accent detail */}
            <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-accent-600">Action Oriented</span>
              <span>Cloudswan Solution Coimbatore</span>
            </div>
          </div>

          {/* RIGHT: VISION (Sleek Slate-900 Dark Card with Glowing Accent) */}
          <div className="group relative bg-slate-900 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-xl shadow-slate-950/20 hover:shadow-2xl hover:shadow-accent-500/15 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between text-white">
            {/* Watermark Number & Icon */}
            <div className="absolute -right-4 -bottom-6 select-none pointer-events-none text-slate-800/80 group-hover:text-slate-800 transition-colors duration-500 font-extrabold text-8xl sm:text-9xl tracking-tighter opacity-60">
              02
            </div>
            <div className="absolute top-8 right-8 text-slate-800/80 group-hover:text-slate-800 transition-colors duration-500 pointer-events-none">
              <Compass className="w-24 h-24 stroke-[1]" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/20 border border-accent-500/40 text-accent-400 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-accent-500" />
                <span>OUR VISION</span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Creating Skilled Professionals for the Future
              </h3>

              {/* Text */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                To become a trusted global training provider known for
                transforming lives, shaping careers, and creating skilled
                professionals across industries.
              </p>
            </div>

            {/* Bottom decorative accent detail */}
            <div className="relative z-10 mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-accent-400">Future Ready</span>
              <span>Global Ambition & Impact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
