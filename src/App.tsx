import { useState, useEffect } from 'react'
import {
  ArrowRight,
  X,
} from 'lucide-react'
import { Navbar } from './components/navbar/Navbar'
import { HeroSection } from './components/hero/HeroSection'
import { CurrentBatchesSection } from './components/batches/CurrentBatchesSection'
import { ITTrainingSection } from './components/training/ITTrainingSection'
import { EnquiryModal } from './components/modals/EnquiryModal'
import { AboutPage } from './components/about/AboutPage'
import { CareersPage } from './components/careers/CareersPage'
import { CourseDetailPage } from './components/course/CourseDetailPage'
import { getCourseByIdOrSlug } from './data/courses'
import {
  findCourseBySlugOrId,
  type CourseItem,
  type CourseCategory,
} from './data/navigationData'

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname) {
      return window.location.pathname
    }
    return '/'
  })

  const [selectedCourse, setSelectedCourse] = useState<{
    course: CourseItem
    category: CourseCategory
  } | null>(null)
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false)
  const [enquirySubject, setEnquirySubject] = useState<string>('')

  // Sync browser URL when path changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname !== currentPath) {
      window.history.pushState(null, '', currentPath)
    }
  }, [currentPath])

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Auto-detect course spotlight preview for non-registered course URLs
  useEffect(() => {
    const activeData = getCourseByIdOrSlug(currentPath)
    if (!activeData && currentPath !== '/') {
      const found = findCourseBySlugOrId(currentPath)
      if (found) {
        setSelectedCourse(found)
      }
    }
  }, [currentPath])

  const handleNavigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }
    setCurrentPath(path)
    if (path === '/') {
      setSelectedCourse(null)
      document.title = 'IT Training Institute In Coimbatore | CloudSwan'
    } else if (path === '/careers') {
      setSelectedCourse(null)
      document.title = 'Careers | Cloudswan Solution - Join Our Team'
    } else if (path === '/about') {
      setSelectedCourse(null)
      document.title = 'About Us | Cloudswan Solution - No.1 IT Training Institute Coimbatore'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCourseSelect = (course: CourseItem, category: CourseCategory) => {
    // If selecting cybersecurity or any registered course, navigate to its dedicated page
    const matched = getCourseByIdOrSlug(course.slug) || getCourseByIdOrSlug(course.id)
    if (matched) {
      handleNavigate(matched.slug)
      return
    }

    // For other courses without dedicated page yet, display the spotlight preview
    setSelectedCourse({ course, category })
    handleNavigate(course.slug || `/courses/${course.id}`)
    window.scrollTo({ top: 380, behavior: 'smooth' }) 
  }

  const handleOpenEnquiry = (subject?: string) => {
    setEnquirySubject(subject || '')
    setEnquiryModalOpen(true)
  }

  // Look up course in registry for currentPath
  const activeCourseData = getCourseByIdOrSlug(currentPath)

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
        {activeCourseData ? (
          <CourseDetailPage
            course={activeCourseData}
            onOpenEnquiry={handleOpenEnquiry}
            onNavigate={handleNavigate}
          />
        ) : (
          <>
            {/* Selected Course Spotlight (when chosen from Mega Menu) */}
            {selectedCourse && (
              <div className="bg-white border-b border-slate-200/80 shadow-xs transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-accent-50/70 via-slate-50 to-white border border-accent-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="eyebrow-badge px-2 py-0.5 rounded-full bg-accent-500 text-white">
                          {selectedCourse.category.title}
                        </span>
                        {selectedCourse.course.badge && (
                          <span className="eyebrow-badge px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {selectedCourse.course.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="display-h3 text-slate-900">
                        {selectedCourse.course.name}
                      </h2>
                      <p className="body-paragraph text-slate-600 max-w-2xl">
                        Comprehensive industry-aligned curriculum, hands-on capstone projects, and guaranteed placement mentorship.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleOpenEnquiry(`${selectedCourse.course.name} - Enrollment`)}
                        className="px-4 py-2 text-xs sm:text-sm font-bold font-heading tracking-wide text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-sm shadow-accent-500/30 transition-all flex items-center gap-1.5"
                      >
                        <span>Enquire for this Course</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedCourse(null)}
                        className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                        title="Dismiss preview"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Page Content: About Us Page vs Careers Page vs Home Page */}
            {currentPath === '/about' ? (
              <AboutPage
                onNavigateHome={() => handleNavigate('/')}
                onExploreCourses={() => {
                  handleNavigate('/')
                  setTimeout(() => {
                    const el = document.getElementById('current-batches')
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' })
                    }
                  }, 100)
                }}
                onOpenEnquiry={handleOpenEnquiry}
              />
            ) : currentPath === '/careers' ? (
              <CareersPage
                onNavigateHome={() => handleNavigate('/')}
                onOpenEnquiry={handleOpenEnquiry}
              />
            ) : (
              <>
                {/* Modern Catchy Hero Section with Interactive Global Map & Animated Counters */}
                <HeroSection
                  onOpenEnquiry={handleOpenEnquiry}
                  onExploreCourses={() => {
                    const el = document.getElementById('current-batches')
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                />

                {/* Current Ongoing & Upcoming Batches Section */}
                <CurrentBatchesSection onOpenEnquiry={handleOpenEnquiry} />

                {/* IT Training for Students and Professionals in Coimbatore */}
                <ITTrainingSection onOpenEnquiry={handleOpenEnquiry} />
              </>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 caption-text border-t border-slate-800 py-8 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 CloudSwan Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
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