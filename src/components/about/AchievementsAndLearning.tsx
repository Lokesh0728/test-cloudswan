import React, { useRef } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Award,
  Medal,
  FileCheck,
  Users,
  ShieldCheck,
  Briefcase,
  TrendingUp,
} from 'lucide-react'

// Achievement Images (Extracted from real reference)
import achievePlacement1 from '../../assets/about/achieve-placement-1.jpg'
import achieveEmployee from '../../assets/about/achieve-employee.jpg'
import achieveAcademic from '../../assets/about/achieve-academic.jpg'
import achievePlacement2 from '../../assets/about/achieve-placement-2.jpg'
import achieveCertification from '../../assets/about/achieve-certification.jpg'

// Learning Images (Extracted from real reference)
import learnClassroom from '../../assets/about/learn-classroom.jpg'
import learnHandsOn from '../../assets/about/learn-hands-on.jpg'
import learnPractical from '../../assets/about/learn-practical.jpg'
import learnInteractive from '../../assets/about/learn-interactive.jpg'


interface AchievementCard {
  id: string
  image: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  alt: string
}

interface LearningCard {
  id: string
  image: string
  title: string
  alt: string
}

const ACHIEVEMENTS: AchievementCard[] = [
  {
    id: 'placement-1',
    image: achievePlacement1,
    title: 'Placement Excellence',
    icon: GraduationCap,
    alt: 'Cloudswan student receiving placement offer letter',
  },
  {
    id: 'employee-1',
    image: achieveEmployee,
    title: 'Employee Excellence',
    icon: Award,
    alt: 'Cloudswan student awarded for employee excellence',
  },
  {
    id: 'academic-1',
    image: achieveAcademic,
    title: 'Academic Achievement',
    icon: GraduationCap,
    alt: 'Student receiving academic achievement certification',
  },
  {
    id: 'placement-2',
    image: achievePlacement2,
    title: 'Placement Excellence',
    icon: Medal,
    alt: 'Student and mentor celebrating placement milestone',
  },
  {
    id: 'certification-1',
    image: achieveCertification,
    title: 'Certification Success',
    icon: FileCheck,
    alt: 'Student receiving Cloudswan Solution IT course certificate',
  },
]

const LEARNING_ITEMS: LearningCard[] = [
  {
    id: 'classroom',
    image: learnClassroom,
    title: 'Classroom Training',
    alt: 'Live classroom training session at Cloudswan Coimbatore',
  },
  {
    id: 'hands-on',
    image: learnHandsOn,
    title: 'Hands-on Learning',
    alt: 'Hands-on software development training on laptops',
  },
  {
    id: 'practical',
    image: learnPractical,
    title: 'Practical Sessions',
    alt: 'Practical lab programming session with mentor guidance',
  },
  {
    id: 'interactive',
    image: learnInteractive,
    title: 'Interactive Learning',
    alt: 'Interactive technical discussion in modern lab setting',
  },
]

export const AchievementsAndLearning: React.FC = () => {
  const achievementsRef = useRef<HTMLDivElement>(null)
  const learningRef = useRef<HTMLDivElement>(null)

  const scrollContainer = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: 'left' | 'right'
  ) => {
    if (!ref.current) return
    const container = ref.current
    const cardWidth = container.firstElementChild?.clientWidth || 300
    const scrollAmount = cardWidth + 20 // card + gap
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="achievements-learning"
      aria-label="Certificates & Achievements and Classes & Learning"
      className="relative bg-white py-10 sm:py-12 lg:py-14 border-t border-slate-100 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. CERTIFICATES & ACHIEVEMENTS SECTION
        ========================================================= */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          {/* Section Header with Orange Accent Lines */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-4 mb-2 max-w-full">
              <span className="hidden sm:inline-block h-0.5 w-8 sm:w-16 bg-orange-500 rounded-full shrink-0" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0A2540] uppercase text-center">
                CERTIFICATES & ACHIEVEMENTS
              </h2>
              <span className="hidden sm:inline-block h-0.5 w-8 sm:w-16 bg-orange-500 rounded-full shrink-0" />
            </div>
            <p className="text-xs sm:text-base font-medium italic text-slate-600">
              Recognizing Achievements. Inspiring Success.
            </p>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative group">
            {/* Left Scroll Button - visible on sm+ */}
            <button
              type="button"
              onClick={() => scrollContainer(achievementsRef, 'left')}
              className="hidden sm:flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200/90 text-slate-700 hover:text-orange-500 hover:border-orange-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Previous achievement cards"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Scroll Button - visible on sm+ */}
            <button
              type="button"
              onClick={() => scrollContainer(achievementsRef, 'right')}
              className="hidden sm:flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200/90 text-slate-700 hover:text-orange-500 hover:border-orange-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Next achievement cards"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Horizontal Scroll Cards Track */}
            <div
              ref={achievementsRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {ACHIEVEMENTS.map((card) => {
                const IconComponent = card.icon

                return (
                  <div
                    key={card.id}
                    className="flex-none w-[220px] sm:w-[240px] md:w-[250px] lg:w-[250px] xl:w-[calc(20%-16px)] snap-start group/card"
                  >
                    <div className="h-full bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col">
                      {/* Image Container */}
                      <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-slate-100">
                        <img
                          src={card.image}
                          alt={card.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                        />
                      </div>

                      {/* Bottom Label Area */}
                      <div className="p-3.5 sm:p-4 bg-white flex items-center gap-2.5 border-t border-slate-100 mt-auto min-w-0">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white shrink-0 shadow-sm shadow-orange-500/20">
                          <IconComponent className="h-4 w-4" />
                        </span>
                        <span className="font-bold text-xs sm:text-sm text-[#0A2540] tracking-tight leading-tight min-w-0">
                          {card.title}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            2. CLASSES & LEARNING SECTION
        ========================================================= */}
        <div className="mb-10 sm:mb-12">
          {/* Section Header with Orange Accent Lines */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-4 mb-2 max-w-full">
              <span className="hidden sm:inline-block h-0.5 w-8 sm:w-16 bg-orange-500 rounded-full shrink-0" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0A2540] uppercase text-center">
                CLASSES & LEARNING
              </h2>
              <span className="hidden sm:inline-block h-0.5 w-8 sm:w-16 bg-orange-500 rounded-full shrink-0" />
            </div>
            <p className="text-xs sm:text-base font-medium italic text-slate-600">
              Practical Learning. Real World Skills.
            </p>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative group">
            {/* Left Scroll Button - visible on sm+ */}
            <button
              type="button"
              onClick={() => scrollContainer(learningRef, 'left')}
              className="hidden sm:flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200/90 text-slate-700 hover:text-orange-500 hover:border-orange-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Previous learning cards"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Scroll Button - visible on sm+ */}
            <button
              type="button"
              onClick={() => scrollContainer(learningRef, 'right')}
              className="hidden sm:flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200/90 text-slate-700 hover:text-orange-500 hover:border-orange-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Next learning cards"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Horizontal Scroll Cards Track */}
            <div
              ref={learningRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {LEARNING_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-[240px] sm:w-[260px] md:w-[280px] lg:w-[280px] xl:w-[calc(25%-18px)] snap-start group/card"
                >
                  <div className="h-full bg-[#0A2540] rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10.5] w-full overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                    </div>

                    {/* Dark Navy Caption Bar with Centered Text and Thin Orange Decorative Lines */}
                    <div className="py-3 sm:py-3.5 px-3 sm:px-4 bg-[#0A2540] text-center flex items-center justify-center gap-2 border-t border-slate-800">
                      <span className="h-0.5 w-4 sm:w-7 bg-orange-500 rounded-full" />
                      <span className="font-bold text-xs sm:text-sm text-white tracking-wide whitespace-nowrap">
                        {item.title}
                      </span>
                      <span className="h-0.5 w-4 sm:w-7 bg-orange-500 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            3. BENEFITS STRIP
        ========================================================= */}
        <div className="mt-8 pt-6 sm:mt-10 sm:pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
            {/* Item 1 */}
            <div className="flex items-start gap-3.5">
              <span className="text-[#0A2540] shrink-0 mt-0.5">
                <Users className="h-7 w-7 sm:h-8 sm:w-8" />
              </span>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0A2540] leading-snug">
                  Experienced Trainers
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Learn from industry experts
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3.5 sm:border-l sm:border-slate-200 sm:pl-6">
              <span className="text-[#0A2540] shrink-0 mt-0.5">
                <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" />
              </span>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0A2540] leading-snug">
                  Practical Knowledge
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Apply real-world concepts
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3.5 lg:border-l lg:border-slate-200 lg:pl-6">
              <span className="text-[#0A2540] shrink-0 mt-0.5">
                <Briefcase className="h-7 w-7 sm:h-8 sm:w-8" />
              </span>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0A2540] leading-snug">
                  Placement Assistance
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  100% placement support
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-3.5 sm:border-l sm:border-slate-200 sm:pl-6 lg:border-l lg:border-slate-200 lg:pl-6">
              <span className="text-[#0A2540] shrink-0 mt-0.5">
                <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8" />
              </span>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#0A2540] leading-snug">
                  Career Growth
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Build a successful career
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsAndLearning
