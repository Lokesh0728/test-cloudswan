import React from 'react'
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  ArrowRight,
  FileCheck2,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseCertificationProps {
  certification: CourseData['certification']
  onOpenEnquiry: (subject?: string) => void
}

export const CourseCertification: React.FC<CourseCertificationProps> = ({
  certification,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 eyebrow-badge mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Course Completion & Industry Validation</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {certification.title}
          </h2>

          <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-600">
            {certification.subtitle}
          </p>

          <p className="mt-4 body-paragraph text-slate-600 max-w-2xl mx-auto">
            {certification.description}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Left Column: Certification Highlights Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    Core Security Areas Validated
                  </h3>
                  <p className="caption-text text-slate-500">During your learning journey</p>
                </div>
              </div>

              <div className="space-y-3">
                {certification.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="body-subtext font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Formula for Career Success: </span>
                Certification + Practical Projects + Portfolio Work = Verified Competence for Tech Interviews.
              </div>
            </div>
          </div>

          {/* Right Column: Regional Focus & Ethical Compliance Notice */}
          <div className="lg:col-span-6 space-y-6">
            {/* Regional Focus Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-3 text-accent-600 font-heading font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{certification.regionalFocus.title}</span>
              </div>

              <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-2">
                Empowering Tamil Nadu's Thriving Tech Ecosystem
              </h4>

              <p className="body-paragraph text-slate-600 text-sm leading-relaxed mb-4">
                {certification.regionalFocus.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certification.regionalFocus.keyAreas.map((area, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                    • {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Ethical Compliance Warning Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm text-amber-900">
                    {certification.ethicalHackingNote.title}
                  </h4>
                  <p className="caption-text text-amber-800">
                    {certification.ethicalHackingNote.description}
                  </p>
                  <p className="caption-text font-bold text-amber-900 pt-1">
                    {certification.ethicalHackingNote.complianceWarning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onOpenEnquiry('Cybersecurity - Certification Consultation')}
            className="px-6 py-3 rounded-xl text-sm font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-md shadow-accent-500/25 transition-all inline-flex items-center gap-2"
          >
            <span>Ask About Certification Guidance</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
