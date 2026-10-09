import React, { useState, useRef, useEffect } from 'react'
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from 'lucide-react'

interface ReviewItem {
  id: string
  name: string
  timeAgo: string
  text: string
  isFeatured?: boolean
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Trader',
    timeAgo: '4 months ago',
    text: 'I recently completed the Digital Marketing course at Cloudswan Solution, and it was a great learning experience. The course was well-structured, covering important topics like SEO, Social Media Marketing, Google Ads, Content Marketing, and Analytics in a practical way. The trainers were knowledgeable, supportive, and explained concepts clearly with real-time examples, making it easy to understand even for beginners. The hands-on projects and practical sessions helped me gain confidence and improve my skills.',
    isFeatured: true,
  },
  {
    id: 'rev-2',
    name: 'Guru Vishnu',
    timeAgo: '4 months ago',
    text: 'Recently I have joined AWS Intership Training. The Training was good and I have experienced the value of course and the trainer was good and guided me a lot.',
  },
  {
    id: 'rev-3',
    name: 'Mary Fathima',
    timeAgo: '4 months ago',
    text: 'We have done our internship here. The class was good and understandable. Thank you for Cloud Swan Solution.',
  },
  {
    id: 'rev-4',
    name: 'Gayathri A',
    timeAgo: '5 months ago',
    text: 'They provide start to end support with the placement process. I got a great offer with very good package.',
  },
  {
    id: 'rev-5',
    name: 'Rbk Bkt',
    timeAgo: '5 months ago',
    text: 'I learned many software testing concepts from Cloud Swan Solution. The teaching was easy to understand and useful for interview preparation.',
  },
  {
    id: 'rev-6',
    name: 'SAIARVIND M',
    timeAgo: '6 months ago',
    text: 'I have studied devops course here and trainer is very supportive and great place to learn.',
  },
  {
    id: 'rev-7',
    name: 'Mugundhan C',
    timeAgo: '6 months ago',
    text: 'I had a great experience with this IT institute. The training was practical and up-to-date, and the trainers were very supportive. They also provided excellent placement assistance, which helped me get placed in a good company. Highly recommended for anyone looking to build a career in IT!',
  },
  {
    id: 'rev-8',
    name: 'Dhanabal RSD',
    timeAgo: '6 months ago',
    text: "Hi I'm Dhanabal three months before am jobless and i had a career gap then I saw cloudswan solution in social media platform then I joined and learned and staffs also taught me well and support for a placement now I'm placed in good company thankyou cloudswan.",
  },
  {
    id: 'rev-9',
    name: 'Sathish Kumar',
    timeAgo: '6 months ago',
    text: 'Hi all. I am previously worked at banking industry. But I am interested to work software field. That time I know about cloudswan solution. And I visited cloudswan solution they told about the software testing job details and gave training also. Now I placed as a software test engineer at MNC company with 5L package. Thank you for cloudswan solution.',
  },
]

export const StudentReviews: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({})
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateScrollState = () => {
    const el = scrollContainerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)

    const cardWidth = 360
    const newIdx = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(Math.min(newIdx, REVIEWS.length - 1))
  }

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [])

  const scrollByDirection = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.85
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section
      id="student-reviews"
      aria-label="Student Reviews and Testimonials"
      className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-accent-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              <span>VERIFIED LEARNER FEEDBACK</span>
            </div>
            <h2 className="display-h2 text-slate-900">
              What Our Students Say
            </h2>
            <p className="lead-paragraph text-slate-600">
              Real experiences from learners who trained with Cloudswan Solution.
            </p>
          </div>

          {/* Carousel Next/Prev Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-500 inline-block" />
              <span className="text-xs font-bold text-slate-700">4.9 / 5.0 Google Rating</span>
            </div>
            <button
              type="button"
              onClick={() => scrollByDirection('left')}
              disabled={!canScrollLeft}
              aria-label="Previous reviews"
              className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollLeft
                  ? 'bg-white border-slate-300 text-slate-800 hover:border-accent-500 hover:text-accent-500 shadow-xs hover:-translate-y-0.5'
                  : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection('right')}
              disabled={!canScrollRight}
              aria-label="Next reviews"
              className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollRight
                  ? 'bg-white border-slate-300 text-slate-800 hover:border-accent-500 hover:text-accent-500 shadow-xs hover:-translate-y-0.5'
                  : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel / Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REVIEWS.map((review) => {
            const isExpanded = !!expandedReviews[review.id]
            const isLong = review.text.length > 180

            return (
              <div
                key={review.id}
                className={`snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[390px] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative group ${
                  review.isFeatured
                    ? 'bg-white border-2 border-accent-400 shadow-xl shadow-accent-500/10 ring-2 ring-accent-500/15'
                    : 'bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-accent-300'
                }`}
              >
                {/* Featured Badge */}
                {review.isFeatured && (
                  <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-accent-500 text-white text-[10px] font-bold tracking-wide uppercase shadow-xs">
                    Featured Review
                  </div>
                )}

                {/* Top: Stars & Google Label */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {/* 5 Orange Stars */}
                    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent-500 text-accent-500"
                        />
                      ))}
                    </div>

                    {/* Google Label */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-semibold text-slate-700">
                      <span className="font-bold text-accent-600">G</span>
                      <span>Google</span>
                    </div>
                  </div>

                  {/* Quote icon watermark */}
                  <Quote className="w-6 h-6 text-accent-200 mb-2 rotate-180" />

                  {/* Review Text */}
                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                    {isLong && !isExpanded
                      ? `${review.text.slice(0, 180)}...`
                      : review.text}
                  </p>

                  {/* Read more toggle */}
                  {isLong && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(review.id)}
                      className="mt-2 text-xs font-bold text-accent-600 hover:text-accent-700 hover:underline cursor-pointer inline-flex items-center gap-1"
                    >
                      {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>

                {/* Bottom: Reviewer details */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Neutral Avatar with initial */}
                    <div className="w-10 h-10 rounded-full bg-accent-50 border border-accent-200 text-accent-600 font-heading font-bold flex items-center justify-center text-sm shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading text-sm font-bold text-slate-900 leading-tight">
                        {review.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {review.timeAgo}
                      </div>
                    </div>
                  </div>

                  <span className="eyebrow-badge text-[10px] text-slate-400 normal-case font-semibold">Verified</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {REVIEWS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              aria-label={`Go to slide ${dotIdx + 1}`}
              onClick={() => {
                const el = scrollContainerRef.current
                if (!el) return
                const cardWidth = 360
                el.scrollTo({ left: dotIdx * cardWidth, behavior: 'smooth' })
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === dotIdx
                  ? 'w-7 bg-accent-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
