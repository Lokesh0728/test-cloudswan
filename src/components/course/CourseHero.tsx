import React from 'react'
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  MapPin,
  ChevronRight,
  Home,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseHeroProps {
  course: CourseData
  onOpenEnquiry: (subject?: string) => void
  onNavigate: (path: string) => void
}

export const CourseHero: React.FC<CourseHeroProps> = ({
  course,
  onOpenEnquiry,
  onNavigate,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 border-b border-slate-200/80 pt-6 pb-12 sm:pb-16 lg:pt-8 lg:pb-20">
      {/* Background Decorative Lighting Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-tr from-accent-500/10 via-orange-400/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-accent-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="hover:text-accent-600 cursor-pointer" onClick={() => onNavigate('/')}>Courses</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-none">{course.shortTitle}</span>
        </nav>

        {/* Top Announcement & Location Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 p-2.5 sm:px-4 sm:py-2 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-md">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="eyebrow-badge inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-600 border border-accent-500/20 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span>{course.eyebrowBadge}</span>
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium font-sans">
              <MapPin className="w-3.5 h-3.5 text-accent-500" />
              <span>Coimbatore Campus (Gandhipuram & Saravanampatti) • Online Batches</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Admissions Open for New Batch</span>
          </div>
        </div>

        {/* Centered Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Accreditation Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-xs text-[10.5px] sm:text-xs mx-auto">
            <div className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent-500 shrink-0" />
              <span className="whitespace-nowrap">100% Practical IT Training Institute</span>
            </div>
            <span className="hidden sm:inline text-accent-300">|</span>
            <span className="normal-case font-semibold text-slate-600 whitespace-nowrap">ISO 9001:2015 Certified</span>
          </div>

          {/* Catchy Main Headline & Subtitle Matching Home Page Hero */}
          <div className="space-y-3">
            <h1 className="display-h1 text-slate-900">
              {(() => {
                if (course.title.includes(' in Coimbatore')) {
                  const parts = course.title.split(' in Coimbatore')
                  const prefix = parts[0]
                  const suffix = parts.slice(1).join(' in Coimbatore').trim()
                  return (
                    <>
                      {prefix} in{' '}
                      <span className="relative inline-block text-accent-500 whitespace-nowrap">
                        Coimbatore
                        {/* Stylized Curved Hand-drawn Underline Accent */}
                        <svg
                          className="absolute -bottom-2 left-0 w-full text-accent-500 fill-none overflow-visible"
                          viewBox="0 0 250 18"
                          height="14"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M 3,13 C 65,4 185,2 247,11 C 190,17 70,16 10,14"
                            stroke="currentColor"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      {suffix ? ` ${suffix}` : null}
                    </>
                  )
                }

                if (course.title.includes('Coimbatore')) {
                  const [before, after] = course.title.split('Coimbatore')
                  return (
                    <>
                      {before}
                      <span className="relative inline-block text-accent-500 whitespace-nowrap">
                        Coimbatore
                        <svg
                          className="absolute -bottom-2 left-0 w-full text-accent-500 fill-none overflow-visible"
                          viewBox="0 0 250 18"
                          height="14"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M 3,13 C 65,4 185,2 247,11 C 190,17 70,16 10,14"
                            stroke="currentColor"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      {after}
                    </>
                  )
                }

                return course.title
              })()}
            </h1>
            <p className="display-h3 bg-gradient-to-r from-slate-900 via-slate-800 to-accent-600 bg-clip-text text-transparent pt-1 max-w-2xl mx-auto">
              {course.tagline}
            </p>
          </div>

          {/* Hero Descriptive Paragraphs */}
          <div className="space-y-3 max-w-3xl mx-auto text-slate-600">
            {course.heroDescription.map((p, idx) => (
              <p
                key={idx}
                className={idx === 0 ? 'font-medium text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed' : 'body-paragraph text-slate-600 leading-relaxed'}
              >
                {p}
              </p>
            ))}
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onOpenEnquiry(`${course.shortTitle} - Free Counselling Session`)}
              className="px-6 py-3.5 text-sm sm:text-base font-bold font-heading tracking-wide text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] rounded-xl shadow-md shadow-accent-500/30 transition-all flex items-center gap-2 group"
            >
              <span>{course.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#course-curriculum"
              className="px-5 py-3.5 text-sm sm:text-base font-bold font-heading text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>{course.secondaryCtaText}</span>
            </a>
          </div>

          {/* Quick Guarantees Row */}
          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 sm:gap-x-8 text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Prior Coding Mandatory</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {course.id.includes('aws')
                  ? 'Hands-on Production AWS Cloud Labs'
                  : course.id.includes('cyber')
                  ? 'Authorized Virtual Security Labs'
                  : '100% Practical Hands-on Labs'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>1:1 Dedicated Mentor Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
