export interface TestimonialItem {
  id: string
  name: string
  role: string
  company: string
  avatarInitial: string
  avatarBg: string
  rating: number
  postedTime: string
  courseTaken: string
  category: 'all' | 'placements' | 'freshers' | 'career-switch' | 'cloud-devops' | 'fullstack'
  content: string
  highlightMetric?: string
  collegeOrBackground?: string
  campus: 'Saravanampatti' | 'Gandhipuram' | 'Online Live'
  isFeatured?: boolean
  verifiedGoogle: boolean
}

export interface GoogleReviewStats {
  averageRating: number
  totalReviews: number
  rankingText: string
  verifiedPlaceName: string
  location: string
  satisfactionRate: number
  placedAlumniCount: string
  starBreakdown: {
    stars: number
    percentage: number
    count: number
  }[]
}

export const GOOGLE_REVIEW_STATS: GoogleReviewStats = {
  averageRating: 4.9,
  totalReviews: 1850,
  rankingText: '#1 Rated IT Training Institute in Coimbatore',
  verifiedPlaceName: 'Cloudswan Solution IT Training Institute',
  location: 'Saravanampatti & Gandhipuram, Coimbatore',
  satisfactionRate: 98,
  placedAlumniCount: '12,000+',
  starBreakdown: [
    { stars: 5, percentage: 96, count: 1776 },
    { stars: 4, percentage: 3, count: 56 },
    { stars: 3, percentage: 1, count: 12 },
    { stars: 2, percentage: 0, count: 4 },
    { stars: 1, percentage: 0, count: 2 },
  ],
}

export const TESTIMONIAL_CATEGORIES = [
  { id: 'all', label: 'All Reviews', count: '1,850+' },
  { id: 'placements', label: 'Placements', count: '940+' },
  { id: 'fullstack', label: 'Full Stack', count: '620+' },
  { id: 'cloud-devops', label: 'Cloud & DevOps', count: '390+' },
  { id: 'career-switch', label: 'Career Switch', count: '480+' },
] as const

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Karthik Subramanian',
    role: 'Python Full Stack Developer',
    company: 'Zoho Corporation',
    avatarInitial: 'KS',
    avatarBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    rating: 5,
    postedTime: '2 weeks ago',
    courseTaken: 'Python Full Stack Development',
    category: 'career-switch',
    content:
      'Coming from a non-CS mechanical background, I was apprehensive about coding. The mentors broke down Python, Django, and React into easy concepts with daily practical labs. The mock technical interviews gave me immense confidence to crack Zoho recruitment.',
    highlightMetric: '140% Hike',
    collegeOrBackground: 'Mechanical Grad',
    campus: 'Saravanampatti',
    isFeatured: true,
    verifiedGoogle: true,
  },
  {
    id: 'rev-2',
    name: 'Priya Dharshini',
    role: 'Frontend React Developer',
    company: 'Cognizant (CTS)',
    avatarInitial: 'PD',
    avatarBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    rating: 5,
    postedTime: '3 weeks ago',
    courseTaken: 'MERN Stack Web Development',
    category: 'freshers',
    content:
      'Unlike institutes that only teach theory with slides, Cloudswan makes you build real-world production projects from scratch. The 1-on-1 mentor guidance on modern React and JavaScript helped me clear Cognizant campus drive on my first attempt.',
    highlightMetric: 'Placed in 35 Days',
    collegeOrBackground: 'B.Sc CS',
    campus: 'Gandhipuram',
    isFeatured: true,
    verifiedGoogle: true,
  },
  {
    id: 'rev-3',
    name: 'Vignesh Kumar',
    role: 'DevOps & Cloud Engineer',
    company: 'Kaar Technologies',
    avatarInitial: 'VK',
    avatarBg: 'bg-gradient-to-br from-emerald-500 to-teal-700',
    rating: 5,
    postedTime: '1 month ago',
    courseTaken: 'AWS Cloud & DevOps Masterclass',
    category: 'cloud-devops',
    content:
      'I was stuck in technical support for 3 years without salary growth. The weekend AWS & DevOps batch completely transformed my trajectory. Hands-on Docker, Kubernetes clusters, and Terraform CI/CD pipelines enabled me to secure two high-paying offers.',
    highlightMetric: '110% CTC Growth',
    collegeOrBackground: 'IT Support to Cloud',
    campus: 'Saravanampatti',
    isFeatured: true,
    verifiedGoogle: true,
  },
  {
    id: 'rev-4',
    name: 'Ananya Sundaram',
    role: 'QA Automation Engineer',
    company: 'Bosch Global Software',
    avatarInitial: 'AS',
    avatarBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    rating: 5,
    postedTime: '1 month ago',
    courseTaken: 'Selenium & Automation Testing',
    category: 'placements',
    content:
      'Restarted my career after a 2-year break. Cloudswan’s personalized mentorship, real-time Selenium framework building, and resume revamp were incredible game changers. Successfully cleared technical rounds at Bosch Coimbatore.',
    highlightMetric: 'Career Restart',
    collegeOrBackground: 'Career Break Restart',
    campus: 'Gandhipuram',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-5',
    name: 'Suresh Rangarajan',
    role: 'Java Backend Developer',
    company: 'Infosys Limited',
    avatarInitial: 'SR',
    avatarBg: 'bg-gradient-to-br from-cyan-600 to-blue-700',
    rating: 5,
    postedTime: '5 weeks ago',
    courseTaken: 'Java Full Stack & Spring Boot',
    category: 'fullstack',
    content:
      'The Spring Boot and Microservices modules were taught with enterprise-grade coding standards. We developed end-to-end banking API simulations with JWT security and PostgreSQL. The placement cell scheduled back-to-back corporate interviews until I got selected.',
    highlightMetric: '3 Job Offers',
    collegeOrBackground: 'BCA Grad',
    campus: 'Saravanampatti',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-6',
    name: 'Divya Bharathi',
    role: 'Data Analyst',
    company: 'Tiger Analytics',
    avatarInitial: 'DB',
    avatarBg: 'bg-gradient-to-br from-rose-500 to-amber-600',
    rating: 5,
    postedTime: '6 weeks ago',
    courseTaken: 'Data Analytics with Power BI & SQL',
    category: 'placements',
    content:
      'The hands-on Power BI dashboards and advanced SQL case studies gave me practical portfolio projects that interviewers loved discussing. Cloudswan’s placement assistance was 100% transparent and supportive throughout my journey.',
    highlightMetric: 'Direct Campus Drive',
    collegeOrBackground: 'Commerce to IT',
    campus: 'Gandhipuram',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-7',
    name: 'Arun Prasath',
    role: 'Cloud Solutions Associate',
    company: 'Hexaware Technologies',
    avatarInitial: 'AP',
    avatarBg: 'bg-gradient-to-br from-indigo-500 to-violet-700',
    rating: 5,
    postedTime: '2 months ago',
    courseTaken: 'AWS Solutions Architect & Cloud Security',
    category: 'cloud-devops',
    content:
      'Cloudswan provided scenario-based architecture prep and unlimited lab access. Passed the AWS Solutions Architect Associate exam with an 880/1000 score. Outstanding smart lab equipment and guidance across both Coimbatore centers.',
    highlightMetric: 'AWS Certified SAA',
    collegeOrBackground: 'B.E ECE',
    campus: 'Saravanampatti',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-8',
    name: 'Sneha Radhakrishnan',
    role: 'Software Engineer',
    company: 'Thoughtworks',
    avatarInitial: 'SR',
    avatarBg: 'bg-gradient-to-br from-teal-500 to-emerald-600',
    rating: 5,
    postedTime: '2 months ago',
    courseTaken: 'Full Stack Web & System Design',
    category: 'fullstack',
    content:
      'The code reviews by trainers here are thorough. They teach clean code, modular architecture, Git flow, and test-driven development — exactly like working in a professional software development sprint. Highly recommended to anyone serious about coding.',
    highlightMetric: 'Tier-1 Product Firm',
    collegeOrBackground: 'MCA Post-Graduate',
    campus: 'Saravanampatti',
    isFeatured: false,
    verifiedGoogle: true,
  },
]
