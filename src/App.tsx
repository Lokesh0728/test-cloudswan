import { useState, useEffect, useLayoutEffect } from 'react'
import { Navbar } from './components/navbar/Navbar'
import { HeroSection } from './components/hero/HeroSection'
import { CurrentBatchesSection } from './components/batches/CurrentBatchesSection'
import { ITTrainingSection } from './components/training/ITTrainingSection'
import { EnquiryModal } from './components/modals/EnquiryModal'
import { AboutPage } from './components/about/AboutPage'
import { CareersPage } from './components/careers/CareersPage'
import { ContactPage } from './components/contact/ContactPage'
import { CourseDetailPage } from './components/course/CourseDetailPage'
import { GeneralCoursePage } from './components/generalCourse/GeneralCoursePage'
import { CoursesPage } from './components/courses/CoursesPage'
import { getCourseByIdOrSlug } from './data/courses'
import { getGeneralCourseBySlugOrId } from './data/generalCoursesData'
import type { CourseItem, CourseCategory } from './data/navigationData'
import { Footer } from './components/footer/Footer'
import { StippleType } from './components/ui/stipple-type'

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname) {
      return window.location.pathname + window.location.search
    }
    return '/'
  })

  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false)
  const [enquirySubject, setEnquirySubject] = useState<string>('')

  // Ensure browser doesn't automatically restore outdated scroll positions across SPA route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // Sync browser URL when path changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.pathname + window.location.search) !== currentPath) {
      window.history.pushState(null, '', currentPath)
    }
  }, [currentPath])

  // Instantly scroll to the top hero section on any route change
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (document.documentElement) document.documentElement.scrollTop = 0
    if (document.body) document.body.scrollTop = 0

    // Extra frame check to prevent scroll jump after asynchronous image/DOM renders
    const frameId = requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
    })

    return () => cancelAnimationFrame(frameId)
  }, [currentPath])

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath((window.location.pathname || '/') + (window.location.search || ''))
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleNavigate = (path: string) => {
    if ((window.location.pathname + window.location.search) !== path) {
      window.history.pushState({}, '', path)
    }
    setCurrentPath(path)
    const normalized = path.split('?')[0].replace(/\/+$/, '') || '/'
    if (normalized === '/') {
      document.title = 'IT Training Institute In Coimbatore | CloudSwan'
    } else if (normalized === '/careers') {
      document.title = 'Careers | Cloudswan Solution - Join Our Team'
    } else if (normalized === '/about') {
      document.title = 'About Us | Cloudswan Solution - No.1 IT Training Institute Coimbatore'
    } else if (normalized === '/courses') {
      document.title = 'All Courses & Certifications | CloudSwan Solution Coimbatore'
    } else if (normalized === '/contact') {
      document.title = 'Contact Us | CloudSwan Solution - Gandhipuram & Saravanampatti Branches Coimbatore'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (document.documentElement) document.documentElement.scrollTop = 0
    if (document.body) document.body.scrollTop = 0
  }

  const handleCourseSelect = (course: CourseItem, _category?: CourseCategory) => {
    handleNavigate(course.slug)
  }

  const handleOpenEnquiry = (subject?: string) => {
    setEnquirySubject(subject || '')
    setEnquiryModalOpen(true)
  }

  // Look up course in registry for currentPath
  const cleanPath = currentPath.split('?')[0]
  // 1. IT Training Courses (12 courses handled by CourseDetailPage)
  const activeITCourse = getCourseByIdOrSlug(cleanPath)
  // 2. All Other Courses (Language Training, Global Certifications, General Training handled by GeneralCoursePage)
  const activeGeneralCourse = getGeneralCourseBySlugOrId(cleanPath)

  // 3. Check for All Courses catalog route
  const normalizedPath = cleanPath.replace(/\/+$/, '') || '/'
  const isCoursesCatalogRoute = normalizedPath === '/courses'

  // Extract query category if present (e.g. /courses?category=it-training)
  const queryCategory = (() => {
    if (typeof window !== 'undefined' && currentPath.includes('?')) {
      const search = currentPath.split('?')[1]
      const params = new URLSearchParams(search)
      return params.get('category') || 'all'
    }
    return 'all'
  })()

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-accent-500 selection:text-white">
      {/* Responsive Institute Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onCourseSelect={handleCourseSelect}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeITCourse ? (
          <CourseDetailPage
            course={activeITCourse}
            onOpenEnquiry={handleOpenEnquiry}
            onNavigate={handleNavigate}
          />
        ) : activeGeneralCourse ? (
          <GeneralCoursePage
            course={activeGeneralCourse}
            onOpenEnquiry={handleOpenEnquiry}
            onNavigate={handleNavigate}
          />
        ) : isCoursesCatalogRoute ? (
          <CoursesPage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
            initialCategory={queryCategory}
          />
        ) : normalizedPath === '/about' ? (
          <AboutPage
            onNavigateHome={() => handleNavigate('/')}
            onExploreCourses={() => {
              handleNavigate('/courses')
            }}
            onOpenEnquiry={handleOpenEnquiry}
          />
        ) : normalizedPath === '/careers' ? (
          <CareersPage
            onNavigateHome={() => handleNavigate('/')}
            onOpenEnquiry={handleOpenEnquiry}
          />
        ) : normalizedPath === '/contact' ? (
          <ContactPage
            onNavigateHome={() => handleNavigate('/')}
            onExploreCourses={() => handleNavigate('/courses')}
            onOpenEnquiry={handleOpenEnquiry}
          />
        ) : (
          <>
            {/* Modern Catchy Hero Section with Interactive Global Map & Animated Counters */}
            <HeroSection
              onOpenEnquiry={handleOpenEnquiry}
              onExploreCourses={() => handleNavigate('/courses')}
            />

            {/* Current Ongoing & Upcoming Batches Section */}
            <CurrentBatchesSection
              onOpenEnquiry={handleOpenEnquiry}
              onNavigate={handleNavigate}
            />

            {/* IT Training for Students and Professionals in Coimbatore */}
            <ITTrainingSection onOpenEnquiry={handleOpenEnquiry} />
          </>
        )}
      </main>

      {/* Premium Institutional Site Footer */}
      <Footer
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Animated Brand Showcase Below Footer */}
      <section
        aria-label="CloudSwan Solution Stipple Animation"
        className="w-full bg-[#030712] border-t border-slate-800/80 relative overflow-hidden select-none py-8 sm:py-10 md:py-12"
      >
        {/* Subtle ambient lighting effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] bg-brand-500/10 rounded-full blur-[120px] opacity-60" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[200px] bg-accent-500/10 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
          {/* Single-line animated Stipple Type headline */}
          <div className="w-full h-32 sm:h-40 md:h-48  flex items-center justify-center">
            <StippleType singleLine={true} />
          </div>

          {/* Attractive inspirational quote below */}
          <div className="mt-2 sm:mt-4 flex flex-col items-center text-center max-w-2xl px-4">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-accent-500/80" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-accent-400">
                Transforming Careers
              </span>
              <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-accent-500/80" />
            </div>

            <blockquote className="text-slate-300 font-sans text-xs sm:text-sm md:text-base italic font-light tracking-wide leading-relaxed">
              “Empowering Minds, Engineering Futures — Shaping Tomorrow’s Tech Leaders.”
            </blockquote>

            <p className="mt-2 text-[11px] sm:text-xs text-slate-400 font-medium tracking-wider uppercase">
              No.1 IT Training Institute In Coimbatore • Gandhipuram & Saravanampatti
            </p>
          </div>
        </div>
      </section>



      {/* Interactive Enquiry & Consultation Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialCourseOrSubject={enquirySubject}
      />
    </div>
  )
}