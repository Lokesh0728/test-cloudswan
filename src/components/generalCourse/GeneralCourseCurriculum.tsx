import React, { useState } from 'react'
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileDown,
  Sparkles,
  GraduationCap,
} from 'lucide-react'
import type { GeneralCourseData } from '../../types/generalCourse'

interface GeneralCourseCurriculumProps {
  course: GeneralCourseData
  onOpenEnquiry: (subject?: string) => void
}

export const GeneralCourseCurriculum: React.FC<GeneralCourseCurriculumProps> = ({
  course,
  onOpenEnquiry,
}) => {
  // Allow toggling open modules (first 2 open by default)
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0)

  const toggleModule = (idx: number) => {
    setOpenModuleIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section id="course-curriculum" className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="eyebrow-badge text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-200/60 inline-flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Industry-Aligned Syllabus</span>
            </span>
            <h2 className="display-h2 text-slate-900">
              Comprehensive Training Curriculum & Learning Modules
            </h2>
            <p className="body-paragraph text-slate-600">
              Carefully structured from foundational concepts to advanced practical real-world scenarios, ensuring 100% conceptual clarity and practical application.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenEnquiry(`${course.shortTitle} - Download Detailed Syllabus PDF`)}
              className="px-4 py-2.5 text-xs sm:text-sm font-bold font-heading text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-xl transition-all flex items-center gap-2 shadow-2xs"
            >
              <FileDown className="w-4 h-4 text-accent-500" />
              <span>Download Syllabus (PDF)</span>
            </button>
          </div>
        </div>

        {/* Two-Column Grid: Left = Modules Accordion, Right = Practical Outcomes & Mentorship Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Modules Accordion (7 Columns) */}
          <div className="lg:col-span-7 space-y-3.5">
            {course.modules.map((mod, idx) => {
              const isOpen = openModuleIndex === idx

              return (
                <div
                  key={mod.number}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-accent-300 bg-white shadow-md'
                      : 'border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Module Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleModule(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-heading font-extrabold text-sm sm:text-base shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-accent-500 text-white shadow-sm shadow-accent-500/30'
                            : 'bg-slate-200/80 text-slate-700'
                        }`}
                      >
                        {String(mod.number).padStart(2, '0')}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="caption-text text-accent-600 font-bold uppercase tracking-wider text-[11px]">
                            Module {mod.number}
                          </span>
                          {mod.duration && (
                            <span className="caption-text text-slate-400 text-[11px] flex items-center gap-1">
                              • <Clock className="w-3 h-3" /> {mod.duration}
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                          {mod.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-accent-500' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Module Topics List */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-white">
                      <ul className="space-y-2.5 pt-2">
                        {mod.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column: Key Outcomes & Practical Value (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Practical Outcomes Card */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-7 text-white shadow-xl border border-slate-800">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent-500/20 text-accent-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-white">
                  What You Will Achieve
                </h3>
              </div>

              <p className="caption-text text-slate-400 mb-5">
                Tangible competencies and measurable skills you master by the end of this program:
              </p>

              <div className="space-y-3">
                {course.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="caption-text text-slate-400">
                  Ready to experience our teaching methodology?
                </span>
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`${course.shortTitle} - Free Demo Class`)}
                  className="px-4 py-2 text-xs font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-colors shrink-0"
                >
                  Book Free Demo
                </button>
              </div>
            </div>

            {/* Fast Stats Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-accent-500" />
                <h4 className="font-heading font-bold text-sm text-slate-900">
                  CloudSwan Academic Standards
                </h4>
              </div>
              <p className="caption-text text-slate-600">
                All training modules are updated quarterly in alignment with corporate recruiter benchmarks and international testing bodies.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-slate-700 border-t border-slate-200/80 font-medium">
                <span>Batch Size: <strong>Max 10-12 Students</strong></span>
                <span>Practical Drills: <strong>{course.specs.practicalHours}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
