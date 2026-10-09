import React, { useEffect } from 'react'
import type { GeneralCourseData } from '../../types/generalCourse'
import { GeneralCourseHero } from './GeneralCourseHero'
import { GeneralCourseCurriculum } from './GeneralCourseCurriculum'
import { GeneralCourseMethodology } from './GeneralCourseMethodology'
import { GeneralCourseFAQ } from './GeneralCourseFAQ'

interface GeneralCoursePageProps {
  course: GeneralCourseData
  onOpenEnquiry: (subject?: string) => void
  onNavigate: (path: string) => void
}

/**
 * 3-4 Component Layout for all non-IT training courses.
 * Dynamically renders customized syllabus, highlights, FAQs and enrollment form
 * based on the course selected by the user.
 */
export const GeneralCoursePage: React.FC<GeneralCoursePageProps> = ({
  course,
  onOpenEnquiry,
  onNavigate,
}) => {
  useEffect(() => {
    // Set dynamic page title for SEO
    document.title = `${course.title} | CloudSwan Institute Coimbatore`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [course])

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 antialiased font-sans">
      {/* Component 1: Hero Section with Integrated Enrollment & Counseling Form */}
      <GeneralCourseHero
        course={course}
        onOpenEnquiry={onOpenEnquiry}
        onNavigate={onNavigate}
      />

      {/* Component 2: Comprehensive Modular Curriculum & Learning Outcomes */}
      <GeneralCourseCurriculum
        course={course}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Component 3: Training Methodology, Mentor Standards & Dual Campus Facility */}
      <GeneralCourseMethodology
        course={course}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Component 4: Target Audience, Frequently Asked Questions & Final Conversion CTA */}
      <GeneralCourseFAQ
        course={course}
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  )
}
