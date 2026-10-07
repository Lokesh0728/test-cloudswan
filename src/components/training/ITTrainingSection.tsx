import React, { useState } from 'react'
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  MapPin,
  ChevronRight,
  Building2,
  BookOpen,
} from 'lucide-react'
import {
  TARGET_AUDIENCES,
  TRAINING_ENVIRONMENT_PILLARS,
  COIMBATORE_ADVANTAGES,
} from './trainingData'
import { CONTACT_INFO } from '../../data/navigationData'
import { PopularCoursesSection } from './PopularCoursesSection'
import { TestimonialsSection } from '../testimonials/TestimonialsSection'
import { FAQSection } from '../faq/FAQSection'

interface ITTrainingSectionProps {
  onOpenEnquiry: (subject?: string) => void
}

export const ITTrainingSection: React.FC<ITTrainingSectionProps> = ({
  onOpenEnquiry,
}) => {
  const [activeAudienceId, setActiveAudienceId] = useState<'students' | 'professionals'>('students')

  const activeAudience =
    TARGET_AUDIENCES.find((a) => a.id === activeAudienceId) || TARGET_AUDIENCES[0]

  return (
    <section
      id="it-training-coimbatore"
      aria-labelledby="it-training-coimbatore-title"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/90 py-16 sm:py-20 lg:py-24 border-t border-slate-200/90"
    >
      {/* Background Decorative Lighting Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-tr from-accent-500/10 via-orange-400/5 to-blue-500/5 blur-[140px]" />
        <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-[130px]" />
        <div className="absolute bottom-20 -right-32 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. SECTION HEADER (Primary Keyword & Core Brand Positioning)
        ========================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          {/* Location & Authority Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-accent-50 to-orange-50 border border-accent-200/70 text-accent-700 eyebrow-badge shadow-2xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            <MapPin className="w-3.5 h-3.5 text-accent-600" />
            <span>Coimbatore's Premier IT Training Institute</span>
            <span className="text-accent-300">•</span>
            <span className="font-semibold text-slate-600 normal-case">Saravanampatti & Gandhipuram</span>
          </div>

          {/* Main Requested Heading */}
          <h2
            id="it-training-coimbatore-title"
            className="display-h2 text-slate-900"
          >
            IT Training for{' '}
            <span className="bg-gradient-to-r from-accent-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Students & Professionals
            </span>{' '}
            in Coimbatore
          </h2>

          {/* Prompt Main Descriptive Paragraphs */}
          <div className="mt-5 space-y-3 lead-paragraph max-w-3xl mx-auto">
            <p className="font-medium text-slate-800">
              <strong className="text-accent-600 font-bold font-heading">Cloudswan Solution</strong> provides comprehensive IT training for learners with different backgrounds and career objectives.
            </p>
            <p className="body-paragraph">
              Whether you are searching for IT courses in Coimbatore, software development training, cloud courses, data analytics training, or digital marketing classes, you can explore a learning path that matches your goals.
            </p>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-xs text-center transition-transform hover:-translate-y-0.5">
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">12,000+</div>
              <div className="caption-text text-slate-500 mt-0.5">Graduates Upskilled</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-xs text-center transition-transform hover:-translate-y-0.5">
              <div className="text-xl sm:text-2xl font-extrabold text-accent-600 font-heading">250+</div>
              <div className="caption-text text-slate-500 mt-0.5">Hiring Partners</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-xs text-center transition-transform hover:-translate-y-0.5">
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">80%</div>
              <div className="caption-text text-slate-500 mt-0.5">Practical Hands-on Labs</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-xs text-center transition-transform hover:-translate-y-0.5">
              <div className="text-xl sm:text-2xl font-extrabold text-amber-500 font-heading">4.9 / 5</div>
              <div className="caption-text text-slate-500 mt-0.5">Learner Satisfaction</div>
            </div>
          </div>
        </div>

        {/* =========================================================
            2. AUDIENCE TARGETING: STUDENTS VS WORKING PROFESSIONALS
        ========================================================= */}
        <div className="mb-16 lg:mb-20">
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden border border-slate-800">
            {/* Ambient Inner Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Audience Switcher Tabs */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="eyebrow-badge text-accent-400">
                  Personalized Learning Pathways
                </span>
                <h3 className="display-h3 text-white mt-1">
                  Tailored For Every Stage of Your Career Journey
                </h3>
              </div>

              {/* Segment Toggle Buttons */}
              <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-800/90 border border-slate-700 w-full sm:w-auto">
                {TARGET_AUDIENCES.map((audience) => {
                  const Icon = audience.icon
                  const isActive = activeAudienceId === audience.id
                  return (
                    <button
                      key={audience.id}
                      type="button"
                      onClick={() => setActiveAudienceId(audience.id)}
                      className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-heading transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{audience.shortLabel}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Active Audience Content Showcase */}
            <div className="relative z-10 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Mission & Headline */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 border border-accent-500/30 eyebrow-badge">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeAudience.badge}</span>
                </div>
                <h4 className="display-h3 text-white leading-tight">
                  {activeAudience.headline}
                </h4>
                <p className="body-paragraph text-slate-300">
                  {activeAudience.summary}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(activeAudience.enquirySubject)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-sm font-bold font-heading tracking-wide shadow-lg shadow-accent-500/30 transition-all hover:translate-x-0.5 active:scale-95"
                  >
                    <span>{activeAudience.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('Free IT Course Counseling - Coimbatore')}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold font-heading border border-slate-700 transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-accent-400" />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </div>

              {/* Right Column: 4 Tailored Key Advantages Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeAudience.perks.map((perk, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-xs hover:border-accent-500/50 hover:bg-slate-800/90 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-accent-500/10 text-accent-400 border border-accent-500/20 group-hover:bg-accent-500 group-hover:text-white transition-colors shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="display-h5 text-white group-hover:text-accent-300 transition-colors">
                          {perk.title}
                        </h5>
                        <p className="body-subtext text-slate-400">
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            3. OUR POPULAR IT TRAINING COURSES IN COIMBATORE
               (Replaced Explore In-Demand Disciplines with the Popular Courses showcase)
        ========================================================= */}
        <PopularCoursesSection onOpenEnquiry={onOpenEnquiry} />

        {/* =========================================================
            4. TRAINING ENVIRONMENT: 4 CORE PILLARS
            Prompt: "Our training environment is designed to encourage
            questions, practice, discussion, and continuous improvement."
        ========================================================= */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 eyebrow-badge mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Pedagogy That Works</span>
            </div>
            <h2 className="display-h2 text-slate-900">
              Our Training Environment & Learning Culture
            </h2>
            <p className="lead-paragraph mt-3 max-w-3xl mx-auto">
              We go beyond static presentations. At <strong className="text-slate-800 font-heading">Cloudswan Solution</strong>, our training environment is meticulously engineered to encourage questions, practice, discussion, and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINING_ENVIRONMENT_PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div>
                    {/* Pillar Icon Header */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div
                        className={`p-3 rounded-2xl bg-gradient-to-tr ${pillar.accentGradient} text-white shadow-sm transition-transform group-hover:scale-105`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="eyebrow-badge px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/70">
                        {pillar.badgeText}
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 className="display-card-title text-slate-900 group-hover:text-accent-600 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="caption-text font-semibold text-accent-600 mt-0.5">
                      {pillar.subtitle}
                    </p>

                    {/* Description */}
                    <p className="body-subtext text-slate-600 mt-3">
                      {pillar.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {pillar.bulletPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 caption-text text-slate-700 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <span className="eyebrow-badge text-slate-400 flex items-center gap-1">
                      <span>Cloudswan Standard</span>
                      <ChevronRight className="w-3.5 h-3.5 text-accent-500" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* =========================================================
            5. STUDENT TESTIMONIALS & VERIFIED GOOGLE REVIEWS
               (Positioned directly above Visit Us in Coimbatore)
        ========================================================= */}
        <TestimonialsSection onOpenEnquiry={onOpenEnquiry} />

        {/* =========================================================
            6. COIMBATORE CAMPUS & FACILITIES SHOWCASE
        ========================================================= */}
        <div className="mb-14 sm:mb-16 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-orange-50/50 border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Campus Info & Locations */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-700 eyebrow-badge">
                <Building2 className="w-3.5 h-3.5" />
                <span>Visit Us in Coimbatore</span>
              </div>

              <h2 className="display-h2 text-slate-900">
                Experience Smart Classroom Labs & 1-on-1 Guidance
              </h2>

              <p className="body-paragraph text-slate-600">
                Whether you prefer in-person training at our modern Coimbatore centers or interactive live online classes with full lab access, Cloudswan Solution offers you an immersive, high-engagement learning experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Branch 1 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-orange-100 text-accent-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="display-card-title text-slate-900 text-sm sm:text-base">Saravanampatti Campus</h3>
                      <span className="caption-text text-slate-500">Near IT Corridor & SEZ</span>
                    </div>
                  </div>
                  <p className="body-subtext text-slate-600">
                    High-tech smart labs, dedicated project development zones, and easy transit access.
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.saravanampattiPhone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-600 hover:text-accent-700 font-heading pt-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{CONTACT_INFO.saravanampattiDisplayPhone}</span>
                  </a>
                </div>

                {/* Branch 2 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="display-card-title text-slate-900 text-sm sm:text-base">Gandhipuram Campus</h3>
                      <span className="caption-text text-slate-500">City Central Junction</span>
                    </div>
                  </div>
                  <p className="body-subtext text-slate-600">
                    Walkable from bus terminals and train connections with weekday & weekend classrooms.
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.coimbatorePhone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 font-heading pt-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{CONTACT_INFO.coimbatoreDisplayPhone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Coimbatore Advantages Key Points */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COIMBATORE_ADVANTAGES.map((adv, aIdx) => (
                <div
                  key={aIdx}
                  className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs hover:bg-white transition-all space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm font-heading">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                    <span>{adv.title}</span>
                  </div>
                  <p className="body-subtext text-slate-500 pl-6">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            7. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION
               (Placed in last before the final conversion CTA)
        ========================================================= */}
        <FAQSection onOpenEnquiry={onOpenEnquiry} />

        {/* =========================================================
            8. PREMIUM CALL TO ACTION CARD (Above Footer Conversion Zone)
        ========================================================= */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-accent-600 via-orange-500 to-amber-600 p-8 sm:p-10 lg:p-12 text-white shadow-xl shadow-orange-500/20">
          {/* Subtle patterns */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white eyebrow-badge backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join Coimbatore's Leading IT Community</span>
              </span>
              <h2 className="display-h2 text-white leading-tight">
                Ready to Accelerate Your Career with Industry IT Training?
              </h2>
              <p className="lead-paragraph text-white/90 max-w-xl">
                Get a customized course roadmap, explore ongoing batch timings, or schedule a free 1-on-1 career consultation at our Coimbatore campuses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                type="button"
                onClick={() => onOpenEnquiry('IT Training in Coimbatore - Free Counseling')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold font-heading tracking-wide shadow-lg shadow-black/10 transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Free Career Counseling</span>
                <ArrowRight className="w-4 h-4 text-accent-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/30 text-white text-sm font-bold font-heading tracking-wide transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Admissions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
