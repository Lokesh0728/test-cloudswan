import React from 'react'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from 'lucide-react'

interface AboutHeroProps {
  onNavigateHome?: () => void
  onExploreCourses?: () => void
  onOpenEnquiry?: () => void
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  onNavigateHome: _onNavigateHome,
  onExploreCourses,
  onOpenEnquiry,
}) => {
  return (
    <section
      id="about-hero"
      aria-label="About Cloudswan Solution"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large soft orange glow */}
        <div
          className="
            absolute
            -right-48
            -top-48
            h-[600px]
            w-[600px]
            rounded-full
            bg-orange-100/50
            blur-[140px]
            animate-[ambientMove_10s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            -bottom-48
            -left-48
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-50
            blur-[120px]
            animate-[ambientMoveReverse_12s_ease-in-out_infinite]
          "
        />

        {/* Vertical decorative line */}
        <div
          className="
            absolute
            right-[8%]
            top-0
            hidden
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-orange-200
            to-transparent
            lg:block
          "
        />

        {/* Decorative circles */}
        <div
          className="
            absolute
            right-[4%]
            top-[20%]
            h-3
            w-3
            rounded-full
            bg-orange-500
            animate-[float_4s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            right-[13%]
            top-[65%]
            h-2
            w-2
            rounded-full
            bg-orange-300
            animate-[float_5s_ease-in-out_1s_infinite]
          "
        />

        <div
          className="
            absolute
            left-[7%]
            top-[35%]
            h-2
            w-2
            rounded-full
            bg-orange-400
            animate-[float_4.5s_ease-in-out_.5s_infinite]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            min-h-[620px]
            items-center
            py-20
            sm:min-h-[650px]
            lg:py-24
          "
        >
          <div className="w-full">



            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <div className="relative max-w-6xl">
              {/* Animated orange underline */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[7px]
                  left-0
                  h-3
                  w-[235px]
                  origin-left
                  bg-orange-100
                  animate-[lineReveal_1s_ease-out_.7s_both]
                  sm:w-[300px]
                  lg:w-[390px]
                "
              />

              <h1
                className="
                  relative
                  text-5xl
                  font-black
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-slate-950
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[82px]
                  xl:text-[92px]
                "
              >
                <span
                  className="
                    block
                    animate-[titleReveal_.8s_cubic-bezier(.16,1,.3,1)_both]
                  "
                >
                  Building
                </span>

                <span
                  className="
                    block
                    animate-[titleReveal_.8s_cubic-bezier(.16,1,.3,1)_.15s_both]
                  "
                >
                  Skills.
                </span>

                <span
                  className="
                    relative
                    z-10
                    block
                    text-orange-500
                    animate-[titleReveal_.8s_cubic-bezier(.16,1,.3,1)_.3s_both]
                  "
                >
                  Shaping Careers.
                </span>
              </h1>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div
              className="
                mt-8
                max-w-2xl
                animate-[fadeUp_.8s_ease-out_.55s_both]
              "
            >
              <p
                className="
                  text-base
                  leading-7
                  text-slate-600
                  sm:text-lg
                  sm:leading-8
                "
              >
                Cloudswan Solution provides practical, career-focused
                training programs that help students and professionals
                develop the technical skills required to build a
                successful career in the IT industry.
              </p>
            </div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
                animate-[fadeUp_.8s_ease-out_.7s_both]
              "
            >
              {/* Primary */}
              <button
                type="button"
                onClick={onExploreCourses}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-orange-600
                  hover:shadow-orange-500/30
                "
              >
                <BookOpen className="h-4 w-4" />

                <span>
                  Explore Courses
                </span>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Secondary */}
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-200
                  hover:bg-orange-50
                  hover:text-orange-600
                "
              >
                <span>
                  Talk to a Counselor
                </span>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    text-orange-500
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>

            {/* =================================================
                BOTTOM INFORMATION
            ================================================= */}

            <div
              className="
                mt-12
                flex
                flex-col
                gap-6
                border-t
                border-slate-100
                pt-7
                sm:flex-row
                sm:items-center
                sm:gap-8
                animate-[fadeUp_.8s_ease-out_.85s_both]
              "
            >
              {/* Item 1 */}
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-orange-50
                  "
                >
                  <CheckCircle2 className="h-4 w-4 text-orange-500" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Learning
                  </p>

                  <p className="text-xs font-bold text-slate-800">
                    Practical Training
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              {/* Item 2 */}
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-orange-50
                  "
                >
                  <CheckCircle2 className="h-4 w-4 text-orange-500" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Courses
                  </p>

                  <p className="text-xs font-bold text-slate-800">
                    Industry Focused
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              {/* Item 3 */}
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-orange-50
                  "
                >
                  <CheckCircle2 className="h-4 w-4 text-orange-500" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Career
                  </p>

                  <p className="text-xs font-bold text-slate-800">
                    Guidance & Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DECORATIVE SIDE ELEMENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-1/2
          hidden
          -translate-y-1/2
          lg:block
        "
      >
        <div
          className="
            relative
            h-44
            w-44
            rounded-full
            border
            border-orange-100
            animate-[slowRotate_20s_linear_infinite]
          "
        >
          <div
            className="
              absolute
              -right-1
              top-1/2
              h-2
              w-2
              -translate-y-1/2
              rounded-full
              bg-orange-500
              shadow-lg
              shadow-orange-500/40
            "
          />

          <div
            className="
              absolute
              bottom-5
              left-1/2
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-orange-300
            "
          />
        </div>
      </div>

      {/* =====================================================
          BOTTOM BORDER
      ===================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-100" />

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(45px);
            clip-path: inset(100% 0 0 0);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes lineReveal {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes ambientMove {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-35px, 25px);
          }
        }

        @keyframes ambientMoveReverse {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -25px);
          }
        }

        @keyframes slowRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}