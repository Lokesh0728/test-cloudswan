import React, { useState } from 'react'
import {
  HelpCircle,
  ChevronDown,
  Search,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
} from 'lucide-react'
import type { CourseFAQItem } from '../../types/course'

interface CourseFAQProps {
  faqs: CourseFAQItem[]
  onOpenEnquiry: (subject?: string) => void
}

export const CourseFAQ: React.FC<CourseFAQProps> = ({
  faqs,
  onOpenEnquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-3': true,
  })
  const [feedback, setFeedback] = useState<Record<string, 'helpful' | 'not'>>({})

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleFeedback = (id: string, type: 'helpful' | 'not') => {
    setFeedback((prev) => ({
      ...prev,
      [id]: type,
    }))
  }

  const filteredFaqs = faqs.filter((item) => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
  })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 eyebrow-badge mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 body-paragraph text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about the cybersecurity curriculum, eligibility, certifications, tools, and placement support.
          </p>
        </div>

        {/* Search input */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. beginners, non-IT, certification, tools)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white text-slate-800 placeholder-slate-400 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* FAQs List */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
              <p className="body-paragraph text-slate-500">
                No FAQs matching "{searchQuery}". Have an unlisted query? Ask our counsellors!
              </p>
              <button
                type="button"
                onClick={() => onOpenEnquiry('Cybersecurity - General FAQ Query')}
                className="mt-4 px-4 py-2 text-xs font-bold font-heading text-white bg-accent-500 rounded-xl"
              >
                Ask a Question
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = !!openIds[faq.id]
              const userFeedback = feedback[faq.id]

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-50/60 border-accent-200 shadow-2xs'
                      : 'bg-white hover:bg-slate-50/60 border-slate-200/90'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="caption-text font-mono font-bold text-accent-600 shrink-0">
                        Q{index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 text-slate-500">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-accent-500' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-slate-100">
                      <p className="body-paragraph text-slate-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                        <span>Was this answer helpful?</span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleFeedback(faq.id, 'helpful')}
                            className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1 ${
                              userFeedback === 'helpful'
                                ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                                : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-500'
                            }`}
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Yes</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleFeedback(faq.id, 'not')}
                            className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1 ${
                              userFeedback === 'not'
                                ? 'bg-rose-50 text-rose-600 border-rose-200'
                                : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-500'
                            }`}
                          >
                            <ThumbsDown className="w-3.5 h-3.5" />
                            <span className="text-[11px]">No</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Still have questions footer */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-slate-800">Have a specific or unlisted question?</h4>
              <p className="caption-text text-slate-500">Speak directly with our senior Cybersecurity trainers</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry('Cybersecurity - Unlisted Question Enquiry')}
            className="px-4 py-2 text-xs sm:text-sm font-bold font-heading text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all shrink-0"
          >
            Speak with an Instructor
          </button>
        </div>
      </div>
    </section>
  )
}
