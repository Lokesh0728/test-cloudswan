import React, { useState, useId } from 'react'
import {
  HelpCircle,
  Search,
  X,
  ChevronDown,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  Briefcase,
  GraduationCap,
  Clock,
  CreditCard,
  Award,
} from 'lucide-react'
import {
  FAQ_DATA,
  FAQ_CATEGORIES,
} from './faqData'
import { CONTACT_INFO } from '../../data/navigationData'

interface FAQSectionProps {
  onOpenEnquiry: (subject?: string) => void
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Open the first popular question by default
  })
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, 'helpful' | 'not-helpful'>>({})
  const searchInputId = useId()

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleFeedback = (id: string, type: 'helpful' | 'not-helpful') => {
    setFeedbackGiven((prev) => ({
      ...prev,
      [id]: type,
    }))
  }

  // Filter questions based on category and search query
  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bullets?.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  return (
    <section
      id="frequently-asked-questions"
      aria-labelledby="faq-section-heading"
      className="relative"
    >
      {/* Subtle Background Radial Gradient */}
      <div className="pointer-events-none absolute -inset-x-4 top-1/3 h-96 bg-gradient-to-r from-blue-500/5 via-accent-500/5 to-purple-500/5 blur-3xl -z-10 rounded-full" />

      {/* ========================================================
          1. SECTION HEADER
          ======================================================== */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 eyebrow-badge mb-4 shadow-2xs text-[10.5px] sm:text-xs">
          <HelpCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span className="whitespace-nowrap">Clear Guidance • Zero Ambiguity</span>
        </div>

        <h2 id="faq-section-heading" className="display-h2 text-slate-900">
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-accent-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Questions
          </span>{' '}
          About IT Training
        </h2>

        <p className="mt-3.5 lead-paragraph max-w-3xl mx-auto">
          Got doubts about course fees, batch schedules, 100% placement support, or eligibility?
          Here are transparent answers to common questions from Coimbatore learners.
        </p>
      </div>

      {/* ========================================================
          2. SEARCH BAR & CATEGORY FILTER TABS
          ======================================================== */}
      <div className="max-w-4xl mx-auto mb-8 space-y-4">
        {/* Instant Search Bar */}
        <div className="relative">
          <label htmlFor={searchInputId} className="sr-only">
            Search frequently asked questions
          </label>
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            id={searchInputId}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., placement, fees, timing, non-IT, certificate)..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-sm font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div
          role="tablist"
          aria-label="Filter FAQ categories"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {FAQ_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id
            const count =
              cat.id === 'all'
                ? FAQ_DATA.length
                : FAQ_DATA.filter((i) => i.category === cat.id).length

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-heading tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/90'
                  }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-heading ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ========================================================
          3. ACCORDION QUESTION LIST
          ======================================================== */}
      <div className="max-w-4xl mx-auto space-y-3.5">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 px-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="display-card-title text-slate-800">
              No matching questions found
            </h3>
            <p className="body-subtext text-slate-500 mt-1 max-w-md mx-auto">
              We couldn't find an answer for "{searchQuery}". Our senior academic counselor can answer your question directly!
            </p>
            <button
              type="button"
              onClick={() => onOpenEnquiry(`Question Query: ${searchQuery}`)}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold font-heading tracking-wide transition-all shadow-sm shadow-accent-500/20 cursor-pointer"
            >
              <span>Ask Our Counselor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = Boolean(openIds[faq.id])
            const feedback = feedbackGiven[faq.id]

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border bg-white overflow-hidden ${isOpen
                    ? 'border-accent-400 shadow-md ring-1 ring-accent-400/20'
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                  }`}
              >
                {/* Question Header Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="flex items-start gap-3">
                    {/* Index / Accent indicator */}
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold font-heading shrink-0 transition-colors ${isOpen
                          ? 'bg-accent-500 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                        }`}
                    >
                      {index + 1}
                    </span>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {faq.isPopular && (
                          <span className="eyebrow-badge px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 text-[10px]">
                            Frequently Asked
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100/90 border border-slate-200/80 text-[11px] font-semibold text-slate-600 font-heading tracking-wide">
                          {faq.category === 'placements' && (
                            <>
                              <Briefcase className="w-3 h-3 text-accent-600 shrink-0" />
                              <span>Placements</span>
                            </>
                          )}
                          {faq.category === 'eligibility' && (
                            <>
                              <GraduationCap className="w-3 h-3 text-accent-600 shrink-0" />
                              <span>Eligibility</span>
                            </>
                          )}
                          {faq.category === 'timings' && (
                            <>
                              <Clock className="w-3 h-3 text-accent-600 shrink-0" />
                              <span>Schedules</span>
                            </>
                          )}
                          {faq.category === 'fees' && (
                            <>
                              <CreditCard className="w-3 h-3 text-accent-600 shrink-0" />
                              <span>Fees & EMI</span>
                            </>
                          )}
                          {faq.category === 'courses' && (
                            <>
                              <Award className="w-3 h-3 text-accent-600 shrink-0" />
                              <span>Projects & Certs</span>
                            </>
                          )}
                        </span>
                      </div>

                      <h3
                        className={`display-card-title text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-accent-600' : 'text-slate-900 group-hover:text-accent-600'
                          }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Sleek rotating chevron */}
                  <div
                    className={`p-2 rounded-xl transition-all shrink-0 mt-0.5 ${isOpen
                        ? 'bg-accent-50 text-accent-600 rotate-180'
                        : 'bg-slate-50 text-slate-400 group-hover:text-slate-700'
                      }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </div>
                </button>

                {/* Answer Content Dropdown */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100/90 text-slate-600 space-y-3 font-sans animate-fadeIn">
                    <p className="body-paragraph text-slate-700 leading-relaxed pt-2">
                      {faq.answer}
                    </p>

                    {faq.bullets && faq.bullets.length > 0 && (
                      <div className="grid grid-cols-1 gap-2 pt-1">
                        {faq.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Micro-Interaction: Was this helpful? */}
                    <div className="pt-3 mt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 caption-text">
                      <div className="flex items-center gap-2 text-slate-400">
                        <span>Was this answer helpful?</span>
                        {feedback ? (
                          <span className="font-semibold text-emerald-600 flex items-center gap-1 font-heading">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Thank you for your feedback!
                          </span>
                        ) : (
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleFeedback(faq.id, 'helpful')}
                              className="px-2 py-1 rounded-md bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 transition-colors cursor-pointer flex items-center gap-1"
                            >
                              <ThumbsUp className="w-3 h-3" />
                              <span>Yes</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => handleFeedback(faq.id, 'not-helpful')}
                              className="px-2 py-1 rounded-md bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 transition-colors cursor-pointer flex items-center gap-1"
                            >
                              <ThumbsDown className="w-3 h-3" />
                              <span>No</span>
                            </button>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => onOpenEnquiry(`Question: ${faq.question}`)}
                        className="text-xs font-bold text-accent-600 hover:text-accent-700 font-heading flex items-center gap-1 cursor-pointer"
                      >
                        <span>Need further clarification?</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>

      {/* ========================================================
          4. "STILL HAVE QUESTIONS?" PREMIUM COUNSELOR CARD
          ======================================================== */}
      <div className="max-w-4xl mx-auto mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-accent-500/15 border border-accent-500/30 text-accent-300 eyebrow-badge">
              <span>Personalized Academic Counseling</span>
            </div>
            <h3 className="display-card-title text-white text-lg sm:text-xl">
              Still Have Questions? Speak with an Advisor Today
            </h3>
            <p className="body-subtext text-slate-300">
              Get 1-on-1 advice on course selection, career transitions, salary benchmarks, and Coimbatore lab visits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${CONTACT_INFO.coimbatorePhone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold font-heading border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-accent-400" />
              <span>{CONTACT_INFO.coimbatoreDisplayPhone}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenEnquiry('Free 1-on-1 Course Consultation')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold font-heading tracking-wide transition-all shadow-md shadow-accent-500/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ask Our Counselor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
