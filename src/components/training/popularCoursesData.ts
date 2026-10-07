import React from 'react'
import {
  JavaIcon,
  PythonIcon,
  FullStackIcon,
  DataAnalyticsIcon,
  MernStackIcon,
  DotNetIcon,
  CloudEngineerIcon,
  DevOpsIcon,
  DigitalMarketingIcon,
  PhpIcon,
  SapIcon,
  SoftwareTestingIcon,
  UiUxIcon,
  AwsIcon,
  DataScienceIcon,
  CyberSecurityIcon,
  CppIcon,
  MobileAppIcon,
} from './techIcons'

export type CourseCategoryFilter =
  | 'all'
  | 'development'
  | 'cloud-devops'
  | 'data-ai'
  | 'testing'
  | 'design-marketing'
  | 'enterprise'

export interface CourseModule {
  title: string
  topics: string[]
}

export interface PopularCourse {
  id: string
  shortName: string
  fullName: string
  category: CourseCategoryFilter
  categoryLabel: string
  badge: string
  badgeColor: string
  tagline: string
  description: string
  duration: string
  mode: string
  level: string
  averageSalary: string
  rating: number
  learnerCount: string
  projectsCount: string
  skills: string[]
  hiringRoles: string[]
  icon: React.ComponentType<{ className?: string; size?: number }>
  gradientBg: string
  borderAccent: string
  glowColor: string
  modules: CourseModule[]
  enquirySubject: string
}

export const COURSE_CATEGORY_TABS: { id: CourseCategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Courses' },
  { id: 'development', label: 'Software & Web' },
  { id: 'cloud-devops', label: 'Cloud & DevOps' },
  { id: 'data-ai', label: 'Data & AI' },
  { id: 'testing', label: 'Testing & QA' },
  { id: 'design-marketing', label: 'Design & Marketing' },
  { id: 'enterprise', label: 'Enterprise (SAP)' },
]

export const POPULAR_COURSES: PopularCourse[] = [
  {
    id: 'java',
    shortName: 'Java',
    fullName: 'Java Full Stack Development',
    category: 'development',
    categoryLabel: 'Software & Web',
    badge: '🔥 Top Enrolled',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    tagline: 'Master Core Java, Spring Boot, Microservices & REST APIs with Enterprise Deployments',
    description:
      'Become a high-caliber Java developer. Master Java 21, object-oriented architecture, Spring Boot microservices, Hibernate ORM, Docker containerization, and modern relational SQL databases.',
    duration: '3.5 to 5 Months',
    mode: 'Classroom & Online',
    level: 'Beginner to Advanced',
    averageSalary: '5.0 - 13.5 LPA',
    rating: 4.9,
    learnerCount: '1,850+ Trained',
    projectsCount: '4 Live Capstone Projects',
    skills: ['Core Java 21', 'Spring Boot', 'Hibernate & JPA', 'Microservices', 'REST APIs', 'MySQL / PostgreSQL', 'Docker'],
    hiringRoles: ['Java Developer', 'Backend Software Engineer', 'Spring Boot Specialist', 'Enterprise Application Architect'],
    icon: JavaIcon,
    gradientBg: 'from-orange-500/10 via-amber-500/5 to-transparent',
    borderAccent: 'group-hover:border-orange-400 group-hover:shadow-orange-500/10',
    glowColor: 'rgba(234, 88, 12, 0.15)',
    modules: [
      {
        title: 'Module 1: Core Java Fundamentals & OOP',
        topics: ['Data Types, Operators & Control Flow', 'Object-Oriented Programming (OOP) in Depth', 'Exception Handling & Multithreading', 'Collections Framework & Java Streams API'],
      },
      {
        title: 'Module 2: Advanced Java & Database Architecture',
        topics: ['JDBC, Connection Pooling & HikariCP', 'Relational Database Design & MySQL Queries', 'Hibernate ORM, Mapping & HQL', 'Spring Framework Core & Inversion of Control (IoC)'],
      },
      {
        title: 'Module 3: Spring Boot & Microservices Engineering',
        topics: ['Spring Boot RESTful Web Services', 'Spring Data JPA & Repository Pattern', 'Microservices with Spring Cloud & Eureka', 'JWT Authentication & Spring Security 6'],
      },
      {
        title: 'Module 4: Deployment & Capstone Projects',
        topics: ['Dockerizing Spring Boot Services', 'E-Commerce Backend Microservices Project', 'Banking Management API with CI/CD', 'Git, Swagger & Production Debugging'],
      },
    ],
    enquirySubject: 'Java Full Stack Course - Coimbatore Batch',
  },
  {
    id: 'python',
    shortName: 'Python',
    fullName: 'Python Full Stack & Automation',
    category: 'development',
    categoryLabel: 'Software & Web',
    badge: '🚀 High In-Demand',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    tagline: 'Learn Python, Django, FastAPI, Data Wrangling & Automated System Workflows',
    description:
      'Unlock rapid software engineering with Python. Learn clean Pythonic architecture, Django full-stack web applications, FastAPI asynchronous services, and automated web scrapers.',
    duration: '3 to 4.5 Months',
    mode: 'Classroom & Online',
    level: 'Beginner Friendly',
    averageSalary: '4.8 - 12.0 LPA',
    rating: 4.9,
    learnerCount: '2,100+ Trained',
    projectsCount: '3 Live Capstone Projects',
    skills: ['Python 3.12', 'Django Framework', 'FastAPI', 'REST APIs', 'PostgreSQL', 'Git & GitHub', 'Task Automation'],
    hiringRoles: ['Python Developer', 'Django Backend Engineer', 'Full Stack Python Developer', 'Automation Specialist'],
    icon: PythonIcon,
    gradientBg: 'from-blue-500/10 via-sky-500/5 to-transparent',
    borderAccent: 'group-hover:border-blue-400 group-hover:shadow-blue-500/10',
    glowColor: 'rgba(56, 126, 184, 0.15)',
    modules: [
      {
        title: 'Module 1: Python Language Mastery',
        topics: ['Syntax, Dynamic Typing & Data Structures', 'Functions, Decorators & Generators', 'OOP: Inheritance, Polymorphism & Metaclasses', 'File I/O, Regular Expressions & Exception Handling'],
      },
      {
        title: 'Module 2: Web Frameworks (Django & FastAPI)',
        topics: ['Django MVT Architecture & Admin Panel', 'Django ORM, Migrations & Complex Querying', 'Building High-Performance APIs with FastAPI', 'Pydantic Data Validation & Async Operations'],
      },
      {
        title: 'Module 3: Database & Integrations',
        topics: ['PostgreSQL & SQLite Integration', 'User Authentication, OAuth2 & JWT Tokens', 'Celery Background Tasks with Redis', 'RESTful API Standards & Postman Testing'],
      },
      {
        title: 'Module 4: Real-World Industry Projects',
        topics: ['SaaS Analytics Portal with Django', 'Real-Time Notification API with FastAPI', 'Web Scraping & Automated Data Pipeline', 'Deployment on Linux VPS with Nginx & Gunicorn'],
      },
    ],
    enquirySubject: 'Python Full Stack Course - Coimbatore Batch',
  },
  {
    id: 'full-stack',
    shortName: 'Full Stack',
    fullName: 'Master Full Stack Web Development',
    category: 'development',
    categoryLabel: 'Software & Web',
    badge: '💼 100% Placement Track',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tagline: 'End-to-End Modern Web Engineering from Interactive Frontends to Scalable Cloud APIs',
    description:
      'Transform into an autonomous software engineer capable of delivering complete web applications. Learn HTML5, CSS3, modern JavaScript/TypeScript, React, Node.js, and Cloud deployment.',
    duration: '4 to 6 Months',
    mode: 'Classroom & Online',
    level: 'Comprehensive',
    averageSalary: '5.5 - 14.0 LPA',
    rating: 4.95,
    learnerCount: '2,400+ Trained',
    projectsCount: '5 Live Capstone Projects',
    skills: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'],
    hiringRoles: ['Full Stack Developer', 'Software Engineer', 'MERN Engineer', 'Frontend & Backend Lead'],
    icon: FullStackIcon,
    gradientBg: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    borderAccent: 'group-hover:border-emerald-400 group-hover:shadow-emerald-500/10',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    modules: [
      {
        title: 'Module 1: Modern Web Foundations & UI Architecture',
        topics: ['Semantic HTML5, Responsive CSS3 & Flexbox/Grid', 'Tailwind CSS & Mobile-First Design Systems', 'Modern JavaScript (ES6+), DOM Manipulation & Async/Await', 'TypeScript Fundamentals & Strong Typing'],
      },
      {
        title: 'Module 2: Frontend Engineering with React & Next.js',
        topics: ['React Component Lifecycle, Hooks & Custom Hooks', 'State Management (Redux Toolkit & Zustand)', 'Next.js App Router, SSR, SSG & Server Actions', 'Client-side Routing & Form Validations'],
      },
      {
        title: 'Module 3: Scalable Backend Services & APIs',
        topics: ['Node.js Runtime & Event Loop Architecture', 'Express.js RESTful API Architecture', 'Database Management: MongoDB & PostgreSQL', 'Authentication, JWT, Cookies & Security Guardrails'],
      },
      {
        title: 'Module 4: DevOps, Testing & Capstones',
        topics: ['Git Workflows, Branching & Pull Requests', 'Dockerization & CI/CD Pipelines with GitHub Actions', 'Deployment to AWS, Vercel & DigitalOcean', 'Full-Scale Multi-Tenant SaaS Capstone Project'],
      },
    ],
    enquirySubject: 'Full Stack Web Development - Coimbatore Batch',
  },
  {
    id: 'data-analytics',
    shortName: 'Data Analytics',
    fullName: 'Data Analytics & Business Intelligence',
    category: 'data-ai',
    categoryLabel: 'Data & AI',
    badge: '⭐ High Corporate Demand',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    tagline: 'Master Power BI, Advanced SQL, Python Analytics, Tableau & Executive Dashboards',
    description:
      'Transform complex unstructured data into actionable strategic intelligence. Learn advanced SQL querying, data cleaning with Python Pandas, DAX calculations, and interactive Power BI dashboards.',
    duration: '3 to 4 Months',
    mode: 'Classroom & Online',
    level: 'Beginner to Intermediate',
    averageSalary: '4.5 - 11.0 LPA',
    rating: 4.88,
    learnerCount: '1,650+ Trained',
    projectsCount: '4 BI Dashboards & Reports',
    skills: ['Power BI', 'Advanced SQL', 'Python (Pandas/NumPy)', 'Tableau', 'Excel & DAX', 'Data Warehousing', 'ETL Pipelines'],
    hiringRoles: ['Data Analyst', 'Business Intelligence Developer', 'Power BI Specialist', 'Reporting Analyst'],
    icon: DataAnalyticsIcon,
    gradientBg: 'from-cyan-500/10 via-blue-500/5 to-transparent',
    borderAccent: 'group-hover:border-cyan-400 group-hover:shadow-cyan-500/10',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    modules: [
      {
        title: 'Module 1: Excel Mastery & Analytical Modeling',
        topics: ['Advanced Formulas (XLOOKUP, INDEX/MATCH, Dynamic Arrays)', 'Pivot Tables, Slicers & Timeline Visualizations', 'Power Query: Data Ingestion & Transformation', 'Financial & Operational Forecasting Models'],
      },
      {
        title: 'Module 2: Advanced SQL for Business Analytics',
        topics: ['Relational Database Normalization & Schema Design', 'Complex Joins, Subqueries & Common Table Expressions (CTEs)', 'Window Functions (ROW_NUMBER, DENSE_RANK, LEAD/LAG)', 'Query Optimization & Indexing on Enterprise DBs'],
      },
      {
        title: 'Module 3: Python for Data Wrangling & Exploratory Analysis',
        topics: ['NumPy Arrays & Mathematical Computing', 'Pandas DataFrames: Cleaning, Merging & Reshaping', 'Data Visualization with Matplotlib & Seaborn', 'Exploratory Data Analysis (EDA) on Real Datasets'],
      },
      {
        title: 'Module 4: Power BI & Tableau Dashboards',
        topics: ['Data Modeling, Star Schemas & Relationships', 'DAX Measures, Calculated Columns & Time Intelligence', 'Interactive KPI Dashboards with Drill-Down Features', 'Publishing, Scheduled Refresh & Power BI Service'],
      },
    ],
    enquirySubject: 'Data Analytics Course - Coimbatore Batch',
  },
  {
    id: 'mern-stack',
    shortName: 'MERN Stack',
    fullName: 'MERN Stack Development (React + Node)',
    category: 'development',
    categoryLabel: 'Software & Web',
    badge: '🔥 Startup Favorite',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    tagline: 'Build Scalable JavaScript Apps with MongoDB, Express.js, React.js, and Node.js',
    description:
      'Specialize in the most requested JavaScript stack worldwide. Master single-page React applications, Express REST APIs, MongoDB document modeling, state management, and full-stack cloud deployment.',
    duration: '3.5 to 4.5 Months',
    mode: 'Classroom & Online',
    level: 'Intermediate',
    averageSalary: '5.2 - 13.0 LPA',
    rating: 4.92,
    learnerCount: '1,720+ Trained',
    projectsCount: '3 Full-Stack Web Apps',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'JWT Auth', 'WebSockets / Socket.io'],
    hiringRoles: ['MERN Stack Developer', 'React Frontend Specialist', 'Node.js Backend Developer', 'JavaScript Engineer'],
    icon: MernStackIcon,
    gradientBg: 'from-teal-500/10 via-cyan-500/5 to-transparent',
    borderAccent: 'group-hover:border-teal-400 group-hover:shadow-teal-500/10',
    glowColor: 'rgba(20, 184, 166, 0.15)',
    modules: [
      {
        title: 'Module 1: Advanced JavaScript & React Ecosystem',
        topics: ['ES6+, Closures, Event Loop & Promises', 'React 19 Architecture, Hooks & Context API', 'State Management with Redux Toolkit', 'Responsive UI with Tailwind CSS & Lucide Icons'],
      },
      {
        title: 'Module 2: Server-Side Engineering with Node & Express',
        topics: ['Node.js Modules, Streams & File System', 'Express.js Routing, Middleware & Error Handling', 'Building Robust RESTful Endpoints', 'Security: Helmet, Rate Limiting & CORS Policies'],
      },
      {
        title: 'Module 3: MongoDB Database & Data Modeling',
        topics: ['NoSQL Architecture vs Relational Systems', 'Mongoose ODM: Schemas, Models & Validation', 'Aggregation Pipeline & Indexing Strategies', 'CRUD Operations & Transactional Integrity'],
      },
      {
        title: 'Module 4: Real-Time Features & Production Deployment',
        topics: ['WebSockets & Socket.io for Real-Time Chat', 'Payment Gateway Integration (Stripe / Razorpay)', 'Dockerization & Cloud Deployment on AWS / Render', 'End-to-End E-Commerce & Collaboration Platform'],
      },
    ],
    enquirySubject: 'MERN Stack Development - Coimbatore Batch',
  },
  {
    id: 'dotnet',
    shortName: 'DotNet (.NET)',
    fullName: '.NET Core & C# Full Stack Development',
    category: 'development',
    categoryLabel: 'Software & Web',
    badge: '🏢 MNC Enterprise Track',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    tagline: 'Enterprise Software Engineering with C#, ASP.NET Core, Entity Framework & Azure',
    description:
      'Secure high-paying jobs in top MNCs and enterprise banking firms. Master C# 12, ASP.NET Core Web API, Entity Framework Core, SQL Server, and Microsoft Azure cloud integration.',
    duration: '3.5 to 5 Months',
    mode: 'Classroom & Online',
    level: 'Beginner to Advanced',
    averageSalary: '5.0 - 13.0 LPA',
    rating: 4.89,
    learnerCount: '1,350+ Trained',
    projectsCount: '3 Enterprise Solutions',
    skills: ['C# 12', 'ASP.NET Core', 'Entity Framework Core', 'MS SQL Server', 'Web API', 'Azure Fundamentals', 'Microservices'],
    hiringRoles: ['.NET Developer', 'C# Software Engineer', 'ASP.NET Backend Developer', 'Enterprise Systems Engineer'],
    icon: DotNetIcon,
    gradientBg: 'from-purple-500/10 via-indigo-500/5 to-transparent',
    borderAccent: 'group-hover:border-purple-400 group-hover:shadow-purple-500/10',
    glowColor: 'rgba(147, 83, 211, 0.15)',
    modules: [
      {
        title: 'Module 1: C# Object-Oriented Programming',
        topics: ['C# Syntax, Type System & Memory Management', 'OOP Principles, Interfaces & Generics', 'LINQ (Language Integrated Query) Expressions', 'Asynchronous Programming with async/await'],
      },
      {
        title: 'Module 2: ASP.NET Core & Web API Engineering',
        topics: ['ASP.NET Core Architecture, Dependency Injection', 'Building RESTful Web APIs with Controller & Minimal APIs', 'Input Validation, Exception Filters & Logging (Serilog)', 'JWT Token Authentication & Role-Based Authorization'],
      },
      {
        title: 'Module 3: Entity Framework Core & SQL Server',
        topics: ['Code-First vs Database-First Workflows', 'EF Core Migrations, Relationships & Lazy Loading', 'MS SQL Server Stored Procedures & Triggers', 'Repository Pattern & Unit of Work'],
      },
      {
        title: 'Module 4: Azure Cloud & Capstone Project',
        topics: ['Deploying Web APIs to Azure App Services', 'Azure SQL Database & Key Vault Secrets', 'Docker Containers for .NET Microservices', 'Hospital Management Enterprise Portal Capstone'],
      },
    ],
    enquirySubject: 'DotNet Core Training - Coimbatore Batch',
  },
  {
    id: 'cloud-engineer',
    shortName: 'Cloud Engineer',
    fullName: 'Multi-Cloud Architecture & Administration',
    category: 'cloud-devops',
    categoryLabel: 'Cloud & DevOps',
    badge: '☁️ High Growth Career',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    tagline: 'Architect, Deploy & Secure Scalable Cloud Infrastructures on AWS and Microsoft Azure',
    description:
      'Learn complete cloud systems management. Master computing, storage, VPC networking, security policies, high-availability architecture, and cloud cost governance across AWS and Azure.',
    duration: '3 to 4 Months',
    mode: 'Classroom & Online',
    level: 'All Levels',
    averageSalary: '5.5 - 14.5 LPA',
    rating: 4.91,
    learnerCount: '1,500+ Trained',
    projectsCount: '4 Real Cloud Infrastructures',
    skills: ['AWS Services', 'Microsoft Azure', 'Linux Administration', 'VPC & Networking', 'Cloud Security (IAM)', 'Cost Optimization'],
    hiringRoles: ['Cloud Engineer', 'Cloud Administrator', 'AWS Solutions Associate', 'Cloud Operations Engineer'],
    icon: CloudEngineerIcon,
    gradientBg: 'from-sky-500/10 via-cyan-500/5 to-transparent',
    borderAccent: 'group-hover:border-sky-400 group-hover:shadow-sky-500/10',
    glowColor: 'rgba(14, 165, 233, 0.15)',
    modules: [
      {
        title: 'Module 1: Linux & Networking Foundations',
        topics: ['Linux CLI, User Management & Permissions', 'TCP/IP, DNS, Subnets, CIDR & Routing Basics', 'Bash Shell Scripting for System Automation', 'SSH, Firewall Configuration & Security Hardening'],
      },
      {
        title: 'Module 2: AWS Core Infrastructure Services',
        topics: ['Amazon EC2 (Instances, AMIs, Auto Scaling)', 'S3 Storage Classes, Lifecycle Rules & Versioning', 'VPC Architecture: Public/Private Subnets & NAT Gateways', 'IAM Roles, Policies, MFA & Security Best Practices'],
      },
      {
        title: 'Module 3: Azure Cloud Essentials & Hybrid Networks',
        topics: ['Azure Virtual Machines & Virtual Networks (VNet)', 'Azure Blob Storage & Azure Active Directory (Entra ID)', 'Load Balancers, Application Gateways & CDN', 'Monitoring with AWS CloudWatch & Azure Monitor'],
      },
      {
        title: 'Module 4: High Availability Architecture & Capstone',
        topics: ['Multi-Region Fault-Tolerant Architectures', 'Disaster Recovery (RTO / RPO) Planning', 'Cloud Cost Management & Resource Optimization', 'Automated Dual-Tier Cloud Deployment Capstone'],
      },
    ],
    enquirySubject: 'Cloud Engineer Training - Coimbatore Batch',
  },
  {
    id: 'devops',
    shortName: 'DevOps',
    fullName: 'DevOps & Site Reliability Engineering (SRE)',
    category: 'cloud-devops',
    categoryLabel: 'Cloud & DevOps',
    badge: '🚀 Highest Starting Packages',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    tagline: 'Master Docker, Kubernetes, Jenkins, Terraform, CI/CD Pipelines & Infrastructure as Code',
    description:
      'Bridge code and operations. Build automated deployment pipelines, orchestrate microservices with Kubernetes, manage cloud infrastructure with Terraform, and monitor production with Prometheus & Grafana.',
    duration: '3.5 to 5 Months',
    mode: 'Classroom & Online',
    level: 'Intermediate to Advanced',
    averageSalary: '6.5 - 16.0 LPA',
    rating: 4.96,
    learnerCount: '1,400+ Trained',
    projectsCount: '4 Automated CI/CD Pipelines',
    skills: ['Docker', 'Kubernetes (K8s)', 'Jenkins CI/CD', 'Terraform', 'Ansible', 'GitOps & GitHub Actions', 'Prometheus & Grafana'],
    hiringRoles: ['DevOps Engineer', 'SRE (Site Reliability Engineer)', 'Platform Engineer', 'Automation Architect'],
    icon: DevOpsIcon,
    gradientBg: 'from-indigo-500/10 via-purple-500/5 to-transparent',
    borderAccent: 'group-hover:border-indigo-400 group-hover:shadow-indigo-500/10',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    modules: [
      {
        title: 'Module 1: Version Control & CI/CD Pipelines',
        topics: ['Git Branching Strategies & GitOps Fundamentals', 'Jenkins Master-Slave Setup & Declarative Pipelines', 'GitHub Actions Workflows for Continuous Integration', 'Automated Testing & SonarQube Code Quality Gates'],
      },
      {
        title: 'Module 2: Containerization with Docker',
        topics: ['Docker Engine Architecture & Dockerfile Best Practices', 'Multi-Stage Builds & Image Optimization', 'Docker Compose for Multi-Container Applications', 'Docker Networking, Volumes & Docker Hub Registries'],
      },
      {
        title: 'Module 3: Container Orchestration with Kubernetes',
        topics: ['Kubernetes Cluster Architecture (Master/Worker Nodes)', 'Pods, Deployments, ReplicaSets & Services', 'ConfigMaps, Secrets, Persistent Volumes & Claims', 'Ingress Controllers, Helm Charts & Rolling Updates'],
      },
      {
        title: 'Module 4: Infrastructure as Code (IaC) & Observability',
        topics: ['Terraform HCL: Providers, Resources, State & Modules', 'Ansible Playbooks for Configuration Management', 'Monitoring Infrastructure with Prometheus', 'Log Aggregation & Visualization with Grafana Dashboards'],
      },
    ],
    enquirySubject: 'DevOps & SRE Course - Coimbatore Batch',
  },
  {
    id: 'digital-marketing',
    shortName: 'Digital Marketing',
    fullName: 'Performance Digital Marketing & SEO Strategy',
    category: 'design-marketing',
    categoryLabel: 'Design & Marketing',
    badge: '📈 Live Ad Spends Included',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    tagline: 'Master Search Engine Optimization, Google Ads, Meta Ads, Social Media & GA4 Tracking',
    description:
      'Gain practical campaign experience managing real advertising budgets. Master technical SEO, Google Search/PPC advertising, Meta Ads Manager, lead generation funnels, and conversion rate optimization.',
    duration: '2.5 to 3.5 Months',
    mode: 'Classroom & Online',
    level: 'Beginner Friendly',
    averageSalary: '3.8 - 9.5 LPA',
    rating: 4.87,
    learnerCount: '1,900+ Trained',
    projectsCount: '5 Live Ad Campaigns',
    skills: ['Advanced SEO', 'Google Ads (PPC)', 'Meta Ads (FB/IG)', 'Google Analytics 4', 'Content Strategy', 'Email Marketing', 'Conversion Optimization'],
    hiringRoles: ['Digital Marketing Executive', 'SEO Specialist', 'Performance Marketer', 'Growth Marketing Lead'],
    icon: DigitalMarketingIcon,
    gradientBg: 'from-rose-500/10 via-pink-500/5 to-transparent',
    borderAccent: 'group-hover:border-rose-400 group-hover:shadow-rose-500/10',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    modules: [
      {
        title: 'Module 1: Search Engine Optimization (SEO)',
        topics: ['Keyword Research & Competitor Gap Analysis', 'On-Page SEO: Meta Tags, URL Structures & Internal Links', 'Technical SEO: XML Sitemaps, Robots.txt & Core Web Vitals', 'Off-Page SEO: High-Authority Backlink Strategies'],
      },
      {
        title: 'Module 2: Google Ads (Search, Display & Video PPC)',
        topics: ['Google Ads Account Setup & Campaign Architectures', 'Search Campaigns, Match Types & Quality Score Mastery', 'Performance Max (PMax) Campaigns & Display Remarketing', 'Bidding Strategies: Target CPA & Target ROAS'],
      },
      {
        title: 'Module 3: Social Media & Meta Advertising',
        topics: ['Meta Ads Manager (Facebook & Instagram)', 'Audience Segmentation: Custom & Lookalike Audiences', 'Meta Pixel Setup, Event Tracking & CAPI Integration', 'Creative Copywriting & High-Converting Video Ad Hooks'],
      },
      {
        title: 'Module 4: Analytics, Email & Growth Funnels',
        topics: ['Google Analytics 4 (GA4): Events, Funnels & Conversions', 'Google Tag Manager (GTM) Container Configuration', 'Email Automation Workflows (Mailchimp / Klaviyo)', 'Live Budget Campaign Execution & Client Reporting'],
      },
    ],
    enquirySubject: 'Digital Marketing Training - Coimbatore Batch',
  },
  {
    id: 'php',
    shortName: 'PHP',
    fullName: 'PHP 8 & Laravel Full Stack Web Development',
    category: 'development',
    categoryLabel: 'Software & Web',
    badge: '🌐 Web Standard',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    tagline: 'Modern PHP 8+, Laravel MVC Framework, MySQL Databases & RESTful Web APIs',
    description:
      'Learn modern PHP and the beloved Laravel framework. Build rock-solid web applications, e-commerce stores, authentication workflows, payment gateways, and scalable database-driven websites.',
    duration: '3 to 4 Months',
    mode: 'Classroom & Online',
    level: 'Beginner to Intermediate',
    averageSalary: '4.2 - 10.5 LPA',
    rating: 4.85,
    learnerCount: '1,250+ Trained',
    projectsCount: '3 Live Web Platforms',
    skills: ['PHP 8.3', 'Laravel 11', 'MySQL', 'Blade Templating', 'RESTful APIs', 'Composer & Git', 'Payment Gateways'],
    hiringRoles: ['PHP Developer', 'Laravel Web Engineer', 'Backend PHP Specialist', 'Web Application Consultant'],
    icon: PhpIcon,
    gradientBg: 'from-indigo-500/10 via-blue-500/5 to-transparent',
    borderAccent: 'group-hover:border-indigo-400 group-hover:shadow-indigo-500/10',
    glowColor: 'rgba(79, 93, 149, 0.15)',
    modules: [
      {
        title: 'Module 1: Modern PHP 8 Language Essentials',
        topics: ['PHP 8 Syntax, Strong Typing & Attributes', 'OOP in PHP: Classes, Inheritance, Interfaces & Traits', 'Form Handling, Validation, Sessions & Cookies', 'Database Connectivity with PDO & Prepared Statements'],
      },
      {
        title: 'Module 2: Laravel Framework Core & MVC Architecture',
        topics: ['Laravel Directory Structure & Routing Mechanics', 'Blade Templating Engine & Reusable Components', 'Controllers, Middleware & Request Lifecycle', 'Form Requests & Server-Side Validation'],
      },
      {
        title: 'Module 3: Eloquent ORM & Relational Databases',
        topics: ['Database Migrations, Seeders & Factories', 'Eloquent Relationships (One-to-One, One-to-Many, Polymorphic)', 'Query Scopes, Soft Deletes & Eager Loading', 'Authentication Scaffolding (Breeze & Sanctum)'],
      },
      {
        title: 'Module 4: API Development & Capstone Project',
        topics: ['Building JSON REST APIs with Resource Collections', 'Razorpay / Stripe Payment Gateway Integration', 'Role-Based Access Control (Spatie Permissions)', 'Multi-Vendor E-Commerce Portal Capstone'],
      },
    ],
    enquirySubject: 'PHP & Laravel Course - Coimbatore Batch',
  },
  {
    id: 'sap',
    shortName: 'SAP',
    fullName: 'SAP ERP Modules (FICO / MM / SD / S/4HANA)',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP',
    badge: '🏛️ Global Enterprise Certification',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    tagline: 'Master Enterprise Resource Planning, Financials, Supply Chain & Logistics Workflows',
    description:
      'Step into lucrative enterprise consulting careers. Learn business process integration, configuration, financial accounting (FICO), materials management (MM), and sales distribution (SD) on SAP S/4HANA.',
    duration: '3 to 4.5 Months',
    mode: 'Classroom & Online',
    level: 'Professional',
    averageSalary: '5.5 - 14.0 LPA',
    rating: 4.88,
    learnerCount: '980+ Trained',
    projectsCount: '3 Enterprise Simulations',
    skills: ['SAP S/4HANA', 'SAP FICO (Finance)', 'SAP MM (Materials)', 'SAP SD (Sales)', 'General Ledger & AP/AR', 'Enterprise Master Data'],
    hiringRoles: ['SAP Functional Consultant', 'SAP FICO Analyst', 'SAP Associate Consultant', 'ERP Systems Analyst'],
    icon: SapIcon,
    gradientBg: 'from-blue-600/10 via-cyan-500/5 to-transparent',
    borderAccent: 'group-hover:border-blue-500 group-hover:shadow-blue-500/10',
    glowColor: 'rgba(0, 143, 211, 0.15)',
    modules: [
      {
        title: 'Module 1: Enterprise ERP & SAP Navigation',
        topics: ['Overview of Enterprise Resource Planning (ERP)', 'SAP GUI & SAP Fiori Launchpad Interface', 'Enterprise Organizational Structure Setup', 'Master Data Management & Business Partners'],
      },
      {
        title: 'Module 2: SAP FICO (Financial & Management Accounting)',
        topics: ['General Ledger (G/L) Accounting & Chart of Accounts', 'Accounts Payable (AP) & Accounts Receivable (AR)', 'Asset Accounting & Depreciation Keys', 'Bank Ledger Configuration & Electronic Bank Statements (EBS)'],
      },
      {
        title: 'Module 3: SAP MM & SD (Supply Chain & Sales Integration)',
        topics: ['Procure-to-Pay (P2P) Cycle & Purchase Orders', 'Inventory Management, Goods Receipt & Invoice Verification', 'Order-to-Cash (O2C) Cycle & Sales Order Processing', 'Billing, Pricing Conditions & Shipping Configurations'],
      },
      {
        title: 'Module 4: End-to-End Enterprise Implementation',
        topics: ['Integration Testing Across FICO, MM & SD', 'Cutover Activities & Data Migration with LTMC', 'Reporting, Financial Statements & Management Cockpits', 'Real MNC Implementation Case Study Simulation'],
      },
    ],
    enquirySubject: 'SAP ERP Training - Coimbatore Batch',
  },
  {
    id: 'software-testing',
    shortName: 'Software Testing',
    fullName: 'Software Testing (Manual + Automation Selenium)',
    category: 'testing',
    categoryLabel: 'Testing & QA',
    badge: '🛡️ High Fresher Hiring Rate',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tagline: 'Master Manual QA, Selenium WebDriver, TestNG, API Testing Postman & Cucumber BDD',
    description:
      'Launch a guaranteed career in software quality assurance. Master SDLC/STLC test cases, defect life cycle in JIRA, Selenium WebDriver automation in Java/Python, and Postman REST API validation.',
    duration: '2.5 to 4 Months',
    mode: 'Classroom & Online',
    level: 'Beginner Friendly',
    averageSalary: '4.2 - 10.0 LPA',
    rating: 4.9,
    learnerCount: '1,950+ Trained',
    projectsCount: '4 Live Testing Frameworks',
    skills: ['Manual Testing', 'Selenium WebDriver', 'Java / Python for QA', 'Postman & API Testing', 'TestNG & JUnit', 'Cucumber BDD', 'JIRA Defect Tracking'],
    hiringRoles: ['QA Automation Engineer', 'Software Test Engineer', 'Manual QA Tester', 'SDET (Software Development Engineer in Test)'],
    icon: SoftwareTestingIcon,
    gradientBg: 'from-emerald-500/10 via-green-500/5 to-transparent',
    borderAccent: 'group-hover:border-emerald-400 group-hover:shadow-emerald-500/10',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    modules: [
      {
        title: 'Module 1: Manual Software Testing & QA Process',
        topics: ['Software Testing Principles, SDLC & STLC Phases', 'Test Scenarios, Test Cases & Traceability Matrix (RTM)', 'Black Box Testing Techniques (Boundary Value, Equivalence)', 'Defect Life Cycle & Bug Reporting in Atlassian JIRA'],
      },
      {
        title: 'Module 2: Automation Testing with Selenium WebDriver',
        topics: ['Core Java / Python Fundamentals for Automation', 'Selenium Architecture, Locators (XPath, CSS Selectors)', 'Handling Dynamic Web Elements, Dropdowns & Alerts', 'Synchronization: Implicit, Explicit & Fluent Waits'],
      },
      {
        title: 'Module 3: Automation Frameworks & BDD',
        topics: ['TestNG Framework: Annotations, Assertions & Parallel Execution', 'Page Object Model (POM) Design Pattern', 'Cucumber BDD: Feature Files, Step Definitions & Gherkin', 'ExtentReports for Automated HTML Test Reports'],
      },
      {
        title: 'Module 4: API Testing, Performance & CI/CD Integration',
        topics: ['REST API Fundamentals & Status Codes', 'Postman: Automated API Collections & Pre-Request Scripts', 'RestAssured Library for API Automation', 'Integrating Test Suites with Jenkins CI/CD'],
      },
    ],
    enquirySubject: 'Software Testing Course - Coimbatore Batch',
  },
  {
    id: 'ui-ux',
    shortName: 'UI & UX',
    fullName: 'UI/UX Product Design & Figma Prototyping',
    category: 'design-marketing',
    categoryLabel: 'Design & Marketing',
    badge: '🎨 Creative High Paying',
    badgeColor: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
    tagline: 'Master User Research, Information Architecture, Wireframing, Figma & Micro-Interactions',
    description:
      'Design digital experiences users love. Learn human-centered UX research, design thinking, wireframing, interactive Figma prototypes, design systems with variables, and usability testing.',
    duration: '2.5 to 3.5 Months',
    mode: 'Classroom & Online',
    level: 'Beginner to Intermediate',
    averageSalary: '4.5 - 11.5 LPA',
    rating: 4.93,
    learnerCount: '1,420+ Trained',
    projectsCount: '3 Comprehensive Case Studies',
    skills: ['Figma Mastery', 'User Research & Personas', 'Wireframing & Prototyping', 'Design Systems & Tokens', 'Micro-Interactions', 'Usability Testing', 'Responsive Web & App Design'],
    hiringRoles: ['UI/UX Designer', 'Product Designer', 'Interaction Designer', 'Figma Design System Specialist'],
    icon: UiUxIcon,
    gradientBg: 'from-fuchsia-500/10 via-pink-500/5 to-transparent',
    borderAccent: 'group-hover:border-fuchsia-400 group-hover:shadow-fuchsia-500/10',
    glowColor: 'rgba(192, 38, 211, 0.15)',
    modules: [
      {
        title: 'Module 1: Design Thinking & UX Discovery',
        topics: ['Double Diamond Design Framework & User Centered Design', 'User Research Methodologies: Interviews & Surveys', 'User Personas, Empathy Maps & Journey Maps', 'Information Architecture & Card Sorting'],
      },
      {
        title: 'Module 2: Wireframing & Low-Fidelity Layouts',
        topics: ['Paper Wireframing & Rapid Sketching', 'Digital Wireframes in Figma for Mobile & Web', 'Grid Systems, Layout Principles & Visual Hierarchy', 'User Flow Diagrams & Clickable Low-Fi Walkthroughs'],
      },
      {
        title: 'Module 3: High-Fidelity UI Design & Figma Mastery',
        topics: ['Color Theory, Contrast Accessibility (WCAG) & Typography', 'Auto-Layout, Nested Frames & Responsive Resizing', 'Components, Variants & Figma Variables (Tokens)', 'Interactive Prototyping with Smart Animate'],
      },
      {
        title: 'Module 4: Usability Testing, Handoff & Portfolio',
        topics: ['Usability Testing Sessions & Cognitive Walkthroughs', 'Developer Handoff: Specs, Assets & Annotations', 'Designing an Enterprise FinTech & Food Delivery App', 'Publishing Industry-Ready Behance / Dribbble Case Studies'],
      },
    ],
    enquirySubject: 'UI/UX Design Course - Coimbatore Batch',
  },
  {
    id: 'aws',
    shortName: 'AWS',
    fullName: 'AWS Certified Solutions Architect & SysOps',
    category: 'cloud-devops',
    categoryLabel: 'Cloud & DevOps',
    badge: '🏆 Global Certification Ready',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    tagline: 'Pass AWS SAA-C03 & Master Enterprise Cloud Architecture, Security & Serverless',
    description:
      'Clear your AWS certification and master production cloud engineering. Hands-on labs covering EC2, S3, RDS, Lambda serverless, VPC private subnets, Route 53, CloudFront, and IAM security.',
    duration: '2.5 to 4 Months',
    mode: 'Classroom & Online',
    level: 'Beginner to Advanced',
    averageSalary: '5.8 - 15.0 LPA',
    rating: 4.94,
    learnerCount: '1,680+ Trained',
    projectsCount: '4 Production Cloud Deployments',
    skills: ['AWS EC2 & S3', 'VPC & Networking', 'AWS Lambda Serverless', 'RDS & DynamoDB', 'CloudFront & Route 53', 'IAM & CloudTrail', 'CloudFormation'],
    hiringRoles: ['AWS Cloud Architect', 'AWS Cloud Consultant', 'Cloud Infrastructure Engineer', 'AWS SysOps Administrator'],
    icon: AwsIcon,
    gradientBg: 'from-amber-500/10 via-orange-500/5 to-transparent',
    borderAccent: 'group-hover:border-amber-400 group-hover:shadow-amber-500/10',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    modules: [
      {
        title: 'Module 1: AWS Global Infrastructure & Compute',
        topics: ['Regions, Availability Zones & Edge Locations', 'Amazon EC2: Instance Types, EBS Volumes, Snapshots', 'Auto Scaling Groups & Elastic Load Balancer (ALB / NLB)', 'AWS CLI & SDK Configuration'],
      },
      {
        title: 'Module 2: Storage & Managed Relational/NoSQL Databases',
        topics: ['Amazon S3: Buckets, Security, Versioning & Replication', 'Amazon RDS: Multi-AZ Failover, Read Replicas & Aurora', 'Amazon DynamoDB: Keys, Secondary Indexes & Partitioning', 'EFS & FSx Elastic Shared File Systems'],
      },
      {
        title: 'Module 3: Advanced VPC Networking & Enterprise Security',
        topics: ['Custom VPC Setup: Public & Private Subnets, Route Tables', 'NAT Gateways, Internet Gateways & Bastion Hosts', 'VPC Peering, Transit Gateway & Direct Connect', 'IAM Policies, Roles, STS, KMS Encryption & CloudTrail'],
      },
      {
        title: 'Module 4: Serverless, Monitoring & Exam Prep',
        topics: ['AWS Lambda, API Gateway & Event-Driven Architecture', 'Amazon SNS, SQS & CloudWatch Alarms & Dashboards', 'Infrastructure as Code with AWS CloudFormation', 'Official SAA-C03 Certification Mock Exam Drills'],
      },
    ],
    enquirySubject: 'AWS Certification Training - Coimbatore Batch',
  },
  {
    id: 'data-science',
    shortName: 'Data Science & AI',
    fullName: 'Data Science, Machine Learning & Generative AI',
    category: 'data-ai',
    categoryLabel: 'Data & AI',
    badge: '🧠 2026 Trending',
    badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
    tagline: 'Master Predictive Machine Learning, Deep Neural Networks, NLP & LLM Integrations',
    description:
      'Step into the artificial intelligence revolution. Master Python for ML, Scikit-Learn algorithms, PyTorch neural networks, Natural Language Processing, and Generative AI prompt engineering.',
    duration: '4 to 6 Months',
    mode: 'Classroom & Online',
    level: 'Intermediate to Advanced',
    averageSalary: '6.0 - 15.5 LPA',
    rating: 4.95,
    learnerCount: '1,320+ Trained',
    projectsCount: '4 Live AI/ML Models',
    skills: ['Python for AI', 'Scikit-Learn', 'PyTorch / TensorFlow', 'Machine Learning Models', 'Deep Learning & CNN', 'Generative AI & LLMs', 'Model Deployment (Streamlit)'],
    hiringRoles: ['Data Scientist', 'Machine Learning Engineer', 'AI Specialist', 'Predictive Modeling Consultant'],
    icon: DataScienceIcon,
    gradientBg: 'from-violet-500/10 via-purple-500/5 to-transparent',
    borderAccent: 'group-hover:border-violet-400 group-hover:shadow-violet-500/10',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    modules: [
      {
        title: 'Module 1: Mathematics & Statistics for AI',
        topics: ['Linear Algebra: Vectors, Matrices & Matrix Factorization', 'Probability Distributions, Hypothesis Testing & Bayes Theorem', 'Calculus for Optimization: Gradients & Loss Functions', 'Data Exploration & Feature Engineering in Python'],
      },
      {
        title: 'Module 2: Supervised & Unsupervised Machine Learning',
        topics: ['Linear & Logistic Regression, Decision Trees & Random Forests', 'Support Vector Machines (SVM) & Gradient Boosting (XGBoost)', 'Clustering: K-Means, Hierarchical & PCA Dimensionality Reduction', 'Hyperparameter Tuning, Cross-Validation & Metric Evaluation'],
      },
      {
        title: 'Module 3: Deep Learning & Computer Vision',
        topics: ['Neural Network Architectures & Backpropagation', 'Building Models with PyTorch and TensorFlow', 'Convolutional Neural Networks (CNNs) for Image Classification', 'Recurrent Neural Networks (RNN/LSTM) for Time-Series'],
      },
      {
        title: 'Module 4: Generative AI, LLMs & Model Deployment',
        topics: ['Transformers Architecture & Attention Mechanisms', 'Fine-Tuning Open Source LLMs & LangChain Integration', 'Retrieval-Augmented Generation (RAG) with Vector Databases', 'Building and Deploying ML Web Apps with Streamlit & FastAPI'],
      },
    ],
    enquirySubject: 'Data Science & AI Training - Coimbatore Batch',
  },
  {
    id: 'cyber-security',
    shortName: 'Cyber Security',
    fullName: 'Cyber Security, Ethical Hacking & SOC Analyst',
    category: 'cloud-devops',
    categoryLabel: 'Security & Systems',
    badge: '🛡️ Critical Global Need',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    tagline: 'Master Penetration Testing, Network Defense, Kali Linux, Wireshark & Incident Response',
    description:
      'Defend enterprise digital assets against modern cyber threats. Master vulnerability scanning, ethical hacking methodologies, network packet analysis, SIEM log monitoring, and defense triage.',
    duration: '3.5 to 5 Months',
    mode: 'Classroom & Online',
    level: 'All Levels',
    averageSalary: '5.2 - 13.5 LPA',
    rating: 4.88,
    learnerCount: '1,120+ Trained',
    projectsCount: '3 Live Security Audits',
    skills: ['Kali Linux', 'Network Penetration Testing', 'Wireshark & Nmap', 'Metasploit & Burp Suite', 'Web App Security (OWASP Top 10)', 'SIEM & SOC Tools', 'Incident Handling'],
    hiringRoles: ['SOC Analyst', 'Cyber Security Engineer', 'Ethical Hacker / Pen Tester', 'Information Security Specialist'],
    icon: CyberSecurityIcon,
    gradientBg: 'from-red-500/10 via-rose-500/5 to-transparent',
    borderAccent: 'group-hover:border-red-400 group-hover:shadow-red-500/10',
    glowColor: 'rgba(239, 68, 68, 0.15)',
    modules: [
      {
        title: 'Module 1: Cyber Security & Network Fundamentals',
        topics: ['OSI Model, TCP/IP Protocols & Port Analysis', 'Linux Commands & Kali Linux Toolkit Environment', 'Information Gathering & Footprinting with Nmap', 'Network Packet Sniffing with Wireshark'],
      },
      {
        title: 'Module 2: Vulnerability Assessment & System Hacking',
        topics: ['Vulnerability Scanners (Nessus & OpenVAS)', 'Exploitation Frameworks: Metasploit in Action', 'Password Cracking, Privilege Escalation & Social Engineering', 'Malware Analysis Basics & Antivirus Evasion'],
      },
      {
        title: 'Module 3: Web Application Penetration Testing',
        topics: ['OWASP Top 10 Vulnerabilities Explained', 'SQL Injection (SQLi) & Cross-Site Scripting (XSS)', 'Burp Suite Interception Proxy & Payload Fuzzing', 'API Security & Authentication Flaw Audits'],
      },
      {
        title: 'Module 4: Security Operations Center (SOC) & Defense',
        topics: ['SIEM Architecture: Splunk & Elastic Security', 'Log Correlation, Threat Hunting & Incident Response', 'Firewall, IDS/IPS Configuration & Rules', 'Live Security Audit Simulation & Pen Test Reporting'],
      },
    ],
    enquirySubject: 'Cyber Security Course - Coimbatore Batch',
  },
  {
    id: 'cpp',
    shortName: 'C & C++',
    fullName: 'C & C++ Programming with Data Structures (DSA)',
    category: 'development',
    categoryLabel: 'Software & Web',
    badge: '⚡ Core Foundations',
    badgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
    tagline: 'Master Low-Level Memory Management, Pointers, Algorithms & High-Performance Computing',
    description:
      'The foundational gold standard for software engineering. Master pointers, dynamic memory allocation, OOP in modern C++20, and algorithmic problem-solving for top product-firm coding rounds.',
    duration: '2.5 to 3.5 Months',
    mode: 'Classroom & Online',
    level: 'Foundational',
    averageSalary: '4.5 - 11.0 LPA',
    rating: 4.86,
    learnerCount: '1,560+ Trained',
    projectsCount: '3 Systems Software Projects',
    skills: ['C Language', 'C++20', 'Pointers & Dynamic Memory', 'Data Structures (Trees, Graphs, Queues)', 'Algorithms (Sorting, Greedy, DP)', 'OOP & STL Library', 'Debugging with GDB'],
    hiringRoles: ['C++ Software Engineer', 'Systems Programmer', 'Embedded Software Trainee', 'Product Engineer'],
    icon: CppIcon,
    gradientBg: 'from-blue-600/10 via-slate-500/5 to-transparent',
    borderAccent: 'group-hover:border-blue-500 group-hover:shadow-blue-500/10',
    glowColor: 'rgba(0, 89, 156, 0.15)',
    modules: [
      {
        title: 'Module 1: C Language & Low-Level Foundations',
        topics: ['Memory Representation, Data Types & Operators', 'Control Flow, Arrays, Strings & Modular Functions', 'Pointers Demystified, Pointer Arithmetic & References', 'Dynamic Memory Management (malloc, calloc, free)'],
      },
      {
        title: 'Module 2: Object-Oriented Programming in C++',
        topics: ['Classes, Objects, Constructors & Destructors', 'Inheritance, Polymorphism & Virtual Functions', 'Operator Overloading, Templates & Generic Programming', 'C++ Standard Template Library (STL: Vector, Map, Set, Queue)'],
      },
      {
        title: 'Module 3: Data Structures & Algorithmic Problem Solving',
        topics: ['Linked Lists (Singly, Doubly, Circular) Implementations', 'Stacks & Queues: Applications & Problem Solving', 'Trees: Binary Search Trees (BST), AVL Trees & Traversals', 'Graphs: BFS, DFS, Dijkstra Shortest Path Algorithm'],
      },
      {
        title: 'Module 4: Advanced Algorithms & System Projects',
        topics: ['Sorting & Searching: QuickSort, MergeSort, Binary Search', 'Dynamic Programming & Greedy Algorithms', 'File Management & Memory Leak Detection with Valgrind', 'Custom File Archiver & Compression Utility Capstone'],
      },
    ],
    enquirySubject: 'C & C++ Programming - Coimbatore Batch',
  },
  {
    id: 'mobile-app',
    shortName: 'Mobile App Dev',
    fullName: 'Mobile App Development (Flutter & React Native)',
    category: 'development',
    categoryLabel: 'Software & Web',
    badge: '📱 Cross-Platform Track',
    badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
    tagline: 'Build Sleek iOS & Android Native-Speed Apps from a Single Codebase',
    description:
      'Ship high-performance mobile apps for millions of users. Master Flutter & Dart or React Native, device hardware access, local databases, Push Notifications, and Google Play & Apple App Store deployment.',
    duration: '3 to 4.5 Months',
    mode: 'Classroom & Online',
    level: 'Beginner to Intermediate',
    averageSalary: '4.8 - 12.0 LPA',
    rating: 4.89,
    learnerCount: '1,280+ Trained',
    projectsCount: '3 App Store Ready Apps',
    skills: ['Flutter & Dart', 'React Native', 'Mobile UI Components', 'State Management (Bloc / Provider)', 'REST API Integration', 'Firebase Backend', 'App Store & Play Store Release'],
    hiringRoles: ['Flutter Mobile Developer', 'React Native Engineer', 'Mobile App Architect', 'Frontend App Specialist'],
    icon: MobileAppIcon,
    gradientBg: 'from-violet-500/10 via-pink-500/5 to-transparent',
    borderAccent: 'group-hover:border-violet-400 group-hover:shadow-violet-500/10',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    modules: [
      {
        title: 'Module 1: Mobile UI Architecture & Widgets',
        topics: ['Dart / JavaScript Fundamentals & Async Paradigms', 'Flutter Widget Tree: Stateless vs Stateful Widgets', 'Responsive Mobile Layouts (Flex, Rows, Columns, Stacks)', 'Material 3 & Cupertino iOS Design Guidelines'],
      },
      {
        title: 'Module 2: State Management & Device Native APIs',
        topics: ['State Management: Provider & BLoC Patterns', 'Camera, GPS Geolocation & Storage Permissions', 'Local Persistence with SQLite & SharedPreferences', 'Custom Page Transitions & Smooth Micro-Animations'],
      },
      {
        title: 'Module 3: Cloud Backend, Auth & Real-Time Sync',
        topics: ['Firebase Authentication (Phone, Email, Google Login)', 'Cloud Firestore & Realtime Database Synchronization', 'Firebase Cloud Messaging (FCM) Push Notifications', 'Connecting to Custom RESTful APIs & Offline Caching'],
      },
      {
        title: 'Module 4: Production Release & Capstone Apps',
        topics: ['Payment Gateway Integration for Mobile Checkouts', 'App Performance Profiling & Memory Leak Mitigation', 'Android App Bundle (AAB) & iOS IPA Signing', 'Production E-Commerce & Ride-Booking App Capstone'],
      },
    ],
    enquirySubject: 'Mobile App Development - Coimbatore Batch',
  },
]
