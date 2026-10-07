export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'placements' | 'courses' | 'eligibility' | 'fees' | 'timings'
  bullets?: string[]
  isPopular?: boolean
}

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'placements', label: 'Placements & Career' },
  { id: 'eligibility', label: 'Eligibility & Non-IT' },
  { id: 'timings', label: 'Batch Timings & Mode' },
  { id: 'fees', label: 'Fees & Installments' },
  { id: 'courses', label: 'Projects & Certifications' },
] as const

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'placements',
    isPopular: true,
    question: 'How does Cloudswan provide 100% placement assistance for students and freshers?',
    answer:
      'We have an active placement cell with over 250+ hiring partner companies across Coimbatore, Chennai, Bengaluru, and Hyderabad. Placement training starts from day one of your course.',
    bullets: [
      'Resume building and LinkedIn optimization reviewed by Senior IT Leads',
      'Unlimited mock technical interviews and HR personality rounds',
      'Direct interview drives and recruitment referrals until you get placed',
      'Average placement turnaround is 30 to 60 days following capstone project submission',
    ],
  },
  {
    id: 'faq-2',
    category: 'eligibility',
    isPopular: true,
    question: 'I am from a non-IT background (Mechanical/Civil/Arts/Commerce). Can I succeed in IT courses?',
    answer:
      'Yes, absolutely! Over 45% of our successful alumni come from non-computer science backgrounds including Mechanical, Civil, B.Com, and B.Sc streams.',
    bullets: [
      'Foundational programming logic modules taught from ground zero',
      'Dedicated 1-on-1 lab mentors to resolve doubts immediately during practical sessions',
      'Specialized beginner tracks in Python, Full Stack, Data Analytics, and Software Testing',
      'No prior programming or computer engineering background required to start',
    ],
  },
  {
    id: 'faq-3',
    category: 'timings',
    isPopular: true,
    question: 'What are the batch timings? Do you provide weekend batches for working professionals?',
    answer:
      'We offer extremely flexible learning schedules designed to suit college students, job seekers, and working professionals alike.',
    bullets: [
      'Regular Weekday Batches: Morning (8:00 AM – 11:00 AM), Afternoon, and Evening (6:30 PM – 8:30 PM)',
      'Dedicated Weekend Batches: Saturday & Sunday intensive fast-track sessions with full lab access',
      'Fast-Track Bootcamps: Accelerated 4 to 8-week full-time immersive programs',
      'Hybrid option: Attend offline in Coimbatore or switch to live interactive online classes when traveling',
    ],
  },
  {
    id: 'faq-4',
    category: 'fees',
    isPopular: true,
    question: 'What is the course fee structure and do you offer EMI or installment options?',
    answer:
      'Our course fees are highly competitive and transparent, offering the best value in Coimbatore with zero hidden costs or examination fee surprises.',
    bullets: [
      'Flexible 2 to 3 installment payment plans available for all courses',
      'Zero-cost EMI financial assistance options available through partner institutions',
      'Merit-based fee concessions for fresh graduates and female tech aspirants',
      'Transparent upfront quotation including training, lab access, and placement assistance',
    ],
  },
  {
    id: 'faq-5',
    category: 'courses',
    isPopular: true,
    question: 'Will I work on real-world industry capstone projects during the training?',
    answer:
      'Yes! Every single program at Cloudswan requires completing 3 to 5 production-grade capstone projects rather than simple dummy exercises.',
    bullets: [
      'Projects hosted live on GitHub and deployed on AWS/Vercel with CI/CD',
      'Enterprise architecture scenarios such as E-commerce APIs, Microservices, and AI dashboards',
      'Code reviews conducted under Senior Principal Engineer standards',
      'Portfolio assistance so your GitHub profile stands out to tech hiring managers',
    ],
  },
  {
    id: 'faq-6',
    category: 'timings',
    question: 'Where are Cloudswan’s training campuses located in Coimbatore?',
    answer:
      'Cloudswan operates two premier smart training facilities in prime locations across Coimbatore for convenient transit.',
    bullets: [
      'Saravanampatti Campus: Located in Coimbatore’s primary IT Corridor and SEZ tech hub near leading IT parks',
      'Gandhipuram Campus: Situated at the central transit hub of the city, walkable from major bus and railway connections',
      'Both facilities feature high-speed air-conditioned smart computer labs open from 8:00 AM to 8:00 PM',
    ],
  },
  {
    id: 'faq-7',
    category: 'courses',
    question: 'What certificates will I receive upon completing the training program?',
    answer:
      'Upon successfully completing your course and capstone project review, you receive industry-endorsed credentials.',
    bullets: [
      'ISO 9001:2015 certified Course Completion Certificate with online verification ID',
      'Hands-on Internship Experience Certificate validating your project practical hours',
      'Official exam guidance and voucher discount support for global certifications (AWS, Microsoft, Google)',
    ],
  },
  {
    id: 'faq-8',
    category: 'eligibility',
    question: 'Can I attend a free demo session before deciding to enroll?',
    answer:
      'Yes, 100%! We encourage prospective learners to book a free demo session and 1-on-1 career consultation before making any commitment.',
    bullets: [
      'Experience our live classroom environment and trainer interaction first-hand',
      'Get a customized career roadmap aligned with current industry salary benchmarks',
      'No obligation or upfront payment required for attending demo sessions',
    ],
  },
]
