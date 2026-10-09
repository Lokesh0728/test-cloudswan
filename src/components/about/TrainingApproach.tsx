import React, { useEffect, useRef, useState } from 'react'
import {
  BookOpen,
  Laptop,
  CheckCircle2,
  Users2,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'

interface StepItem {
  step: string
  stage: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const STEPS: StepItem[] = [
  {
    step: '01',
    stage: 'Foundations',
    title: 'Step-by-Step Learning',
    description: 'From basics to advanced modules, we ensure complete clarity.',
    icon: BookOpen,
  },
  {
    step: '02',
    stage: 'Application',
    title: 'Real-Time Projects',
    description: 'Students work on live projects to gain hands-on experience.',
    icon: Laptop,
  },
  {
    step: '03',
    stage: 'Benchmarking',
    title: 'Continuous Assessment',
    description: 'Weekly tasks, mini-projects, and evaluations track your progress.',
    icon: CheckCircle2,
  },
  {
    step: '04',
    stage: 'Career Readiness',
    title: 'Mentorship & Guidance',
    description: 'Regular doubt clearing sessions and career counseling.',
    icon: Users2,
  },
]

export const TrainingApproach: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState<number>(0)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  // Trigger animations when scrolled into viewport
  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > 0
      if (inView) {
        setIsVisible(true)
      }
    }

    // Immediate check on mount
    checkVisibility()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    window.addEventListener('scroll', checkVisibility, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkVisibility)
    }
  }, [])

  // Auto-cycle through the learning journey steps every 3.2 seconds
  useEffect(() => {
    if (!isVisible || isHovering) return

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length)
    }, 3200)

    return () => clearInterval(timer)
  }, [isVisible, isHovering])

  return (
    <section
      ref={sectionRef}
      id="training-approach"
      aria-label="Our Training Approach"
      className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden selection:bg-accent-500 selection:text-white"
    >
      {/* Background architectural mesh / dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(#cbd5e1 1.2px, transparent 1.2px), radial-gradient(#f1f5f9 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
        aria-hidden="true"
      />

      {/* Subtle ambient light gradient */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-orange-100/30 via-orange-50/15 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================
            SECTION HEADER (Scroll Entrance: Fade + Slide Up)
        ========================================================= */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 transition-all duration-700 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Eyebrow badge matching Home Page */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge mb-4 shadow-2xs relative">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-ping absolute left-3" />
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            <span>Structured Methodology</span>
          </div>

          {/* Main Title matching Home Page Section H2 */}
          <h2 className="display-h2 text-slate-900">
            Our Training{' '}
            <span className="relative inline-block text-accent-500">
              Approach
            </span>
          </h2>

          {/* Subtitle matching Home Page lead-paragraph */}
          <p className="mt-4 lead-paragraph text-slate-600 max-w-2xl mx-auto">
            Learning that takes you from fundamentals to real-world confidence.
          </p>
        </div>

        {/* =========================================================
            DESKTOP & TABLET HORIZONTAL JOURNEY TIMELINE (lg:block)
        ========================================================= */}
        <div
          className="hidden lg:block relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Clean Elegant Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute top-[37px] left-[7%] right-[7%] h-[2px] bg-gradient-to-r from-orange-200 via-accent-500 to-orange-200 rounded-full z-0 opacity-80"
          />

          {/* 4 Interactive Journey Nodes */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {STEPS.map((item, index) => {
              const Icon = item.icon
              const stepDelays = ['150ms', '350ms', '550ms', '750ms']
              const isActive = activeStep === index

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group flex flex-col items-center text-center cursor-pointer transition-all duration-700 ease-out ${isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
                    }`}
                  style={{ transitionDelay: stepDelays[index] }}
                >
                  {/* Top Node Container on Connecting Spine */}
                  <div className="relative mb-8 flex items-center justify-center">
                    {/* Radar Pulse Ring on Active Node */}
                    <span
                      aria-hidden="true"
                      className={`absolute -inset-3 rounded-2xl border-2 border-accent-400/60 transition-all duration-500 ${isActive
                          ? 'opacity-100 scale-110 animate-radar-pulse'
                          : 'opacity-0 scale-95 group-hover:opacity-70 group-hover:scale-105'
                        }`}
                    />

                    {/* Milestone Hub / Icon Frame */}
                    <div
                      className={`relative z-10 w-[76px] h-[76px] rounded-2xl bg-white border-2 transition-all duration-300 flex items-center justify-center ${isActive
                          ? 'border-accent-500 shadow-xl shadow-accent-500/25 -translate-y-1.5'
                          : 'border-slate-200/90 shadow-sm group-hover:border-accent-500 group-hover:shadow-lg group-hover:shadow-accent-500/20 group-hover:-translate-y-1'
                        }`}
                    >
                      {/* Floating Icon with Active Glow */}
                      <div className="animate-approach-float">
                        <Icon
                          className={`w-7 h-7 transition-colors duration-300 ${isActive
                              ? 'text-accent-500'
                              : 'text-slate-700 group-hover:text-accent-500'
                            }`}
                        />
                      </div>

                      {/* Small Orange Accent Dot on top right with glowing ping */}
                      <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center">
                        <span
                          className={`absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 ${isActive ? 'animate-ping' : ''
                            }`}
                        />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-500 ring-2 ring-white" />
                      </span>
                    </div>

                    {/* Animated Flow Arrow to Next Step (1-2, 2-3, 3-4) */}
                    {index < STEPS.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute left-[calc(100%+14px)] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                      >
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${isActive
                              ? 'bg-accent-500 text-white shadow-sm shadow-accent-500/40 translate-x-1'
                              : 'bg-orange-50 text-accent-500 border border-orange-200/70 group-hover:translate-x-1'
                            }`}
                        >
                          <ArrowRight className="w-3.5 h-3.5 animate-arrow-nudge" />
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Clean Modern Milestone Details */}
                  <div
                    className={`w-full rounded-2xl border p-6 pt-5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[235px] text-left ${isActive
                        ? 'bg-white border-orange-300 shadow-xl shadow-orange-500/10 -translate-y-2'
                        : 'bg-slate-50/60 hover:bg-white border-slate-200/80 hover:border-orange-200/90 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1.5'
                      }`}
                  >
                    {/* Animated Orange Accent Top Glow Line */}
                    <span
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                    />

                    <div>
                      {/* Step Number & Stage Badge */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span
                          className={`font-heading font-black text-3xl tracking-tighter transition-colors duration-300 select-none ${isActive
                              ? 'text-accent-500/90'
                              : 'text-slate-200 group-hover:text-accent-500/70'
                            }`}
                        >
                          {item.step}
                        </span>

                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${isActive
                              ? 'bg-accent-500 text-white shadow-2xs'
                              : 'bg-orange-50 text-accent-600 border border-orange-100 group-hover:bg-orange-100'
                            }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-accent-500'
                              }`}
                          />
                          <span>{item.stage}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`display-card-title transition-colors duration-200 ${isActive
                            ? 'text-accent-600'
                            : 'text-slate-900 group-hover:text-accent-600'
                          }`}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 body-paragraph text-slate-600">
                        {item.description}
                      </p>
                    </div>

                    {/* Small Accent Micro-Bar */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <TrendingUp
                          className={`w-3.5 h-3.5 ${isActive ? 'text-accent-500' : 'text-slate-400 group-hover:text-accent-500'
                            }`}
                        />
                        <span>Phase {index + 1} of 4</span>
                      </span>

                      {/* Animated expandable orange accent pill */}
                      <span
                        className={`h-1 rounded-full transition-all duration-300 ${isActive
                            ? 'w-14 bg-accent-500 shadow-xs'
                            : 'w-6 bg-slate-200 group-hover:w-12 group-hover:bg-accent-500'
                          }`}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* =========================================================
            MOBILE & TABLET VERTICAL TIMELINE (lg:hidden)
            Fully responsive: Works on 320px, 375px, 390px, 414px+
        ========================================================= */}
        <div className="lg:hidden relative">
          {/* Clean Vertical Spine Track */}
          <div
            aria-hidden="true"
            className="absolute top-7 bottom-7 left-[26px] sm:left-[30px] w-[2px] bg-gradient-to-b from-orange-200 via-accent-500 to-orange-200 rounded-full z-0 opacity-80"
          />

          {/* Vertical Step Nodes */}
          <div className="space-y-6 sm:space-y-8 relative z-10">
            {STEPS.map((item, index) => {
              const Icon = item.icon
              const mobileDelays = ['100ms', '250ms', '400ms', '550ms']
              const isActive = activeStep === index

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`group flex items-start gap-4 sm:gap-6 transition-all duration-700 ease-out ${isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
                  style={{ transitionDelay: mobileDelays[index] }}
                >
                  {/* Spine Node / Hub */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] rounded-2xl bg-white border-2 flex items-center justify-center transition-all duration-300 ${isActive
                          ? 'border-accent-500 shadow-lg shadow-accent-500/25 scale-105'
                          : 'border-slate-200/90 shadow-sm group-hover:border-accent-500'
                        }`}
                    >
                      <div className="animate-approach-float">
                        <Icon
                          className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isActive
                              ? 'text-accent-500'
                              : 'text-slate-700 group-hover:text-accent-500'
                            }`}
                        />
                      </div>

                      {/* Small Orange Accent Dot */}
                      <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center">
                        <span
                          className={`absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 ${isActive ? 'animate-ping' : ''
                            }`}
                        />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500 ring-2 ring-white" />
                      </span>
                    </div>

                    {/* Step number badge below icon */}
                    <div
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full font-mono text-[9px] font-bold tracking-tight shadow-xs transition-colors ${isActive
                          ? 'bg-accent-500 text-white'
                          : 'bg-slate-900 text-white'
                        }`}
                    >
                      {item.step}
                    </div>
                  </div>

                  {/* Clean Content Item */}
                  <div
                    className={`flex-1 rounded-2xl border p-4 sm:p-5 transition-all duration-300 ${isActive
                        ? 'bg-white border-orange-300 shadow-md -translate-y-0.5'
                        : 'bg-slate-50/70 hover:bg-white border-slate-200/80 hover:border-orange-200 shadow-xs'
                      }`}
                  >
                    {/* Header with Phase & Title */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${isActive
                            ? 'bg-accent-500 text-white border-accent-500'
                            : 'bg-orange-50 text-accent-600 border-orange-100'
                          }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-accent-500'
                            }`}
                        />
                        <span>Step {item.step} • {item.stage}</span>
                      </span>

                      <span className="text-[10px] text-slate-400 font-medium">
                        {(index + 1) * 25}%
                      </span>
                    </div>

                    <h3
                      className={`display-card-title transition-colors ${isActive
                          ? 'text-accent-600'
                          : 'text-slate-900 group-hover:text-accent-600'
                        }`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-1 body-paragraph text-slate-600">
                      {item.description}
                    </p>

                    {/* Small orange accent progress element */}
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                      <span>Phase {index + 1} of 4</span>
                      <span
                        className={`h-0.5 rounded-full transition-all duration-300 ${isActive ? 'w-10 bg-accent-500' : 'w-6 bg-slate-200'
                          }`}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scoped CSS micro-animations */}
      <style>{`
        @keyframes approachFloatSoft {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(0.8deg);
          }
        }

        @keyframes radarPulseAnimation {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.35);
            opacity: 0;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @keyframes arrowNudgeAnim {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }

        .animate-approach-float {
          animation: approachFloatSoft 3.5s ease-in-out infinite;
        }

        .animate-radar-pulse {
          animation: radarPulseAnimation 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-arrow-nudge {
          animation: arrowNudgeAnim 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-approach-float,
          .animate-radar-pulse,
          .animate-arrow-nudge {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default TrainingApproach
