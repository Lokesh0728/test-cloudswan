import React, { useState } from 'react'
import {
  Home,
  ChevronRight,
  Sparkles,
  MapPin,
  Clock,
  Laptop,
  Award,
  CheckCircle2,
  Phone,
  Send,
  ShieldCheck,
  MessageSquare,
  User,
  Mail,
  GraduationCap,
} from 'lucide-react'
import type { GeneralCourseData } from '../../types/generalCourse'
import { CONTACT_INFO } from '../../data/navigationData'

interface GeneralCourseHeroProps {
  course: GeneralCourseData
  onOpenEnquiry: (subject?: string) => void
  onNavigate: (path: string) => void
}

export const GeneralCourseHero: React.FC<GeneralCourseHeroProps> = ({
  course,
  onOpenEnquiry,
  onNavigate,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    mode: 'Classroom (Gandhipuram / Saravanampatti)',
    timing: 'Weekday Morning',
    goal: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 border-b border-slate-200/80 pt-6 pb-12 sm:pb-16 lg:pt-8 lg:pb-20">
      {/* Background Lighting Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-tr from-accent-500/10 via-orange-400/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium flex-wrap">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-accent-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="hover:text-accent-600 transition-colors"
          >
            Courses
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-600 font-medium">{course.categoryTitle}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-none">{course.shortTitle}</span>
        </nav>

        {/* Top Announcement Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-2.5 sm:px-4 sm:py-2 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-md">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="eyebrow-badge inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-600 border border-accent-500/20 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span>{course.categoryTitle}</span>
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium font-sans">
              <MapPin className="w-3.5 h-3.5 text-accent-500" />
              <span>Coimbatore Campus (Gandhipuram & Saravanampatti) • Live Online Batches</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>New Batch Starting This Monday</span>
          </div>
        </div>

        {/* Hero Main Grid: Left = Course Info, Right = Interactive Enrollment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, Badges, Tagline & Overview */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-xs">
              <Sparkles className="w-4 h-4 text-accent-500 shrink-0" />
              <span>100% Practical Training</span>
              <span className="text-accent-300">|</span>
              <span className="normal-case font-semibold text-slate-600">ISO 9001:2015 Certified</span>
            </div>

            {/* Course Title with High-Contrast Gradient */}
            <h1 className="display-h1 text-slate-900">
              {course.title.replace(' in Coimbatore', '')}{' '}
              <span className="bg-gradient-to-r from-accent-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                in Coimbatore
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-heading text-lg sm:text-xl font-bold text-slate-800 leading-snug">
              {course.tagline}
            </p>

            {/* Overview Paragraphs */}
            <div className="space-y-3 lead-paragraph text-slate-600 border-l-2 border-accent-500/40 pl-4 py-1">
              {course.overview.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'font-medium text-slate-700' : 'body-paragraph'}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Fast Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                  <Clock className="w-3.5 h-3.5 text-accent-500" />
                  <span>Duration</span>
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                  {course.specs.duration}
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                  <Laptop className="w-3.5 h-3.5 text-accent-500" />
                  <span>Training Mode</span>
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-slate-900 truncate" title={course.specs.mode}>
                  Classroom & Online
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                  <Award className="w-3.5 h-3.5 text-accent-500" />
                  <span>Certification</span>
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                  Govt / ISO Recognized
                </div>
              </div>
            </div>

            {/* Quick Guarantees Checkmarks */}
            <div className="pt-2 border-t border-slate-200/80 space-y-2">
              <div className="eyebrow-badge text-slate-500 text-[11px]">Key Program Highlights</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {course.highlights.slice(0, 4).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Helpline Strip */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 pt-2">
              <button
                type="button"
                onClick={() => onOpenEnquiry(`${course.shortTitle} - Free Consultation`)}
                className="inline-flex items-center gap-1.5 font-bold font-heading text-accent-600 hover:text-accent-700 bg-accent-50/80 hover:bg-accent-100/80 px-3 py-1.5 rounded-xl border border-accent-200/60 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Request Free Callback</span>
              </button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-1.5 font-bold font-heading text-slate-700 hover:text-accent-600"
              >
                <Phone className="w-4 h-4 text-accent-500" />
                <span>Call Admissions: {CONTACT_INFO.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Enrollment & Counseling Form */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-slate-200/90 overflow-hidden">
              {/* Decorative Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-500 via-orange-500 to-amber-500" />

              {/* Form Header */}
              <div className="mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-accent-50 text-accent-600 border border-accent-100 text-[11px]">
                    Free Demo Class & Counseling
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Batches Open
                  </span>
                </div>
                <h3 className="display-card-title text-slate-900 mt-2">
                  Enroll in {course.shortTitle}
                </h3>
                <p className="caption-text text-slate-500 mt-1">
                  Fill in your details below to receive the complete syllabus, batch timings, and fee structure.
                </p>
              </div>

              {/* Form Body or Success State */}
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="display-card-title text-slate-900">Enquiry Submitted Successfully!</h4>
                    <p className="body-subtext text-slate-600 mt-1.5 max-w-xs mx-auto">
                      Thank you! Our senior academic counselor will call you at <strong className="text-slate-800">{formData.phone}</strong> shortly with syllabus details and batch timings.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        mode: 'Classroom (Gandhipuram / Saravanampatti)',
                        timing: 'Weekday Morning',
                        goal: '',
                      })
                    }}
                    className="px-4 py-2 text-xs font-bold font-heading text-accent-600 hover:text-accent-700 bg-accent-50 rounded-xl transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile / WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Training Mode & Timing Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Preferred Mode
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-2.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all"
                      >
                        <option value="Classroom Gandhipuram">Classroom (Gandhipuram)</option>
                        <option value="Classroom Saravanampatti">Classroom (Saravanampatti)</option>
                        <option value="Live Online Interactive">Live Online Interactive</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Batch Timing
                      </label>
                      <select
                        value={formData.timing}
                        onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                        className="w-full px-2.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all"
                      >
                        <option value="Weekday Morning">Weekday Morning (7:30 AM)</option>
                        <option value="Weekday Evening">Weekday Evening (6:30 PM)</option>
                        <option value="Weekend Saturday & Sunday">Weekend Saturday & Sunday</option>
                        <option value="Flexible Schedule">Flexible / 1:1 Fast-track</option>
                      </select>
                    </div>
                  </div>

                  {/* Learning Goal / Questions */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Learning Goal / Questions (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <textarea
                        rows={2}
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        placeholder="e.g. Need interview speaking practice / Band 7.5 prep"
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 text-xs sm:text-sm font-bold font-heading tracking-wide text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] rounded-xl shadow-md shadow-accent-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Get Syllabus & Schedule Free Demo</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  {/* Trust Footer */}
                  <div className="pt-1 flex items-center justify-center gap-3 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>100% Privacy Protected</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-accent-500" />
                      <span>Free Academic Counseling</span>
                    </span>
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
