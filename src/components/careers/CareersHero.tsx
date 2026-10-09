import React from 'react'
import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
  Laptop,
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
              <span className="text-slate-600 font-medium normal-case">Coimbatore HQ</span>
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

          {/* Right Column: Modern Visual Representation of Teamwork, Growth & Tech */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Showcase Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white via-white to-slate-50 border border-slate-200/90 p-6 sm:p-7 shadow-xl shadow-slate-200/60 overflow-hidden">
                {/* Top Header Row of Dashboard */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-accent-500 text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-md shadow-accent-500/30">
                      CS
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-slate-900">
                        Cloudswan Tech Guild
                      </div>
                      <div className="caption-text text-slate-500">
                        Coimbatore Hub • Engineering & Design
                      </div>
                    </div>
                  </div>
                  <span className="eyebrow-badge px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-[10px]">
                    Actively Hiring
                  </span>
                </div>

                {/* Team Culture & Growth Snapshot */}
                <div className="py-5 space-y-4">
                  {/* Spotlight Item 1: Real-time Growth Track */}
                  <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-100 flex items-center justify-between transition-transform hover:-translate-y-0.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-orange-100 text-accent-600 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-accent-500" />
                      </div>
                      <div>
                        <div className="font-heading text-xs sm:text-sm font-bold text-slate-900">
                          Clear Career Trajectory
                        </div>
                        <div className="text-[11px] text-slate-500 font-sans">
                          Structured milestones & review cycles
                        </div>
                      </div>
                    </div>
                    <span className="font-heading text-xs font-bold text-accent-600">
                      Level 1 → Lead
                    </span>
                  </div>

                  {/* Spotlight Item 2: Sponsored Global Certifications */}
                  <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-100 flex items-center justify-between transition-transform hover:-translate-y-0.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-heading text-xs sm:text-sm font-bold text-slate-900">
                          100% Upskilling Budget
                        </div>
                        <div className="text-[11px] text-slate-500 font-sans">
                          AWS, GCP, Azure, RedHat & Seminars
                        </div>
                      </div>
                    </div>
                    <span className="eyebrow-badge text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      Sponsored
                    </span>
                  </div>

                  {/* Spotlight Item 3: Modern Tech Stack Grid */}
                  <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs font-heading font-semibold text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <Laptop className="w-3.5 h-3.5 text-accent-500" />
                        <span>Core Technology Stacks</span>
                      </span>
                      <span className="text-[11px] text-slate-400">Production Tier</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['React / Next.js', 'TypeScript', 'Node.js', 'Python AI', 'AWS Cloud', 'Docker', 'Figma', 'PostgreSQL'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-white border border-slate-200/80 text-[11px] font-heading font-medium text-slate-700 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Community Quote Card */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      <div className="w-6 h-6 rounded-full bg-accent-500 text-white font-bold text-[9px] flex items-center justify-center border-2 border-white shadow-2xs">
                        R
                      </div>
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center border-2 border-white shadow-2xs">
                        S
                      </div>
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-[9px] flex items-center justify-center border-2 border-white shadow-2xs">
                        K
                      </div>
                    </div>
                    <span className="text-slate-600 font-sans text-[11px]">
                      Collaborative, energetic & growing team
                    </span>
                  </div>
                  <span className="eyebrow-badge text-accent-600 font-bold">
                    Join Us
                  </span>
                </div>
              </div>

              {/* Decorative Corner Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/70 flex items-center gap-2.5 animate-[float_4s_ease-in-out_infinite]">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-heading text-slate-900">
                    High Work-Life Trust
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Transparent & Empathetic
                  </div>
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
