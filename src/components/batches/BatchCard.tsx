import React, { useState } from 'react'
import {
  ArrowRight,
  Clock3,
  MapPin,
  CalendarDays,
  Laptop,
} from 'lucide-react'
   
import type {
  BatchItem,
  BranchLocation,
} from './types'

interface BatchCardProps {
  batch: BatchItem
  onOpenEnquiry: (subject?: string) => void
  selectedBranchFilter?: BranchLocation | 'All'
}

export const BatchCard: React.FC<
  BatchCardProps
> = ({
  batch,
  onOpenEnquiry,
  selectedBranchFilter = 'All',
}) => {
    /* =====================================================
       SELECTED BRANCH
    ===================================================== */

    const [selectedBranch, setSelectedBranch] =
      useState<BranchLocation>(
        selectedBranchFilter !== 'All'
          ? selectedBranchFilter
          : 'Saravanampatti'
      )

    /* =====================================================
       CURRENT TIME SLOT
       
       IMPORTANT:
       No dropdown.
       We simply show the first available slot.
    ===================================================== */

    const currentSlot =
      batch.slots?.[0]

    /* =====================================================
       FILTER CHECK
    ===================================================== */

    /*
     * When a campus filter is selected from the
     * Current Batches section, only show matching cards.
     *
     * If your batchData does not contain a branch/campus
     * property, all cards will remain visible.
     */

    const batchBranch =
      (batch as any).branch ??
      (batch as any).campus ??
      (batch as any).location ??
      ''

    const normalizedBatchBranch =
      String(batchBranch).toLowerCase()

    const normalizedSelectedBranch =
      String(
        selectedBranchFilter
      ).toLowerCase()

    const matchesBranch =
      selectedBranchFilter === 'All' ||
      normalizedBatchBranch === '' ||
      normalizedBatchBranch.includes(
        normalizedSelectedBranch
      )

    if (!matchesBranch) {
      return null
    }

    /* =====================================================
       ENQUIRE
    ===================================================== */

    const handleEnquire = () => {
      const time =
        currentSlot?.timeRange ??
        'Timing to be confirmed'

      const subject = `Enquiry: ${batch.title} - ${selectedBranch} Campus (${time}, ${batch.duration})`

      onOpenEnquiry(subject)
    }

    /* =====================================================
       BATCH TYPE
    ===================================================== */

    const batchType =
      currentSlot?.days?.includes(
        'Saturday'
      )
        ? 'Weekend'
        : 'Weekday'

    /* =====================================================
       TIME
    ===================================================== */

    const timeRange =
      currentSlot?.timeRange ??
      'Timing to be confirmed'

    /* =====================================================
       SEATS
    ===================================================== */

    const seatsLeft =
      currentSlot?.seatsLeft ?? 0

    return (
      <article
        className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-[0_8px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-slate-300
        hover:shadow-[0_25px_65px_rgba(15,23,42,0.13)]
      "
      >
        {/* =================================================
          IMAGE AREA
      ================================================= */}

        <div
          className="
          relative
          h-[220px]
          overflow-hidden
          bg-slate-900
          sm:h-[210px]
        "
        >
          <img
            src={batch.image}
            alt={batch.title}
            loading="lazy"
            className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
          />

          {/* Image gradient */}

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/85
            via-slate-950/15
            to-transparent
          "
          />

          {/* =================================================
            TOP LEFT PROGRAM LABEL
        ================================================= */}

          <div className="absolute left-4 top-4 flex items-center rounded-full border border-white/20 bg-slate-950/55 px-3.5 py-1.5 eyebrow-badge text-white backdrop-blur-md">
            <span>Career Program</span>
          </div>

          {/* =================================================
            SEATS
        ================================================= */}
          <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 eyebrow-badge text-slate-900 shadow-lg backdrop-blur-md">
            <span className="text-orange-500">
              {seatsLeft}
            </span>{' '}
            seats left
          </div>

          {/* =================================================
            COURSE NAME ON IMAGE
        ================================================= */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="display-card-title text-white drop-shadow-lg">
              {batch.title}
            </h3>
          </div>
        </div>

        {/* =================================================
          CONTENT
      ================================================= */}

        <div
          className="
          flex
          flex-1
          flex-col
          p-5
          sm:p-6
        "
        >
          {/* =================================================
            STATUS
        ================================================= */}

          <div className="mb-5 flex items-center justify-between">
            <span
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-emerald-50
              px-3
              py-1.5
              eyebrow-badge
              text-emerald-700
            "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>Enrolling Now</span>
            </span>

            <span className="caption-text font-semibold text-slate-400">
              2026
            </span>
          </div>

          {/* =================================================
            QUICK INFO GRID
        ================================================= */}

          <div
            className="
            grid
            grid-cols-2
            gap-2
          "
          >
            {/* Batch Type */}

            <InfoBox
              icon={
                <CalendarDays className="h-3.5 w-3.5" />
              }
              label="Batch"
              value={batchType}
            />

            {/* Duration */}

            <InfoBox
              icon={
                <Clock3 className="h-3.5 w-3.5" />
              }
              label="Duration"
              value={batch.duration}
            />

            {/* Time */}

            <InfoBox
              icon={
                <Clock3 className="h-3.5 w-3.5" />
              }
              label="Class Time"
              value={timeRange}
              highlight
            />

            {/* Mode */}

            <InfoBox
              icon={
                <Laptop className="h-3.5 w-3.5" />
              }
              label="Mode"
              value={batch.modeDisplay}
            />
          </div>

          {/* =================================================
            START DATE
        ================================================= */}

          <div
            className="
            mt-4
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-4
          "
          >
            <div
              className="
              flex
              items-center
              gap-2
            "
            >
              <div
                className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                bg-emerald-50
                text-emerald-600
              "
              >
                <CalendarDays className="h-3.5 w-3.5" />
              </div>

              <span
                className="
                text-[10px]
                font-medium
                text-slate-400
              "
              >
                Start Date
              </span>
            </div>

            <span
              className="
              flex
              items-center
              gap-1.5
              text-[10px]
              font-bold
              text-emerald-600
            "
            >
              <span
                className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-500
              "
              />

              {batch.startDate}
            </span>
          </div>

          {/* =================================================
    LOCATION
================================================= */}

          <div className="mt-3 rounded-xl bg-slate-50 p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-orange-500" />

                <span className="text-[10px] font-semibold text-slate-500">
                  Locations
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[9px] font-bold">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedBranch('Saravanampatti')
                  }
                  className={`
          rounded-lg
          px-2
          py-1
          transition-all
          duration-200
          ${selectedBranch === 'Saravanampatti'
                      ? 'bg-orange-100 text-orange-700'
                      : 'text-slate-500 hover:bg-white hover:text-slate-900'
                    }
        `}
                >
                  Saravanampatti
                </button>

                <span className="text-slate-300">|</span>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedBranch('Gandhipuram')
                  }
                  className={`
          rounded-lg
          px-2
          py-1
          transition-all
          duration-200
          ${selectedBranch === 'Gandhipuram'
                      ? 'bg-orange-100 text-orange-700'
                      : 'text-slate-500 hover:bg-white hover:text-slate-900'
                    }
        `}
                >
                  Gandhipuram
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
            SPACER
        ================================================= */}

          <div className="flex-1" />

          {/* =================================================
            ENQUIRE BUTTON
        ================================================= */}

          <button
            type="button"
            onClick={handleEnquire}
            className="
            group/button
            mt-5
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            bg-slate-950
            px-4
            py-3.5
            text-xs sm:text-sm
            font-bold
            text-white
            font-heading
            tracking-wide
            transition-all
            duration-300
            hover:bg-orange-500
            active:scale-[0.98]
          "
          >
            <span>
              Enquire Now
            </span>

            <span
              className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition-all
              duration-300
              group-hover/button:bg-white/20
            "
            >
              <ArrowRight
                className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover/button:translate-x-1
              "
              />
            </span>
          </button>
        </div>

        {/* =================================================
          BOTTOM ACCENT
      ================================================= */}

        <div
          className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-gradient-to-r
          from-orange-500
          via-orange-400
          to-amber-300
          transition-all
          duration-500
          group-hover:w-full
        "
        />
      </article>
    )
  }

/* =========================================================
   INFO BOX
========================================================= */

interface InfoBoxProps {
  icon: React.ReactNode
  label: string
  value: string
  highlight?: boolean
}

const InfoBox: React.FC<InfoBoxProps> = ({
  icon,
  label,
  value,
  highlight = false,
}) => {
  return (
    <div
      className={`
        rounded-xl
        border
        p-3
        transition-all
        duration-300
        ${highlight
          ? 'border-orange-100 bg-orange-50/70'
          : 'border-slate-100 bg-slate-50'
        }
      `}
    >
      <div
        className="
          mb-1.5
          flex
          items-center
          gap-1.5
        "
      >
        <span
          className={
            highlight
              ? 'text-orange-500'
              : 'text-slate-400'
          }
        >
          {icon}
        </span>

        <span className="caption-text font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
      </div>

      <p
        className={`truncate text-xs font-bold font-heading ${
          highlight ? 'text-orange-700' : 'text-slate-800'
        }`}
        title={value}
      >
        {value}
      </p>
    </div>
  )
}