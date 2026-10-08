import React, { useState } from 'react'
import {
  BookOpen,
  ChevronDown,
  Search,
  FileDown,
  CheckCircle2,
  Calendar,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseCurriculumProps {
  curriculum: CourseData['curriculum']
  onOpenEnquiry: (subject?: string) => void
}

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({
  curriculum,
  onOpenEnquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openModuleIds, setOpenModuleIds] = useState<Record<number, boolean>>({
    1: true,
    2: true, // open first 2 by default
  })

  const toggleModule = (moduleNum: number) => {
    setOpenModuleIds((prev) => ({
      ...prev,
      [moduleNum]: !prev[moduleNum],
    }))
  }

  const expandAll = () => {
    const allOpen: Record<number, boolean> = {}
    curriculum.modules.forEach((m) => {
      allOpen[m.number] = true
    })
    setOpenModuleIds(allOpen)
  }

  const collapseAll = () => {
    setOpenModuleIds({})
  }

  // Filter modules based on search term
  const filteredModules = curriculum.modules.filter((m) => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return (
      m.title.toLowerCase().includes(q) ||
      m.subtitle.toLowerCase().includes(q) ||
      (m.description && m.description.toLowerCase().includes(q)) ||
      m.topics.some((topic) => topic.toLowerCase().includes(q))
    )
  })

  const totalTopics = curriculum.modules.reduce((sum, m) => sum + m.topics.length, 0)

  return (
    <section
      id="course-curriculum"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/80 text-accent-700 eyebrow-badge mb-4 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-accent-600" />
            <span>{curriculum.modules.length} Comprehensive Modules • {totalTopics}+ Topics</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {curriculum.subtitle}
          </h2>

          <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-600">
            {curriculum.title}
          </p>

          <p className="mt-4 body-paragraph text-slate-600 max-w-2xl mx-auto">
            {curriculum.description}
          </p>
        </div>

        {/* Search & Accordion Controls Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics in curriculum (e.g. EC2, S3, VPC, Linux, Security)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-slate-800 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0">
            <button
              type="button"
              onClick={expandAll}
              className="px-3 py-1.5 text-xs font-semibold font-heading text-slate-600 hover:text-accent-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="px-3 py-1.5 text-xs font-semibold font-heading text-slate-600 hover:text-accent-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
            >
              Collapse All
            </button>
            <button
              type="button"
              onClick={() => onOpenEnquiry(`${curriculum.title} - Download Complete Syllabus`)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 rounded-lg shadow-2xs transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Syllabus PDF</span>
            </button>
          </div>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-4">
          {filteredModules.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
              <p className="body-paragraph text-slate-500">
                No syllabus topics matching "{searchQuery}". Try searching for another topic or clear the filter.
              </p>
            </div>
          ) : (
            filteredModules.map((module) => {
              const isOpen = !!openModuleIds[module.number]

              return (
                <div
                  key={module.number}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-accent-200 shadow-sm'
                      : 'bg-white hover:bg-slate-50/60 border-slate-200/90'
                  }`}
                >
                  {/* Module Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleModule(module.number)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                      {/* Number Pill */}
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 font-heading font-extrabold text-sm sm:text-base transition-colors ${
                          isOpen
                            ? 'bg-accent-500 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {module.number < 10 ? `0${module.number}` : module.number}
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                            {module.number}. {module.title}
                          </h3>
                          <span className="caption-text px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                            {module.topics.length} Topics
                          </span>
                        </div>
                        <p className="body-subtext text-slate-500 mt-0.5">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-accent-50 transition-colors">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-accent-500' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Content: Description & Topic Pills */}
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-slate-100 bg-slate-50/40">
                      {module.description && (
                        <p className="body-subtext text-slate-600 mb-4 font-normal">
                          {module.description}
                        </p>
                      )}

                      <div>
                        <p className="eyebrow-badge text-slate-400 mb-2.5">
                          Topics Covered:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {module.topics.map((topic, tIdx) => (
                            <div
                              key={tIdx}
                              className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 text-xs font-medium font-sans text-slate-700 hover:border-accent-200 hover:text-accent-600 transition-colors"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                              <span className="truncate">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <span className="eyebrow-badge text-accent-400">Customized Learning Schedule</span>
            <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
              Want the Full Printable Syllabus Breakdown?
            </h4>
            <p className="caption-text text-slate-400">
              Download the comprehensive week-by-week curriculum or attend a live walkthrough demo.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenEnquiry(`${curriculum.title} - Download Complete Syllabus`)}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-heading text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <FileDown className="w-4 h-4 text-accent-500" />
              <span>Download Syllabus PDF</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenEnquiry(`${curriculum.title} - Book Free Demo`)}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 transition-all flex items-center gap-1.5 shadow-sm shadow-accent-500/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
