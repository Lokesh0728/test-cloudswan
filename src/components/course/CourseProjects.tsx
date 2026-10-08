import React from 'react'
import {
  FolderGit2,
  Terminal,
  ShieldAlert,
  ArrowRight,
  Cpu,
  Radio,
  Activity,
  Layers,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseProjectsProps {
  projects: CourseData['projects']
  onOpenEnquiry: (subject?: string) => void
}

const PROJECT_ICONS = [
  Radio,
  ShieldAlert,
  Terminal,
  Activity,
  Cpu,
  Layers,
]

export const CourseProjects: React.FC<CourseProjectsProps> = ({
  projects,
  onOpenEnquiry,
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/80 text-accent-700 eyebrow-badge mb-4 shadow-2xs">
            <FolderGit2 className="w-3.5 h-3.5 text-accent-600" />
            <span>Hands-On Sandbox Projects</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            {projects.title}
          </h2>

          <p className="mt-3 font-heading font-bold text-base sm:text-lg text-accent-600">
            {projects.subtitle}
          </p>

          <p className="mt-4 body-paragraph text-slate-600 max-w-2xl mx-auto">
            {projects.description}
          </p>
        </div>

        {/* 6 Practical Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.items.map((proj, idx) => {
            const IconComp = PROJECT_ICONS[idx % PROJECT_ICONS.length]

            return (
              <div
                key={proj.number}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-accent-200 p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="eyebrow-badge px-2.5 py-1 rounded-full bg-accent-50 text-accent-600 border border-accent-100 text-[11px]">
                      Project {proj.number}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-accent-50 text-slate-600 group-hover:text-accent-600 flex items-center justify-center transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-accent-600 transition-colors">
                    {proj.title}
                  </h3>

                  {/* Focus Area Pill */}
                  <div className="mt-2.5 mb-3">
                    <span className="caption-text font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 inline-block">
                      {proj.focusArea}
                    </span>
                  </div>

                  {/* Description from PDF */}
                  <p className="body-subtext text-slate-600 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                {/* Tools Tags & Action Footer */}
                <div className="pt-4 border-t border-slate-100">
                  {proj.toolsUsed && proj.toolsUsed.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {proj.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="eyebrow-badge text-[10px] px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200/70"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(`${projects.title} - Project ${proj.number}: ${proj.title}`)}
                    className="w-full py-2 px-3 rounded-xl text-xs font-bold font-heading text-accent-600 hover:text-accent-700 hover:bg-accent-50/70 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Project Lab Scope</span>
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
