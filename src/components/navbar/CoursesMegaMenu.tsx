import React, { useState } from 'react'
import {
  ChevronRight,
  GraduationCap,
  Calendar,
  ArrowRight,
} from 'lucide-react'
import {
  COURSE_CATEGORIES,
  type CourseCategory,
  type CourseItem,
} from '../../data/navigationData'

interface CoursesMegaMenuProps {
  isOpen: boolean
  onCourseSelect: (course: CourseItem, category: CourseCategory) => void
  onOpenEnquiry: (courseName?: string) => void
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onViewAllCourses?: () => void
}

export const CoursesMegaMenu: React.FC<CoursesMegaMenuProps> = ({
  isOpen,
  onCourseSelect,
  onOpenEnquiry,
  onClose,
  onMouseEnter,
  onMouseLeave,
  onViewAllCourses,
}) => {
  // Pure Category Browser View
  const [activeCategoryId, setActiveCategoryId] = useState<string>('it-training')

  if (!isOpen) return null

  const activeCategory =
    COURSE_CATEGORIES.find((c) => c.id === activeCategoryId) ||
    COURSE_CATEGORIES[0]

  return (
    <div
      role="menu"
      aria-label="Courses Navigation Dropdown"
      className="absolute top-full left-0 right-0 w-full z-50 pt-2 pointer-events-none animate-in fade-in slide-in-from-top-1.5 duration-150"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="relative bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden ring-1 ring-black/5 pointer-events-auto transition-all"
        >
          {/* Invisible top hover bridge to ensure seamless cursor movement between trigger and card */}
          <div className="absolute -top-3 left-0 right-0 h-3 pointer-events-auto" aria-hidden="true" />

          {/* Top Info Banner */}
          <div className="px-6 py-2.5 bg-gradient-to-r from-slate-50 via-white to-accent-50/30 border-b border-slate-200/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-sm sm:text-base font-bold text-slate-800 tracking-tight font-heading">
                Explore Industry-Certified Programs & Career Tracks
              </span>
              <span className="hidden md:inline-flex eyebrow-badge px-2.5 py-0.5 rounded-full bg-accent-50 text-accent-600 border border-accent-200/70">
                {COURSE_CATEGORIES.length} Verticals • 30 Specializations
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onClose()
                  if (onViewAllCourses) onViewAllCourses()
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 shadow-xs shadow-accent-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>View All Courses (30+)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* MAIN CATEGORY-ONLY BROWSER VIEW */}
          <div className="grid grid-cols-12 min-h-[380px]">
            {/* Left Sub-menu / Navigation Rail (Main 5 Categories) */}
            <div className="col-span-12 md:col-span-5 border-r border-slate-200/80 bg-slate-50/70 p-3 sm:p-4 space-y-2">
              {/* Highlighted View All Courses Tile in Category Rail */}
              <button
                type="button"
                onClick={() => {
                  onClose()
                  if (onViewAllCourses) onViewAllCourses()
                }}
                className="w-full relative flex items-center justify-between p-3 sm:p-3.5 rounded-xl text-left transition-all border border-accent-300/80 bg-gradient-to-r from-orange-50/90 via-accent-50/50 to-white hover:border-accent-400 hover:shadow-xs group mb-2.5 overflow-hidden"
              >
                {/* Active Left Indicator Strip */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-500" />
                <div className="pl-1">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-sm sm:text-[15px] font-bold tracking-tight text-accent-700 group-hover:text-accent-800">
                      View All Courses
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-500 text-white shadow-2xs font-heading">
                      30+ Tracks
                    </span>
                  </div>
                  <div className="caption-text text-slate-500 group-hover:text-accent-700/90 mt-0.5 font-sans">
                    All programs, filters & full curricula
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-accent-100/80 text-accent-600 flex items-center justify-center shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-all ml-2">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>

              <div className="flex items-center justify-between px-2 pt-0.5 pb-1">
                <p className="eyebrow-badge text-slate-400 text-[11px] tracking-wider uppercase">
                  Select Training Vertical
                </p>
                <span className="text-[11px] font-semibold text-slate-400 font-sans">
                  {COURSE_CATEGORIES.length} Verticals
                </span>
              </div>

              <div className="space-y-1.5">
                {COURSE_CATEGORIES.map((cat) => {
                  const isSelected = cat.id === activeCategory.id

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onMouseEnter={() => setActiveCategoryId(cat.id)}
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`relative w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-all duration-150 group ${
                        isSelected
                          ? 'bg-white shadow-xs border border-accent-200/90'
                          : 'hover:bg-white/90 border border-transparent hover:border-slate-200/60'
                      }`}
                    >
                      {/* Left vertical accent indicator */}
                      <div
                        className={`absolute left-0 top-2 bottom-2 w-1 rounded-r transition-all duration-200 ${
                          isSelected ? 'bg-accent-500' : 'bg-transparent'
                        }`}
                      />

                      <div className="pl-1.5 pr-2 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-heading text-sm sm:text-[15px] font-bold tracking-tight transition-colors ${
                              isSelected ? 'text-accent-600' : 'text-slate-800 group-hover:text-slate-900'
                            }`}
                          >
                            {cat.title}
                          </span>
                          {cat.badge && (
                            <span
                              className={`eyebrow-badge text-[10px] px-1.5 py-0.5 rounded leading-none ${
                                isSelected
                                  ? 'bg-accent-50 text-accent-600 border border-accent-200/60'
                                  : 'bg-slate-100 text-slate-500 border border-slate-200/60'
                              }`}
                            >
                              {cat.badge}
                            </span>
                          )}
                        </div>
                        <div className="caption-text text-slate-500 mt-0.5 line-clamp-1">
                          {cat.courses.length} Specializations • {cat.subtitle}
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isSelected
                            ? 'text-accent-500 translate-x-1 font-bold'
                            : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Panel: Courses for the Active Category */}
            <div className="col-span-12 md:col-span-7 p-5 sm:p-6 bg-white flex flex-col justify-between">
              <div>
                {/* Active Category Header */}
                <div className="pb-3 border-b border-slate-200 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="display-card-title text-slate-900">
                      {activeCategory.title}
                    </h4>
                    <p className="body-subtext mt-0.5">
                      {activeCategory.subtitle}
                    </p>
                  </div>
                  {activeCategory.badge && (
                    <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-accent-50 text-accent-600 border border-accent-200/70 shrink-0">
                      {activeCategory.badge}
                    </span>
                  )}
                </div>

                {/* Course Links Grid with Large, Easily Legible Typography */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                  {activeCategory.courses.map((course) => (
                    <a
                      key={course.id}
                      href={course.slug}
                      onClick={(e) => {
                        e.preventDefault()
                        onCourseSelect(course, activeCategory)
                      }}
                      className="group flex items-center justify-between py-2 px-2.5 rounded-lg text-sm sm:text-[15px] font-heading font-semibold text-slate-700 hover:text-accent-600 hover:bg-accent-50/70 transition-all"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className="text-accent-500 font-bold text-base transition-transform duration-150 group-hover:translate-x-1 shrink-0 font-heading">
                          →
                        </span>
                        <span className="truncate group-hover:font-bold">
                          {course.name}
                        </span>
                      </div>

                      {course.badge && (
                        <span
                          className={`eyebrow-badge text-[10px] px-1.5 py-0.5 rounded leading-none shrink-0 ${
                            course.badge === 'Hot' || course.badge === 'Trending'
                              ? 'bg-rose-50 text-rose-600 border border-rose-200/60'
                              : course.badge === 'Flagship'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                              : 'bg-accent-50 text-accent-600 border border-accent-100'
                          }`}
                        >
                          {course.badge}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Inquiry prompt at bottom of active courses view */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="caption-text text-slate-600">
                  Looking for the complete syllabus, batch timings & fee structure?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose()
                    onOpenEnquiry(activeCategory.title)
                  }}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold font-heading text-accent-600 hover:text-accent-700 transition-colors"
                >
                  <span>Enquire about {activeCategory.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer Bar */}
          <div className="bg-slate-50/95 border-t border-slate-200 px-6 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="font-heading font-semibold text-slate-800 text-xs sm:text-sm">
                  Need customized corporate or college training batches?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose()
                    onOpenEnquiry('Custom Corporate / College Training')
                  }}
                  className="font-bold text-accent-600 hover:text-accent-700 hover:underline font-heading inline-flex items-center gap-0.5 cursor-pointer"
                >
                  <span>Talk to Advisor</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose()
                  if (onViewAllCourses) onViewAllCourses()
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-heading font-bold text-accent-600 hover:text-accent-700 bg-white hover:bg-accent-50/70 border border-accent-200/90 rounded-xl shadow-2xs transition-all cursor-pointer"
              >
                <span>Explore All 30+ Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenEnquiry('Book Free Demo')
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] rounded-xl shadow-xs shadow-accent-500/25 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Free Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
