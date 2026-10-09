import React from 'react'
import {
  Users,
  Award,
  Briefcase,
  BookOpen,
} from 'lucide-react'
import { AnimatedCounter } from '../hero/AnimatedCounter'

interface StatItem {
  id: string
  label: string
  sublabel: string
  value: number
  suffix: string
  decimals?: number
  icon: React.ComponentType<{ className?: string }>
}

const STATS_DATA: StatItem[] = [
  {
    id: 'students-trained',
    label: 'Students Trained',
    sublabel: 'Classroom & Online Mentorship',
    value: 10000,
    suffix: '+',
    icon: Users,
  },
  {
    id: 'placement-support',
    label: 'Placement Support',
    sublabel: 'Interview Guidance & Referrals',
    value: 100,
    suffix: '%',
    icon: Award,
  },
  {
    id: 'industry-projects',
    label: 'Industry Projects',
    sublabel: 'Hands-on Real-Time Scope',
    value: 350,
    suffix: '+',
    icon: Briefcase,
  },
  {
    id: 'courses-offered',
    label: 'Courses Offered',
    sublabel: 'Software, Cloud & Tech Tracks',
    value: 50,
    suffix: '+',
    icon: BookOpen,
  },
]

export const Achievements: React.FC = () => {
  return (
    <section
      id="numbers-achievements"
      aria-label="Numbers and Achievements"
      className="py-16 sm:py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-accent-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            <span>MEASURABLE IMPACT</span>
          </div>
          <h2 className="display-h2 text-slate-900">
            Our Achievements in Numbers
          </h2>
          <p className="lead-paragraph text-slate-600">
            Proven track record of empowering aspiring tech talent across Coimbatore and beyond.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.id}
                className="group relative bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-slate-200/60 hover:border-accent-300 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Subtle top accent corner glow */}
                <div className="w-12 h-12 rounded-2xl bg-accent-50 border border-accent-100 text-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Number Counter */}
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                    className="text-slate-900 group-hover:text-accent-600 transition-colors"
                  />
                </div>

                {/* Primary Label */}
                <h3 className="display-card-title text-slate-900 mt-2">
                  {stat.label}
                </h3>

                {/* Subtitle description */}
                <p className="body-subtext text-slate-500 mt-1">
                  {stat.sublabel}
                </p>

                {/* Micro accent bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
