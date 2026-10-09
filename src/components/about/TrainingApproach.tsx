import React, { useEffect, useRef, useState } from 'react'
import { TrendingUp } from 'lucide-react'

interface StepItem {
  step: string
  stage: string
  title: string
  description: string
}

const STEPS: StepItem[] = [
  {
    step: '01',
    stage: 'Foundations',
    title: 'Step-by-Step Learning',
    description: 'From basics to advanced modules, we ensure complete clarity.',
  },
  {
    step: '02',
    stage: 'Application',
    title: 'Real-Time Projects',
    description: 'Students work on live projects to gain hands-on experience.',
  },
  {
    step: '03',
    stage: 'Benchmarking',
    title: 'Continuous Assessment',
    description: 'Weekly tasks, mini-projects, and evaluations track your progress.',
  },
  {
    step: '04',
    stage: 'Career Readiness',
    title: 'Mentorship & Guidance',
    description: 'Regular doubt clearing sessions and career counseling.',
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
            STRUCTURED METHODOLOGY CARDS (RESPONSIVE GRID)
        ========================================================= */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {STEPS.map((item, index) => {
              const stepDelays = ['100ms', '250ms', '400ms', '550ms']
              const isActive = activeStep === index

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group rounded-2xl border p-6 pt-5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[235px] text-left cursor-pointer ${
                    isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                  } ${
                    isActive
                      ? 'bg-white border-orange-300 shadow-xl shadow-orange-500/10 -translate-y-1.5'
                      : 'bg-slate-50/60 hover:bg-white border-slate-200/80 hover:border-orange-200/90 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1'
                  }`}
                  style={{ transitionDelay: stepDelays[index] }}
                >
                  {/* Animated Orange Accent Top Glow Line */}
                  <span
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  <div>
                    {/* Step Number & Stage Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span
                        className={`font-heading font-black text-3xl tracking-tighter transition-colors duration-300 select-none ${
                          isActive
                            ? 'text-accent-500/90'
                            : 'text-slate-200 group-hover:text-accent-500/70'
                        }`}
                      >
                        {item.step}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                          isActive
                            ? 'bg-accent-500 text-white shadow-2xs'
                            : 'bg-orange-50 text-accent-600 border border-orange-100 group-hover:bg-orange-100'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? 'bg-white' : 'bg-accent-500'
                          }`}
                        />
                        <span>{item.stage}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`display-card-title transition-colors duration-200 ${
                        isActive
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
                        className={`w-3.5 h-3.5 ${
                          isActive
                            ? 'text-accent-500'
                            : 'text-slate-400 group-hover:text-accent-500'
                        }`}
                      />
                      <span>Phase {index + 1} of 4</span>
                    </span>

                    {/* Animated expandable orange accent pill */}
                    <span
                      className={`h-1 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-14 bg-accent-500 shadow-xs'
                          : 'w-6 bg-slate-200 group-hover:w-12 group-hover:bg-accent-500'
                      }`}
                    />
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
