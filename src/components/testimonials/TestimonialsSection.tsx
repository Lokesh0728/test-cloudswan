import React, { useState } from 'react'
import {
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Quote,
  Building2,
  ExternalLink,
  Award,
  ArrowRight,
} from 'lucide-react'
import {
  GOOGLE_REVIEW_STATS,
  TESTIMONIAL_CATEGORIES,
  TESTIMONIALS_DATA,
  type TestimonialItem,
} from './testimonialData'

interface TestimonialsSectionProps {
  onOpenEnquiry: (subject?: string) => void
}

/** Official Google SVG Icon with genuine branding colors */
export const GoogleIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.67-5.17 3.67-9.15z"
      fill="#4285F4"
    />
    <path
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.15C3.25 21.27 7.31 24 12 24z"
      fill="#34A853"
    />
    <path
      d="M5.27 14.24c-.25-.72-.39-1.5-.39-2.24s.14-1.52.39-2.24V6.61H1.26C.46 8.23 0 10.06 0 12s.46 3.77 1.26 5.39l4.01-3.15z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.73 1.26 6.61l4.01 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
      fill="#EA4335"
    />
  </svg>
)

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenEnquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredTestimonials =
    selectedCategory === 'all'
      ? TESTIMONIALS_DATA
      : TESTIMONIALS_DATA.filter((t) => t.category === selectedCategory)

  // Items per slide for desktop (3) and tablet (2)
  const itemsPerPage = 3
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage)

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId)
    setCurrentPage(0)
  }

  const displayedInSlider = filteredTestimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section
      id="student-testimonials"
      aria-labelledby="testimonials-heading"
      className="mb-16 sm:mb-20 lg:mb-24 relative"
    >
      {/* Background Accent Atmospheric Glow */}
      <div className="pointer-events-none absolute -inset-x-4 top-1/4 h-96 bg-gradient-to-r from-accent-500/5 via-amber-400/5 to-blue-500/5 blur-3xl -z-10 rounded-full" />

      {/* ========================================================
          1. PREMIUM GOOGLE REVIEWS HERO HEADER
          ======================================================== */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
        {/* Google Trust Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs eyebrow-badge text-slate-800 mb-4">
          <GoogleIcon size={18} />
          <span className="font-heading text-slate-900 tracking-wide">
            Google Verified Reviews
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-amber-500 font-bold flex items-center gap-1 normal-case font-sans">
            <span className="text-slate-900 font-bold font-heading">4.9 / 5</span>
            <span className="text-slate-400 font-normal">Rating</span>
          </span>
        </div>

        {/* Primary Heading */}
        <h2 id="testimonials-heading" className="display-h2 text-slate-900">
          Trusted by 12,000+ Learners •{' '}
          <span className="bg-gradient-to-r from-accent-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            Rated 4.9 on Google
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 lead-paragraph max-w-3xl mx-auto">
          Read genuine reviews from students, freshers, and working professionals
          in Coimbatore who transformed their careers through Cloudswan’s
          practical training and dedicated placement support.
        </p>
      </div>

      {/* ========================================================
          2. GOOGLE OFFICIAL SCORECARD BANNER & TRUST METRICS
          ======================================================== */}
      <div className="mb-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Big Google Rating Badge */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-3 shrink-0 shadow-inner">
              <GoogleIcon size={34} />
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-300 mt-1">
                Reviews
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                  {GOOGLE_REVIEW_STATS.averageRating}
                </span>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="caption-text text-slate-300 block font-medium">
                    Excellent Rating
                  </span>
                </div>
              </div>

              <p className="body-subtext text-slate-300">
                Based on{' '}
                <strong className="text-white font-semibold font-heading">
                  {GOOGLE_REVIEW_STATS.totalReviews.toLocaleString()}+ verified Google reviews
                </strong>{' '}
                in Coimbatore
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 caption-text">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Google Business Verified</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-500/20 text-accent-300 border border-accent-500/30 caption-text">
                  <Award className="w-3.5 h-3.5" />
                  <span>#1 in Coimbatore</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Star Breakdown & Quick Actions */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Visual Star Rating Bars */}
            <div className="sm:col-span-7 space-y-2">
              {GOOGLE_REVIEW_STATS.starBreakdown.slice(0, 3).map((item) => (
                <div key={item.stars} className="flex items-center gap-3 text-xs font-sans">
                  <div className="flex items-center gap-1 w-14 shrink-0 text-slate-300">
                    <span className="font-bold font-heading">{item.stars}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  {/* Progress track */}
                  <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-accent-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="caption-text text-slate-400 w-10 text-right">
                    {item.percentage}%
                  </span>
                </div>
              ))}
              <div className="pt-1 text-slate-400 caption-text flex items-center justify-between">
                <span>99% 4 & 5-Star Satisfaction</span>
                <span>Audited Monthly</span>
              </div>
            </div>

            {/* CTA Buttons in Header */}
            <div className="sm:col-span-5 flex flex-col gap-2.5">
              <a
                href="https://maps.google.com/?q=Cloudswan+Solution+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold font-heading tracking-wide transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <GoogleIcon size={16} />
                <span>Verify on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-900" />
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry('Consultation inspired by Student Reviews')}
                className="w-full px-4 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold font-heading tracking-wide transition-all shadow-md shadow-accent-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Talk to Placed Alumni</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. CATEGORY FILTERS & VIEW MODE CONTROLS
          ======================================================== */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div
          role="tablist"
          aria-label="Filter reviews by category"
          className="flex flex-wrap items-center gap-2 w-full sm:w-auto"
        >
          {TESTIMONIAL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-heading tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-accent-500 text-white shadow-sm shadow-accent-500/30'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/90'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-heading ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* View Mode & Slider Pagination Controls */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200/90 rounded-xl shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-heading transition-colors cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Carousel
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-heading transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Grid
            </button>
          </div>

          {viewMode === 'slider' && totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevPage}
                aria-label="Previous testimonials"
                className="p-2 rounded-xl bg-white border border-slate-200/90 hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="caption-text font-bold text-slate-500 font-heading">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                type="button"
                onClick={handleNextPage}
                aria-label="Next testimonials"
                className="p-2 rounded-xl bg-white border border-slate-200/90 hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          4. TESTIMONIAL CARDS DISPLAY (Carousel Slide or Full Grid)
          ======================================================== */}
      {viewMode === 'slider' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {displayedInSlider.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isExpanded={expandedId === testimonial.id}
              onToggleExpand={() =>
                setExpandedId((prev) =>
                  prev === testimonial.id ? null : testimonial.id
                )
              }
              onEnquire={() =>
                onOpenEnquiry(`${testimonial.courseTaken} - Placed at ${testimonial.company}`)
              }
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isExpanded={expandedId === testimonial.id}
              onToggleExpand={() =>
                setExpandedId((prev) =>
                  prev === testimonial.id ? null : testimonial.id
                )
              }
              onEnquire={() =>
                onOpenEnquiry(`${testimonial.courseTaken} - Placed at ${testimonial.company}`)
              }
            />
          ))}
        </div>
      )}

      {/* ========================================================
          5. FOOTER SOCIAL PROOF RIBBON & ALUMNI STATS
          ======================================================== */}
      <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-accent-600">
            <Quote className="w-5 h-5" />
          </div>
          <div>
            <div className="display-h5 text-slate-900">
              Are you a Cloudswan Alumni?
            </div>
            <p className="caption-text text-slate-500">
              Share your placement story with fellow Coimbatore learners and help guide the next generation.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://maps.google.com/?q=Cloudswan+Solution+Coimbatore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold font-heading transition-colors"
          >
            <GoogleIcon size={14} />
            <span>Write a Google Review</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Placement Mentorship & Alumni Connect')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-xs font-bold font-heading tracking-wide shadow-2xs transition-colors cursor-pointer"
          >
            <span>Connect with Mentor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  )
}

/** Individual Premium Testimonial Card with Google Verification Styling */
interface TestimonialCardProps {
  testimonial: TestimonialItem
  isExpanded: boolean
  onToggleExpand: () => void
  onEnquire: () => void
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isExpanded,
  onToggleExpand,
  onEnquire,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden">
      {/* Ambient top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-amber-400 to-blue-500 opacity-80" />

      <div>
        {/* Top Header: Google Badge & Verified Check */}
        <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-[11px] font-sans font-medium text-slate-700">
            <GoogleIcon size={14} />
            <span>Google Review</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="caption-text text-slate-400">{testimonial.postedTime}</span>
            {testimonial.campus && (
              <span className="text-[10px] font-semibold font-heading px-2 py-0.5 rounded-md bg-orange-50 text-accent-700 border border-orange-200/60">
                {testimonial.campus}
              </span>
            )}
          </div>
        </div>

        {/* User Profile Info */}
        <div className="flex items-start gap-3.5 mb-3">
          {/* Avatar with initial and gradient ring */}
          <div
            className={`w-12 h-12 rounded-2xl ${testimonial.avatarBg} text-white font-extrabold font-heading text-sm flex items-center justify-center shrink-0 shadow-xs`}
          >
            {testimonial.avatarInitial}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="display-card-title text-slate-900 truncate">
              {testimonial.name}
            </h3>
            <div className="flex items-center gap-1 text-xs font-semibold text-accent-600 truncate font-heading">
              <Building2 className="w-3 h-3 shrink-0" />
              <span>{testimonial.role}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-700 font-bold">{testimonial.company}</span>
            </div>
            {testimonial.collegeOrBackground && (
              <div className="caption-text text-slate-400 mt-0.5 truncate">
                {testimonial.collegeOrBackground}
              </div>
            )}
          </div>
        </div>

        {/* 5-Star Rating & Highlight Metric Pill */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {testimonial.highlightMetric && (
            <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
              {testimonial.highlightMetric}
            </span>
          )}
        </div>

        {/* Review Headline */}
        <h4 className="display-h5 text-slate-900 mb-2 leading-snug group-hover:text-accent-600 transition-colors">
          "{testimonial.headline}"
        </h4>

        {/* Review Body */}
        <p className="body-subtext text-slate-600 leading-relaxed">
          {isExpanded
            ? testimonial.content
            : `${testimonial.content.slice(0, 160)}...`}
        </p>

        {testimonial.content.length > 160 && (
          <button
            type="button"
            onClick={onToggleExpand}
            className="mt-1 text-xs font-bold text-accent-600 hover:text-accent-700 font-heading cursor-pointer"
          >
            {isExpanded ? 'Read less' : 'Read full review'}
          </button>
        )}
      </div>

      {/* Card Footer: Course Tag & Enquire Action */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="caption-text font-medium text-slate-500 truncate max-w-[190px]">
          📚 {testimonial.courseTaken}
        </span>

        <button
          type="button"
          onClick={onEnquire}
          className="text-xs font-bold text-accent-500 hover:text-accent-600 font-heading flex items-center gap-1 cursor-pointer shrink-0"
        >
          <span>Course Info</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
