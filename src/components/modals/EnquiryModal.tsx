import React, { useState, useEffect } from 'react'
import { X, CheckCircle2, Send, Sparkles, Phone, Mail, User, BookOpen } from 'lucide-react'
import { COURSE_CATEGORIES } from '../../data/navigationData'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  initialCourseOrSubject?: string
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialCourseOrSubject = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    mode: 'Online Live Interactive',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (initialCourseOrSubject) {
      setFormData((prev) => ({
        ...prev,
        course: initialCourseOrSubject,
      }))
    }
    if (isOpen) {
      setIsSubmitted(false)
    }
  }, [initialCourseOrSubject, isOpen])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      // Auto close after success
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
      }, 1600)
    }, 200)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="eyebrow-badge inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30 text-xs mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions & Counseling</span>
          </div>
          <h2 id="enquiry-modal-title" className="display-card-title text-white">
            Connect with Academic Advisors
          </h2>
          <p className="body-subtext text-slate-300 mt-1">
            Get syllabus details, fee structure, batch schedules & 1-on-1 career guidance.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="display-card-title text-slate-900">Enquiry Received!</h3>
              <p className="body-subtext text-slate-600 max-w-xs mx-auto">
                Thank you, {formData.name || 'valued student'}! Our senior counselor will contact you at {formData.phone || 'your number'} shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold font-sans text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold font-sans text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold font-sans text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold font-sans text-slate-700 mb-1">
                  Course of Interest
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white transition-all"
                  >
                    <option value="">Select a Course or Program...</option>
                    {COURSE_CATEGORIES.map((category) => (
                      <optgroup key={category.id} label={`-- ${category.title} --`}>
                        {category.courses.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold font-sans text-slate-700 mb-1">
                  Training Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Online Live Interactive', 'Classroom Campus'].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setFormData({ ...formData, mode })}
                      className={`py-2 px-3 text-xs font-heading rounded-xl border text-center transition-all ${
                        formData.mode === mode
                          ? 'border-accent-500 bg-accent-50 text-accent-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300 font-medium'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-accent-500 hover:bg-accent-600 text-white font-bold font-heading tracking-wide text-sm rounded-xl shadow-md shadow-accent-500/25 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
