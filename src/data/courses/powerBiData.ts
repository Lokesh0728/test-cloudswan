import type { CourseData } from '../../types/course'

export const powerBiCourseData: CourseData = {
  id: 'power-bi',
  slug: '/courses/power-bi',
  title: 'Power BI Training Institute in Coimbatore',
  shortTitle: 'Power BI',
  eyebrowBadge: 'Data Analytics & Visualization Track',
  tagline: 'Learn Power BI, Data Analytics & Data Visualization Through Practical Projects',
  heroDescription: [
    'Businesses need more than raw data. They need clear dashboards, meaningful reports and actionable insights to make better decisions.',
    'CloudSwan’s Power BI training in Coimbatore is designed to help learners understand how to transform business data into interactive dashboards and reports using Power BI.',
    'Learn how to work with data, prepare datasets, create data models, build visualizations and develop dashboards that communicate business insights clearly.',
  ],
  primaryCtaText: 'Enquire Now',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'Power BI & Business Analytics',
    duration: '2–3 Months (Flexible Batches)',
    mode: 'Online / Offline, based on available batches',
    level: 'Beginner to Advanced',
    coreSkills: 'Power BI, Data Visualization & Business Analytics',
    advancedTopics: 'DAX Calculations, Power Query, Data Modeling & Power BI Service',
    projects: 'Business Intelligence & Dashboard Projects (6 Projects)',
    certification: 'Course Completion Certificate, if currently offered',
    careerSupport: 'Portfolio Development, Resume Building & BI Mock Interviews',
    mentorSupport: '1-on-1 Mentor Guidance & Dashboard Review Sessions',
  },

  whyLearn: {
    title: 'Why Learn Power BI?',
    intro:
      'Power BI is widely used for business reporting, data analysis and visualization across multinational enterprises and high-growth organizations.',
    description:
      'The focus should not be only on learning Power BI features. It should be on understanding how to use data to answer business questions.',
    competenciesTitle: 'Learning Power BI can help you:',
    competencies: [
      'Convert raw data into meaningful insights',
      'Build interactive dashboards',
      'Create business reports',
      'Analyze sales and marketing data',
      'Identify trends and patterns',
      'Track business performance',
      'Work with multiple data sources',
      'Create data-driven presentations',
      'Support business decision-making',
      'Develop practical analytics skills',
    ],
    summaryNote:
      'The focus should not be only on learning Power BI features. It should be on understanding how to use data to answer business questions.',
  },

  learningPath: {
    title: 'Power BI Learning Path',
    subtitle: 'From Raw Data Ingestion to Executive Visual Dashboards',
    description:
      'CloudSwan provides a structured curriculum guiding you through data ingestion, transformation, relational modeling, DAX metrics, visual design, and cloud distribution:',
    steps: [
      'Power BI Fundamentals',
      'Data Import & Preparation',
      'Power Query Transformation',
      'Relational Data Modeling',
      'DAX & Business Calculations',
      'Data Visualization Principles',
      'Dashboard Design & Reporting',
      'Business Analytics Applications',
      'Advanced DAX & Time Intelligence',
      'Power BI Service & Sharing',
      'Practical Business Dashboards',
      'Portfolio & Career Preparation',
    ],
    outcomeNote:
      'The objective is to transform complex datasets into clear, interactive, and actionable visual insights.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'What Will You Learn?',
    description:
      'A comprehensive 10-module analytics curriculum designed to teach you data preparation with Power Query, complex DAX formulas, interactive visual design, domain analytics, and enterprise report publishing.',
    modules: [
      {
        number: 1,
        title: 'Power BI Fundamentals',
        subtitle: 'Start with the fundamentals of Power BI',
        description:
          'Understand how the Power BI platform fits into the modern business analytics workflow across Desktop and Cloud Service.',
        topics: [
          'Introduction to Power BI & Business Intelligence',
          'Power BI ecosystem & architecture',
          'Power BI Desktop interface & tools',
          'Power BI Service overview',
          'Reports vs Dashboards differences',
          'Connecting to varied data sources',
          'Importing data into Power BI',
          'Connecting to datasets and live connections',
          'Basic data visualization techniques',
          'Report design principles and layout guidelines',
        ],
      },
      {
        number: 2,
        title: 'Data Import & Data Preparation',
        subtitle: 'Turn Raw Data Into Analysis-Ready Data',
        description:
          'Before creating a dashboard, data needs to be properly prepared, cleansed, normalized, and transformed.',
        topics: [
          'Importing data from diverse file formats',
          'Connecting multiple heterogeneous data sources',
          'Data cleaning techniques',
          'Data transformation principles',
          'Removing duplicates & invalid records',
          'Handling missing values and null entries',
          'Changing data types and format adjustments',
          'Renaming columns and structuring headers',
          'Splitting and merging columns',
          'Filtering rows and conditional data pruning',
          'Preparing datasets for optimal analysis',
        ],
      },
      {
        number: 3,
        title: 'Power Query',
        subtitle: 'An essential part of the Power BI data preparation process',
        description:
          'Master Power Query (M formula language concepts) to clean, reshape, append, and merge large enterprise datasets.',
        topics: [
          'Power Query interface and transformation ribbon',
          'Applied steps and repeatable ETL logic',
          'Filtering, sorting, and pivoting rows',
          'Merging queries (joins and lookups)',
          'Appending queries (combining tables)',
          'Data type transformations and locale formatting',
          'Conditional columns creation',
          'Custom columns and formulas',
          'Automated data cleaning workflows',
          'Reusable transformation steps and best practices',
        ],
      },
      {
        number: 4,
        title: 'Data Modeling',
        subtitle: 'Build a Strong Foundation for Your Reports',
        description:
          'A well-designed data model makes Power BI reports faster, easier to analyze, and simpler to maintain over time.',
        topics: [
          'Data modeling fundamentals & ER diagrams',
          'Tables and entity relationships',
          'Primary and foreign keys',
          'Configuring relationships between tables',
          'One-to-many and many-to-many relationships',
          'Cross-filter direction and cardinality',
          'Fact tables design and metrics',
          'Dimension tables design and attributes',
          'Star schema architecture vs Snowflake schema',
          'Data model optimization fundamentals for speed',
        ],
      },
      {
        number: 5,
        title: 'DAX & Calculations',
        subtitle: 'Create Meaningful Business Metrics',
        description:
          'DAX (Data Analysis Expressions) helps create custom calculations, aggregations, KPIs, and measures for deeper data exploration.',
        topics: [
          'DAX fundamentals and syntax',
          'Calculated columns vs DAX Measures',
          'Measures and evaluation context',
          'Basic aggregation functions (SUM, AVERAGE, COUNT, MIN, MAX)',
          'Conditional calculations (IF, SWITCH, RELATED)',
          'Date-based calculations and calendar tables',
          'Filter context fundamentals and CALCULATE function',
          'Time-based analysis and period comparisons',
          'Business KPIs formulation',
          'Creating reusable measures and metrics folders',
        ],
      },
      {
        number: 6,
        title: 'Power BI Data Visualization',
        subtitle: 'Turn Data Into Clear Visual Stories',
        description:
          'Learn how to select and design visualizations based on the business question to create dashboards that are intuitive and interactive.',
        topics: [
          'Bar charts and clustered bar charts',
          'Column charts and stacked column charts',
          'Line charts and trend graphs',
          'Pie and donut charts (when and how to use)',
          'Data tables and conditional formatting',
          'Matrix visuals with hierarchical groupings',
          'Single-value and multi-row Cards',
          'KPI visuals with target goals',
          'Map visuals (Bubble, Filled maps)',
          'Slicers and date range pickers',
          'Visual, page, and report level filters',
          'Interactive cross-highlighting and cross-filtering',
          'Drill-down and drill-through hierarchies',
          'Custom Tooltips and hover analytics',
        ],
      },
      {
        number: 7,
        title: 'Dashboard Design & Reporting',
        subtitle: 'Build Professional Business Dashboards',
        description:
          'Learn how to organize data, visual hierarchy, branding, and interactive navigation into polished executive reports.',
        topics: [
          'Dashboard layout best practices and grids',
          'Visual hierarchy and cognitive load management',
          'Executive KPI cards and scorecard placement',
          'Filters, sync slicers, and selection panels',
          'Interactive reports with bookmarks and buttons',
          'Drill-through destination page creation',
          'Custom page navigation bars',
          'Report formatting, themes, and brand styling',
          'Dashboard usability and accessibility',
          'Data storytelling strategies',
          'Business-focused report design frameworks',
        ],
      },
      {
        number: 8,
        title: 'Business Analytics With Power BI',
        subtitle: 'Connecting Power BI to Real Business Questions',
        description:
          'Power BI becomes more valuable when connected to real business questions across Sales, Marketing, Finance, and Operations.',
        topics: [
          'Sales Analytics: Revenue, sales trends, product and regional performance',
          'Marketing Analytics: Campaign performance, lead sources, conversion metrics, customer acquisition',
          'Financial Analytics: Revenue, operational expenses, profitability, financial trends',
          'Operations Analytics: Productivity, performance metrics, operational trends, resource utilization',
          'Customer Analytics: Customer segments, purchase behavior, lifetime value, retention indicators',
        ],
      },
      {
        number: 9,
        title: 'Advanced Power BI Concepts',
        subtitle: 'Deep-Dive Analytics & Optimization',
        description:
          'Once the fundamentals are clear, explore advanced reporting, time intelligence, dynamic parameters, and query performance tuning.',
        topics: [
          'Advanced DAX concepts and iterator functions (SUMX, AVERAGEX)',
          'Time intelligence functions (YTD, QTD, MTD, SAMEPERIODLASTYEAR)',
          'Advanced data modeling and handling ambiguity',
          'Dynamic reporting using parameters and what-if scenarios',
          'Advanced filtering and security considerations',
          'Multi-level drill-through reports',
          'Interactive dashboard design with custom themes',
          'Performance optimization fundamentals (Performance Analyzer)',
          'Report publishing workflows and deployment pipelines',
          'Workspace concepts and collaboration access',
        ],
      },
      {
        number: 10,
        title: 'Power BI Service & Report Sharing',
        subtitle: 'Publish, Share, and Collaborate Across the Organization',
        description:
          'Learn how reports are published to the cloud, dashboards are assembled, scheduled refreshes are configured, and access is governed.',
        topics: [
          'Publishing reports from Desktop to Power BI Service',
          'Navigating Power BI Service & web workspaces',
          'App Workspaces and permission roles',
          'Pinning visuals to create executive Dashboards',
          'Report sharing and distributing Power BI Apps',
          'Data refresh concepts and Gateway configuration',
          'Row-Level Security (RLS) access management fundamentals',
          'Collaboration workflows, subscriptions, and alerts',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical Power BI Projects',
    subtitle: 'Learn by Building Real Business Dashboards',
    description:
      'Practical projects help learners understand how Power BI is used in real business scenarios. Build interactive, multi-page executive dashboards.',
    items: [
      {
        number: 1,
        title: 'Sales Dashboard',
        description:
          'Build an interactive dashboard showing revenue, sales trends over time, product category performance, regional sales breakdown, and monthly performance targets.',
        focusArea: 'Sales Intelligence & Revenue Analytics',
        toolsUsed: ['Power BI Desktop', 'DAX Measures', 'Clustered Charts', 'Sync Slicers'],
      },
      {
        number: 2,
        title: 'Marketing Analytics Dashboard',
        description:
          'Analyze multi-channel campaign performance, inbound leads, channel conversion metrics, customer acquisition costs, and historical campaign trends.',
        focusArea: 'Marketing ROI & Lead Conversion',
        toolsUsed: ['Power Query', 'Funnel Charts', 'Matrix Visuals', 'KPI Cards'],
      },
      {
        number: 3,
        title: 'Financial Dashboard',
        description:
          'Create a comprehensive financial health dashboard covering revenue streams, operating expenses, gross & net profit margins, monthly budget trends, and financial KPIs.',
        focusArea: 'Financial Performance & Profitability',
        toolsUsed: ['DAX Time Intelligence', 'Waterfall Charts', 'Variance Measures'],
      },
      {
        number: 4,
        title: 'HR Analytics Dashboard',
        description:
          'Analyze employee demographics, department distribution, attendance rates, turnover and retention trends, and workforce productivity metrics.',
        focusArea: 'Human Capital & Workforce Metrics',
        toolsUsed: ['Demographic Visuals', 'Card Rows', 'Drill-Through Reports'],
      },
      {
        number: 5,
        title: 'Customer Analytics Dashboard',
        description:
          'Build a report analyzing customer segments, purchasing patterns, customer lifetime value, cohort trends, and retention behavior indicators.',
        focusArea: 'Customer Segmentation & LTV Analytics',
        toolsUsed: ['RFM Segmentation', 'Scatter Plots', 'Interactive Filters'],
      },
      {
        number: 6,
        title: 'Business Performance Dashboard',
        description:
          'Create an executive-style dashboard combining multiple cross-departmental business KPIs (Sales, Operations, Finance) into one unified interactive report.',
        focusArea: 'Executive Scorecard & KPI Aggregation',
        toolsUsed: ['Power BI Service', 'Executive KPI Cards', 'Bookmarks', 'Navigation'],
      },
    ],
  },

  portfolio: {
    title: 'Build Your Power BI Portfolio',
    subtitle: 'Transform Raw Datasets into Meaningful Business Insights',
    description:
      'A portfolio demonstrates your ability to transform raw datasets into meaningful business insights. For each project, explain: Business Problem → Data → Transformation → Analysis → Dashboard → Insight. This makes your Power BI portfolio easy for recruiters and businesses to understand.',
    deliverables: [
      'Interactive Sales Dashboard tracking revenue, regional metrics, and monthly performance',
      'Marketing Analytics Dashboard analyzing campaign channels, leads, and conversion funnels',
      'Financial Dashboard visualizing revenue, expenses, net profit, and financial KPIs',
      'HR Analytics Dashboard tracking headcount, attendance, and workforce retention metrics',
      'Customer Analytics Dashboard mapping customer segments, purchase behavior, and lifetime value',
      'Executive Business Performance Dashboard combining multi-domain strategic KPIs',
      'Documented Power Query data transformation workflows demonstrating clean ETL practices',
      'DAX Calculations Library showcasing calculated columns, measures, and time intelligence',
      'Production-ready data models implementing star schema with verified relationship integrity',
    ],
    ctaText: 'Build Your Power BI Portfolio',
  },

  targetAudiences: {
    title: 'Who Can Join This Power BI Course?',
    subtitle: 'Empowering Aspirants and Professionals Across Industries',
    audiences: [
      {
        id: 'students',
        title: 'Students',
        description:
          'Build practical data visualization and analytics skills alongside your academic education to gain a competitive edge.',
      },
      {
        id: 'graduates',
        title: 'Fresh Graduates',
        description:
          'Develop Power BI and business analytics skills for data-related entry and junior career opportunities.',
      },
      {
        id: 'professionals',
        title: 'Working Professionals',
        description:
          'Use Power BI to improve reporting, build interactive dashboards, and drive data-backed decision-making in your current role.',
      },
      {
        id: 'analysts',
        title: 'Data Analysts',
        description:
          'Strengthen your dashboard development, data modeling, complex DAX logic, and business intelligence capabilities.',
      },
      {
        id: 'business-pros',
        title: 'Business Professionals',
        description:
          'Learn how to convert operational and financial business data into meaningful executive reports and actionable insights.',
      },
      {
        id: 'career-switchers',
        title: 'Career Switchers',
        description:
          'Build a strong foundation in data visualization and business analytics to transition into business intelligence roles.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Power BI Career Opportunities',
    subtitle: 'Explore High-Demand Business Intelligence & Reporting Roles',
    description:
      'After developing practical Power BI and analytics skills, learners can explore roles such as:',
    roles: [
      'Power BI Developer',
      'Power BI Analyst',
      'Business Intelligence Analyst',
      'Data Analyst',
      'Business Analyst',
      'Reporting Analyst',
      'BI Developer',
      'Data Visualization Analyst',
      'Business Intelligence Consultant',
    ],
    disclaimer:
      'Career opportunities depend on your overall technical skills, analytical ability, portfolio and professional experience.',
  },

  toolsStack: {
    title: 'Power BI Tools & Technologies',
    subtitle: 'Dedicated Visual Tool-Stack Section',
    description:
      'Learn the industry tools and platforms used for business intelligence, data preparation, calculation modeling, and source connectivity:',
    categories: [
      {
        category: 'Business Intelligence',
        description: 'Core BI authoring, modeling, and distribution tools',
        tools: ['Microsoft Power BI', 'Power BI Desktop', 'Power BI Service', 'Power BI Mobile'],
      },
      {
        category: 'Data Preparation',
        description: 'ETL engine and data cleaning workflows',
        tools: ['Power Query', 'Power Query Editor', 'M Language Concepts', 'Data Connectors'],
      },
      {
        category: 'Data Analysis',
        description: 'Calculations, metrics, and relationship architecture',
        tools: ['DAX (Data Analysis Expressions)', 'Data Modeling', 'Star Schema', 'Time Intelligence'],
      },
      {
        category: 'Data Sources',
        description: 'Heterogeneous source connectivity',
        tools: ['Excel', 'CSV', 'SQL Databases (SQL Server, MySQL)', 'Cloud Business Sources'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan for Power BI Training?',
    subtitle: 'Practical Excellence in Business Intelligence',
    pillars: [
      {
        title: 'Practical Learning',
        description:
          'Learn Power BI through exercises, real-world business datasets and practical dashboard projects.',
      },
      {
        title: 'Business-Focused Analytics',
        description:
          'Understand how Power BI can be used to solve real business reporting and analysis requirements across domains.',
      },
      {
        title: 'Project-Based Approach',
        description:
          'Build comprehensive multi-page dashboards that become tangible proof of competence in your portfolio.',
      },
      {
        title: 'Data Visualization Skills',
        description:
          'Learn how to communicate insights effectively through visual hierarchy, color theory, and dashboard usability.',
      },
      {
        title: 'Mentor Guidance',
        description:
          'Get direct guidance while working through Power BI concepts, DAX formulas, exercises, and project deliverables.',
      },
      {
        title: 'Portfolio Development',
        description:
          'Build practical dashboards that demonstrate your analytical, modeling, and visualization skills to employers.',
      },
    ],
  },

  certification: {
    title: 'Power BI Certification Course in Coimbatore',
    subtitle: 'Course Completion & Industry-Recognized Portfolio Validation',
    description:
      'A Power BI certification can demonstrate that you have completed structured training and developed knowledge of Power BI and business analytics concepts. However, practical projects are equally important. A strong Power BI learning profile includes interactive dashboards, data transformation projects, DAX calculations, and data models.',
    highlights: [
      'Power BI Desktop & Service Core Architecture',
      'Advanced Power Query ETL Data Cleansing & Transformation',
      'Star Schema Data Modeling & Relationship Optimization',
      'Complex DAX Measures, Calculated Columns & Time Intelligence',
      'Executive Visual Storytelling & Interactive Dashboard Layouts',
      'Power BI Service Workspace Management & Secure Sharing',
    ],
    regionalFocus: {
      title: 'Power BI Business Analytics Training in Tamil Nadu',
      description:
        "Power BI can be used across different business functions to turn data into understandable reports and insights. A practical business analytics learning path helps learners work with sales analytics, marketing analytics, financial analytics, customer analytics, HR analytics, operational analytics, and business performance reporting. The focus is on understanding the business question first and then using data and visualization to communicate the answer.",
      keyAreas: [
        'Dual Coimbatore Campuses (Gandhipuram & Saravanampatti)',
        'Classroom & Interactive Live Online Batches',
        'Direct Mentor Guidance & Lab Access',
        'Executive Capstone Dashboard Reviews',
      ],
    },
    ethicalHackingNote: {
      title: 'Power BI Data Visualization Course in Tamil Nadu',
      subtitle: 'Clear and Actionable Visual Insights',
      description:
        'Data visualization is more than choosing different chart types. Effective visualization requires understanding what the data represents, who will use the report, what decision needs to be made, which metric matters, and which visual communicates the information clearly. Learners practice creating dashboards using charts, KPI cards, tables, maps, filters, slicers, interactive reports, drill-downs, and custom layouts.',
      keyFocusAreas: [
        'Audience-Focused Dashboard Layouts',
        'KPI Card & Gauge Formulation',
        'Interactive Drill-Through Pages',
        'Sync Slicers & Dynamic Filters',
        'Custom Tooltips & Storytelling',
      ],
      complianceWarning:
        'Always validate DAX measures against source numbers and explain: Business Problem → Data → Transformation → Analysis → Dashboard → Insight.',
    },
  },

  roadmap: {
    title: 'Power BI Learning Roadmap',
    subtitle: '10-Step Journey from Data Ingestion to Business Intelligence Roles',
    steps: [
      {
        step: 1,
        title: 'Learn Power BI Fundamentals',
        description:
          'Understand the Power BI ecosystem, interface, report vs dashboard concepts, and data connectivity.',
      },
      {
        step: 2,
        title: 'Learn Data Import & Power Query',
        description:
          'Import data from files and databases, clean records, remove duplicates, transform columns, and build ETL steps.',
      },
      {
        step: 3,
        title: 'Understand Data Modeling',
        description:
          'Design star schemas, build relationships between tables, define keys, and configure cardinality.',
      },
      {
        step: 4,
        title: 'Learn DAX & Business Calculations',
        description:
          'Write measures, calculated columns, aggregation functions, CALCULATE filter context, and KPIs.',
      },
      {
        step: 5,
        title: 'Master Data Visualization',
        description:
          'Select the right visuals: bar charts, line graphs, matrix tables, KPI cards, maps, and custom tooltips.',
      },
      {
        step: 6,
        title: 'Build Interactive Dashboards',
        description:
          'Incorporate slicers, page navigation, drill-through, bookmarks, and cross-filtering for seamless user interaction.',
      },
      {
        step: 7,
        title: 'Apply Power BI to Business Analytics',
        description:
          'Solve domain-specific problems across Sales, Marketing, Finance, HR, and Operational analytics.',
      },
      {
        step: 8,
        title: 'Complete Practical Projects',
        description:
          'Build end-to-end projects: Sales Dashboard, Marketing Dashboard, Financial Reports, and HR Analytics.',
      },
      {
        step: 9,
        title: 'Build Your Power BI Portfolio',
        description:
          'Assemble interactive dashboards and document your problem-solving approach to showcase to employers.',
      },
      {
        step: 10,
        title: 'Prepare for Career Opportunities',
        description:
          'Prepare for technical BI interviews, scenario questions, DAX problem solving, and resume optimization.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-pbi-1',
      question: 'What is Power BI?',
      answer:
        'Power BI is a business intelligence and data visualization platform used to connect, transform, analyze and visualize data through interactive reports and dashboards.',
    },
    {
      id: 'faq-pbi-2',
      question: 'What will I learn in a Power BI course?',
      answer:
        'You can learn Power BI fundamentals, Power Query, data cleaning, data modeling, DAX, data visualization, dashboard development, business analytics and Power BI reporting.',
    },
    {
      id: 'faq-pbi-3',
      question: 'Is Power BI difficult to learn?',
      answer:
        'Beginners can start with basic data import and visualization before progressing to data modeling, DAX and advanced dashboard development.',
    },
    {
      id: 'faq-pbi-4',
      question: 'Is coding required for Power BI?',
      answer:
        'Power BI does not require traditional software development skills to create basic reports and dashboards. However, learning DAX and data concepts is important for advanced Power BI work.',
    },
    {
      id: 'faq-pbi-5',
      question: 'Is Excel knowledge required for Power BI?',
      answer:
        'Excel experience can be useful, but beginners can learn Power BI without advanced Excel knowledge.',
    },
    {
      id: 'faq-pbi-6',
      question: 'Is Power BI useful for Data Analysts?',
      answer:
        'Yes. Power BI is useful for creating dashboards, analyzing business data, tracking KPIs and communicating insights.',
    },
    {
      id: 'faq-pbi-7',
      question: 'Who should learn Power BI?',
      answer:
        'Students, fresh graduates, data analysts, business professionals, working professionals and career switchers interested in data analytics and business intelligence can learn Power BI.',
    },
    {
      id: 'faq-pbi-8',
      question: 'What projects can I build during Power BI training?',
      answer:
        'Projects can include sales dashboards, marketing dashboards, financial reports, HR analytics dashboards, customer analytics and business performance dashboards.',
    },
    {
      id: 'faq-pbi-9',
      question: 'What is DAX in Power BI?',
      answer:
        'DAX, or Data Analysis Expressions, is a formula language used in Power BI to create calculations, measures and analytical expressions.',
    },
    {
      id: 'faq-pbi-10',
      question: 'What is Power Query?',
      answer:
        'Power Query is used to connect to data sources and clean, transform and prepare data before analysis.',
    },
    {
      id: 'faq-pbi-11',
      question: 'Can Power BI help with business decision-making?',
      answer:
        'Yes. Power BI can help organizations monitor KPIs, identify trends, compare performance and understand business data through interactive reports and dashboards.',
    },
    {
      id: 'faq-pbi-12',
      question: 'What career opportunities are available after Power BI training?',
      answer:
        'Depending on your skills and experience, you can explore roles such as Power BI Developer, Data Analyst, Business Intelligence Analyst, Reporting Analyst and Business Analyst.',
    },
  ],

  finalCta: {
    title: 'Start Your Power BI Journey',
    subtitle:
      'Master Power Query, DAX, data modeling, and interactive executive reporting with practical business case studies in Coimbatore.',
    checkpoints: [
      'Master Power Query & complex data modeling',
      'Write advanced DAX measures & calculations',
      'Build interactive business intelligence dashboards',
      'Create 5 executive reporting portfolio projects',
    ],
    primaryCta: 'Enquire Now',
    secondaryCta: 'Book a Free Counselling Session',
  },
}
