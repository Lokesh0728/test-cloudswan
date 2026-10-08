import React from 'react'
import {
  FileText,
  ArrowRight,
  Shield,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseDetailsTableProps {
  quickSpecs: CourseData['quickSpecs']
  onOpenEnquiry: (subject?: string) => void
}

export const CourseDetailsTable: React.FC<CourseDetailsTableProps> = ({
  quickSpecs,
  onOpenEnquiry,
}) => {
  const tableRows = [
    { feature: 'Course', details: quickSpecs.courseName },
    { feature: 'Duration', details: quickSpecs.duration },
    { feature: 'Mode', details: quickSpecs.mode },
    { feature: 'Level', details: quickSpecs.level },
    { feature: 'Core Skills', details: quickSpecs.coreSkills },
    { feature: 'Advanced Topics', details: quickSpecs.advancedTopics },
    { feature: 'Projects', details: quickSpecs.projects },
    { feature: 'Certification', details: quickSpecs.certification },
    { feature: 'Career Support', details: quickSpecs.careerSupport },
    { feature: 'Mentor Support', details: quickSpecs.mentorSupport },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/80 text-accent-700 eyebrow-badge mb-4 shadow-2xs">
            <FileText className="w-3.5 h-3.5 text-accent-600" />
            <span>Specifications Summary</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            Course Details
          </h2>

          <p className="mt-3 caption-text text-slate-500">
            Overview of curriculum structure, schedule formats, and candidate support
          </p>
        </div>

        {/* Course Details Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-500/20 text-accent-400 border border-accent-500/40 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-white">Program At A Glance</h3>
                <p className="caption-text text-slate-400">Coimbatore Training Center & Live Virtual Batches</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenEnquiry(`${quickSpecs.courseName} - Enroll in Next Batch`)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 transition-colors hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {tableRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:px-6 sm:py-4.5 hover:bg-slate-50/70 transition-colors items-center"
              >
                <div className="col-span-12 sm:col-span-4 font-heading font-bold text-sm text-slate-800">
                  {row.feature}
                </div>
                <div className="col-span-12 sm:col-span-8 body-paragraph text-slate-600 text-sm mt-1 sm:mt-0 font-medium">
                  {row.details}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <span className="caption-text text-slate-500">
              Need weekend batches or corporate group training discount?
            </span>
            <button
              type="button"
              onClick={() => onOpenEnquiry(`${quickSpecs.courseName} - Custom Schedule Inquiry`)}
              className="text-xs font-bold font-heading text-accent-600 hover:text-accent-700 transition-colors inline-flex items-center gap-1"
            >
              <span>Contact Admissions Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
