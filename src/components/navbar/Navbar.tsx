import React, { useState, useEffect, useRef } from 'react'
import {
  ChevronDown,
  Menu,
  PhoneCall,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Logo } from './Logo'
import { TopUtilityBar } from './TopUtilityBar'
import { CoursesMegaMenu } from './CoursesMegaMenu'
import { MobileNav } from './MobileNav'
import {
  MAIN_NAV_LINKS,
  CONTACT_INFO,
  type CourseItem,
  type CourseCategory,
} from '../../data/navigationData'

interface NavbarProps {
  currentPath?: string
  onNavigate?: (path: string) => void
  onCourseSelect?: (course: CourseItem, category: CourseCategory) => void
  onOpenEnquiry?: (courseOrSubject?: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath = '/',
  onNavigate = () => { },
  onCourseSelect = () => { },
  onOpenEnquiry = () => { },
}) => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navContainerRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<number | null>(null)

  // Track scroll position for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setIsCoursesOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCoursesOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Clear hover timeout helper
  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }

  // Hover handlers with debounce buffer
  const handleMouseEnterCourses = () => {
    clearHoverTimeout()
    setIsCoursesOpen(true)
  }

  const handleMouseLeaveCourses = () => {
    clearHoverTimeout()
    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsCoursesOpen(false)
    }, 180)
  }

  const handleMouseEnterOther = () => {
    clearHoverTimeout()
    setIsCoursesOpen(false)
  }

  return (
    <header
      ref={navContainerRef}
      className="sticky top-0 z-40 w-full select-none"
      onMouseLeave={handleMouseLeaveCourses}
    >
      {/* Top Utility Bar with Helpline and Accreditations */}
      <TopUtilityBar
        onOpenEnquiry={() => onOpenEnquiry('General Inquiry')}
        onMouseEnter={handleMouseEnterOther}
      />

      {/* Main Navigation Bar */}
      <div
        className={`w-full bg-white/95 backdrop-blur-md border-b transition-all duration-200 ${isScrolled
          ? 'border-slate-200 shadow-sm py-1.5'
          : 'border-slate-100 py-2'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo */}
            <div className="flex items-center shrink-0" onMouseEnter={handleMouseEnterOther}>
              <Logo onClick={() => onNavigate('/')} />
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center space-x-1"
              aria-label="Main Navigation"
            >
              {MAIN_NAV_LINKS.map((link) => {
                const isActive = currentPath === link.href

                if (link.hasMegaMenu) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={handleMouseEnterCourses}
                      onMouseLeave={handleMouseLeaveCourses}
                    >
                      <button
                        type="button"
                        onClick={() => setIsCoursesOpen((prev) => !prev)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setIsCoursesOpen((prev) => !prev)
                          }
                        }}
                        aria-expanded={isCoursesOpen}
                        aria-haspopup="true"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-3.5 text-sm xl:text-[15px] font-heading font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg ${isCoursesOpen || isActive
                          ? 'text-accent-600 font-bold bg-accent-50/60'
                          : 'text-slate-700 hover:text-accent-600 hover:bg-slate-50'
                          }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isCoursesOpen
                            ? 'rotate-180 text-accent-500'
                            : isActive
                              ? 'text-accent-500'
                              : 'text-slate-400'
                            }`}
                        />
                      </button>
                    </div>
                  )
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={handleMouseEnterOther}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsCoursesOpen(false)
                      onNavigate(link.href)
                    }}
                    className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-3.5 text-sm xl:text-[15px] font-heading font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg ${isActive
                      ? 'text-accent-600 font-bold bg-accent-50/60'
                      : 'text-slate-700 hover:text-accent-600 hover:bg-slate-50'
                      }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="eyebrow-badge text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 leading-none">
                        {link.badge}
                      </span>
                    )}
                  </a>
                )
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-2.5" onMouseEnter={handleMouseEnterOther}>
              {/* Phone Quick Dial Pill (Desktop Large) */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs xl:text-sm font-heading font-semibold text-slate-700 hover:text-accent-600 border border-slate-200/80 hover:border-accent-200 hover:bg-slate-50 transition-all"
                title="Direct Admissions Helpline"
              >
                <PhoneCall className="w-3.5 h-3.5 text-accent-500" />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>

              {/* Primary CTA Button (Tablet & Desktop: Enquire Now) */}
              <button
                type="button"
                onClick={() => onOpenEnquiry('Admissions Inquiry')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-heading font-bold tracking-wide text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-xs shadow-accent-500/25 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-100" />
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Quick Enquire (Small Phones only) */}
              <button
                type="button"
                onClick={() => onOpenEnquiry('Mobile Quick Inquiry')}
                className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-heading font-bold tracking-wide text-white bg-accent-500 hover:bg-accent-600"
              >
                Enquire
              </button>

              {/* Mobile / Tablet Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Courses Mega Menu Dropdown */}
        <CoursesMegaMenu
          isOpen={isCoursesOpen}
          onClose={() => setIsCoursesOpen(false)}
          onMouseEnter={handleMouseEnterCourses}
          onMouseLeave={handleMouseLeaveCourses}
          onCourseSelect={(course, category) => {
            setIsCoursesOpen(false)
            onCourseSelect(course, category)
          }}
          onOpenEnquiry={(subj) => {
            setIsCoursesOpen(false)
            onOpenEnquiry(subj)
          }}
        />
      </div>

      {/* Mobile & Tablet Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={currentPath}
        onNavigate={(path) => {
          setIsMobileMenuOpen(false)
          onNavigate(path)
        }}
        onCourseSelect={(course, category) => {
          setIsMobileMenuOpen(false)
          onCourseSelect(course, category)
        }}
        onOpenEnquiry={(subj) => {
          setIsMobileMenuOpen(false)
          onOpenEnquiry(subj)
        }}
      />
    </header>
  )
}
