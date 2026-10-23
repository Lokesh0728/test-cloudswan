import React from 'react'
import {
  Clock,
  Laptop,
  Star,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  Eye,
  Terminal,
  Brain,
  Cloud,
  Shield,
  Globe,
  Languages,
  TrendingUp,
  Briefcase,
} from 'lucide-react'
import type { CatalogCourse } from '../../data/coursesCatalogData'

interface CourseCardProps {
  course: CatalogCourse
  viewMode?: 'grid' | 'list'
  onNavigate: (slug: string) => void
  onOpenEnquiry: (courseName: string) => void
  onQuickView?: (course: CatalogCourse) => void
  onSelectTopic?: (topic: string) => void
}

// Render an authoritative monochrome domain icon
function renderDomainIcon(course: CatalogCourse) {
  const id = course.id.toLowerCase()
  const cat = course.categoryId

  if (cat === 'language-training') {
    return id.includes('ielts') ? (
      <Languages className="w-3.5 h-3.5 text-slate-500 shrink-0" />
    ) : (
      <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
    )
  }
  if (cat === 'global-certifications') {
    return <Award className="w-3.5 h-3.5 text-slate-500 shrink-0" />
  }
  if (cat === 'general-training') {
    return id.includes('aptitude') ? (
      <Brain className="w-3.5 h-3.5 text-slate-500 shrink-0" />
    ) : (
      <Briefcase className="w-3.5 h-3.5 text-slate-500 shrink-0" />
    )
  }
  if (id.includes('ai') || id.includes('ml') || id.includes('data')) {
    return <Brain className="w-3.5 h-3.5 text-slate-500 shrink-0" />
  }
  if (id.includes('cloud') || id.includes('devops') || id.includes('aws') || id.includes('azure')) {
    return <Cloud className="w-3.5 h-3.5 text-slate-500 shrink-0" />
  }
  if (id.includes('security')) {
    return <Shield className="w-3.5 h-3.5 text-slate-500 shrink-0" />
  }
  if (id.includes('marketing')) {
    return <TrendingUp className="w-3.5 h-3.5 text-slate-500 shrink-0" />
  }
  return <Terminal className="w-3.5 h-3.5 text-slate-500 shrink-0" />
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  viewMode = 'grid',
  onNavigate,
  onOpenEnquiry,
  onQuickView,
  onSelectTopic,
}) => {

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'Hot':
      case 'Trending':
        return 'bg-orange-50 text-accent-700 border border-orange-200/80 font-bold'
      case 'Flagship':
        return 'bg-slate-900 text-white font-bold'
      case 'Global':
      case 'Certified':
        return 'bg-amber-50 text-amber-800 border border-amber-200/80 font-semibold'
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-200/80 font-semibold'
    }
  }

  // Render visual 3-level difficulty meter
  const renderLevelMeter = () => {
    const lvl = course.levelCategory
    return (
      <div className="flex items-center gap-1.5 min-w-0" title={`Level: ${course.level}`}>
        <div className="flex items-center gap-0.5 shrink-0">
          <span
            className={`w-1.5 h-3 rounded-xs ${
              lvl === 'beginner' || lvl === 'intermediate' || lvl === 'advanced' || lvl === 'all-levels'
                ? 'bg-accent-500'
                : 'bg-slate-200'
            }`}
          />
          <span
            className={`w-1.5 h-3 rounded-xs ${
              lvl === 'intermediate' || lvl === 'advanced' || lvl === 'all-levels'
                ? 'bg-accent-500'
                : 'bg-slate-200'
            }`}
          />
          <span
            className={`w-1.5 h-3 rounded-xs ${
              lvl === 'advanced' || lvl === 'all-levels' ? 'bg-accent-500' : 'bg-slate-200'
            }`}
          />
        </div>
        <span className="truncate text-xs text-slate-700 font-medium">{course.level}</span>
      </div>
    )
  }

  // -------------------------------------------------------------
  // LIST VIEW LAYOUT
  // -------------------------------------------------------------
  if (viewMode === 'list') {
    return (
      <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
        {/* Top Subtle Brand Stripe */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-slate-100 group-hover:bg-accent-500 transition-colors duration-300" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Main Info Area */}
          <div className="flex-1 min-w-0">
            {/* Top Domain & Status Strip */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 eyebrow-badge text-[10.5px] px-2.5 py-0.5 rounded-lg bg-slate-100/90 text-slate-700 border border-slate-200/80 font-semibold">
                {renderDomainIcon(course)}
                <span>{course.categoryName}</span>
              </span>

              {course.badge && (
                <span className={`eyebrow-badge text-[10px] px-2 py-0.5 rounded-lg ${getBadgeStyle(course.badge)}`}>
                  {course.badge}
                </span>
              )}

              {/* Pulsing Next Batch Pill */}
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200/60">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span>{course.nextBatchInfo ? course.nextBatchInfo.split('&')[0] : 'Batches Open'}</span>
              </span>

              {/* Rating Pill */}
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 ml-auto sm:ml-0 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-200/60">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <span>{course.rating.toFixed(1)}</span>
                <span className="text-slate-400 font-normal">({course.reviewsCount})</span>
              </div>
            </div>

            {/* Title in Secondary Orange Color */}
            <h3 className="display-h4 transition-colors">
              <a
                href={course.slug}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate(course.slug)
                }}
                className="text-accent-600 hover:text-accent-700 hover:underline focus:outline-none font-bold"
              >
                {course.name}
              </a>
            </h3>

            <p className="body-subtext text-slate-600 mt-1 line-clamp-2 text-xs sm:text-sm">
              {course.tagline}
            </p>

            {/* Interactive Tech Tags */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              <span className="caption-text text-[11px] text-slate-400 font-semibold mr-1">
                Topics:
              </span>
              {course.keyTopics.slice(0, 5).map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => onSelectTopic && onSelectTopic(topic)}
                  className="caption-text text-[11px] px-2 py-0.5 rounded-md bg-slate-100 hover:bg-orange-50 hover:text-accent-600 hover:border-orange-200 border border-slate-200/60 text-slate-700 font-medium transition-colors cursor-pointer"
                  title={`Filter by ${topic}`}
                >
                  {topic}
                </button>
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
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="font-semibold text-slate-800">{course.duration}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Classroom &amp; Live</span>
              </span>
              {renderLevelMeter()}
              {course.hasPlacement && (
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>100% Placement</span>
                </span>
              )}
            </div>
          </div>

          {/* Action Area */}
          <div className="flex sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between sm:justify-end gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">

            <button
              type="button"
              onClick={() => onOpenEnquiry(course.name)}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-heading font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-all cursor-pointer shadow-2xs"
            >
              Enquire
            </button>

            {onQuickView && (
              <button
                type="button"
                onClick={() => onQuickView(course)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-heading font-bold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-xl transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-slate-500" />
                <span>Quick Peek</span>
              </button>
            )}

            <a
              href={course.slug}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(course.slug)
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-xs shadow-accent-500/20 hover:shadow-md transition-all text-center cursor-pointer"
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
  // GRID VIEW LAYOUT (PREMIUM BESPOKE CARD)
  // -------------------------------------------------------------
  return (
    <div className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden h-full">
      {/* Top Subtle Brand Accent Line */}
      <div className="h-[2.5px] w-full bg-slate-100 group-hover:bg-accent-500 transition-colors duration-300" />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Top Header Tag Strip */}
        <div className="flex items-center justify-between gap-2 mb-3 shrink-0">
          {/* Domain Icon & Pill */}
          <span className="inline-flex items-center gap-1.5 eyebrow-badge text-[10px] px-2.5 py-1 rounded-xl bg-slate-100/90 text-slate-700 border border-slate-200/80 font-semibold">
            {renderDomainIcon(course)}
            <span className="truncate max-w-[130px]">{course.categoryName}</span>
          </span>

          <div className="flex items-center gap-1.5 shrink-0">
            {course.badge && (
              <span className={`eyebrow-badge text-[9.5px] px-2 py-0.5 rounded-lg ${getBadgeStyle(course.badge)}`}>
                {course.badge}
              </span>
            )}

            {/* Rating Pill */}
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-800 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-200/70">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
              <span>{course.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Course Title - Styled in Secondary Orange Color */}
        <h3 className="display-card-title h-[52px] sm:h-[56px] line-clamp-2 overflow-hidden flex items-start">
          <a
            href={course.slug}
            onClick={(e) => {
              e.preventDefault()
              onNavigate(course.slug)
            }}
            className="text-accent-600 hover:text-accent-700 hover:underline focus:outline-none transition-colors font-bold"
          >
            {course.name}
          </a>
        </h3>

        {/* Tagline - 2-line height */}
        <p className="body-subtext text-slate-600 mt-1 line-clamp-2 h-[38px] overflow-hidden flex items-start text-xs sm:text-[13px] leading-relaxed">
          {course.tagline}
        </p>

        {/* Feature Specs Matrix - Clean & Unified */}
        <div className="mt-4 grid grid-cols-2 gap-2 bg-slate-50/80 p-2.5 rounded-2xl border border-slate-100 caption-text text-slate-600 h-[68px] shrink-0 items-center">
          <div className="flex items-center gap-1.5 min-w-0">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate font-bold text-slate-800">{course.duration}</span>
          </div>

          <div className="min-w-0">{renderLevelMeter()}</div>

          <div className="flex items-center gap-1.5 min-w-0">
            <Laptop className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">Classroom &amp; Live</span>
          </div>

          <div className="flex items-center gap-1.5 min-w-0">
            {course.hasPlacement ? (
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold truncate">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>100% Placement</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-slate-600 truncate">
                <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>ISO Certified</span>
              </span>
            )}
          </div>
        </div>

        {/* Interactive Topic Tags */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 shrink-0">
          <div className="caption-text text-slate-400 text-[11px] mb-1.5 font-medium h-4 flex items-center justify-between">
            <span>Curriculum Highlights:</span>
            {course.nextBatchInfo && (
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="truncate max-w-[110px]">
                  {course.nextBatchInfo.split('&')[0]}
                </span>
              </span>
            )}
          </div>
          <div className="h-[28px] overflow-hidden flex flex-wrap items-center gap-1.5">
            {course.keyTopics.slice(0, 3).map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => onSelectTopic && onSelectTopic(topic)}
                className="caption-text text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-orange-50 hover:text-accent-600 hover:border-orange-200 border border-slate-200/60 text-slate-700 font-medium truncate max-w-[125px] transition-colors cursor-pointer"
                title={`Filter by ${topic}`}
              >
                {topic}
              </button>
            ))}
            {course.keyTopics.length > 3 && (
              <button
                type="button"
                onClick={() => onQuickView && onQuickView(course)}
                className="caption-text text-[11px] text-slate-400 hover:text-accent-600 px-1 font-semibold shrink-0 cursor-pointer"
                title="View all topics"
              >
                +{course.keyTopics.length - 3}
              </button>
            )}
          </div>
        </div>

        {/* Social Proof / Student Stats */}
        <div className="mt-auto pt-3 flex items-center justify-between caption-text text-slate-400 text-xs h-8 shrink-0">
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-medium text-slate-600">{course.studentsTrained}</span>
          </span>
          <span className="font-semibold text-slate-700">
            {course.modulesCount} Modules
          </span>
        </div>
      </div>

      {/* Card Action Footer with Quick Peek & View Syllabus */}
      <div className="p-4 sm:p-5 pt-0 bg-white shrink-0">
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
          {/* Quick Peek Button */}
          {onQuickView && (
            <button
              type="button"
              onClick={() => onQuickView(course)}
              className="py-2.5 px-4 text-xs font-heading font-bold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-xl transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              title="Quick Syllabus Peek"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>Peek</span>
            </button>
          )}

          {/* Primary View Syllabus Button */}
          <a
            href={course.slug}
            onClick={(e) => {
              e.preventDefault()
              onNavigate(course.slug)
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs sm:text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-xs shadow-accent-500/20 hover:shadow-md transition-all text-center cursor-pointer"
          >
            <span>View Syllabus</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}
