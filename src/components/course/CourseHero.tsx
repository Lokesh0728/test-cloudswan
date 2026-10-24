import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  MapPin,
  ChevronRight,
  Home,
  Star,
  Laptop,
  Award,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import type { CourseData } from '../../types/course'
import { getCourseHeroImage } from '../../data/courses/courseHeroImages'

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
  const imageMeta = getCourseHeroImage(course)
  const [imageSrc, setImageSrc] = useState<string>(imageMeta.imageUrl)
  const [hasError, setHasError] = useState(false)

  // Reset image src when course changes
  useEffect(() => {
    setImageSrc(imageMeta.imageUrl)
    setHasError(false)
  }, [course.id, imageMeta.imageUrl])

  const handleImageError = () => {
    if (imageMeta.fallbackUrl && imageSrc !== imageMeta.fallbackUrl) {
      setImageSrc(imageMeta.fallbackUrl)
    } else {
      setHasError(true)
    }
  }

  // Render course headline with signature curved underline on "Coimbatore"
  const renderHeadline = () => {
    if (course.title.includes(' in Coimbatore')) {
      const parts = course.title.split(' in Coimbatore')
      const prefix = parts[0]
      const suffix = parts.slice(1).join(' in Coimbatore').trim()
      return (
        <>
          {prefix} in{' '}
          <span className="relative inline-block text-accent-500 whitespace-nowrap">
            Coimbatore
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
          {after}
        </>
      )
    }

    return course.title
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 border-b border-slate-200/80 pt-6 pb-12 sm:pb-16 lg:pt-8 lg:pb-20">
      {/* Background Lighting Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-tr from-accent-500/10 via-orange-400/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium flex-wrap">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-accent-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <button
            type="button"
            onClick={() => onNavigate('/courses')}
            className="hover:text-accent-600 transition-colors"
          >
            Courses
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-600 font-medium">IT Training</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-none">{course.shortTitle}</span>
        </nav>

        {/* Top Live Announcement & Location Bar */}
        <div className="mb-6 sm:mb-8 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/95 border border-slate-200/80 shadow-xs backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
            <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
            <span>Coimbatore Campus (Gandhipuram & Saravanampatti) • Live Online Batches</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-600 shrink-0 pt-1.5 sm:pt-0 border-t border-slate-100 sm:border-0">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span>Admissions Open for New Batch</span>
          </div>
        </div>

        {/* Main 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: High-Converting Headline, Value Propositions & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Track Eyebrow & Accreditation Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 shadow-2xs max-w-full">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse shrink-0" />
                <span className="font-heading font-bold uppercase tracking-wider text-accent-700 text-[10.5px] sm:text-xs">
                  {course.eyebrowBadge}
                </span>
              </div>
              <span className="text-accent-300 hidden sm:inline">•</span>
              <span className="font-semibold text-slate-600 hidden sm:inline text-xs">
                ISO 9001:2015 Certified
              </span>
            </div>

            {/* Catchy Main Headline & Subtitle */}
            <div className="space-y-2">
              <h1 className="display-h1 text-slate-900 tracking-tight leading-[1.15]">
                {renderHeadline()}
              </h1>
              <p className="display-h3 bg-gradient-to-r from-slate-900 via-slate-800 to-accent-600 bg-clip-text text-transparent pt-0.5 leading-snug">
                {course.tagline}
              </p>
            </div>

            {/* Hero Descriptive Overview */}
            <div className="space-y-2.5 text-slate-600 border-l-2 border-accent-500/30 pl-4 py-0.5">
              {course.heroDescription.slice(0, 2).map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? 'font-medium text-slate-700 text-sm sm:text-base leading-relaxed' : 'text-xs sm:text-sm text-slate-600 leading-relaxed'}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* High-Converting CTA Action Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onOpenEnquiry(`${course.shortTitle} - Free Counselling Session`)}
                className="w-full sm:w-auto justify-center px-6 py-3.5 text-sm sm:text-base font-bold font-heading tracking-wide text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] rounded-xl shadow-md shadow-accent-500/30 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>{course.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#course-curriculum"
                className="w-full sm:w-auto justify-center px-5 py-3.5 text-sm sm:text-base font-bold font-heading text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>{course.secondaryCtaText}</span>
              </a>
            </div>

            {/* Key Guarantees Row */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-5 sm:gap-x-7 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Prior Coding Mandatory</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {course.id.includes('aws')
                    ? 'Hands-on AWS Cloud Labs'
                    : course.id.includes('cyber')
                      ? 'Authorized Virtual Security Labs'
                      : course.id.includes('digital')
                        ? 'Live Budget Ad Campaigns'
                        : '100% Practical Hands-on Labs'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1:1 Dedicated Mentor Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Showcase with Domain-Specific Image & Micro-Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Ambient Lighting Glow Behind Image */}
            <div
              className={`absolute -inset-3 sm:-inset-5 bg-gradient-to-tr ${imageMeta.accentGradient} rounded-[2.5rem] blur-2xl opacity-75 pointer-events-none -z-10`}
            />

            {/* Main Visual Showcase Container Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-950 shadow-2xl shadow-slate-900/15 group">
              {/* Image Aspect Box */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                {!hasError ? (
                  <img
                    src={imageSrc}
                    alt={imageMeta.alt}
                    loading="eager"
                    fetchPriority="high"
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white text-center">
                    <Laptop className="w-12 h-12 text-accent-400 mb-2" />
                    <span className="font-heading font-bold text-lg">{course.shortTitle} Practical Labs</span>
                    <span className="text-xs text-slate-300 mt-1">CloudSwan Institute • Coimbatore</span>
                  </div>
                )}

                {/* Elegant Vignette Overlay for High Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/40 pointer-events-none" />

                {/* Top-Left Floating Alumni Rating Pill */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 backdrop-blur-md bg-slate-900/85 border border-white/20 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="font-bold">{imageMeta.stats?.rating || '4.9/5'}</span>
                  <span className="text-slate-300 text-[11px] font-normal">
                    ({imageMeta.stats?.reviews || '1,200+ Alumni'})
                  </span>
                </div>

                {/* Top-Right Floating Live Lab Badge */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 backdrop-blur-md bg-emerald-600/90 border border-emerald-400/30 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg text-[10.5px] font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>{imageMeta.badgeText}</span>
                </div>

                {/* Bottom Floating Glassmorphism Micro-Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 backdrop-blur-md bg-white/95 border border-white/60 shadow-xl rounded-2xl p-3 sm:p-4 text-left transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Zap className="w-4 h-4 text-accent-500 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold font-heading text-slate-900 truncate">
                        {course.shortTitle} Curriculum
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-accent-700 bg-accent-50 px-2 py-0.5 rounded-md border border-accent-200/60 shrink-0">
                      {imageMeta.stats?.labHours || '50+ Lab Hrs'}
                    </span>
                  </div>

                  {/* Core Tech Stack Tools Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {imageMeta.techPills.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-md border border-slate-200/80 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Seals Strip Under Image Frame */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center sm:justify-between gap-2.5 sm:gap-2 px-1 text-[11px] sm:text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                <span className="font-medium">ISO 9001:2015</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <Laptop className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="font-medium">Classroom & Online</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-medium">Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
