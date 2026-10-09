export interface GeneralCourseModule {
  number: number
  title: string
  duration?: string
  topics: string[]
}

export interface GeneralCourseSpec {
  duration: string
  mode: string
  level: string
  batchTimings: string
  certification: string
  practicalHours: string
}

export interface GeneralCourseData {
  id: string
  slug: string
  categoryId: string
  categoryTitle: string
  title: string
  shortTitle: string
  badge?: string
  tagline: string
  overview: string[]
  specs: GeneralCourseSpec
  highlights: string[]
  outcomes: string[]
  modules: GeneralCourseModule[]
  targetAudience: string[]
  faqs: { question: string; answer: string }[]
}
