import React, { useMemo } from 'react'
import {
  Star,
  CheckCircle2,
  Building2,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react'
import DepthCarousel from './DepthCarousel'
import {
  GOOGLE_REVIEW_STATS,
  TESTIMONIALS_DATA,
  type TestimonialItem,
} from './testimonialData'

interface TestimonialsSectionProps {
  onOpenEnquiry: (subject?: string) => void
  className?: string
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
  className,
}) => {
  // Transform testimonials into items format compatible with DepthCarousel
  const items = useMemo(() => {
    return TESTIMONIALS_DATA.map((t) => ({
      image: t.avatarUrl || `https://picsum.photos/seed/${t.id}/800/1000`,
      alt: `${t.name} - ${t.role} at ${t.company}`,
      testimonial: t,
    }))
  }, [])

  return (
    <section
      id="student-testimonials"
      aria-labelledby="testimonials-heading"
      className={`relative overflow-hidden rounded-3xl bg-slate-950 text-white border border-slate-800/90 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-2xl ${className !== undefined ? className : 'mb-14 sm:mb-18 lg:mb-20'
        }`}
    >
      {/* Background Cinematic Atmosphere */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-accent-500/15 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      {/* ========================================================
          1. SLEEK SECTION HEADER & TRUST BADGES
          ======================================================== */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        {/* Google Trust Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 mb-4 shadow-sm">
          <GoogleIcon size={16} />
          <span className="font-heading text-xs font-semibold tracking-wide text-white">
            Google Verified Reviews
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
          <div className="flex items-center gap-1 font-heading text-xs font-bold text-amber-400">
            <span>4.9</span>
            <div className="flex items-center text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-400 font-normal text-[11px]">(1,850+)</span>
          </div>
        </div>

        {/* Primary Heading */}
        <h2 id="testimonials-heading" className="display-h2 text-white">
          Real Alumni Stories •{' '}
          <span className="bg-gradient-to-r from-accent-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
            Rated 4.9 on Google
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
          Drag or swipe through verified reviews from graduates in Coimbatore who switched
          careers or landed high-paying tech roles.
        </p>
      </div>

      {/* ========================================================
          2. REACTBITS 3D DEPTH CAROUSEL SHOWCASE (500px)
          ======================================================== */}
      <div style={{ height: '500px', position: 'relative' }} className="w-full">
        <DepthCarousel
          items={items}
          depth={220}
          spread={90}
          tilt={22}
          tiltDirection="right"
          perspective={1400}
          visibleCards={4}
          falloff={0.2}
          blur={6}
          autoplay
          loop
          cardWidth={340}
          cardHeight={430}
          renderCard={(item, _index, isActive) => (
            <ReviewDepthCard testimonial={item.testimonial} isActive={isActive} />
          )}
        />
      </div>

      {/* ========================================================
          3. MINIMALIST HIGH-TRUST SCORECARD & ACTIONS STRIP
          ======================================================== */}
      <div className="relative z-10 mt-8 pt-6 border-t border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Micro Trust Stats */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-8 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <div>
              <div className="text-base font-extrabold font-heading text-white">
                {GOOGLE_REVIEW_STATS.averageRating} / 5.0
              </div>
              <div className="text-[11px] text-slate-400">1,850+ Google Ratings</div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-slate-800" />

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base font-extrabold font-heading text-white">
                {GOOGLE_REVIEW_STATS.placedAlumniCount}
              </div>
              <div className="text-[11px] text-slate-400">Alumni Placed</div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-slate-800" />

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base font-extrabold font-heading text-white">
                {GOOGLE_REVIEW_STATS.satisfactionRate}%
              </div>
              <div className="text-[11px] text-slate-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center shrink-0">
          <a
            href="https://maps.google.com/?q=Cloudswan+Solution+Coimbatore"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-bold font-heading tracking-wide transition-all flex items-center gap-2 shadow-sm hover:border-white/30"
          >
            <GoogleIcon size={16} />
            <span>Verify on Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <button
            type="button"
            onClick={() => onOpenEnquiry('Consultation inspired by Google Reviews')}
            className="px-4 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold font-heading tracking-wide transition-all shadow-lg shadow-accent-500/25 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Talk to Alumni</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  )
}

/** Bespoke Ultra-Premium Google Review Card for DepthCarousel */
interface ReviewDepthCardProps {
  testimonial: TestimonialItem
  isActive?: boolean
}

const ReviewDepthCard: React.FC<ReviewDepthCardProps> = ({
  testimonial,
  isActive = false,
}) => {
  return (
    <div
      className={`relative w-full h-full p-6 flex flex-col justify-between overflow-hidden rounded-[20px] bg-slate-950 text-white border transition-all duration-300 select-none ${isActive
        ? 'border-accent-500/70 shadow-[0_25px_60px_-15px_rgba(254,90,44,0.3)] ring-1 ring-accent-500/40'
        : 'border-slate-800 shadow-2xl hover:border-slate-700'
        }`}
    >
      {/* Top Subtle Luminous Color Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-500 via-amber-400 to-orange-500 z-20" />

      {/* Subtle Ambient Glow Behind Card Content */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 bg-accent-500/15 rounded-full blur-2xl z-10" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl z-10" />

      {/* Background Alumni Portrait - clearly visible with high-contrast text overlay */}
      {testimonial.avatarUrl && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <img
            src={testimonial.avatarUrl}
            alt=""
            className="w-full h-full object-cover object-center opacity-50 filter contrast-105"
            draggable={false}
          />
          {/* Multi-stop dark gradient vignette to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
        </div>
      )}

      {/* ================= CARD HEADER ================= */}
      <div className="relative z-10 space-y-2.5">
        {/* Row 1: Google Identity & Distinct Green Metric Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center p-1.5 shadow-sm shrink-0">
              <GoogleIcon size={18} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading text-xs font-bold text-white tracking-wide whitespace-nowrap">
                Google Review
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 leading-tight">
                <CheckCircle2 className="w-2.5 h-2.5 text-blue-400 shrink-0" />
                Verified Student
              </span>
            </div>
          </div>

          {testimonial.highlightMetric && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-600 border border-emerald-400/80 text-white text-[11px] font-bold font-heading tracking-wide shrink-0 shadow-md shadow-emerald-950/60 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
              {testimonial.highlightMetric}
            </span>
          )}
        </div>

        {/* Row 2: Star Ratings & High-Contrast Clean Posted Time */}
        <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-xs">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="flex items-center text-amber-400">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold font-heading text-amber-300">5.0</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-100 bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20 backdrop-blur-sm shrink-0 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="whitespace-nowrap">{testimonial.postedTime}</span>
          </div>
        </div>
      </div>

      {/* ================= REVIEW BODY ================= */}
      <div className="relative z-10 my-auto py-2">
        <div className="text-accent-400/60 text-3xl font-serif leading-none select-none -mb-2">“</div>
        <p className="text-white text-[13.5px] sm:text-sm leading-relaxed font-sans font-medium tracking-wide line-clamp-5 drop-shadow-sm">
          {testimonial.content}
        </p>
      </div>

      {/* ================= CARD FOOTER ================= */}
      <div className="relative z-10 pt-3 border-t border-slate-800/90 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {testimonial.avatarUrl ? (
            <img
              src={testimonial.avatarUrl}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-accent-500/60 shadow-md shrink-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : null}
          <div
            className={`w-10 h-10 rounded-full ${testimonial.avatarBg} text-white font-heading font-extrabold text-sm flex items-center justify-center shrink-0 border border-white/20 shadow-md ${testimonial.avatarUrl ? 'hidden' : ''
              }`}
          >
            {testimonial.avatarInitial}
          </div>

          <div className="min-w-0">
            <h4 className="font-heading font-bold text-white text-sm truncate leading-tight">
              {testimonial.name}
            </h4>
            <p className="text-[11px] text-slate-400 truncate flex items-center gap-1 mt-0.5 font-sans">
              <Building2 className="w-3 h-3 text-accent-400 shrink-0" />
              <span className="text-accent-400 font-semibold">{testimonial.company}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 truncate">{testimonial.role}</span>
            </p>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-end gap-1">
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-slate-300 font-medium font-heading">
            {testimonial.campus}
          </span>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-sans">
            <CheckCircle2 className="w-3 h-3 text-blue-400" />
            <span>Google</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
