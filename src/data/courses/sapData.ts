import type { CourseData } from '../../types/course'

export const sapCourseData: CourseData = {
  id: 'sap',
  slug: '/courses/sap',
  title: 'SAP S/4HANA & ERP Training in Coimbatore',
  shortTitle: 'SAP ERP',
  eyebrowBadge: 'Enterprise ERP & S/4HANA Track',
  tagline: 'Master SAP S/4HANA, FICO, MM, SD & Real-Time Enterprise Business Process Integration',
  heroDescription: [
    'Gain hands-on expertise in the world’s leading Enterprise Resource Planning platform with CloudSwan Solution in Coimbatore.',
    'Master core functional and integration modules including SAP S/4HANA, SAP FICO (Financial Accounting & Management Controlling), SAP MM (Materials Management & Procure-to-Pay), and SAP SD (Sales and Distribution & Order-to-Cash).',
    'Designed for graduates in commerce, engineering, MBA candidates, accountants, supply chain professionals, and career switchers wanting to build lucrative careers as SAP Functional Consultants and ERP Analysts.',
  ],
  primaryCtaText: 'Book a Free Counselling Session',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'SAP S/4HANA & Enterprise ERP Training',
    duration: '3.5 to 5 Months',
    mode: 'Classroom & Live Interactive Online',
    level: 'Beginner to Advanced Professional',
    coreSkills: 'SAP S/4HANA, SAP FICO, SAP MM, SAP SD, General Ledger, P2P, O2C',
    advancedTopics: 'Cross-Module Integration, SAP Fiori, Asset Accounting, LTMC Data Migration',
    projects: '5 Real-World Enterprise ERP Simulation Projects & Capstone Cases',
    certification: 'Course Completion Certificate + Official SAP Exam Guidance',
    careerSupport: 'Resume Crafting, Mock Technical Interviews & Placement Assistance',
    mentorSupport: 'Available (12+ Years Experienced Certified SAP Consultants)',
  },

  whyLearn: {
    title: 'Why Learn SAP ERP & S/4HANA?',
    intro:
      'Over 90% of Forbes Global 2000 enterprises and top Indian multinational conglomerates rely on SAP to orchestrate mission-critical supply chains, financial reporting, procurement, sales, and manufacturing operations.',
    description:
      'The migration from legacy SAP ECC to high-speed in-memory SAP S/4HANA has triggered an unprecedented global demand for skilled SAP professionals who understand both business domain logic and technical system configuration.',
    competenciesTitle: 'An industry-ready SAP consultant must know how to:',
    competencies: [
      'Navigate SAP GUI 8.0 and modern browser-based SAP Fiori Launchpads',
      'Configure organizational enterprise structures (Company Codes, Plants, Sales Orgs)',
      'Manage General Ledger (G/L), Accounts Payable (AP), and Accounts Receivable (AR)',
      'Execute Controlling (CO) workflows: Cost Centers, Internal Orders & Profit Centers',
      'Orchestrate the Procure-to-Pay (P2P) lifecycle: Purchase Requisitions to Invoice Verification',
      'Implement Order-to-Cash (O2C) operations: Quotations, Sales Orders, Shipping & Billing',
      'Configure Material Master, Vendor Master, Customer Master & Business Partner data',
      'Execute automatic Account Determination and cross-module integration (FI-MM & FI-SD)',
      'Perform enterprise data migration using LTMC (Legacy Transfer Migration Cockpit)',
      'Prepare financial trial balances, balance sheets, and audit-compliant reporting',
    ],
    summaryNote:
      "CloudSwan's SAP program combines deep accounting and business domain logic with hands-on 24/7 dedicated SAP server practice.",
  },

  learningPath: {
    title: 'SAP ERP Training Institute in Coimbatore',
    subtitle: 'A Connected Progression from Business Foundations to Enterprise Implementation',
    description:
      'CloudSwan Solution provides practical SAP training across both Gandhipuram and Saravanampatti campuses in Coimbatore. Rather than teaching isolated transaction codes in a vacuum, our curriculum simulates authentic enterprise business operations where supply chain events trigger real-time financial postings:',
    steps: [
      'ERP Fundamentals & SAP Overview',
      'SAP GUI & Fiori Navigation',
      'Enterprise Structure Definition',
      'Business Partner & Master Data',
      'SAP FICO (Financial Accounting)',
      'SAP Controlling & Cost Analysis',
      'SAP MM (Procure-to-Pay / P2P)',
      'Inventory Valuation & Physical Count',
      'SAP SD (Order-to-Cash / O2C)',
      'Cross-Module Integration (FI-MM-SD)',
      'Data Migration with LTMC & LSMW',
      'Capstone Enterprise Implementation',
    ],
    outcomeNote:
      'Graduates emerge with verifiable configuration experience, able to join MNC consulting teams, IT service leaders, or corporate ERP divisions with confidence.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'Comprehensive 10-Module Enterprise ERP Mastery',
    description:
      'From fundamental enterprise architecture and SAP Fiori navigation to in-depth FICO financial controls, MM procurement, SD sales distribution, and real-time live server configuration.',
    modules: [
      {
        number: 1,
        title: 'ERP Foundations & SAP S/4HANA Architecture',
        subtitle: 'Understand how enterprise systems power global commerce and digital supply chains',
        description:
          'Learn the architectural shift from traditional disk-based ERP to SAP S/4HANA in-memory computing, the Universal Journal (ACDOCA), and enterprise modules overview.',
        topics: [
          'Introduction to Enterprise Resource Planning (ERP)',
          'SAP product roadmap: SAP R/3 vs ECC 6.0 vs SAP S/4HANA',
          'In-Memory Computing & HANA Database fundamentals',
          'Overview of core SAP modules: FICO, MM, SD, PP, PM, QM, HCM',
          'Understanding OLTP (Transactional) vs OLAP (Analytical) workloads',
          'The Universal Journal table (ACDOCA) single source of truth',
          'Multi-tier client-server architecture: Database, Application & Presentation layers',
          'Business case studies: How Fortune 500 enterprises run on SAP',
        ],
      },
      {
        number: 2,
        title: 'SAP Navigation, GUI 8.0 & SAP Fiori Experience',
        subtitle: 'Master navigation, transaction codes, and user interfaces',
        description:
          'Hands-on immersion into the SAP graphical user interface (SAP GUI) and next-generation responsive SAP Fiori web applications.',
        topics: [
          'Logging into SAP systems & server landscape configuration',
          'SAP GUI 8.0 navigation, command field, and transaction codes (T-Codes)',
          'Standard toolbar, application toolbar, status bar, and system messages',
          'Managing User Profiles, default parameters, and personal favorites',
          'Introduction to SAP Fiori Launchpad & tile-based navigation',
          'Fiori transactional, analytical, and factsheet application types',
          'Creating customized layouts, variants, and table displays (ALV Grid)',
          'Help features: F1 technical information and F4 search help',
        ],
      },
      {
        number: 3,
        title: 'Enterprise Organizational Structure & Business Partners',
        subtitle: 'Define the digital backbone of a global enterprise in SAP',
        description:
          'Configure enterprise entities including Client, Company Code, Business Area, Purchasing Organization, Plant, and the mandatory Business Partner (BP) model in S/4HANA.',
        topics: [
          'Definition vs Assignment in SAP Implementation Guide (SPRO)',
          'Configuring Company Code, Chart of Accounts, and Fiscal Year Variants',
          'Defining Logistics structures: Plant, Storage Location & Purchasing Org',
          'Defining Commercial structures: Sales Organization, Distribution Channel & Division',
          'Understanding Sales Area and assigning logistics entities to Company Codes',
          'The unified Business Partner (BP) approach in SAP S/4HANA',
          'Creating and maintaining Customer, Vendor, and Employee BP Roles',
          'Number range intervals, grouping, and field status configuration',
        ],
      },
      {
        number: 4,
        title: 'SAP FICO: Financial Accounting (General Ledger, AP & AR)',
        subtitle: 'Master record-to-report and financial accounting configuration',
        description:
          'Configure primary financial controls: General Ledger Accounting, Accounts Payable for vendors, Accounts Receivable for customers, and automated bank reconciliations.',
        topics: [
          'Chart of Accounts architecture: Operating, Group & Country-specific',
          'Account Groups, G/L Master record creation, and Field Status Variants',
          'Posting period variants, document types, and number range configuration',
          'Document posting (FB50, F-02), reversal, parking, and holding',
          'Accounts Payable (AP): Vendor invoices, credit memos & down payments',
          'Automatic Payment Program (F110) end-to-end setup and bank determination',
          'Accounts Receivable (AR): Customer billing postings, incoming payments & disputes',
          'Dunning procedure configuration for overdue receivables management',
          'Bank ledger setup, house banks, and Electronic Bank Statement (EBS) basics',
        ],
      },
      {
        number: 5,
        title: 'SAP FICO: Controlling (CO) & Management Accounting',
        subtitle: 'Cost management, profitability tracking, and managerial decision support',
        description:
          'Learn internal managerial accounting, cost centers, profit centers, internal orders, and allocation mechanisms to support leadership decision-making.',
        topics: [
          'Controlling Area setup and assignment to multiple Company Codes',
          'Primary vs Secondary Cost Elements in S/4HANA Universal Journal',
          'Cost Center Accounting (CO-CCA): Standard hierarchy and cost center masters',
          'Statistical Key Figures, activity types, and cost center planning',
          'Cost allocations: Assessments, distributions, and periodic reposting',
          'Internal Orders (CO-IO): Real orders vs statistical orders for capex budgeting',
          'Profit Center Accounting (CO-PCA): Dummy profit centers & standard hierarchy',
          'Segment reporting and financial balance sheets by profit center',
        ],
      },
      {
        number: 6,
        title: 'SAP MM: Materials Management & Procure-to-Pay (P2P)',
        subtitle: 'Supply chain procurement, vendor contracts, and purchasing lifecycles',
        description:
          'Deep dive into modern procurement: Material requirements planning, purchase requisitions, RFQs, purchase orders, and goods receipts.',
        topics: [
          'Procure-to-Pay (P2P) lifecycle end-to-end process flow',
          'Material Master data: Material types (ROH, HALB, FERT), views & valuation classes',
          'Purchasing Info Records (PIR) and Source Lists configuration',
          'Creating Purchase Requisitions (ME51N) and Request for Quotation (RFQ)',
          'Purchase Order (PO) creation, release strategy, and approval workflows',
          'Goods Receipt (MIGO): Movement types (101, 102, 122), stock types & inspection',
          'Logistic Invoice Verification (LIV - MIRO): 3-way matching and tolerance limits',
          'Credit memos, subsequent debits, and invoice parking procedures',
        ],
      },
      {
        number: 7,
        title: 'SAP MM: Inventory Valuation, Physical Count & MRP',
        subtitle: 'Warehouse inventory control, valuation techniques, and stock transfers',
        description:
          'Manage inventory stock movements, valuation methods (Moving Average Price vs Standard Price), split valuation, and physical inventory auditing.',
        topics: [
          'Stock Overview (MMBE) and Material Document verification (MB03)',
          'Stock transfers: Plant-to-Plant, Storage Location to Storage Location, Company-to-Company',
          'Transfer postings: Unrestricted to Quality Inspection, Blocked to Unrestricted',
          'Material Valuation: Standard Price (S) vs Moving Average Price (V) dynamics',
          'Split Valuation setup for materials with differing origins or batches',
          'Special stock scenarios: Consignment, Subcontracting & Pipeline materials',
          'Physical Inventory cycle: Creating inventory documents, entering counts & posting differences',
          'Material Requirements Planning (MRP) basics and consumption-based planning',
        ],
      },
      {
        number: 8,
        title: 'SAP SD: Sales and Distribution & Order-to-Cash (O2C)',
        subtitle: 'Customer relationship management, sales order processing, and shipping',
        description:
          'Learn the complete customer sales execution pipeline: Inquiries, quotations, sales orders, delivery processing, picking, packing, and customer invoices.',
        topics: [
          'Order-to-Cash (O2C) lifecycle end-to-end business flow',
          'Customer Master / Business Partner commercial sales data setup',
          'Sales document types (Standard Order OR, Rush Order, Cash Sales, Returns)',
          'Item categories and schedule line categories determination',
          'Pricing Procedure determination using Condition Technique (Condition Types, Access Sequences)',
          'Outbound Delivery (VL01N): Shipping point determination, picking & packing',
          'Post Goods Issue (PGI) inventory decrease and accounting document trigger',
          'Customer Billing (VF01): Generating invoice, debit/credit notes, and account postings',
        ],
      },
      {
        number: 9,
        title: 'Cross-Module Integration & S/4HANA Data Migration',
        subtitle: 'Connect logistics and financial accounting seamlessly with zero data gaps',
        description:
          'Master automatic account determination across FI-MM and FI-SD, plus modern data migration workflows using LTMC and LSMW.',
        topics: [
          'Automatic Account Assignment in MM (OBYC): Valuation classes, posting keys & G/L accounts',
          'Revenue Account Determination in SD (VKOA): Charts of accounts, account keys & sales conditions',
          'Integration testing across Procure-to-Pay and Order-to-Cash pipelines',
          'Asset Accounting (FI-AA): Asset classes, depreciation keys, acquisition & retirement',
          'Financial Closing Cockpit and Month-End closing checklist procedures',
          'Data Migration tools: Legacy Transfer Migration Cockpit (LTMC) vs LSMW',
          'Migrating master data: Business Partners, Material Masters, G/L balances',
          'Troubleshooting standard SAP runtime errors, dump analysis (ST22), and system logs (SM21)',
        ],
      },
      {
        number: 10,
        title: 'Capstone ERP Project, Audit Compliance & Interview Prep',
        subtitle: 'Build an end-to-end multi-entity enterprise blueprint from scratch',
        description:
          'Execute a full implementation lifecycle simulation based on real-world MNC project standards, preparing candidates for senior consulting interviews.',
        topics: [
          'ASAP and SAP Activate project implementation methodologies (Discover, Prepare, Explore, Realize, Deploy, Run)',
          'Business Blueprinting and writing Functional Specification Documents (FSD)',
          'Configuring a dual-company multinational manufacturing enterprise in the live sandbox',
          'Unit Testing, User Acceptance Testing (UAT), and cutover strategy planning',
          'Statutory compliance, GST configuration basics in Indian SAP systems, and TDS withholding tax',
          'Writing professional SAP consultant resumes highlighting configuration T-Codes',
          'Mock scenario-based technical interviews and consultant client communication drills',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical Enterprise Projects',
    subtitle: 'Real-World Business Process Case Studies',
    description:
      'Gain practical experience by configuring live business scenarios on dedicated SAP server instances. Each project is designed to match deliverables required in global consulting firms.',
    items: [
      {
        number: 1,
        title: 'Multinational Manufacturing Enterprise FICO Implementation',
        description:
          'Configure complete financial accounting for an industrial manufacturing enterprise with two company codes. Set up chart of accounts, fiscal year variants, automatic payment programs (F110), dunning procedures, and financial statement versions.',
        focusArea: 'SAP FICO & General Ledger Architecture',
        toolsUsed: ['SAP S/4HANA', 'SAP GUI 8.0', 'F110 Payment Engine', 'Universal Journal'],
      },
      {
        number: 2,
        title: 'Procure-to-Pay (P2P) Supply Chain Lifecycle for an Automotive Tier-1 Supplier',
        description:
          'Build an automated procurement pipeline including material masters with split valuation, source determination, purchase order release approval workflows, goods receipt with 3-way matching, and logistics invoice verification.',
        focusArea: 'SAP MM & Procurement Operations',
        toolsUsed: ['SAP MM', 'MIGO', 'MIRO', 'Release Strategies', 'SPRO Configuration'],
      },
      {
        number: 3,
        title: 'Order-to-Cash (O2C) Global Distribution Engine for a Consumer Goods Firm',
        description:
          'Implement a comprehensive commercial sales distribution workflow with customized pricing procedures, volume discounts, shipping point determination, credit management controls, and automated revenue billing.',
        focusArea: 'SAP SD & Commercial Operations',
        toolsUsed: ['SAP SD', 'Pricing Condition Technique', 'VL01N Delivery', 'VF01 Billing'],
      },
      {
        number: 4,
        title: 'Cross-Module Integration & Automatic Account Determination (FI-MM-SD)',
        description:
          'Configure OBYC and VKOA mapping rules to connect procurement and sales movements directly into the general ledger. Test and verify automated postings for inventory variances, COGS, trade payables, and receivables.',
        focusArea: 'Enterprise System Integration',
        toolsUsed: ['OBYC Mapping', 'VKOA Engine', 'ACDOCA Universal Journal', 'SAP Fiori'],
      },
      {
        number: 5,
        title: 'Legacy Enterprise Data Migration to SAP S/4HANA using LTMC',
        description:
          'Extract legacy flat-file master data for 2,000+ materials, 500+ business partners, and historical opening balances, perform data validation and cleansing, and execute automated cutover migration via SAP Migration Cockpit.',
        focusArea: 'Data Migration & Cutover Activities',
        toolsUsed: ['LTMC Migration Cockpit', 'Excel Staging Tables', 'SAP Fiori', 'ST22 Dump Tools'],
      },
    ],
  },

  portfolio: {
    title: 'Your Professional SAP Deliverables',
    subtitle: 'Demonstrable Proof of Enterprise Functional Competence',
    description:
      'When interviewing with top IT consulting firms like Accenture, Capgemini, TCS, Wipro, Infosys, and Deloitte, your hands-on configuration documentation sets you apart from theoretical candidates.',
    deliverables: [
      'End-to-End Enterprise Structure Configuration Blueprint (PDF documentation with SPRO path screenshots)',
      'Functional Specification Document (FSD) for custom report enhancements and integration mapping',
      'Configured Chart of Accounts, Automatic Payment Program & Dunning Procedure catalog',
      'Procure-to-Pay (P2P) and Order-to-Cash (O2C) test scripts with verified audit trails',
      'OBYC and VKOA Account Determination reference matrices for cross-functional postings',
      'LTMC migration project logs and Master Data cleansing templates for real client projects',
    ],
    ctaText: 'Review Portfolio Templates with an Advisor',
  },

  targetAudiences: {
    title: 'Who Can Join the SAP Training Program?',
    subtitle: 'Designed for Commerce, Engineering, IT & Business Professionals',
    audiences: [
      {
        id: 'students',
        title: 'Commerce & Finance Graduates',
        description:
          'B.Com, M.Com, BBA, and MBA graduates looking to transition into high-paying corporate SAP FICO consulting and financial analyst roles.',
      },
      {
        id: 'fresh-graduates',
        title: 'Engineering & Tech Graduates',
        description:
          'B.E., B.Tech, and MCA freshers aiming to enter multinational IT consulting giants in enterprise software implementation and ERP systems.',
      },
      {
        id: 'software-developers',
        title: 'Accountants & Finance Executives',
        description:
          'Working accountants, auditors, and bookkeepers seeking to elevate their careers from entry-level accounting to certified SAP ERP consultants.',
      },
      {
        id: 'it-professionals',
        title: 'Supply Chain & Logistics Personnel',
        description:
          'Professionals in procurement, warehousing, store management, and dispatch looking to master SAP MM and SAP SD enterprise modules.',
      },
      {
        id: 'career-switchers',
        title: 'Career Switchers & Non-IT Aspirants',
        description:
          'Professionals seeking high job stability, global MNC mobility, and strong salary packages in the evergreen enterprise ERP industry.',
      },
      {
        id: 'system-administrators',
        title: 'Working IT & Support Professionals',
        description:
          'Tech support engineers, database administrators, and legacy ERP operators upskilling to next-generation SAP S/4HANA environments.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Career Opportunities in SAP ERP',
    subtitle: 'High Demand Across Global IT Consultancies & Corporate Enterprises',
    description:
      'With thousands of enterprises modernizing their core systems to SAP S/4HANA, certified SAP specialists enjoy excellent remuneration, global consulting mobility, and steady career progression.',
    roles: [
      'SAP Functional Consultant (FICO / MM / SD)',
      'SAP S/4HANA Business Analyst',
      'SAP Implementation Specialist',
      'SAP Associate Consultant',
      'ERP Systems Analyst',
      'SAP Support & Maintenance Lead',
      'SAP Supply Chain Analyst',
      'SAP Financial Controller',
      'Procurement & Inventory SAP Specialist',
      'Enterprise Cutover & Data Migration Analyst',
    ],
    disclaimer:
      'Salary compensation packages and specific hiring criteria vary by individual educational background, practical aptitude, and recruiting organization standards.',
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'Visual SAP Enterprise Ecosystem',
    description:
      'CloudSwan provides authentic hands-on server access covering core software versions, integration utilities, and administrative tools used in live enterprise environments.',
    categories: [
      {
        category: 'ERP Platforms',
        description: 'Next-generation in-memory core ERP suites',
        tools: ['SAP S/4HANA', 'SAP ECC 6.0 EHP8', 'SAP NetWeaver'],
      },
      {
        category: 'Functional Modules',
        description: 'Core functional business domains',
        tools: ['SAP FICO (Financials & Controlling)', 'SAP MM (Materials Management)', 'SAP SD (Sales & Distribution)'],
      },
      {
        category: 'User Interface',
        description: 'Modern and desktop user experience clients',
        tools: ['SAP GUI 8.0 for Windows', 'SAP Fiori Launchpad', 'SAP Fiori Web Apps'],
      },
      {
        category: 'Database & In-Memory',
        description: 'Real-time column-oriented database engine',
        tools: ['SAP HANA Database', 'Universal Journal (ACDOCA)', 'HANA Studio basics'],
      },
      {
        category: 'Data Migration & Cutover',
        description: 'Enterprise data migration and mass staging',
        tools: ['LTMC (Migration Cockpit)', 'LSMW', 'BAPI Staging Templates'],
      },
      {
        category: 'Integration & Testing',
        description: 'Cross-module determination and diagnostics',
        tools: ['OBYC Engine', 'VKOA Engine', 'ST22 Dump Analysis', 'SM21 System Log'],
      },
      {
        category: 'Reporting & Analytics',
        description: 'Operational business insight reporting',
        tools: ['ALV Grid Reporting', 'Financial Statement Versions', 'SAP Fiori Analytical Apps'],
      },
      {
        category: 'Methodologies',
        description: 'Industry-standard project delivery frameworks',
        tools: ['SAP Activate Methodology', 'ASAP Methodology', 'Solution Manager basics'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan for SAP Training?',
    subtitle: 'A Rigorous, Practical Approach Tailored for Real Consulting Roles',
    pillars: [
      {
        title: 'Dedicated 24/7 SAP Server Access',
        description:
          'Practice your configuration, master data, and transaction posting on authentic SAP S/4HANA server instances from anywhere, anytime.',
      },
      {
        title: 'Industry-Certified Practitioner Mentors',
        description:
          'Learn directly from experienced SAP consultants with over a decade of real implementation experience across domestic and international projects.',
      },
      {
        title: 'End-to-End Cross-Module Integration',
        description:
          'Unlike institutes that teach modules in silos, we emphasize FI-MM and FI-SD account determinations that reflect genuine enterprise operations.',
      },
      {
        title: 'Real-World MNC Project Simulations',
        description:
          'Build complete configuration blueprints for simulated manufacturing, retail, and logistics enterprises following the SAP Activate methodology.',
      },
      {
        title: 'Dual Campus Presence in Coimbatore',
        description:
          'Attend in-person high-tech lab classes at our Saravanampatti or Gandhipuram campuses, or join interactive live virtual weekend/weekday batches.',
      },
      {
        title: 'Career & Placement Support',
        description:
          'Benefit from professional resume restructuring, project portfolio guidance, mock technical rounds, and interview scheduling support.',
      },
      {
        title: 'Flexible Batches for Working Professionals',
        description:
          'Choose between fast-track weekday batches, early morning sessions, or dedicated weekend schedules designed for working executives.',
      },
    ],
  },

  certification: {
    title: 'SAP Certification & Placement Guidance in Coimbatore',
    subtitle: 'Validate Your Enterprise Consulting Competence',
    description:
      'CloudSwan provides a recognized course completion certificate and comprehensive exam orientation for official SAP Global Certification tracks (SAP Certified Application Associate in S/4HANA Financial Accounting, Sourcing & Procurement, and Sales).',
    highlights: [
      'Comprehensive coverage of official SAP exam blueprint topics',
      'Extensive hands-on configuration experience in SPRO',
      'Real-world business process execution (P2P and O2C cycles)',
      'Universal Journal (ACDOCA) architecture mastery',
      'Business Partner (BP) master data governance',
      'Integration matrices verification (OBYC and VKOA)',
      'Practice assessments and mock exam question walkthroughs',
      'Functional Specification Document (FSD) writing skills',
    ],
    regionalFocus: {
      title: 'SAP ERP Training Coimbatore & Tamil Nadu Hub',
      description:
        'Coimbatore is known as the engineering and manufacturing backbone of South India, housing premier textile mills, automotive component manufacturers, precision engineering companies, and rapidly growing IT/ITES corridors in Saravanampatti (CHIL SEZ) and TIDEL Park. Enterprises across Tamil Nadu increasingly deploy SAP S/4HANA to run their supply chains and financial accounting. CloudSwan bridges the talent gap by transforming fresh graduates and finance professionals into certified SAP practitioners ready for top regional employers and multinational tech consultancies.',
      keyAreas: [
        'Manufacturing & Engineering Supply Chain Integration',
        'Coimbatore IT Park (TIDEL & CHIL SEZ) Recruiter Network',
        'Textile & Export House ERP Accounting Simulations',
        'Hybrid Classroom Labs at Gandhipuram & Saravanampatti',
      ],
    },
    ethicalHackingNote: {
      title: 'Enterprise Internal Controls & Audit Governance in SAP',
      subtitle: 'Understanding Compliance, Segregation of Duties (SoD) & Audit Trails',
      description:
        'Modern enterprise systems require strict adherence to internal financial controls and corporate governance standards (SOX compliance, statutory tax accounting). In our SAP program, learners explore how authorizations, tolerance groups, double-blind posting checks, and audit trails safeguard enterprise data against fraudulent transactions.',
      keyFocusAreas: [
        'Segregation of Duties (SoD) Principles',
        'Document Posting Tolerance Groups',
        'Posting Period Controls & Fiscal Year Closing',
        'Statutory Withholding Tax & GST Reporting',
        'Audit Trail Logs (SM21, ST22, Change Documents)',
        'Four-Eyes Principle in Payment Release (F110)',
      ],
      complianceWarning:
        'All laboratory simulations are conducted within isolated training sandbox instances with anonymized data, strictly adhering to corporate data security standards.',
    },
  },

  roadmap: {
    title: 'SAP Career Roadmap',
    subtitle: 'A Step-by-Step Trajectory from Beginner to Lead ERP Consultant',
    steps: [
      {
        step: 1,
        title: 'Understand ERP & Core Business Domains',
        description:
          'Learn the fundamentals of supply chain, financial accounting, procurement cycles, and how ERP platforms unify disparate departments.',
      },
      {
        step: 2,
        title: 'Master SAP GUI & Fiori Navigation',
        description:
          'Get comfortable with transaction codes, standard toolbars, system status, favorites, and the tile-based SAP Fiori web interface.',
      },
      {
        step: 3,
        title: 'Configure Enterprise Organizational Structure',
        description:
          'Define and assign Company Codes, Plants, Storage Locations, Purchasing Organizations, and Sales Areas in the SAP Implementation Guide (SPRO).',
      },
      {
        step: 4,
        title: 'Set Up S/4HANA Business Partner Master Data',
        description:
          'Create customer, vendor, and employee business partners with appropriate BP roles, account groups, and number ranges.',
      },
      {
        step: 5,
        title: 'Deep Dive into SAP FICO (Finance & Controlling)',
        description:
          'Configure Chart of Accounts, G/L accounts, document types, AP vendor workflows, AR customer billing, and cost center management.',
      },
      {
        step: 6,
        title: 'Deep Dive into SAP MM (Procure-to-Pay)',
        description:
          'Configure material masters, purchase info records, source lists, purchase orders, MIGO goods receipts, and MIRO invoice verification.',
      },
      {
        step: 7,
        title: 'Deep Dive into SAP SD (Order-to-Cash)',
        description:
          'Implement sales orders, condition techniques for pricing, outbound shipping deliveries, picking, packing, and customer invoices.',
      },
      {
        step: 8,
        title: 'Master Cross-Module Integration (FI-MM & FI-SD)',
        description:
          'Configure automatic account assignments via OBYC and VKOA, ensuring procurement and sales actions automatically post to financial ledgers.',
      },
      {
        step: 9,
        title: 'Perform Enterprise Data Migration (LTMC)',
        description:
          'Cleanse legacy datasets, populate migration staging templates, and execute automated cutover uploads via SAP Migration Cockpit.',
      },
      {
        step: 10,
        title: 'Execute End-to-End Capstone Business Simulation',
        description:
          'Deliver a complete implementation project for a simulated multinational company, resolving real configuration hurdles and testing scenarios.',
      },
      {
        step: 11,
        title: 'Build Consultant Documentation Portfolio',
        description:
          'Compile configuration blueprints, Functional Specification Documents (FSDs), and test scripts to showcase to hiring managers.',
      },
      {
        step: 12,
        title: 'Certifications, Mock Interviews & Placement',
        description:
          'Practice SAP certification questions, refine consultant CVs, take mock technical interviews, and apply for enterprise ERP consulting roles.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-1',
      question: 'What is SAP ERP and why is it so widely used?',
      answer:
        'SAP (Systems, Applications, and Products in Data Processing) is the world’s leading Enterprise Resource Planning software. It integrates all core business functions—finance, procurement, sales, manufacturing, inventory, and human resources—into a centralized real-time database, enabling global corporations to operate efficiently and compliantly.',
    },
    {
      id: 'faq-2',
      question: 'Can non-IT and commerce graduates learn SAP?',
      answer:
        'Yes, absolutely! In fact, graduates in Commerce (B.Com, M.Com), Business Administration (BBA, MBA), and Finance are exceptionally well-suited for SAP FICO, while Engineering, Arts, and Science graduates excel in SAP MM, SAP SD, and S/4HANA implementation. SAP functional consulting does not require programming knowledge; it focuses on business process workflows and system configuration.',
    },
    {
      id: 'faq-3',
      question: 'Which SAP modules are covered in this course?',
      answer:
        'Our flagship SAP curriculum covers the most in-demand enterprise modules: SAP S/4HANA core architecture, SAP FICO (Financial Accounting & Management Controlling), SAP MM (Materials Management / Procure-to-Pay), and SAP SD (Sales and Distribution / Order-to-Cash), along with cross-module integration (FI-MM and FI-SD) and LTMC data migration.',
    },
    {
      id: 'faq-4',
      question: 'What is the difference between SAP ECC and SAP S/4HANA?',
      answer:
        'SAP ECC is SAP’s traditional ERP suite running on relational databases like Oracle or DB2. SAP S/4HANA is the next-generation business suite built specifically for SAP’s in-memory HANA database. S/4HANA offers vastly faster analytics, a simplified data model (the Universal Journal ACDOCA table), and the modern SAP Fiori web user interface.',
    },
    {
      id: 'faq-5',
      question: 'Does CloudSwan provide live SAP server access for practice?',
      answer:
        'Yes. Every enrolled candidate receives dedicated 24/7 access to live SAP S/4HANA and ECC server sandbox instances. You can practice all configuration steps (SPRO), master data setup, and transaction postings from our high-tech lab workstations or your personal laptop at home.',
    },
    {
      id: 'faq-6',
      question: 'What career roles can I apply for after completing the SAP course?',
      answer:
        'You can pursue roles such as SAP Functional Consultant (FICO / MM / SD), SAP S/4HANA Business Analyst, SAP Associate Consultant, ERP Support Analyst, Supply Chain SAP Specialist, and Junior Implementation Consultant in global IT consulting companies and corporate enterprises.',
    },
    {
      id: 'faq-7',
      question: 'Does the program prepare me for official SAP Global Certification?',
      answer:
        'Yes. The curriculum is mapped against official SAP Certified Application Associate exam blueprints (such as C_TS4FI for Financial Accounting and C_TS452 for Sourcing and Procurement). We provide mock question banks, syllabus walkthroughs, and exam strategy sessions.',
    },
    {
      id: 'faq-8',
      question: 'Where are CloudSwan’s training centers located in Coimbatore?',
      answer:
        'CloudSwan operates state-of-the-art training centers in both Saravanampatti (opposite CHIL SEZ IT Park) and Gandhipuram (Cross Cut Road / 7th Street Corner) in Coimbatore, offering air-conditioned labs, high-speed connectivity, and dedicated mentor workstations.',
    },
    {
      id: 'faq-9',
      question: 'Are online interactive batches available for working professionals?',
      answer:
        'Yes. We offer flexible learning modes including live instructor-led online sessions, early morning weekday batches, evening batches, and weekend batches tailored specifically for working professionals.',
    },
    {
      id: 'faq-10',
      question: 'What practical projects will I work on during the course?',
      answer:
        'You will execute 5 comprehensive enterprise simulation projects, including end-to-end company code financial setup, automated Procure-to-Pay (P2P) cycles, Order-to-Cash (O2C) sales distributions, automatic account determination (OBYC & VKOA), and legacy data migration using the LTMC Migration Cockpit.',
    },
    {
      id: 'faq-11',
      question: 'Does CloudSwan provide placement assistance for SAP students?',
      answer:
        'Yes. CloudSwan provides comprehensive placement support including professional resume crafting tailored for SAP consultant roles, LinkedIn optimization, mock technical interview drills, scenario-based problem solving, and interview connections with hiring partners.',
    },
    {
      id: 'faq-12',
      question: 'How do I get started with the SAP training course?',
      answer:
        'You can book a free counselling session or attend a demo class by clicking the "Enquire Now" or "Book a Free Counselling Session" button. Our senior SAP counselors will guide you toward the right module track based on your educational background and career goals.',
    },
  ],

  finalCta: {
    title: 'Launch Your Global Enterprise Career in SAP ERP',
    subtitle: 'Step into High-Demand SAP Functional Consulting with CloudSwan Coimbatore',
    checkpoints: [
      'Master SAP S/4HANA, FICO, MM & SD on 24/7 live dedicated servers.',
      'Build end-to-end configuration blueprints following SAP Activate.',
      'Execute authentic Procure-to-Pay (P2P) & Order-to-Cash (O2C) lifecycles.',
      'Learn cross-module account determination & modern LTMC migration.',
      'Learn directly from 10+ years experienced enterprise consulting mentors.',
      'Receive full placement assistance, mock technical interviews & certification guidance.',
    ],
    primaryCta: 'Book a Free Counselling Session',
    secondaryCta: 'Explore Course Curriculum',
  },
}
