import React, { useEffect } from 'react'
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react'
import { POLICY_DOCS } from './footerData'

export type PolicyKey = keyof typeof POLICY_DOCS

interface FooterPolicyModalProps {
  policyKey: PolicyKey | null
  onClose: () => void
}

export const FooterPolicyModal: React.FC<FooterPolicyModalProps> = ({
  policyKey,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (policyKey) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [policyKey, onClose])

  if (!policyKey) return null

  const policy = POLICY_DOCS[policyKey]
  if (!policy) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100 overflow-hidden flex flex-col max-h-[88vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/90 bg-slate-900/95">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-accent-500 shadow-xs">
              <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <h2 id="policy-dialog-title" className="text-lg font-heading font-bold text-white tracking-tight">
                {policy.title}
              </h2>
              <p className="text-xs text-slate-400 font-sans">
                CloudSwan Institutional Standards • Revised {policy.lastUpdated}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-slate-300 leading-relaxed custom-scrollbar">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
            <FileText className="w-5 h-5 text-accent-500 shrink-0 mt-0.5 stroke-[1.75]" />
            <p className="text-xs text-slate-400">
              This charter governs all academic cohorts, laboratory facilities, and placement procedures across both our Gandhipuram and Saravanampatti campuses in Coimbatore.
            </p>
          </div>

          {policy.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2 border-b border-slate-800/60 pb-5 last:border-b-0 last:pb-0">
              <h3 className="text-sm font-heading font-semibold text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                {sec.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}

          <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 border-t border-slate-800/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 stroke-[1.75]" />
            <span>Compliant with ISO 9001:2015 institutional governance guidelines</span>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            REF: CS-GOV-{policyKey.toUpperCase()}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-heading font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  )
}
