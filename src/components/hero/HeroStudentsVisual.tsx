import React, { useEffect, useRef } from 'react'
import studentImg from '../../assets/hero-students.png'

interface TechBadgeConfig {
  id: string
  name: string
  tag: string
  positionClass: string
  mobileHidden?: boolean
  floatDuration: string
  floatDelay: string
  icon: React.ReactNode
  accentColor: string
}

export const HeroStudentsVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const layer1Ref = useRef<HTMLDivElement>(null) // Glow & ambient particles (4px)
  const layer2Ref = useRef<HTMLDivElement>(null) // Tech badges (8-12px)
  const layer3Ref = useRef<HTMLDivElement>(null) // People image & ground shadow (12-20px)

  // Floating technology badges configuration
  const techBadges: TechBadgeConfig[] = [
    {
      id: 'python',
      name: 'Python',
      tag: 'AI & Data',
      positionClass: 'top-[6%] left-[1%] sm:left-[3%]',
      floatDuration: '4.6s',
      floatDelay: '0s',
      accentColor: 'from-amber-500/15 to-blue-500/15 border-amber-500/25',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.87 2c-3.15 0-5.17.47-5.17 2.21v2.33h5.27v.78H4.63C2.89 7.32 2 9.3 2 12.45c0 3.2 1.05 5.17 2.91 5.17h1.69v-2.45c0-1.78 1.48-3.32 3.26-3.32h5.27v-5.2C15.13 3.65 14.2 2 11.87 2zm-1.84 1.5c.44 0 .79.35.79.79 0 .43-.35.78-.79.78a.79.79 0 0 1-.79-.78c0-.44.35-.79.79-.79z"
            fill="#3776AB"
          />
          <path
            d="M12.13 22c3.15 0 5.17-.47 5.17-2.21v-2.33h-5.27v-.78h7.34c1.74 0 2.63-1.98 2.63-5.13 0-3.2-1.05-5.17-2.91-5.17h-1.69v2.45c0 1.78-1.48 3.32-3.26 3.32h-5.27v5.2c0 3 1.03 4.65 3.26 4.65zm1.84-1.5a.79.79 0 0 1-.79-.79c0-.43.35-.78.79-.78.44 0 .79.35.79.78 0 .44-.35.79-.79.79z"
            fill="#FFD438"
          />
        </svg>
      ),
    },
    {
      id: 'react',
      name: 'React',
      tag: 'Frontend',
      positionClass: 'top-[44%] -left-[3%] sm:left-[0%]',
      floatDuration: '5.2s',
      floatDelay: '1.2s',
      accentColor: 'from-cyan-500/15 to-blue-500/15 border-cyan-500/25',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D8FF]" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="1.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="4"
            ry="10"
            stroke="currentColor"
            strokeWidth="1.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="4"
            ry="10"
            stroke="currentColor"
            strokeWidth="1.5"
            transform="rotate(120 12 12)"
          />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'fullstack',
      name: 'Full Stack',
      tag: 'Web & API',
      positionClass: 'bottom-[8%] left-[2%] sm:left-[4%]',
      mobileHidden: true,
      floatDuration: '4.8s',
      floatDelay: '0.6s',
      accentColor: 'from-emerald-500/15 to-teal-500/15 border-emerald-500/25',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      id: 'cloud',
      name: 'Cloud',
      tag: 'AWS & Azure',
      positionClass: 'top-[6%] right-[1%] sm:right-[3%]',
      floatDuration: '5.6s',
      floatDelay: '1.8s',
      accentColor: 'from-sky-500/15 to-indigo-500/15 border-sky-500/25',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    },
    {
      id: 'ai',
      name: 'AI',
      tag: 'GenAI & ML',
      positionClass: 'top-[42%] -right-[3%] sm:right-[0%]',
      mobileHidden: true,
      floatDuration: '4.4s',
      floatDelay: '2.4s',
      accentColor: 'from-violet-500/15 to-pink-500/15 border-violet-500/25',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      ),
    },
    {
      id: 'devops',
      name: 'DevOps',
      tag: 'CI/CD & K8s',
      positionClass: 'bottom-[8%] right-[2%] sm:right-[4%]',
      mobileHidden: true,
      floatDuration: '6.0s',
      floatDelay: '0.9s',
      accentColor: 'from-orange-500/15 to-amber-500/15 border-orange-500/25',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18.178 8c5.096 0 5.096 8 0 8-2.688 0-4.475-2.667-6.178-5.333C10.297 8 8.51 5.333 5.822 5.333 0.726 5.333.726 13.333 5.822 13.333c2.688 0 4.475-2.667 6.178-5.333" />
        </svg>
      ),
    },
  ]

  // Smooth Interactive Cursor-Following & Parallax Logic
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    if (prefersReducedMotion) return

    let rafId: number
    let targetX = 0
    let targetY = 0
    let targetScale = 1.0

    let currentX = 0
    let currentY = 0
    let currentScale = 1.0

    // Smooth lerping interpolation
    const ease = 0.08

    const updateParallax = () => {
      currentX += (targetX - currentX) * ease
      currentY += (targetY - currentY) * ease
      currentScale += (targetScale - currentScale) * ease

      // Layer 1: Background ambient glow & particles (Movement: ~4px)
      if (layer1Ref.current) {
        const l1X = currentX * 0.22
        const l1Y = currentY * 0.22
        layer1Ref.current.style.transform = `translate3d(${l1X.toFixed(2)}px, ${l1Y.toFixed(2)}px, 0)`
      }

      // Layer 2: Technology Badges (Movement: 8-12px)
      if (layer2Ref.current) {
        const l2X = currentX * 0.62
        const l2Y = currentY * 0.62
        layer2Ref.current.style.transform = `translate3d(${l2X.toFixed(2)}px, ${l2Y.toFixed(2)}px, 0)`
      }

      // Layer 3: People PNG & Ground Shadow (Movement: 12-20px)
      if (layer3Ref.current) {
        const l3X = currentX
        const l3Y = currentY
        layer3Ref.current.style.transform = `translate3d(${l3X.toFixed(2)}px, ${l3Y.toFixed(2)}px, 0) scale(${currentScale.toFixed(4)})`
      }

      rafId = requestAnimationFrame(updateParallax)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice) return
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Normalized coordinates from -1 to 1
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)))
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)))

      // Max movement: X: 16px, Y: 12px
      targetX = normX * 16
      targetY = normY * 12
    }

    const handleMouseEnter = () => {
      if (isTouchDevice) return
      targetScale = 1.015
    }

    const handleMouseLeave = () => {
      // Smoothly return towards resting position
      targetX = 0
      targetY = 0
      targetScale = 1.0
    }

    container.addEventListener('mousemove', handleMouseMove, { passive: true })
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    rafId = requestAnimationFrame(updateParallax)

    return () => {
      cancelAnimationFrame(rafId)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[540px] mx-auto select-none overflow-visible flex items-center justify-center py-2 sm:py-4"
      style={{ perspective: 1000 }}
      aria-label="CloudSwan IT Students and Global Career Visual"
    >
      {/* ========================================================
          LAYER 1: BACKGROUND GLOW & AMBIENT PARTICLES (~4px depth)
          ======================================================== */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 pointer-events-none will-change-transform transition-transform duration-75 ease-out"
      >
        {/* Soft Blue / Sky Ambient Glow Behind Students */}
        <div
          className="absolute top-[20%] left-[20%] w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-sky-400/20 via-blue-500/10 to-transparent blur-3xl"
          style={{ transform: 'translate3d(0,0,0)' }}
        />

        {/* Soft Warm Orange Accent Glow */}
        <div
          className="absolute bottom-[24%] right-[18%] w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-bl from-orange-400/16 via-amber-400/8 to-transparent blur-3xl"
          style={{ transform: 'translate3d(0,0,0)' }}
        />

        {/* Delicate Ambient Micro Particles */}
        <div className="absolute top-[14%] right-[24%] w-2 h-2 rounded-full bg-cyan-400/35 blur-[0.5px] animate-pulse" />
        <div
          className="absolute top-[32%] left-[12%] w-1.5 h-1.5 rounded-full bg-orange-400/40 blur-[0.5px] animate-ping"
          style={{ animationDuration: '4s' }}
        />
        <div className="absolute bottom-[28%] left-[18%] w-2 h-2 rounded-full bg-sky-400/30 blur-[0.5px]" />
        <div
          className="absolute bottom-[36%] right-[14%] w-1.5 h-1.5 rounded-full bg-amber-400/35 blur-[0.5px] animate-pulse"
          style={{ animationDuration: '3.5s' }}
        />
      </div>

      {/* ========================================================
          LAYER 2: TECHNOLOGY FLOATING BADGES (8-12px depth)
          ======================================================== */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 pointer-events-none z-20 will-change-transform transition-transform duration-75 ease-out"
      >
        {techBadges.map((badge) => (
          <div
            key={badge.id}
            className={`absolute ${badge.positionClass} ${badge.mobileHidden ? 'hidden sm:block' : 'block'}`}
          >
            <div
              className="inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[0_6px_18px_-3px_rgba(15,23,42,0.08)] hover:shadow-lg transition-all"
              style={{
                animation: `hero-badge-float-${badge.id} ${badge.floatDuration} ease-in-out infinite alternate`,
                animationDelay: badge.floatDelay,
              }}
            >
              {/* Badge Icon with subtle tint */}
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-gradient-to-br ${badge.accentColor} border flex items-center justify-center shrink-0 shadow-2xs`}
              >
                {badge.icon}
              </div>

              {/* Badge Typography */}
              <div className="flex flex-col text-left leading-tight">
                <span className="font-heading text-[11px] sm:text-xs font-bold text-slate-800 tracking-tight">
                  {badge.name}
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {badge.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================
          LAYER 3: STUDENTS PNG VISUAL & GROUND SHADOW (12-20px depth)
          ======================================================== */}
      <div
        ref={layer3Ref}
        className="relative z-10 w-full flex flex-col items-center justify-center will-change-transform transition-transform duration-75 ease-out"
      >
        {/* Subtle Idle Floating / Breathing Animation Wrapper */}
        <div
          className="relative w-full flex flex-col items-center justify-center"
          style={{
            animation: 'hero-student-breathe 6.5s ease-in-out infinite alternate',
          }}
        >
          {/* Main Two IT Students Visual */}
          <img
            src={studentImg}
            alt="CloudSwan IT Students - Male and Female tech learners holding laptops"
            className="w-[88%] sm:w-[92%] lg:w-[96%] max-w-[500px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.08)] pointer-events-none select-none"
            loading="eager"
            decoding="async"
          />

          {/* Natural Soft Ground Shadow Underneath the People */}
          <div
            className="w-[74%] sm:w-[70%] h-5 sm:h-6 -mt-2 sm:-mt-2.5 rounded-[100%] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.16) 0%, rgba(15, 23, 42, 0.05) 45%, transparent 75%)',
              filter: 'blur(4px)',
            }}
          />
        </div>
      </div>

      {/* Embedded High-Performance Keyframe Animations */}
      <style>{`
        @keyframes hero-student-breathe {
          0% {
            transform: translate3d(0, 0px, 0);
          }
          100% {
            transform: translate3d(0, -6px, 0);
          }
        }

        @keyframes hero-badge-float-python {
          0% {
            transform: translate3d(0, 0px, 0);
            opacity: 0.94;
          }
          100% {
            transform: translate3d(0, -6px, 0);
            opacity: 1;
          }
        }

        @keyframes hero-badge-float-react {
          0% {
            transform: translate3d(0, 0px, 0);
            opacity: 0.93;
          }
          100% {
            transform: translate3d(0, 6px, 0);
            opacity: 1;
          }
        }

        @keyframes hero-badge-float-fullstack {
          0% {
            transform: translate3d(0, 0px, 0);
            opacity: 0.94;
          }
          100% {
            transform: translate3d(0, -5px, 0);
            opacity: 1;
          }
        }

        @keyframes hero-badge-float-cloud {
          0% {
            transform: translate3d(0, 0px, 0);
            opacity: 0.92;
          }
          100% {
            transform: translate3d(0, 7px, 0);
            opacity: 1;
          }
        }

        @keyframes hero-badge-float-ai {
          0% {
            transform: translate3d(0, 0px, 0);
            opacity: 0.95;
          }
          100% {
            transform: translate3d(0, -6px, 0);
            opacity: 1;
          }
        }

        @keyframes hero-badge-float-devops {
          0% {
            transform: translate3d(0, 0px, 0);
            opacity: 0.92;
          }
          100% {
            transform: translate3d(0, 6px, 0);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}
