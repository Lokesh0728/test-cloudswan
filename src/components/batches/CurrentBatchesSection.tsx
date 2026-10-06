import React, { useState } from 'react'
import {
  MapPin,
  Clock,
  Laptop,
  ArrowRight,
  Sparkles,
  CalendarDays,
  ChevronRight,
} from 'lucide-react'
import { CURRENT_BATCHES_DATA } from './batchData'

interface CurrentBatchesSectionProps {
  onOpenEnquiry: (subject?: string) => void
}

type BranchFilter = 'All' | 'Saravanampatti' | 'Gandhipuram'

export const CurrentBatchesSection: React.FC<CurrentBatchesSectionProps> = ({
  onOpenEnquiry,
}) => {
  const [selectedBranch, setSelectedBranch] =
    useState<BranchFilter>('All')

  const branches: BranchFilter[] = [
    'All',
    'Saravanampatti',
    'Gandhipuram',
  ]

  return (
    <section
      id="current-batches"
      className="relative overflow-hidden border-b border-slate-200 bg-[#f8fafc] py-14 sm:py-18 lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-orange-300/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0f172a 1px, transparent 1px),
              linear-gradient(90deg, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: '42px 42px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 flex flex-col gap-7 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">

          {/* Heading */}
          <div className="max-w-3xl animate-[fadeUp_0.6s_ease-out]">

            {/* Admission Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-[11px] font-bold text-orange-700">

              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />

                <span className="relative h-2 w-2 rounded-full bg-orange-500" />
              </span>

              <span>2026 Admissions Open</span>

              <span className="text-orange-400">•</span>

              <span>Limited Seats</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]">
              Choose Your
              <span className="ml-2 text-orange-500">
                Career Path.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Industry-aligned{' '}
              <strong className="font-bold text-slate-800">
                3 Months
              </strong>{' '}
              programs with practical learning, live projects and
              career-focused training.
            </p>

            {/* Features */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold text-slate-500">

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Hands-on learning
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Industry trainers
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Placement support
              </span>

            </div>
          </div>

          {/* =====================================================
              CAMPUS FILTER
          ===================================================== */}

          <div className="shrink-0 animate-[fadeLeft_0.6s_ease-out]">

            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-orange-500" />
              Choose Campus
            </div>

            <div className="flex w-fit max-w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">

              {branches.map((branch) => {
                const isSelected =
                  selectedBranch === branch

                return (
                  <button
                    key={branch}
                    type="button"
                    onClick={() =>
                      setSelectedBranch(branch)
                    }
                    className={`shrink-0 whitespace-nowrap rounded-xl px-4 py-2.5 text-[11px] font-bold transition-all duration-300 ${isSelected
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-slate-500 hover:bg-orange-50 hover:text-orange-600'
                      }`}
                  >
                    {branch === 'All'
                      ? 'All Campuses'
                      : branch}
                  </button>
                )
              })}

            </div>
          </div>
        </div>

        {/* =====================================================
            SECTION DIVIDER
        ===================================================== */}

        <div className="mb-7 flex items-center gap-4">

          <div className="h-px flex-1 bg-slate-200" />

          <div className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-orange-600 shadow-sm">

            <Sparkles className="h-3 w-3 text-orange-500" />

            Current Programs
          </div>

          <div className="h-px flex-1 bg-slate-200" />

        </div>

        {/* =====================================================
            COURSE CARDS
        ===================================================== */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {CURRENT_BATCHES_DATA.map((batch, index) => (
            <ModernCourseCard
              key={batch.id}
              batch={batch}
              index={index}
              selectedBranchFilter={selectedBranch}
              onOpenEnquiry={onOpenEnquiry}
            />
          ))}

        </div>

        {/* =====================================================
            INFORMATION STRIP
        ===================================================== */}

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">

            {/* Duration */}
            <div className="flex items-center gap-3 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Clock className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Duration
                </p>

                <p className="text-sm font-bold text-slate-900">
                  3 Months Fast-Track
                </p>
              </div>

            </div>

            {/* Learning Mode */}
            <div className="flex items-center gap-3 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Laptop className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Learning Mode
                </p>

                <p className="text-sm font-bold text-slate-900">
                  Classroom + Live Online
                </p>
              </div>

            </div>

            {/* Career Counselor */}
            <button
              type="button"
              onClick={() =>
                onOpenEnquiry(
                  'Custom Batch Timings & Personalized Counseling'
                )
              }
              className="group flex items-center justify-between gap-4 p-5 text-left transition duration-300 hover:bg-orange-50"
            >

              <div>

                <p className="text-[9px] font-bold uppercase tracking-wider text-orange-500">
                  Need Help?
                </p>

                <p className="text-sm font-bold text-slate-900">
                  Talk to a Career Counselor
                </p>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  Custom batch & weekend options
                </p>

              </div>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition-all duration-300 group-hover:bg-orange-600 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>

            </button>

          </div>
        </div>

        {/* =====================================================
            LOCATIONS
        ===================================================== */}

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-center text-[10px] font-medium text-slate-400">

          <MapPin className="h-3 w-3 text-orange-500" />

          <span>Gandhipuram</span>

          <span className="text-orange-300">•</span>

          <span>Saravanampatti</span>

          <span className="text-orange-300">•</span>

          <span>Coimbatore</span>

          <ChevronRight className="h-3 w-3 text-orange-400" />

          <span>Live Online available</span>

        </div>

      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(18px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

    </section>
  )
}

/* =========================================================
   COURSE CARD
========================================================= */

interface ModernCourseCardProps {
  batch: any
  index: number
  selectedBranchFilter: BranchFilter
  onOpenEnquiry: (subject?: string) => void
}

const ModernCourseCard: React.FC<ModernCourseCardProps> = ({
  batch,
  index,
  selectedBranchFilter,
  onOpenEnquiry,
}) => {

  const title =
    batch.title ??
    batch.name ??
    batch.courseName ??
    'Training Program'

  const image =
    batch.image ??
    batch.imageUrl ??
    batch.thumbnail ??
    ''

  const campus =
    batch.campus ??
    batch.branch ??
    batch.location ??
    ''

  const batchType =
    batch.batchType ??
    batch.type ??
    'Weekday'

  const startDate =
    batch.startDate ??
    batch.date ??
    'Current'

  const duration =
    batch.duration ??
    '3 Months'

  const seatsLeft =
    batch.seatsLeft ??
    batch.availableSeats ??
    batch.seats ??
    ''

  /* =====================================================
     FILTER
  ===================================================== */

  const normalizedCampus =
    String(campus).toLowerCase()

  const normalizedFilter =
    String(selectedBranchFilter).toLowerCase()

  const matchesFilter =
    selectedBranchFilter === 'All' ||
    normalizedCampus.includes(normalizedFilter)

  if (!matchesFilter) {
    return null
  }

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-slate-200
        bg-white
        shadow-[0_8px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_60px_rgba(15,23,42,0.13)]
      "
      style={{
        animation: `fadeUp 0.55s ease-out ${index * 70}ms both`,
      }}
    >

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="relative aspect-[1.2/1] overflow-hidden bg-slate-100">

        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-800 to-orange-500">
            <Sparkles className="h-10 w-10 text-white/70" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent" />

        {/* Seats */}
        {seatsLeft && (
          <div className="absolute right-3 top-3 rounded-full border border-orange-200 bg-white/95 px-3 py-1.5 text-[9px] font-black text-slate-900 shadow-lg backdrop-blur-sm">
            <span className="text-orange-500">
              {seatsLeft}
            </span>{' '}
            seats left
          </div>
        )}

        {/* Enrollment */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-[9px] font-bold text-white shadow-lg">

          <span className="h-1.5 w-1.5 rounded-full bg-white" />

          Enrolling Now
        </div>

      </div>

      {/* =====================================================
          CARD CONTENT
      ===================================================== */}

      <div className="p-5">

        {/* Label */}
        <div className="mb-2 flex items-center justify-between gap-2">

          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-orange-500">
            Career Program
          </span>

          <span className="text-[9px] font-semibold text-slate-400">
            2026
          </span>

        </div>

        {/* Title */}
        <h3 className="min-h-[52px] text-xl font-black leading-6 tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-orange-500">
          {title}
        </h3>

        {/* =================================================
            DETAILS
        ================================================= */}

        <div className="mt-4 grid grid-cols-2 gap-2">

          {/* Duration */}
          <div className="rounded-xl bg-slate-50 p-3 transition duration-300 group-hover:bg-orange-50">

            <div className="mb-1 flex items-center gap-1.5 text-slate-400">

              <Clock className="h-3 w-3" />

              <span className="text-[9px] font-bold">
                Duration
              </span>

            </div>

            <p className="text-[11px] font-bold text-slate-800">
              {duration}
            </p>

          </div>

          {/* Batch */}
          <div className="rounded-xl bg-slate-50 p-3 transition duration-300 group-hover:bg-orange-50">

            <div className="mb-1 flex items-center gap-1.5 text-slate-400">

              <CalendarDays className="h-3 w-3" />

              <span className="text-[9px] font-bold">
                Batch
              </span>

            </div>

            <p className="truncate text-[11px] font-bold text-slate-800">
              {batchType}
            </p>

          </div>

        </div>

        {/* =================================================
            START DATE
        ================================================= */}

        <div className="mt-4 flex items-center justify-between border-b border-slate-100 pb-3">

          <span className="text-[10px] font-medium text-slate-400">
            Starting
          </span>

          <span className="flex items-center gap-1.5 text-[10px] font-bold text-orange-600">

            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

            {startDate}

          </span>

        </div>

        {/* =================================================
            AVAILABLE LOCATIONS
        ================================================= */}

        <div className="mt-4">

          <div className="mb-2 flex items-center gap-2">

            <MapPin className="h-3.5 w-3.5 text-orange-500" />

            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
              Available Locations
            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            {/* Saravanampatti */}
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-100 bg-orange-50 px-2.5 py-1.5 text-[9px] font-bold text-orange-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />

              Saravanampatti

            </span>

            {/* Gandhipuram */}
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-100 bg-orange-50 px-2.5 py-1.5 text-[9px] font-bold text-orange-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />

              Gandhipuram

            </span>

          </div>

        </div>

        {/* =================================================
            BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => onOpenEnquiry(title)}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            bg-slate-950
            px-4
            py-3
            text-xs
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-orange-500
          "
        >

          <span>
            Explore Program
          </span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:bg-white/20">

            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />

          </span>

        </button>

      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

    </article>
  )
}