import React, { useState } from 'react'
import {
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  ExternalLink,
  ArrowRight,
  MessageSquare,
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

/** Genuine Google Multi-Color SVG Logo */
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

  const filteredTestimonials =
    selectedCategory === 'all'
      ? TESTIMONIALS_DATA
      : TESTIMONIALS_DATA.filter((t) => t.category === selectedCategory)

  // 3 reviews per slide on desktop view
  const itemsPerPage = 3
  const totalPages = Math.max(1, Math.ceil(filteredTestimonials.length / itemsPerPage))

  // Ensure current page is valid when filter changes
  const activePage = Math.min(currentPage, totalPages - 1)

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
    activePage * itemsPerPage,
    (activePage + 1) * itemsPerPage
  )

  return (
    <section
      id="student-testimonials"
      aria-labelledby="testimonials-heading"
      className="mb-16 sm:mb-20 lg:mb-24 relative"
    >
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute -inset-x-4 top-1/4 h-96 bg-gradient-to-r from-accent-500/5 via-orange-400/5 to-amber-500/5 blur-3xl -z-10 rounded-full" />

      {/* ========================================================
          1. SECTION HEADER (Harmonious with Home Page Aesthetics)
          ======================================================== */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        {/* Google Trust Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs eyebrow-badge text-slate-800 mb-4 text-[10.5px] sm:text-xs">
          <GoogleIcon size={16} />
          <span className="font-heading text-slate-900 tracking-wide whitespace-nowrap">
            Google Verified Reviews
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-amber-500 font-bold flex items-center gap-1 font-heading normal-case text-xs whitespace-nowrap">
            <span className="text-slate-900 font-extrabold">4.9</span>
            <span className="text-slate-400 font-normal">/ 5.0</span>
          </span>
        </div>

        {/* Primary Heading */}
        <h2 id="testimonials-heading" className="display-h2 text-slate-900">
          Trusted by 12,000+ Learners •{' '}
          <span className="bg-gradient-to-r from-accent-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Rated 4.9 on Google
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 lead-paragraph max-w-2xl mx-auto">
          Read genuine reviews from students and working professionals in Coimbatore
          who transformed their careers with Cloudswan's practical training.
        </p>
      </div>

      {/* ========================================================
          2. CLEAN & PREMIUM GOOGLE SCORECARD BANNER
          ======================================================== */}
      <div className="mb-10 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xs relative overflow-hidden backdrop-blur-sm">
        {/* Subtle Decorative Accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-accent-500/8 via-orange-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-500/5 via-sky-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left: Google Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center p-2.5 shrink-0 shadow-2xs">
              <GoogleIcon size={32} />
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-500 mt-1">
                Reviews
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
                  {GOOGLE_REVIEW_STATS.averageRating}
                </span>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="caption-text text-slate-500 font-semibold block mt-0.5">
                    Excellent Rating
                  </span>
                </div>
              </div>

              <p className="body-subtext text-slate-600">
                Based on{' '}
                <strong className="text-slate-900 font-semibold font-heading">
                  {GOOGLE_REVIEW_STATS.totalReviews.toLocaleString()}+ verified Google reviews
                </strong>{' '}
                in Coimbatore
              </p>

              <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 caption-text">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Business Verified</span>
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-orange-50 text-accent-700 border border-orange-200/80 caption-text font-semibold">
                  <span>#1 in Coimbatore</span>
                </span>
              </div>
            </div>
          </div>

          {/* Middle: Key Trust Metrics */}
          <div className="flex items-center gap-4 sm:gap-8 border-y lg:border-y-0 lg:border-x border-slate-100 py-4 lg:py-0 lg:px-8 w-full lg:w-auto justify-around">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
                {GOOGLE_REVIEW_STATS.satisfactionRate}%
              </div>
              <div className="caption-text text-slate-500 mt-0.5">Satisfaction Rate</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-accent-500">
                {GOOGLE_REVIEW_STATS.placedAlumniCount}
              </div>
              <div className="caption-text text-slate-500 mt-0.5">Alumni Placed</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-600">
                4.9★
              </div>
              <div className="caption-text text-slate-500 mt-0.5">Google Maps</div>
            </div>
          </div>

          {/* Right: Direct Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href="https://maps.google.com/?q=Cloudswan+Solution+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-bold font-heading tracking-wide transition-all shadow-2xs hover:shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
            >
              <GoogleIcon size={16} />
              <span>Verify on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800 transition-colors" />
            </a>

            <button
              type="button"
              onClick={() => onOpenEnquiry('Consultation inspired by Google Reviews')}
              className="px-4 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold font-heading tracking-wide transition-all shadow-sm shadow-accent-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Talk to Placed Alumni</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. CATEGORY FILTERS & SLIDER CONTROLS
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
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-heading tracking-wide transition-all flex items-center gap-2 cursor-pointer ${isSelected
                    ? 'bg-accent-500 text-white shadow-sm shadow-accent-500/25'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/80 shadow-2xs'
                  }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-heading ${isSelected
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

        {/* View Switcher & Slide Controls */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200/80 rounded-xl shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-heading transition-colors cursor-pointer ${viewMode === 'slider'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              Slider
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-heading transition-colors cursor-pointer ${viewMode === 'grid'
                  ? 'bg-slate-900 text-white shadow-2xs'
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
                className="p-2 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="caption-text font-bold text-slate-600 font-heading">
                {activePage + 1} / {totalPages}
              </span>
              <button
                type="button"
                onClick={handleNextPage}
                aria-label="Next testimonials"
                className="p-2 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          4. CLEAN & PREMIUM GOOGLE REVIEW CARDS
          ======================================================== */}
      {viewMode === 'slider' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {displayedInSlider.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      )}

      {/* Carousel Dots Pagination (when in slider mode) */}
      {viewMode === 'slider' && totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${activePage === idx
                  ? 'w-7 bg-accent-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
            />
          ))}
        </div>
      )}

      {/* ========================================================
          5. MINIMALIST FOOTER SOCIAL PROOF RIBBON
          ======================================================== */}
      <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-accent-600 shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="display-h5 text-slate-900">
              Are you a Cloudswan Alumni?
            </div>
            <p className="caption-text text-slate-500">
              Share your review on Google to help aspiring learners in Coimbatore.
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

/** Redesigned Clean & Premium Google Review Card */
interface TestimonialCardProps {
  testimonial: TestimonialItem
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white p-6 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 relative group h-full">
      <div>
        {/* Top Header: Author Info & Google Verified Tag */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* Avatar */}
            <div
              className={`w-11 h-11 rounded-full ${testimonial.avatarBg} text-white font-extrabold font-heading text-sm flex items-center justify-center shrink-0 shadow-2xs`}
            >
              {testimonial.avatarInitial}
            </div>

            <div className="min-w-0">
              <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug truncate">
                {testimonial.name}
              </h3>
              <p className="caption-text text-slate-500 truncate flex items-center gap-1.5 mt-0.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{testimonial.role}</span>
                <span className="text-slate-300">•</span>
                <span className="font-semibold text-slate-700">{testimonial.company}</span>
              </p>
            </div>
          </div>

          {/* Google Verified Review Pill */}
          <div
            className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200/70"
            title="Verified Google Review"
          >
            <GoogleIcon size={14} />
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
          </div>
        </div>

        {/* Stars, Posted Time & Highlight Metric Pill */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="caption-text text-slate-400">
              {testimonial.postedTime}
            </span>
          </div>

          {testimonial.highlightMetric && (
            <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[10px]">
              {testimonial.highlightMetric}
            </span>
          )}
        </div>

        {/* The Clean, Authentic Review Quote */}
        <p className="body-paragraph text-slate-700 text-sm leading-relaxed">
          "{testimonial.content}"
        </p>
      </div>

      {/* Card Footer: Course Tag & Campus */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="caption-text font-medium text-slate-500 truncate max-w-[200px]" title={testimonial.courseTaken}>
          🎓 {testimonial.courseTaken}
        </span>

        <span className="text-[11px] font-medium font-heading px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60 shrink-0">
          {testimonial.campus}
        </span>
      </div>
    </div>
  )
}
