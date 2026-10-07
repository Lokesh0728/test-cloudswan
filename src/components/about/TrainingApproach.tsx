import React from 'react'
import {
  BookOpen,
  Laptop,
  CheckCircle2,
  Users2,
  Sparkles,
} from 'lucide-react'

interface Step {
  step: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const STEPS: Step[] = [
  {
    step: '01',
    title: 'Step-by-Step Learning',
    description: 'From basics to advanced modules, we ensure complete clarity.',
    icon: BookOpen,
  },
  {
    step: '02',
    title: 'Real-Time Projects',
    description: 'Students work on live projects to gain hands-on experience.',
    icon: Laptop,
  },
  {
    step: '03',
    title: 'Continuous Assessment',
    description: 'Weekly tasks, mini-projects, and evaluations track your progress.',
    icon: CheckCircle2,
  },
  {
    step: '04',
    title: 'Mentorship & Guidance',
    description: 'Regular doubt-clearing sessions and career counseling.',
    icon: Users2,
  },
]

export const TrainingApproach: React.FC = () => {
  return (
    <section
      id="training-approach"
      aria-label="Our Training Approach"
      className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent-500" />
            <span>STRUCTURED METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Training Approach
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Learning that takes you from fundamentals to real-world confidence.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* DESKTOP HORIZONTAL CONNECTING LINE (hidden on mobile) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-accent-200 via-accent-500 to-accent-200 -z-0"
          />

          {/* MOBILE VERTICAL CONNECTING LINE (hidden on desktop) */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute top-6 bottom-6 left-6 w-[3px] bg-gradient-to-b from-accent-400 via-accent-500 to-accent-300 -z-0"
          />

          {/* 4 STEPS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {STEPS.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="flex lg:flex-col items-start lg:items-center text-left lg:text-center group"
                >
                  {/* Step Node / Badge & Icon */}
                  <div className="relative shrink-0 mr-5 lg:mr-0 lg:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-accent-500 text-accent-500 shadow-md shadow-accent-500/20 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    {/* Step pill number */}
                    <span className="absolute -top-2.5 -right-2.5 px-2 py-0.5 rounded-full bg-slate-900 text-white font-mono text-[10px] sm:text-xs font-bold border border-slate-700 shadow-xs">
                      {item.step}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 w-full bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-lg hover:border-accent-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-[11px] font-bold tracking-wider uppercase text-accent-600 mb-1">
                      STEP {item.step}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2 group-hover:text-accent-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Progress indicator micro-bar */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Phase {index + 1} of 4</span>
                      <span className="font-semibold text-accent-600">{(index + 1) * 25}% Mastery</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
