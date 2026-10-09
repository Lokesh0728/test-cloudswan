import React, { useState } from 'react'
import {
  HelpCircle,
  ChevronDown,
  UserCheck,
  Calendar,
  ArrowRight,
  FileDown,
} from 'lucide-react'
import type { GeneralCourseData } from '../../types/generalCourse'

interface GeneralCourseFAQProps {
  course: GeneralCourseData
  onOpenEnquiry: (subject?: string) => void
}

export const GeneralCourseFAQ: React.FC<GeneralCourseFAQProps> = ({
  course,
  onOpenEnquiry,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx))
  }

  const scrollToHeroForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Target Audience Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow-badge text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-200/60 inline-flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Target Profiles</span>
            </span>
            <h2 className="display-h2 text-slate-900 mt-2">
              Who Should Enroll in {course.shortTitle}?
            </h2>
            <p className="body-paragraph text-slate-600 mt-2">
              This course is tailored to accelerate progress for multiple profiles, from eager freshers to seasoned industry veterans.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.targetAudience.map((audience, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-accent-50/40 hover:border-accent-200 transition-all flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-accent-500 text-white flex items-center justify-center font-heading font-bold text-xs shrink-0 shadow-2xs">
                  {idx + 1}
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {audience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Interactive FAQ Accordion */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow-badge text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-200/60 inline-flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </span>
            <h2 className="display-h2 text-slate-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="body-paragraph text-slate-600 mt-2">
              Common questions about batch timings, fees, certifications, and classroom options.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {course.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-accent-300 bg-white shadow-sm'
                      : 'border-slate-200/80 bg-slate-50/60 hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <div className="shrink-0 p-1 rounded-lg bg-white border border-slate-200 text-slate-400">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-accent-500' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-white">
                      <p className="body-paragraph text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* 3. Final Conversion CTA Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-12 text-white shadow-2xl border border-slate-800 overflow-hidden text-center sm:text-left">
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/40 text-accent-300 eyebrow-badge text-[11px]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Next Cohort Starts This Monday</span>
              </div>
              <h3 className="display-h2 text-white">
                Ready to Master {course.shortTitle}?
              </h3>
              <p className="lead-paragraph text-slate-300">
                Join our upcoming batch at Gandhipuram, Saravanampatti, or Live Interactive Online. Limited to 10-12 seats for dedicated 1:1 mentor attention.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={scrollToHeroForm}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-lg shadow-accent-500/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Enroll / Book Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onOpenEnquiry(`${course.shortTitle} - Download Syllabus PDF`)}
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-bold font-heading text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4 text-slate-400" />
                <span>Download Syllabus</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
