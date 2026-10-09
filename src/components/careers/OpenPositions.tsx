import React, { useState } from 'react'
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Info,
  Send,
  Search,
} from 'lucide-react'
import {
  JOB_CATEGORIES,
  SAMPLE_POSITIONS,
  type JobPosition,
} from './careersData'
import { JobApplicationModal } from './JobApplicationModal'

export const OpenPositions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isGeneralApp, setIsGeneralApp] = useState<boolean>(false)

  // Filter positions
  const filteredPositions = SAMPLE_POSITIONS.filter((pos) => {
    const matchesCategory =
      selectedCategory === 'all' || pos.category === selectedCategory
    const matchesQuery =
      searchQuery.trim() === '' ||
      pos.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesQuery
  })

  const handleOpenDetails = (pos: JobPosition) => {
    setSelectedPosition(pos)
    setIsGeneralApp(false)
    setIsModalOpen(true)
  }

  const handleOpenGeneralApp = () => {
    setSelectedPosition(null)
    setIsGeneralApp(true)
    setIsModalOpen(true)
  }

  return (
    <section
      id="open-positions"
      aria-label="Open Positions at Cloudswan"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            <span>JOIN OUR TEAM</span>
            <span className="text-accent-300">•</span>
            <span className="text-slate-600 font-medium normal-case">Talent Pipeline</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            Find Your Next{' '}
            <span className="relative inline-block text-accent-500">
              Opportunity
              <span className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-accent-200" />
            </span>
          </h2>

          <p className="lead-paragraph mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore active hiring disciplines across engineering, cloud operations, product design, and academic leadership.
          </p>

          {/* Transparent Talent Pipeline Disclaimer Notice */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left sm:text-center max-w-2xl mx-auto">
            <Info className="w-4 h-4 text-accent-500 shrink-0" />
            <span>
              <strong>Note:</strong> These listings showcase our recurring talent disciplines and active recruitment pipeline. Cloudswan welcomes resumes year-round across these skill areas.
            </span>
          </div>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="mb-8 space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {JOB_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-accent-500 text-white shadow-sm shadow-accent-500/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Search Input Filter */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role title or skill (e.g. React, Python, AWS)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 font-sans bg-slate-50/50"
            />
          </div>
        </div>

        {/* Job Listings Grid */}
        {filteredPositions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPositions.map((role) => (
              <div
                key={role.id}
                className="group rounded-3xl bg-white border border-slate-200/90 hover:border-accent-300/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-accent-50 text-accent-600 border border-accent-200/60 text-[10px]">
                      {role.department}
                    </span>
                    <span className="eyebrow-badge px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px]">
                      {role.type}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="display-card-title text-slate-900 group-hover:text-accent-600 transition-colors">
                    {role.title}
                  </h3>

                  {/* Metadata: Location & Experience */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2.5 mb-3.5 font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                      <span>{role.workplaceType}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{role.experience}</span>
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="body-paragraph text-slate-600 line-clamp-3 text-xs sm:text-sm">
                    {role.description}
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {role.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-sans font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {role.skills.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-400 text-[11px]">
                        +{role.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenDetails(role)}
                    className="text-xs font-heading font-bold text-slate-600 hover:text-accent-600 transition-colors cursor-pointer py-1.5"
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenDetails(role)}
                    className="px-4 py-2 rounded-xl bg-accent-50 hover:bg-accent-500 text-accent-600 hover:text-white font-heading font-bold text-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12 px-6 rounded-3xl bg-slate-50 border border-slate-200/80 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-accent-500 mx-auto flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="display-card-title text-slate-900">
              No matching positions found
            </h3>
            <p className="body-paragraph text-slate-600 text-sm">
              We may not have an active opening under this specific filter, but we are always eager to meet high-caliber talent.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleOpenGeneralApp}
                className="px-5 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-heading font-bold text-xs sm:text-sm shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Submit General Application</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* General Application Banner below cards */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-accent-400 font-heading text-xs font-bold uppercase tracking-wider">
              <Send className="w-3.5 h-3.5" />
              <span>Don't see the exact fit for your background?</span>
            </div>
            <h3 className="display-card-title text-white">
              Send an Open Application to Our Talent Pool
            </h3>
            <p className="caption-text text-slate-300 max-w-xl font-sans">
              Tell us what you do best. When a matching challenge arises in our engineering or instructional team, you'll be first on our call list.
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenGeneralApp}
            className="px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 font-heading font-bold text-xs sm:text-sm text-white shadow-lg shadow-accent-500/30 transition-all duration-200 shrink-0 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
          >
            <span>Submit Open Application</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Application / Details Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        position={selectedPosition}
        isGeneralApplication={isGeneralApp}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
