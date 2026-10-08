import type { CourseData } from '../../types/course'

export const fullstackCourseData: CourseData = {
  id: 'full-stack',
  slug: '/courses/full-stack-development',
  title: 'Full Stack Web Development Course in Coimbatore',
  shortTitle: 'Full Stack Development',
  eyebrowBadge: 'Industry-Aligned Full Stack Engineering Track',
  tagline: 'Master Frontend, Backend, Databases, APIs & Cloud Deployment Through Hands-On Software Engineering',
  heroDescription: [
    'Master end-to-end modern web engineering with CloudSwan Solution at our Saravanampatti and Gandhipuram campuses in Coimbatore.',
    'Our comprehensive curriculum bridges modern responsive frontend engineering (HTML5, CSS3, JavaScript ES6+, TypeScript, React 19, Tailwind CSS), scalable backend architecture (Node.js, Express, REST APIs, WebSockets), robust databases (MongoDB, PostgreSQL, Prisma ORM), and production deployment (Docker, Git, CI/CD, AWS).',
    'Designed for students, engineering graduates, IT professionals, and career switchers looking to build production-grade web applications and secure high-growth developer careers in leading tech enterprises.',
  ],
  primaryCtaText: 'Book a Free Counselling Session',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'Full Stack Web Development (MERN / TypeScript / Cloud)',
    duration: '4 to 5 Months',
    mode: 'Classroom & Live Interactive Online',
    level: 'Beginner to Advanced',
    coreSkills: 'HTML5/CSS3, JavaScript ES6+, TypeScript, React 19, Node.js, Express, MongoDB, PostgreSQL',
    advancedTopics: 'Next.js, Redux Toolkit, REST & GraphQL APIs, WebSockets, Docker, AWS Deployment & CI/CD',
    projects: '6 Production-Ready Full Stack Capstone Projects',
    certification: 'Course Completion Certificate + Full Stack Portfolio Review',
    careerSupport: 'Resume & Portfolio Building, Mock Technical Interviews, 100% Placement Assistance',
    mentorSupport: 'Available (Senior Full Stack Architects & Tech Leads)',
  },

  whyLearn: {
    title: 'Why Learn Full Stack Web Development?',
    intro:
      'Full Stack developers are among the most versatile and sought-after engineering professionals in the global technology ecosystem. Companies increasingly prioritize developers who can conceptualize, build, and deploy entire web products from user interface to cloud database.',
    description:
      'Rather than mastering only a single layer of the software stack, full stack engineers understand the entire software development lifecycle—from responsive browser UI and client state management to server architectures, API security, database performance tuning, and cloud deployment.',
    competenciesTitle: 'An industry-ready Full Stack Engineer must know how to:',
    competencies: [
      'Architect semantic, responsive, and accessible user interfaces with modern CSS and Tailwind',
      'Write scalable, typesafe applications using JavaScript (ES6+) and modern TypeScript',
      'Build performant single-page and server-rendered web applications with React 19 and Next.js',
      'Manage complex client-side application state using Redux Toolkit and modern React patterns',
      'Design RESTful and real-time backend microservices using Node.js and Express',
      'Model and query both relational (PostgreSQL) and NoSQL (MongoDB) databases with ORMs',
      'Implement robust authentication, JWT tokens, OAuth2, and role-based access control (RBAC)',
      'Build real-time bi-directional features like live chat and notifications using WebSockets',
      'Containerize full-stack services using Docker and orchestrate local development with Docker Compose',
      'Automate CI/CD pipelines and deploy resilient production applications to AWS and modern cloud platforms',
    ],
    summaryNote:
      "CloudSwan's Full Stack program delivers practical, project-first training directly aligned with the technical hiring standards of top product companies and global IT consultancies.",
  },

  learningPath: {
    title: 'Full Stack Development Training Institute in Coimbatore',
    subtitle: 'A Structured Journey from Web Foundations to Enterprise Cloud Software',
    description:
      'CloudSwan Solution provides practical Full Stack Web Development training at our Saravanampatti and Gandhipuram campuses in Coimbatore. Our structured learning path connects visual user experiences with high-performance server architectures, taking you step-by-step from core web fundamentals to scalable cloud applications:',
    steps: [
      'Web Foundations (HTML5 & Modern CSS3)',
      'Modern JavaScript (ES6+) & DOM',
      'TypeScript Foundations & Typesafety',
      'Component Architecture with React 19',
      'State Management & Next.js App Router',
      'Backend Engineering with Node.js & Express',
      'Relational (PostgreSQL) & NoSQL (MongoDB) Databases',
      'RESTful APIs, JWT Security & OAuth',
      'Real-Time WebSockets & Event Streaming',
      'Docker Containerization & DevOps Basics',
      'Cloud Deployment on AWS & Vercel',
      'Capstone Projects & Technical Interview Prep',
    ],
    outcomeNote:
      'This hands-on progression ensures learners graduate with the comprehensive engineering depth required to build and deploy complete production software systems independently.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'What You Will Learn Across the Full Stack',
    description:
      'A comprehensive 11-module curriculum engineered to transition you from core web foundations into production-grade frontend frameworks, scalable backend servers, database architecture, and cloud deployment pipelines.',
    modules: [
      {
        number: 1,
        title: 'Modern Web Foundations & Responsive UI Design',
        subtitle: 'Build Accessible, Mobile-First Web Interfaces',
        description:
          'Master modern semantic markup, responsive design principles, advanced CSS layouts, and modern utility-first styling.',
        topics: [
          'Semantic HTML5 elements & document architecture',
          'Modern CSS3: Box model, typography, and color theory',
          'Responsive design principles & mobile-first workflows',
          'CSS Flexbox & Multi-dimensional CSS Grid layouts',
          'CSS custom properties (variables) & dark mode design',
          'Transitions, transforms, and subtle micro-animations',
          'Utility-first CSS styling with Tailwind CSS',
          'Web accessibility (a11y) standards & ARIA guidelines',
          'Responsive images, SVGs, and asset optimization',
          'Cross-browser compatibility testing & DevTools mastery',
        ],
      },
      {
        number: 2,
        title: 'Modern JavaScript (ES6+) & TypeScript Foundations',
        subtitle: 'Write Clean, Scalable & Typesafe Code',
        description:
          'Deep dive into asynchronous programming, functional JavaScript concepts, and typesafe enterprise development with TypeScript.',
        topics: [
          'JavaScript syntax, scopes, execution context, and closures',
          'Modern ES6+ features: Destructuring, spread/rest, arrow functions',
          'Array methods: map, filter, reduce, find, flatMap',
          'DOM manipulation, event delegation, and bubbling',
          'Asynchronous JavaScript: Event loop, Promises, async/await',
          'Fetch API, Axios, error handling, and HTTP status codes',
          'TypeScript essentials: Types, interfaces, unions, and tuples',
          'Generics, type assertions, and strict compiler configurations',
          'Modular code architecture with ES Modules',
          'Debugging JavaScript in Chrome DevTools & VS Code',
        ],
      },
      {
        number: 3,
        title: 'Frontend Engineering with React 19',
        subtitle: 'Build Declarative, Component-Driven Single-Page Applications',
        description:
          'Master the modern React ecosystem, functional components, hooks, lifecycle management, and dynamic user interaction.',
        topics: [
          'Introduction to React: Virtual DOM, JSX, and component thinking',
          'Functional components & props validation',
          'Core hooks: useState, useEffect, useRef, useMemo, useCallback',
          'Managing complex forms & validation with React Hook Form & Zod',
          'Component lifecycle & side-effect synchronization',
          'Custom React hooks for reusable logic',
          'Context API for lightweight global state sharing',
          'Client-side routing with React Router 7',
          'Optimizing re-renders, React DevTools, and code splitting',
          'Building modular, production-ready component design systems',
        ],
      },
      {
        number: 4,
        title: 'Advanced React, State Management & Next.js',
        subtitle: 'Enterprise State Architecture & Full-Stack React',
        description:
          'Scale your frontend with centralized state management, server-side rendering, and production-grade full-stack React frameworks.',
        topics: [
          'Predictable global state with Redux Toolkit & RTK Query',
          'Lightweight state alternatives: Zustand & Context',
          'Introduction to Next.js & Server-Driven Web Architecture',
          'Next.js App Router, layout hierarchies, and nested routes',
          'Server Components (RSC) vs Client Components',
          'Server-Side Rendering (SSR) & Static Site Generation (SSG)',
          'Server Actions, mutations, and revalidation',
          'Image, font, and script performance optimization in Next.js',
          'SEO metadata configuration & Open Graph tags',
          'Authentication patterns in Next.js with cookies & tokens',
        ],
      },
      {
        number: 5,
        title: 'Backend Development with Node.js & Express',
        subtitle: 'Build Scalable, Event-Driven Backend Servers',
        description:
          'Understand Node.js asynchronous architecture and build high-throughput RESTful servers using Express framework.',
        topics: [
          'Node.js runtime, V8 engine, and event-driven architecture',
          'The Node.js Event Loop, streams, and buffer handling',
          'Node built-in modules: fs, path, crypto, events, http',
          'Express framework setup, routing, and controller architecture',
          'Express middleware pipeline: logging, CORS, body-parsing',
          'Centralized error handling & custom application exceptions',
          'Environment variables management with dotenv & security hygiene',
          'REST API design conventions, naming standards & status codes',
          'File uploads and processing with Multer & Cloudinary',
          'Structuring enterprise backends with the MVC design pattern',
        ],
      },
      {
        number: 6,
        title: 'Database Architecture: MongoDB & PostgreSQL',
        subtitle: 'Master Both NoSQL Document & Relational SQL Engines',
        description:
          'Learn database design, normalization, document modeling, querying, indexing, and modern ORM/ODM integration.',
        topics: [
          'Relational vs NoSQL databases: When to choose which',
          'MongoDB foundations: Collections, documents, BSON types',
          'Mongoose ODM: Schema definitions, validations, and hooks',
          'Advanced MongoDB aggregation pipelines and indexing',
          'PostgreSQL foundations: Tables, constraints, foreign keys',
          'SQL queries: Joins, grouping, subqueries, and transactions (ACID)',
          'Modern ORM mapping with Prisma and database migrations',
          'Database indexing strategies for query performance optimization',
          'Data normalization (1NF, 2NF, 3NF) vs document denormalization',
          'Database backup, connection pooling, and connection security',
        ],
      },
      {
        number: 7,
        title: 'RESTful APIs, Security & Authentication',
        subtitle: 'Build Production-Hardened, Secure Web APIs',
        description:
          'Implement industry-standard authentication protocols, password security, token issuance, and defensive web practices.',
        topics: [
          'Authentication vs Authorization in web applications',
          'Password hashing and salting with bcrypt',
          'JSON Web Tokens (JWT): Signing, verification, and expiration',
          'Refresh token rotation and secure HTTP-Only cookie storage',
          'OAuth 2.0 social login integration (Google, GitHub)',
          'Role-Based Access Control (RBAC) & permission guards',
          'API security best practices: Rate limiting, Helmet, CORS',
          'Input sanitation & prevention of SQL Injection & NoSQL Injection',
          'Cross-Site Scripting (XSS) & CSRF mitigation techniques',
          'Automated API documentation with Swagger & OpenAPI',
        ],
      },
      {
        number: 8,
        title: 'Real-Time Communication & WebSockets',
        subtitle: 'Build Interactive, Event-Driven Features',
        description:
          'Harness WebSockets to build collaborative applications, live chat systems, activity feeds, and real-time dashboards.',
        topics: [
          'HTTP Polling vs Long Polling vs WebSockets vs SSE',
          'Socket.io architecture: Handshakes, connections, and events',
          'Broadcasting events, private messaging, and user rooms',
          'Managing connection state, reconnection, and disconnections',
          'WebSocket authentication and security with JWT',
          'Real-time notifications and activity feeds',
          'Building collaborative multi-user live editing features',
          'Scaling WebSockets with Redis Pub/Sub adapter',
          'Handling network latency and reconnection resilience',
          'Benchmarking WebSocket server concurrency and throughput',
        ],
      },
      {
        number: 9,
        title: 'Testing, Quality Assurance & Performance Tuning',
        subtitle: 'Deliver Bug-Free, High-Performance Software',
        description:
          'Implement test-driven development, unit testing, integration tests, and frontend/backend performance optimizations.',
        topics: [
          'Testing pyramid: Unit tests, integration tests, end-to-end tests',
          'Unit and component testing in React with Vitest & Testing Library',
          'Backend API testing with Jest, Supertest, and mock databases',
          'End-to-end user journey testing with Playwright or Cypress',
          'Static code analysis, ESLint, Prettier, and Husky pre-commit hooks',
          'Frontend performance: Core Web Vitals, lazy loading, memoization',
          'Backend caching strategies using Redis cache layers',
          'Database query analysis, execution plans, and query optimization',
          'Profiling memory leaks and event loop bottlenecks in Node.js',
          'Code coverage reports and automated test reporting',
        ],
      },
      {
        number: 10,
        title: 'Docker, DevOps & CI/CD Pipelines',
        subtitle: 'Containerize Applications & Automate Deployment Workflows',
        description:
          'Learn modern DevOps practices to package, test, build, and deploy full-stack systems reliably across environments.',
        topics: [
          'DevOps concepts and the modern software delivery lifecycle',
          'Docker essentials: Containers vs virtual machines',
          'Writing efficient Dockerfiles for Node.js and React applications',
          'Multi-stage Docker builds for minimal production image sizes',
          'Orchestrating multi-container apps with Docker Compose',
          'Version control mastery with Git: Branching strategies & Git Flow',
          'GitHub Actions: Writing automated build, lint, and test workflows',
          'Continuous Integration (CI) and Continuous Deployment (CD) setups',
          'Managing secrets and environment variables safely in CI/CD',
          'Docker image publishing to Docker Hub and container registries',
        ],
      },
      {
        number: 11,
        title: 'Production Cloud Deployment & System Architecture',
        subtitle: 'Launch Scalable Web Applications into the Cloud',
        description:
          'Deploy full-stack applications to cloud infrastructure with custom domains, SSL certificates, reverse proxies, and monitoring.',
        topics: [
          'Cloud hosting overview: IaaS, PaaS, and Serverless deployment',
          'Deploying Node.js applications on AWS EC2 & Render',
          'Deploying Next.js & React frontends on Vercel and AWS Amplify',
          'Configuring Nginx as a reverse proxy, load balancer & SSL termination',
          'Securing websites with Let’s Encrypt free SSL/TLS certificates',
          'Cloud storage integration with AWS S3 for user media uploads',
          'Managed cloud databases: MongoDB Atlas & AWS RDS PostgreSQL',
          'Domain configuration, DNS records (A, CNAME), and Cloudflare CDN',
          'Application uptime monitoring, health checks, and log streaming',
          'Full-stack system architecture review & production launch checklist',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical Full Stack Projects',
    subtitle: 'Learn by Building Real-World Production Applications',
    description:
      'CloudSwan believes the only way to become a proficient full-stack developer is through building production-grade software. You will develop six comprehensive portfolio projects featuring real databases, authentication, third-party APIs, and cloud deployments.',
    items: [
      {
        number: 1,
        title: 'Full-Featured E-Commerce Marketplace with Payment Gateway',
        description:
          'Build a multi-vendor online shopping platform with product search, filtering, cart management, checkout with Stripe payments, order tracking, and an administrative sales analytics dashboard.',
        focusArea: 'Full MERN Stack, Payment Gateway Integration & Admin Analytics',
        toolsUsed: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Tailwind CSS', 'Redux Toolkit'],
      },
      {
        number: 2,
        title: 'Multi-Tenant Project Management SaaS with KanBan Boards',
        description:
          'Develop an enterprise productivity SaaS featuring workspaces, real-time drag-and-drop KanBan boards, task assignment, deadline tracking, team member invitations, and automated email notifications.',
        focusArea: 'Next.js App Router, PostgreSQL Relational Data & Complex UI State',
        toolsUsed: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS', 'NextAuth.js'],
      },
      {
        number: 3,
        title: 'Interactive Team Collaboration Platform with Real-Time Chat',
        description:
          'Create a Slack-inspired collaboration platform featuring public and private channels, direct 1-to-1 messaging, presence indicators, typing indicators, file sharing, and real-time audio/video signaling.',
        focusArea: 'Bi-Directional WebSockets, Event Streaming & Real-Time Data',
        toolsUsed: ['Socket.io', 'Node.js', 'Express', 'React', 'Redis', 'MongoDB', 'WebRTC'],
      },
      {
        number: 4,
        title: 'Healthcare Appointment Booking & Patient Management System',
        description:
          'Build a HIPAA-conscious clinic management portal allowing patients to schedule doctor appointments, view lab reports, manage prescriptions, and receive SMS reminders, with distinct doctor, patient, and admin roles.',
        focusArea: 'Role-Based Access Control (RBAC), Data Security & Audit Trails',
        toolsUsed: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Twilio API', 'Docker'],
      },
      {
        number: 5,
        title: 'AI-Enhanced Content Management Platform & Developer Blog',
        description:
          'Architect a high-performance content engine with markdown authoring, live preview, syntax highlighting, algorithmic search, comments, automated SEO schema markup, and AI-assisted article summaries.',
        focusArea: 'Server-Side Rendering (SSR), Core Web Vitals & OpenAI API Integration',
        toolsUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB Atlas', 'OpenAI API', 'Vercel'],
      },
      {
        number: 6,
        title: 'Cloud-Native Job Board & Applicant Tracking System (ATS)',
        description:
          'Engineer a complete recruitment platform where employers post openings and review applicants with resume parsing, and candidates track applications, all packaged with Docker and deployed via CI/CD pipelines to AWS.',
        focusArea: 'Microservices Architecture, Docker Containerization & AWS Cloud Deployment',
        toolsUsed: ['React', 'Node.js', 'Docker', 'GitHub Actions', 'AWS EC2', 'AWS S3', 'PostgreSQL'],
      },
    ],
  },

  portfolio: {
    title: 'Build Your Full Stack Engineering Portfolio',
    subtitle: 'Showcase Verifiable Code & Live Web Applications to Hiring Managers',
    description:
      'Hiring managers look for verifiable proof of technical competence. At CloudSwan, you will build a public GitHub portfolio with production-deployed applications that demonstrate real engineering mastery.',
    deliverables: [
      'Production-deployed e-commerce application with Stripe payment processing',
      'Full-stack Next.js SaaS platform with PostgreSQL and Prisma ORM',
      'Real-time WebSocket chat application with user presence and rooms',
      'Production-hardened RESTful API with JWT authentication and Swagger documentation',
      'Modular React component design system with responsive Tailwind styling',
      'Dockerized multi-container full-stack application with Docker Compose',
      'Automated CI/CD workflow running test suites on GitHub Actions',
      'Public GitHub repository profile showcasing clean commit history and documentation',
      'Live custom-domain developer portfolio highlighting architecture case studies',
      'Comprehensive system architecture diagrams illustrating API and database structures',
    ],
    ctaText: 'Build Your Full Stack Portfolio',
  },

  targetAudiences: {
    title: 'Who Can Join This Course?',
    subtitle: 'Tailored for Ambitious Learners Across All Backgrounds',
    audiences: [
      {
        id: 'engineering-students',
        title: 'Engineering & BCA / MCA Students',
        description:
          'Gain practical industry-level web engineering skills to secure top software engineering campus placements.',
      },
      {
        id: 'fresh-graduates',
        title: 'Fresh Tech Graduates',
        description:
          'Bridge the gap between theoretical computer science and modern product development to land entry-level developer roles.',
      },
      {
        id: 'frontend-developers',
        title: 'Frontend Developers',
        description:
          'Expand into backend architecture, databases, API engineering, and DevOps to become complete Full Stack Engineers.',
      },
      {
        id: 'backend-developers',
        title: 'Backend Developers',
        description:
          'Master modern React, TypeScript, and UI design systems to deliver end-to-end software solutions autonomously.',
      },
      {
        id: 'qa-test-engineers',
        title: 'QA & Test Automation Engineers',
        description:
          'Transition from software testing into active web development and software architecture.',
      },
      {
        id: 'non-it-switchers',
        title: 'Career Switchers from Non-IT Domains',
        description:
          'Step-by-step foundational learning from programming basics to advanced web architecture with dedicated mentorship.',
      },
      {
        id: 'entrepreneurs',
        title: 'Startup Founders & Tech Enthusiasts',
        description:
          'Acquire the practical technical capabilities needed to build MVPs, web prototypes, and scalable SaaS products.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Career Opportunities',
    subtitle: 'Explore High-Demand Web & Software Engineering Roles',
    description:
      'Upon completing the Full Stack Web Development program, you will be prepared for technical interviews across diverse high-paying engineering roles in India and globally:',
    roles: [
      'Full Stack Web Developer',
      'MERN Stack Developer',
      'React / Frontend Engineer',
      'Node.js / Backend Engineer',
      'Software Development Engineer (SDE-1)',
      'Next.js Web Developer',
      'Web Application Engineer',
      'API & Microservices Developer',
      'JavaScript / TypeScript Developer',
      'Junior Cloud Application Engineer',
    ],
    disclaimer:
      'Employment outcomes depend on individual student dedication, portfolio quality, interview performance, and market conditions.',
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'The Modern Full Stack Web Engineering Toolchain',
    description:
      'Work with the exact technologies, libraries, and developer tools used by fast-growing startups and global tech enterprises.',
    categories: [
      {
        category: 'Frontend & UI',
        description: 'Modern component libraries and reactive styling',
        tools: ['HTML5', 'CSS3', 'Tailwind CSS', 'React 19', 'Next.js', 'TypeScript', 'Vite'],
      },
      {
        category: 'Backend & APIs',
        description: 'High-throughput servers and interface specifications',
        tools: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Socket.io', 'JWT', 'OAuth 2.0'],
      },
      {
        category: 'Databases & ORMs',
        description: 'Relational and document storage solutions',
        tools: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma ORM', 'Redis', 'MongoDB Atlas'],
      },
      {
        category: 'State & Data Fetching',
        description: 'Predictable client state and network synchronization',
        tools: ['Redux Toolkit', 'RTK Query', 'Zustand', 'React Hook Form', 'Zod', 'Axios'],
      },
      {
        category: 'DevOps & Cloud',
        description: 'Containerization, automation, and hosting platforms',
        tools: ['Docker', 'Docker Compose', 'Git', 'GitHub Actions', 'AWS EC2', 'AWS S3', 'Vercel', 'Render', 'Nginx'],
      },
      {
        category: 'Testing & Code Quality',
        description: 'Automated test runners and static analysis',
        tools: ['Vitest', 'Jest', 'React Testing Library', 'Supertest', 'ESLint', 'Prettier', 'Postman'],
      },
      {
        category: 'Productivity & Tooling',
        description: 'Modern developer workflow and debugging environments',
        tools: ['VS Code', 'Chrome DevTools', 'Figma', 'Swagger / OpenAPI', 'npm / pnpm', 'Linux / Bash'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan for Full Stack?',
    subtitle: 'Coimbatore’s Leading Software Engineering Finishing School',
    pillars: [
      {
        title: 'Project-First Pedagogical Model',
        description:
          'Learn theory by writing code. Spend over 80% of your course time creating functional software applications from scratch.',
      },
      {
        title: 'Current 2026 Industry Curriculum',
        description:
          'We teach modern standards: React 19, TypeScript, Next.js App Router, Docker, and Cloud Deployment—not outdated legacy stacks.',
      },
      {
        title: 'Dedicated Senior Mentors',
        description:
          'Receive direct guidance, 1-on-1 code reviews, and architectural feedback from practicing full-stack tech leads.',
      },
      {
        title: 'Production Deployment Focus',
        description:
          'Every project is containerized with Docker and deployed live on cloud hosting platforms with custom domains and SSL.',
      },
      {
        title: 'Comprehensive Placement Support',
        description:
          'Benefit from professional resume building, GitHub optimization, mock technical interviews, and placement drives in Coimbatore & Bangalore.',
      },
      {
        title: 'Flexible Learning Schedules',
        description:
          'Choose between regular weekday immersive tracks and weekend executive batches with both classroom and live online options.',
      },
      {
        title: 'Modern Lab Infrastructure',
        description:
          'Train in high-speed, fully equipped labs at our Saravanampatti and Gandhipuram centers with uninterrupted development support.',
      },
    ],
  },

  certification: {
    title: 'Full Stack Web Development Certification in Coimbatore',
    subtitle: 'Validate Your Full-Stack Engineering Expertise',
    description:
      'Upon successfully completing all modules, project submissions, and code reviews, you will receive CloudSwan’s accredited Full Stack Web Development Certificate. This credential validates your capability to build, test, and deploy production software systems.',
    highlights: [
      'Semantic HTML5 & Modern CSS3 / Tailwind UI Design',
      'JavaScript (ES6+) & Typesafe TypeScript Architecture',
      'React 19 Single Page Applications & Next.js SSR',
      'Node.js & Express RESTful Backend Server Engineering',
      'PostgreSQL Relational Schema Modeling & SQL Joins',
      'MongoDB NoSQL Document Modeling & Aggregations',
      'JWT Authentication, OAuth 2.0 & Role-Based Access Control',
      'Real-Time WebSockets & Event-Driven Communication',
      'Docker Containerization & Multi-Container Docker Compose',
      'Production Deployment on AWS, Vercel & Cloudflare CDN',
      'Automated CI/CD Testing with GitHub Actions',
    ],
    regionalFocus: {
      title: 'Full Stack Web Development Training in Tamil Nadu',
      description:
        'Coimbatore and the broader Western Tamil Nadu region have emerged as vibrant technology hubs, home to top IT parks including TIDEL Park Coimbatore, CHIL SEZ Saravanampatti, and numerous high-growth product startups. Product engineering companies in Coimbatore, Chennai, and Bengaluru actively recruit full-stack engineers who can independently build and maintain complex web platforms. CloudSwan provides regional learners with direct access to modern software development workflows, ensuring graduates are immediately productive in agile engineering teams.',
      keyAreas: [
        'TIDEL Park & CHIL SEZ Saravanampatti Proximity',
        'Coimbatore & Bengaluru Product Startup Placement Drives',
        'Real-World Enterprise Software Case Studies',
        'Classroom Labs in Saravanampatti & Gandhipuram',
      ],
    },
    ethicalHackingNote: {
      title: 'Industry Engineering Standards & Security Best Practices',
      subtitle: 'Building Resilient, Secure & Scalable Web Applications',
      description:
        'Modern full-stack engineering requires strict adherence to security and code quality standards. Throughout this course, learners are trained to write defensive code compliant with the OWASP Top 10 web application security guidelines, ensuring all applications are safeguarded against vulnerabilities.',
      keyFocusAreas: [
        'OWASP Top 10 Web Security Hygiene',
        'SQL & NoSQL Injection Prevention',
        'Cross-Site Scripting (XSS) & CSRF Defense',
        'Secure Password Hashing with Salted Bcrypt',
        'Secure HTTP-Only Cookies & Refresh Token Rotation',
        'API Rate Limiting & DoS Mitigation',
        'Environment Secret Protection in Git & Cloud',
        'Clean Code, SOLID Principles & Design Patterns',
      ],
      complianceWarning:
        'All software development and API integration exercises must follow ethical engineering standards and data protection compliance rules.',
    },
  },

  roadmap: {
    title: 'Full Stack Developer Career Roadmap',
    subtitle: 'A Step-by-Step Pathway from Beginner to Industry-Ready Software Engineer',
    steps: [
      {
        step: 1,
        title: 'Master Web Foundations & UI Layouts',
        description:
          'Learn semantic HTML5, modern CSS3, Flexbox, Grid, responsive design, and utility styling with Tailwind CSS.',
      },
      {
        step: 2,
        title: 'Master Modern JavaScript (ES6+)',
        description:
          'Understand closures, scopes, asynchronous event loops, Promises, async/await, and DOM manipulation.',
      },
      {
        step: 3,
        title: 'Adopt TypeScript for Type Safety',
        description:
          'Learn static typing, interfaces, custom types, generics, and compile-time error prevention.',
      },
      {
        step: 4,
        title: 'Build Interactive SPAs with React 19',
        description:
          'Master component architecture, hooks (useState, useEffect, useMemo), custom hooks, and React Router.',
      },
      {
        step: 5,
        title: 'Master State Management & Next.js',
        description:
          'Learn Redux Toolkit, Next.js App Router, Server Components, SSR, SSG, and Server Actions.',
      },
      {
        step: 6,
        title: 'Engineer Backend APIs with Node.js & Express',
        description:
          'Build RESTful APIs, configure middleware, handle errors gracefully, and structure code using MVC patterns.',
      },
      {
        step: 7,
        title: 'Design Databases with MongoDB & PostgreSQL',
        description:
          'Model schemas with Mongoose and Prisma, write optimized SQL queries, perform joins, and create indexes.',
      },
      {
        step: 8,
        title: 'Implement Authentication & Security',
        description:
          'Secure endpoints with JWT tokens, refresh tokens, bcrypt password hashing, and role-based permissions.',
      },
      {
        step: 9,
        title: 'Add Real-Time Features with WebSockets',
        description:
          'Integrate Socket.io for live bi-directional notifications, messaging channels, and real-time dashboard updates.',
      },
      {
        step: 10,
        title: 'Containerize with Docker & Automate CI/CD',
        description:
          'Write multi-stage Dockerfiles, configure Docker Compose, and build automated test workflows with GitHub Actions.',
      },
      {
        step: 11,
        title: 'Deploy Production Apps to the Cloud',
        description:
          'Deploy frontends on Vercel, backends on AWS EC2/Render, configure Nginx reverse proxies, SSL, and custom domains.',
      },
      {
        step: 12,
        title: 'Technical Interview Drills & Placement',
        description:
          'Practice data structure problems, mock system design discussions, polish your GitHub portfolio, and attend hiring drives.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-1',
      question: 'What is Full Stack Web Development?',
      answer:
        'Full Stack Web Development involves building both the client-side user interface (frontend) and the server, database, and API logic (backend) of web applications, along with deploying and maintaining them on cloud infrastructure.',
    },
    {
      id: 'faq-2',
      question: 'Can beginners with no coding background learn Full Stack Development?',
      answer:
        'Yes. The CloudSwan Full Stack curriculum begins with basic web foundations (HTML, CSS, and JavaScript) before advancing to complex frameworks. Our mentors provide step-by-step guidance tailored for beginners.',
    },
    {
      id: 'faq-3',
      question: 'What tech stack is taught in this course?',
      answer:
        'We teach the modern MERN & TypeScript stack: HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript, React 19, Next.js, Node.js, Express, MongoDB, PostgreSQL (with Prisma ORM), Docker, and AWS deployment.',
    },
    {
      id: 'faq-4',
      question: 'Why is TypeScript included in the curriculum?',
      answer:
        'TypeScript is the industry standard for modern web engineering. It eliminates entire classes of runtime bugs through static typing and is required by leading software product firms and enterprise engineering teams.',
    },
    {
      id: 'faq-5',
      question: 'How many real-world projects will I build during the course?',
      answer:
        'You will build six production-grade projects: an E-Commerce platform with Stripe, a Multi-Tenant SaaS with Next.js & PostgreSQL, a Real-Time WebSocket Chat Application, a Clinic Management System, an AI Blog CMS, and a Cloud-Native Job Board with Docker.',
    },
    {
      id: 'faq-6',
      question: 'Will I learn both SQL and NoSQL databases?',
      answer:
        'Yes. You will learn both MongoDB (NoSQL document store) with Mongoose, and PostgreSQL (relational SQL database) with Prisma ORM and raw SQL queries, preparing you for any database architecture in the industry.',
    },
    {
      id: 'faq-7',
      question: 'Does CloudSwan provide placement assistance for Full Stack developers?',
      answer:
        'Yes. CloudSwan provides comprehensive career support including resume writing, GitHub code reviews, portfolio hosting, mock technical interviews, LeetCode coding practice, and direct placement drives with partner companies.',
    },
    {
      id: 'faq-8',
      question: 'What are the batch timings and training modes available in Coimbatore?',
      answer:
        'We offer both weekday and weekend batches in classroom mode at our Saravanampatti and Gandhipuram campuses in Coimbatore, as well as live interactive online sessions with recorded backups.',
    },
    {
      id: 'faq-9',
      question: 'What salary packages can a fresher expect as a Full Stack Developer?',
      answer:
        'In India, entry-level full-stack developers typically command packages ranging from 4.0 LPA to 8.5 LPA, with experienced engineers and product firm recruits earning upwards of 12 to 20+ LPA.',
    },
    {
      id: 'faq-10',
      question: 'How is this course different from free online tutorials?',
      answer:
        'Free tutorials often provide disconnected code snippets without production standards. CloudSwan offers structured curriculum, daily mentor code reviews, production deployment experience, Docker containerization, and dedicated placement support.',
    },
    {
      id: 'faq-11',
      question: 'Will I receive a course completion certificate?',
      answer:
        'Yes. Upon completing the curriculum and successfully presenting your capstone projects, you will receive an accredited Full Stack Web Development Certificate from CloudSwan Solution.',
    },
    {
      id: 'faq-12',
      question: 'How can I enroll or book a demo session?',
      answer:
        'You can click the "Book a Free Counselling Session" button on this page, call our admissions team directly at +91 98765 43210, or walk into our Saravanampatti or Gandhipuram offices in Coimbatore.',
    },
  ],

  finalCta: {
    title: 'Launch Your Full Stack Developer Career',
    subtitle: 'Step into High-Demand Software Engineering with CloudSwan',
    checkpoints: [
      'Master React 19, TypeScript, Next.js, Node.js & Express.',
      'Model relational PostgreSQL and NoSQL MongoDB databases.',
      'Implement secure JWT authentication and role-based permissions.',
      'Build real-time apps with WebSockets and event streaming.',
      'Containerize applications with Docker & deploy to AWS.',
      'Complete 6 production portfolio capstones with placement support.',
    ],
    primaryCta: 'Book a Free Counselling Session',
    secondaryCta: 'Explore Course Curriculum',
  },
}
