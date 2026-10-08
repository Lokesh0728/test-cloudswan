import { cybersecurityCourseData } from './cybersecurityData'
import { awsCourseData } from './awsData'
import { aiCourseData } from './aiData'
import { mlCourseData } from './mlData'
import { dataScienceCourseData } from './dataScienceData'
import { devopsCourseData } from './devopsData'
import { digitalMarketingCourseData } from './digitalMarketingData'
import { sapCourseData } from './sapData'
import { salesforceCourseData } from './salesforceData'
import { fullstackCourseData } from './fullstackData'
import { pythonCourseData } from './pythonData'
import { cloudComputingCourseData } from './cloudComputingData'
import type { CourseData } from '../../types/course'

/**
 * Global Course Registry
 * -------------------------------------------------------------
 * Maps course IDs, slugs, and common route variations to full CourseData.
 * The application automatically maps `/courses/<slug>`, `/<slug>`,
 * or any aliases to the dedicated course detail page.
 * -------------------------------------------------------------
 */
export const COURSES_REGISTRY: Record<string, CourseData> = {
  // Cybersecurity mappings
  cybersecurity: cybersecurityCourseData,
  'cyber-security': cybersecurityCourseData,
  '/cybersecurity': cybersecurityCourseData,
  '/courses/cybersecurity': cybersecurityCourseData,
  '/courses/cyber-security': cybersecurityCourseData,

  // AWS mappings
  aws: awsCourseData,
  'aws-cloud': awsCourseData,
  'aws-cloud-training': awsCourseData,
  'aws-certification': awsCourseData,
  'aws-cert': awsCourseData,
  '/aws': awsCourseData,
  '/courses/aws': awsCourseData,
  '/courses/aws-cloud': awsCourseData,
  '/courses/aws-cloud-training': awsCourseData,
  '/courses/aws-certification': awsCourseData,

  // Full Stack Development mappings
  'full-stack': fullstackCourseData,
  fullstack: fullstackCourseData,
  'full-stack-development': fullstackCourseData,
  'fullstack-development': fullstackCourseData,
  'mern-stack': fullstackCourseData,
  '/full-stack': fullstackCourseData,
  '/fullstack': fullstackCourseData,
  '/full-stack-development': fullstackCourseData,
  '/courses/full-stack': fullstackCourseData,
  '/courses/fullstack': fullstackCourseData,
  '/courses/full-stack-development': fullstackCourseData,
  '/courses/fullstack-development': fullstackCourseData,

  // Python Development mappings
  python: pythonCourseData,
  'python-development': pythonCourseData,
  'python-programming': pythonCourseData,
  'python-developer': pythonCourseData,
  '/python': pythonCourseData,
  '/python-development': pythonCourseData,
  '/courses/python': pythonCourseData,
  '/courses/python-development': pythonCourseData,
  '/courses/python-programming': pythonCourseData,

  // Cloud Computing mappings
  'cloud-computing': cloudComputingCourseData,
  cloud: cloudComputingCourseData,
  'cloud-engineer': cloudComputingCourseData,
  'cloud-computing-training': cloudComputingCourseData,
  '/cloud-computing': cloudComputingCourseData,
  '/cloud': cloudComputingCourseData,
  '/courses/cloud-computing': cloudComputingCourseData,
  '/courses/cloud': cloudComputingCourseData,
  '/courses/cloud-computing-training': cloudComputingCourseData,

  // Artificial Intelligence (AI) mappings
  ai: aiCourseData,
  'artificial-intelligence': aiCourseData,
  'ai-training': aiCourseData,
  'ai-machine-learning': aiCourseData,
  '/ai': aiCourseData,
  '/artificial-intelligence': aiCourseData,
  '/courses/ai': aiCourseData,
  '/courses/artificial-intelligence': aiCourseData,
  '/courses/ai-training': aiCourseData,
  '/courses/ai-machine-learning': aiCourseData,

  // Machine Learning (ML) mappings
  ml: mlCourseData,
  'machine-learning': mlCourseData,
  'machine-learning-training': mlCourseData,
  '/ml': mlCourseData,
  '/machine-learning': mlCourseData,
  '/courses/ml': mlCourseData,
  '/courses/machine-learning': mlCourseData,
  '/courses/machine-learning-training': mlCourseData,

  // Data Science & Analytics mappings
  'data-science': dataScienceCourseData,
  datascience: dataScienceCourseData,
  'data-science-analytics': dataScienceCourseData,
  'data-analytics': dataScienceCourseData,
  '/data-science': dataScienceCourseData,
  '/data-analytics': dataScienceCourseData,
  '/courses/data-science': dataScienceCourseData,
  '/courses/data-science-analytics': dataScienceCourseData,
  '/courses/data-analytics': dataScienceCourseData,
  '/courses/data-science-course': dataScienceCourseData,

  // DevOps & Cloud Engineering mappings
  devops: devopsCourseData,
  'dev-ops': devopsCourseData,
  'devops-cloud': devopsCourseData,
  'devops-cloud-engineering': devopsCourseData,
  '/devops': devopsCourseData,
  '/courses/devops': devopsCourseData,
  '/courses/devops-cloud': devopsCourseData,
  '/courses/devops-cloud-engineering': devopsCourseData,
  '/courses/devops-training': devopsCourseData,

  // Digital Marketing mappings
  'digital-marketing': digitalMarketingCourseData,
  digitalmarketing: digitalMarketingCourseData,
  'ai-digital-marketing': digitalMarketingCourseData,
  '/digital-marketing': digitalMarketingCourseData,
  '/ai-digital-marketing': digitalMarketingCourseData,
  '/courses/digital-marketing': digitalMarketingCourseData,
  '/courses/ai-digital-marketing': digitalMarketingCourseData,
  '/courses/digital-marketing-course': digitalMarketingCourseData,

  // SAP ERP / S/4HANA mappings
  sap: sapCourseData,
  'sap-erp': sapCourseData,
  'sap-training': sapCourseData,
  'sap-s4hana': sapCourseData,
  '/sap': sapCourseData,
  '/courses/sap': sapCourseData,
  '/courses/sap-erp': sapCourseData,
  '/courses/sap-training': sapCourseData,
  '/courses/sap-s4hana': sapCourseData,

  // Salesforce mappings
  salesforce: salesforceCourseData,
  'sales-force': salesforceCourseData,
  'salesforce-crm': salesforceCourseData,
  'salesforce-training': salesforceCourseData,
  'salesforce-developer': salesforceCourseData,
  '/salesforce': salesforceCourseData,
  '/sales-force': salesforceCourseData,
  '/courses/salesforce': salesforceCourseData,
  '/courses/sales-force': salesforceCourseData,
  '/courses/salesforce-crm': salesforceCourseData,
  '/courses/salesforce-training': salesforceCourseData,
}

/**
 * Register a course with aliases into the registry
 */
export function registerCourse(course: CourseData, aliases: string[] = []): void {
  const keys = new Set([
    course.id,
    course.slug,
    course.slug.replace(/^\/+/, '').replace(/\/+$/, ''),
    course.slug.replace(/^\/courses\//, ''),
    ...aliases,
  ])

  keys.forEach((k) => {
    COURSES_REGISTRY[k.toLowerCase()] = course
  })
}

/**
 * Look up course by ID, slug, or normalized route path.
 * Handles:
 *   - '/courses/devops'
 *   - '/devops'
 *   - 'devops'
 *   - With or without trailing slashes
 */
export function getCourseByIdOrSlug(idOrSlug: string): CourseData | null {
  if (!idOrSlug) return null

  // 1. Exact match check
  if (COURSES_REGISTRY[idOrSlug]) {
    return COURSES_REGISTRY[idOrSlug]
  }

  // 2. Normalized lowercase without slashes
  const normalized = idOrSlug.trim().toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '')
  if (COURSES_REGISTRY[normalized]) {
    return COURSES_REGISTRY[normalized]
  }

  // 3. Strip 'courses/' prefix if present
  const stripped = normalized.replace(/^courses\//, '')
  if (COURSES_REGISTRY[stripped]) {
    return COURSES_REGISTRY[stripped]
  }

  // 4. Scan registry values by course.id or course.slug
  for (const course of Object.values(COURSES_REGISTRY)) {
    const cId = course.id.toLowerCase()
    const cSlug = course.slug.toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '')
    const cSlugStripped = cSlug.replace(/^courses\//, '')

    if (
      cId === normalized ||
      cId === stripped ||
      cSlug === normalized ||
      cSlugStripped === stripped
    ) {
      return course
    }
  }

  return null
}

export {
  cybersecurityCourseData,
  awsCourseData,
  aiCourseData,
  mlCourseData,
  dataScienceCourseData,
  devopsCourseData,
  digitalMarketingCourseData,
  sapCourseData,
  salesforceCourseData,
  fullstackCourseData,
  pythonCourseData,
  cloudComputingCourseData,
}
export * from '../../types/course'

