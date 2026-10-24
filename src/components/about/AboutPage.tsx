import React, { useEffect } from 'react'
import { AboutHero } from './AboutHero'
import { AboutIntro } from './AboutIntro'
import { WhyCloudswan } from './WhyCloudswan'
import { TrainingApproach } from './TrainingApproach'
import { AchievementsAndLearning } from './AchievementsAndLearning'
import { TestimonialsSection } from '../testimonials/TestimonialsSection'

interface AboutPageProps {
  onNavigateHome?: () => void
  onExploreCourses?: () => void
  onOpenEnquiry?: (subject?: string) => void
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onExploreCourses,
  onOpenEnquiry,
}) => {
  // Update document title and scroll to top on mount
  useEffect(() => {
    document.title = 'About Us | Cloudswan Solution - No.1 IT Training Institute Coimbatore'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <article
      id="about-page"
      className="w-full flex flex-col bg-white text-slate-800 overflow-x-clip"
      aria-label="About Cloudswan Solution Coimbatore"
    >
      {/* 1. HERO SECTION */}
      <AboutHero
        onNavigateHome={onNavigateHome}
        onExploreCourses={onExploreCourses}
        onOpenEnquiry={(subject) => onOpenEnquiry?.(subject || 'About Us - Consultation')}
      />

      {/* 2. INTRODUCTION / WHO WE ARE */}
      <AboutIntro
        onExploreCourses={onExploreCourses}
        onTalkToCounselor={() => onOpenEnquiry?.('Counseling Session - Coimbatore')}
      />

      {/* 3. WHY WE ARE BEST */}
      <WhyCloudswan />

      {/* 4. OUR TRAINING APPROACH (Structured Methodology) */}
      <TrainingApproach />

      {/* 5. CERTIFICATES & ACHIEVEMENTS + CLASSES & LEARNING */}
      <AchievementsAndLearning />

      {/* 6. STUDENT TESTIMONIALS & VERIFIED GOOGLE REVIEWS */}
      <section className="py-10 sm:py-16 lg:py-24 bg-slate-50 relative overflow-hidden font-sans border-t border-slate-200/80">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsSection
            onOpenEnquiry={(subj) => onOpenEnquiry?.(subj || 'About Us - Alumni Consultation')}
            className="mb-0"
          />
        </div>
      </section>
    </article>
  )
}

export default AboutPage
