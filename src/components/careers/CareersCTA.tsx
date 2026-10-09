import React, { useState } from 'react'
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Mail,
  MapPin,
} from 'lucide-react'
import { CONTACT_INFO } from '../../data/navigationData'
import { JobApplicationModal } from './JobApplicationModal'

interface CareersCTAProps {
  onOpenPositionsClick: () => void
}

export const CareersCTA: React.FC<CareersCTAProps> = ({
  onOpenPositionsClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <section
      id="careers-cta"
      aria-label="Ready to Grow With Cloudswan"
      className="relative w-full overflow-hidden bg-slate-950 text-white py-20 sm:py-28"
    >
      {/* Background Soft Orange Glows & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[300px] bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-72 h-72 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Highlight Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 text-accent-400 eyebrow-badge animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-400" />
          <span>JOIN COIMBATORE'S FAST-GROWING TECH & ED-TECH HUB</span>
        </div>

        {/* Heading */}
        <h2 className="display-h2 text-white max-w-4xl mx-auto">
          Ready to Grow{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-500 to-amber-400">
            With Cloudswan?
          </span>
        </h2>

        {/* Description */}
        <p className="lead-paragraph text-slate-300 max-w-3xl mx-auto font-sans">
          Whether you want to build cutting-edge web applications, innovate in cloud operations, or mentor aspiring developers toward life-changing careers, we want you on our team.
        </p>

        {/* Value Bullet Points */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-400" />
            <span>Fast, respectful interview response</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-400" />
            <span>Competitive salary & upskilling sponsorship</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-400" />
            <span>Saravanampatti & Gandhipuram hubs</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 text-sm sm:text-base font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 transition-all duration-200 flex items-center gap-2 group cursor-pointer hover:-translate-y-0.5"
          >
            <span>Submit Your Resume Online</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onOpenPositionsClick}
            className="px-8 py-4 text-sm sm:text-base font-bold font-heading text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-accent-500/50 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5 shadow-xs"
          >
            <span>Browse All Open Roles</span>
          </button>
        </div>

        {/* Contact Strip */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-accent-400" />
            <span>careers@cloudswan.in</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-accent-400" />
            <span>{CONTACT_INFO.displayPhone}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-accent-400" />
            <span>Coimbatore, Tamil Nadu</span>
          </span>
        </div>
      </div>

      {/* General Application Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        position={null}
        isGeneralApplication={true}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
