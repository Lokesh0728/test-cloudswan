import React from 'react'
import logoImg from '../../assets/logo.png'
import {
  ArrowRight,
  Headphones,
  CheckCircle,
  Building2,
  Code2,
  Wrench,
  Target,
  GraduationCap,
} from 'lucide-react'

interface AboutIntroProps {
  onExploreCourses?: () => void
  onTalkToCounselor?: () => void
}

export const AboutIntro: React.FC<AboutIntroProps> = ({
  onExploreCourses,
  onTalkToCounselor,
}) => {
  return (
    <section
      id="about-intro"
      aria-label="Who We Are - Cloudswan Solution"
      className="relative overflow-hidden bg-white pt-12 pb-6 sm:py-16 lg:py-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft orange glow */}
        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-50/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="lg:col-span-6 animate-about-left">

            {/* Section label */}
            <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              <span>Who We Are</span>


            </div>

            {/* Heading matching Home Page Section H2 */}
            <h2 className="display-h2 text-slate-900 max-w-2xl">
              Training people to become{' '}
              <span className="relative inline-block text-accent-500">
                industry-ready
                <span className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-orange-200 animate-heading-line" />
              </span>{' '}
              professionals.
            </h2>

            {/* Description matching Home Page body-paragraph */}
            <div className="mt-6 max-w-2xl space-y-4 body-paragraph text-slate-600">

              <p>
                <strong className="font-bold text-slate-900 font-heading">
                  Cloudswan Solution is a training institute in Coimbatore
                </strong>
                , offering IT and cloud training programs. We help you choose
                the right course and learn the latest technology skills needed
                for today's job market.
              </p>

              <p>
                At Cloudswan, our goal is to prepare you for a successful
                career. Our expert trainers and friendly guidance make learning
                easy and effective. We focus on practical training that matches
                real industry needs.
              </p>

              <p>
                Our courses include hands-on projects and real-time experience
                to boost your confidence. Join Cloudswan Solution to work on
                live IT projects, do internships, and build a bright future in
                the tech world.
              </p>

            </div>

            {/* =================================================
                FEATURE LIST
            ================================================= */}

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <FeatureItem
                icon={<CheckCircle className="h-4 w-4" />}
                text="Hands-on Project Execution"
              />

              <FeatureItem
                icon={<CheckCircle className="h-4 w-4" />}
                text="Internships with Real IT Scope"
              />

              <FeatureItem
                icon={<CheckCircle className="h-4 w-4" />}
                text="Placement Assistance"
              />

              <FeatureItem
                icon={<Building2 className="h-4 w-4" />}
                text="Corporate & Dedicated Mentors"
              />

            </div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              <button
                type="button"
                onClick={onExploreCourses}
                className="group flex cursor-pointer items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-bold font-heading text-white shadow-lg shadow-accent-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-600 hover:shadow-accent-500/30"
              >
                <span>Explore Our Courses</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onTalkToCounselor}
                className="group flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold font-heading text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:text-accent-600"
              >
                <Headphones className="h-4 w-4 text-accent-500 transition-transform duration-300 group-hover:rotate-12" />

                <span>Talk to a Counselor</span>
              </button>

            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE - LEARNING ORBIT
          ===================================================== */}

          <div className="relative flex h-[290px] xs:h-[320px] sm:h-[400px] lg:h-[500px] w-full items-center justify-center lg:col-span-6 animate-about-right overflow-visible my-2 sm:my-4 lg:my-0">
            <div className="learning-orbit-stage relative flex items-center justify-center">

              {/* Ambient glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/60 blur-3xl animate-orbit-glow" />

              {/* =================================================
                OUTER ROTATING RING
            ================================================= */}

              <div className="absolute h-[390px] w-[390px] rounded-full border border-orange-100 sm:h-[440px] sm:w-[440px] animate-ring-rotate">
                <div className="absolute inset-5 rounded-full border border-dashed border-orange-200/70" />
              </div>

              {/* =================================================
                INNER ROTATING RING
            ================================================= */}

              <div className="absolute h-[300px] w-[300px] rounded-full border border-slate-100 sm:h-[340px] sm:w-[340px] animate-ring-reverse">

                {/* Traveling dot */}
                <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50 animate-travel-dot" />

              </div>

              {/* =================================================
                ORBIT PATH
            ================================================= */}

              <div className="absolute h-[420px] w-[420px] rounded-full sm:h-[470px] sm:w-[470px]">

                {/* Orbit item 1 */}
                <div className="orbit-item orbit-item-1">
                  <OrbitCard
                    icon={<Code2 className="h-5 w-5" />}
                    title="Technology"
                    description="Industry Skills"
                  />
                </div>

                {/* Orbit item 2 */}
                <div className="orbit-item orbit-item-2">
                  <OrbitCard
                    icon={<Wrench className="h-5 w-5" />}
                    title="Practical"
                    description="Real Projects"
                  />
                </div>

                {/* Orbit item 3 */}
                <div className="orbit-item orbit-item-3">
                  <OrbitCard
                    icon={<Target className="h-5 w-5" />}
                    title="Career"
                    description="Career Growth"
                  />
                </div>

                {/* Orbit item 4 */}
                <div className="orbit-item orbit-item-4">
                  <OrbitCard
                    icon={<GraduationCap className="h-5 w-5" />}
                    title="Mentorship"
                    description="Expert Guidance"
                  />
                </div>

              </div>

              {/* =================================================
                CENTER
            ================================================= */}

              <div className="relative z-20 flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">

                {/* Outer center ring */}
                <div className="absolute inset-0 rounded-full border border-orange-200 animate-center-ring" />

                {/* Inner circle */}
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-orange-100 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:h-40 sm:w-40 sm:p-6">

                  {/* Orange top accent */}
                  <div className="absolute -top-1 left-1/2 h-2 w-10 -translate-x-1/2 rounded-full bg-orange-500" />

                  {/* Cloudswan Solution Logo */}
                  <img
                    src={logoImg}
                    alt="Cloudswan Solution"
                    className="h-auto w-full max-w-[110px] object-contain sm:max-w-[135px]"
                  />

                </div>
              </div>

              {/* =================================================
                FLOATING PARTICLES
            ================================================= */}

              <span className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-orange-400 animate-particle-1" />

              <span className="absolute right-[13%] top-[18%] h-1.5 w-1.5 rounded-full bg-orange-300 animate-particle-2" />

              <span className="absolute bottom-[22%] left-[18%] h-1.5 w-1.5 rounded-full bg-orange-400 animate-particle-3" />

              <span className="absolute bottom-[18%] right-[20%] h-2 w-2 rounded-full bg-orange-200 animate-particle-4" />

              {/* Decorative plus */}
              <span className="absolute left-[8%] top-[48%] text-2xl font-light text-orange-200 animate-floating-symbol">
                +
              </span>

              <span className="absolute right-[8%] bottom-[40%] text-xl font-light text-orange-200 animate-floating-symbol-reverse">
                +
              </span>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style>{`

        /* ---------------------------------------------
           SECTION REVEAL
        --------------------------------------------- */

        @keyframes aboutLeftReveal {
          from {
            opacity: 0;
            transform: translateX(-45px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes aboutRightReveal {
          from {
            opacity: 0;
            transform: translateX(45px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-about-left {
          animation: aboutLeftReveal 0.9s ease-out both;
        }

        .animate-about-right {
          animation: aboutRightReveal 1s ease-out 0.15s both;
        }

        /* ---------------------------------------------
           HEADING LINE
        --------------------------------------------- */

        @keyframes headingLine {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .animate-heading-line {
          animation: headingLine 1s ease-out 0.7s both;
        }

        /* ---------------------------------------------
           OUTER RING
        --------------------------------------------- */

        @keyframes ringRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .animate-ring-rotate {
          animation: ringRotate 28s linear infinite;
        }

        /* ---------------------------------------------
           INNER RING
        --------------------------------------------- */

        @keyframes ringReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        .animate-ring-reverse {
          animation: ringReverse 20s linear infinite;
        }

        /* ---------------------------------------------
           CENTER RING
        --------------------------------------------- */

        @keyframes centerRing {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        .animate-center-ring {
          animation: centerRing 3s ease-in-out infinite;
        }

        /* ---------------------------------------------
           GLOW
        --------------------------------------------- */

        @keyframes orbitGlow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.45;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.08);
            opacity: 0.75;
          }
        }

        .animate-orbit-glow {
          animation: orbitGlow 4s ease-in-out infinite;
        }

        /* ---------------------------------------------
           TRAVELING DOT
        --------------------------------------------- */

        @keyframes travelDot {
          0% {
            transform: translate(-50%, 0) rotate(0deg);
          }

          25% {
            transform: translate(145px, 145px) rotate(90deg);
          }

          50% {
            transform: translate(-50%, 295px) rotate(180deg);
          }

          75% {
            transform: translate(-295px, 145px) rotate(270deg);
          }

          100% {
            transform: translate(-50%, 0) rotate(360deg);
          }
        }

        .animate-travel-dot {
          animation: travelDot 8s linear infinite;
        }

        /* ---------------------------------------------
           ORBIT ITEMS
        --------------------------------------------- */

        .learning-orbit-stage {
          transform-origin: center center;
          transition: transform 0.3s ease;
        }

        @media (max-width: 380px) {
          .learning-orbit-stage {
            transform: scale(0.56);
          }
        }

        @media (min-width: 381px) and (max-width: 480px) {
          .learning-orbit-stage {
            transform: scale(0.64);
          }
        }

        @media (min-width: 481px) and (max-width: 639px) {
          .learning-orbit-stage {
            transform: scale(0.74);
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .learning-orbit-stage {
            transform: scale(0.88);
          }
        }

        @media (min-width: 1024px) {
          .learning-orbit-stage {
            transform: scale(1);
          }
        }

        .orbit-item {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 152px;
          margin-left: -76px;
          margin-top: -32px;

          animation-duration: 18s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        .orbit-item-1 {
          animation-name: orbitOne;
        }

        .orbit-item-2 {
          animation-name: orbitTwo;
        }

        .orbit-item-3 {
          animation-name: orbitThree;
        }

        .orbit-item-4 {
          animation-name: orbitFour;
        }

        /* Pause orbit on hover */

        .lg\\:col-span-6:hover .orbit-item {
          animation-play-state: paused;
        }

        /* ---------------------------------------------
           ORBIT MOTION
        --------------------------------------------- */

        @keyframes orbitOne {
          0% {
            transform: rotate(0deg) translateX(210px) rotate(0deg);
          }

          100% {
            transform: rotate(360deg) translateX(210px) rotate(-360deg);
          }
        }

        @keyframes orbitTwo {
          0% {
            transform: rotate(90deg) translateX(210px) rotate(-90deg);
          }

          100% {
            transform: rotate(450deg) translateX(210px) rotate(-450deg);
          }
        }

        @keyframes orbitThree {
          0% {
            transform: rotate(180deg) translateX(210px) rotate(-180deg);
          }

          100% {
            transform: rotate(540deg) translateX(210px) rotate(-540deg);
          }
        }

        @keyframes orbitFour {
          0% {
            transform: rotate(270deg) translateX(210px) rotate(-270deg);
          }

          100% {
            transform: rotate(630deg) translateX(210px) rotate(-630deg);
          }
        }

        /* ---------------------------------------------
           PARTICLES
        --------------------------------------------- */

        @keyframes particleOne {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }

          50% {
            transform: translate(18px, -25px);
            opacity: 1;
          }
        }

        @keyframes particleTwo {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }

          50% {
            transform: translate(-20px, 22px);
            opacity: 1;
          }
        }

        @keyframes particleThree {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }

          50% {
            transform: translate(24px, 18px);
            opacity: 1;
          }
        }

        @keyframes particleFour {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }

          50% {
            transform: translate(-18px, -20px);
            opacity: 1;
          }
        }

        .animate-particle-1 {
          animation: particleOne 3.5s ease-in-out infinite;
        }

        .animate-particle-2 {
          animation: particleTwo 4s ease-in-out infinite 0.5s;
        }

        .animate-particle-3 {
          animation: particleThree 4.5s ease-in-out infinite 0.8s;
        }

        .animate-particle-4 {
          animation: particleFour 3.8s ease-in-out infinite 1s;
        }

        /* ---------------------------------------------
           FLOATING PLUS
        --------------------------------------------- */

        @keyframes floatingSymbol {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-12px) rotate(90deg);
          }
        }

        @keyframes floatingSymbolReverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(12px) rotate(-90deg);
          }
        }

        .animate-floating-symbol {
          animation: floatingSymbol 4s ease-in-out infinite;
        }

        .animate-floating-symbol-reverse {
          animation: floatingSymbolReverse 4.5s ease-in-out infinite;
        }

        /* ---------------------------------------------
           REDUCED MOTION
        --------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          .animate-about-left,
          .animate-about-right,
          .animate-heading-line,
          .animate-ring-rotate,
          .animate-ring-reverse,
          .animate-center-ring,
          .animate-orbit-glow,
          .animate-travel-dot,
          .orbit-item,
          .animate-particle-1,
          .animate-particle-2,
          .animate-particle-3,
          .animate-particle-4,
          .animate-floating-symbol,
          .animate-floating-symbol-reverse {
            animation: none !important;
          }
        }

        /* ---------------------------------------------
           MOBILE
        --------------------------------------------- */

        @media (max-width: 640px) {

          .orbit-item {
            width: 125px;
            margin-left: -62.5px;
          }

          @keyframes orbitOne {
            0% {
              transform: rotate(0deg) translateX(150px) rotate(0deg);
            }

            100% {
              transform: rotate(360deg) translateX(150px) rotate(-360deg);
            }
          }

          @keyframes orbitTwo {
            0% {
              transform: rotate(90deg) translateX(150px) rotate(-90deg);
            }

            100% {
              transform: rotate(450deg) translateX(150px) rotate(-450deg);
            }
          }

          @keyframes orbitThree {
            0% {
              transform: rotate(180deg) translateX(150px) rotate(-180deg);
            }

            100% {
              transform: rotate(540deg) translateX(150px) rotate(-540deg);
            }
          }

          @keyframes orbitFour {
            0% {
              transform: rotate(270deg) translateX(150px) rotate(-270deg);
            }

            100% {
              transform: rotate(630deg) translateX(150px) rotate(-630deg);
            }
          }
        }

      `}</style>
    </section>
  )
}

/* ============================================================
   FEATURE ITEM
============================================================ */

interface FeatureItemProps {
  icon: React.ReactNode
  text: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  return (
    <div className="group flex items-center gap-2.5 rounded-lg border border-transparent px-2 py-2 transition-all duration-300 hover:border-orange-100 hover:bg-orange-50/50">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-500 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>

      <span className="font-heading text-xs font-semibold text-slate-700 sm:text-sm">
        {text}
      </span>
    </div>
  )
}

/* ============================================================
   ORBIT CARD
============================================================ */

interface OrbitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const OrbitCard: React.FC<OrbitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="group w-full cursor-pointer rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-lg shadow-slate-200/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-100/70">
      <div className="flex items-center gap-2.5">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-500 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="whitespace-nowrap font-heading text-xs font-bold text-slate-800 sm:text-sm">
            {title}
          </div>

          <div className="mt-0.5 whitespace-nowrap eyebrow-badge text-[9px] text-slate-400 sm:text-[10px] normal-case font-medium">
            {description}
          </div>
        </div>

      </div>
    </div>
  )
}