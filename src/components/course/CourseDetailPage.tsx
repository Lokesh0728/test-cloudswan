import React, { useEffect } from 'react'
import type { CourseData } from '../../types/course'
import { CourseHero } from './CourseHero'
import { CourseWhyLearn } from './CourseWhyLearn'
import { CourseLearningPath } from './CourseLearningPath'
import { CourseCurriculum } from './CourseCurriculum'
import { CourseProjects } from './CourseProjects'
import { CoursePortfolio } from './CoursePortfolio'
import { CourseTargetAudience } from './CourseTargetAudience'
import { CourseCareerRoles } from './CourseCareerRoles'
import { CourseToolsStack } from './CourseToolsStack'
import { CourseRoadmap } from './CourseRoadmap'
import { CourseWhyCloudswan } from './CourseWhyCloudswan'
import { CourseCertification } from './CourseCertification'
import { CourseDetailsTable } from './CourseDetailsTable'
import { CourseFAQ } from './CourseFAQ'
import { CourseFinalCTA } from './CourseFinalCTA'

interface CourseDetailPageProps {
  course: CourseData
  onOpenEnquiry: (subject?: string) => void
  onNavigate: (path: string) => void
}

/**
 * Highly reusable generic Course Detail Page Layout.
 * Can render ANY course simply by passing a valid `CourseData` object!
 */
export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  onOpenEnquiry,
  onNavigate,
}) => {
  useEffect(() => {
    // Dynamically set page title for SEO
    document.title = `${course.title} | CloudSwan Institute`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [course])

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 antialiased font-sans">
      {/* 1. Hero Section with dynamic breadcrumbs, headline & badges */}
      <CourseHero
        course={course}
        onOpenEnquiry={onOpenEnquiry}
        onNavigate={onNavigate}
      />

      {/* 2. Course Details Fast Specifications Table */}
      <CourseDetailsTable
        quickSpecs={course.quickSpecs}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 3. Why Learn Section + 10 Core Professional Competencies */}
      <CourseWhyLearn
        whyLearn={course.whyLearn}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 4. Structured Journey & Learning Path */}
      <CourseLearningPath
        learningPath={course.learningPath}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 5. Comprehensive Modular Curriculum with Filter & Accordion */}
      <CourseCurriculum
        curriculum={course.curriculum}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 6. Practical Projects */}
      <CourseProjects
        projects={course.projects}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 7. Tools & Technologies Stack */}
      <CourseToolsStack
        toolsStack={course.toolsStack}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 8. Build Your Portfolio */}
      <CoursePortfolio
        portfolio={course.portfolio}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 9. Target Audience: Who Can Join */}
      <CourseTargetAudience
        targetAudiences={course.targetAudiences}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 10. 12-Step Career Roadmap */}
      <CourseRoadmap
        roadmap={course.roadmap}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 11. Career Opportunities & In-Demand Roles */}
      <CourseCareerRoles
        careerOpportunities={course.careerOpportunities}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 12. Why Choose CloudSwan Standard */}
      <CourseWhyCloudswan
        whyCloudSwan={course.whyCloudSwan}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 13. Certification & Regional Alignment */}
      <CourseCertification
        certification={course.certification}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 14. Dedicated FAQ Accordion */}
      <CourseFAQ
        faqs={course.faqs}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 15. Final Conversion CTA Card */}
      <CourseFinalCTA
        finalCta={course.finalCta}
        courseTitle={course.shortTitle}
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  )
}
