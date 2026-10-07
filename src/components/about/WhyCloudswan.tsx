import React, { useEffect, useRef, useState } from 'react'
import {
  Briefcase,
  MonitorPlay,
  Building2,
  UserCheck,
  ShieldCheck,
  ArrowUpRight,
  Check,
} from 'lucide-react'

interface FeatureCard {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const FEATURES: FeatureCard[] = [
  {
    id: 'internship',
    title: 'Internship Programs',
    description:
      'Gain practical exposure through real-world projects and internship opportunities.',
    icon: Briefcase,
  },
  {
    id: 'online-classes',
    title: 'Online Classes',
    description:
      'Learn from anywhere with flexible online learning options.',
    icon: MonitorPlay,
  },
  {
    id: 'corporate-training',
    title: 'Corporate Training',
    description:
      'Industry-focused training programs designed for organizations and teams.',
    icon: Building2,
  },
  {
    id: 'one-on-one',
    title: 'One-on-One Sessions',
    description:
      'Personalized guidance to help students understand concepts clearly.',
    icon: UserCheck,
  },
  {
    id: 'placement-support',
    title: 'Placement Support',
    description:
      'Career guidance, interview preparation, and placement assistance.',
    icon: ShieldCheck,
  },
]

export const WhyCloudswan: React.FC = () => {
  /* ==========================================================
     SCROLL ANIMATION STATE
  ========================================================== */

  const sectionRef = useRef<HTMLElement | null>(null)
  const [linesActive, setLinesActive] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLinesActive(true)

          // Trigger only once
          observer.disconnect()
        }
      },
      {
        threshold: 0.35,
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why-we-are-best"
      aria-label="Why We Are Best"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large ambient glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl animate-why-glow" />

        <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-orange-50/70 blur-3xl animate-why-glow-reverse" />

        {/* Large background typography */}
        <div className="absolute -right-10 top-10 select-none text-[180px] font-black leading-none tracking-tighter text-slate-900/[0.025] sm:text-[240px] lg:text-[300px]">
          WHY
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Number + label */}
          <div className="mb-5 flex items-center justify-center gap-3 animate-why-header">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white shadow-md shadow-orange-500/20">
              02
            </span>

            <span className="h-px w-8 bg-orange-300" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Why Cloudswan
            </span>

          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl animate-why-title">
            Learning designed around{' '}
            <span className="relative inline-block text-orange-500">
              your growth

              <span className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-orange-200 animate-why-underline" />
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base animate-why-description">
            Practical learning, industry guidance, and career-focused training
            designed to help students build confidence and develop relevant IT
            skills.
          </p>
        </div>

        {/* =====================================================
            MAIN TRAINING ECOSYSTEM
        ===================================================== */}

        <div className="relative mt-16 lg:mt-20">

          {/* =================================================
              CENTER CLOUDSWAN TRAINING
          ================================================= */}

          <div className="relative mx-auto hidden h-[190px] w-[190px] items-center justify-center lg:flex">

            {/* Outer pulse ring */}
            <div className="absolute inset-0 rounded-full border border-orange-200 animate-core-ring" />

            {/* Second rotating ring */}
            <div className="absolute inset-5 rounded-full border border-dashed border-orange-200/70 animate-core-ring-reverse" />

            {/* Center */}
            <div className="relative z-20 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-orange-200 bg-orange-100 shadow-[0_20px_70px_rgba(15,23,42,0.10)] animate-core-float">

              <span className="text-sm font-extrabold tracking-tight text-slate-900">
                Cloudswan
              </span>

              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-orange-600">
                Training
              </span>

            </div>
          </div>

          {/* =================================================
              CONNECTING LINES

              These lines remain hidden until the section
              enters the viewport.
          ================================================= */}

          <div className="pointer-events-none absolute inset-0 hidden lg:block">

            {/* Line → Internship */}
            <span
              className={`ecosystem-line line-one ${linesActive ? 'line-active' : ''
                }`}
            >
              <span className="line-travel-dot" />
            </span>

            {/* Line → Online Classes */}
            <span
              className={`ecosystem-line line-two ${linesActive ? 'line-active' : ''
                }`}
            >
              <span className="line-travel-dot" />
            </span>

            {/* Line → Corporate Training */}
            <span
              className={`ecosystem-line line-three ${linesActive ? 'line-active' : ''
                }`}
            >
              <span className="line-travel-dot" />
            </span>

            {/* Line → One-on-One */}
            <span
              className={`ecosystem-line line-four ${linesActive ? 'line-active' : ''
                }`}
            >
              <span className="line-travel-dot" />
            </span>

            {/* Line → Placement */}
            <span
              className={`ecosystem-line line-five ${linesActive ? 'line-active' : ''
                }`}
            >
              <span className="line-travel-dot" />
            </span>
          </div>

          {/* =================================================
              FEATURE CARDS
          ================================================= */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">

            {FEATURES.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.id}
                  className={`
                    group relative
                    lg:col-span-4
                    ${index === 0 ? 'lg:col-start-1' : ''}
                    ${index === 1 ? 'lg:col-start-9' : ''}
                    ${index === 2 ? 'lg:col-start-1' : ''}
                    ${index === 3 ? 'lg:col-start-9' : ''}
                    ${index === 4 ? 'lg:col-start-5' : ''}
                    ${getAnimationClass(index)}
                  `}
                >

                  <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-slate-200/60">

                    {/* Top number */}
                    <div className="mb-5 flex items-center justify-between">

                      <span className="text-xs font-bold tracking-[0.15em] text-orange-500">
                        0{index + 1}
                      </span>

                      <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500" />
                    </div>

                    {/* Icon */}
                    <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-500 group-hover:rotate-3 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/20">

                      <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />

                      {/* Icon pulse */}
                      <span className="absolute inset-0 rounded-2xl border border-orange-300 opacity-0 group-hover:animate-icon-pulse" />
                    </div>

                    {/* Heading */}
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-orange-600 sm:text-xl">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-sm leading-6 text-slate-500">
                      {feature.description}
                    </p>

                    {/* Bottom check */}
                    <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4">

                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                        <Check className="h-3 w-3" />
                      </span>

                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-slate-600">
                        Cloudswan Standard
                      </span>
                    </div>

                    {/* Animated bottom line */}
                    <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100" />

                    {/* Hover glow */}
                    <span className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-orange-100/0 blur-2xl transition-all duration-500 group-hover:bg-orange-100/70" />

                  </div>
                </div>
              )
            })}
          </div>

          {/* =================================================
              MOBILE & TABLET CLOUDSWAN TRAINING
              Appears below all feature cards on screens < lg,
              comfortably spaced and centered without clipping.
          ================================================= */}

          <div className="mt-12 sm:mt-16 flex justify-center lg:hidden">
            <div className="relative flex h-[170px] w-[170px] sm:h-[190px] sm:w-[190px] items-center justify-center">
              {/* Outer pulse ring */}
              <div className="absolute inset-0 rounded-full border border-orange-200 animate-core-ring" />

              {/* Second rotating ring */}
              <div className="absolute inset-4 sm:inset-5 rounded-full border border-dashed border-orange-200/70 animate-core-ring-reverse" />

              {/* Center */}
              <div className="relative z-20 flex h-28 w-28 sm:h-32 sm:w-32 flex-col items-center justify-center rounded-full border border-orange-200 bg-orange-100 shadow-[0_15px_50px_rgba(15,23,42,0.08)] animate-core-float">
                <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900">
                  Cloudswan
                </span>
                <span className="mt-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-600">
                  Training
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mx-auto mt-14 max-w-3xl text-center sm:mt-16 animate-why-bottom">

          <div className="mx-auto mb-4 h-px w-16 bg-orange-300" />

          <p className="text-sm font-medium leading-6 text-slate-500 sm:text-base">
            From learning technology to gaining practical experience and
            preparing for your career, every part of the learning journey is
            designed with your growth in mind.
          </p>
        </div>
      </div>

      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <span className="pointer-events-none absolute left-[8%] top-[28%] h-2 w-2 rounded-full bg-orange-400 animate-why-particle-one" />

      <span className="pointer-events-none absolute right-[9%] top-[35%] h-1.5 w-1.5 rounded-full bg-orange-300 animate-why-particle-two" />

      <span className="pointer-events-none absolute bottom-[20%] left-[12%] h-1.5 w-1.5 rounded-full bg-orange-300 animate-why-particle-three" />

      <span className="pointer-events-none absolute bottom-[14%] right-[15%] h-2 w-2 rounded-full bg-orange-200 animate-why-particle-four" />

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`

        /* =====================================================
           HEADER
        ===================================================== */

        @keyframes whyHeader {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-why-header {
          animation: whyHeader 0.7s ease-out both;
        }


        @keyframes whyTitle {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-why-title {
          animation: whyTitle 0.8s ease-out 0.15s both;
        }


        @keyframes whyDescription {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-why-description {
          animation: whyDescription 0.8s ease-out 0.3s both;
        }


        /* =====================================================
           UNDERLINE
        ===================================================== */

        @keyframes whyUnderline {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .animate-why-underline {
          animation: whyUnderline 0.8s ease-out 0.7s both;
        }


        /* =====================================================
           CENTER RINGS
        ===================================================== */

        @keyframes coreRing {

          0%,
          100% {
            transform: scale(1);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.9;
          }
        }

        .animate-core-ring {
          animation: coreRing 3.5s ease-in-out infinite;
        }


        @keyframes coreRingReverse {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(-360deg);
          }
        }

        .animate-core-ring-reverse {
          animation: coreRingReverse 18s linear infinite;
        }


        @keyframes coreFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .animate-core-float {
          animation: coreFloat 3.5s ease-in-out infinite;
        }


        /* =====================================================
           CONNECTION LINES

           IMPORTANT:
           Lines start from the center and grow outward
           only after linesActive becomes true.
        ===================================================== */

        .ecosystem-line {
          position: absolute;
          height: 2px;

          background: linear-gradient(
            90deg,
            rgba(249, 115, 22, 0),
            rgba(249, 115, 22, 0.3),
            rgba(249, 115, 22, 0.85)
          );

          transform-origin: left center;

          opacity: 0;

          scale: 0 1;

          border-radius: 999px;

          transition:
            scale 1.4s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.35s ease;
        }


        /* =====================================================
           LINE POSITIONS

           These remain exactly in the existing design.
        ===================================================== */

        .line-one {
          width: 250px;
          left: 29%;
          top: 30%;
          transform: rotate(-28deg);
        }


        .line-two {
          width: 250px;
          left: 57%;
          top: 30%;
          transform: rotate(28deg);
        }


        .line-three {
          width: 250px;
          left: 29%;
          top: 68%;
          transform: rotate(28deg);
        }


        .line-four {
          width: 250px;
          left: 57%;
          top: 68%;
          transform: rotate(-28deg);
        }


        .line-five {
          width: 120px;
          left: 46%;
          top: 76%;
          transform: rotate(90deg);
        }


        /* =====================================================
           ACTIVATE LINES ON SCROLL
        ===================================================== */

        .line-active {
          opacity: 1;
          scale: 1 1;
        }


        /* Sequential drawing */

        .line-one.line-active {
          transition-delay: 0.1s;
        }


        .line-two.line-active {
          transition-delay: 0.35s;
        }


        .line-three.line-active {
          transition-delay: 0.6s;
        }


        .line-four.line-active {
          transition-delay: 0.85s;
        }


        .line-five.line-active {
          transition-delay: 1.1s;
        }


        /* =====================================================
           TRAVELING DOT ON LINE
        ===================================================== */

        .line-travel-dot {
          position: absolute;

          top: 50%;

          left: 0;

          width: 7px;

          height: 7px;

          border-radius: 999px;

          background: #f97316;

          box-shadow:
            0 0 0 3px rgba(249, 115, 22, 0.12),
            0 0 14px rgba(249, 115, 22, 0.7);

          transform: translate(-50%, -50%);

          opacity: 0;
        }


        .line-active .line-travel-dot {
          animation: lineDotTravel 1.3s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }


        .line-two.line-active .line-travel-dot {
          animation-delay: 0.35s;
        }


        .line-three.line-active .line-travel-dot {
          animation-delay: 0.6s;
        }


        .line-four.line-active .line-travel-dot {
          animation-delay: 0.85s;
        }


        .line-five.line-active .line-travel-dot {
          animation-delay: 1.1s;
        }


        @keyframes lineDotTravel {

          0% {
            left: 0;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            left: 100%;
            opacity: 0;
          }
        }


        /* =====================================================
           CARD REVEALS
        ===================================================== */

        @keyframes cardFromLeft {

          from {
            opacity: 0;
            transform: translateX(-45px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }


        @keyframes cardFromRight {

          from {
            opacity: 0;
            transform: translateX(45px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }


        @keyframes cardFromBottom {

          from {
            opacity: 0;
            transform: translateY(45px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        .animate-card-left {
          animation: cardFromLeft 0.8s ease-out 0.5s both;
        }


        .animate-card-right {
          animation: cardFromRight 0.8s ease-out 0.65s both;
        }


        .animate-card-left-two {
          animation: cardFromLeft 0.8s ease-out 0.8s both;
        }


        .animate-card-right-two {
          animation: cardFromRight 0.8s ease-out 0.95s both;
        }


        .animate-card-bottom {
          animation: cardFromBottom 0.8s ease-out 1.1s both;
        }


        /* =====================================================
           ICON PULSE
        ===================================================== */

        @keyframes iconPulse {

          0% {
            opacity: 0;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }

          100% {
            opacity: 0;
            transform: scale(1.35);
          }
        }


        .group:hover .group-hover\\:animate-icon-pulse {
          animation: iconPulse 1.2s ease-out infinite;
        }


        /* =====================================================
           BACKGROUND GLOW
        ===================================================== */

        @keyframes whyGlow {

          0%,
          100% {
            transform: scale(1);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.15);
            opacity: 0.75;
          }
        }


        .animate-why-glow {
          animation: whyGlow 7s ease-in-out infinite;
        }


        @keyframes whyGlowReverse {

          0%,
          100% {
            transform: scale(1.1);
            opacity: 0.4;
          }

          50% {
            transform: scale(0.9);
            opacity: 0.7;
          }
        }


        .animate-why-glow-reverse {
          animation: whyGlowReverse 8s ease-in-out infinite;
        }


        /* =====================================================
           BOTTOM
        ===================================================== */

        @keyframes whyBottom {

          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        .animate-why-bottom {
          animation: whyBottom 0.8s ease-out 1.2s both;
        }


        /* =====================================================
           PARTICLES
        ===================================================== */

        @keyframes whyParticleOne {

          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }

          50% {
            transform: translate(18px, -25px);
            opacity: 1;
          }
        }


        @keyframes whyParticleTwo {

          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }

          50% {
            transform: translate(-20px, 20px);
            opacity: 1;
          }
        }


        @keyframes whyParticleThree {

          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }

          50% {
            transform: translate(25px, 15px);
            opacity: 1;
          }
        }


        @keyframes whyParticleFour {

          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }

          50% {
            transform: translate(-15px, -20px);
            opacity: 1;
          }
        }


        .animate-why-particle-one {
          animation: whyParticleOne 4s ease-in-out infinite;
        }


        .animate-why-particle-two {
          animation: whyParticleTwo 4.5s ease-in-out infinite 0.5s;
        }


        .animate-why-particle-three {
          animation: whyParticleThree 5s ease-in-out infinite 1s;
        }


        .animate-why-particle-four {
          animation: whyParticleFour 4.2s ease-in-out infinite 1.5s;
        }


        /* =====================================================
           TABLET / MOBILE
        ===================================================== */

        @media (max-width: 1023px) {

          .ecosystem-line {
            display: none;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .animate-why-header,
          .animate-why-title,
          .animate-why-description,
          .animate-why-underline,
          .animate-core-ring,
          .animate-core-ring-reverse,
          .animate-core-float,
          .ecosystem-line,
          .animate-card-left,
          .animate-card-right,
          .animate-card-left-two,
          .animate-card-right-two,
          .animate-card-bottom,
          .animate-why-glow,
          .animate-why-glow-reverse,
          .animate-why-bottom,
          .animate-why-particle-one,
          .animate-why-particle-two,
          .animate-why-particle-three,
          .animate-why-particle-four {
            animation: none !important;
          }

          .ecosystem-line {
            opacity: 1;
            scale: 1 1;
          }

        }

      `}</style>
    </section>
  )
}

/* ============================================================
   ANIMATION CLASS HELPER
============================================================ */

const getAnimationClass = (index: number): string => {
  switch (index) {
    case 0:
      return 'animate-card-left'

    case 1:
      return 'animate-card-right'

    case 2:
      return 'animate-card-left-two'

    case 3:
      return 'animate-card-right-two'

    case 4:
      return 'animate-card-bottom'

    default:
      return 'animate-card-bottom'
  }
}