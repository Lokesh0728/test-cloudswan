import React from 'react'
import {
  ShieldAlert,
  Lock,
  Network,
  Cpu,
  AlertTriangle,
  Bug,
  Globe2,
  Activity,
  Radio,
  Cloud,
  FileCheck,
  ArrowRight,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseWhyLearnProps {
  whyLearn: CourseData['whyLearn']
  onOpenEnquiry: (subject?: string) => void
}

const COMPETENCY_ICONS = [
  Network,
  Cpu,
  AlertTriangle,
  ShieldAlert,
  Bug,
  Globe2,
  Activity,
  Radio,
  Cloud,
  FileCheck,
]

export const CourseWhyLearn: React.FC<CourseWhyLearnProps> = ({
  whyLearn,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/80 text-accent-700 eyebrow-badge mb-4 shadow-2xs">
            <Lock className="w-3.5 h-3.5 text-accent-600" />
            <span>High-Growth Technology Function</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {whyLearn.title}
          </h2>

          <p className="mt-4 lead-paragraph font-medium text-slate-700 max-w-2xl mx-auto">
            {whyLearn.intro}
          </p>

          <p className="mt-2 body-paragraph text-slate-600 max-w-2xl mx-auto">
            {whyLearn.description}
          </p>
        </div>

        {/* 10 Core Professional Competencies Grid */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="display-h3 text-slate-900">
                {whyLearn.competenciesTitle}
              </h3>
              <p className="caption-text text-slate-500 mt-1">
                Essential domains mastered during our Coimbatore training program
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {whyLearn.competencies.map((comp, idx) => {
              const IconComp = COMPETENCY_ICONS[idx % COMPETENCY_ICONS.length]

              return (
                <div
                  key={idx}
                  className="group p-4 sm:p-5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-accent-200 shadow-2xs hover:shadow-md transition-all duration-200 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-accent-50 border border-slate-200 group-hover:border-accent-200 text-slate-700 group-hover:text-accent-600 flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="caption-text text-accent-600 font-bold font-mono">0{idx + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-accent-500 transition-colors" />
                      <span className="caption-text text-slate-400">Core Competency</span>
                    </div>
                    <p className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-accent-600 transition-colors">
                      {comp}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Highlight Callout Box */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-accent-50/80 via-white to-slate-50 border border-accent-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="eyebrow-badge text-accent-700">Structured Learning Advantage</span>
            <p className="font-heading font-bold text-base sm:text-lg text-slate-900">
              {whyLearn.summaryNote}
            </p>
            <p className="body-paragraph text-slate-600 text-sm">
              Progress smoothly from foundational concepts to real-world cloud infrastructure and deployment.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry(`${whyLearn.title} - Career Transition Inquiry`)}
            className="shrink-0 px-5 py-3 rounded-xl text-sm font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-sm shadow-accent-500/25 transition-all flex items-center gap-2"
          >
            <span>Discuss Your Career Transition</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
