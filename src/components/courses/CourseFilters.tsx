import React, { useState } from 'react'
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  LayoutGrid,
  List,
  Sparkles,
  Code2,
  Languages,
  BadgeCheck,
  BookOpen,
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
  Sparkles,
  Code2,
  Languages,
  BadgeCheck,
  BookOpen,
}

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

  // Count active extra filters (excluding default "all" states)
  const activeFiltersCount = [
    filterState.categoryId !== 'all',
    filterState.levelId !== 'all',
    filterState.modeId !== 'all',
    filterState.durationId !== 'all',
    filterState.onlyTrending,
    filterState.onlyPlacement,
    filterState.onlyCertification,
    filterState.onlyShortTrack,
    Boolean(filterState.searchQuery.trim()),
  ].filter(Boolean).length

  return (
    <div className="space-y-4">
      {/* ========================================================
          1. CATEGORY PILL TABS (Top-level interactive tabs)
         ======================================================== */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar select-none">
        {CATALOG_CATEGORIES.map((cat) => {
          const IconComp = CATEGORY_ICON_MAP[cat.iconName] || Sparkles
          const isSelected = filterState.categoryId === cat.id

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() =>
                setFilterState((prev) => ({ ...prev, categoryId: cat.id }))
              }
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 shadow-2xs ${
                isSelected
                  ? 'bg-accent-500 text-white shadow-md shadow-accent-500/25 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90'
              }`}
            >
              <IconComp
                className={`w-4 h-4 ${
                  isSelected ? 'text-white' : 'text-accent-500'
                }`}
              />
              <span>{cat.label}</span>
              {cat.badge && (
                <span
                  className={`eyebrow-badge text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500'
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
      <div className="bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-4 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={filterState.searchQuery}
              onChange={(e) =>
                setFilterState((prev) => ({
                  ...prev,
                  searchQuery: e.target.value,
                }))
              }
              placeholder="Search by course name, skills (e.g. Python, AWS, IELTS, React, SAP)..."
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-slate-50/70 hover:bg-slate-50 focus:bg-white text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 focus:outline-none transition-all font-sans"
            />
            {filterState.searchQuery && (
              <button
                type="button"
                onClick={() =>
                  setFilterState((prev) => ({ ...prev, searchQuery: '' }))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-md"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Dropdown Filters (Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Level Selector */}
            <select
              value={filterState.levelId}
              onChange={(e) =>
                setFilterState((prev) => ({ ...prev, levelId: e.target.value }))
              }
              className="px-3 py-2 text-xs font-semibold font-heading bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-white focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 cursor-pointer"
            >
              {LEVEL_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>

            {/* Mode Selector */}
            <select
              value={filterState.modeId}
              onChange={(e) =>
                setFilterState((prev) => ({ ...prev, modeId: e.target.value }))
              }
              className="px-3 py-2 text-xs font-semibold font-heading bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-white focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 cursor-pointer"
            >
              {MODE_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>

            {/* Duration Selector */}
            <select
              value={filterState.durationId}
              onChange={(e) =>
                setFilterState((prev) => ({
                  ...prev,
                  durationId: e.target.value,
                }))
              }
              className="px-3 py-2 text-xs font-semibold font-heading bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-white focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 cursor-pointer"
            >
              {DURATION_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>

            {/* Sort Selector */}
            <select
              value={filterState.sortBy}
              onChange={(e) =>
                setFilterState((prev) => ({ ...prev, sortBy: e.target.value }))
              }
              className="px-3 py-2 text-xs font-semibold font-heading bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-white focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Right Toolbar Actions */}
          <div className="flex items-center justify-between lg:justify-end gap-2">
            {/* Mobile Filter Sheet Trigger Button */}
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold font-heading bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-xl transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-accent-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* View Mode Toggle: Grid vs List */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-accent-600 shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-accent-600 shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Tag Pills (Trending, Placement, etc.) */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="caption-text text-slate-400 text-xs mr-1 hidden sm:inline">
              Quick Filter:
            </span>

            <button
              type="button"
              onClick={() =>
                setFilterState((prev) => ({
                  ...prev,
                  onlyTrending: !prev.onlyTrending,
                }))
              }
              className={`px-2.5 py-1 rounded-lg text-xs font-heading font-semibold transition-all ${
                filterState.onlyTrending
                  ? 'bg-rose-50 text-rose-600 border border-rose-300 shadow-2xs'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              🔥 Hot & Trending
            </button>

            <button
              type="button"
              onClick={() =>
                setFilterState((prev) => ({
                  ...prev,
                  onlyPlacement: !prev.onlyPlacement,
                }))
              }
              className={`px-2.5 py-1 rounded-lg text-xs font-heading font-semibold transition-all ${
                filterState.onlyPlacement
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-2xs'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              🎓 100% Placement
            </button>

            <button
              type="button"
              onClick={() =>
                setFilterState((prev) => ({
                  ...prev,
                  onlyCertification: !prev.onlyCertification,
                }))
              }
              className={`px-2.5 py-1 rounded-lg text-xs font-heading font-semibold transition-all ${
                filterState.onlyCertification
                  ? 'bg-amber-50 text-amber-800 border border-amber-300 shadow-2xs'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              🏆 Global Certifications
            </button>

            <button
              type="button"
              onClick={() =>
                setFilterState((prev) => ({
                  ...prev,
                  onlyShortTrack: !prev.onlyShortTrack,
                }))
              }
              className={`px-2.5 py-1 rounded-lg text-xs font-heading font-semibold transition-all ${
                filterState.onlyShortTrack
                  ? 'bg-blue-50 text-blue-700 border border-blue-300 shadow-2xs'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              ⚡ Fast-Track (&lt; 2 Mos)
            </button>
          </div>

          {/* Results Counter and Clear All Button */}
          <div className="flex items-center gap-3 caption-text text-slate-500 ml-auto">
            <span>
              Showing{' '}
              <strong className="text-slate-900 font-bold">
                {filteredCount}
              </strong>{' '}
              of {totalCount} courses
            </span>

            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 text-xs font-bold text-accent-600 hover:text-accent-700 font-heading"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================
          3. ACTIVE FILTERS CHIP BAR (When filters applied)
         ======================================================== */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="caption-text text-slate-400 text-xs">
            Active filters:
          </span>

          {filterState.categoryId !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-accent-50 text-accent-700 border border-accent-200 text-xs font-medium">
              <span>
                Vertical:{' '}
                {
                  CATALOG_CATEGORIES.find(
                    (c) => c.id === filterState.categoryId
                  )?.label
                }
              </span>
              <button
                type="button"
                onClick={() =>
                  setFilterState((prev) => ({ ...prev, categoryId: 'all' }))
                }
                className="hover:text-accent-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filterState.levelId !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
              <span>
                Level:{' '}
                {
                  LEVEL_OPTIONS.find((l) => l.id === filterState.levelId)?.label
                }
              </span>
              <button
                type="button"
                onClick={() =>
                  setFilterState((prev) => ({ ...prev, levelId: 'all' }))
                }
                className="hover:text-slate-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filterState.modeId !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
              <span>
                Mode:{' '}
                {MODE_OPTIONS.find((m) => m.id === filterState.modeId)?.label}
              </span>
              <button
                type="button"
                onClick={() =>
                  setFilterState((prev) => ({ ...prev, modeId: 'all' }))
                }
                className="hover:text-slate-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filterState.durationId !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
              <span>
                Duration:{' '}
                {
                  DURATION_OPTIONS.find(
                    (d) => d.id === filterState.durationId
                  )?.label
                }
              </span>
              <button
                type="button"
                onClick={() =>
                  setFilterState((prev) => ({ ...prev, durationId: 'all' }))
                }
                className="hover:text-slate-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filterState.searchQuery && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
              <span>Search: "{filterState.searchQuery}"</span>
              <button
                type="button"
                onClick={() =>
                  setFilterState((prev) => ({ ...prev, searchQuery: '' }))
                }
                className="hover:text-slate-900"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={onResetFilters}
            className="caption-text text-accent-600 hover:text-accent-800 text-xs font-bold underline ml-1"
          >
            Clear all
          </button>
        </div>
      )}

      {/* ========================================================
          4. MOBILE FILTER DRAWER MODAL
         ======================================================== */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileDrawerOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
          />

          {/* Drawer Sheet */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-accent-500" />
                <h3 className="font-heading font-bold text-slate-900 text-base">
                  Filter Courses
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {/* Category Filter */}
              <div>
                <label className="caption-text text-slate-400 text-xs font-bold block mb-2 uppercase tracking-wider">
                  Vertical
                </label>
                <div className="space-y-1.5">
                  {CATALOG_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() =>
                        setFilterState((prev) => ({
                          ...prev,
                          categoryId: cat.id,
                        }))
                      }
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-heading font-bold transition-colors ${
                        filterState.categoryId === cat.id
                          ? 'bg-accent-500 text-white'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <label className="caption-text text-slate-400 text-xs font-bold block mb-2 uppercase tracking-wider">
                  Experience Level
                </label>
                <select
                  value={filterState.levelId}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      levelId: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 text-xs font-heading font-semibold bg-slate-50 border border-slate-200 rounded-xl"
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
                <label className="caption-text text-slate-400 text-xs font-bold block mb-2 uppercase tracking-wider">
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
                  className="w-full px-3 py-2 text-xs font-heading font-semibold bg-slate-50 border border-slate-200 rounded-xl"
                >
                  {MODE_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="caption-text text-slate-400 text-xs font-bold block mb-2 uppercase tracking-wider">
                  Course Duration
                </label>
                <select
                  value={filterState.durationId}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      durationId: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 text-xs font-heading font-semibold bg-slate-50 border border-slate-200 rounded-xl"
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
                <label className="caption-text text-slate-400 text-xs font-bold block mb-2 uppercase tracking-wider">
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
                  className="w-full px-3 py-2 text-xs font-heading font-semibold bg-slate-50 border border-slate-200 rounded-xl"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Footer Apply Buttons */}
            <div className="p-4 border-t border-slate-100 flex items-center gap-2">
              <button
                type="button"
                onClick={onResetFilters}
                className="w-1/3 py-2.5 text-xs font-heading font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl text-center"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-2/3 py-2.5 text-xs font-heading font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-xl text-center shadow-md shadow-accent-500/25"
              >
                Apply Filters ({filteredCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
