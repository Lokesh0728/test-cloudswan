import React from 'react'
import {
  GraduationCap,
  Users,
  Rocket,
  LineChart,
  ArrowUpRight,
  ShieldCheck,
  Coffee,
  HeartHandshake,
  Award,
} from 'lucide-react'
import { WHY_WORK_PILLARS } from './careersData'

const ICON_MAP = {
  GraduationCap,
  Users,
  Rocket,
  LineChart,
}

export const WhyWorkWithUs: React.FC = () => {
  return (
    <section
      id="why-work-with-us"
      aria-label="Why Work With Us"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      {/* Background Soft Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-accent-50/70 blur-3xl" />
        <div className="absolute bottom-10 -left-32 w-96 h-96 rounded-full bg-orange-50/80 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            <span>PERKS & CULTURE</span>
            <span className="text-accent-300">•</span>
            <span className="text-slate-600 font-medium normal-case">Why Join Us</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            Why Work{' '}
            <span className="relative inline-block text-accent-500">
              With Us?
              <span className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-accent-200" />
            </span>
          </h2>

          <p className="lead-paragraph mt-4 text-slate-600 max-w-2xl mx-auto">
            We foster an empowering environment built on innovation, continuous learning, mutual respect, and genuine career acceleration.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_WORK_PILLARS.map((pillar, index) => {
            const IconComponent = ICON_MAP[pillar.iconName as keyof typeof ICON_MAP] || GraduationCap

            return (
              <div
                key={pillar.id}
                className="group relative rounded-3xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-accent-300/80 p-7 sm:p-9 shadow-xs hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Subtle Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Corner Ambient Glow on Hover */}
                <div className="pointer-events-none absolute -right-16 -top-16 w-36 h-36 rounded-full bg-accent-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Row: Icon + Badge + Index */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-accent-50 border border-accent-100 text-accent-500 group-hover:bg-accent-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:shadow-md group-hover:shadow-accent-500/30 group-hover:scale-105">
                        <IconComponent className="w-6 h-6 transition-transform duration-300" />
                      </div>
                      <span className="eyebrow-badge px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px]">
                        {pillar.badge}
                      </span>
                    </div>

                    <span className="font-heading text-xs font-bold tracking-widest text-slate-300 group-hover:text-accent-500 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="display-card-title text-slate-900 group-hover:text-accent-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="caption-text text-accent-600 font-semibold mt-1">
                    {pillar.subtitle}
                  </div>

                  {/* Description */}
                  <p className="body-paragraph text-slate-600 mt-3.5">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Value Indicator */}
                <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="font-heading font-semibold text-slate-500">
                    Cloudswan Standard
                  </span>
                  <div className="flex items-center gap-1 text-accent-600 font-heading font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Perks Quick Badges Bar */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-accent-50/70 via-slate-50 to-white border border-accent-100">
          <div className="flex flex-wrap items-center justify-around gap-4 text-xs font-heading font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent-500" />
              <span>Comprehensive Health Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent-500" />
              <span>Bi-Annual Performance Bonuses</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-accent-500" />
              <span>Flexible Work & Generous Paid Time Off</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-accent-500" />
              <span>High-Trust Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
