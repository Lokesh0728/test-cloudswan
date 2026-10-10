import { useState, useEffect } from 'react'
import { Navbar } from './components/navbar/Navbar'
import { HeroSection } from './components/hero/HeroSection'
import { CurrentBatchesSection } from './components/batches/CurrentBatchesSection'
import { ITTrainingSection } from './components/training/ITTrainingSection'
import { EnquiryModal } from './components/modals/EnquiryModal'
import { AboutPage } from './components/about/AboutPage'
import { CareersPage } from './components/careers/CareersPage'
import { CourseDetailPage } from './components/course/CourseDetailPage'
import { GeneralCoursePage } from './components/generalCourse/GeneralCoursePage'
import { CoursesPage } from './components/courses/CoursesPage'
import { getCourseByIdOrSlug } from './data/courses'
import { getGeneralCourseBySlugOrId } from './data/generalCoursesData'
import type { CourseItem, CourseCategory } from './data/navigationData'

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname) {
      return window.location.pathname + window.location.search
    }
    return '/'
  })

  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false)
  const [enquirySubject, setEnquirySubject] = useState<string>('')

  // Sync browser URL when path changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.pathname + window.location.search) !== currentPath) {
      window.history.pushState(null, '', currentPath)
    }
  }, [currentPath])

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath((window.location.pathname || '/') + (window.location.search || ''))
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
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 caption-text border-t border-slate-800 py-8 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 CloudSwan Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/courses" onClick={(e) => { e.preventDefault(); handleNavigate('/courses'); }} className="hover:text-slate-200 transition-colors">Courses</a>
            <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigate('/about'); }} className="hover:text-slate-200 transition-colors">About Us</a>
            <a href="/careers" onClick={(e) => { e.preventDefault(); handleNavigate('/careers'); }} className="hover:text-slate-200 transition-colors">Careers</a>
            <a href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <a href="/verification" className="hover:text-slate-200 transition-colors">Certificate Verification</a>
          </div>
        </div>
      </footer>

      {/* Interactive Enquiry & Consultation Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialCourseOrSubject={enquirySubject}
      />
    </div>
  )
}