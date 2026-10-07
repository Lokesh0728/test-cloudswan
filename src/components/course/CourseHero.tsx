import React from 'react'
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  FileDown,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Laptop,
  GraduationCap,
  Award,
  Users,
  MapPin,
  ChevronRight,
  Home,
} from 'lucide-react'
import type { CourseData } from '../../types/course'

interface CourseHeroProps {
  course: CourseData
  onOpenEnquiry: (subject?: string) => void
  onNavigate: (path: string) => void
}

export const CourseHero: React.FC<CourseHeroProps> = ({
  course,
  onOpenEnquiry,
  onNavigate,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 border-b border-slate-200/80 pt-6 pb-12 sm:pb-16 lg:pt-8 lg:pb-20">
      {/* Background Decorative Lighting Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-tr from-accent-500/10 via-orange-400/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-accent-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="hover:text-accent-600 cursor-pointer" onClick={() => onNavigate('/')}>Courses</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-none">{course.shortTitle}</span>
        </nav>

        {/* Top Announcement & Location Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-2.5 sm:px-4 sm:py-2 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-md">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="eyebrow-badge inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-600 border border-accent-500/20 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span>{course.eyebrowBadge}</span>
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium font-sans">
              <MapPin className="w-3.5 h-3.5 text-accent-500" />
              <span>Coimbatore Campus (Gandhipuram & Saravanampatti) • Online Batches</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Admissions Open for New Batch</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Tagline, Descriptions & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-xs">
              <Sparkles className="w-4 h-4 text-accent-500 shrink-0" />
              <span>100% Practical IT Training Institute</span>
              <span className="text-accent-300">|</span>
              <span className="normal-case font-semibold text-slate-600">ISO 9001:2015 Certified</span>
            </div>

            {/* Course Title */}
            <h1 className="display-h1 text-slate-900">
              Cybersecurity Training{' '}
              <span className="bg-gradient-to-r from-accent-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                in Coimbatore
              </span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="font-heading text-lg sm:text-xl font-bold text-slate-800 leading-snug">
              {course.tagline}
            </p>

            {/* Hero Descriptive Paragraphs from PDF */}
            <div className="space-y-3 lead-paragraph text-slate-600 border-l-2 border-accent-500/40 pl-4 py-1">
              {course.heroDescription.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'font-medium text-slate-700' : 'body-paragraph'}>
                  {p}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onOpenEnquiry(`${course.shortTitle} - Free Counselling Session`)}
                className="px-6 py-3.5 text-sm sm:text-base font-bold font-heading tracking-wide text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] rounded-xl shadow-md shadow-accent-500/30 transition-all flex items-center gap-2 group"
              >
                <span>{course.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#course-curriculum"
                className="px-5 py-3.5 text-sm sm:text-base font-bold font-heading text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>{course.secondaryCtaText}</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry(`${course.shortTitle} - Syllabus Download`)}
                className="px-4 py-3 text-xs sm:text-sm font-semibold font-heading text-accent-600 hover:text-accent-700 hover:bg-accent-50 rounded-xl transition-all flex items-center gap-1.5"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Syllabus (PDF)</span>
              </button>
            </div>

            {/* Quick Guarantees Row */}
            <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Prior Coding Mandatory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authorized Virtual Security Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1:1 Dedicated Mentor Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Security Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900 p-6 sm:p-8 text-white shadow-2xl border border-slate-800 overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-52 h-52 bg-accent-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-52 h-52 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/40 flex items-center justify-center text-accent-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">Course Fast Facts</h3>
                    <p className="caption-text text-slate-400">Industry-Aligned Cybersecurity Track</p>
                  </div>
                </div>
                <span className="eyebrow-badge px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px]">
                  Batch Enrolling
                </span>
              </div>

              {/* Fast Facts Grid */}
              <div className="relative z-10 py-5 space-y-3.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-accent-400" />
                    <span>Duration</span>
                  </div>
                  <span className="font-heading font-bold text-sm sm:text-base text-white">{course.quickSpecs.duration}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                    <Laptop className="w-4 h-4 text-accent-400" />
                    <span>Learning Mode</span>
                  </div>
                  <span className="font-heading font-bold text-xs sm:text-sm text-white">{course.quickSpecs.mode}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                    <GraduationCap className="w-4 h-4 text-accent-400" />
                    <span>Skill Level</span>
                  </div>
                  <span className="font-heading font-bold text-xs sm:text-sm text-white">{course.quickSpecs.level}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                    <Award className="w-4 h-4 text-accent-400" />
                    <span>Projects</span>
                  </div>
                  <span className="font-heading font-bold text-xs sm:text-sm text-white">{course.quickSpecs.projects}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-accent-400" />
                    <span>Placement Support</span>
                  </div>
                  <span className="font-heading font-bold text-xs sm:text-sm text-emerald-400">100% Dedicated</span>
                </div>
              </div>

              {/* Terminal Snippet Box */}
              <div className="relative z-10 pt-2 pb-4">
                <div className="rounded-xl bg-slate-950 p-3 font-mono text-[11px] text-slate-300 border border-slate-800">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 text-slate-500 text-[10px]">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="ml-1 text-slate-400">cybersec-lab@cloudswan:~$</span>
                  </div>
                  <div className="pt-2 text-emerald-400">$ nmap -sS -A 192.168.1.0/24</div>
                  <div className="text-slate-400">Host is up (0.0024s latency).</div>
                  <div className="text-amber-300">22/tcp open ssh | 80/tcp open http</div>
                  <div className="text-accent-400">$ wireshark --analyze-tls-handshake</div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="relative z-10 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                <span className="caption-text text-slate-400">Need personal batch timings?</span>
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`${course.shortTitle} - Batch Timings`)}
                  className="text-xs font-heading font-bold text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-1"
                >
                  <span>Check Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
