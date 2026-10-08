import React from 'react'
import {
  Users,
  GraduationCap,
  Sparkles,
  Laptop,
  Network,
  Server,
  Shuffle,
  ArrowRight,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseTargetAudienceProps {
  targetAudiences: CourseData['targetAudiences']
  onOpenEnquiry: (subject?: string) => void
}

const AUDIENCE_ICONS: Record<string, React.ElementType> = {
  students: GraduationCap,
  'fresh-graduates': Sparkles,
  'software-developers': Laptop,
  'it-professionals': Laptop,
  'network-professionals': Network,
  'system-administrators': Server,
  'career-switchers': Shuffle,
}

export const CourseTargetAudience: React.FC<CourseTargetAudienceProps> = ({
  targetAudiences,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/80 text-accent-700 eyebrow-badge mb-4 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-accent-600" />
            <span>Inclusive Learning Tracks</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {targetAudiences.title}
          </h2>

          <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-600">
            {targetAudiences.subtitle}
          </p>

          <p className="mt-4 body-paragraph text-slate-600 max-w-2xl mx-auto">
            The program is structured to accommodate diverse backgrounds, whether you're initiating your tech journey or upskilling from an established career.
          </p>
        </div>

        {/* 6 Target Audience Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {targetAudiences.audiences.map((aud) => {
            const IconComp = AUDIENCE_ICONS[aud.id] || Users

            return (
              <div
                key={aud.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-accent-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-50 group-hover:bg-accent-500 text-accent-600 group-hover:text-white border border-accent-100 flex items-center justify-center mb-5 transition-all duration-200 shadow-2xs">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-accent-600 transition-colors">
                    {aud.title}
                  </h3>

                  <p className="mt-2.5 body-paragraph text-slate-600 text-sm leading-relaxed">
                    {aud.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(`${targetAudiences.title} - Consultation for ${aud.title}`)}
                    className="text-xs font-bold font-heading text-accent-600 hover:text-accent-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Check eligibility for {aud.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
