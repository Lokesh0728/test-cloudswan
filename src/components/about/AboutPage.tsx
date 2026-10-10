import React, { useEffect } from 'react'
import { AboutHero } from './AboutHero'
import { AboutIntro } from './AboutIntro'
import { WhyCloudswan } from './WhyCloudswan'
import { TrainingApproach } from './TrainingApproach'
import { AchievementsAndLearning } from './AchievementsAndLearning'
import { StudentReviews } from './StudentReviews'

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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <article
      id="about-page"
      className="w-full flex flex-col bg-white text-slate-800"
      aria-label="About Cloudswan Solution Coimbatore"
    >
      {/* 1. HERO SECTION */}
      <AboutHero
        onNavigateHome={onNavigateHome}
        onExploreCourses={onExploreCourses}
        onOpenEnquiry={() => onOpenEnquiry?.('About Us - Consultation')}
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

      {/* 6. GOOGLE REVIEWS / STUDENT EXPERIENCES */}
      <StudentReviews />
    </article>
  )
}

export default AboutPage
