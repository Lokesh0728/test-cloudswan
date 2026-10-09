import React, { useState } from 'react'
import {
  X,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Upload,
} from 'lucide-react'
import { type JobPosition } from './careersData'

interface JobApplicationModalProps {
  position: JobPosition | null
  isOpen: boolean
  onClose: () => void
  isGeneralApplication?: boolean
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  position,
  isOpen,
  onClose,
  isGeneralApplication = false,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'apply'>('apply')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '1-3 Years',
    portfolioUrl: '',
    note: '',
    resumeFileName: '',
  })
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  if (!isOpen) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resumeFileName: e.target.files![0].name }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 700)
  }

  const handleResetAndClose = () => {
    setIsSubmitted(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '1-3 Years',
      portfolioUrl: '',
      note: '',
      resumeFileName: '',
    })
    setActiveTab('apply')
    onClose()
  }

  const titleText = isGeneralApplication
    ? 'General Application / Open Talent Pipeline'
    : position?.title || 'Open Role Application'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="career-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={handleResetAndClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 bg-slate-50/60 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-accent-50 text-accent-600 border border-accent-200/60 text-[10px]">
                {position ? position.department : 'General Application'}
              </span>
              {position && (
                <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px]">
                  {position.type}
                </span>
              )}
            </div>

            <h3 id="career-modal-title" className="display-h3 text-slate-900 pt-1">
              {titleText}
            </h3>

            {position && (
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-500" />
                  {position.workplaceType}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {position.experience} Experience
                </span>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-2 -mr-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher if Position Details exist */}
        {position && !isSubmitted && (
          <div className="flex border-b border-slate-200 bg-white px-6">
            <button
              type="button"
              onClick={() => setActiveTab('apply')}
              className={`py-3 px-4 text-xs sm:text-sm font-heading font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'apply'
                  ? 'border-accent-500 text-accent-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Apply Online
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`py-3 px-4 text-xs sm:text-sm font-heading font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'details'
                  ? 'border-accent-500 text-accent-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Role Details & Scope
            </button>
          </div>
        )}

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-7">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="display-card-title text-slate-900">
                Application Received!
              </h4>
              <p className="body-paragraph text-slate-600 max-w-md mx-auto">
                Thank you for applying to Cloudswan Solution. Our talent acquisition panel will review your profile and reach out within 2-3 business days.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 font-heading font-bold text-sm text-white shadow-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : activeTab === 'details' && position ? (
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900 mb-2">
                  Role Overview
                </h4>
                <p className="body-paragraph text-slate-600">
                  {position.description}
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900 mb-2">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {position.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900 mb-2">
                  Key Skills & Qualifications
                </h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveTab('apply')}
                  className="px-6 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 font-heading font-bold text-sm text-white shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Proceed to Apply</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-semibold text-slate-700 mb-1">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 font-sans bg-white"
                  >
                    <option value="Fresh Graduate / Final Year">Fresh Graduate / Final Year</option>
                    <option value="1 - 3 Years">1 - 3 Years</option>
                    <option value="3 - 5 Years">3 - 5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-semibold text-slate-700 mb-1">
                  Portfolio / GitHub / LinkedIn URL
                </label>
                <input
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  placeholder="https://github.com/yourhandle or linkedin.com/in/..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 font-sans"
                />
              </div>

              {/* Resume File Upload Simulation */}
              <div>
                <label className="block text-xs font-heading font-semibold text-slate-700 mb-1">
                  Upload Resume / CV (PDF or DOCX)
                </label>
                <label className="border-2 border-dashed border-slate-200 hover:border-accent-300 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-accent-50/20">
                  <Upload className="w-5 h-5 text-accent-500 mb-1" />
                  <span className="text-xs font-heading font-semibold text-slate-700">
                    {formData.resumeFileName ? formData.resumeFileName : 'Click to select resume document'}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    Max size: 10MB
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              <div>
                <label className="block text-xs font-heading font-semibold text-slate-700 mb-1">
                  Brief Introduction or Cover Note (Optional)
                </label>
                <textarea
                  rows={2}
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  placeholder="Tell us a little bit about yourself, key projects, or what excites you about Cloudswan..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 font-sans resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <span className="caption-text text-slate-500">
                  🔒 Your information is confidential and used solely for recruitment.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 font-heading font-bold text-sm text-white shadow-md shadow-accent-500/25 transition-all flex items-center gap-2 cursor-pointer shrink-0 disabled:opacity-70"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Send Application'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
