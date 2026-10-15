import React from 'react'
import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Users,
  BriefcaseBusiness,
  MapPin,
} from 'lucide-react'
import { CAREER_STATS } from './careersData'

interface CareersHeroProps {
  onExplorePositions: () => void
}

export const CareersHero: React.FC<CareersHeroProps> = ({
  onExplorePositions,
}) => {
  return (
    <section
      id="careers-hero"
      aria-label="Careers at Cloudswan Solution"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-100/80 border-b border-slate-200/80 pt-8 pb-16 sm:pb-20 lg:pt-12 lg:pb-24"
    >
      {/* Background Ambient Glows & Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-tr from-accent-500/10 via-orange-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-36 -left-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0f172a 1px, transparent 1px),
              linear-gradient(90deg, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Eyebrow, Main Headline, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-xs animate-[fadeDown_.6s_ease-out_both]">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span>CAREERS AT CLOUDSWAN</span>
              <span className="text-accent-300">•</span>
              <span className="text-slate-600 font-medium normal-case">Coimbatore </span>
            </div>

            {/* Main Heading with Stylized SVG Underline */}
            <div className="space-y-2">
              <h1 className="display-h1 text-slate-900">
                Build Your Future{' '}
                <span className="relative inline-block text-accent-500 whitespace-nowrap">
                  With Us
                  {/* Stylized Curved Hand-drawn Underline Accent matching Home Page */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-accent-500 fill-none overflow-visible"
                    viewBox="0 0 250 18"
                    height="14"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 3,13 C 65,4 185,2 247,11 C 190,17 70,16 10,14"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="lead-paragraph text-slate-600 max-w-2xl">
              Join our team of passionate trainers and help learners develop the technical skills they need to succeed in today's digital world.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 font-heading text-xs font-semibold text-slate-700 bg-white/90 border border-slate-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="w-6 h-6 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-accent-500" />
                </div>
                <span>Full-Time & Part-Time Opportunities</span>
              </div>
              <div className="flex items-center gap-2.5 font-heading text-xs font-semibold text-slate-700 bg-white/90 border border-slate-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span>Two Coimbatore Branches</span>
              </div>
              <div className="flex items-center gap-2.5 font-heading text-xs font-semibold text-slate-700 bg-white/90 border border-slate-200/80 p-2.5 rounded-xl shadow-xs">
                <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
                <span>Collaborative Learning Environment</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onExplorePositions}
                className="group px-7 py-3.5 text-sm sm:text-base font-bold font-heading tracking-wide text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-accent-500/35 transition-all duration-200 flex items-center gap-2.5 cursor-pointer hover:-translate-y-0.5"
              >
                <Briefcase className="w-4.5 h-4.5" />
                <span>Explore Trainer Roles</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Modern Careers Visual */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">

              {/* Main Careers Showcase */}
              <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8">

                {/* Soft background accents */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-100/70 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-orange-50 blur-3xl" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600">
                      Careers at Cloudswan
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      Grow with
                      <span className="block text-orange-500">
                        Great People.
                      </span>
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20 sm:h-16 sm:w-16">
                    <Users className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                </div>

                <p className="relative z-10 mt-4 max-w-sm text-sm leading-6 text-slate-500">
                  Share your expertise, inspire learners, and help shape the next
                  generation of technology professionals.
                </p>

                {/* Hiring Status */}
                <div className="relative z-10 mt-6 flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50/80 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">
                      Trainer Opportunities
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Full-time & part-time positions
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-orange-200 bg-white px-2.5 py-1 text-[10px] font-bold text-orange-600">
                    JOIN US
                  </span>
                </div>

                {/* Opportunity Highlights */}
                <div className="relative z-10 mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* Branch 1 */}
                  <div className="group rounded-2xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-slate-900">
                      Gandhipuram
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Coimbatore Branch
                    </p>

                    <div className="mt-3 h-1 w-8 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-14" />
                  </div>

                  {/* Branch 2 */}
                  <div className="group rounded-2xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <h4 className="mt-4 text-sm font-bold text-slate-900">
                      Saravanampatti
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Coimbatore Branch
                    </p>

                    <div className="mt-3 h-1 w-8 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-14" />
                  </div>
                </div>

                {/* Bottom Message */}
                <div className="relative z-10 mt-5 border-t border-slate-100 pt-5 text-left">
                  <p className="text-sm font-bold text-slate-900">
                    Make an Impact Through Teaching
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Bring your knowledge, experience, and passion for learning
                    to the Cloudswan team.
                  </p>
                </div>

              </div>



            </div>
          </div>
        </div>

        {/* Bottom Metrics Ribbon */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CAREER_STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-xs text-center transition-transform hover:-translate-y-0.5"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {stat.value}
                </div>
                <div className="font-heading text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="caption-text text-slate-500 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
