import React from 'react'
import {
  Clock,
  Laptop,
  GraduationCap,
  Star,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Users,
} from 'lucide-react'
import type { CatalogCourse } from '../../data/coursesCatalogData'

interface CourseCardProps {
  course: CatalogCourse
  viewMode?: 'grid' | 'list'
  onNavigate: (slug: string) => void
  onOpenEnquiry: (courseName: string) => void
}

const CATEGORY_THEMES: Record<
  CatalogCourse['categoryId'],
  { border: string; bg: string; text: string; badgeBg: string }
> = {
  'it-training': {
    border: 'border-blue-200/80 hover:border-accent-400',
    bg: 'bg-blue-50/60',
    text: 'text-blue-700',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  'language-training': {
    border: 'border-purple-200/80 hover:border-purple-400',
    bg: 'bg-purple-50/60',
    text: 'text-purple-700',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  'global-certifications': {
    border: 'border-amber-200/80 hover:border-amber-400',
    bg: 'bg-amber-50/60',
    text: 'text-amber-800',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  'general-training': {
    border: 'border-emerald-200/80 hover:border-emerald-400',
    bg: 'bg-emerald-50/60',
    text: 'text-emerald-700',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  viewMode = 'grid',
  onNavigate,
  onOpenEnquiry,
}) => {
  const theme = CATEGORY_THEMES[course.categoryId]

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'Hot':
      case 'Trending':
        return 'bg-rose-50 text-rose-600 border-rose-200/80'
      case 'Flagship':
        return 'bg-amber-50 text-amber-700 border-amber-200/80'
      case 'Certified':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
      case 'Global':
        return 'bg-sky-50 text-sky-700 border-sky-200/80'
      default:
        return 'bg-accent-50 text-accent-600 border-accent-200/80'
    }
  }

  // -------------------------------------------------------------
  // LIST VIEW LAYOUT
  // -------------------------------------------------------------
  if (viewMode === 'list') {
    return (
      <div
        className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-accent-400 p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Main Info Area */}
          <div className="flex-1 min-w-0">
            {/* Badges & Meta */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`eyebrow-badge text-[11px] px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}
              >
                {course.categoryName}
              </span>

              {course.badge && (
                <span
                  className={`eyebrow-badge text-[10px] px-2 py-0.5 rounded-full border flex items-center gap-1 ${getBadgeStyle(
                    course.badge
                  )}`}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{course.badge}</span>
                </span>
              )}

              {/* Rating */}
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 ml-auto sm:ml-0 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{course.rating.toFixed(1)}</span>
                <span className="text-slate-400 font-normal">({course.reviewsCount})</span>
              </div>
            </div>

            {/* Title & Tagline */}
            <h3 className="display-h4 text-slate-900 group-hover:text-accent-600 transition-colors">
              <a
                href={course.slug}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate(course.slug)
                }}
                className="hover:underline focus:outline-none"
              >
                {course.name}
              </a>
            </h3>

            <p className="body-subtext text-slate-600 mt-1 line-clamp-2">
              {course.tagline}
            </p>

            {/* Tech Tags */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {course.keyTopics.slice(0, 5).map((topic) => (
                <span
                  key={topic}
                  className="caption-text text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                >
                  {topic}
                </span>
              ))}
              {course.keyTopics.length > 5 && (
                <span className="caption-text text-[11px] text-slate-400">
                  +{course.keyTopics.length - 5} more
                </span>
              )}
            </div>

            {/* Quick Specs Strip */}
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 caption-text text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent-500" />
                <span className="font-semibold text-slate-700">{course.duration}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-slate-400" />
                <span>{course.mode}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                <span>{course.level}</span>
              </span>
              {course.hasPlacement && (
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Placement</span>
                </span>
              )}
            </div>
          </div>

          {/* Action Area */}
          <div className="flex sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between sm:justify-end gap-2.5 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
            <button
              type="button"
              onClick={() => onOpenEnquiry(course.name)}
              className="px-4 py-2 text-xs sm:text-sm font-heading font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl transition-all shadow-2xs text-center"
            >
              Enquire Now
            </button>
            <a
              href={course.slug}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(course.slug)
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-xs shadow-accent-500/20 hover:shadow-md transition-all text-center"
            >
              <span>View Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  // -------------------------------------------------------------
  // GRID VIEW LAYOUT (DEFAULT)
  // -------------------------------------------------------------
  return (
    <div
      className={`group relative bg-white rounded-2xl border border-slate-200/90 hover:border-accent-400/90 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden`}
    >
      {/* Top Accent Gradient Header Stripe */}
      <div className={`h-1.5 w-full bg-gradient-to-r from-accent-500 via-orange-400 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity`} />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Top Header Tag Strip */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`eyebrow-badge text-[10px] px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}
          >
            {course.categoryName}
          </span>

          <div className="flex items-center gap-1.5">
            {course.badge && (
              <span
                className={`eyebrow-badge text-[10px] px-2 py-0.5 rounded-full border flex items-center gap-1 ${getBadgeStyle(
                  course.badge
                )}`}
              >
                <Sparkles className="w-2.5 h-2.5" />
                <span>{course.badge}</span>
              </span>
            )}

            {/* Rating Pill */}
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{course.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="display-card-title text-slate-900 group-hover:text-accent-600 transition-colors">
          <a
            href={course.slug}
            onClick={(e) => {
              e.preventDefault()
              onNavigate(course.slug)
            }}
            className="hover:underline focus:outline-none"
          >
            {course.name}
          </a>
        </h3>

        {/* Tagline */}
        <p className="body-subtext text-slate-600 mt-1.5 line-clamp-2">
          {course.tagline}
        </p>

        {/* Feature Specs Matrix */}
        <div className="mt-4 grid grid-cols-2 gap-2 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 caption-text text-slate-600">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent-500 shrink-0" />
            <span className="truncate font-semibold text-slate-700">{course.duration}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{course.level}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Laptop className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">Classroom & Live</span>
          </div>

          <div className="flex items-center gap-1.5">
            {course.hasPlacement ? (
              <span className="flex items-center gap-1 text-emerald-600 font-semibold truncate">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>100% Placement</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-slate-600 truncate">
                <Award className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                <span>ISO Certified</span>
              </span>
            )}
          </div>
        </div>

        {/* Tech Topic Tags */}
        <div className="mt-3.5 pt-3 border-t border-slate-100">
          <div className="caption-text text-slate-400 text-[11px] mb-1.5 font-medium">
            Core Curriculum Highlights:
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {course.keyTopics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="caption-text text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
              >
                {topic}
              </span>
            ))}
            {course.keyTopics.length > 4 && (
              <span className="caption-text text-[11px] text-slate-400 px-1 font-medium">
                +{course.keyTopics.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Social Proof / Student Stats */}
        <div className="mt-auto pt-4 flex items-center justify-between caption-text text-slate-400 text-xs">
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span>{course.studentsTrained}</span>
          </span>
          <span className="font-medium text-slate-500">
            {course.modulesCount} Modules
          </span>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 sm:p-5 pt-0 bg-white">
        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onOpenEnquiry(course.name)}
            className="w-full py-2 px-3 text-xs sm:text-sm font-heading font-bold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-2xs text-center"
          >
            Enquire Now
          </button>

          <a
            href={course.slug}
            onClick={(e) => {
              e.preventDefault()
              onNavigate(course.slug)
            }}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs sm:text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-xs shadow-accent-500/20 hover:shadow-md transition-all text-center"
          >
            <span>View Syllabus</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}
