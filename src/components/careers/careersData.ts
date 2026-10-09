export interface JobPosition {
  id: string
  title: string
  department: string
  category: 'frontend' | 'backend' | 'fullstack' | 'design' | 'cloud' | 'internship'
  type: 'Full-time' | 'Internship' | 'Contract'
  location: string
  workplaceType: 'On-site (Saravanampatti)' | 'Hybrid (Coimbatore)' | 'On-site (Gandhipuram)'
  experience: string
  description: string
  skills: string[]
  responsibilities: string[]
  requirements: string[]
  isSamplePipeline?: boolean
}

export interface CulturePillar {
  id: string
  title: string
  subtitle: string
  description: string
  iconName: 'GraduationCap' | 'Users' | 'Rocket' | 'LineChart' | 'HeartHandshake' | 'Sparkles'
  metrics: string
  metricsLabel: string
}

export const CAREER_STATS = [
  { value: '35+', label: 'Tech Mentors & Creators', sublabel: 'Practicing industry experts' },
  { value: '94%', label: 'Retention & Satisfaction', sublabel: 'Positive work-life review' },
  { value: '100%', label: 'Upskilling Sponsorship', sublabel: 'Certifications & workshops covered' },
  { value: '12+', label: 'Countries Placed', sublabel: 'Global alumni ecosystem' },
]

export const WHY_WORK_PILLARS = [
  {
    id: 'continuous-learning',
    title: 'Continuous Learning & Upskilling',
    subtitle: 'Stay ahead of the curve',
    description:
      'We invest heavily in your personal development. Enjoy sponsored global certifications (AWS, Azure, Google), free access to all Cloudswan advanced course catalogs, and dedicated weekly learning hours.',
    iconName: 'GraduationCap',
    badge: '100% Sponsored',
  },
  {
    id: 'collaborative-team',
    title: 'Collaborative & High-Trust Team',
    subtitle: 'Zero ego, maximum empathy',
    description:
      'Work alongside welcoming engineers, instructional designers, and industry veterans who prioritize open dialogue, mutual respect, psychological safety, and collective problem-solving.',
    iconName: 'Users',
    badge: 'Community First',
  },
  {
    id: 'real-world-projects',
    title: 'Real-World Production Impact',
    subtitle: 'Solve tangible engineering challenges',
    description:
      'Build scalable web applications, automated learning management platforms, cloud architectures, and capstone curricula directly shaping the career trajectories of thousands of students.',
    iconName: 'Rocket',
    badge: 'High Impact',
  },
  {
    id: 'career-development',
    title: 'Structured Career Progression',
    subtitle: 'Transparent ladders & mentorship',
    description:
      'Clear evaluation benchmarks, transparent progression roadmaps, bi-annual compensation reviews, and cross-discipline mobility options from development to curriculum architecture.',
    iconName: 'LineChart',
    badge: 'Fast Track',
  },
]

export const LIFE_AT_CLOUDSWAN_HIGHLIGHTS = [
  {
    id: 'culture-1',
    title: 'Modern Learning & Innovation Labs',
    category: 'Workplace Environment',
    description:
      'Ergonomic workstations, high-speed fiber connectivity, dual-monitor workstations, and collaborative breakout spaces designed for focused development and active brainstorming.',
    tag: 'Infrastructure',
  },
  {
    id: 'culture-2',
    title: 'Bi-Weekly Tech Syncs & Hack Days',
    category: 'Knowledge Exchange',
    description:
      'Show-and-tell sessions, lightning tech demos on AI, cloud architecture, and modern UX patterns where team members exchange ideas and experiment with bleeding-edge libraries.',
    tag: 'Innovation',
  },
  {
    id: 'culture-3',
    title: 'Meaningful Mentorship Pairings',
    category: 'People & Growth',
    description:
      'Every new team member is paired with an experienced peer to ensure seamless onboarding, shared wisdom, and constructive code reviews without overwhelming pressure.',
    tag: 'Mentorship',
  },
  {
    id: 'culture-4',
    title: 'Work-Life Harmony & Wellness',
    category: 'Health & Balance',
    description:
      'Flexible scheduling, thoughtful workload distribution, recreational events, team celebrations, and supportive time-off policies so you bring your best self to work.',
    tag: 'Wellness',
  },
]

export const HIRING_STEPS = [
  {
    step: '01',
    title: 'Submit Application',
    timeline: '5-10 minutes',
    description:
      'Browse our open roles or submit a general application with your updated resume, GitHub profile, or design portfolio.',
  },
  {
    step: '02',
    title: 'Profile & Portfolio Review',
    timeline: '2-3 Business Days',
    description:
      'Our recruitment and tech panel carefully evaluates your code samples, projects, and relevant background against team goals.',
  },
  {
    step: '03',
    title: 'Technical & Culture Conversation',
    timeline: '1-2 Friendly Rounds',
    description:
      'A collaborative discussion focusing on real-world engineering problem-solving, architectural choices, and team synergy.',
  },
  {
    step: '04',
    title: 'Formal Offer & Welcoming',
    timeline: 'Transparent Feedback',
    description:
      'We extend a clear, competitive offer package followed by tailored onboarding, mentor alignment, and toolkit setup.',
  },
]

export const JOB_CATEGORIES = [
  { id: 'all', label: 'All Positions' },
  { id: 'fullstack', label: 'Full Stack & Web' },
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'backend', label: 'Backend & Python' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'design', label: 'UI/UX Design' },
  { id: 'internship', label: 'Internships' },
]

export const SAMPLE_POSITIONS: JobPosition[] = [
  {
    id: 'pos-fullstack-sr',
    title: 'Senior Full Stack Engineer (React & Node.js)',
    department: 'Software Engineering',
    category: 'fullstack',
    type: 'Full-time',
    location: 'Coimbatore, Tamil Nadu',
    workplaceType: 'Hybrid (Coimbatore)',
    experience: '3 - 6 Years',
    description:
      'Architect, develop, and maintain high-performance student portals, scalable LMS microservices, and internal administrative dashboards using modern TypeScript, Next.js/React, and Node.js.',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    responsibilities: [
      'Lead full-stack feature development from technical specs to deployment.',
      'Optimize web performance, accessibility, and responsive frontend UI architecture.',
      'Mentor junior engineers through structured code reviews and architectural pairing.',
      'Collaborate with product designers to translate wireframes into pixel-perfect experiences.',
    ],
    requirements: [
      'Proven track record with React, TypeScript, and modern state management.',
      'Solid experience crafting RESTful/GraphQL APIs in Node.js or Express/Nest.',
      'Strong relational database knowledge (PostgreSQL, MySQL) and database modeling.',
      'Familiarity with cloud hosting and container workflows (AWS, Docker).',
    ],
    isSamplePipeline: true,
  },
  {
    id: 'pos-cloud-devops',
    title: 'Cloud & DevOps Engineer (AWS / Kubernetes)',
    department: 'Infrastructure & Cloud',
    category: 'cloud',
    type: 'Full-time',
    location: 'Saravanampatti, Coimbatore',
    workplaceType: 'Hybrid (Coimbatore)',
    experience: '2 - 5 Years',
    description:
      'Design reliable CI/CD delivery pipelines, automate infrastructure as code, and manage cloud sandbox environments for training labs and production systems.',
    skills: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'Linux', 'GitHub Actions'],
    responsibilities: [
      'Maintain reliable cloud infrastructure across multiple AWS accounts.',
      'Build automated student sandbox provisioning scripts for hands-on labs.',
      'Implement observability, logging, and security alerting with Prometheus and Grafana.',
      'Collaborate with developers to streamline containerized application rollouts.',
    ],
    requirements: [
      'Hands-on experience with core AWS services (EC2, ECS, EKS, RDS, S3, IAM).',
      'Proficiency in Terraform or CloudFormation for Infrastructure as Code.',
      'Solid understanding of container orchestration, networking, and security best practices.',
      'AWS Solutions Architect or DevOps certification is a strong plus.',
    ],
    isSamplePipeline: true,
  },
  {
    id: 'pos-frontend-react',
    title: 'Frontend Developer (React, TypeScript & Tailwind)',
    department: 'Software Engineering',
    category: 'frontend',
    type: 'Full-time',
    location: 'Coimbatore, Tamil Nadu',
    workplaceType: 'On-site (Saravanampatti)',
    experience: '1 - 3 Years',
    description:
      'Craft fluid, responsive, and accessible interactive user interfaces across web apps, student portals, and mobile-friendly web assets with attention to detail and animations.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5/CSS3', 'REST APIs'],
    responsibilities: [
      'Convert Figma components into performant, clean React + TypeScript components.',
      'Ensure cross-browser compatibility and mobile responsiveness down to 320px.',
      'Implement state management, client-side routing, and seamless API integrations.',
      'Uphold web accessibility standards (WCAG 2.1) and smooth UI micro-animations.',
    ],
    requirements: [
      'Strong proficiency in JavaScript (ES6+), TypeScript, and React hooks.',
      'Mastery of Tailwind CSS or utility-first CSS architecture.',
      'Portfolio showcasing live responsive web applications or GitHub projects.',
      'Good communication skills and an eager eye for design precision.',
    ],
    isSamplePipeline: true,
  },
  {
    id: 'pos-backend-python',
    title: 'Backend & Python AI Developer',
    department: 'Software & Academic Labs',
    category: 'backend',
    type: 'Full-time',
    location: 'Gandhipuram, Coimbatore',
    workplaceType: 'On-site (Gandhipuram)',
    experience: '2 - 4 Years',
    description:
      'Build data pipelines, Python backend services, and AI lab sandboxes. Assist in formulating real-world industry capstone projects in machine learning and data engineering.',
    skills: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Pandas', 'Scikit-Learn'],
    responsibilities: [
      'Develop robust REST APIs in FastAPI or Django for internal platforms.',
      'Curate and validate real-world datasets for machine learning training projects.',
      'Optimize query performance and cache strategies using Redis and PostgreSQL.',
      'Support curriculum leads in verifying lab exercises and capstone frameworks.',
    ],
    requirements: [
      'Solid programming proficiency in Python 3.x and modern OOP/functional patterns.',
      'Experience with relational databases, ORMs, and async API frameworks.',
      'Working knowledge of data science libraries (NumPy, Pandas, Matplotlib).',
      'Passion for teaching or mentoring is highly valued.',
    ],
    isSamplePipeline: true,
  },
  {
    id: 'pos-uiux-designer',
    title: 'UI/UX Product Designer',
    department: 'Design & Experience',
    category: 'design',
    type: 'Full-time',
    location: 'Coimbatore, Tamil Nadu',
    workplaceType: 'Hybrid (Coimbatore)',
    experience: '2 - 4 Years',
    description:
      'Design cohesive design systems, user flows, interactive prototypes, and marketing assets that elevate the Cloudswan digital presence and educational software.',
    skills: ['Figma', 'Design Systems', 'User Research', 'Wireframing', 'Prototyping', 'Design Tokens'],
    responsibilities: [
      'Develop and govern the Cloudswan design system and brand component library.',
      'Conduct user interviews and usability audits with students and corporate partners.',
      'Deliver developer-ready Figma handoffs with comprehensive variant states.',
      'Design high-converting landing page layouts and interactive course previews.',
    ],
    requirements: [
      'Strong portfolio demonstrating end-to-end UX thinking and polished UI craft.',
      'Deep mastery of Figma (Auto-layout, Components, Variables, Interactive Prototyping).',
      'Solid grasp of frontend constraints (HTML/CSS/Tailwind) for seamless handoff.',
      'Ability to articulate design decisions with clarity and empathy.',
    ],
    isSamplePipeline: true,
  },
  {
    id: 'pos-intern-se',
    title: 'Graduate Software Engineering Intern (2026 Batch)',
    department: 'Early Career & Labs',
    category: 'internship',
    type: 'Internship',
    location: 'Coimbatore, Tamil Nadu',
    workplaceType: 'On-site (Saravanampatti)',
    experience: 'Fresh Graduate / Final Year',
    description:
      'A 6-month intensive paid internship program with dedicated 1-on-1 mentorship. Work directly on production codebases, bug fixes, and feature enhancements with conversion to full-time.',
    skills: ['JavaScript', 'React Basics', 'Python / Java', 'Git & GitHub', 'SQL Basics'],
    responsibilities: [
      'Learn best-practice engineering standards, code reviews, and Git workflows.',
      'Collaborate on client mini-projects, automated test suites, and internal tools.',
      'Participate in daily standups and weekly engineering knowledge-sharing sessions.',
      'Complete a capstone production feature under senior engineering guidance.',
    ],
    requirements: [
      'Pursuing or recently completed degree in Computer Science, IT, or related fields.',
      'Strong grasp of fundamentals: Data Structures, Algorithms, and Web Basics.',
      'Demonstrated enthusiasm through personal projects, GitHub repos, or coding challenges.',
      'Eager curiosity and willingness to absorb constructive feedback.',
    ],
    isSamplePipeline: true,
  },
]
