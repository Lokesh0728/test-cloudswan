import React, { useEffect } from 'react'
import {
  X,
  CheckCircle2,
  Clock,
  Briefcase,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Layers,
} from 'lucide-react'
import type { PopularCourse } from './popularCoursesData'

interface CourseDetailsModalProps {
  course: PopularCourse | null
  isOpen: boolean
  onClose: () => void
  onOpenEnquiry: (subject?: string) => void
}

export const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
  course,
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
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

  const Icon = course.icon

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
    >
      {/* Backdrop Click Dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shrink-0 overflow-hidden">
          {/* Ambient Lighting */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ backgroundColor: course.glowColor || '#FE5A2C' }}
          />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              {/* Tech Icon Container */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md shrink-0">
                <Icon size={44} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-accent-500 text-white shadow-xs">
                    {course.categoryLabel}
                  </span>
                  <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-white/15 text-slate-200 border border-white/20">
                    {course.badge}
                  </span>
                  <span className="font-heading text-[11px] font-bold text-amber-400 flex items-center gap-1">
                    ★ {course.rating} ({course.learnerCount})
                  </span>
                </div>

                <h3 id="course-modal-title" className="display-card-title sm:text-2xl text-white">
                  {course.fullName}
                </h3>

                <p className="body-subtext text-slate-300 mt-1 line-clamp-2 max-w-xl">
                  {course.tagline}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-5 pt-4 border-t border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-400 shrink-0" />
              <div>
                <div className="caption-text text-slate-400 text-[10px]">Duration</div>
                <div className="font-heading font-bold text-slate-200">{course.duration}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="caption-text text-slate-400 text-[10px]">Avg Package</div>
                <div className="font-heading font-bold text-emerald-300">{course.averageSalary}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <div className="caption-text text-slate-400 text-[10px]">Training Mode</div>
                <div className="font-heading font-bold text-slate-200">{course.mode}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <div className="caption-text text-slate-400 text-[10px]">Projects</div>
                <div className="font-heading font-bold text-slate-200">{course.projectsCount}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          {/* Course Overview */}
          <div>
            <h4 className="eyebrow-badge text-accent-600 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Program Overview</span>
            </h4>
            <p className="body-paragraph text-slate-600 leading-relaxed text-sm">
              {course.description}
            </p>
          </div>

          {/* Curriculum Syllabus Modules */}
          <div>
            <h4 className="eyebrow-badge text-slate-900 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-accent-500" />
              <span>Industry-Aligned Curriculum Roadmap</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.modules.map((mod, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-accent-200 hover:bg-accent-50/20 transition-all space-y-2"
                >
                  <div className="font-heading text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-accent-500/10 text-accent-600 font-extrabold flex items-center justify-center text-[10px] shrink-0 font-heading">
                      {mIdx + 1}
                    </span>
                    <span>{mod.title}</span>
                  </div>
                  <ul className="space-y-1 pl-7">
                    {mod.topics.map((top, tIdx) => (
                      <li key={tIdx} className="body-subtext text-slate-600 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{top}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools Covered */}
          <div>
            <h4 className="eyebrow-badge text-slate-900 mb-2">
              <span>Technologies & Tools Mastered</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-xl text-xs font-semibold font-heading bg-slate-100 text-slate-800 border border-slate-200/80 shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Career Roles You Qualify For */}
          <div>
            <h4 className="eyebrow-badge text-slate-900 mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-accent-500" />
              <span>Eligible Career Job Profiles</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {course.hiringRoles.map((role, rIdx) => (
                <div
                  key={rIdx}
                  className="p-2.5 rounded-xl bg-orange-50/60 border border-orange-100/80 text-xs font-bold font-heading text-slate-800 text-center"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="caption-text text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>100% Placement Mentorship & Capstone Project Guarantee</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold font-heading text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose()
                onOpenEnquiry(course.enquirySubject)
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-heading tracking-wide text-white bg-accent-500 hover:bg-accent-600 shadow-sm shadow-accent-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enroll / Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
