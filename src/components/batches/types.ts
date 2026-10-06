export type BatchCategoryId = 'all' | 'digital-marketing' | 'sap' | 'software-testing' | 'data-analytics'

export type BranchLocation = 'Gandhipuram' | 'Saravanampatti'

export type TrainingMode = 'Classroom' | 'Online Live' | 'Hybrid'

export interface TimingSlot {
  id: string
  label: string // e.g. "Morning", "Regular", "Evening", "Weekend"
  timeRange: string // e.g. "07:30 AM - 09:30 AM"
  days: string // e.g. "Mon - Fri" or "Sat & Sun"
  seatsLeft: number
  totalSeats: number
  statusTag: 'Filling Fast' | 'Few Seats Left' | 'Almost Full' | 'Open'
}

export interface BranchInfo {
  name: BranchLocation
  landmark: string
  address: string
  modeAvailable: 'Classroom & Online'
  isOngoing: boolean
}

export interface BatchItem {
  id: string
  category: Exclude<BatchCategoryId, 'all'>
  title: string
  shortTitle: string
  image: string
  batchType: string // "Weekday" or "Weekday & Weekend"
  startDate: string // "Current"
  displayTime: string // "10:00 AM - 11:30 AM"
  modeDisplay: string // "Classroom | Online"
  duration: string // "3 Months"
  displayLocation: string // "Coimbatore - Gandhipuram & Saravanampatti"
  branches: BranchInfo[]
  slots: TimingSlot[]
  keyHighlights: string[]
  toolsCovered: string[]
  avgSalary: string
}
