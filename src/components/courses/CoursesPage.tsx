import React, { useState, useMemo, useEffect } from 'react'
import {
  Sparkles,
  PhoneCall,
  Search,
  RotateCcw,
  ChevronRight,
  Star,
  BookOpen,
  ShieldCheck,
  GraduationCap,
  Building2,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react'
import { ALL_COURSES_CATALOG } from '../../data/coursesCatalogData'
import { CourseFilters, type CourseFilterState } from './CourseFilters'
import { CourseCard } from './CourseCard'

interface CoursesPageProps {
  onNavigate: (path: string) => void
  onOpenEnquiry: (subject?: string) => void
  initialCategory?: string
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onNavigate,
  onOpenEnquiry,
  initialCategory = 'all',
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const [filterState, setFilterState] = useState<CourseFilterState>({
    searchQuery: '',
    categoryId: initialCategory,
    levelId: 'all',
    modeId: 'all',
    durationId: 'all',
    sortBy: 'popular',
    onlyTrending: false,
    onlyPlacement: false,
    onlyCertification: false,
    onlyShortTrack: false,
  })

  // Synchronize initialCategory if it changes via prop
  useEffect(() => {
    if (initialCategory && initialCategory !== 'all') {
      setFilterState((prev) => ({ ...prev, categoryId: initialCategory }))
    }
  }, [initialCategory])

  const handleResetFilters = () => {
    setFilterState({
      searchQuery: '',
      categoryId: 'all',
      levelId: 'all',
      modeId: 'all',
      durationId: 'all',
      sortBy: 'popular',
      onlyTrending: false,
      onlyPlacement: false,
      onlyCertification: false,
      onlyShortTrack: false,
    })
  }

  // Filter & Sort Logic
  const filteredCourses = useMemo(() => {
    return ALL_COURSES_CATALOG.filter((course) => {
      // 1. Search Query
      if (filterState.searchQuery.trim()) {
        const query = filterState.searchQuery.toLowerCase().trim()
        const matchesName = course.name.toLowerCase().includes(query)
        const matchesShort = course.shortTitle.toLowerCase().includes(query)
        const matchesTagline = course.tagline.toLowerCase().includes(query)
        const matchesDesc = course.description.toLowerCase().includes(query)
        const matchesCategory = course.categoryName.toLowerCase().includes(query)
        const matchesTopics = course.keyTopics.some((t) =>
          t.toLowerCase().includes(query)
        )

        if (
          !matchesName &&
          !matchesShort &&
          !matchesTagline &&
          !matchesDesc &&
          !matchesCategory &&
          !matchesTopics
        ) {
          return false
        }
      }

      // 2. Category Filter
      if (
        filterState.categoryId !== 'all' &&
        course.categoryId !== filterState.categoryId
      ) {
        return false
      }

      // 3. Level Filter
      if (filterState.levelId !== 'all') {
        if (filterState.levelId === 'beginner') {
          if (
            course.levelCategory !== 'beginner' &&
            course.levelCategory !== 'all-levels'
          ) {
            return false
          }
        } else if (filterState.levelId === 'intermediate') {
          if (
            course.levelCategory !== 'intermediate' &&
            course.levelCategory !== 'all-levels'
          ) {
            return false
          }
        } else if (filterState.levelId === 'advanced') {
          if (
            course.levelCategory !== 'advanced' &&
            course.levelCategory !== 'intermediate' &&
            course.levelCategory !== 'all-levels'
          ) {
            return false
          }
        }
      }

      // 4. Mode Filter
      if (filterState.modeId !== 'all') {
        if (
          filterState.modeId !== 'all' &&
          course.modeCategory !== 'all' &&
          course.modeCategory !== filterState.modeId
        ) {
          return false
        }
      }

      // 5. Duration Filter
      if (
        filterState.durationId !== 'all' &&
        course.durationCategory !== filterState.durationId
      ) {
        return false
      }

      // 6. Quick Highlight Toggles
      if (
        filterState.onlyTrending &&
        !course.badge?.includes('Trending') &&
        !course.badge?.includes('Hot')
      ) {
        return false
      }

      if (filterState.onlyPlacement && !course.hasPlacement) {
        return false
      }

      if (filterState.onlyCertification && !course.hasCertification) {
        return false
      }

      if (
        filterState.onlyShortTrack &&
        course.durationCategory !== 'short'
      ) {
        return false
      }

      return true
    }).sort((a, b) => {
      // Sort logic
      switch (filterState.sortBy) {
        case 'rating':
          return b.rating - a.rating || b.reviewsCount - a.reviewsCount
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        case 'duration-asc':
          // short first, then medium, then long
          const durOrder = { short: 1, medium: 2, long: 3 }
          return durOrder[a.durationCategory] - durOrder[b.durationCategory]
        case 'popular':
        default:
          if (a.isPopular && !b.isPopular) return -1
          if (!a.isPopular && b.isPopular) return 1
          return b.reviewsCount - a.reviewsCount
      }
    })
  }, [filterState])

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-accent-500 selection:text-white">
      {/* ========================================================
          1. HERO HEADER SECTION (LIGHT & PREMIUM REDESIGN)
         ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 text-slate-900 py-10 sm:py-14 lg:py-16 border-b border-slate-200/80">
        {/* Ambient Decorative Lighting & Fine Architectural Texture */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-0">
          {/* Subtle warm ambient glow top-right */}
          <div className="absolute -top-24 right-1/4 h-[420px] w-[540px] rounded-full bg-gradient-to-bl from-accent-500/8 via-orange-400/5 to-transparent blur-[120px]" />
          {/* Subtle soft cool glow bottom-left */}
          <div className="absolute top-1/2 -left-20 h-[320px] w-[320px] rounded-full bg-blue-500/4 blur-[110px]" />
          {/* Ultra-subtle grid pattern for high-end SaaS feel */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 font-heading"
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('/')
              }}
              className="hover:text-accent-600 transition-colors"
            >
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold">All Courses & Certifications</span>
          </nav>

          {/* 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Value Proposition & Counselor Action */}
            <div className="lg:col-span-7 space-y-4 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-orange-50 border border-accent-200/80 text-accent-700 eyebrow-badge shadow-2xs text-[10.5px] sm:text-xs">
                <div className="inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                  <span className="whitespace-nowrap">Comprehensive Course Catalog</span>
                </div>
                <span className="hidden sm:inline text-accent-300">•</span>
                <span className="text-slate-600 font-medium normal-case whitespace-nowrap">
                  30 Industry Specializations
                </span>
              </div>

              {/* Main Title */}
              <h1 className="display-h1 text-slate-900 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.15]">
                Explore Industry-Certified{' '}
                <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-amber-500 bg-clip-text text-transparent">
                  Courses & Career Tracks
                </span>
              </h1>

              {/* Subtitle */}
              <p className="lead-paragraph text-slate-600 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
                Upskill with hands-on, project-driven curriculums, live sandbox labs,
                and 1:1 mentorship from seasoned professionals in Coimbatore. Choose
                from software engineering, global language tracks, vendor certifications,
                or corporate leadership programs.
              </p>

              {/* Quick Actions & Social Proof */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Course Catalog Guidance & Counseling')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] transition-all shadow-md shadow-accent-500/25 hover:shadow-lg hover:shadow-accent-500/30 text-center cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Get Free Course Guidance</span>
                </button>

                <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 shrink-0" />
                    ))}
                  </div>
                  <span className="font-heading font-bold text-slate-800">4.9/5</span>
                  <span className="text-slate-500 font-medium">(1,800+ Google Reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Clean Elevated Metric Cards + Trust Strip */}
            <div className="lg:col-span-5">
              <div className="p-4 sm:p-5 rounded-3xl bg-white/90 border border-slate-200/90 shadow-sm shadow-slate-200/60 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                  {/* Metric 1 */}
                  <div className="p-3 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-accent-200 hover:shadow-xs transition-all text-left group">
                    <div className="w-8 h-8 rounded-xl bg-orange-100/70 text-accent-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold font-heading text-slate-900 tracking-tight">
                      30+
                    </div>
                    <div className="caption-text font-semibold text-slate-700 mt-0.5 truncate">
                      Training Programs
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      IT, Cloud & Languages
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-accent-200 hover:shadow-xs transition-all text-left group">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold font-heading text-accent-500 tracking-tight">
                      100%
                    </div>
                    <div className="caption-text font-semibold text-slate-700 mt-0.5 truncate">
                      Placement Support
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Dedicated Career Cell
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-3 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-accent-200 hover:shadow-xs transition-all text-left group">
                    <div className="w-8 h-8 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold font-heading text-slate-900 tracking-tight">
                      12,000+
                    </div>
                    <div className="caption-text font-semibold text-slate-700 mt-0.5 truncate">
                      Graduates Placed
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Top MNCs & Tech Firms
                    </div>
                  </div>

                  {/* Metric 4 */}
                  <div className="p-3 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-accent-200 hover:shadow-xs transition-all text-left group">
                    <div className="w-8 h-8 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-bold font-heading text-slate-900 tracking-tight">
                      2 Campuses
                    </div>
                    <div className="caption-text font-semibold text-slate-700 mt-0.5 truncate">
                      Coimbatore Centers
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Gandhipuram & Saravanampatti
                    </div>
                  </div>
                </div>

                {/* Sub-Card Trust Bar */}
                <div className="mt-3.5 pt-3 border-t border-slate-200/70 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>ISO 9001:2015</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                    <span>250+ Hiring Partners</span>
                  </div>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span className="text-slate-500 font-medium">Hybrid Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. COURSES CATALOG & FILTER CONTAINER
         ======================================================== */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Filters Bar */}
        <div className="mb-8">
          <CourseFilters
            filterState={filterState}
            setFilterState={setFilterState}
            viewMode={viewMode}
            setViewMode={setViewMode}
            totalCount={ALL_COURSES_CATALOG.length}
            filteredCount={filteredCourses.length}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* Results Grid / List */}
        {filteredCourses.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'
                : 'space-y-4'
            }
          >
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                viewMode={viewMode}
                onNavigate={onNavigate}
                onOpenEnquiry={onOpenEnquiry}
              />
            ))}
          </div>
        ) : (
          /* ========================================================
             EMPTY STATE (When no course matches criteria)
             ======================================================== */
          <div className="bg-white rounded-3xl border border-slate-200 p-10 sm:p-14 text-center max-w-2xl mx-auto shadow-sm my-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-accent-500 flex items-center justify-center mx-auto mb-4 border border-orange-100">
              <Search className="w-8 h-8" />
            </div>

            <h3 className="display-h3 text-slate-900">
              No matching courses found
            </h3>

            <p className="body-paragraph text-slate-600 mt-2 max-w-md mx-auto">
              We couldn't find any courses matching your specific search or
              filter combination. Try resetting your filters or search for another skill.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 transition-all shadow-md shadow-accent-500/25"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Filters</span>
              </button>
            </div>

            {/* Popular Search Suggestions */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <span className="caption-text text-slate-400 block mb-2">
                Popular suggestions:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  'Python',
                  'Full Stack',
                  'DevOps',
                  'AWS',
                  'IELTS',
                  'Cybersecurity',
                  'SAP',
                  'English Communication',
                ].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() =>
                      setFilterState((prev) => ({
                        ...prev,
                        searchQuery: term,
                        categoryId: 'all',
                      }))
                    }
                    className="caption-text text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>


      {/* ========================================================
          4. FREQUENTLY ASKED QUESTIONS (ADMISSIONS ACCORDION)
         ======================================================== */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="eyebrow-badge text-accent-600 px-3.5 py-1.5 bg-orange-50 rounded-full border border-orange-200/80 shadow-2xs">
              Admissions FAQ
            </span>
            <h2 className="display-h2 text-slate-900 mt-3 text-2xl sm:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="lead-paragraph text-slate-600 mt-2 max-w-xl mx-auto text-sm sm:text-base">
              Clear answers to the most common questions about training programs,
              class schedules, and career placement at CloudSwan Coimbatore.
            </p>
          </div>

          <div className="space-y-3.5">
            {[
              {
                q: 'Can I switch between Classroom and Online training?',
                a: 'Yes, absolutely. CloudSwan provides full hybrid flexibility. If you enroll in classroom sessions at our Gandhipuram or Saravanampatti branches, you also receive lifetime access to high-definition recorded sessions and can attend live online lectures whenever required.',
              },
              {
                q: 'How does CloudSwan’s 100% Placement Assistance work?',
                a: 'Our dedicated placement cell conducts mock technical interviews, HR preparation, resume building workshops, and connects you directly with 250+ hiring partner companies across Coimbatore, Bangalore, Chennai, and Hyderabad upon completion of your capstone projects.',
              },
              {
                q: 'Do you offer weekend batches for working professionals?',
                a: 'Yes! We conduct dedicated Saturday and Sunday batches with extended lab access specifically designed for IT professionals, engineering faculty, and working executives with flexible pacing.',
              },
              {
                q: 'Can I attend a free demo session before making a decision?',
                a: 'Yes. You can attend a complimentary 1-hour interactive demo class for any course to evaluate our trainer expertise, practical teaching methodology, and lab infrastructure before enrolling.',
              },
              {
                q: 'Are the course completion certificates globally recognized?',
                a: 'Yes. All CloudSwan certifications are ISO 9001:2015 accredited, verifiable online with unique credential IDs, and recognized by multinational corporations and tech enterprises worldwide.',
              },
              {
                q: 'What if I miss a lecture or need 1:1 mentor assistance?',
                a: 'Every student receives dedicated doubt-clearing sessions, live sandbox mentor support, and access to all class recordings via our student LMS portal so you never fall behind.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                      ? 'bg-white border-accent-300 shadow-md shadow-accent-500/5 ring-1 ring-accent-500/10'
                      : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex((prev) => (prev === idx ? null : idx))
                    }
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold font-heading transition-all ${isOpen
                            ? 'bg-accent-500 text-white shadow-xs shadow-accent-500/25'
                            : 'bg-white text-slate-600 border border-slate-200 group-hover:border-accent-200 group-hover:text-accent-600'
                          }`}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className={`font-heading font-bold text-sm sm:text-base leading-snug transition-colors ${isOpen ? 'text-accent-600' : 'text-slate-900 group-hover:text-slate-950'
                          }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                          ? 'bg-orange-50 text-accent-600 rotate-180'
                          : 'bg-white text-slate-400 border border-slate-200 group-hover:text-slate-700'
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Smooth Accordion Body */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 sm:px-6 sm:pb-5 pt-1 text-slate-600 body-paragraph text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-1 pl-14 sm:pl-17">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Help Box Below Accordion */}
          <div className="mt-10 p-6 rounded-2xl bg-orange-50/60 border border-orange-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                Have questions about specific batches or course fees?
              </h4>
              <p className="caption-text text-slate-600 mt-1">
                Our admissions advisors in Gandhipuram & Saravanampatti are ready to guide you.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Admissions FAQ Assistance')}
              className="shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 transition-all shadow-xs shadow-accent-500/20"
            >
              Ask an Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
