import React, { useState } from 'react'
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Code2,
  Terminal,
  Coffee,
  Palette,
  Cloud,
  Brain,
  Sparkles,
  PhoneCall,
  Send,
  Info,
  Check,
} from 'lucide-react'

export interface TrainerJob {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  employmentTypes: string[]
  experience: string
  location: string
  skills: string[]
}

export const TRAINER_JOBS: TrainerJob[] = [
  {
    id: 'full-stack-trainer',
    title: 'Full Stack Development Trainer',
    description:
      'Train students in frontend and backend development, including React, Node.js, APIs, and databases.',
    icon: Code2,
    employmentTypes: ['Full-Time', 'Part-Time'],
    experience: '1+ year preferred',
    location: 'Both Branches',
    skills: ['React.js', 'Node.js', 'REST APIs', 'MongoDB / SQL'],
  },
  {
    id: 'python-trainer',
    title: 'Python Development Trainer',
    description:
      'Teach Python fundamentals, object-oriented programming, practical exercises, and application development.',
    icon: Terminal,
    employmentTypes: ['Full-Time', 'Part-Time'],
    experience: '1+ year preferred',
    location: 'Both Branches',
    skills: ['Python Core', 'OOP Concepts', 'Flask / Django', 'Data Structures'],
  },
  {
    id: 'java-trainer',
    title: 'Java Development Trainer',
    description:
      'Guide learners through Java programming, OOP concepts, application development, and coding exercises.',
    icon: Coffee,
    employmentTypes: ['Full-Time', 'Part-Time'],
    experience: '1+ year preferred',
    location: 'Both Branches',
    skills: ['Core Java', 'OOP', 'Spring Boot Basics', 'JDBC / Hibernate'],
  },
  {
    id: 'ui-ux-trainer',
    title: 'UI/UX Design Trainer',
    description:
      'Teach user research, wireframing, prototyping, responsive design, and Figma workflows.',
    icon: Palette,
    employmentTypes: ['Full-Time', 'Part-Time'],
    experience: '1+ year preferred',
    location: 'Both Branches',
    skills: ['Figma', 'Wireframing', 'Design Systems', 'User Research'],
  },
  {
    id: 'cloud-devops-trainer',
    title: 'Cloud & DevOps Trainer',
    description:
      'Help learners understand cloud platforms, deployment workflows, CI/CD, and DevOps fundamentals.',
    icon: Cloud,
    employmentTypes: ['Full-Time', 'Part-Time'],
    experience: '2+ years preferred',
    location: 'Both Branches',
    skills: ['AWS / Azure', 'Docker', 'CI/CD Pipelines', 'Linux Basics'],
  },
  {
    id: 'data-science-ai-trainer',
    title: 'Data Science & AI Trainer',
    description:
      'Teach Python-based data analysis, machine learning fundamentals, and practical AI projects.',
    icon: Brain,
    employmentTypes: ['Full-Time', 'Part-Time'],
    experience: '2+ years preferred',
    location: 'Both Branches',
    skills: ['Pandas / NumPy', 'Scikit-Learn', 'ML Models', 'Data Visualization'],
  },
]

interface HiringTrainersProps {
  onOpenEnquiry?: (subject?: string) => void
}

export const HiringTrainers: React.FC<HiringTrainersProps> = ({
  onOpenEnquiry,
}) => {
  // Currently selected role for the inline form
  const [selectedRoleTitle, setSelectedRoleTitle] = useState(
    TRAINER_JOBS[0].title
  )
  const [employmentPreference, setEmploymentPreference] = useState<
    'Full-Time' | 'Part-Time' | 'Both / Flexible'
  >('Both / Flexible')
  const [branchPreference, setBranchPreference] = useState<
    'Both Branches' | 'Gandhipuram' | 'Saravanampatti'
  >('Both Branches')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceYears: '1 - 2 Years',
    message: '',
  })
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSelectRole = (roleTitle: string) => {
    setSelectedRoleTitle(roleTitle)
    setIsSubmitted(false)

    // Smooth scroll to form on mobile screens
    if (window.innerWidth < 1024) {
      const formEl = document.getElementById('trainer-application-form')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const errors: { [key: string]: string } = {}
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required'
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Valid Email Address is required'
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errors.phone = 'Valid Phone Number is required'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  const handleResetForm = () => {
    setIsSubmitted(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experienceYears: '1 - 2 Years',
      message: '',
    })
    setFormErrors({})
  }

  return (
    <section
      id="trainer-roles"
      aria-label="We're Hiring Trainers"
      className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 scroll-mt-20"
    >
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent-50/60 blur-3xl" />
        <div className="absolute bottom-10 -left-32 w-[450px] h-[450px] rounded-full bg-orange-50/70 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(#0f172a 1px, transparent 1px),
              linear-gradient(90deg, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. SECTION HEADER
        ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <span>JOIN OUR TEAM</span>
            <span className="text-accent-300">•</span>
            <span className="text-slate-600 font-medium normal-case">
              Coimbatore Branches
            </span>
          </div>

          {/* Heading */}
          <h2 className="display-h2 text-slate-900">
            We're Hiring{' '}
            <span className="relative inline-block text-accent-500">
              Trainers
              <span className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-accent-200" />
            </span>
          </h2>

          {/* Description */}
          <p className="lead-paragraph mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore opportunities to teach, mentor, and share your expertise
            with aspiring professionals at our Coimbatore branches. Select a
            role from the list to apply directly.
          </p>

          {/* Summary Pills Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 font-heading font-semibold text-xs shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-accent-500" />
              <span>6 Open Trainer Roles</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-accent-50 border border-accent-200/80 text-accent-800 font-heading font-semibold text-xs shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-accent-600" />
              <span>Full-Time & Part-Time</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 font-heading font-semibold text-xs shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-accent-500" />
              <span>Gandhipuram & Saravanampatti</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            2. TWO-COLUMN LAYOUT: ROLES LIST (LEFT) & FORM (RIGHT)
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* =======================================================
              LEFT COLUMN: LIST OF TRAINER ROLES
          ======================================================= */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Available Trainer Positions
                </h3>
                <p className="text-xs text-slate-500 font-sans mt-0.5">
                  Click any role to auto-select it in the application form
                </p>
              </div>
              <span className="text-xs font-heading font-bold text-accent-600 bg-accent-50 px-2.5 py-1 rounded-lg border border-accent-200/80">
                {TRAINER_JOBS.length} Open Roles
              </span>
            </div>

            {/* The List of Roles */}
            <div className="space-y-3.5">
              {TRAINER_JOBS.map((job) => {
                const Icon = job.icon
                const isSelected = selectedRoleTitle === job.title

                return (
                  <div
                    key={job.id}
                    onClick={() => handleSelectRole(job.title)}
                    className={`group rounded-2xl bg-white border p-5 sm:p-6 transition-all duration-200 cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'border-accent-500 ring-2 ring-accent-500/15 shadow-md shadow-accent-500/10'
                        : 'border-slate-200/90 hover:border-accent-300 hover:shadow-md'
                    }`}
                  >
                    {/* Active Left Indicator Bar */}
                    <div
                      className={`absolute top-0 bottom-0 left-0 w-1.5 transition-colors ${
                        isSelected
                          ? 'bg-accent-500'
                          : 'bg-transparent group-hover:bg-accent-300'
                      }`}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      {/* Left Side: Icon & Details */}
                      <div className="flex items-start gap-3.5 flex-1">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-accent-500 text-white shadow-sm shadow-accent-500/30'
                              : 'bg-accent-50 border border-accent-100 text-accent-600 group-hover:bg-accent-100'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4
                              className={`font-heading font-bold text-base sm:text-lg transition-colors leading-snug ${
                                isSelected
                                  ? 'text-accent-600'
                                  : 'text-slate-900 group-hover:text-accent-600'
                              }`}
                            >
                              {job.title}
                            </h4>

                            {isSelected && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-100 text-accent-700 font-heading text-[10px] font-bold">
                                <Check className="w-3 h-3 text-accent-600" />
                                Selected
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                            {job.description}
                          </p>

                          {/* Skill Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {job.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70 text-[11px] font-heading font-medium text-slate-600"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Badges & Action Button */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2.5 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0">
                        {/* Badges */}
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-accent-50 border border-accent-200 text-accent-700 font-heading font-bold text-[10px]">
                            Full-Time
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-orange-800 font-heading font-bold text-[10px]">
                            Part-Time
                          </span>
                        </div>

                        {/* Experience & Location */}
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                          <span>{job.experience}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-accent-500" />
                            {job.location}
                          </span>
                        </div>

                        {/* Select / Apply Trigger */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleSelectRole(job.title)
                          }}
                          className={`mt-1 px-3.5 py-1.5 rounded-xl font-heading font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-accent-500 text-white shadow-xs'
                              : 'bg-slate-100 hover:bg-accent-500 hover:text-white text-slate-700'
                          }`}
                        >
                          <span>{isSelected ? 'Selected' : 'Apply for Role'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Both Branches Quick Card */}
            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <h4 className="font-heading font-bold text-sm text-slate-900 mb-3">
                Coimbatore Campus Locations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-600">
                      Branch 01
                    </span>
                    <h5 className="font-heading font-bold text-xs text-slate-900">
                      Gandhipuram, Coimbatore
                    </h5>
                    <p className="text-[11px] text-slate-500 font-sans mt-0.5">
                      Central city hub • Walkable from Gandhipuram Bus Stand
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 text-accent-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-600">
                      Branch 02
                    </span>
                    <h5 className="font-heading font-bold text-xs text-slate-900">
                      Saravanampatti, Coimbatore
                    </h5>
                    <p className="text-[11px] text-slate-500 font-sans mt-0.5">
                      IT Corridor Hub • Near CHIL SEZ & tech campuses
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 flex items-start gap-2.5 text-amber-900 text-xs font-sans">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Draft Hiring Information:</strong> Role descriptions and
                experience preferences are open to discussion based on your
                industry background.
              </span>
            </div>
          </div>

          {/* =======================================================
              RIGHT COLUMN: INLINE TRAINER APPLICATION FORM
          ======================================================= */}
          <div
            id="trainer-application-form"
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="rounded-3xl bg-white border-2 border-slate-200/90 shadow-xl overflow-hidden">
              {/* Form Card Header */}
              <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-6 relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/40 text-accent-300 eyebrow-badge text-[10px] mb-2">
                  <Sparkles className="w-3 h-3 text-accent-400" />
                  <span>DIRECT APPLICATION FORM</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Apply for Trainer Position
                </h3>
                <p className="text-slate-300 text-xs font-sans mt-1">
                  Fill in your details below and our academic hiring team will
                  review your profile.
                </p>
              </div>

              {/* Form Body */}
              <div className="p-6">
                {isSubmitted ? (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-slate-900">
                        Application Details Received!
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm font-sans mt-1.5 leading-relaxed">
                        Thank you for applying for{' '}
                        <strong className="text-slate-900">
                          {selectedRoleTitle}
                        </strong>
                        . Our team will contact you shortly for a preliminary
                        conversation.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 text-left space-y-1">
                      <div>
                        <strong>Employment:</strong> {employmentPreference}
                      </div>
                      <div>
                        <strong>Branch:</strong> {branchPreference}
                      </div>
                      <div>
                        <strong>Applicant:</strong> {formData.fullName} ({formData.phone})
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-heading font-bold text-xs shadow-md transition-all cursor-pointer"
                      >
                        Submit Another Application
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          onOpenEnquiry?.(
                            `Application follow-up for ${selectedRoleTitle}`
                          )
                        }
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-accent-500" />
                        <span>Contact Recruiter</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Selected Role Dropdown */}
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-800 mb-1">
                        Applying for Role <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={selectedRoleTitle}
                        onChange={(e) => setSelectedRoleTitle(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs sm:text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white transition-all cursor-pointer font-medium"
                      >
                        {TRAINER_JOBS.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Employment & Branch */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-heading font-bold text-slate-800 mb-1">
                          Employment
                        </label>
                        <select
                          value={employmentPreference}
                          onChange={(e) =>
                            setEmploymentPreference(
                              e.target.value as
                                | 'Full-Time'
                                | 'Part-Time'
                                | 'Both / Flexible'
                            )
                          }
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs focus:outline-hidden focus:border-accent-500 focus:bg-white"
                        >
                          <option value="Both / Flexible">Both / Flexible</option>
                          <option value="Full-Time">Full-Time</option>
                          <option value="Part-Time">Part-Time</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold text-slate-800 mb-1">
                          Preferred Branch
                        </label>
                        <select
                          value={branchPreference}
                          onChange={(e) =>
                            setBranchPreference(
                              e.target.value as
                                | 'Both Branches'
                                | 'Gandhipuram'
                                | 'Saravanampatti'
                            )
                          }
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs focus:outline-hidden focus:border-accent-500 focus:bg-white"
                        >
                          <option value="Both Branches">Both Branches</option>
                          <option value="Gandhipuram">Gandhipuram</option>
                          <option value="Saravanampatti">Saravanampatti</option>
                        </select>
                      </div>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-800 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border ${
                          formErrors.fullName
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-slate-200'
                        } text-slate-900 font-sans text-xs sm:text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white`}
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-[10px] mt-1 font-medium">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Row: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-heading font-bold text-slate-800 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ramesh@example.com"
                          className={`w-full px-3 py-2.5 rounded-xl bg-slate-50 border ${
                            formErrors.email
                              ? 'border-red-400 bg-red-50/30'
                              : 'border-slate-200'
                          } text-slate-900 font-sans text-xs focus:outline-hidden focus:border-accent-500 focus:bg-white`}
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-[10px] mt-1 font-medium">
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold text-slate-800 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className={`w-full px-3 py-2.5 rounded-xl bg-slate-50 border ${
                            formErrors.phone
                              ? 'border-red-400 bg-red-50/30'
                              : 'border-slate-200'
                          } text-slate-900 font-sans text-xs focus:outline-hidden focus:border-accent-500 focus:bg-white`}
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-[10px] mt-1 font-medium">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-800 mb-1">
                        Relevant Experience
                      </label>
                      <select
                        name="experienceYears"
                        value={formData.experienceYears}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs sm:text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white"
                      >
                        <option value="Less than 1 Year">Less than 1 Year</option>
                        <option value="1 - 2 Years">1 - 2 Years</option>
                        <option value="3 - 5 Years">3 - 5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                    </div>

                    {/* Short Message / Portfolio */}
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-800 mb-1">
                        Short Summary / Profile Notes (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Brief overview of your domains or previous teaching experience..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs sm:text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-5 rounded-xl bg-accent-500 hover:bg-accent-600 disabled:opacity-70 text-white font-heading font-bold text-sm shadow-md shadow-accent-500/25 hover:shadow-accent-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Application</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HiringTrainers
