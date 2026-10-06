import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  X,
} from 'lucide-react'
import { Navbar } from './components/navbar/Navbar'
import { HeroSection } from './components/hero/HeroSection'
import { CurrentBatchesSection } from './components/batches/CurrentBatchesSection'
import { EnquiryModal } from './components/modals/EnquiryModal'
import {
  type CourseItem,
  type CourseCategory,
} from './data/navigationData'

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/')
  const [selectedCourse, setSelectedCourse] = useState<{
    course: CourseItem
    category: CourseCategory
  } | null>(null)
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false)
  const [enquirySubject, setEnquirySubject] = useState<string>('')

  const handleNavigate = (path: string) => {
    setCurrentPath(path)
    if (path === '/') {
      setSelectedCourse(null)
    }
  }

  const handleCourseSelect = (course: CourseItem, category: CourseCategory) => {
    setSelectedCourse({ course, category })
    setCurrentPath(`/courses/${course.id}`)
    window.scrollTo({ top: 380, behavior: 'smooth' })
  }

  const handleOpenEnquiry = (subject?: string) => {
    setEnquirySubject(subject || '')
    setEnquiryModalOpen(true)
  }

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
        {/* Selected Course Spotlight (when chosen from Mega Menu) */}
        {selectedCourse && (
          <div className="bg-white border-b border-slate-200/80 shadow-xs transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-accent-50/70 via-slate-50 to-white border border-accent-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-accent-500 text-white">
                      {selectedCourse.category.title}
                    </span>
                    {selectedCourse.course.badge && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {selectedCourse.course.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {selectedCourse.course.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                    Comprehensive industry-aligned curriculum, hands-on capstone projects, and guaranteed placement mentorship.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleOpenEnquiry(`${selectedCourse.course.name} - Enrollment`)}
                    className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-xl shadow-sm shadow-accent-500/30 transition-all flex items-center gap-1.5"
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

        {/* Features / Why Choose Us Strip */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-accent-500 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Hands-on Lab Training</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Work on industry-grade capstone projects, cloud sandboxes, and modern codebases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-accent-500 text-white flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Dedicated Placement Cell</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    1-on-1 mock interviews, resume critique, LinkedIn branding, and direct hiring drives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-accent-500 text-white flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Global Certification Prep</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Authorized preparation for AWS, Microsoft Azure, Google Cloud, and Cisco credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 CloudSwan Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
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
