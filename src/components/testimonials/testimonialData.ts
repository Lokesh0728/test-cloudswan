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
  headline: string
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
  starBreakdown: {
    stars: number
    percentage: number
    count: number
  }[]
  rankingText: string
  verifiedPlaceName: string
  location: string
}

export const GOOGLE_REVIEW_STATS: GoogleReviewStats = {
  averageRating: 4.9,
  totalReviews: 1850,
  rankingText: '#1 Rated IT Training Institute in Coimbatore',
  verifiedPlaceName: 'Cloudswan Solution IT Training Institute',
  location: 'Saravanampatti & Gandhipuram, Coimbatore',
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
  { id: 'placements', label: '100% Placements', count: '940+' },
  { id: 'fullstack', label: 'Full Stack & Web', count: '620+' },
  { id: 'career-switch', label: 'Career Switchers', count: '480+' },
  { id: 'cloud-devops', label: 'Cloud & DevOps', count: '390+' },
  { id: 'freshers', label: 'College Freshers', count: '550+' },
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
    headline: 'From Mechanical Degree to Full Stack Developer in 4 Months!',
    content:
      'Coming from a non-CS mechanical background, I was apprehensive about coding. The mentors at Cloudswan Saravanampatti broke down Python, Django, and React into easy-to-grasp concepts with daily lab assignments. The mock technical interviews gave me immense confidence during Zoho recruitment.',
    highlightMetric: '140% Salary Hike',
    collegeOrBackground: 'Mechanical Grad (CIT Coimbatore)',
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
    headline: 'Best Hands-On Lab Infrastructure & Placement Guidance',
    content:
      'Unlike other training institutes in Coimbatore that only teach theory with slides, Cloudswan makes you build 4 real-world production projects from scratch. My trainer was extremely patient with JavaScript and Next.js architectures. Cleared CTS campus off-drive on my first attempt!',
    highlightMetric: 'Placed in 35 Days',
    collegeOrBackground: 'B.Sc Computer Science (PSG CAS)',
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
    headline: 'Transitioned from L1 Support to High-Paying Cloud Role',
    content:
      'I was stuck in a technical support job for 3 years without salary growth. Joined the weekend batch for AWS & DevOps at Cloudswan. Hands-on Docker, Kubernetes clusters, and Terraform CI/CD pipelines completely transformed my career trajectory. Received two top offers within 3 weeks of completion.',
    highlightMetric: '110% CTC Growth',
    collegeOrBackground: '3 Years IT Support Experience',
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
    courseTaken: 'Selenium & Java Automation Testing',
    category: 'placements',
    headline: 'Restarted My Career After a 2-Year Break with 1-on-1 Mentorship',
    content:
      'I had a 2-year career gap due to family relocation. Cloudswan counselors analyzed my profile and recommended Automation Testing with API testing. The personal mentorship, resume revamp, and LinkedIn optimization were game changers. Successfully cleared technical rounds at Bosch Coimbatore!',
    highlightMetric: 'Career Reboot',
    collegeOrBackground: '2-Year Career Break Restart',
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
    headline: 'Microservices & Real-Time REST APIs Taught by Senior Architects',
    content:
      'The Spring Boot and Microservices modules were taught with enterprise-grade coding standards. We developed end-to-end banking API simulations with JWT security and PostgreSQL. The placement cell scheduled 4 back-to-back corporate interviews. Couldn’t have asked for a better institute in Coimbatore.',
    highlightMetric: '3 Placement Offers',
    collegeOrBackground: 'BCA Grad (Kumaraguru College)',
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
    headline: 'Practical Business Intelligence Dashboards That Got Me Hired',
    content:
      'I was looking for a specialized Data Analytics course in Coimbatore with Power BI and Advanced SQL. The case studies on retail analytics and financial forecasting gave me portfolio projects that interviewers loved discussing. Cloudswan’s placement assistance was 100% transparent and supportive.',
    highlightMetric: 'Direct Campus Drive',
    collegeOrBackground: 'B.Com CA to IT Analytics',
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
    headline: 'Cleared AWS Certification in 1st Attempt with Cloudswan Prep',
    content:
      'Cloudswan provided complete voucher exam prep, scenario-based architecture challenges, and unlimited lab hours. Both the Saravanampatti and Gandhipuram centers have great smart lab equipment with high-speed internet. Passed AWS Solutions Architect Associate with an 880/1000 score!',
    highlightMetric: 'AWS Certified SAA',
    collegeOrBackground: 'B.E ECE (Sri Krishna College)',
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
    courseTaken: 'Full Stack Web Development & System Design',
    category: 'fullstack',
    headline: 'In-Depth Code Reviews & Clean Architecture Discipline',
    content:
      'The code reviews by trainers here are thorough. They teach you clean code, modular architecture, Git flow, and test-driven development. It felt exactly like working in a professional software development sprint. Highly recommended to anyone serious about becoming a software engineer.',
    highlightMetric: 'Tier-1 Product Firm',
    collegeOrBackground: 'MCA Post-Graduate',
    campus: 'Saravanampatti',
    isFeatured: false,
    verifiedGoogle: true,
  },
]
