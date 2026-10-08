export interface CourseItem {
  id: string
  name: string
  slug: string
  badge?: string
  isPopular?: boolean
  description?: string
}

export interface CourseCategory {
  id: string
  title: string
  subtitle: string
  iconName: 'Code2' | 'Briefcase' | 'Languages' | 'BadgeCheck' | 'Sparkles'
  badge?: string
  courses: CourseItem[]
}

export interface NavLinkItem {
  name: string
  href: string
  hasMegaMenu?: boolean
  badge?: string
}

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses', hasMegaMenu: true },
  { name: 'Careers', href: '/careers', badge: 'Hiring' },
  { name: 'Contact', href: '/contact' },
]

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'it-training',
    title: 'IT Training',
    subtitle: 'High-demand software & tech skills',
    iconName: 'Code2',
    badge: 'Popular',
    courses: [
      { id: 'ai', name: 'Artificial Intelligence', slug: '/courses/artificial-intelligence', isPopular: true, badge: 'Trending' },
      { id: 'ml', name: 'Machine Learning', slug: '/courses/machine-learning', isPopular: true, badge: 'Hot' },
      { id: 'data-science', name: 'Data Science & Analytics', slug: '/courses/data-science', isPopular: true, badge: 'Hot' },
      { id: 'devops', name: 'DevOps & Cloud Engineering', slug: '/courses/devops', isPopular: true, badge: 'Hot' },
      { id: 'digital-marketing', name: 'Digital Marketing', slug: '/courses/digital-marketing', isPopular: true, badge: 'Trending' },
      { id: 'cybersecurity', name: 'Cybersecurity Training', slug: '/courses/cybersecurity', isPopular: true, badge: 'Hot' },
      { id: 'aws', name: 'AWS Cloud Training', slug: '/courses/aws', isPopular: true, badge: 'Hot' },
      { id: 'full-stack', name: 'Full Stack Development', slug: '/courses/full-stack-development', isPopular: true, badge: 'Hot' },
      { id: 'python', name: 'Python Development', slug: '/courses/python-development', isPopular: true },
      { id: 'cloud-computing', name: 'Cloud Computing', slug: '/courses/cloud-computing' },
      { id: 'sap', name: 'SAP Training', slug: '/courses/sap', isPopular: true, badge: 'Hot' },
      { id: 'salesforce', name: 'Salesforce Training', slug: '/courses/salesforce', isPopular: true, badge: 'Trending' },
    ],
  },
  {
    id: 'job-assured',
    title: 'Job Assured Training',
    subtitle: 'Guaranteed placement tracks',
    iconName: 'Briefcase',
    badge: '100% Placement',
    courses: [
      { id: 'job-assured-prog', name: 'Job-Assured Programs', slug: '/courses/job-assured-programs', isPopular: true, badge: 'Flagship' },
      { id: 'placement-training', name: 'Placement Training', slug: '/courses/placement-training' },
      { id: 'career-programs', name: 'Career Programs', slug: '/courses/career-programs' },
      { id: 'interview-prep', name: 'Interview Preparation', slug: '/courses/interview-preparation' },
      { id: 'resume-linkedin', name: 'Resume & LinkedIn', slug: '/courses/resume-linkedin' },
      { id: 'industry-readiness', name: 'Industry Readiness', slug: '/courses/industry-readiness' },
    ],
  },
  {
    id: 'language-training',
    title: 'Language Training',
    subtitle: 'Global languages & communication',
    iconName: 'Languages',
    badge: 'Global',
    courses: [
      { id: 'english-comm', name: 'English Communication', slug: '/courses/english-communication' },
      { id: 'ielts', name: 'IELTS', slug: '/courses/ielts', isPopular: true, badge: 'Band 7+' },
      { id: 'german', name: 'German', slug: '/courses/german', badge: 'A1-B2' },
      { id: 'french', name: 'French', slug: '/courses/french', badge: 'DELF' },
      { id: 'spoken-english', name: 'Spoken English', slug: '/courses/spoken-english' },
      { id: 'business-comm', name: 'Business Communication', slug: '/courses/business-communication' },
    ],
  },
  {
    id: 'global-certifications',
    title: 'Global Certification Support',
    subtitle: 'Official vendor exam preparation',
    iconName: 'BadgeCheck',
    badge: 'Certified',
    courses: [
      { id: 'aws-cert', name: 'AWS', slug: '/courses/aws', isPopular: true, badge: 'Cloud' },
      { id: 'microsoft-cert', name: 'Microsoft', slug: '/courses/microsoft-certification' },
      { id: 'google-cert', name: 'Google', slug: '/courses/google-certification' },
      { id: 'cisco-cert', name: 'Cisco', slug: '/courses/cisco-certification' },
      { id: 'prof-certs', name: 'Professional Certifications', slug: '/courses/professional-certifications' },
      { id: 'exam-prep', name: 'Certification Exam Preparation', slug: '/courses/certification-exam-prep' },
    ],
  },
  {
    id: 'general-training',
    title: 'General Training',
    subtitle: 'Core interpersonal & essential skills',
    iconName: 'Sparkles',
    badge: 'Essential',
    courses: [
      { id: 'soft-skills', name: 'Soft Skills', slug: '/courses/soft-skills' },
      { id: 'aptitude', name: 'Aptitude', slug: '/courses/aptitude-training' },
      { id: 'personality-dev', name: 'Personality Development', slug: '/courses/personality-development' },
      { id: 'leadership', name: 'Leadership Training', slug: '/courses/leadership-training' },
      { id: 'corporate-training', name: 'Corporate Training', slug: '/courses/corporate-training' },
      { id: 'basic-computers', name: 'Basic Computer Skills', slug: '/courses/basic-computer-skills' },
    ],
  },
]

export const CONTACT_INFO = {
  phone: '+91 98765 43210',
  displayPhone: '+91 98765 43210',
  coimbatorePhone: '+91 98765 43210',
  coimbatoreDisplayPhone: '+91 98765 43210',
  saravanampattiPhone: '+91 89038 35098',
  saravanampattiDisplayPhone: '+91 89038 35098',
  email: 'admissions@cloudswan.in',
  location: 'Gandhipuram & Saravanampatti Campuses, Coimbatore',
  operatingHours: 'Mon - Sat: 9:00 AM - 7:30 PM',
}

/**
 * Helper to look up any course item and its parent category by slug or id
 */
export function findCourseBySlugOrId(identifier: string): { course: CourseItem; category: CourseCategory } | null {
  if (!identifier) return null
  const clean = identifier.trim().toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '')
  const stripped = clean.replace(/^courses\//, '')

  for (const category of COURSE_CATEGORIES) {
    for (const course of category.courses) {
      const cSlug = course.slug.toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '')
      const cSlugStripped = cSlug.replace(/^courses\//, '')
      const cId = course.id.toLowerCase()

      if (cId === clean || cId === stripped || cSlug === clean || cSlugStripped === stripped) {
        return { course, category }
      }
    }
  }
  return null
}

