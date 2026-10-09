import React from 'react'
import {
  FileText,
  Search,
  Users2,
  CheckCircle2,
  Clock,
} from 'lucide-react'
import { HIRING_STEPS } from './careersData'

const STEP_ICONS = [
  FileText,
  Search,
  Users2,
  CheckCircle2,
]

export const HiringProcess: React.FC = () => {
  return (
    <section
      id="hiring-process"
      aria-label="Our Hiring Process"
      className="relative overflow-hidden bg-slate-50/70 py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            <span>TRANSPARENT CANDIDATE JOURNEY</span>
            <span className="text-accent-300">•</span>
            <span className="text-slate-600 font-medium normal-case">Step by Step</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            Our Hiring{' '}
            <span className="relative inline-block text-accent-500">
              Process
              <span className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-accent-200" />
            </span>
          </h2>

          <p className="lead-paragraph mt-4 text-slate-600 max-w-2xl mx-auto">
            We value your time and effort. Our interview journey is fast, respectful, conversational, and focused on real-world engineering problem-solving.
          </p>
        </div>

        {/* Desktop Connected Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Animated Connecting Gradient Line */}
          <div
            aria-hidden="true"
            className="absolute top-[36px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-orange-200 via-accent-500 to-orange-200 rounded-full z-0 opacity-80"
          />

          {/* 4 Steps Columns */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {HIRING_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[idx] || FileText
              return (
                <div key={step.step} className="group flex flex-col items-center text-center">
                  {/* Step Node Icon */}
                  <div className="relative mb-6">
                    <div className="w-[72px] h-[72px] rounded-3xl bg-white border-2 border-accent-200 text-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/10 group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-500 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Step Number Badge */}
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-slate-900 text-white font-heading font-extrabold text-[11px] shadow-xs">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Card Content */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 group-hover:border-accent-300 shadow-2xs group-hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between w-full">
                    <div>
                      <div className="inline-flex items-center gap-1 caption-text text-accent-600 font-bold mb-2">
                        <Clock className="w-3 h-3" />
                        <span>{step.timeline}</span>
                      </div>

                      <h3 className="display-card-title text-slate-900 group-hover:text-accent-600 transition-colors">
                        {step.title}
                      </h3>

                      <p className="body-paragraph text-slate-600 text-xs sm:text-sm mt-2.5">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center text-[11px] font-heading font-semibold text-slate-400">
                      Stage {idx + 1} of 4
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Connected Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-accent-200 space-y-8 ml-3 sm:ml-4">
          {HIRING_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || FileText
            return (
              <div key={step.step} className="relative group">
                {/* Node on Vertical Timeline */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-white border-2 border-accent-500 text-accent-600 flex items-center justify-center shadow-md">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="eyebrow-badge text-accent-600">
                      Stage {step.step}
                    </span>
                    <span className="caption-text flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3" />
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="display-card-title text-slate-900">
                    {step.title}
                  </h3>

                  <p className="body-paragraph text-slate-600 text-xs sm:text-sm mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
