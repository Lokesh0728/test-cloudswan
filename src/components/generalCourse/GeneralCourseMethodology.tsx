import React from 'react'
import {
  Users,
  Compass,
  Award,
  Calendar,
  Sparkles,
  MapPin,
  Phone,
} from 'lucide-react'
import type { GeneralCourseData } from '../../types/generalCourse'
import { CONTACT_INFO } from '../../data/navigationData'

interface GeneralCourseMethodologyProps {
  course: GeneralCourseData
  onOpenEnquiry: (subject?: string) => void
}

export const GeneralCourseMethodology: React.FC<GeneralCourseMethodologyProps> = ({
  course,
  onOpenEnquiry,
}) => {
  const pillars = [
    {
      icon: Users,
      title: '1:1 Personal Coaching & Daily Feedback',
      description:
        'Small batches capped at 10-12 students guarantee you receive personal attention from day one, with individual diagnostic assessments and weekly progress reviews.',
    },
    {
      icon: Compass,
      title: '100% Practical Drills & Experiential Learning',
      description:
        'Zero boring theory lectures. Every class is an active workshop filled with real-world case simulations, speaking drills, role-plays, and hands-on exercises.',
    },
    {
      icon: Calendar,
      title: 'Flexible Weekday & Weekend Schedules',
      description:
        'Specially structured for college students and working professionals with early morning, evening, and dedicated weekend Saturday-Sunday batches.',
    },
    {
      icon: Award,
      title: 'Official Certification & Placement Support',
      description:
        'Receive an ISO 9001:2015 recognized course completion certificate, resume enhancement guidance, and direct interview scheduling with hiring partners.',
    },
  ]

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow-badge text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-200/60 inline-block">
            The CloudSwan Advantage
          </span>
          <h2 className="display-h2 text-slate-900 mt-2">
            Why Learn {course.shortTitle} at CloudSwan?
          </h2>
          <p className="body-paragraph text-slate-600 mt-2">
            Our student-first training pedagogy is built on over a decade of corporate training excellence in Coimbatore, empowering more than 10,000+ candidates.
          </p>
        </div>

        {/* 4 Core Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-accent-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="body-subtext text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Coimbatore Campus Banner & Infrastructure */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Campus Info */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="eyebrow-badge px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs">
                  Dual Campus Locations
                </span>
                <span className="caption-text text-slate-500">Coimbatore IT Hub & City Center</span>
              </div>

              <h3 className="display-h3 text-slate-900">
                State-of-the-Art Training Centers in Gandhipuram & Saravanampatti
              </h3>

              <p className="body-paragraph text-slate-600">
                Experience high-speed multimedia laboratories, audio-video presentation studios, and comfortable air-conditioned classrooms situated conveniently near major transit points and the Saravanampatti IT corridor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-2 font-heading font-bold text-sm text-slate-900">
                    <MapPin className="w-4 h-4 text-accent-500" />
                    <span>Gandhipuram Campus</span>
                  </div>
                  <p className="caption-text text-slate-500 mt-1">
                    Central bus stand proximity, Cross Cut Road, Coimbatore
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.coimbatorePhone}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-accent-600 hover:text-accent-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{CONTACT_INFO.coimbatoreDisplayPhone}</span>
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-2 font-heading font-bold text-sm text-slate-900">
                    <MapPin className="w-4 h-4 text-accent-500" />
                    <span>Saravanampatti Campus</span>
                  </div>
                  <p className="caption-text text-slate-500 mt-1">
                    Near CHIL SEZ IT Park, Sathy Road, Saravanampatti, Coimbatore
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.saravanampattiPhone}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-accent-600 hover:text-accent-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{CONTACT_INFO.saravanampattiDisplayPhone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-4 bg-gradient-to-br from-accent-500 to-orange-600 p-6 rounded-2xl text-white space-y-4 text-center lg:text-left shadow-lg shadow-accent-500/20">
              <Sparkles className="w-8 h-8 text-white/90 mx-auto lg:mx-0" />
              <h4 className="font-heading font-bold text-lg text-white">
                Book a Free Campus Walkthrough
              </h4>
              <p className="text-xs text-white/85 leading-relaxed">
                Visit our campus, meet our trainers, review learning materials, and sit in on an active live class before deciding.
              </p>
              <button
                type="button"
                onClick={() => onOpenEnquiry(`${course.shortTitle} - Campus Visit & Demo`)}
                className="w-full py-3 px-4 text-xs font-bold font-heading text-accent-700 bg-white hover:bg-slate-50 rounded-xl shadow-sm transition-all"
              >
                Schedule Free Campus Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
