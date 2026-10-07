import React from 'react'
import {
  Wrench,
  Terminal,
  Shield,
  Network,
  Cpu,
  Layers,
  Lock,
  ArrowRight,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseToolsStackProps {
  toolsStack: CourseData['toolsStack']
  onOpenEnquiry: (subject?: string) => void
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'Operating Systems': Terminal,
  'Network Security': Network,
  'Web Security': Shield,
  'Security Testing': Cpu,
  'Security Concepts & Defense': Lock,
}

export const CourseToolsStack: React.FC<CourseToolsStackProps> = ({
  toolsStack,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/80 text-accent-700 eyebrow-badge mb-4 shadow-2xs">
            <Wrench className="w-3.5 h-3.5 text-accent-600" />
            <span>Modern Industry Toolchain</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {toolsStack.title}
          </h2>

          <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-600">
            {toolsStack.subtitle}
          </p>

          <p className="mt-4 body-paragraph text-slate-600 max-w-2xl mx-auto">
            {toolsStack.description}
          </p>
        </div>

        {/* Categorized Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {toolsStack.categories.map((cat, idx) => {
            const IconComp = CATEGORY_ICONS[cat.category] || Layers

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-accent-200 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-slate-900">
                        {cat.category}
                      </h3>
                      {cat.description && (
                        <p className="caption-text text-slate-500 text-[11px]">
                          {cat.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tool Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.tools.map((tool, tIdx) => (
                      <div
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 font-heading font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow-2xs hover:bg-accent-50 hover:border-accent-200 hover:text-accent-600 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="caption-text text-slate-400">
                    {cat.tools.length} Tools Covered
                  </span>
                  <span className="eyebrow-badge text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Verified Curriculum
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Labs Guarantee Banner & Action */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="caption-text text-slate-500 text-center sm:text-left">
            * All security tools are practiced inside dedicated, isolated sandbox virtual lab environments compliant with ethical standards.
          </p>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Cybersecurity - Tools & Virtual Lab Inquiry')}
            className="shrink-0 px-4 py-2 text-xs font-bold font-heading text-accent-600 hover:text-accent-700 bg-accent-50 hover:bg-accent-100 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <span>Request Lab Access Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
