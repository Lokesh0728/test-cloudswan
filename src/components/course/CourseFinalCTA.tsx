import React from 'react'
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react'
import type { CourseData } from '../../types/course'
import { CONTACT_INFO } from '../../data/navigationData'

interface CourseFinalCTAProps {
  finalCta: CourseData['finalCta']
  courseTitle: string
  onOpenEnquiry: (subject?: string) => void
}

export const CourseFinalCTA: React.FC<CourseFinalCTAProps> = ({
  finalCta,
  courseTitle,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100/90 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800 overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent-400 eyebrow-badge">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{finalCta.subtitle}</span>
            </div>

            {/* Main Headline */}
            <h2 className="display-h1 text-white">
              {finalCta.title}
            </h2>

            <p className="body-paragraph text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
              Take the first step towards high-demand cybersecurity roles. Join hands-on labs led by certified security practitioners in Coimbatore.
            </p>

            {/* 6 Key Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 pb-4 text-left max-w-2xl mx-auto">
              {finalCta.checkpoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  <span className="caption-text text-slate-300 font-medium text-xs sm:text-sm">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenEnquiry(`${courseTitle} - Free Counselling Session`)}
                className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-lg shadow-accent-500/30 transition-all flex items-center gap-2 group"
              >
                <span>{finalCta.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#course-curriculum"
                className="px-6 py-4 rounded-xl text-sm sm:text-base font-bold font-heading text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>{finalCta.secondaryCta}</span>
              </a>
            </div>

            {/* Quick Contact & Helpline */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 caption-text text-slate-400">
              <a
                href={`tel:${CONTACT_INFO.coimbatorePhone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-accent-400" />
                <span>Admissions Helpline: {CONTACT_INFO.coimbatoreDisplayPhone}</span>
              </a>
              <span>•</span>
              <span>Online Interactive & Classroom Batches Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
