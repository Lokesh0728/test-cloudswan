import React, { useState } from 'react'
import {
  Sparkles,
  CheckCircle2,
  Play,
  Pause,
  LayoutGrid,
  Zap,
  PhoneCall,
  ArrowRight,
} from 'lucide-react'
import {
  POPULAR_COURSES,
  COURSE_CATEGORY_TABS,
  type CourseCategoryFilter,
  type PopularCourse,
} from './popularCoursesData'
import { CONTACT_INFO } from '../../data/navigationData'

interface PopularCoursesSectionProps {
  onOpenEnquiry: (subject?: string) => void
}

interface TechTileProps {
  course: PopularCourse
  onClick: () => void
  isGrid?: boolean
}

const TechTile: React.FC<TechTileProps> = ({ course, onClick, isGrid }) => {
  const Icon = course.icon

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer text-center select-none ${isGrid
          ? 'w-full h-36 sm:h-40 p-4'
          : 'w-40 sm:w-44 h-36 sm:h-40 p-4 shrink-0'
        }`}
    >
      {/* Ambient Radial Color Glow on Hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
        style={{ backgroundColor: course.glowColor }}
      />

      {/* Vector Tech Logo with soft container and hover scale */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50/90 group-hover:bg-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-2.5 shadow-2xs group-hover:shadow-md border border-slate-100 group-hover:border-slate-200/60">
        <Icon size={44} />
      </div>

      {/* Tech Name Only (e.g., Python, Java, Full Stack) */}
      <span className="mt-3 text-sm sm:text-base font-bold text-slate-800 group-hover:text-accent-600 transition-colors tracking-tight font-heading">
        {course.shortName}
      </span>

      {/* Subtle Micro Enquire Action Indicator on Hover */}
      <span className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 eyebrow-badge text-accent-500 flex items-center gap-0.5">
        <span>Enquire</span>
        <span>→</span>
      </span>
    </button>
  )
}

export const PopularCoursesSection: React.FC<PopularCoursesSectionProps> = ({
  onOpenEnquiry,
}) => {
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee')
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] =
    useState<CourseCategoryFilter>('all')

  // Split into 2 tracks for alternating scrolling direction
  const track1Courses = POPULAR_COURSES.slice(0, 9)
  const track2Courses = POPULAR_COURSES.slice(9, 18)

  const filteredGridCourses =
    selectedCategory === 'all'
      ? POPULAR_COURSES
      : POPULAR_COURSES.filter((c) => c.category === selectedCategory)

  return (
    <div className="mb-20 lg:mb-24">
      {/* =========================================================
          SECTION HEADER
          Exact text from screenshot with clean, modern typography
      ========================================================= */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-accent-600 eyebrow-badge mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-accent-500" />
          <span>Industry-Accelerated Tech Tracks • 100% Practical Labs</span>
        </div>

        {/* Primary Requested Title */}
        <h2 className="display-h2 text-slate-900">
          Our Popular IT Training Courses in Coimbatore{' '}
          <span className="bg-gradient-to-r from-accent-500 via-orange-500 to-amber-500 bg-clip-text text-transparent block sm:inline">
            Cloudswan Solution
          </span>
        </h2>

        {/* Primary Requested Subtitle */}
        <p className="mt-4 lead-paragraph max-w-3xl mx-auto">
          Looking for the IT training institute in Coimbatore for Full Stack, Cloud,
          Data Science, Software Testing, or Digital Marketing?{' '}
          <strong className="text-slate-900 font-semibold font-heading">
            Cloudswan Solution
          </strong>{' '}
          offers advanced learning programs designed to match industry
          requirements.
        </p>

        {/* Quick Highlights Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 pt-5 border-t border-slate-200/70 caption-text font-semibold text-slate-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>18+ In-Demand Technologies</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Saravanampatti & Gandhipuram Campuses</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Weekday & Weekend Batches</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Guaranteed Placement Drives</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          VIEW MODE CONTROLS & ANIMATION TOGGLE
      ========================================================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 px-1">
        <div className="caption-text text-slate-500 text-center sm:text-left">
          Hover over any course to pause • Click to enquire
        </div>

        <div className="flex items-center gap-2">
          {viewMode === 'marquee' && (
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold font-heading text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title={isPaused ? 'Resume scroll' : 'Pause scroll'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-accent-600 fill-accent-600" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-500" />
                  <span>Pause</span>
                </>
              )}
            </button>
          )}

          {/* View Mode Switcher */}
          <div className="flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner">
            <button
              type="button"
              onClick={() => setViewMode('marquee')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold font-heading transition-all flex items-center gap-1.5 cursor-pointer ${viewMode === 'marquee'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
                }`}
            >
              <Zap className="w-3.5 h-3.5 text-accent-500" />
              <span>Animated Stream</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold font-heading transition-all flex items-center gap-1.5 cursor-pointer ${viewMode === 'grid'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
                }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-accent-500" />
              <span>Grid View</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================
          DISPLAY MODE 1: ANIMATED SCROLLING MARQUEE
          Dual-lane continuous drifting streams with edge gradient masks
      ========================================================= */}
      {viewMode === 'marquee' ? (
        <div className="space-y-4 sm:space-y-5">
          {/* Track 1: Smoothly scrolling Left */}
          <div className="relative overflow-hidden py-2">
            {/* Left & Right gradient edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

            <div
              className={`animate-marquee gap-4 sm:gap-5 ${isPaused ? 'pause-animation' : ''
                }`}
            >
              {[...track1Courses, ...track1Courses].map((course, idx) => (
                <TechTile
                  key={`track1-${course.id}-${idx}`}
                  course={course}
                  onClick={() => onOpenEnquiry(course.fullName)}
                />
              ))}
            </div>
          </div>

          {/* Track 2: Smoothly scrolling Right */}
          <div className="relative overflow-hidden py-2">
            {/* Left & Right gradient edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

            <div
              className={`animate-marquee-reverse gap-4 sm:gap-5 ${isPaused ? 'pause-animation' : ''
                }`}
            >
              {[...track2Courses, ...track2Courses].map((course, idx) => (
                <TechTile
                  key={`track2-${course.id}-${idx}`}
                  course={course}
                  onClick={() => onOpenEnquiry(course.fullName)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* =========================================================
            DISPLAY MODE 2: CLEAN GRID SHOWCASE
            Minimalist icon + name cards in a clean responsive grid
        ========================================================= */
        <div className="space-y-6">
          {/* Optional Category Pills in Grid View */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {COURSE_CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-heading whitespace-nowrap transition-all cursor-pointer ${isActive
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredGridCourses.map((course) => (
              <TechTile
                key={`grid-${course.id}`}
                course={course}
                onClick={() => onOpenEnquiry(course.fullName)}
                isGrid
              />
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
          BOTTOM HELP / COUNSELING PROMPT
      ========================================================= */}
      <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="p-3 rounded-2xl bg-white/10 text-accent-400 shrink-0 hidden sm:flex">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="display-card-title text-white">
              Not Sure Which Technology Path Matches Your Background?
            </h3>
            <p className="body-subtext text-slate-400 mt-0.5">
              Talk directly with our Lead Tech Architects at our Saravanampatti or
              Gandhipuram center for a free personalized career assessment.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() =>
              onOpenEnquiry(
                'IT Training in Coimbatore - Free Tech Stack Counseling'
              )
            }
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-heading tracking-wide text-slate-900 bg-white hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Free 1:1 Counseling</span>
            <ArrowRight className="w-4 h-4 text-accent-600" />
          </button>

          <a
            href={`tel:${CONTACT_INFO.coimbatorePhone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-heading tracking-wide text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-accent-400" />
            <span>Call Campus</span>
          </a>
        </div>
      </div>
    </div>
  )
}
