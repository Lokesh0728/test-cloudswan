import React, { useState } from 'react'
import {
  User,
  Mail,
  Phone,
  BookOpen,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  PhoneCall,
  Clock,
  ShieldCheck,
  Award,
  ArrowRight,
} from 'lucide-react'
import { COURSE_CATEGORIES } from '../../data/navigationData'

interface ContactFormSectionProps {
  initialCourse?: string
  initialLocation?: string
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  initialCourse = '',
  initialLocation = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: initialCourse,
    location: initialLocation,
    mode: 'Classroom Campus',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate reliable API submission with smooth transition
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      location: '',
      mode: 'Classroom Campus',
      message: '',
    })
    setIsSubmitted(false)
  }

  return (
    <section
      id="contact-form"
      aria-label="Course Admission and Enquiry Form"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle background ambient styling */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Why Connect & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-accent-500" />
              <span>DIRECT ADMISSIONS DESK</span>
            </div>

            <div className="space-y-2">
              <h2 className="display-h2 text-slate-900">
                Speak with Our Career <span className="text-accent-500">Counselors</span>
              </h2>
              <p className="lead-paragraph text-slate-600">
                Get an unbiased evaluation of your background, explore hands-on software roadmaps, and find the right batch timing for your schedule.
              </p>
            </div>

            {/* What you will receive list - Uniform clean design */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-accent-500 border border-orange-100/80 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-accent-500" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    Comprehensive Syllabus & Project Blueprint
                  </h4>
                  <p className="body-subtext text-slate-500 text-xs mt-0.5">
                    Receive the exact topic breakdown, tools covered, and enterprise capstone project details for your course.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-accent-500 border border-orange-100/80 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-accent-500" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    Free 1-on-1 Profile Assessment
                  </h4>
                  <p className="body-subtext text-slate-500 text-xs mt-0.5">
                    Our advisors evaluate whether you are suited for Cloud, Full-Stack, AI/ML, Data Science, or Global Certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-accent-500 border border-orange-100/80 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-accent-500" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                    Flexible Batch Scheduling
                  </h4>
                  <p className="body-subtext text-slate-500 text-xs mt-0.5">
                    Choose between morning, evening, and weekend immersion cohorts across our Gandhipuram and Saravanampatti centers.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Instant Hotline Card for Both Branches */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 sm:p-6 text-white shadow-xl">
              <span className="text-[11px] font-heading uppercase tracking-wider text-slate-400 font-bold block mb-3">
                Need immediate phone counseling?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <span className="text-[10px] uppercase font-bold text-accent-400 block">Gandhipuram (Ramnagar)</span>
                  <a
                    href="tel:+918903835098"
                    className="font-heading font-bold text-sm text-white hover:text-accent-400 transition-colors flex items-center gap-1.5 mt-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-accent-400" />
                    <span>+91 89038 35098</span>
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <span className="text-[10px] uppercase font-bold text-accent-400 block">Saravanampatti (Main Bus Stop)</span>
                  <a
                    href="tel:+917708262565"
                    className="font-heading font-bold text-sm text-white hover:text-accent-400 transition-colors flex items-center gap-1.5 mt-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-accent-400" />
                    <span>+91 7708 262 565</span>
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-700/60">
                Admissions counselors are available Mon – Sat from 9:30 AM to 6:30 PM.
              </p>
            </div>
          </div>

          {/* Right Column: The Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-8 lg:p-10 relative">
              {/* Top Accent Stripe - Secondary Orange only */}
              <span className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-accent-500 via-orange-400 to-accent-600 rounded-t-[2rem]" />

              {/* Form Heading */}
              <div className="mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-px w-6 bg-accent-500" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent-600 font-heading">
                    Official Admissions Enquiry
                  </span>
                  <span className="h-px w-6 bg-accent-200" />
                </div>
                <h3 className="display-card-title text-slate-900 text-xl sm:text-2xl">
                  Send Your Enquiry / Book Counseling
                </h3>
                <p className="caption-text text-slate-500 mt-1 text-xs sm:text-sm">
                  Fill in your details below and our counseling team will get back to you with the complete syllabus and schedule.
                </p>
              </div>

              {isSubmitted ? (
                /* Success State */
                <div className="py-8 sm:py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-accent-500 border border-orange-200/80 shadow-lg shadow-orange-500/10">
                    <CheckCircle2 className="h-10 w-10 text-accent-500" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="display-h3 text-slate-900">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="caption-text text-accent-600 font-bold uppercase tracking-wider text-xs">
                      Reference Logged
                    </p>
                  </div>

                  <p className="mx-auto max-w-md text-xs sm:text-sm leading-relaxed text-slate-600">
                    Thank you, <strong className="text-slate-900">{formData.name || 'valued learner'}</strong>! Our senior academic counselor from our{' '}
                    <strong className="text-slate-900">{formData.location || 'Coimbatore'}</strong> campus will contact you at{' '}
                    <strong className="text-slate-900">{formData.phone || 'your phone number'}</strong> shortly with full course details.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-heading font-bold shadow-xs transition-all cursor-pointer"
                    >
                      <span>Submit Another Enquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Full Name <span className="text-accent-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-xs sm:text-sm text-slate-800 transition-all focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Email Address <span className="text-accent-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-xs sm:text-sm text-slate-800 transition-all focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Phone Number <span className="text-accent-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 89038 35098"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-xs sm:text-sm text-slate-800 transition-all focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course & Preferred Campus Location */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Course of Interest <span className="text-accent-500">*</span>
                      </label>
                      <div className="relative">
                        <BookOpen className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <select
                          required
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-xs sm:text-sm text-slate-800 transition-all focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                        >
                          <option value="">Select a Course...</option>
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
                      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Preferred Campus Branch <span className="text-accent-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <select
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-xs sm:text-sm text-slate-800 transition-all focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                        >
                          <option value="">Select Campus...</option>
                          <option value="Gandhipuram">Gandhipuram - Ramnagar (234, Vivekananda Rd)</option>
                          <option value="Saravanampatti">Saravanampatti - Main Bus Stop (Above Green Leaf Hotel)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Training Mode */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Training Mode Preference
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {['Classroom Campus', 'Online Live Interactive'].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setFormData({ ...formData, mode })}
                          className={`rounded-xl border py-2.5 px-3 text-center text-xs sm:text-sm font-heading transition-all cursor-pointer ${
                            formData.mode === mode
                              ? 'border-accent-500 bg-orange-50 font-bold text-accent-700 shadow-xs'
                              : 'border-slate-200 font-medium text-slate-600 hover:border-orange-200 hover:bg-orange-50/40'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Optional Message / Notes */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Additional Message or Specific Batch Requirements (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <textarea
                        rows={3}
                        placeholder="Mention any specific queries, preferred batch times (morning/weekend), or target certifications..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-xs sm:text-sm text-slate-800 transition-all focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-3.5 text-sm font-heading font-bold tracking-wide text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:shadow-accent-500/35 active:scale-[0.99] cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Your Enquiry...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Admission Enquiry</span>
                      </>
                    )}
                  </button>

                  {/* Privacy note */}
                  <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent-500" />
                    <span>Your contact details are strictly confidential and will never be shared.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
