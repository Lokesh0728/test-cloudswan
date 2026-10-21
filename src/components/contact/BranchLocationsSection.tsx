import React, { useState } from 'react'
import {
  MapPin,
  Navigation,
  PhoneCall,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Building2,
} from 'lucide-react'
import { CAMPUS_BRANCHES, type CampusBranch } from './contactData'

export const BranchLocationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'gandhipuram' | 'saravanampatti'>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopyAddress = (branch: CampusBranch) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(branch.address.full)
      setCopiedId(branch.id)
      setTimeout(() => {
        setCopiedId(null)
      }, 2000)
    }
  }

  const branchesToDisplay =
    activeTab === 'all'
      ? CAMPUS_BRANCHES
      : CAMPUS_BRANCHES.filter((b) => b.id === activeTab)

  return (
    <section
      id="campus-locations"
      aria-label="CloudSwan Campus Branches and Google Maps"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-accent-500" />
            <span>TWO CONVENIENT BRANCHES</span>
            <span className="text-accent-300">•</span>
            <span className="text-slate-600 font-medium normal-case">Coimbatore, Tamil Nadu</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            Visit Our Coimbatore <span className="text-accent-500">Campuses</span>
          </h2>

          <p className="lead-paragraph text-slate-600">
            Walk into either of our prime Coimbatore centers for practical lab demonstrations, comprehensive syllabus blueprints, and personalized career consultation.
          </p>

          {/* Interactive Campus Filter Tabs */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${activeTab === 'all'
                  ? 'bg-accent-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                Both Campuses ({CAMPUS_BRANCHES.length})
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('gandhipuram')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'gandhipuram'
                  ? 'bg-accent-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeTab === 'gandhipuram' ? 'bg-white' : 'bg-accent-500'}`} />
                <span>Gandhipuram</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('saravanampatti')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'saravanampatti'
                  ? 'bg-accent-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeTab === 'saravanampatti' ? 'bg-white' : 'bg-accent-500'}`} />
                <span>Saravanampatti</span>
              </button>
            </div>
          </div>
        </div>

        {/* Campuses Grid with Google Maps - Symmetrically Aligned & Premium */}
        <div
          className={`grid gap-8 lg:gap-10 items-stretch ${activeTab === 'all' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-4xl mx-auto'
            }`}
        >
          {branchesToDisplay.map((branch) => {
            const isCopied = copiedId === branch.id

            return (
              <article
                key={branch.id}
                id={`campus-${branch.id}`}
                className="flex flex-col justify-between rounded-[2rem] bg-white border border-slate-200/90 shadow-xl shadow-slate-200/40 overflow-hidden hover:shadow-2xl hover:border-orange-200/90 transition-all duration-300"
              >
                {/* 1. CARD HEADER */}
                <div className="p-6 sm:p-7 pb-5 border-b border-slate-100 bg-gradient-to-b from-slate-50/70 to-white">
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold bg-orange-50 text-accent-700 border border-orange-200/80">
                      <Building2 className="w-3.5 h-3.5 text-accent-500" />
                      <span>{branch.branchTag}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-[11px] font-heading font-semibold text-slate-500 bg-slate-100/80 border border-slate-200/70 px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-accent-500" />
                      <span>{branch.hours}</span>
                    </span>
                  </div>

                  <h3 className="display-card-title text-slate-900 text-xl sm:text-2xl font-bold">
                    {branch.name}
                  </h3>

                  <p className="caption-text text-slate-500 text-xs sm:text-sm mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                    <span className="font-medium text-slate-600">{branch.landmark}</span>
                  </p>
                </div>

                {/* 2. INTERACTIVE GOOGLE MAP CONTAINER */}
                <div className="relative mx-6 sm:mx-7 mt-5 rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 shadow-inner group">
                  <div className="relative w-full h-[250px] sm:h-[280px]">
                    <iframe
                      title={`Google Map - ${branch.name}`}
                      src={branch.mapEmbedUrl}
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />

                    {/* Top Floating Glassmorphism Badge */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-xs font-heading font-bold text-slate-800">
                        <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                        <span>Google Verified</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-amber-500 flex items-center gap-0.5">★ 4.9</span>
                      </div>
                    </div>

                    {/* Bottom Floating Quick Link */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                      <a
                        href={branch.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 hover:bg-white text-slate-800 hover:text-accent-600 border border-slate-200 shadow-md text-xs font-heading font-bold transition-all hover:scale-105 active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-accent-500" />
                        <span>Open Map App</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. STRUCTURED SPECIFICATION BODY (PRECISION ALIGNED TEXTS) */}
                <div className="p-6 sm:p-7 pt-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Row A: Full Address with Clean Copy Action */}
                  <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-accent-500 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-accent-500" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-400 block">
                          Postal Address
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug truncate">
                          {branch.address.line1}, {branch.address.line2}
                        </p>
                        <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                          {branch.address.city}, {branch.address.state} – {branch.address.pincode}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyAddress(branch)}
                      title="Copy full address"
                      className="p-2 rounded-lg text-slate-500 hover:text-accent-600 hover:bg-white border border-transparent hover:border-slate-200 transition-all shrink-0 cursor-pointer"
                      aria-label={`Copy address for ${branch.name}`}
                    >
                      {isCopied ? (
                        <div className="flex items-center gap-1 text-accent-600 font-bold text-xs">
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </div>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Row B: Contact & Official Inquiries (2 Equal Symmetrical Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Direct Campus Helpline */}
                    <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-orange-200 transition-colors">
                      <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-400 block">
                        Campus Helpline
                      </span>
                      <a
                        href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-bold font-heading text-slate-800 hover:text-accent-600 block mt-1 transition-colors"
                      >
                        {branch.displayPhone}
                      </a>
                    </div>

                    {/* Official Campus Email */}
                    <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-orange-200 transition-colors min-w-0">
                      <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-400 block">
                        Official Email
                      </span>
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-xs sm:text-sm font-bold font-heading text-slate-800 hover:text-accent-600 block mt-1 transition-colors truncate"
                      >
                        <span className="truncate">{branch.email}</span>
                      </a>
                    </div>
                  </div>

                  {/* Row C: Commute & Parking Access (2 Equal Symmetrical Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Public Transit */}
                    <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                      <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-400 block">
                        Public Transit
                      </span>
                      <p className="text-xs font-medium text-slate-700 leading-tight mt-0.5">
                        {branch.transit.bus}
                      </p>
                    </div>

                    {/* On-Campus Parking */}
                    <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                      <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-400 block">
                        Campus Parking
                      </span>
                      <p className="text-xs font-medium text-slate-700 leading-tight mt-0.5">
                        {branch.transit.parking}
                      </p>
                    </div>
                  </div>

                  {/* Row D: Infrastructure & Lab Facilities (2x2 Clean Grid) */}
                  <div>
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Campus Highlights & Facilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {branch.facilities.map((fac, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 px-2.5 rounded-lg bg-slate-50/70 border border-slate-100 text-xs font-medium text-slate-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                          <span className="truncate">{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row E: Bottom Aligned Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 shadow-md shadow-accent-500/25 transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Call : {branch.displayPhone}</span>
                    </a>

                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-heading font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 transition-all active:scale-[0.98]"
                    >
                      <Navigation className="w-4 h-4 text-accent-500" />
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
