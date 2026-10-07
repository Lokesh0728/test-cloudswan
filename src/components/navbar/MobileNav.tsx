import React, { useState, useEffect } from 'react'
import {
  X,
  ChevronDown,
  ChevronRight,
  Code2,
  Briefcase,
  Languages,
  BadgeCheck,
  Sparkles,
  Phone,
  ArrowRight,
  GraduationCap,
} from 'lucide-react'
import { Logo } from './Logo'
import {
  MAIN_NAV_LINKS,
  COURSE_CATEGORIES,
  CONTACT_INFO,
  type CourseItem,
  type CourseCategory,
} from '../../data/navigationData'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  currentPath?: string
  onNavigate: (href: string) => void
  onCourseSelect: (course: CourseItem, category: CourseCategory) => void
  onOpenEnquiry: (courseName?: string) => void
}

const CATEGORY_ICONS = {
  Code2,
  Briefcase,
  Languages,
  BadgeCheck,
  Sparkles,
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  currentPath = '/',
  onNavigate,
  onCourseSelect,
  onOpenEnquiry,
}) => {
  const [isCoursesExpanded, setIsCoursesExpanded] = useState<boolean>(true)
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>('it-training')

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const toggleCategory = (catId: string) => {
    setExpandedCategoryId((prev) => (prev === catId ? null : catId))
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-white sticky top-0 z-10">
          <Logo
            onClick={() => { onNavigate('/'); onClose(); }}
            imgClassName="w-[120px] sm:w-[125px] h-auto object-contain"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-slate-100">
          {/* Main Navigation Links */}
          <nav className="space-y-1 pb-4" aria-label="Mobile Main Navigation">
            {MAIN_NAV_LINKS.map((link) => {
              const isActive = currentPath === link.href

              if (link.hasMegaMenu) {
                return (
                  <div key={link.name} className="pt-1">
                    <button
                      type="button"
                      onClick={() => setIsCoursesExpanded(!isCoursesExpanded)}
                      className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-base sm:text-lg font-heading font-semibold transition-colors ${isCoursesExpanded || isActive
                          ? 'text-accent-600 font-bold'
                          : 'text-slate-800 hover:text-accent-600'
                        }`}
                      aria-expanded={isCoursesExpanded}
                    >
                      <div className="flex items-center gap-2.5">
                        <GraduationCap className="w-5 h-5 text-accent-500" />
                        <span>{link.name}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isCoursesExpanded ? 'rotate-180 text-accent-500' : ''
                          }`}
                      />
                    </button>

                    {/* Collapsible Courses Section */}
                    {isCoursesExpanded && (
                      <div className="mt-2 pl-2 space-y-2.5 border-l-2 border-accent-200 ml-3">
                        {COURSE_CATEGORIES.map((category) => {
                          const IconComp = CATEGORY_ICONS[category.iconName] || Sparkles
                          const isCatOpen = expandedCategoryId === category.id

                          return (
                            <div
                              key={category.id}
                              className="rounded-xl border border-slate-200/90 overflow-hidden bg-white shadow-2xs"
                            >
                              {/* Category Header with Underline */}
                              <button
                                type="button"
                                onClick={() => toggleCategory(category.id)}
                                className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 transition-colors"
                                aria-expanded={isCatOpen}
                              >
                                <div className="flex items-center gap-2.5">
                                  <div className="w-7 h-7 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center shrink-0">
                                    <IconComp className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <span className="font-heading text-xs font-bold text-slate-900 block">
                                      {category.title}
                                    </span>
                                    <span className="caption-text text-slate-400 block font-normal">
                                      {category.courses.length} Courses
                                    </span>
                                  </div>
                                </div>
                                <ChevronRight
                                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isCatOpen ? 'rotate-90 text-accent-500' : ''
                                    }`}
                                />
                              </button>

                              {/* Category Courses List with `→ ` Prefix */}
                              {isCatOpen && (
                                <div className="px-3 pb-3 pt-1 border-t border-slate-100 bg-slate-50/40">
                                  <ul className="space-y-1 pt-1">
                                    {category.courses.map((course) => (
                                      <li key={course.id}>
                                        <a
                                          href={course.slug}
                                          onClick={(e) => {
                                            e.preventDefault()
                                            onCourseSelect(course, category)
                                            onClose()
                                          }}
                                          className="flex items-center justify-between py-2 px-2.5 rounded-lg text-xs font-medium font-sans text-slate-700 hover:text-accent-600 hover:bg-white transition-colors"
                                        >
                                          <div className="flex items-center gap-1.5 truncate pr-2">
                                            <span className="text-accent-500 font-bold font-heading">→</span>
                                            <span className="truncate">{course.name}</span>
                                          </div>
                                          {course.badge && (
                                            <span className="eyebrow-badge text-[9px] px-1.5 py-0.5 rounded bg-accent-50 text-accent-600 shrink-0">
                                              {course.badge}
                                            </span>
                                          )}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>

                                  <div className="pt-2 mt-1 border-t border-slate-200/60">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        onOpenEnquiry(category.title)
                                        onClose()
                                      }}
                                      className="w-full text-center py-2 text-[11px] font-bold font-heading text-accent-600 hover:text-accent-700 bg-white border border-accent-100 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                                    >
                                      <span>Enquire about {category.title}</span>
                                      <ArrowRight className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate(link.href)
                    onClose()
                  }}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-base sm:text-lg font-heading font-semibold transition-colors ${isActive
                      ? 'text-accent-600 font-bold'
                      : 'text-slate-800 hover:text-accent-600'
                    }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="eyebrow-badge text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-wide">
                      {link.badge}
                    </span>
                  )}
                </a>
              )
            })}
          </nav>

          {/* Quick Contact Info */}
          <div className="py-4 space-y-3">
            <h4 className="eyebrow-badge text-slate-400">
              Direct Contact
            </h4>
            <a
              href={`tel:${CONTACT_INFO.coimbatorePhone}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 text-slate-700 hover:bg-accent-50 hover:text-accent-600 transition-colors text-xs font-medium border border-slate-100"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block caption-text text-slate-400">Coimbatore Campus</span>
                <span className="font-heading font-semibold text-slate-800">{CONTACT_INFO.coimbatoreDisplayPhone}</span>
              </div>
            </a>

            <a
              href={`tel:${CONTACT_INFO.saravanampattiPhone}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 text-slate-700 hover:bg-accent-50 hover:text-accent-600 transition-colors text-xs font-medium border border-slate-100"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block caption-text text-slate-400">Saravanampatti Campus</span>
                <span className="font-heading font-semibold text-slate-800">{CONTACT_INFO.saravanampattiDisplayPhone}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-white space-y-2 sticky bottom-0">
          <button
            type="button"
            onClick={() => {
              onClose()
              onOpenEnquiry()
            }}
            className="w-full py-3 px-4 rounded-xl text-sm font-bold font-heading tracking-wide text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] shadow-md shadow-accent-500/25 transition-all text-center flex items-center justify-center gap-2"
          >
            <span>Enquire Now / Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center caption-text text-slate-400">
            ISO 9001:2015 Certified • 100% Placement Assistance
          </p>
        </div>
      </div>
    </div>
  )
}
