import React, { useEffect } from 'react'
import { CareersHero } from './CareersHero'
import { HiringTrainers } from './HiringTrainers'

interface CareersPageProps {
  onNavigateHome?: () => void
  onOpenEnquiry?: (subject?: string) => void
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onOpenEnquiry,
}) => {
  // Update document title and scroll to top on mount
  useEffect(() => {
    document.title = 'Careers | Cloudswan Solution - Join Our Team'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <article
      id="careers-page"
      className="w-full flex flex-col bg-white text-slate-800"
      aria-label="Careers at Cloudswan Solution Coimbatore"
    >
      {/* 1. HERO SECTION */}
      <CareersHero
        onExplorePositions={() => scrollToSection('trainer-roles')}
      />

      {/* 2. HIRING INFORMATION SECTION */}
      <HiringTrainers onOpenEnquiry={onOpenEnquiry} />
    </article>
  )
}

export default CareersPage

