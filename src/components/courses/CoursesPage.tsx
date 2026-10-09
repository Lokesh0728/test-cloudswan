import React, { useState, useMemo, useEffect } from 'react'
import {
  Sparkles,
  PhoneCall,
  ArrowRight,
  HelpCircle,
  Search,
  RotateCcw,
} from 'lucide-react'
import { ALL_COURSES_CATALOG } from '../../data/coursesCatalogData'
import { CourseFilters, type CourseFilterState } from './CourseFilters'
import { CourseCard } from './CourseCard'
import { CONTACT_INFO } from '../../data/navigationData'

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
          1. HERO HEADER SECTION
         ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white py-14 sm:py-20 border-b border-slate-800">
        {/* Ambient Decorative Glow Lights */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[450px] w-[900px] rounded-full bg-accent-500/15 blur-[140px]" />
          <div className="absolute top-1/2 -left-32 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[130px]" />
          <div className="absolute bottom-0 -right-20 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 font-heading">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('/')
              }}
              className="hover:text-accent-400 transition-colors"
            >
              Home
            </a>
            <span>/</span>
            <span className="text-white">All Courses & Certifications</span>
          </nav>

          <div className="max-w-4xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-orange-200 eyebrow-badge backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-accent-400" />
              <span>Comprehensive Course Catalog</span>
              <span className="text-orange-400">•</span>
              <span className="text-slate-300 font-medium normal-case">
                30 Industry Specializations
              </span>
            </div>

            {/* Main Title */}
            <h1 className="display-h1 text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px]">
              Explore Industry-Certified{' '}
              <span className="bg-gradient-to-r from-accent-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Courses & Career Tracks
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 lead-paragraph text-slate-300 max-w-3xl">
              Upskill with hands-on, project-driven curriculums, live sandbox labs,
              and 1:1 mentorship from seasoned professionals in Coimbatore. Choose
              from software engineering, global language tracks, vendor certifications,
              or essential corporate leadership programs.
            </p>

            {/* Quick Metrics Ribbon */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-left">
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                  30+
                </div>
                <div className="caption-text text-slate-400 mt-0.5">
                  Training Programs
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-left">
                <div className="text-xl sm:text-2xl font-bold font-heading text-accent-400">
                  100%
                </div>
                <div className="caption-text text-slate-400 mt-0.5">
                  Placement Support
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-left">
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                  12,000+
                </div>
                <div className="caption-text text-slate-400 mt-0.5">
                  Graduates Placed
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-left">
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                  2 Campuses
                </div>
                <div className="caption-text text-slate-400 mt-0.5">
                  Coimbatore + Online
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
          3. CAREER ADVISING CTA CALLOUT BANNER
         ======================================================== */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white py-12 sm:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 eyebrow-badge mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free 1-on-1 Career Counselling</span>
              </span>
              <h2 className="display-h2 text-white">
                Unsure which program fits your profile?
              </h2>
              <p className="body-paragraph text-slate-300 mt-2">
                Our senior academic counselors evaluate your current education,
                coding experience, career aspiration, and suggest the exact
                specialization track with syllabus previews and batch timings.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-heading font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-center"
              >
                <PhoneCall className="w-4 h-4 text-accent-400" />
                <span>Call {CONTACT_INFO.displayPhone}</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry('Career Consultation & Course Guidance')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 transition-all shadow-md shadow-accent-500/25 text-center"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FREQUENTLY ASKED QUESTIONS (ADMISSIONS)
         ======================================================== */}
      <section className="py-14 sm:py-18 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="eyebrow-badge text-accent-600 px-3 py-1 bg-accent-50 rounded-full border border-accent-100">
              Common Questions
            </span>
            <h2 className="display-h2 text-slate-900 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="body-paragraph text-slate-600 mt-2">
              Everything you need to know about joining CloudSwan training programs in Coimbatore.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Can I switch between Classroom and Online training?',
                a: 'Yes, absolutely. CloudSwan provides full hybrid flexibility. If you enroll in classroom sessions at our Gandhipuram or Saravanampatti branches, you also receive access to recorded sessions and can attend live online lectures whenever required.',
              },
              {
                q: 'How does CloudSwan’s 100% Placement Assistance work?',
                a: 'Our dedicated placement cell conducts mock technical interviews, HR preparation, resume building sessions, and connects you directly with 250+ hiring partner companies across Coimbatore, Bangalore, Chennai, and Hyderabad upon completion of your capstone projects.',
              },
              {
                q: 'Do you offer weekend batches for working professionals?',
                a: 'Yes! We conduct dedicated Saturday and Sunday batches with extended lab access specifically designed for IT professionals, engineering faculty, and working executives.',
              },
              {
                q: 'Can I attend a free demo session before making a decision?',
                a: 'Yes. You can attend a complimentary 1-hour interactive demo class for any course to evaluate our trainer expertise, practical teaching methodology, and lab infrastructure.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80"
              >
                <h4 className="display-h4 text-slate-900 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="body-paragraph text-slate-600 mt-2 pl-7.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
