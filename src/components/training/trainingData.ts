import {
  Code2,
  Cloud,
  Database,
  Megaphone,
  Cpu,
  HelpCircle,
  Laptop,
  Users,
  TrendingUp,
  GraduationCap,
  Briefcase,
} from 'lucide-react'

export interface LearningPath {
  id: string
  title: string
  category: string
  tagline: string
  description: string
  skills: string[]
  icon: typeof Code2
  highlightBadge: string
  accentColor: string
  bgGlow: string
  duration: string
  suitableFor: 'all' | 'students' | 'professionals'
  placementAssistance: string
  enquirySubject: string
}

export interface TrainingPillar {
  id: string
  title: string
  subtitle: string
  description: string
  bulletPoints: string[]
  icon: typeof HelpCircle
  accentGradient?: string
  badgeText: string
  stepNumber?: string
  metricBadge?: string
}

export interface TargetAudience {
  id: 'students' | 'professionals'
  title: string
  shortLabel: string
  badge: string
  icon: typeof GraduationCap
  headline: string
  summary: string
  perks: {
    title: string
    description: string
  }[]
  primaryCtaText: string
  enquirySubject: string
}

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'students',
    title: 'For College Students & Freshers',
    shortLabel: 'Students & Freshers',
    badge: 'Zero to Job-Ready',
    icon: GraduationCap,
    headline: 'Bridge the Academic Gap & Secure High-Impact First Jobs',
    summary:
      'Designed specifically for college students, final-year graduates, and non-CS degree holders in and around Coimbatore. Learn in-demand technology stacks from scratch with full placement mentorship.',
    perks: [
      {
        title: 'Zero-Prerequisite Onboarding',
        description: 'Comprehensive logical and algorithmic fundamentals before jumping into frameworks.',
      },
      {
        title: '10+ Capstone Portfolio Projects',
        description: 'Build real-world deployed software, full-stack applications, and industry-grade Git portfolios.',
      },
      {
        title: 'Aptitude & HR Interview Drills',
        description: 'Extensive mock interviews, communication grooming, and LinkedIn optimization.',
      },
      {
        title: 'Guaranteed Campus Placement Drives',
        description: 'Direct referral access to 250+ top MNCs and IT firms across Coimbatore, Bangalore & Chennai.',
      },
    ],
    primaryCtaText: 'Explore Fresher Career Roadmap',
    enquirySubject: 'Student & Fresher Career Training - Coimbatore',
  },
  {
    id: 'professionals',
    title: 'For Working Professionals & Switchers',
    shortLabel: 'Working Professionals',
    badge: 'Career Acceleration',
    icon: Briefcase,
    headline: 'Modernize Your Stack or Pivot Into Lucrative IT Domains',
    summary:
      'Engineered for developers wanting high-tier roles, non-IT professionals aiming for tech careers, or professionals returning after a career break. Learn with high flexibility without pausing your current job.',
    perks: [
      {
        title: 'Flexible Weekend & Evening Batches',
        description: 'Schedule around your work commitments with both weekend classrooms and recorded sessions.',
      },
      {
        title: 'High-ROI Modern Tech Stacks',
        description: 'Deep specialization in AWS/Azure Cloud, Microservices, DevOps, Generative AI, and Data Analytics.',
      },
      {
        title: '1-on-1 Architect & Lead Mentorship',
        description: 'Direct problem-solving, code reviews, and system design sessions from Principal Engineers.',
      },
      {
        title: 'Career Pivot Strategy (65-120% Hikes)',
        description: 'Resume repositioning, salary negotiation tactics, and high-growth interview readiness.',
      },
    ],
    primaryCtaText: 'Schedule Executive Counseling',
    enquirySubject: 'Working Professional Upskilling - Coimbatore',
  },
]

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'software-development',
    title: 'Software Development Training',
    category: 'Full Stack & Engineering',
    tagline: 'Modern Web, Scalable APIs & Enterprise Architectures',
    description:
      'Master front-to-back software development with hands-on labs in React, Next.js, Node.js, Python, or Java. Build robust REST APIs, modern relational databases, and industry-standard Git repositories.',
    skills: ['React.js', 'Node.js', 'Python Full Stack', 'Java Spring', 'PostgreSQL', 'Docker Basics'],
    icon: Code2,
    highlightBadge: 'Most Enrolled',
    accentColor: 'from-blue-600 to-indigo-600',
    bgGlow: 'bg-blue-500/10 text-blue-600 border-blue-200',
    duration: '3 to 5 Months',
    suitableFor: 'all',
    placementAssistance: '100% Placement Support',
    enquirySubject: 'Software Development Training - Coimbatore',
  },
  {
    id: 'cloud-courses',
    title: 'Cloud Courses & DevOps',
    category: 'Cloud Infrastructure & SRE',
    tagline: 'Architect, Automate & Secure Multi-Cloud Systems',
    description:
      'Acquire deep expertise in AWS, Microsoft Azure, CI/CD automated deployment pipelines, Docker containerization, Kubernetes orchestration, and Infrastructure as Code using Terraform.',
    skills: ['AWS Solutions Architect', 'Microsoft Azure', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Terraform'],
    icon: Cloud,
    highlightBadge: 'High Salary Potential',
    accentColor: 'from-orange-500 to-amber-600',
    bgGlow: 'bg-orange-500/10 text-orange-600 border-orange-200',
    duration: '2.5 to 4 Months',
    suitableFor: 'all',
    placementAssistance: 'Official Vendor Prep + Placements',
    enquirySubject: 'Cloud Courses & DevOps - Coimbatore',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Training',
    category: 'Data Science & BI Intelligence',
    tagline: 'Transform Complex Data Into Strategic Decisions',
    description:
      'Learn data wrangling, SQL query optimization, statistical modeling with Python, and interactive executive reporting with Power BI and Tableau. Unlock lucrative analyst and intelligence roles.',
    skills: ['Power BI', 'Advanced SQL', 'Python for Data', 'Tableau', 'Excel Mastery', 'Data Modeling'],
    icon: Database,
    highlightBadge: 'High Market Demand',
    accentColor: 'from-emerald-600 to-teal-600',
    bgGlow: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    duration: '3 Months',
    suitableFor: 'all',
    placementAssistance: '100% Placement Support',
    enquirySubject: 'Data Analytics Training - Coimbatore',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Classes',
    category: 'Performance Marketing & Growth',
    tagline: 'Drive Organic Traffic, Paid Performance & Viral Brand Growth',
    description:
      'Gain real campaign experience managing Google Ads, Meta Ad campaigns, Technical SEO, Content Funnels, Email Automations, and GA4 Analytics tracking with live ad account spend.',
    skills: ['SEO & Technical Audits', 'Google Ads (PPC)', 'Meta Ads Suite', 'Google Analytics 4', 'Content Strategy'],
    icon: Megaphone,
    highlightBadge: 'Live Budget Campaigns',
    accentColor: 'from-pink-600 to-rose-600',
    bgGlow: 'bg-pink-500/10 text-pink-600 border-pink-200',
    duration: '2 to 3 Months',
    suitableFor: 'all',
    placementAssistance: 'Agency & In-House Job Referrals',
    enquirySubject: 'Digital Marketing Classes - Coimbatore',
  },
  {
    id: 'it-foundations-ai',
    title: 'IT Foundations & AI Integration',
    category: 'Emerging Tech & Certifications',
    tagline: 'Core Programming, Generative AI Tools & Global Certs',
    description:
      'A flexible pathway for learners seeking computer science fundamentals, AI developer tools, cybersecurity basics, or official certification clearing (AWS, Microsoft, Cisco, RedHat).',
    skills: ['Core Java / Python', 'Prompt Engineering', 'Git & Linux', 'Cybersecurity Basics', 'Global Exam Prep'],
    icon: Cpu,
    highlightBadge: 'Fast-Track Foundations',
    accentColor: 'from-purple-600 to-violet-600',
    bgGlow: 'bg-purple-500/10 text-purple-600 border-purple-200',
    duration: '2 to 4 Months',
    suitableFor: 'all',
    placementAssistance: 'Certification & Placement Guidance',
    enquirySubject: 'IT Courses & Certifications - Coimbatore',
  },
]

export const TRAINING_ENVIRONMENT_PILLARS: TrainingPillar[] = [
  {
    id: 'encourage-questions',
    title: 'Encourage Questions',
    subtitle: 'Zero-Hesitation Doubt Clearing',
    description:
      'Curiosity drives mastery. Our smart labs cultivate an open environment where learners ask questions freely with dedicated 1-on-1 mentors.',
    bulletPoints: [
      'Unlimited 1:1 doubt-clearing sessions',
      'Dedicated lab mentors in practical hours',
      'Daily Q&A sprints before each module',
    ],
    icon: HelpCircle,
    badgeText: 'Culture of Inquiry',
    stepNumber: '01',
    metricBadge: '1-on-1 Mentorship',
  },
  {
    id: 'hands-on-practice',
    title: 'Rigorous Practice',
    subtitle: '80% Practical Lab Implementation',
    description:
      'Skip passive slides. Build muscle memory through dedicated hands-on coding, live architecture labs, and real enterprise capstone software.',
    bulletPoints: [
      '80% hands-on coding lab curriculum',
      'Production-grade capstone repositories',
      'Real-world bug debugging simulations',
    ],
    icon: Laptop,
    badgeText: 'Hands-on First',
    stepNumber: '02',
    metricBadge: '80% Lab Ratio',
  },
  {
    id: 'collaborative-discussion',
    title: 'Collaborative Discussion',
    subtitle: 'Team Standups & Code Reviews',
    description:
      'Modern software is built by teams. We replicate agile engineering workflows through peer code reviews, mock standups, and architectural debates.',
    bulletPoints: [
      'Peer-to-peer code review sessions',
      'Agile scrum sprints & mock standups',
      'Collaborative architectural whiteboarding',
    ],
    icon: Users,
    badgeText: 'Collaborative Synergy',
    stepNumber: '03',
    metricBadge: 'Agile Teamwork',
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    subtitle: 'Iterative Skill Growth & Feedback',
    description:
      'Measure progress through weekly milestone audits, personalized mentor feedback scorecards, and continuous interview coaching until you get hired.',
    bulletPoints: [
      'Weekly milestone skill assessments',
      'Personalized mentor feedback scorecards',
      'Iterative mock interviews until hired',
    ],
    icon: TrendingUp,
    badgeText: 'Iterative Mastery',
    stepNumber: '04',
    metricBadge: 'Verified Progress',
  },
]

export const COIMBATORE_ADVANTAGES = [
  {
    title: 'Dual Centers in Coimbatore',
    description: 'Saravanampatti (IT Corridor) & Gandhipuram (Central Hub) with modern smart labs.',
  },
  {
    title: '10+ Years Industry Mentors',
    description: 'Taught exclusively by active IT architects, senior software engineers, and domain specialists.',
  },
  {
    title: 'Hybrid & Flexible Schedules',
    description: 'Weekday full-time or weekend executive classroom & interactive online formats.',
  },
  {
    title: '250+ Placement Partners',
    description: 'Direct recruitment pipelines across top IT employers in Coimbatore, Tamil Nadu, and Tier-1 cities.',
  },
]
