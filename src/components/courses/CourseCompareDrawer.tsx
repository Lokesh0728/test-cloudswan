import React from 'react'
import {
  X,
  Scale,
  Star,
  Clock,
  GraduationCap,
  Laptop,
  CheckCircle2,
  Award,
  ArrowRight,
  Trash2,
} from 'lucide-react'
import type { CatalogCourse } from '../../data/coursesCatalogData'

interface CourseCompareDrawerProps {
  selectedCourses: CatalogCourse[]
  onRemoveCourse: (id: string) => void
  onClearAll: () => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  onNavigate: (slug: string) => void
  onOpenEnquiry: (courseName: string) => void
}

export const CourseCompareDrawer: React.FC<CourseCompareDrawerProps> = ({
  selectedCourses,
  onRemoveCourse,
  onClearAll,
  isOpen,
  setIsOpen,
  onNavigate,
  onOpenEnquiry,
}) => {
  if (selectedCourses.length === 0) return null

  return (
    <>
      {/* 1. Floating Bottom Dock Bar (When 1+ courses are selected) */}
      {!isOpen && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 animate-fade-up max-w-[95vw]">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 text-white shadow-2xl border border-slate-700/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-accent-500 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-accent-500/30">
                <Scale className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-heading font-bold text-slate-100 block">
                  Compare Courses ({selectedCourses.length}/3)
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:block">
                  Side-by-side syllabus &amp; career specs
                </span>
              </div>
            </div>

            {/* Selected Thumbs */}
            <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-slate-800">
              {selectedCourses.map((c) => (
                <span
                  key={c.id}
                  className="text-[11px] font-semibold bg-slate-800 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg truncate max-w-[140px]"
                >
                  {c.shortTitle || c.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-2">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-xs font-heading font-bold transition-all shadow-md shadow-accent-500/25 cursor-pointer"
              >
                Compare Now
              </button>
              <button
                type="button"
                onClick={onClearAll}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                title="Clear selections"
                aria-label="Clear selections"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Full Comparison Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden z-10 animate-scale-in"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent-500 text-white flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    Side-by-Side Course Comparison
                  </h3>
                  <p className="caption-text text-slate-400 text-xs">
                    Compare key criteria to choose the best curriculum for your career path
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClearAll}
                  className="text-xs text-slate-400 hover:text-white font-medium px-2 py-1 transition-colors"
                >
                  Clear All
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  aria-label="Close comparison"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Comparison Table / Grid Body */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              <div
                className={`grid gap-4 sm:gap-6 ${
                  selectedCourses.length === 1
                    ? 'grid-cols-1 max-w-md mx-auto'
                    : selectedCourses.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {selectedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between space-y-4 relative"
                  >
                    {/* Remove Pill */}
                    <button
                      type="button"
                      onClick={() => onRemoveCourse(course.id)}
                      className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                      title="Remove from comparison"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div>
                      {/* Category & Badge */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-2 pr-6">
                        <span className="eyebrow-badge text-[9px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                          {course.categoryName}
                        </span>
                        {course.badge && (
                          <span className="eyebrow-badge text-[9px] px-2 py-0.5 rounded-md bg-accent-500 text-white font-bold">
                            {course.badge}
                          </span>
                        )}
                      </div>

                      {/* Title in Secondary Orange Color */}
                      <h4 className="font-heading font-bold text-base text-accent-600 leading-snug">
                        {course.name}
                      </h4>
                      <p className="caption-text text-slate-500 text-xs mt-1 line-clamp-2">
                        {course.tagline}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 mt-2">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                        <span>{course.rating.toFixed(1)}</span>
                        <span className="text-slate-400 font-normal">
                          ({course.reviewsCount} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Criteria Spec Rows */}
                    <div className="space-y-2 pt-3 border-t border-slate-200/70 text-xs text-slate-700">
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>Duration</span>
                        </span>
                        <span className="font-bold text-slate-800">{course.duration}</span>
                      </div>

                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                          <span>Skill Level</span>
                        </span>
                        <span className="font-semibold text-slate-800">{course.level}</span>
                      </div>

                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <Laptop className="w-3.5 h-3.5 text-slate-400" />
                          <span>Delivery</span>
                        </span>
                        <span className="font-medium text-slate-800">Classroom &amp; Live</span>
                      </div>

                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>Placement</span>
                        </span>
                        <span
                          className={`font-bold ${
                            course.hasPlacement ? 'text-emerald-600' : 'text-slate-500'
                          }`}
                        >
                          {course.hasPlacement ? '100% Placement' : 'ISO Certified'}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-slate-400" />
                          <span>Curriculum</span>
                        </span>
                        <span className="font-semibold text-slate-800">
                          {course.modulesCount} Modules
                        </span>
                      </div>
                    </div>

                    {/* Key Topics */}
                    <div>
                      <span className="caption-text text-[10px] text-slate-400 uppercase font-bold block mb-1.5">
                        Key Technologies Covered:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {course.keyTopics.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-slate-200/70 space-y-2">
                      <button
                        type="button"
                        onClick={() => {
                          onNavigate(course.slug)
                          setIsOpen(false)
                        }}
                        className="w-full py-2 px-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-heading font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
                      >
                        <span>Full Syllabus</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          onOpenEnquiry(course.name)
                          setIsOpen(false)
                        }}
                        className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/90 text-slate-700 font-heading font-semibold text-xs transition-all cursor-pointer"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
