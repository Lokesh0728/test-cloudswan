import React from 'react'
import {
  Sparkles,
  Calendar,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Building2,
  Award,
  Globe2,
  PhoneCall,
  Laptop,
  ShieldCheck,
} from 'lucide-react'
import { AnimatedCounter } from './AnimatedCounter'
import { GlobalMapVisual } from './GlobalMapVisual'
import {
  FlagIndia,
  FlagUAE,
  FlagMalaysia,
  FlagAustralia,
  FlagSingapore,
} from './CountryFlags'

interface HeroSectionProps {
  onOpenEnquiry: (subject?: string) => void
  onExploreCourses?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnquiry,
  onExploreCourses,
}) => {
  const popularKeywords = [
    'Full Stack Web',
    'Python & AI',
    'AWS Cloud DevOps',
    'Data Analytics',
    'IELTS / German',
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 border-b border-slate-200/80 pt-6 pb-14 sm:pb-20 lg:pt-8 lg:pb-24">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-accent-500/10 via-orange-400/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Global Career Announcement Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-2.5 sm:px-4 sm:py-2 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-md">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="eyebrow-badge inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-600 border border-accent-500/20 text-xs">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Global Reach</span>
            </span>
            <span className="font-heading text-xs font-semibold text-slate-800">
              Global Training Solutions for a Global Career
            </span>
          </div>

          {/* Quick country flags banner from screenshot */}
          <div className="flex items-center gap-3">
            <span className="caption-text hidden md:inline">
              Alumni placed across:
            </span>
            <div className="flex items-center -space-x-1.5 hover:space-x-1 transition-all">
              <div title="India (HQ)" className="cursor-pointer hover:scale-110 transition-transform">
                <FlagIndia className="w-5 h-5 rounded-full border border-white shadow-xs" />
              </div>
              <div title="UAE & Middle East" className="cursor-pointer hover:scale-110 transition-transform">
                <FlagUAE className="w-5 h-5 rounded-full border border-white shadow-xs" />
              </div>
              <div title="Malaysia" className="cursor-pointer hover:scale-110 transition-transform">
                <FlagMalaysia className="w-5 h-5 rounded-full border border-white shadow-xs" />
              </div>
              <div title="Australia" className="cursor-pointer hover:scale-110 transition-transform">
                <FlagAustralia className="w-5 h-5 rounded-full border border-white shadow-xs" />
              </div>
              <div title="Singapore" className="cursor-pointer hover:scale-110 transition-transform">
                <FlagSingapore className="w-5 h-5 rounded-full border border-white shadow-xs" />
              </div>
            </div>
            <span className="eyebrow-badge text-accent-600 bg-accent-50 px-2 py-0.5 rounded-md border border-accent-200/60">
              12+ Countries
            </span>
          </div>
        </div>

        {/* 2-Column Hero Grid: Left Content & Right Interactive Global Map Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Propositions & High-Converting CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-xs">
              <Sparkles className="w-4 h-4 text-accent-500 shrink-0" />
              <span>100% Placement Assured IT Training Institute</span>
              <span className="text-accent-300">|</span>
              <span className="text-slate-600 font-medium hidden sm:inline normal-case">Coimbatore</span>
            </div>

            {/* Catchy Main Headline with Hand-drawn Underline */}
            <div className="space-y-2">
              <h1 className="display-h1 text-slate-900">
                IT Training Institute in{' '}
                <span className="relative inline-block text-accent-500 whitespace-nowrap">
                  Coimbatore
                  {/* Stylized Curved Hand-drawn Underline Accent */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-accent-500 fill-none overflow-visible"
                    viewBox="0 0 250 18"
                    height="14"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 3,13 C 65,4 185,2 247,11 C 190,17 70,16 10,14"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="display-h3 bg-gradient-to-r from-slate-900 via-slate-800 to-accent-600 bg-clip-text text-transparent pt-1">
                Get Your Dream IT Job with Global Career Pathways
              </p>
            </div>

            {/* Sub-description */}
            <p className="body-paragraph max-w-xl">
              Master Full Stack, Cloud, Python AI, and Global Certifications with certified
              industry practitioners. Experience real-world live projects, dedicated placement drives,
              and interview preparation for India & global tech hubs.
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 font-heading text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 border border-slate-200/70 p-2.5 rounded-xl shadow-xs">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>100% Placement Assistance</span>
              </div>
              <div className="flex items-center gap-2.5 font-heading text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 border border-slate-200/70 p-2.5 rounded-xl shadow-xs">
                <div className="w-6 h-6 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <span>Hands-on Live Capstone Labs</span>
              </div>
              <div className="flex items-center gap-2.5 font-heading text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 border border-slate-200/70 p-2.5 rounded-xl shadow-xs">
                <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span>Authorized Global Certifications</span>
              </div>
              <div className="flex items-center gap-2.5 font-heading text-xs sm:text-sm font-semibold text-slate-700 bg-white/80 border border-slate-200/70 p-2.5 rounded-xl shadow-xs">
                <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <span>350+ Top MNC Hiring Partners</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onOpenEnquiry('Free Career Counseling & Demo Session')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-lg shadow-accent-500/25 transition-all flex items-center gap-2 group cursor-pointer font-heading tracking-wide"
              >
                <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Book Free Career Counseling</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onExploreCourses) {
                    onExploreCourses()
                  } else {
                    onOpenEnquiry('Curriculum Download & Course Syllabus')
                  }
                }}
                className="px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer font-heading tracking-wide"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>Download Curriculum</span>
              </button>
            </div>

            {/* Trending Keywords Quick Chips */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
              <span className="eyebrow-badge text-slate-500">
                Trending Tracks:
              </span>
              {popularKeywords.map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => onOpenEnquiry(`Course Enquiry: ${kw}`)}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 text-slate-700 hover:border-accent-400 hover:text-accent-600 hover:bg-accent-50/50 text-xs font-medium shadow-2xs transition-colors cursor-pointer font-sans"
                >
                  {kw}
                </button>
              ))}
            </div>

            {/* Social Proof & Rating Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 border-t border-slate-200/70">
              {/* Overlapping Student Avatars */}
              <div className="flex items-center -space-x-2">
                <img
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Student Graduate"
                />
                <img
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Student Graduate"
                />
                <img
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Student Graduate"
                />
                <img
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="Student Graduate"
                />
                <div className="w-9 h-9 rounded-full border-2 border-white bg-accent-500 text-white font-bold text-[11px] flex items-center justify-center shadow-xs font-heading">
                  10k+
                </div>
              </div>

              {/* Rating text */}
              <div className="text-xs font-sans">
                <div className="flex items-center gap-1 text-amber-500 font-bold font-heading">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-slate-900 ml-1">4.9 / 5.0</span>
                </div>
                <p className="caption-text text-slate-500 mt-0.5">
                  Over <span className="font-semibold text-slate-700">1,850+ verified reviews</span> in Coimbatore & Abroad
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Interactive Global Map & Career Mobility Centerpiece */}
          <div className="lg:col-span-6">
            <GlobalMapVisual />
          </div>
        </div>

        {/* Animated Statistics Counter Strip (Counts Animated Like Counting) */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="eyebrow-badge text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-200/60 inline-block">
              Proven Track Record of Excellence
            </span>
            <h2 className="display-h2 text-slate-900 mt-2">
              Empowering Careers with Measurable Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {/* Stat 1: Students Trained */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="w-9 h-9 rounded-xl bg-accent-50 text-accent-500 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                <AnimatedCounter target={10000} suffix="+" duration={2200} />
              </div>
              <div className="caption-text text-slate-600 font-semibold mt-1">Students Trained</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium font-sans">Classroom & Online</div>
            </div>

            {/* Stat 2: Placement Assistance */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight font-heading">
                <AnimatedCounter target={100} suffix="%" duration={1800} />
              </div>
              <div className="caption-text text-slate-600 font-semibold mt-1">Placement Support</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium font-sans">100% Job Assistance</div>
            </div>

            {/* Stat 3: Hiring Partners */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                <AnimatedCounter target={350} suffix="+" duration={2000} />
              </div>
              <div className="caption-text text-slate-600 font-semibold mt-1">Hiring Partners</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium font-sans">Top MNCs & Startups</div>
            </div>

            {/* Stat 4: Industry Programs */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                <AnimatedCounter target={50} suffix="+" duration={1900} />
              </div>
              <div className="caption-text text-slate-600 font-semibold mt-1">Industry Programs</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium font-sans">IT, Cloud, AI & Lang</div>
            </div>

            {/* Stat 5: Global Destinations */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-accent-500 tracking-tight font-heading">
                <AnimatedCounter target={12} suffix="+" duration={1700} />
              </div>
              <div className="caption-text text-slate-600 font-semibold mt-1">Global Hubs</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium font-sans">UAE, MY, AU, SG & More</div>
            </div>

            {/* Stat 6: Average Rating */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                <AnimatedCounter target={4.9} decimals={1} suffix="★" duration={1800} />
              </div>
              <div className="caption-text text-slate-600 font-semibold mt-1">Google Rating</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium font-sans">1,850+ Student Reviews</div>
            </div>
          </div>
        </div>

        {/* Coimbatore Dual Campus Physical Presence Badge Strip */}
        <div className="mt-8 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-900 font-heading">Coimbatore Innovation Campuses:</span>
            <span className="text-slate-600 font-sans">
              📍 Gandhipuram (Opposite Cross-cut) & 📍 Saravanampatti (IT Corridor)
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <a
              href="tel:+918903835098"
              className="inline-flex items-center gap-1.5 font-bold text-accent-600 hover:text-accent-700 font-heading"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91 89038 35098</span>
            </a>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Campus Visit Request')}
              className="font-semibold text-slate-700 hover:text-accent-600 transition-colors cursor-pointer font-heading"
            >
              Schedule Campus Visit →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
