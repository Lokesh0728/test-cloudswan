export interface CourseQuickSpecs {
  courseName: string
  duration: string
  mode: string
  level: string
  coreSkills: string
  advancedTopics: string
  projects: string
  certification: string
  careerSupport: string
  mentorSupport: string
}

export interface CurriculumModule {
  number: number
  title: string
  subtitle: string
  description?: string
  topics: string[]
  iconName?: string
}

export interface PracticalProject {
  number: number
  title: string
  description: string
  focusArea: string
  toolsUsed?: string[]
}

export interface TargetAudienceItem {
  id: string
  title: string
  description: string
  iconName?: string
}

export interface ToolCategory {
  category: string
  description?: string
  tools: string[]
}

export interface ValuePillar {
  title: string
  description: string
  iconName?: string
}

export interface RoadmapStep {
  step: number
  title: string
  description: string
}

export interface CourseFAQItem {
  id: string
  question: string
  answer: string
}

export interface CourseData {
  id: string
  slug: string
  title: string
  shortTitle: string
  eyebrowBadge: string
  tagline: string
  heroDescription: string[]
  primaryCtaText: string
  secondaryCtaText: string
  
  // Specifications Table
  quickSpecs: CourseQuickSpecs

  // "Why Learn"
  whyLearn: {
    title: string
    intro: string
    description: string
    competenciesTitle: string
    competencies: string[]
    summaryNote: string
  }

  // Learning progression path
  learningPath: {
    title: string
    subtitle: string
    description: string
    steps: string[]
    outcomeNote: string
  }

  // 10 Detailed Modules
  curriculum: {
    title: string
    subtitle: string
    description: string
    modules: CurriculumModule[]
  }

  // Practical Projects
  projects: {
    title: string
    subtitle: string
    description: string
    items: PracticalProject[]
  }

  // Portfolio deliverables
  portfolio: {
    title: string
    subtitle: string
    description: string
    deliverables: string[]
    ctaText: string
  }

  // Target Audiences
  targetAudiences: {
    title: string
    subtitle: string
    audiences: TargetAudienceItem[]
  }

  // Career Opportunities
  careerOpportunities: {
    title: string
    subtitle: string
    description: string
    roles: string[]
    disclaimer: string
  }

  // Tools & Technologies
  toolsStack: {
    title: string
    subtitle: string
    description: string
    categories: ToolCategory[]
  }

  // Why Choose CloudSwan
  whyCloudSwan: {
    title: string
    subtitle: string
    pillars: ValuePillar[]
  }

  // Certification & Regional Context
  certification: {
    title: string
    subtitle: string
    description: string
    highlights: string[]
    regionalFocus: {
      title: string
      description: string
      keyAreas: string[]
    }
    ethicalHackingNote: {
      title: string
      subtitle: string
      description: string
      keyFocusAreas: string[]
      complianceWarning: string
    }
  }

  // Career Roadmap
  roadmap: {
    title: string
    subtitle: string
    steps: RoadmapStep[]
  }

  // FAQs
  faqs: CourseFAQItem[]

  // Final CTA
  finalCta: {
    title: string
    subtitle: string
    checkpoints: string[]
    primaryCta: string
    secondaryCta: string
  }
}
