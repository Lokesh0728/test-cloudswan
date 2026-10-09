import React from 'react'
import {
  Users2,
  Coffee,
} from 'lucide-react'
import { LIFE_AT_CLOUDSWAN_HIGHLIGHTS } from './careersData'

export const LifeAtCloudswan: React.FC = () => {
  return (
    <section
      id="life-at-cloudswan"
      aria-label="Life at Cloudswan"
      className="relative overflow-hidden bg-slate-50/70 py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-accent-50/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            <span>COMMUNITY & CULTURE</span>
            <span className="text-accent-300">•</span>
            <span className="text-slate-600 font-medium normal-case">Our Way of Working</span>
          </div>

          <h2 className="display-h2 text-slate-900">
            Life at{' '}
            <span className="relative inline-block text-accent-500">
              Cloudswan
              <span className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-accent-200" />
            </span>
          </h2>

          <p className="lead-paragraph mt-4 text-slate-600 max-w-2xl mx-auto">
            Experience an authentic, vibrant culture where ambition meets empathy, creativity thrives without micromanagement, and your voice actively shapes our collective future.
          </p>
        </div>

        {/* Editorial Split / Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Feature Column: 2 Big Highlight Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="group rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-xs hover:shadow-xl hover:border-accent-300/80 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="eyebrow-badge px-2.5 py-1 rounded-full bg-accent-50 text-accent-600 border border-accent-200/60">
                  Daily Rhythm
                </span>
                <Coffee className="w-5 h-5 text-accent-500" />
              </div>

              <h3 className="display-h3 text-slate-900 group-hover:text-accent-600 transition-colors">
                An Atmosphere of Innovation & Respect
              </h3>

              <p className="body-paragraph text-slate-600 mt-3">
                At Cloudswan, work doesn't mean endless meetings. We prioritize deep work blocks, clear asynchronous communication, and collaborative design sessions where every developer and mentor has a direct say in decisions.
              </p>

              {/* Culture Metric Pills */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50">
                  <div className="font-heading font-extrabold text-sm sm:text-base text-slate-900">1:1</div>
                  <div className="caption-text text-slate-500 text-[10px] mt-0.5">Mentorship</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50">
                  <div className="font-heading font-extrabold text-sm sm:text-base text-accent-600">Friday</div>
                  <div className="caption-text text-slate-500 text-[10px] mt-0.5">Tech Demos</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50">
                  <div className="font-heading font-extrabold text-sm sm:text-base text-slate-900">Zero</div>
                  <div className="caption-text text-slate-500 text-[10px] mt-0.5">Micromanagement</div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-7 sm:p-9 shadow-lg border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-accent-400 font-heading text-xs font-bold uppercase tracking-wider">
                  <Users2 className="w-4 h-4" />
                  <span>Team Perspective</span>
                </div>

                <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed italic">
                  “The best part about working at Cloudswan is the sheer freedom to build, teach, and experiment. If you have an idea for an engineering improvement or an interactive lab for students, leadership backs you 100%.”
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-heading font-bold text-white">Lead Systems Architect</div>
                    <div className="text-slate-400">Cloudswan Technology Guild • Coimbatore</div>
                  </div>
                  <span className="eyebrow-badge text-accent-400">Verified Employee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Editorial Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {LIFE_AT_CLOUDSWAN_HIGHLIGHTS.map((item) => (
              <div
                key={item.id}
                className="group p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-accent-300 shadow-2xs hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="caption-text font-bold text-accent-600">
                    {item.category}
                  </span>
                  <span className="eyebrow-badge text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {item.tag}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-accent-600 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
