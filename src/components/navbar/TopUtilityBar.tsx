import React from 'react'
import { Phone, Clock, ArrowRight, Check } from 'lucide-react'
import { CONTACT_INFO } from '../../data/navigationData'

interface TopUtilityBarProps {
  onOpenEnquiry?: () => void
  onMouseEnter?: () => void
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onOpenEnquiry, onMouseEnter }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 hidden md:block"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8">
          {/* LEFT SIDE: Campus Contacts */}
          <div className="flex items-center gap-4 lg:gap-5">
            <a
              href={`tel:${CONTACT_INFO.coimbatorePhone}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-accent-500 shrink-0" />
              <span>
                Coimbatore:{' '}
                <span className="text-slate-200 font-medium">
                  {CONTACT_INFO.coimbatoreDisplayPhone}
                </span>
              </span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.saravanampattiPhone}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-accent-500 shrink-0" />
              <span>
                Saravanampatti:{' '}
                <span className="text-slate-200 font-medium">
                  {CONTACT_INFO.saravanampattiDisplayPhone}
                </span>
              </span>
            </a>
          </div>

          {/* CENTER / RIGHT: Operating Hours */}
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3 h-3 text-slate-500 shrink-0" />
            <span>{CONTACT_INFO.operatingHours}</span>
          </div>

          {/* RIGHT SIDE: ISO Certification & Request Callback */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[2.5]" />
              <span>ISO 9001:2015 Certified</span>
            </div>
            <span className="text-slate-700">|</span>
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 font-medium transition-colors cursor-pointer"
            >
              <span>Request Callback</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}






