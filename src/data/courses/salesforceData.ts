import type { CourseData } from '../../types/course'

export const salesforceCourseData: CourseData = {
  id: 'salesforce',
  slug: '/courses/salesforce',
  title: 'Salesforce CRM & Developer Training in Coimbatore',
  shortTitle: 'Salesforce',
  eyebrowBadge: 'Industry-Aligned Salesforce Track',
  tagline: 'Master Salesforce Administration, Flow Automation, Apex Programming & Lightning Web Components (LWC)',
  heroDescription: [
    'Become an industry-certified Salesforce professional with CloudSwan Solution in Coimbatore.',
    'Our comprehensive curriculum bridges Salesforce Administration (Sales Cloud, Service Cloud, Data Security, Flow Builder) and Salesforce Development (Apex, SOQL, Triggers, Lightning Web Components, and REST Integrations) on hands-on developer sandbox orgs.',
    'Designed for students, fresh engineering graduates, software developers, system administrators, and professionals seeking high-growth cloud CRM careers in leading global IT consultancies and product enterprises.',
  ],
  primaryCtaText: 'Book a Free Counselling Session',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'Salesforce CRM (Admin + Developer + LWC)',
    duration: '3 to 4 Months',
    mode: 'Classroom & Live Interactive Online',
    level: 'Beginner to Advanced Developer',
    coreSkills: 'Sales Cloud, Service Cloud, Flow Builder, Apex, SOQL, Lightning Web Components (LWC)',
    advancedTopics: 'Apex Triggers & Frameworks, REST/SOAP APIs, Asynchronous Apex, SFDX & DevOps',
    projects: '5 Full-Scale Real-World Enterprise CRM Projects',
    certification: 'Course Completion Certificate + Official ADM-201 & PD-I Exam Guidance',
    careerSupport: 'Trailhead Superbadge Guidance, Resume Building & Placement Support',
    mentorSupport: 'Available (10+ Years Certified Salesforce Application Architects)',
  },

  whyLearn: {
    title: 'Why Learn Salesforce CRM & Development?',
    intro:
      'Salesforce is the world’s undisputed #1 Customer Relationship Management (CRM) platform, commanding over 22% of global CRM market share and powering over 150,000 businesses worldwide.',
    description:
      'The modern Salesforce economy requires hybrid-skilled talent—professionals who can automate complex business operations using Flow Builder while writing robust, scalable Apex code and responsive Lightning Web Components (LWC).',
    competenciesTitle: 'An industry-ready Salesforce specialist must know how to:',
    competencies: [
      'Design enterprise relational data models using Custom Objects, Fields & Relationships',
      'Configure the multi-layered Salesforce Security Model: Profiles, Roles & Sharing Rules',
      'Build declarative automations using advanced Salesforce Flow Builder and Approval Processes',
      'Manage high-volume data imports, exports, and updates using Salesforce Data Loader',
      'Write production-grade Object-Oriented Apex classes adhering to governor limits',
      'Build efficient Apex Triggers following modern single-trigger-per-object design patterns',
      'Query databases efficiently using Salesforce Object Query Language (SOQL) and SOSL',
      'Develop modern, responsive user interfaces with Lightning Web Components (LWC) and SLDS',
      'Connect external systems to Salesforce via REST and SOAP web services and callouts',
      'Manage modern development lifecycles with Salesforce CLI, VS Code, Git, and Scratch Orgs',
    ],
    summaryNote:
      "CloudSwan's Salesforce course provides hands-on practice in dedicated Salesforce Developer Orgs, backed by Trailhead badge acceleration and expert mentorship.",
  },

  learningPath: {
    title: 'Salesforce Training Institute in Coimbatore',
    subtitle: 'From Declarative Administration to Full-Stack Cloud Development',
    description:
      'CloudSwan Solution provides practical Salesforce training at our Saravanampatti and Gandhipuram campuses in Coimbatore. Our structured learning path connects business processes with programmatic engineering, taking you from core CRM administration to full-stack cloud development:',
    steps: [
      'CRM & Cloud Fundamentals',
      'Sales & Service Cloud Architecture',
      'Data Modeling & Schema Builder',
      'Security & Access Controls',
      'Flow Builder & Automation',
      'Data Loader & Governance',
      'Apex Programming & OOPS',
      'SOQL, SOSL & Data Queries',
      'Apex Triggers & Handlers',
      'Lightning Web Components (LWC)',
      'Integration & REST APIs',
      'SFDX, DevOps & Capstone Project',
    ],
    outcomeNote:
      'This comprehensive track equips candidates for high-paying roles as Salesforce Administrators, Salesforce Developers, and CRM Consultants.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'Comprehensive 10-Module Salesforce Mastery',
    description:
      'Master the full spectrum of Salesforce—from declarative administration and automated flows to programmatic backend Apex engineering and frontend Lightning Web Components.',
    modules: [
      {
        number: 1,
        title: 'Salesforce Ecosystem & Cloud Architecture Overview',
        subtitle: 'Understand cloud computing, CRM concepts, and the Salesforce multi-tenant model',
        description:
          'Learn the architectural foundations of Salesforce, cloud computing deployment models, and the business purpose of core clouds including Sales Cloud, Service Cloud, and Experience Cloud.',
        topics: [
          'Introduction to Cloud Computing: SaaS, PaaS, IaaS in Salesforce',
          'Salesforce multi-tenant architecture and metadata-driven platform',
          'Setting up free Salesforce Developer Edition Orgs',
          'Navigating Salesforce Lightning Experience vs Classic interface',
          'Overview of Sales Cloud: Leads, Accounts, Contacts, Opportunities & Campaigns',
          'Overview of Service Cloud: Cases, Solutions, Knowledge Base & Entitlements',
          'Company Information, Fiscal Year settings, Business Hours & Currencies',
          'Introduction to Salesforce Trailhead and learning badges',
        ],
      },
      {
        number: 2,
        title: 'Salesforce Security Architecture & Access Management',
        subtitle: 'Master the multi-layered Salesforce data security and sharing model',
        description:
          'Configure robust enterprise security policies, user authentication, profile permissions, role hierarchies, and record-level sharing mechanisms.',
        topics: [
          'User management, licenses, and password policies',
          'Multi-Factor Authentication (MFA) and IP Login Ranges',
          'Profiles and Permission Sets: Object-level and field-level security (FLS)',
          'Permission Set Groups and Mutin Security best practices',
          'Organization-Wide Defaults (OWD): Public Read/Write, Public Read Only, Private',
          'Role Hierarchy: Granting record access through management tiers',
          'Sharing Rules: Owner-based and Criteria-based sharing rules',
          'Manual Sharing and Apex-Managed sharing concepts',
          'Field-level security auditing and Health Check dashboard',
        ],
      },
      {
        number: 3,
        title: 'Relational Data Modeling & Custom Objects',
        subtitle: 'Design scalable enterprise database architectures in the cloud',
        description:
          'Master custom objects, fields, formula calculations, validation logic, and complex relational models using Schema Builder.',
        topics: [
          'Standard Objects vs Custom Objects and Custom Metadata Types',
          'Data types: Text, Picklist, Multi-Select, Date, Currency, Auto-Number, Rich Text',
          'Lookup Relationships vs Master-Detail Relationships',
          'Roll-Up Summary fields: COUNT, SUM, MIN, MAX calculations',
          'Many-to-Many relationships using Junction Objects',
          'Visualizing relational models with Schema Builder',
          'Formula Fields: Logical, mathematical, and date/time formula functions',
          'Validation Rules: Enforcing data integrity with Regex and error conditions',
          'Page Layouts, Record Types, and Lightning App Builder page customization',
        ],
      },
      {
        number: 4,
        title: 'Salesforce Flow Builder & Process Automation',
        subtitle: 'Build complex business logic declaratively without writing code',
        description:
          'Deep dive into the modern automation engine of Salesforce—Flow Builder. Learn Record-Triggered Flows, Screen Flows, Autolaunched Flows, and Approval Processes.',
        topics: [
          'Overview of Salesforce automation tools and retirement of Workflow Rules / Process Builder',
          'Introduction to Flow Builder canvas, elements, and resources',
          'Record-Triggered Flows: Fast Field Updates (Before Save) vs Actions & Related Records (After Save)',
          'Screen Flows: Creating interactive multi-step guided forms and wizards',
          'Autolaunched Flows, Scheduled Flows, and Platform Event-Triggered Flows',
          'Flow elements: Create, Update, Get, Delete records, Decision branches, Loops, Assignment',
          'Fault Paths, flow debugging, and error handling best practices',
          'Multi-step Approval Processes for discount authorizations and leave requests',
        ],
      },
      {
        number: 5,
        title: 'Data Management, Data Loader & Data Quality',
        subtitle: 'Handle enterprise bulk data operations with zero data loss',
        description:
          'Learn data manipulation tools, deduplication rules, Data Loader operations, and best practices for large dataset management.',
        topics: [
          'Data Import Wizard vs Salesforce Data Loader: Tool comparison and limits',
          'Installing and configuring Salesforce Data Loader with OAuth',
          'Executing Insert, Update, Upsert, Delete, and Hard Delete operations',
          'Using external IDs for seamless Upsert operations without duplicate records',
          'Exporting datasets and creating automated scheduled data backups',
          'Handling CSV data formatting, date-time standards, and null value handling',
          'Duplicate Rules, Matching Rules, and preventing duplicate Leads/Contacts',
          'Salesforce storage limits: Data storage vs File storage management',
        ],
      },
      {
        number: 6,
        title: 'Apex Programming Fundamentals & Object-Oriented Logic',
        subtitle: 'Learn the core programmatic language of the Salesforce platform',
        description:
          'Master Apex programming syntax, data types, collections (Lists, Sets, Maps), control flow, and Object-Oriented Programming (OOPS) on the Force.com platform.',
        topics: [
          'What is Apex? Strongly typed, object-oriented, cloud-hosted programming language',
          'Apex execution environment and multi-tenant Governor Limits',
          'Primitive data types: Integer, String, Boolean, Decimal, Id, Date, DateTime',
          'Collections in Apex: List (ordered), Set (unique), Map (key-value pairs)',
          'Control flow statements: if-else, switch, while, do-while, for loops',
          'Object-Oriented Programming: Classes, objects, methods, constructors, inheritance, interfaces',
          'Access modifiers: public, private, protected, global, with sharing, without sharing',
          'Exception Handling: try-catch-finally blocks and custom exceptions',
          'Apex Governor Limits: SOQL query limits, DML row limits, heap size limits',
        ],
      },
      {
        number: 7,
        title: 'SOQL, SOSL & Production-Grade Apex Triggers',
        subtitle: 'Query the database and execute automated logic on record events',
        description:
          'Master Salesforce Object Query Language (SOQL), Salesforce Object Search Language (SOSL), and write bulkified Apex Triggers using industry-standard handler frameworks.',
        topics: [
          'SOQL fundamentals: SELECT, FROM, WHERE, ORDER BY, LIMIT, OFFSET',
          'Filtering with operators: LIKE, IN, NOT IN, AND, OR, date literals',
          'Relationship queries: Parent-to-Child (subqueries) and Child-to-Parent dot notation',
          'Aggregate SOQL queries: COUNT(), SUM(), AVG(), GROUP BY, HAVING',
          'SOSL search syntax across multiple objects simultaneously',
          'Apex Triggers: Trigger events (before insert, after insert, before update, after update, etc.)',
          'Trigger context variables: Trigger.new, Trigger.old, Trigger.newMap, Trigger.oldMap',
          'Bulkifying triggers to handle up to 200 records per execution context',
          'Trigger Handler Design Pattern: Keeping triggers logic-less and maintainable',
          'Unit Testing in Apex: Test classes, @isTest, Test.startTest(), Test.stopTest(), System.assert()',
          'Achieving 75%+ code coverage required for production deployment',
        ],
      },
      {
        number: 8,
        title: 'Modern UI with Lightning Web Components (LWC)',
        subtitle: 'Build ultra-fast, responsive web interfaces using modern web standards',
        description:
          'Master modern JavaScript (ES6+), component-driven development, Lightning Design System (SLDS), wire adapters, and communication between components.',
        topics: [
          'Evolution from Visualforce to Aura to Lightning Web Components (LWC)',
          'LWC bundle structure: HTML template, JavaScript controller, XML configuration, CSS',
          'Modern JavaScript essentials: arrow functions, promises, async/await, destructuring, modules',
          'Data binding, reactive properties (@track, @api), conditional rendering, and iterations',
          'Salesforce Lightning Design System (SLDS): Grids, cards, badges, buttons, modals, toasts',
          'Lightning Data Service (LDS): lightning-record-form, lightning-record-view-form, lightning-record-edit-form',
          'Wire Service: @wire adapter for fetching data from Apex methods and schema',
          'Calling Apex methods imperatively in LWC for dynamic user interactions',
          'Component Communication: Parent-to-Child (@api properties/methods), Child-to-Parent (Custom Events)',
          'Lightning Message Service (LMS) for cross-component and Aura-LWC communication',
        ],
      },
      {
        number: 9,
        title: 'Salesforce Integrations, REST/SOAP APIs & External Services',
        subtitle: 'Connect Salesforce to external enterprise systems and third-party APIs',
        description:
          'Learn integration architecture, building custom REST web services in Apex, consuming external APIs via HTTP callouts, and configuring Named Credentials.',
        topics: [
          'Integration basics: synchronous vs asynchronous, point-to-point vs middleware',
          'Standard Salesforce REST API, SOAP API, Bulk API 2.0, and Composite API overview',
          'Creating Connected Apps in Salesforce with OAuth 2.0 authorization flows',
          'Consuming external APIs: Http, HttpRequest, HttpResponse classes in Apex',
          'Parsing JSON responses using JSON.deserialize and typed wrapper classes',
          'Configuring Named Credentials and External Credentials for secure authentication',
          'Exposing Custom REST APIs in Salesforce using @RestResource, @HttpGet, @HttpPost',
          'Asynchronous Apex: Future methods, Queueable Apex, Batch Apex, and Schedulable Apex',
          'Webhook listeners and real-time event streaming with Platform Events',
        ],
      },
      {
        number: 10,
        title: 'Salesforce DX, CI/CD Deployment & Capstone Project',
        subtitle: 'Adopt modern enterprise DevOps practices and complete a portfolio capstone',
        description:
          'Master Salesforce CLI (sf), Visual Studio Code, Git version control, change sets, metadata deployments, and deliver an end-to-end CRM solution.',
        topics: [
          'Setting up VS Code with Salesforce Extension Pack and Salesforce CLI',
          'Source-driven development with Scratch Orgs vs Sandbox Orgs',
          'Authorizing orgs, retrieving metadata, and deploying source to orgs',
          'Git & GitHub for version control, branching strategies, and pull requests in Salesforce',
          'Traditional deployment methods: Inbound & Outbound Change Sets',
          'Metadata API, Ant Migration Tool overview, and modern CI/CD pipelines basics',
          'ADM-201 and Platform Developer I (PD-I) certification prep strategy and mock tests',
          'Building a complete end-to-end Capstone CRM solution and deploying to production org',
          'Crafting a competitive Salesforce developer resume and technical interview preparation',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical Salesforce Projects',
    subtitle: 'Full-Scale Enterprise CRM Implementations',
    description:
      'Gain practical experience by building real-world enterprise cloud applications on authentic Salesforce Developer Edition environments. Each project demonstrates skills sought by multinational employers.',
    items: [
      {
        number: 1,
        title: 'Automated Lead-to-Opportunity Sales Pipeline Engine (Sales Cloud)',
        description:
          'Build an end-to-end sales automation system using Flow Builder. Automatically qualify incoming leads, score them based on business criteria, assign leads to regional sales reps with round-robin logic, and trigger automated follow-up tasks upon Opportunity stage progression.',
        focusArea: 'Sales Cloud & Flow Builder Automation',
        toolsUsed: ['Record-Triggered Flows', 'Lead Qualification', 'Opportunity Pipeline', 'Validation Rules'],
      },
      {
        number: 2,
        title: 'Omnichannel Customer Support & SLA Escalation System (Service Cloud)',
        description:
          'Implement an enterprise customer service desk. Configure Case Assignment Rules, Case Auto-Response, Entitlement Processes with Service Level Agreements (SLAs), Milestone timers, automated manager escalations, and customer satisfaction survey triggers.',
        focusArea: 'Service Cloud & Service Desk Architecture',
        toolsUsed: ['Service Cloud', 'Case Management', 'Entitlement Processes', 'Email-to-Case'],
      },
      {
        number: 3,
        title: 'Real Estate Property Listing & Booking Portal with Lightning Web Components',
        description:
          'Develop a high-performance modern UI using Lightning Web Components (LWC). Build interactive property search filters with real-time reactive search, dynamic price slider filters, image galleries, and a multi-step booking modal communicating via Custom Events and wire adapters.',
        focusArea: 'Frontend Engineering with LWC & SLDS',
        toolsUsed: ['Lightning Web Components', 'JavaScript ES6+', 'SLDS', 'Wire Service', 'Apex Controller'],
      },
      {
        number: 4,
        title: 'Real-Time External ERP & Payment Gateway Integration via Apex REST APIs',
        description:
          'Connect a Salesforce organization with external inventory and payment gateway APIs (e.g., Stripe/Razorpay). Write HTTP Callout services using Named Credentials, parse JSON payloads with wrapper classes, and build custom @RestResource endpoints to receive inbound webhook notifications.',
        focusArea: 'Enterprise Web Services & API Integration',
        toolsUsed: ['Apex REST Callouts', 'Named Credentials', 'JSON Parsing', 'Asynchronous Queueable Apex'],
      },
      {
        number: 5,
        title: 'Healthcare Patient Intake & Doctor Consultation Management CRM',
        description:
          'Architect a complete customized healthcare application. Build custom objects (Patients, Appointments, Prescriptions, Doctors), strict HIPAA-aligned field-level security, Screen Flows for patient registration kiosks, and automated doctor appointment reminders.',
        focusArea: 'Custom Data Architecture & Security Governance',
        toolsUsed: ['Custom Schema', 'Screen Flows', 'Role Hierarchy', 'Permission Sets', 'Formula Fields'],
      },
    ],
  },

  portfolio: {
    title: 'Your Professional Salesforce Deliverables',
    subtitle: 'Demonstrable Proof of Cloud CRM & Developer Competence',
    description:
      'Graduate with a verifiable portfolio of code repositories, live sandbox demonstrations, and Trailhead achievements to impress technical hiring managers and consulting recruiters.',
    deliverables: [
      'GitHub repository containing clean, documented Apex classes, Trigger Handler frameworks, and 85%+ unit test coverage',
      'Production-ready Lightning Web Components (LWC) library with modern reactive UI and SLDS styling',
      'Documented Salesforce Schema Architecture Blueprint (Data model diagrams, OWD matrices, and sharing rule specs)',
      'Catalog of 10+ custom Salesforce Flows (Record-Triggered, Screen Wizards, Autolaunched)',
      'Working integration test suite demonstrating inbound and outbound REST API callouts with Named Credentials',
      'Trailhead profile featuring Ranger Rank with 50+ badges and multiple Superbadges (e.g., Apex Specialist, Flow Elements)',
    ],
    ctaText: 'Review Portfolio Templates with an Advisor',
  },

  targetAudiences: {
    title: 'Who Can Join the Salesforce Training Program?',
    subtitle: 'Designed for Fresh Graduates, Coders, Admins & Career Switchers',
    audiences: [
      {
        id: 'students',
        title: 'College Students & Fresh Graduates',
        description:
          'B.E., B.Tech (CSE/IT/ECE), MCA, and B.Sc. graduates wanting to kickstart high-paying IT careers in cloud computing and enterprise SaaS.',
      },
      {
        id: 'software-developers',
        title: 'Java, .NET & Web Developers',
        description:
          'Software developers looking to transition to Salesforce Apex and Lightning Web Components (LWC) for higher market salaries and consulting roles.',
      },
      {
        id: 'system-administrators',
        title: 'System & Database Administrators',
        description:
          'IT administrators and DBAs seeking to upskill to Salesforce Administrator (ADM-201) roles and manage cloud enterprise instances.',
      },
      {
        id: 'it-professionals',
        title: 'Business Analysts & QA Engineers',
        description:
          'Software testers and business analysts aiming to become Salesforce Consultants and declarative automation experts using Flow Builder.',
      },
      {
        id: 'career-switchers',
        title: 'Career Switchers & Non-IT Professionals',
        description:
          'Professionals from sales, marketing, operations, and support wanting to transition into the booming cloud ecosystem with low-code automation.',
      },
      {
        id: 'fresh-graduates',
        title: 'Experienced IT Consultants',
        description:
          'Legacy CRM professionals (Siebel, Microsoft Dynamics, Zoho) upgrading their skills to the industry-leading Salesforce multi-cloud ecosystem.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Career Opportunities in Salesforce',
    subtitle: 'Massive Global & Domestic Demand for Certified Cloud Specialists',
    description:
      'The Salesforce ecosystem continues to generate millions of jobs worldwide. With companies across Coimbatore, Chennai, Bangalore, and global MNCs investing heavily in Salesforce, certified talent commands premium salaries.',
    roles: [
      'Salesforce Developer',
      'Salesforce Administrator',
      'Lightning Web Components (LWC) Developer',
      'Salesforce Functional Consultant',
      'Salesforce Business Analyst',
      'Salesforce Technical Lead',
      'Salesforce Integration Specialist',
      'Salesforce Platform Architect',
      'Salesforce QA / Test Automation Engineer',
      'Salesforce Support & Operations Specialist',
    ],
    disclaimer:
      'Salary compensation packages and specific hiring criteria vary depending on individual educational background, technical aptitude, and recruiting organization standards.',
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'Visual Salesforce Cloud & Developer Ecosystem',
    description:
      'Learn the official, industry-standard toolchain used by certified Salesforce consulting partners and enterprise development teams.',
    categories: [
      {
        category: 'CRM Platforms & Clouds',
        description: 'Industry-standard customer success clouds',
        tools: ['Salesforce Lightning Experience', 'Sales Cloud', 'Service Cloud', 'Experience Cloud basics'],
      },
      {
        category: 'Automation & Low-Code',
        description: 'Declarative enterprise business logic engines',
        tools: ['Flow Builder', 'Record-Triggered Flows', 'Screen Flows', 'Approval Processes', 'Validation Rules'],
      },
      {
        category: 'Developer Tools & IDEs',
        description: 'Modern developer workflow environments',
        tools: ['Visual Studio Code', 'Salesforce Extension Pack', 'Salesforce CLI (sf / sfdx)', 'Developer Console'],
      },
      {
        category: 'Backend Programming',
        description: 'Strongly-typed object-oriented cloud languages',
        tools: ['Apex Programming', 'Apex Triggers', 'SOQL & SOSL', 'Asynchronous Apex (Batch, Queueable)'],
      },
      {
        category: 'Frontend Frameworks',
        description: 'Modern web standard component frameworks',
        tools: ['Lightning Web Components (LWC)', 'JavaScript (ES6+)', 'Salesforce Lightning Design System (SLDS)', 'Aura basics'],
      },
      {
        category: 'APIs & Web Services',
        description: 'Enterprise integration protocols and tools',
        tools: ['Salesforce REST API', 'HTTP Callouts', 'Named Credentials', 'Workbench', 'Postman'],
      },
      {
        category: 'Data Management Tools',
        description: 'Bulk enterprise data migration tools',
        tools: ['Salesforce Data Loader', 'Data Import Wizard', 'Schema Builder', 'CSV Staging Tools'],
      },
      {
        category: 'DevOps & Version Control',
        description: 'Source tracking and collaborative deployment',
        tools: ['Git & GitHub', 'Scratch Orgs', 'Change Sets', 'Salesforce DX (SFDX)'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan for Salesforce Training?',
    subtitle: 'A Practical, Developer-First Approach to Salesforce Cloud Mastery',
    pillars: [
      {
        title: 'Dedicated Developer Orgs & Sandbox Labs',
        description:
          'Build, test, and deploy code in authentic Salesforce Developer Edition environments with full access to standard and custom objects.',
      },
      {
        title: 'Dual Admin + Developer Track',
        description:
          'Unlike institutes that only teach administrative clicks, we cover both declarative automation (Flows) and programmatic development (Apex, LWC, APIs).',
      },
      {
        title: '100% Practical Hands-On Coding',
        description:
          'Write real Apex classes, create robust trigger handler frameworks, and build responsive Lightning Web Components right from your first week of programming.',
      },
      {
        title: 'Salesforce Certified Expert Instructors',
        description:
          'Learn directly from seasoned mentors holding official Salesforce certifications (Administrator, Platform Developer I, Application Architect) with 10+ years industry experience.',
      },
      {
        title: 'Trailhead Badges & Superbadge Guidance',
        description:
          'Receive structured mentoring to achieve Trailhead Ranger Rank and earn resume-boosting Superbadges that validate your skills to employers.',
      },
      {
        title: 'Dual Campuses in Coimbatore + Online',
        description:
          'Attend high-tech lab classes in Saravanampatti or Gandhipuram with dedicated workstations, or join live virtual interactive sessions.',
      },
      {
        title: 'Placement Assistance & Interview Prep',
        description:
          'Benefit from resume building, mock technical interviews, scenario-based system design questions, and direct recruiter connections with top hiring partners.',
      },
    ],
  },

  certification: {
    title: 'Salesforce Certification Guidance in Coimbatore',
    subtitle: 'Prepare for Globally Recognized Salesforce Credentials',
    description:
      'CloudSwan provides a recognized course completion certificate and comprehensive preparation for official Salesforce Global Certifications, including Salesforce Certified Administrator (ADM-201) and Salesforce Certified Platform Developer I (PDI).',
    highlights: [
      'Comprehensive coverage of official ADM-201 & PDI exam blueprint objectives',
      'Deep mastery of Flow Builder, Schema Design & Security Architecture',
      'Writing bulkified Apex triggers & achieving 75%+ unit test code coverage',
      'Modern Lightning Web Components (LWC) programming & SLDS styling',
      'Integration callouts, Named Credentials, and JSON data parsing',
      'Scenario-based mock exam questions and timed practice walkthroughs',
      'Trailhead Superbadge completion mentorship (Apex Specialist, Security Specialist)',
      'Salesforce CLI (sf) and modern source-driven development with VS Code',
    ],
    regionalFocus: {
      title: 'Salesforce Cloud Ecosystem in Coimbatore & Tamil Nadu',
      description:
        'Coimbatore’s IT corridor—headlined by TIDEL Park and the CHIL SEZ IT Park in Saravanampatti—houses multinational IT service giants and SaaS companies actively recruiting Salesforce talent. With leading tech firms executing large-scale Salesforce migration and CRM transformation projects across South India, skilled Salesforce Administrators and LWC Developers are in exceptionally high demand. CloudSwan equips students and professionals in Coimbatore with the practical hands-on acumen required to excel in these enterprise roles.',
      keyAreas: [
        'CHIL SEZ & TIDEL Park MNC Recruiter Alignments',
        'SaaS & Product Startup CRM Customizations',
        'Modern LWC Frontend Engineering for Global Clients',
        'Campus Labs at Gandhipuram & Saravanampatti',
      ],
    },
    ethicalHackingNote: {
      title: 'Multi-Tenant Security Governance & Platform Limits in Salesforce',
      subtitle: 'Building Scalable, Secure Cloud Systems within Governor Limits',
      description:
        'Because Salesforce operates on a multi-tenant cloud infrastructure where resources are shared among thousands of organizations, the platform enforces strict Governor Limits (SOQL query limits, DML row restrictions, heap size caps). In our course, learners master defensive programming techniques, bulkification patterns, and object/field-level security to ensure enterprise-grade reliability and data protection.',
      keyFocusAreas: [
        'Governor Limits Optimization (100 SOQL / 150 DML per transaction)',
        'Bulkification Patterns for 200+ Records',
        'Field-Level Security (FLS) & CRUD Checks in Apex',
        'With Sharing vs Without Sharing Security Declarations',
        'SOQL Injection Prevention via String Binding',
        'Multi-Factor Authentication (MFA) & IP Range Enforcement',
      ],
      complianceWarning:
        'All student development and testing is conducted inside isolated Salesforce Developer Edition sandboxes, ensuring strict security compliance and zero exposure of client production data.',
    },
  },

  roadmap: {
    title: 'Salesforce Career Roadmap',
    subtitle: 'A Step-by-Step Trajectory from Beginner to Certified Salesforce Developer',
    steps: [
      {
        step: 1,
        title: 'Understand CRM & Cloud Fundamentals',
        description:
          'Learn the core principles of customer relationship management, cloud deployment models, and navigate the Salesforce Lightning Experience.',
      },
      {
        step: 2,
        title: 'Master Data Modeling & Schema Design',
        description:
          'Create Custom Objects, custom fields, Master-Detail and Lookup relationships, roll-up summaries, formula fields, and validation rules.',
      },
      {
        step: 3,
        title: 'Configure Salesforce Security Model',
        description:
          'Set up Profiles, Permission Sets, Organization-Wide Defaults (OWD), Role Hierarchy, and Criteria-Based Sharing Rules.',
      },
      {
        step: 4,
        title: 'Build Advanced Automations with Flow Builder',
        description:
          'Create Record-Triggered Flows, interactive Screen Flows, Autolaunched Flows, fault paths, and multi-step approval processes.',
      },
      {
        step: 5,
        title: 'Master Bulk Data Management & Data Loader',
        description:
          'Import, export, upsert, and delete records with Salesforce Data Loader and external IDs while enforcing duplicate management rules.',
      },
      {
        step: 6,
        title: 'Learn Apex Programming & OOPS Foundations',
        description:
          'Understand Apex syntax, primitive types, collections (Lists, Sets, Maps), conditional logic, loops, and object-oriented architecture.',
      },
      {
        step: 7,
        title: 'Master SOQL, SOSL & Data Queries',
        description:
          'Write efficient database queries, parent-to-child subqueries, child-to-parent queries, and aggregate functions adhering to governor limits.',
      },
      {
        step: 8,
        title: 'Build Bulkified Apex Triggers & Test Classes',
        description:
          'Implement the Trigger Handler framework, handle bulk DML events, and write unit test classes to achieve 80%+ code coverage.',
      },
      {
        step: 9,
        title: 'Develop Modern Lightning Web Components (LWC)',
        description:
          'Build responsive custom components using modern JavaScript (ES6+), SLDS styling, Wire Service, and component-to-component messaging.',
      },
      {
        step: 10,
        title: 'Integrate External APIs & Web Services',
        description:
          'Connect external systems using HTTP REST callouts, Named Credentials, JSON parsing, and expose custom Salesforce @RestResource endpoints.',
      },
      {
        step: 11,
        title: 'Adopt Salesforce DX & Modern DevOps Tools',
        description:
          'Use VS Code with Salesforce CLI, Git version control, change sets, and scratch orgs to deploy code following modern software delivery practices.',
      },
      {
        step: 12,
        title: 'Certifications, Mock Interviews & Placement',
        description:
          'Prepare for official ADM-201 and PD-I exam certifications, polish your developer resume, take mock technical interviews, and apply for cloud CRM roles.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-1',
      question: 'What is Salesforce and why is it in such high demand?',
      answer:
        'Salesforce is the world’s leading cloud-based Customer Relationship Management (CRM) platform. It allows businesses to manage sales pipelines, customer service cases, marketing campaigns, and analytics in a single secure cloud environment. Its rapid global adoption has created enormous demand for certified administrators and developers who can customize and extend the platform.',
    },
    {
      id: 'faq-2',
      question: 'Do I need prior coding experience to learn Salesforce?',
      answer:
        'No prior programming experience is required to begin. The first half of the course focuses on Salesforce Administration and low-code Flow automation, which requires logical thinking rather than programming. When transitioning to Apex development and Lightning Web Components (LWC), we teach programming from the ground up, starting with core object-oriented principles.',
    },
    {
      id: 'faq-3',
      question: 'What is the difference between Salesforce Admin and Salesforce Developer?',
      answer:
        'A Salesforce Administrator manages users, security permissions, data quality, reports, dashboards, and builds automations using low-code tools like Flow Builder. A Salesforce Developer writes programmatic code using Apex (backend), Lightning Web Components (frontend), and builds integrations with external systems using REST/SOAP APIs. Our course teaches both tracks so you become a complete, versatile professional.',
    },
    {
      id: 'faq-4',
      question: 'What certifications does this course prepare me for?',
      answer:
        'This program thoroughly prepares you for two of the most valuable official Salesforce certifications: Salesforce Certified Administrator (CRT-101 / ADM-201) and Salesforce Certified Platform Developer I (CRT-450 / PDI). We provide mock question walkthroughs, syllabus alignment, and test-taking tips.',
    },
    {
      id: 'faq-5',
      question: 'Will I work on real hands-on projects during the course?',
      answer:
        'Yes. You will complete 5 comprehensive enterprise projects in dedicated Salesforce Developer Orgs, including an automated Sales Cloud lead qualification pipeline, a Service Cloud SLA customer desk, a custom real estate portal built with Lightning Web Components (LWC), an external payment gateway integration via REST APIs, and a healthcare management CRM.',
    },
    {
      id: 'faq-6',
      question: 'What is Trailhead and how does CloudSwan incorporate it?',
      answer:
        'Trailhead is Salesforce’s official gamified learning platform. At CloudSwan, our mentors guide you through earning Trailhead badges, reaching Ranger Rank, and completing coveted Superbadges (such as Apex Specialist and Flow Elements), giving you verified credentials that technical hiring managers look for.',
    },
    {
      id: 'faq-7',
      question: 'Where are CloudSwan’s training centers located in Coimbatore?',
      answer:
        'CloudSwan has two prime campuses in Coimbatore: Saravanampatti (opposite CHIL SEZ IT Park) and Gandhipuram (Cross Cut Road / 7th Street Corner). Both centers feature high-tech air-conditioned labs, modern workstations, high-speed internet, and dedicated trainer guidance.',
    },
    {
      id: 'faq-8',
      question: 'Are online classes available for working professionals?',
      answer:
        'Yes. We offer interactive live instructor-led online sessions, early morning batches, evening batches, and weekend batches designed specifically to accommodate college students and working IT professionals.',
    },
    {
      id: 'faq-9',
      question: 'What career roles can I apply for after completing the course?',
      answer:
        'You can apply for roles including Salesforce Developer, Salesforce Administrator, Lightning Web Components Developer, Salesforce Consultant, Salesforce Business Analyst, and Salesforce Support Specialist in IT consulting firms (TCS, Infosys, Cognizant, Wipro, Accenture) and product SaaS companies.',
    },
    {
      id: 'faq-10',
      question: 'What development tools will I use in this course?',
      answer:
        'You will use industry-standard enterprise development tools, including Visual Studio Code with the Salesforce Extension Pack, Salesforce CLI (sf), Git & GitHub for version control, Developer Console, Salesforce Workbench, Postman for API testing, and dedicated Salesforce Developer Edition Orgs.',
    },
    {
      id: 'faq-11',
      question: 'Does CloudSwan provide placement support for Salesforce students?',
      answer:
        'Yes. Our dedicated career placement team helps you build a professional, ATS-friendly resume highlighting hands-on Apex and LWC projects, optimizes your LinkedIn and Trailhead profiles, conducts mock technical interview drills, and connects you directly with hiring partner companies.',
    },
    {
      id: 'faq-12',
      question: 'How do I enroll or attend a free demo session?',
      answer:
        'You can register for a free counselling session or live demo class by clicking the "Enquire Now" or "Book a Free Counselling Session" button on this page. Our counselors will provide complete details on upcoming batch schedules, syllabus, and course fees.',
    },
  ],

  finalCta: {
    title: 'Launch Your High-Paying Salesforce Cloud Career',
    subtitle: 'Master the World’s Leading CRM with CloudSwan Institute Coimbatore',
    checkpoints: [
      'Master both declarative Administration (Flows) & programmatic Development (Apex, LWC).',
      'Build 5 enterprise real-world CRM capstone projects on dedicated developer orgs.',
      'Prepare for official ADM-201 and Platform Developer I (PDI) certifications.',
      'Achieve Trailhead Ranger Rank and earn resume-boosting Superbadges.',
      'Learn directly from 10+ years experienced certified Salesforce application architects.',
      'Benefit from comprehensive placement assistance, mock technical drills & resume reviews.',
    ],
    primaryCta: 'Book a Free Counselling Session',
    secondaryCta: 'Explore Course Curriculum',
  },
}
