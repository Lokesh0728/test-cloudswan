import React from 'react'
import {
  Award,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
  FolderGit2,
  UserCheck,
  Briefcase,
  Layers,
  ArrowRight,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseWhyCloudswanProps {
  whyCloudSwan: CourseData['whyCloudSwan']
  onOpenEnquiry: (subject?: string) => void
}

const PILLAR_ICONS = [
  BookOpen,
  ShieldCheck,
  Layers,
  FolderGit2,
  UserCheck,
  Briefcase,
  CheckCircle2,
]

export const CourseWhyCloudswan: React.FC<CourseWhyCloudswanProps> = ({
  whyCloudSwan,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/80 text-accent-700 eyebrow-badge mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-accent-600" />
            <span>The CloudSwan Institute Standard</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {whyCloudSwan.title}
          </h2>

          <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-600">
            {whyCloudSwan.subtitle}
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {whyCloudSwan.pillars.map((pillar, idx) => {
            const IconComp = PILLAR_ICONS[idx % PILLAR_ICONS.length]
            const isFeatured = idx === 0 || idx === 3

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-br from-white to-accent-50/40 border-accent-200 shadow-sm'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-600 border border-accent-100 flex items-center justify-center mb-5 shadow-2xs">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    {pillar.title}
                  </h3>

                  <p className="mt-2.5 body-paragraph text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="caption-text text-accent-600 font-semibold">
                    Core Benefit #{idx + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Action prompt */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onOpenEnquiry(`${whyCloudSwan.title} - Inquiry`)}
            className="px-6 py-3 rounded-xl text-sm font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-md shadow-accent-500/25 transition-all inline-flex items-center gap-2"
          >
            <span>Experience Our Practical Training</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
