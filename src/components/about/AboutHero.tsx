import React, { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Star,
  Users,
  Building2,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Laptop,
  GraduationCap,
  Clock,
  ChevronRight,
} from 'lucide-react'
import heroStudentsImg from '../../assets/about/about-hero-students.jpg'
import { CONTACT_INFO } from '../../data/navigationData'

interface AboutHeroProps {
  onNavigateHome?: () => void
  onExploreCourses?: () => void
  onOpenEnquiry?: (subject?: string) => void
}

type CampusKey = 'gandhipuram' | 'saravanampatti'

interface CampusInfo {
  name: string
  label: string
  phone: string
  landmark: string
  address: string
  timing: string
  badge: string
}

const CAMPUS_DATA: Record<CampusKey, CampusInfo> = {
  gandhipuram: {
    name: 'Gandhipuram Campus',
    label: 'Central Hub',
    phone: CONTACT_INFO.gandhipuramDisplayPhone,
    landmark: 'Ramnagar/ Cross Cut Road / Gandhipuram',
    address: 'Gandhipuram, Coimbatore - 641009',
    timing: 'Mon - Sat: 9:30 AM - 6:30 PM',
    badge: 'Main Branch',
  },
  saravanampatti: {
    name: 'Saravanampatti Campus',
    label: 'IT Corridor Hub',
    phone: CONTACT_INFO.saravanampattiDisplayPhone,
    landmark: 'Near Main Bus Stop / Saravanampatti',
    address: 'Saravanampatti, Coimbatore - 641035',
    timing: 'Mon - Sat: 9:30 AM - 6:30 PM',
    badge: 'IT Park Branch',
  },
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  onNavigateHome,
  onExploreCourses,
  onOpenEnquiry,
}) => {
  const [activeCampus, setActiveCampus] = useState<CampusKey>('gandhipuram')
  const currentCampus = CAMPUS_DATA[activeCampus]

  return (
    <section
      id="about-hero"
      aria-label="About Cloudswan Solution - Premier IT Training Institute in Coimbatore"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-100/80 border-b border-slate-200/80 pt-6 pb-16 sm:pb-20 lg:pt-8 lg:pb-24 scroll-mt-24 sm:scroll-mt-28"
    >
      {/* =====================================================
          BACKGROUND AMBIENT DECORATION
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {/* Soft Warm Radial Glows */}
        <div className="absolute top-0 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-accent-500/10 via-orange-400/5 to-transparent blur-3xl animate-[ambientMove_14s_ease-in-out_infinite]" />
        <div className="absolute -bottom-24 -left-20 h-[480px] w-[480px] rounded-full bg-blue-500/5 blur-3xl animate-[ambientMoveReverse_16s_ease-in-out_infinite]" />

        {/* Subtle Tech Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />

        {/* Decorative Floating Accent Orbs */}
        <div className="absolute right-[8%] top-[18%] h-3 w-3 rounded-full bg-accent-500/60 blur-[1px] animate-[float_4.5s_ease-in-out_infinite]" />
        <div className="absolute right-[18%] top-[72%] h-2 w-2 rounded-full bg-orange-400/50 blur-[0.5px] animate-[float_5.5s_ease-in-out_1s_infinite]" />
        <div className="absolute left-[6%] top-[45%] h-2.5 w-2.5 rounded-full bg-blue-400/40 blur-[0.5px] animate-[float_5s_ease-in-out_0.5s_infinite]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            TOP BREADCRUMB & ACCREDITATION STRIP
        ===================================================== */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-xs">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1 font-medium text-slate-500 hover:text-accent-600 transition-colors cursor-pointer"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">About Us</span>
          </nav>

          {/* Trust Badge */}
          <div className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 rounded-full bg-white/90 px-2.5 sm:px-3 py-1 shadow-2xs border border-slate-200/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-heading font-semibold text-[10.5px] sm:text-[11px] text-slate-700 tracking-wide truncate sm:truncate-none">
              ISO 9001:2015 Certified IT Training Institute
            </span>
            <span className="text-slate-300 shrink-0">•</span>
            <span className="text-slate-500 font-medium text-[10.5px] sm:text-[11px] shrink-0">Coimbatore</span>
          </div>
        </div>

        {/* =====================================================
            MAIN 2-COLUMN HERO SHOWCASE
        ===================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* =================================================
              LEFT COLUMN: HERO CONTENT & VALUE PROPOSITION
          ================================================= */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50/90 border border-accent-200 text-accent-700 eyebrow-badge shadow-2xs text-[11px]">
              <span>Who We Are & Our Mission</span>

            </div>

            {/* Display H1 Heading */}
            <div className="space-y-2">
              <h1 className="display-h1 text-slate-900">
                <span className="block text-slate-900">
                  Building Skills.
                </span>
                <span className="block text-accent-500">
                  Shaping{' '}
                  <span className="relative inline-block text-accent-500 whitespace-nowrap">
                    Careers.
                    {/* Stylized Curved Hand-drawn Underline Accent */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full text-accent-500 fill-none overflow-visible"
                      viewBox="0 0 250 18"
                      height="14"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M 3,13 C 65,4 185,2 247,11 C 190,17 70,16 10,14"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </h1>
            </div>

            {/* Sub-headline Kicker */}
            <p className="font-heading font-semibold text-slate-800 text-base sm:text-lg tracking-tight">
              Transforming ambitious learners into industry-ready tech professionals.
            </p>

            {/* Comprehensive Lead Paragraph */}
            <p className="lead-paragraph text-slate-600">
              Cloudswan Solution is Coimbatore&apos;s leading software and cloud training institute.
              For over a decade, we have empowered students, graduates, and IT aspirants with
              practical, real-time project experience, one-on-one mentorship, and dedicated 100%
              placement support across leading multinational corporations.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onExploreCourses}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-bold font-heading text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-accent-500/35 active:translate-y-0 cursor-pointer"
              >
                <BookOpen className="h-4 w-4" />
                <span>Explore 50+ Courses</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => onOpenEnquiry?.('About Us - Free Career Counseling')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold font-heading text-slate-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:bg-accent-50/50 hover:text-accent-600 active:translate-y-0 cursor-pointer"
              >
                <GraduationCap className="h-4 w-4 text-accent-500" />
                <span>Talk to a Counselor</span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-600" />
              </button>
            </div>

            {/* Key Highlight Metrics Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {/* Stat 1 */}
              <div className="rounded-xl border border-slate-200/80 bg-white/90 p-2.5 sm:p-3 shadow-2xs hover:border-accent-200 transition-all">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 tracking-tight">
                  10,000<span className="text-accent-500">+</span>
                </div>
                <div className="caption-text text-slate-600 font-semibold text-[10.5px] sm:text-[11px] mt-0.5">
                  Careers Launched
                </div>
              </div>

              {/* Stat 2 */}
              <div className="rounded-xl border border-slate-200/80 bg-white/90 p-2.5 sm:p-3 shadow-2xs hover:border-accent-200 transition-all">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 tracking-tight">
                  350<span className="text-accent-500">+</span>
                </div>
                <div className="caption-text text-slate-600 font-semibold text-[10.5px] sm:text-[11px] mt-0.5">
                  Hiring Partners
                </div>
              </div>

              {/* Stat 3 */}
              <div className="rounded-xl border border-slate-200/80 bg-white/90 p-2.5 sm:p-3 shadow-2xs hover:border-emerald-200 transition-all">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-emerald-600 tracking-tight">
                  100%
                </div>
                <div className="caption-text text-slate-600 font-semibold text-[10.5px] sm:text-[11px] mt-0.5">
                  Placement Support
                </div>
              </div>

              {/* Stat 4 */}
              <div className="rounded-xl border border-slate-200/80 bg-white/90 p-2.5 sm:p-3 shadow-2xs hover:border-accent-200 transition-all">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 tracking-tight">
                  10<span className="text-accent-500">+</span> Yrs
                </div>
                <div className="caption-text text-slate-600 font-semibold text-[10.5px] sm:text-[11px] mt-0.5">
                  Excellence Legacy
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT COLUMN: PREMIUM VISUAL SHOWCASE & PROOF
          ================================================= */}
          <div className="lg:col-span-6 relative">
            {/* Ambient Backdrop Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent-500/15 via-orange-400/10 to-blue-500/10 blur-xl opacity-80 pointer-events-none" />

            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-2.5 sm:p-3.5 shadow-xl shadow-slate-900/5">
              {/* Top Banner on Showcase Card */}
              <div className="mb-2.5 flex items-center justify-between px-1 text-xs">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="font-heading font-bold text-slate-800 text-[11px] sm:text-xs truncate">
                    <span className="hidden sm:inline">Live </span>Classroom & Lab Experience
                  </span>
                </div>
                <span className="caption-text bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-semibold text-[10px] sm:text-xs shrink-0 whitespace-nowrap">
                  Coimbatore<span className="hidden sm:inline"> Campuses</span>
                </span>
              </div>

              {/* Main Institute Image Container with Layered Badges */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 aspect-[4/3] sm:aspect-[16/10] bg-slate-100 shadow-inner group">
                <img
                  src={heroStudentsImg}
                  alt="Students and mentor engaged in real-world software and cloud lab training at Cloudswan Solution Coimbatore"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Contrast Gradient at Top & Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />

                {/* Floating Badge Top-Right: Google Rating */}
                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 sm:gap-2 rounded-xl bg-white/95 px-2 sm:px-3 py-1 sm:py-1.5 shadow-lg backdrop-blur-md border border-white/80">
                  <div className="flex items-center text-amber-400">
                    <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400" />
                    <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400" />
                    <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400" />
                    <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400" />
                    <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] sm:text-xs font-extrabold text-slate-900 font-heading leading-tight">
                      4.9 / 5.0
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium">
                      850+ Google Reviews
                    </div>
                  </div>
                </div>

                {/* Floating Tag Top-Left: Real Projects */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-slate-900/85 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-slate-700/60 shadow-md">
                  <Laptop className="h-3.5 w-3.5 text-accent-400" />
                  <span>Hands-on Project Labs</span>
                </div>

                {/* Floating Glassmorphic Footer Banner over Photo */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                  <div className="flex items-center justify-between gap-2 rounded-xl bg-white/95 p-2 sm:p-3 shadow-xl backdrop-blur-md border border-white/90">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-accent-50 text-accent-500 border border-accent-100">
                        <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading truncate">
                          100% Verified Job Assistance
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                          <span className="sm:hidden">Dedicated placement cell & interview prep</span>
                          <span className="hidden sm:inline">Dedicated placement cell with mock technical interviews</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenEnquiry?.('About Us - Campus Visit')}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-accent-500 transition-colors cursor-pointer shrink-0"
                    >
                      <span>Visit<span className="hidden sm:inline"> Campus</span></span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* =================================================
                  INTERACTIVE CAMPUS LOCATION SELECTOR
              ================================================= */}
              <div className="mt-3.5 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-xs text-slate-800 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent-500 shrink-0" />
                    <span>Our Coimbatore Campuses</span>
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Choose location:
                  </span>
                </div>

                {/* Campus Toggle Pills: 1 col on mobile, 2 cols on tablet/desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveCampus('gandhipuram')}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer overflow-hidden ${activeCampus === 'gandhipuram'
                      ? 'border-accent-500 bg-accent-50/50 shadow-xs'
                      : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70 hover:border-slate-300'
                      }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-heading font-bold text-xs text-slate-900 truncate">
                        Gandhipuram
                      </span>
                      <span className="text-[10px] font-semibold text-accent-600 bg-accent-100/70 px-1.5 py-0.5 rounded shrink-0">
                        Ramnagar
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-1 flex items-center gap-1.5">
                      <Phone className="h-3 w-3 text-slate-400 shrink-0" />
                      <span className="font-medium">{CAMPUS_DATA.gandhipuram.phone}</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveCampus('saravanampatti')}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer overflow-hidden ${activeCampus === 'saravanampatti'
                      ? 'border-accent-500 bg-accent-50/50 shadow-xs'
                      : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70 hover:border-slate-300'
                      }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-heading font-bold text-xs text-slate-900 truncate">
                        Saravanampatti
                      </span>
                      <span className="text-[10px] font-semibold text-accent-600 bg-accent-100/70 px-1.5 py-0.5 rounded shrink-0">
                        IT Corridor
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-1 flex items-center gap-1.5">
                      <Phone className="h-3 w-3 text-slate-400 shrink-0" />
                      <span className="font-medium">{CAMPUS_DATA.saravanampatti.phone}</span>
                    </div>
                  </button>
                </div>

                {/* Active Campus Quick Address Detail: stacks on mobile, inline on sm */}
                <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-600 px-1">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Clock className="h-3 w-3 text-slate-400 shrink-0" />
                    <span>{currentCampus.timing}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 min-w-0">
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <span className="truncate">{currentCampus.landmark}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM HIGHLIGHT RIBBON: 4 PILLARS OF EXCELLENCE
        ===================================================== */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Pillar 1 */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-500 group-hover:scale-105 transition-transform">
                <Laptop className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Practical Lab-First Training
                </h3>
                <p className="caption-text text-slate-600 mt-1 leading-relaxed">
                  Work on production-grade codebases, cloud infrastructure & real enterprise projects.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Veteran Industry Mentors
                </h3>
                <p className="caption-text text-slate-600 mt-1 leading-relaxed">
                  Learn directly from senior tech architects with 10+ years of active software engineering.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-105 transition-transform">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  100% Placement Assurance
                </h3>
                <p className="caption-text text-slate-600 mt-1 leading-relaxed">
                  Rigorous mock technical interviews, profile building & direct recruitment drives.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:scale-105 transition-transform">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Dual Coimbatore Campuses
                </h3>
                <p className="caption-text text-slate-600 mt-1 leading-relaxed">
                  Centrally located state-of-the-art tech labs in Gandhipuram and Saravanampatti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CUSTOM INLINE KEYFRAME ANIMATIONS
      ===================================================== */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes ambientMove {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, 20px);
          }
        }
        @keyframes ambientMoveReverse {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(25px, -20px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutHero