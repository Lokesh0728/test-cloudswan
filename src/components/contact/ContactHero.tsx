import React from 'react'
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  ArrowRight,
  Building2,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react'
import { CONTACT_METRICS } from './contactData'

interface ContactHeroProps {
  onNavigateHome?: () => void
  onExploreCourses?: () => void
  onScrollToForm: () => void
  onScrollToMaps: () => void
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  onNavigateHome,
  onScrollToForm,
  onScrollToMaps,
}) => {
  return (
    <section
      id="contact-hero"
      aria-label="Contact CloudSwan Solution Coimbatore"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-100/80 border-b border-slate-200/80 pt-8 pb-14 sm:pb-20 lg:pt-12 lg:pb-24"
    >
      {/* Background Ambient Glows & Subtle Grid matching Site Design */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-tr from-accent-500/10 via-orange-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-36 -left-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0f172a 1px, transparent 1px),
              linear-gradient(90deg, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-heading font-medium text-slate-500">
            <li>
              <button
                type="button"
                onClick={onNavigateHome}
                className="hover:text-accent-600 transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li aria-hidden="true" className="text-slate-300">/</li>
            <li className="text-accent-600 font-bold" aria-current="page">
              Contact & Campus Locations
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Eyebrow, Main Headline, Description, Quick Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Label with Pulsing Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-200/90 text-accent-700 eyebrow-badge shadow-xs">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span>GET IN TOUCH</span>
              <span className="text-accent-300">•</span>
              <span className="text-slate-600 font-medium normal-case">
                Gandhipuram & Saravanampatti Campuses
              </span>
            </div>

            {/* Main Heading with Stylized SVG Underline */}
            <div className="space-y-2">
              <h1 className="display-h1 text-slate-900">
                Connect with Our Mentors in{' '}
                <span className="relative inline-block text-accent-500 whitespace-nowrap">
                  Coimbatore
                  {/* Stylized Curved Hand-drawn Underline Accent matching Home Page */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-accent-500 fill-none overflow-visible"
                    viewBox="0 0 250 18"
                    height="14"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 3,13 C 65,4 185,2 247,11 C 190,17 70,16 10,14"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Lead Description */}
            <p className="lead-paragraph text-slate-600 max-w-2xl">
              Visit our high-tech computer labs, explore syllabus modules, or schedule a free 1-on-1 career consultation with our senior industry mentors at our two prime locations in Coimbatore.
            </p>

            {/* Two Branch Badges / Quick Highlights - Equal presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Branch 1: Gandhipuram */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-orange-300 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-accent-500 flex items-center justify-center shrink-0 border border-orange-100/80">
                  <Building2 className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-heading text-xs sm:text-sm font-bold text-slate-900">
                      Gandhipuram Campus
                    </h3>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-50 text-accent-700 font-heading border border-orange-200/60">
                      Ramnagar
                    </span>
                  </div>
                  <p className="caption-text text-slate-500 mt-0.5 text-[11px]">
                    234, Vivekananda Rd, Ramnagar
                  </p>
                  <a
                    href="tel:+918903835098"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-accent-600 hover:text-accent-700 font-heading mt-1"
                  >
                    <PhoneCall className="w-3 h-3 text-accent-500" />
                    <span>+91 89038 35098</span>
                  </a>
                </div>
              </div>

              {/* Branch 2: Saravanampatti */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-orange-300 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-accent-500 flex items-center justify-center shrink-0 border border-orange-100/80">
                  <Building2 className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-heading text-xs sm:text-sm font-bold text-slate-900">
                      Saravanampatti Campus
                    </h3>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-50 text-accent-700 font-heading border border-orange-200/60">
                      Main Bus Stop
                    </span>
                  </div>
                  <p className="caption-text text-slate-500 mt-0.5 text-[11px]">
                    134/ 2C, Sathy Rd, Main Bus Stop, above Green Leaf Hotel
                  </p>
                  <a
                    href="tel:+917708262565"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-accent-600 hover:text-accent-700 font-heading mt-1"
                  >
                    <PhoneCall className="w-3 h-3 text-accent-500" />
                    <span>+91 7708 262 565</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onScrollToForm}
                className="group px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold font-heading tracking-wide text-white bg-accent-500 hover:bg-accent-600 active:scale-[0.98] rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-accent-500/35 transition-all duration-200 flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Course Enquiry</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onScrollToMaps}
                className="px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold font-heading tracking-wide text-slate-700 bg-white hover:bg-slate-50 hover:text-accent-600 border border-slate-200/90 rounded-xl shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-accent-500" />
                <span>View Google Maps (2 Branches)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Operating Hours & Contact Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Soft decorative blur */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-orange-100/70 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-12 h-64 w-64 rounded-full bg-orange-50/50 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-6 sm:p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                {/* Header */}
                <div className="flex items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <span className="eyebrow-badge text-[10px] text-accent-600">
                      Admissions Desk
                    </span>
                    <h2 className="display-card-title text-slate-900 mt-1">
                      Academic Advising Hours
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-accent-500 border border-orange-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-500" />
                  </div>
                </div>

                {/* Operating Hours Details */}
                <div className="py-4 space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                    <span className="font-semibold text-slate-700">Monday – Saturday</span>
                    <span className="font-bold text-accent-600 font-heading text-right">
                      9:30 AM – 6:30 PM
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                    <span className="font-semibold text-slate-700">Sunday Walk-ins</span>
                    <span className="font-bold text-slate-600 font-heading text-right">
                      10:00 AM – 4:00 PM <br />
                      <span className="text-[10px] font-normal text-slate-400">By Appointment</span>
                    </span>
                  </div>
                </div>

                {/* Quick Contact Points for Both Branches */}
                <div className="pt-3 border-t border-slate-100 space-y-2.5">
                  {/* Gandhipuram Contact */}
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                    <div className="w-7 h-7 rounded-lg bg-orange-50 text-accent-500 border border-orange-100/80 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-3.5 h-3.5 text-accent-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block caption-text text-slate-400">Gandhipuram (Ramnagar)</span>
                      <a href="tel:+918903835098" className="font-bold text-slate-800 hover:text-accent-600 font-heading">
                        +91 89038 35098
                      </a>
                    </div>
                  </div>

                  {/* Saravanampatti Contact */}
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                    <div className="w-7 h-7 rounded-lg bg-orange-50 text-accent-500 border border-orange-100/80 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-3.5 h-3.5 text-accent-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block caption-text text-slate-400">Saravanampatti (Main Bus Stop)</span>
                      <a href="tel:+917708262565" className="font-bold text-slate-800 hover:text-accent-600 font-heading">
                        +91 7708 262 565
                      </a>
                    </div>
                  </div>

                  {/* Email Support */}
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                    <div className="w-7 h-7 rounded-lg bg-orange-50 text-accent-500 border border-orange-100/80 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5 text-accent-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block caption-text text-slate-400">Official Inquiries Email</span>
                      <a href="mailto:cloudswansolution@gmail.com" className="font-bold text-slate-800 hover:text-accent-600 font-heading truncate block">
                        cloudswansolution@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response SLA Guarantee Badge (Clean Orange Accent, No Green) */}
                <div className="mt-5 p-3 rounded-xl bg-orange-50/70 border border-orange-200/80 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-accent-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-[11px] font-semibold text-slate-800 leading-snug">
                    <strong className="font-bold text-accent-700">Fast Callback Guarantee:</strong> An academic counselor will contact you within 15 minutes during operating hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Key Metric Stats Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {CONTACT_METRICS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-orange-200 transition-all text-center sm:text-left"
            >
              <div className="flex items-center justify-center sm:justify-start mb-1">
                <span className="caption-text font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                  {stat.label}
                </span>
              </div>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <p className="caption-text text-slate-500 mt-1 text-[11px]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
