import React, { useState, useRef, useEffect } from 'react'
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  LayoutGrid,
  List,
  Code2,
  Languages,
  BadgeCheck,
  BookOpen,
  Flame,
  CheckCircle2,
  Clock,
  Filter,
} from 'lucide-react'
import {
  CATALOG_CATEGORIES,
  LEVEL_OPTIONS,
  MODE_OPTIONS,
  DURATION_OPTIONS,
  SORT_OPTIONS,
} from '../../data/coursesCatalogData'

export interface CourseFilterState {
  searchQuery: string
  categoryId: string
  levelId: string
  modeId: string
  durationId: string
  sortBy: string
  onlyTrending: boolean
  onlyPlacement: boolean
  onlyCertification: boolean
  onlyShortTrack: boolean
}

interface CourseFiltersProps {
  filterState: CourseFilterState
  setFilterState: React.Dispatch<React.SetStateAction<CourseFilterState>>
  viewMode: 'grid' | 'list'
  setViewMode: (mode: 'grid' | 'list') => void
  totalCount: number
  filteredCount: number
  onResetFilters: () => void
}

const CATEGORY_ICON_MAP = {
  LayoutGrid,
  Code2,
  Languages,
  BadgeCheck,
  BookOpen,
}

const POPULAR_SEARCH_SUGGESTIONS = [
  'Python',
  'Full Stack',
  'AI & ML',
  'AWS Cloud',
  'IELTS',
  'DevOps',
  'Power BI',
]

export const CourseFilters: React.FC<CourseFiltersProps> = ({
  filterState,
  setFilterState,
  viewMode,
  setViewMode,
  totalCount,
  filteredCount,
  onResetFilters,
}) => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Keyboard shortcut: press '/' to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Calculate active extra filter count
  const activeFilters = [
    filterState.categoryId !== 'all' && {
      key: 'category',
      label: CATALOG_CATEGORIES.find((c) => c.id === filterState.categoryId)?.label || 'Category',
      clear: () => setFilterState((prev) => ({ ...prev, categoryId: 'all' })),
    },
    Boolean(filterState.searchQuery.trim()) && {
      key: 'search',
      label: `"${filterState.searchQuery}"`,
      clear: () => setFilterState((prev) => ({ ...prev, searchQuery: '' })),
    },
    filterState.levelId !== 'all' && {
      key: 'level',
      label: LEVEL_OPTIONS.find((l) => l.id === filterState.levelId)?.label || 'Level',
      clear: () => setFilterState((prev) => ({ ...prev, levelId: 'all' })),
    },
    filterState.modeId !== 'all' && {
      key: 'mode',
      label: MODE_OPTIONS.find((m) => m.id === filterState.modeId)?.label || 'Mode',
      clear: () => setFilterState((prev) => ({ ...prev, modeId: 'all' })),
    },
    filterState.durationId !== 'all' && {
      key: 'duration',
      label: DURATION_OPTIONS.find((d) => d.id === filterState.durationId)?.label || 'Duration',
      clear: () => setFilterState((prev) => ({ ...prev, durationId: 'all' })),
    },
    filterState.onlyTrending && {
      key: 'trending',
      label: 'Hot & Trending',
      clear: () => setFilterState((prev) => ({ ...prev, onlyTrending: false })),
    },
    filterState.onlyPlacement && {
      key: 'placement',
      label: '100% Placement',
      clear: () => setFilterState((prev) => ({ ...prev, onlyPlacement: false })),
    },
    filterState.onlyCertification && {
      key: 'cert',
      label: 'Global Certifications',
      clear: () => setFilterState((prev) => ({ ...prev, onlyCertification: false })),
    },
    filterState.onlyShortTrack && {
      key: 'fastTrack',
      label: 'Fast-Track (< 2 Mos)',
      clear: () => setFilterState((prev) => ({ ...prev, onlyShortTrack: false })),
    },
  ].filter(Boolean) as { key: string; label: string; clear: () => void }[]

  return (
    <div className="space-y-4">
      {/* ========================================================
          1. CATEGORY PILL TABS WITH LIVE BADGES
         ======================================================== */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar select-none">
        {CATALOG_CATEGORIES.map((cat) => {
          const IconComp = CATEGORY_ICON_MAP[cat.iconName] || LayoutGrid
          const isSelected = filterState.categoryId === cat.id

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() =>
                setFilterState((prev) => ({ ...prev, categoryId: cat.id }))
              }
              className={`shrink-0 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl font-heading text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 shadow-2xs group cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md shadow-slate-900/20 scale-[1.02] border border-slate-700'
                  : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                  isSelected
                    ? 'bg-accent-500 text-white'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-orange-50 group-hover:text-accent-600'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
              </div>
              <span>{cat.label}</span>
              {cat.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold transition-colors ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/70 group-hover:text-slate-700'
                  }`}
                >
                  {cat.badge}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* ========================================================
          2. SEARCH & CONTROLS TOOLBAR
         ======================================================== */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-3 sm:p-4 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Live Search Input with Keyboard Shortcut */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={filterState.searchQuery}
              onChange={(e) =>
                setFilterState((prev) => ({
                  ...prev,
                  searchQuery: e.target.value,
                }))
              }
              placeholder="Search by course, tools (e.g. Python, AWS, IELTS, React, Power BI)..."
              className="w-full pl-10 pr-16 py-2.5 text-xs sm:text-sm bg-slate-50/80 hover:bg-slate-50 focus:bg-white text-slate-800 placeholder-slate-400 rounded-2xl border border-slate-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 focus:outline-none transition-all font-sans"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              {filterState.searchQuery ? (
                <button
                  type="button"
                  onClick={() =>
                    setFilterState((prev) => ({ ...prev, searchQuery: '' }))
                  }
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 rounded-md shadow-2xs">
                  /
                </kbd>
              )}
            </div>
          </div>

          {/* Quick Dropdown Filters (Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Level Selector */}
            <div className="relative">
              <select
                value={filterState.levelId}
                onChange={(e) =>
                  setFilterState((prev) => ({ ...prev, levelId: e.target.value }))
                }
                aria-label="Filter by level"
                className="px-3 py-2 text-xs font-semibold font-heading bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-white focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 cursor-pointer transition-all"
              >
                {LEVEL_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Selector */}
            <div className="relative">
              <select
                value={filterState.modeId}
                onChange={(e) =>
                  setFilterState((prev) => ({ ...prev, modeId: e.target.value }))
                }
                aria-label="Filter by delivery mode"
                className="px-3 py-2 text-xs font-semibold font-heading bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-white focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 cursor-pointer transition-all"
              >
                {MODE_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Selector */}
            <div className="relative">
              <select
                value={filterState.durationId}
                onChange={(e) =>
                  setFilterState((prev) => ({
                    ...prev,
                    durationId: e.target.value,
                  }))
                }
                aria-label="Filter by duration"
                className="px-3 py-2 text-xs font-semibold font-heading bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-white focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 cursor-pointer transition-all"
              >
                {DURATION_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Selector */}
            <div className="relative">
              <select
                value={filterState.sortBy}
                onChange={(e) =>
                  setFilterState((prev) => ({ ...prev, sortBy: e.target.value }))
                }
                aria-label="Sort courses"
                className="px-3 py-2 text-xs font-semibold font-heading bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-white focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 cursor-pointer transition-all"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Toolbar Actions */}
          <div className="flex items-center justify-between lg:justify-end gap-2">
            {/* Mobile Filter Sheet Trigger Button */}
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold font-heading bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
              {activeFilters.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-accent-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {activeFilters.length}
                </span>
              )}
            </button>

            {/* View Mode Toggle: Grid vs List */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Popular Search Suggestions Bar */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <span className="caption-text text-slate-400 text-[11px] font-medium mr-1">
            Popular:
          </span>
          {POPULAR_SEARCH_SUGGESTIONS.map((sug) => (
            <button
              key={sug}
              type="button"
              onClick={() =>
                setFilterState((prev) => ({
                  ...prev,
                  searchQuery: sug,
                }))
              }
              className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-50 hover:bg-orange-50 hover:text-accent-600 border border-slate-200/60 text-slate-600 font-medium transition-colors cursor-pointer"
            >
              {sug}
            </button>
          ))}
        </div>

        {/* Quick Tag Pills (Trending, Placement, etc.) */}
        <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="caption-text text-slate-400 text-xs mr-1 hidden sm:inline">
              Highlights:
            </span>

            <button
              type="button"
              onClick={() =>
                setFilterState((prev) => ({
                  ...prev,
                  onlyTrending: !prev.onlyTrending,
                }))
              }
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-heading transition-all cursor-pointer border ${
                filterState.onlyTrending
                  ? 'bg-gradient-to-r from-orange-500 to-accent-500 text-white border-transparent shadow-xs font-bold'
                  : 'bg-white text-slate-600 border-slate-200/90 hover:bg-slate-50 hover:text-slate-900 font-medium'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-current" />
              <span>Hot &amp; Trending</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setFilterState((prev) => ({
                  ...prev,
                  onlyPlacement: !prev.onlyPlacement,
                }))
              }
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-heading transition-all cursor-pointer border ${
                filterState.onlyPlacement
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xs font-bold'
                  : 'bg-white text-slate-600 border-slate-200/90 hover:bg-slate-50 hover:text-slate-900 font-medium'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-current" />
              <span>100% Placement</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setFilterState((prev) => ({
                  ...prev,
                  onlyCertification: !prev.onlyCertification,
                }))
              }
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-heading transition-all cursor-pointer border ${
                filterState.onlyCertification
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xs font-bold'
                  : 'bg-white text-slate-600 border-slate-200/90 hover:bg-slate-50 hover:text-slate-900 font-medium'
              }`}
            >
              <BadgeCheck className="w-3.5 h-3.5 text-current" />
              <span>Global Certifications</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setFilterState((prev) => ({
                  ...prev,
                  onlyShortTrack: !prev.onlyShortTrack,
                }))
              }
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-heading transition-all cursor-pointer border ${
                filterState.onlyShortTrack
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xs font-bold'
                  : 'bg-white text-slate-600 border-slate-200/90 hover:bg-slate-50 hover:text-slate-900 font-medium'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-current" />
              <span>Fast-Track (&lt; 2 Mos)</span>
            </button>
          </div>

          {/* Results Counter and Clear All Button */}
          <div className="flex items-center gap-3 caption-text text-slate-500 ml-auto">
            <span>
              Showing{' '}
              <strong className="text-slate-900 font-bold font-heading">
                {filteredCount}
              </strong>{' '}
              of {totalCount} courses
            </span>

            {activeFilters.length > 0 && (
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 text-xs text-accent-600 hover:text-accent-700 font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================
          3. ACTIVE FILTERS DISMISS CHIPS BAR
         ======================================================== */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 p-2.5 rounded-2xl bg-orange-50/70 border border-orange-200/70 text-xs">
          <span className="caption-text text-accent-800 font-bold flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5 text-accent-600" />
            <span>Active Filters:</span>
          </span>

          {activeFilters.map((af) => (
            <span
              key={af.key}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white text-slate-800 border border-orange-200 shadow-2xs font-medium"
            >
              <span>{af.label}</span>
              <button
                type="button"
                onClick={af.clear}
                className="text-slate-400 hover:text-slate-700 p-0.5 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                title={`Remove ${af.label} filter`}
                aria-label={`Remove ${af.label} filter`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          <button
            type="button"
            onClick={onResetFilters}
            className="text-xs font-semibold text-accent-700 hover:text-accent-800 underline ml-auto cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* ========================================================
          4. MOBILE DRAWER FILTER SHEET
         ======================================================== */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 animate-slide-left">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-accent-500" />
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    Filter Courses
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Level Filter */}
              <div>
                <label className="caption-text text-slate-500 font-bold uppercase text-[10px] block mb-2">
                  Skill Level
                </label>
                <select
                  value={filterState.levelId}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      levelId: e.target.value,
                    }))
                  }
                  className="w-full p-2.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl"
                >
                  {LEVEL_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delivery Mode */}
              <div>
                <label className="caption-text text-slate-500 font-bold uppercase text-[10px] block mb-2">
                  Delivery Mode
                </label>
                <select
                  value={filterState.modeId}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      modeId: e.target.value,
                    }))
                  }
                  className="w-full p-2.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl"
                >
                  {MODE_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="caption-text text-slate-500 font-bold uppercase text-[10px] block mb-2">
                  Duration
                </label>
                <select
                  value={filterState.durationId}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      durationId: e.target.value,
                    }))
                  }
                  className="w-full p-2.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl"
                >
                  {DURATION_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="caption-text text-slate-500 font-bold uppercase text-[10px] block mb-2">
                  Sort By
                </label>
                <select
                  value={filterState.sortBy}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      sortBy: e.target.value,
                    }))
                  }
                  className="w-full p-2.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex gap-2">
              <button
                type="button"
                onClick={onResetFilters}
                className="w-1/2 py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-heading font-bold text-slate-700 text-center"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-1/2 py-2.5 px-3 rounded-xl bg-accent-500 text-white text-xs font-heading font-bold shadow-md shadow-accent-500/25 text-center"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
