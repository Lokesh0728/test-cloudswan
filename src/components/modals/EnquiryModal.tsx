import React, { useState, useEffect } from 'react'
import {
  X,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  User,
  BookOpen,
  MapPin,
} from 'lucide-react'
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
    location: '',
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
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
      }, 1600)
    }, 200)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-3 sm:p-4 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative my-auto flex max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2.5rem)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-in zoom-in-95 duration-200">

        {/* =================================================
            MODAL HEADER
        ================================================= */}

        <div className="relative shrink-0 border-b border-slate-100 bg-white px-5 py-3.5 sm:px-6 sm:py-4">

          {/* Orange accent */}
          <span className="absolute left-0 top-0 h-1 w-full bg-orange-500" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-orange-50 hover:text-orange-500"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-1.5 sm:mb-2 flex items-center gap-2">
            <span className="h-px w-6 sm:w-7 bg-orange-500" />

            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-orange-600">
              Admissions & Counseling
            </span>

            <span className="h-px w-6 sm:w-7 bg-orange-200" />
          </div>

          <h2
            id="enquiry-modal-title"
            className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-snug"
          >
            Connect with Academic Advisors
          </h2>

          <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Get syllabus details, fee structure, batch schedules & 1-on-1 career guidance.
          </p>
        </div>


        {/* =================================================
            MODAL BODY (Scrollable on small heights)
        ================================================= */}

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">

          {isSubmitted ? (
            <div className="space-y-3 py-6 sm:py-8 text-center">

              <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Enquiry Received!
              </h3>

              <p className="mx-auto max-w-xs text-xs sm:text-sm leading-relaxed text-slate-600">
                Thank you, {formData.name || 'valued student'}! Our senior
                counselor will contact you at{' '}
                {formData.phone || 'your number'} shortly.
              </p>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">

              {/* =================================================
                  FULL NAME
              ================================================= */}

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 text-slate-400" />

                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>


              {/* =================================================
                  EMAIL + PHONE (2 Cols on Tablet & Desktop)
              ================================================= */}

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Email */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 text-slate-400" />

                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 text-slate-400" />

                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

              </div>


              {/* =================================================
                  COURSE + LOCATION (2 Cols on Tablet & Desktop)
              ================================================= */}

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Course */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Course of Interest
                  </label>

                  <div className="relative">
                    <BookOpen className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 text-slate-400" />

                    <select
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          course: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="">
                        Select a Course...
                      </option>

                      {COURSE_CATEGORIES.map((category) => (
                        <optgroup
                          key={category.id}
                          label={`-- ${category.title} --`}
                        >
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

                {/* Location */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Preferred Location
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 text-slate-400" />

                    <select
                      required
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          location: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white py-2 sm:py-2.5 pl-9 pr-3 text-xs sm:text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="">
                        Select Location...
                      </option>

                      <option value="Gandhipuram">
                        Gandhipuram
                      </option>

                      <option value="Saravanampatti">
                        Saravanampatti
                      </option>
                    </select>
                  </div>
                </div>

              </div>


              {/* =================================================
                  TRAINING MODE
              ================================================= */}

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Training Mode
                </label>

                <div className="grid grid-cols-2 gap-2">

                  {[
                    'Online Live Interactive',
                    'Classroom Campus',
                  ].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          mode,
                        })
                      }
                      className={`rounded-xl border px-3 py-2 text-center text-xs transition-all ${
                        formData.mode === mode
                          ? 'border-orange-500 bg-orange-50 font-bold text-orange-600 shadow-2xs'
                          : 'border-slate-200 font-medium text-slate-600 hover:border-orange-200 hover:bg-orange-50/50'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}

                </div>
              </div>


              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="mt-3 sm:mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 sm:py-3 text-sm font-bold tracking-wide text-white shadow-md shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.99]"
              >
                <Send className="h-4 w-4" />
                <span>Submit Enquiry</span>
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  )
}