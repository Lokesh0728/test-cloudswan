import React from 'react'
import {
  Milestone,
  CheckCircle2,
  ArrowRight,
  Rocket,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseRoadmapProps {
  roadmap: CourseData['roadmap']
  onOpenEnquiry: (subject?: string) => void
}

export const CourseRoadmap: React.FC<CourseRoadmapProps> = ({
  roadmap,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/80 text-accent-700 eyebrow-badge mb-4 shadow-2xs">
            <Milestone className="w-3.5 h-3.5 text-accent-600" />
            <span>12-Stage Career Progression Blueprint</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {roadmap.title}
          </h2>

          <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-600">
            {roadmap.subtitle}
          </p>

          <p className="mt-4 body-paragraph text-slate-600 max-w-2xl mx-auto">
            From foundational digital literacy to active job applications and technical interview mastery.
          </p>
        </div>

        {/* 12-Step Visual Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {roadmap.steps.map((item) => {
            const isMilestone = item.step === 9 || item.step === 10 || item.step === 12

            return (
              <div
                key={item.step}
                className={`relative p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isMilestone
                    ? 'bg-gradient-to-br from-accent-50/70 via-white to-orange-50/50 border-accent-200 shadow-sm'
                    : 'bg-slate-50/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`eyebrow-badge px-2.5 py-1 rounded-full text-[11px] ${
                        isMilestone
                          ? 'bg-accent-500 text-white'
                          : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      Step {item.step < 10 ? `0${item.step}` : item.step}
                    </span>

                    {item.step === 12 ? (
                      <Rocket className="w-4 h-4 text-accent-500" />
                    ) : (
                      <span className="caption-text text-slate-400">Phase {Math.ceil(item.step / 3)}</span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="body-subtext text-slate-600 text-xs mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="caption-text text-slate-400 text-[11px]">
                    {item.step <= 4 ? 'Foundations' : item.step <= 8 ? 'Core Security' : 'Career Readiness'}
                  </span>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isMilestone ? 'text-accent-500' : 'text-slate-300'}`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Roadmap Bottom Action */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onOpenEnquiry('Cybersecurity - Career Roadmap Consultation')}
            className="px-6 py-3 rounded-xl text-sm font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-md shadow-accent-500/25 transition-all inline-flex items-center gap-2"
          >
            <span>Start Step 1: Book Free Orientation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
