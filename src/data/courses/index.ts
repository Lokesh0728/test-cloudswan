import { cybersecurityCourseData } from './cybersecurityData'
import type { CourseData } from '../../types/course'

/**
 * Global Course Registry
 * -------------------------------------------------------------
 * HOW TO ADD A NEW COURSE IN THE FUTURE:
 * 1. Create your course data file (e.g. `src/data/courses/pythonData.ts`)
 *    implementing the `CourseData` interface.
 * 2. Add it to `COURSES_REGISTRY` below:
 *      python: pythonCourseData,
 * 3. Done! The app automatically maps `/courses/python`, `/python`,
 *    or the slug defined in `pythonData.slug` to the premium layout.
 * -------------------------------------------------------------
 */
export const COURSES_REGISTRY: Record<string, CourseData> = {
  // Cybersecurity mappings
  cybersecurity: cybersecurityCourseData,
  'cyber-security': cybersecurityCourseData,
  '/cybersecurity': cybersecurityCourseData,
  '/courses/cybersecurity': cybersecurityCourseData,
  '/courses/cyber-security': cybersecurityCourseData,
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
 *   - '/courses/cybersecurity'
 *   - '/cybersecurity'
 *   - 'cybersecurity'
 *   - 'cyber-security'
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

export { cybersecurityCourseData }
export * from '../../types/course'
