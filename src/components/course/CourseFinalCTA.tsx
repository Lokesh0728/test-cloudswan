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
import { GradientTitle } from '../ui/GradientTitle'

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

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
            {/* Tag */}
            <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-300 font-heading font-bold text-[10.5px] sm:text-xs uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-accent-400 shrink-0" />
              <span>Admissions Open • Fast-Track Your Career</span>
            </div>

            {/* Main Headline */}
            <GradientTitle text={finalCta.title} dark={true} as="h2" className="display-h2 sm:display-h1 text-white tracking-tight" />

            {/* Single Clean Subtitle */}
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {finalCta.subtitle || `Take the first step towards high-demand ${courseTitle} careers with practical hands-on training in Coimbatore.`}
            </p>

            {/* Top 4 Key Highlights */}
            {finalCta.checkpoints && finalCta.checkpoints.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 py-1 text-left max-w-xl mx-auto">
                {finalCta.checkpoints.slice(0, 4).map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onOpenEnquiry(`${courseTitle} - Free Counselling Session`)}
                className="w-full sm:w-auto justify-center px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-lg shadow-accent-500/30 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>{finalCta.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#course-curriculum"
                className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold font-heading text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-slate-300" />
                <span>{finalCta.secondaryCta}</span>
              </a>
            </div>

            {/* Quick Contact & Helpline */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-slate-400">
              <span className="text-slate-500 hidden sm:inline">Admissions Helpline:</span>
              <a
                href={`tel:${CONTACT_INFO.coimbatorePhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-accent-400 hover:text-accent-300 transition-colors"
                title="Gandhipuram"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Gandhipuram: {CONTACT_INFO.coimbatoreDisplayPhone}</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <a
                href={`tel:${CONTACT_INFO.saravanampattiPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-accent-400 hover:text-accent-300 transition-colors"
                title="Saravanampatti"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Saravanampatti: {CONTACT_INFO.saravanampattiDisplayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
