import React from 'react'
import {
  CheckCircle2,
  ArrowRight,
  Award,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CoursePortfolioProps {
  portfolio: CourseData['portfolio']
  onOpenEnquiry: (subject?: string) => void
}

export const CoursePortfolio: React.FC<CoursePortfolioProps> = ({
  portfolio,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent-400 eyebrow-badge mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Job-Ready Proof of Competence</span>
            </div>

            <h2 className="display-h2 text-white">
              {portfolio.title}
            </h2>

            <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-400">
              {portfolio.subtitle}
            </p>

            <p className="mt-4 body-paragraph text-slate-300 max-w-2xl mx-auto">
              {portfolio.description}
            </p>
          </div>

          {/* 10 Portfolio Deliverables Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-4 max-w-4xl mx-auto mb-10">
            {portfolio.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 hover:border-accent-500/50 transition-all flex items-center gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-500/20 text-accent-400 border border-accent-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="caption-text text-slate-400 text-[10px] uppercase font-mono tracking-wider">
                    Deliverable 0{idx + 1}
                  </span>
                  <p className="font-heading font-bold text-sm sm:text-[15px] text-white">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio CTA */}
          <div className="relative z-10 text-center">
            <button
              type="button"
              onClick={() => onOpenEnquiry('Cybersecurity - Portfolio Mentorship Inquiry')}
              className="px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-lg shadow-accent-500/30 transition-all inline-flex items-center gap-2"
            >
              <span>{portfolio.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="caption-text text-slate-400 mt-3">
              Included free with all Cybersecurity training batches at CloudSwan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
