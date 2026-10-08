import React from 'react'
import {
  Compass,
  CheckCircle2,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseLearningPathProps {
  learningPath: CourseData['learningPath']
  onOpenEnquiry: (subject?: string) => void
}

export const CourseLearningPath: React.FC<CourseLearningPathProps> = ({
  learningPath,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/90 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 eyebrow-badge mb-4 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Structured Knowledge Progression</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {learningPath.title}
          </h2>

          <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-600">
            {learningPath.subtitle}
          </p>

          <p className="mt-4 body-paragraph text-slate-600 max-w-2xl mx-auto">
            {learningPath.description}
          </p>
        </div>

        {/* Visual Progression Journey Flow */}
        <div className="relative mb-12">
          {/* Progression Step Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
            {learningPath.steps.map((step, idx) => {
              const isLast = idx === learningPath.steps.length - 1

              return (
                <div
                  key={idx}
                  className={`relative p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    isLast
                      ? 'bg-gradient-to-br from-accent-500 to-orange-600 text-white border-accent-600 shadow-md scale-102'
                      : 'bg-white hover:bg-slate-50/80 text-slate-900 border-slate-200/90 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`eyebrow-badge px-2 py-0.5 rounded-full text-[10px] ${
                        isLast
                          ? 'bg-white/20 text-white border border-white/30'
                          : 'bg-accent-50 text-accent-600 border border-accent-100'
                      }`}
                    >
                      Step {String(idx + 1).padStart(2, '0')}
                    </span>

                    {idx < learningPath.steps.length - 1 ? (
                      <span className="text-slate-300 font-bold text-xs sm:inline hidden">→</span>
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    )}
                  </div>

                  <div>
                    <h4
                      className={`font-heading font-bold text-sm tracking-tight ${
                        isLast ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {step}
                    </h4>
                    <p
                      className={`caption-text mt-1 text-[11px] ${
                        isLast ? 'text-orange-100' : 'text-slate-500'
                      }`}
                    >
                      {isLast ? 'Capstones & Verified Portfolio' : 'Progressive Lab Competency'}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Outcome Summary Callout */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="body-subtext font-medium text-slate-700">
              {learningPath.outcomeNote}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry(`${learningPath.title} - Learning Path Counselling`)}
            className="shrink-0 px-4 py-2 text-xs sm:text-sm font-bold font-heading text-slate-700 hover:text-accent-600 bg-slate-50 hover:bg-accent-50 border border-slate-200 rounded-xl transition-all"
          >
            Get Counselling Call
          </button>
        </div>
      </div>
    </section>
  )
}
