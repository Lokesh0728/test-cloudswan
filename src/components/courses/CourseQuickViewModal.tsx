import React, { useEffect } from 'react'
import {
  X,
  Star,
  Clock,
  Laptop,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Calendar,
  Layers,
} from 'lucide-react'
import type { CatalogCourse } from '../../data/coursesCatalogData'

interface CourseQuickViewModalProps {
  course: CatalogCourse | null
  isOpen: boolean
  onClose: () => void
  onNavigate: (slug: string) => void
  onOpenEnquiry: (courseName: string) => void
  onSelectTopic?: (topic: string) => void
}

export const CourseQuickViewModal: React.FC<CourseQuickViewModalProps> = ({
  course,
  isOpen,
  onClose,
  onNavigate,
  onOpenEnquiry,
  onSelectTopic,
}) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !course) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden z-10 animate-scale-in"
      >
        {/* Header Ribbon / Gradient Backdrop */}
        <div className="relative p-6 sm:p-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden shrink-0">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-500/15 blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badges & Rating Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-3 pr-12">
            <span className="eyebrow-badge text-[10px] px-2.5 py-1 rounded-lg bg-white/15 text-white border border-white/20 font-semibold">
              {course.categoryName}
            </span>

            {course.badge && (
              <span className="eyebrow-badge text-[10px] px-2.5 py-1 rounded-lg bg-accent-500 text-white font-bold">
                {course.badge}
              </span>
            )}

            <div className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 px-2.5 py-1 rounded-lg text-amber-300 border border-white/10">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
              <span className="text-white font-bold">{course.rating.toFixed(1)}</span>
              <span className="text-white/70 font-normal">({course.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <h2
            id="quick-view-title"
            className="display-h3 text-accent-400 text-xl sm:text-2xl font-bold pr-8"
          >
            {course.name}
          </h2>
          <p className="body-subtext text-slate-300 mt-2 text-xs sm:text-sm max-w-xl">
            {course.tagline}
          </p>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 flex-1">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-orange-100/80 text-accent-600 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="caption-text text-[10px] text-slate-500 uppercase block font-bold">
                  Duration
                </span>
                <span className="text-xs font-bold text-slate-800 truncate block">
                  {course.duration}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="caption-text text-[10px] text-slate-500 uppercase block font-bold">
                  Level
                </span>
                <span className="text-xs font-bold text-slate-800 truncate block">
                  {course.level}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0">
                <Laptop className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="caption-text text-[10px] text-slate-500 uppercase block font-bold">
                  Mode
                </span>
                <span className="text-xs font-bold text-slate-800 truncate block">
                  Classroom & Live
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="caption-text text-[10px] text-slate-500 uppercase block font-bold">
                  Placement
                </span>
                <span className="text-xs font-bold text-slate-800 truncate block">
                  {course.hasPlacement ? '100% Placement' : 'ISO Certified'}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
              Course Overview
            </h4>
            <p className="body-paragraph text-slate-700 text-sm leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Key Topics & Tools */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-accent-500" />
                <span>Core Curriculum &amp; Tech Stack Covered</span>
              </h4>
              <span className="caption-text text-[11px] text-slate-400">Click to filter</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.keyTopics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => {
                    if (onSelectTopic) {
                      onSelectTopic(topic)
                      onClose()
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-orange-50 hover:text-accent-600 hover:border-orange-200 border border-slate-200/80 text-slate-700 font-heading font-semibold text-xs transition-all cursor-pointer shadow-2xs"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Curriculum Stats & Next Batch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 shadow-2xs">
                <BookOpen className="w-4 h-4 text-accent-500" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-heading block">
                  {course.modulesCount} In-Depth Modules
                </span>
                <span className="caption-text text-[11px] text-slate-500">
                  {course.projectsCount ? `${course.projectsCount} Capstone Projects` : 'Hands-on practical labs'}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/70 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-orange-200 flex items-center justify-center text-accent-600 shrink-0 shadow-2xs">
                <Calendar className="w-4 h-4 text-accent-500" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-heading block">
                  {course.nextBatchInfo || 'Weekday & Weekend Batches'}
                </span>
                <span className="caption-text text-[11px] text-accent-700 font-medium">
                  Gandhipuram &amp; Saravanampatti
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              onOpenEnquiry(course.name)
              onClose()
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200/90 shadow-2xs transition-all cursor-pointer text-center"
          >
            Enquire &amp; Get Fee Details
          </button>

          <button
            type="button"
            onClick={() => {
              onNavigate(course.slug)
              onClose()
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 shadow-md shadow-accent-500/25 transition-all cursor-pointer text-center"
          >
            <span>View Full Syllabus &amp; Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
