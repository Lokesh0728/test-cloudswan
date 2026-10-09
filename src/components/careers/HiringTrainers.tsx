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
  X,
  Send,
  Info,
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
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRoleTitle, setSelectedRoleTitle] = useState(
    TRAINER_JOBS[0].title
  )
  const [employmentPreference, setEmploymentPreference] = useState<'Full-Time' | 'Part-Time' | 'Both / Flexible'>('Both / Flexible')
  const [branchPreference, setBranchPreference] = useState<'Both Branches' | 'Gandhipuram' | 'Saravanampatti'>('Both Branches')
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

  const handleOpenApplyModal = (roleTitle: string) => {
    setSelectedRoleTitle(roleTitle)
    setIsModalOpen(true)
    setIsSubmitted(false)
    setFormErrors({})
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsSubmitted(false)
    setFormErrors({})
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experienceYears: '1 - 2 Years',
      message: '',
    })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
    }, 600)
  }

  return (
    <section
      id="trainer-roles"
      aria-label="We're Hiring Trainers"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 scroll-mt-20"
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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <span>JOIN OUR TEAM</span>
            <span className="text-accent-300">•</span>
            <span className="text-slate-600 font-medium normal-case">Coimbatore Branches</span>
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
            Explore opportunities to teach, mentor, and share your expertise with aspiring professionals at our Coimbatore branches.
          </p>

          {/* Summary Pills Bar */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-800 font-heading font-semibold text-xs sm:text-sm shadow-2xs">
              <Briefcase className="w-4 h-4 text-accent-500" />
              <span>6 Trainer Roles</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-50/80 border border-accent-200/80 text-accent-800 font-heading font-semibold text-xs sm:text-sm shadow-2xs">
              <Clock className="w-4 h-4 text-accent-600" />
              <span>Full-Time & Part-Time</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-800 font-heading font-semibold text-xs sm:text-sm shadow-2xs">
              <MapPin className="w-4 h-4 text-accent-500" />
              <span>Gandhipuram & Saravanampatti</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            2. SIX TRAINER JOB CARDS (RESPONSIVE GRID)
        ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TRAINER_JOBS.map((job) => {
            const Icon = job.icon
            return (
              <div
                key={job.id}
                className="group relative rounded-2xl bg-white border border-orange-100/90 hover:border-accent-400 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Orange Accent Line Detail */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-orange-400 to-accent-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div>
                  {/* Top Row: Icon Container and Location Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent-50 border border-accent-100/90 text-accent-600 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-heading font-medium">
                      <MapPin className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Job Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 group-hover:text-accent-600 transition-colors leading-snug">
                    {job.title}
                  </h3>

                  {/* Short Description */}
                  <p className="body-paragraph text-slate-600 text-xs sm:text-sm mt-2.5 line-clamp-3 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70 text-[11px] font-heading font-medium text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Metadata Rows: Employment Type & Experience */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5 text-xs">
                    {/* Employment Type Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-slate-500 font-medium font-sans">
                        Employment:
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-accent-50 border border-accent-200 text-accent-700 font-heading font-bold text-[11px]">
                          Full-Time
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="px-2 py-0.5 rounded-md bg-orange-50/80 border border-orange-200 text-orange-800 font-heading font-bold text-[11px]">
                          Part-Time
                        </span>
                      </div>
                    </div>

                    {/* Experience Requirement */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-slate-500 font-medium font-sans">
                        Experience:
                      </span>
                      <span className="font-heading font-semibold text-slate-800 text-[11px] bg-slate-100 px-2 py-0.5 rounded-md">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleOpenApplyModal(job.title)}
                    className="w-full py-3 px-4 rounded-xl bg-accent-500 hover:bg-accent-600 active:scale-[0.98] text-white font-heading font-bold text-xs sm:text-sm shadow-md shadow-accent-500/20 hover:shadow-accent-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:translate-y-0"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* =========================================================
            3. DRAFT HIRING NOTE & BRANCH SUMMARY
        ========================================================= */}
        <div className="mt-10 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex items-start sm:items-center gap-3 text-amber-900 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="font-sans leading-relaxed">
            <strong>Draft Hiring Notice:</strong> Proposed role descriptions and experience preferences represent current hiring plans and are open to candidates with suitable industry skills. Positions are available across both branches.
          </p>
        </div>

        {/* =========================================================
            4. BOTH BRANCH LOCATIONS BANNER
        ========================================================= */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Branch 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent-50 border border-accent-100 text-accent-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-accent-500" />
            </div>
            <div className="space-y-1">
              <div className="eyebrow-badge text-[10px] text-accent-600">Branch 01</div>
              <h4 className="font-heading font-bold text-base text-slate-900">
                Gandhipuram, Coimbatore
              </h4>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Central city hub walkable from Gandhipuram Bus Stand. Equipped with modern software training suites & interactive labs.
              </p>
            </div>
          </div>

          {/* Branch 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 text-accent-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-accent-500" />
            </div>
            <div className="space-y-1">
              <div className="eyebrow-badge text-[10px] text-accent-600">Branch 02</div>
              <h4 className="font-heading font-bold text-base text-slate-900">
                Saravanampatti, Coimbatore
              </h4>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Coimbatore IT Corridor location near CHIL SEZ & engineering campuses with state-of-the-art tech workspaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          5. TRAINER APPLICATION MODAL
      ========================================================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="trainer-modal-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={handleCloseModal}
          />

          {/* Dialog Container */}
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-[fadeDown_.3s_ease-out]">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-6 sm:p-7 relative">
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/40 text-accent-300 eyebrow-badge text-[10px] mb-2">
                <Sparkles className="w-3 h-3 text-accent-400" />
                <span>TRAINER APPLICATION</span>
              </div>
              <h3 id="trainer-modal-title" className="font-heading font-bold text-xl sm:text-2xl text-white">
                Apply for Trainer Position
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-sans mt-1">
                Share your background and we will connect for an initial technical conversation.
              </p>
            </div>

            {/* Content / Body */}
            <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-slate-900">
                    Application Details Received!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto font-sans leading-relaxed">
                    Thank you for your interest in joining Cloudswan Solution as a{' '}
                    <strong className="text-slate-900">{selectedRoleTitle}</strong>. Our academic coordinator will review your profile and reach out shortly.
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 max-w-sm mx-auto space-y-1">
                    <div>
                      <strong>Employment Preference:</strong> {employmentPreference}
                    </div>
                    <div>
                      <strong>Branch Preference:</strong> {branchPreference}
                    </div>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-heading font-bold text-xs shadow-md transition-all"
                    >
                      Close Window
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        handleCloseModal()
                        onOpenEnquiry?.(`Inquiry for ${selectedRoleTitle}`)
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-accent-500" />
                      <span>Contact Directly</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Selected Role */}
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-800 mb-1.5">
                      Trainer Role <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="selectedRoleTitle"
                        value={selectedRoleTitle}
                        onChange={(e) => setSelectedRoleTitle(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white transition-all cursor-pointer"
                      >
                        {TRAINER_JOBS.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row: Employment Preference & Branch Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-800 mb-1.5">
                        Preferred Employment
                      </label>
                      <select
                        value={employmentPreference}
                        onChange={(e) =>
                          setEmploymentPreference(
                            e.target.value as 'Full-Time' | 'Part-Time' | 'Both / Flexible'
                          )
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs sm:text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white"
                      >
                        <option value="Both / Flexible">Both / Flexible</option>
                        <option value="Full-Time">Full-Time Trainer</option>
                        <option value="Part-Time">Part-Time / Weekend</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-800 mb-1.5">
                        Preferred Branch
                      </label>
                      <select
                        value={branchPreference}
                        onChange={(e) =>
                          setBranchPreference(
                            e.target.value as 'Both Branches' | 'Gandhipuram' | 'Saravanampatti'
                          )
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-xs sm:text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white"
                      >
                        <option value="Both Branches">Both Branches</option>
                        <option value="Gandhipuram">Gandhipuram, Coimbatore</option>
                        <option value="Saravanampatti">Saravanampatti, Coimbatore</option>
                      </select>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-800 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Anand Kumar"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border ${
                        formErrors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                      } text-slate-900 font-sans text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white`}
                    />
                    {formErrors.fullName && (
                      <p className="text-red-500 text-[11px] mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Row: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-800 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. anand@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border ${
                          formErrors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        } text-slate-900 font-sans text-xs sm:text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-[11px] mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-slate-800 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border ${
                          formErrors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        } text-slate-900 font-sans text-xs sm:text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-[11px] mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-800 mb-1.5">
                      Relevant Technical / Teaching Experience
                    </label>
                    <select
                      name="experienceYears"
                      value={formData.experienceYears}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white"
                    >
                      <option value="Less than 1 Year">Less than 1 Year</option>
                      <option value="1 - 2 Years">1 - 2 Years (Recommended)</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>

                  {/* Brief Notes / Message */}
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-800 mb-1.5">
                      Short Overview or Key Tech Skills (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly highlight your core technical domains or teaching background..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm focus:outline-hidden focus:border-accent-500 focus:bg-white resize-none"
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-5 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-heading font-semibold text-xs sm:text-sm transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 disabled:opacity-70 text-white font-heading font-bold text-xs sm:text-sm shadow-md shadow-accent-500/25 transition-all flex items-center gap-2 cursor-pointer"
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
      )}
    </section>
  )
}

export default HiringTrainers
