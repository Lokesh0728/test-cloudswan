export interface TestimonialItem {
  id: string
  name: string
  role: string
  company: string
  avatarInitial: string
  avatarBg: string
  avatarUrl?: string
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
    name: 'Atchaya prabha Eswaran',
    role: 'MERN Stack Developer',
    company: 'Cognizant (CTS)',
    avatarInitial: 'AE',
    avatarBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '9 months ago',
    courseTaken: 'MERN Stack Web Development',
    category: 'fullstack',
    content:
      'I studied the MERN Stack course under this trainer, and the learning experience was very good. The trainer explained concepts clearly and covered MongoDB, Express, React, and Node.js in a structured way. Practical examples and hands-on projects were very helpful.',
    highlightMetric: 'MERN Certified',
    collegeOrBackground: 'B.Tech IT',
    campus: 'Saravanampatti',
    isFeatured: true,
    verifiedGoogle: true,
  },
  {
    id: 'rev-2',
    name: 'Divya K',
    role: 'QA Automation Engineer',
    company: 'Bosch Global Software',
    avatarInitial: 'DK',
    avatarBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '6 months ago',
    courseTaken: 'Java with Selenium Automation',
    category: 'career-switch',
    content:
      'I have completed Java with selenium automation under this institution. This is the right place to learn after the carrier break also. The faculty members are very experienced person and explaining in simple way. I would recommend this institute who looking for the quality education and guidance.',
    highlightMetric: 'Career Comeback',
    collegeOrBackground: 'Career Break to QA',
    campus: 'Gandhipuram',
    isFeatured: true,
    verifiedGoogle: true,
  },
  {
    id: 'rev-3',
    name: 'Mugundhan C',
    role: 'Associate Software Engineer',
    company: 'Aspire Systems',
    avatarInitial: 'MC',
    avatarBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '6 months ago',
    courseTaken: 'Full Stack & Placement Training',
    category: 'placements',
    content:
      'I had a great experience with this IT institute. The training was practical and up-to-date, and the trainers were very supportive. They also provided excellent placement assistance, which helped me get placed in a good company. Highly recommended for anyone looking to build a career in IT!',
    highlightMetric: 'Campus Placed',
    collegeOrBackground: 'B.E CS Graduate',
    campus: 'Saravanampatti',
    isFeatured: true,
    verifiedGoogle: true,
  },
  {
    id: 'rev-4',
    name: 'Rahul Desikan',
    role: 'Cloud DevOps Engineer',
    company: 'Kaar Technologies',
    avatarInitial: 'RD',
    avatarBg: 'bg-gradient-to-br from-emerald-500 to-teal-700',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '6 months ago',
    courseTaken: 'DevOps Masterclass & AWS',
    category: 'cloud-devops',
    content:
      "Clouds Swan Solutions training center offers a great learning experience for DevOps. The teaching is clear, practical, and easy to understand, even for beginners. The trainers are supportive and always ready to help with doubts. Overall, it's a good place to learn DevOps with proper guidance and support.",
    highlightMetric: 'DevOps Specialist',
    collegeOrBackground: 'IT Support to DevOps',
    campus: 'Saravanampatti',
    isFeatured: true,
    verifiedGoogle: true,
  },
  {
    id: 'rev-5',
    name: 'Sathish Kumar',
    role: 'Software Test Engineer',
    company: 'MNC Tech Solutions',
    avatarInitial: 'SK',
    avatarBg: 'bg-gradient-to-br from-cyan-600 to-blue-700',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '6 months ago',
    courseTaken: 'Software Testing & Automation',
    category: 'career-switch',
    content:
      'Hi all. I am previously worked at banking industry. But I am interested to work software field. That time I know about cloudswan solution. And I visited cloudswan solution they told about the software testing job details and gave training also. Now I placed as a software test engineer at MNC company with 5L package. Thank you for cloudswan solution.',
    highlightMetric: '₹5 LPA Package',
    collegeOrBackground: 'Banking to IT Switch',
    campus: 'Gandhipuram',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-6',
    name: 'Hariharan T (Trader)',
    role: 'Digital Marketing & SEO Lead',
    company: 'Pixel Growth Media',
    avatarInitial: 'HT',
    avatarBg: 'bg-gradient-to-br from-rose-500 to-amber-600',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '4 months ago',
    courseTaken: 'Digital Marketing & Performance SEO',
    category: 'freshers',
    content:
      'I recently completed the Digital Marketing course at Cloudswan Solution, and it was a great learning experience. The course was well-structured, covering important topics like SEO, Social Media Marketing, Google Ads, Content Marketing, and Analytics in a practical way. The trainers were knowledgeable, supportive, and explained concepts clearly with real-time examples.',
    highlightMetric: 'SEO & Ads Expert',
    collegeOrBackground: 'B.Com to Digital Tech',
    campus: 'Saravanampatti',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-7',
    name: 'Dhanabal RSD',
    role: 'Python Full Stack Developer',
    company: 'Zoho Corporation',
    avatarInitial: 'DR',
    avatarBg: 'bg-gradient-to-br from-indigo-500 to-violet-700',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '6 months ago',
    courseTaken: 'Python Full Stack Development',
    category: 'placements',
    content:
      "Hi I'm Dhanabal three months before am jobless and i had a career gap then I saw cloudswan solution in social media platform then I joined and learned and staffs also taught me well and support for a placement now I'm placed in good company thankyou cloudswan.",
    highlightMetric: 'Placed in 90 Days',
    collegeOrBackground: 'Career Gap Comeback',
    campus: 'Saravanampatti',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-8',
    name: 'Guru Vishnu',
    role: 'Cloud Infrastructure Associate',
    company: 'Tata Consultancy Services',
    avatarInitial: 'GV',
    avatarBg: 'bg-gradient-to-br from-teal-500 to-emerald-600',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '4 months ago',
    courseTaken: 'AWS Internship & Cloud Architect',
    category: 'cloud-devops',
    content:
      'Recently I have joined AWS Internship Training. The Training was good and I have experienced the value of course and the trainer was good and guided me a lot with practical labs, live architecture implementations, and real-time cloud deployment.',
    highlightMetric: 'AWS Certified',
    collegeOrBackground: 'B.E ECE',
    campus: 'Saravanampatti',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-9',
    name: 'Gayathri A',
    role: 'Java Backend Developer',
    company: 'Infosys Limited',
    avatarInitial: 'GA',
    avatarBg: 'bg-gradient-to-br from-fuchsia-500 to-pink-600',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '5 months ago',
    courseTaken: 'Java Full Stack & Spring Boot',
    category: 'placements',
    content:
      'They provide start to end support with the placement process. I got a great offer with very good package. The faculty conducted regular mock interviews, technical coding sessions, and guided me until final selection. The real-time projects built great confidence.',
    highlightMetric: 'Top MNC Offer',
    collegeOrBackground: 'B.Sc Computer Science',
    campus: 'Gandhipuram',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-10',
    name: 'Kanimozhi M',
    role: 'QA Test Analyst',
    company: 'Wipro Technologies',
    avatarInitial: 'KM',
    avatarBg: 'bg-gradient-to-br from-sky-500 to-blue-600',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '6 months ago',
    courseTaken: 'Software Testing & Automation',
    category: 'freshers',
    content:
      'I joined Cloudswan Solution for software testing course. It was a wonderful learning experience. The trainers are friendly and clear all our doubts. The practical sessions and mock interviews really helped me build confidence to crack my first corporate interview.',
    highlightMetric: 'Placed in 45 Days',
    collegeOrBackground: 'BCA Fresher',
    campus: 'Saravanampatti',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-11',
    name: 'SAIARVIND M',
    role: 'DevOps & Site Reliability Engineer',
    company: 'LTIMindtree',
    avatarInitial: 'SM',
    avatarBg: 'bg-gradient-to-br from-emerald-600 to-green-700',
    avatarUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '6 months ago',
    courseTaken: 'DevOps & CI/CD Pipeline Engineering',
    category: 'cloud-devops',
    content:
      'I have studied devops course here and trainer is very supportive and great place to learn. The live hands-on practice with Linux, Docker containers, Kubernetes, and CI/CD pipelines made complex topics easy to grasp. Highly recommend Cloudswan Solution.',
    highlightMetric: 'CI/CD Specialist',
    collegeOrBackground: 'B.Tech IT',
    campus: 'Saravanampatti',
    isFeatured: false,
    verifiedGoogle: true,
  },
  {
    id: 'rev-12',
    name: 'Balaji K (Rbk)',
    role: 'Software QA Tester',
    company: 'Quest Global',
    avatarInitial: 'BK',
    avatarBg: 'bg-gradient-to-br from-violet-600 to-indigo-700',
    avatarUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    postedTime: '5 months ago',
    courseTaken: 'Software Testing & Quality Assurance',
    category: 'placements',
    content:
      'I learned many software testing concepts from Cloud Swan Solution. The teaching was easy to understand and useful for interview preparation. The mentors explained real-world defect tracking and test management scenarios with complete patience.',
    highlightMetric: 'Core QA Placed',
    collegeOrBackground: 'Mechanical to IT Switch',
    campus: 'Gandhipuram',
    isFeatured: false,
    verifiedGoogle: true,
  },
]
