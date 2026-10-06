import React, { useState } from 'react'
import {
  Code2,
  Briefcase,
  Languages,
  BadgeCheck,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Calendar,
  FileDown,
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
}

const CATEGORY_ICONS = {
  Code2,
  Briefcase,
  Languages,
  BadgeCheck,
  Sparkles,
}

export const CoursesMegaMenu: React.FC<CoursesMegaMenuProps> = ({
  isOpen,
  onCourseSelect,
  onOpenEnquiry,
  onClose,
  onMouseEnter,
  onMouseLeave,
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
              <span className="hidden md:inline-flex text-xs font-bold px-2.5 py-0.5 rounded-full bg-accent-50 text-accent-600 border border-accent-200/70">
                5 Verticals • 30+ Specializations
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500">
              <span>Select any vertical on the left to view programs</span>
            </div>
          </div>

          {/* MAIN CATEGORY-ONLY BROWSER VIEW */}
          <div className="grid grid-cols-12 min-h-[380px]">
            {/* Left Sub-menu / Navigation Rail (Main 5 Categories) */}
            <div className="col-span-12 md:col-span-5 border-r border-slate-200/80 bg-slate-50/70 p-3 sm:p-4 space-y-1.5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-1.5 font-heading">
                Select Training Vertical
              </p>
              {COURSE_CATEGORIES.map((cat) => {
                const IconComponent = CATEGORY_ICONS[cat.iconName] || Sparkles
                const isSelected = cat.id === activeCategory.id

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onMouseEnter={() => setActiveCategoryId(cat.id)}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-white text-accent-600 shadow-sm border border-accent-200/80 font-bold'
                        : 'text-slate-700 hover:bg-white/90 hover:text-slate-900 font-semibold'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors shadow-2xs ${
                          isSelected
                            ? 'bg-accent-500 text-white'
                            : 'bg-slate-200/80 text-slate-700'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-[15px] font-bold tracking-tight">
                          {cat.title}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">
                          {cat.courses.length} Specializations
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-accent-500 translate-x-1 font-bold' : 'text-slate-400'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            {/* Right Panel: Courses for the Active Category */}
            <div className="col-span-12 md:col-span-7 p-5 sm:p-6 bg-white flex flex-col justify-between">
              <div>
                {/* Active Category Header */}
                <div className="pb-3 border-b border-slate-200 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-heading">
                      {activeCategory.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                      {activeCategory.subtitle}
                    </p>
                  </div>
                  {activeCategory.badge && (
                    <span className="text-xs uppercase font-bold px-2.5 py-0.5 rounded-full bg-accent-50 text-accent-600 border border-accent-200/70 shrink-0">
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
                      className="group flex items-center justify-between py-2 px-2.5 rounded-lg text-sm sm:text-[15px] text-slate-700 hover:text-accent-600 hover:bg-accent-50/70 transition-all font-semibold"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className="text-accent-500 font-bold text-base transition-transform duration-150 group-hover:translate-x-1 shrink-0">
                          →
                        </span>
                        <span className="truncate group-hover:font-bold">
                          {course.name}
                        </span>
                      </div>

                      {course.badge && (
                        <span
                          className={`text-[11px] font-bold px-1.5 py-0.5 rounded leading-none shrink-0 ${
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
                <span className="text-xs text-slate-600 font-medium">
                  Looking for the complete syllabus, batch timings & fee structure?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose()
                    onOpenEnquiry(activeCategory.title)
                  }}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  <span>Enquire about {activeCategory.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer Bar */}
          <div className="bg-slate-50/95 border-t border-slate-200 px-6 sm:px-8 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500" />
              <span className="font-semibold text-slate-700">Need customized corporate or college training batches?</span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenEnquiry('Download Syllabus')
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-all"
              >
                <FileDown className="w-3.5 h-3.5 text-slate-500" />
                <span>Download Syllabus</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenEnquiry('Book Free Demo')
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-lg shadow-sm shadow-accent-500/25 transition-all"
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
