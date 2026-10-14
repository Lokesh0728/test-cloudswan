import React, { useState } from 'react'
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
} from 'lucide-react'
import { CONTACT_FAQS } from './contactData'

interface ContactFAQSectionProps {
  onScrollToForm: () => void
}

export const ContactFAQSection: React.FC<ContactFAQSectionProps> = ({ onScrollToForm }) => {
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({
    0: true, // First question open by default
  })

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section
      id="contact-faq"
      aria-label="Frequently Asked Questions about visiting CloudSwan Campuses"
      className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-accent-500" />
            <span>CAMPUS VISITS & ADMISSIONS FAQ</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            Frequently Asked <span className="text-accent-500">Questions</span>
          </h2>

          <p className="lead-paragraph text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about visiting our Gandhipuram & Saravanampatti branches, scheduling free preview classes, and enrollment.
          </p>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-3.5">
          {CONTACT_FAQS.map((faq, idx) => {
            const isOpen = !!openIndices[idx]

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all hover:border-orange-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? 'bg-accent-50 text-accent-600 border-accent-200 rotate-180'
                        : 'bg-slate-50 text-slate-400 border-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-xs">
          <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
            Have a question that is not covered here?
          </h4>
          <p className="caption-text text-slate-500 max-w-md mx-auto text-xs sm:text-sm">
            Our academic advisors are happy to walk you through fee plans, syllabus comparisons, or job placement statistics.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onScrollToForm}
              className="px-5 py-2.5 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-heading font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
            >
              Ask Our Academic Counselor
            </button>
            <a
              href="https://wa.me/918903835098?text=Hi%20CloudSwan,%20I%20have%20a%20question%20regarding%20courses%20and%20campus%20visits."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-accent-700 border border-orange-200/80 font-heading font-bold text-xs sm:text-sm shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 text-accent-500" />
              <span>WhatsApp Us Instantly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
