import React, { useEffect } from 'react'
import { ContactHero } from './ContactHero'
import { ContactChannelsSection } from './ContactChannelsSection'
import { BranchLocationsSection } from './BranchLocationsSection'
import { ContactFormSection } from './ContactFormSection'
import { ContactFAQSection } from './ContactFAQSection'

interface ContactPageProps {
  onNavigateHome?: () => void
  onExploreCourses?: () => void
  onOpenEnquiry?: (subject?: string) => void
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onExploreCourses,
  onOpenEnquiry: _onOpenEnquiry,
}) => {
  // Update document title and scroll to top on mount
  useEffect(() => {
    document.title = 'Contact Us | CloudSwan Solution - Gandhipuram & Saravanampatti Branches Coimbatore'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <article
      id="contact-page"
      className="w-full flex flex-col bg-white text-slate-800"
      aria-label="Contact CloudSwan Solution Coimbatore Branches"
    >
      {/* 1. HERO SECTION */}
      <ContactHero
        onNavigateHome={onNavigateHome}
        onExploreCourses={onExploreCourses}
        onScrollToForm={() => scrollToSection('contact-form')}
        onScrollToMaps={() => scrollToSection('campus-locations')}
      />

      {/* 2. DIRECT COMMUNICATION CHANNELS */}
      <ContactChannelsSection />

      {/* 3. GOOGLE MAPS SECTION: TWO BRANCHES (GANDHIPURAM, RAM NAGAR & SARAVANAMPATTI) */}
      <BranchLocationsSection />

      {/* 4. INLINE ADMISSIONS & CONTACT ENQUIRY FORM */}
      <ContactFormSection />

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <ContactFAQSection onScrollToForm={() => scrollToSection('contact-form')} />
    </article>
  )
}

export default ContactPage
