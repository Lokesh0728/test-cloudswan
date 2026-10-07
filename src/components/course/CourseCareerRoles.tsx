import React from 'react'
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseCareerRolesProps {
  careerOpportunities: CourseData['careerOpportunities']
  onOpenEnquiry: (subject?: string) => void
}

export const CourseCareerRoles: React.FC<CourseCareerRolesProps> = ({
  careerOpportunities,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 eyebrow-badge mb-4 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>High-Demand Career Pathways</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {careerOpportunities.title}
          </h2>

          <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-600">
            {careerOpportunities.subtitle}
          </p>

          <p className="mt-4 body-paragraph text-slate-600 max-w-2xl mx-auto">
            {careerOpportunities.description}
          </p>
        </div>

        {/* 10 Job Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-10">
          {careerOpportunities.roles.map((role, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-accent-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-accent-50 border border-slate-200 group-hover:border-accent-200 text-slate-700 group-hover:text-accent-600 flex items-center justify-center transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="caption-text font-mono text-slate-400">0{idx + 1}</span>
                </div>

                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-accent-600 transition-colors">
                  {role}
                </h4>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/60">
                <span className="caption-text text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Hiring in IT Hubs</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note & Placement CTA Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-orange-50/40 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <p className="caption-text text-slate-600 text-xs sm:text-sm">
              <strong className="font-semibold text-slate-800">Note: </strong>
              {careerOpportunities.disclaimer}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry('Cybersecurity - Placement Assistance Inquiry')}
            className="shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 transition-all flex items-center gap-2 shadow-xs"
          >
            <span>Explore Placement Assistance</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
