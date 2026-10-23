import type { CourseData } from '../../types/course'

export const dataEngineeringCourseData: CourseData = {
  id: 'data-engineering',
  slug: '/courses/data-engineering',
  title: 'Data Engineering Training Institute in Coimbatore',
  shortTitle: 'Data Engineering',
  eyebrowBadge: 'Data Pipelines, SQL, Python & Cloud Track',
  tagline: 'Learn Data Engineering, SQL, Python, Cloud & Data Pipelines Through Practical Projects',
  heroDescription: [
    'Modern businesses generate large amounts of data every day. Data engineers build the systems and pipelines that collect, process, transform and organize this data so it can be used for analytics, reporting, machine learning and business decision-making.',
    'CloudSwan’s Data Engineering training in Coimbatore is designed to help learners understand the fundamentals of data engineering and develop practical skills in databases, SQL, Python, ETL, data pipelines, cloud platforms and data processing.',
    'Learn how data moves from different sources into reliable, structured systems that businesses can use.',
  ],
  primaryCtaText: 'Enquire Now',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'Data Engineering',
    duration: '3–4 Months (Flexible Batches)',
    mode: 'Online / Offline, based on available batches',
    level: 'Beginner to Advanced',
    coreSkills: 'Data Pipelines, SQL, Python, Databases & Cloud',
    advancedTopics: 'Data Warehousing, Big Data, Cloud Infrastructure, Data Quality',
    projects: 'Data Engineering & Pipeline Projects (7 Practical Projects)',
    certification: 'Course Completion Certificate, if currently offered',
    careerSupport: 'Portfolio Development, Resume Building & Technical Mock Interviews',
    mentorSupport: '1-on-1 Mentor Guidance & Pipeline Architecture Reviews',
  },

  whyLearn: {
    title: 'Why Learn Data Engineering?',
    intro:
      'Data engineering is an important part of the modern data ecosystem. Before organizations can analyze data or build machine learning solutions, they need reliable systems to collect, process, transform and store that data.',
    description:
      'The focus should be on understanding how data moves through an organization, rather than learning individual tools in isolation.',
    competenciesTitle: 'Learning data engineering can help you understand how to:',
    competencies: [
      'Work with large datasets',
      'Design and manage data pipelines',
      'Extract data from different sources',
      'Clean and transform data',
      'Work with relational databases',
      'Use SQL for data processing',
      'Automate data workflows',
      'Work with cloud-based data systems',
      'Prepare data for analytics and machine learning',
      'Build practical data infrastructure',
    ],
    summaryNote:
      'The focus should be on understanding how data moves through an organization, rather than learning individual tools in isolation.',
  },

  learningPath: {
    title: 'Data Engineering Learning Path',
    subtitle: 'From Database Foundations to Resilient Cloud-Scale Data Pipelines',
    description:
      "CloudSwan's Data Engineering curriculum provides a structured, progressive engineering path connecting foundational query mechanics to distributed cloud pipelines:",
    steps: [
      'Data Engineering Fundamentals',
      'Master SQL & Relational Databases',
      'Python for Data Processing & Automation',
      'ETL & ELT Pipeline Design',
      'Data Warehousing & Dimensional Modeling',
      'Big Data & Distributed Architecture',
      'Cloud Data Infrastructure & Services',
      'Data Transformation & Quality Checks',
      'Pipeline Orchestration & Monitoring',
      'Practical Hands-on Projects',
      'Data Engineering Portfolio Assembly',
      'Career Opportunities & Interview Prep',
    ],
    outcomeNote:
      'The learning approach connects technical concepts with practical data workflows and real-world pipeline projects.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'What Will You Learn?',
    description:
      'A comprehensive 10-module engineering curriculum covering the complete data lifecycle: collection, transformation, storage, warehousing, cloud orchestration, and automated pipeline monitoring.',
    modules: [
      {
        number: 1,
        title: 'Data Engineering Fundamentals',
        subtitle: 'Start with the foundations of modern data engineering',
        description:
          'Understand the core principles of data engineering, lifecycle stages, and how reliable data infrastructure powers modern organizations.',
        topics: [
          'What is Data Engineering?',
          'The data engineering lifecycle',
          'Data sources (APIs, databases, logs, files)',
          'Structured and unstructured data',
          'Data collection methodologies',
          'Data processing paradigms',
          'Data transformation overview',
          'Data storage architectures',
          'Data pipelines fundamentals',
          'ETL vs ELT architectures',
          'Batch processing vs streaming concepts',
          'Real-time data processing fundamentals',
          'Data quality and system reliability',
        ],
      },
      {
        number: 2,
        title: 'SQL & Database Management',
        subtitle: 'Build Strong Data Querying Skills',
        description:
          'SQL is one of the most important skills for working with structured data. Master complex querying, data manipulation, and optimization.',
        topics: [
          'SQL fundamentals & RDBMS principles',
          'Database concepts, schemas, and normalization',
          'Tables, relationships, and constraints',
          'SELECT statements & filtering logic',
          'Filtering, sorting, and conditional statements',
          'Joins (INNER, LEFT, RIGHT, FULL, CROSS)',
          'Aggregations and GROUP BY logic',
          'Subqueries and nested selections',
          'Common Table Expressions (CTEs)',
          'Window functions (ROW_NUMBER, RANK, LEAD, LAG)',
          'Data manipulation (INSERT, UPDATE, DELETE, MERGE)',
          'Database indexing and query optimization fundamentals',
        ],
      },
      {
        number: 3,
        title: 'Python for Data Engineering',
        subtitle: 'Automate data processing and engineering workflows',
        description:
          'Learn how Python is utilized to automate data ingestion, clean messy datasets, interface with APIs, and build lightweight pipelines.',
        topics: [
          'Python fundamentals for data professionals',
          'Variables, collections, and custom data types',
          'Functions, modular design, and packages',
          'Loops, list comprehensions, and control flow',
          'File handling (CSV, JSON, Parquet, XML)',
          'Exception handling and logging',
          'Working with REST APIs and HTTP requests',
          'Data processing with Python',
          'Data transformation logic',
          'Automation scripting',
          'Working with structured datasets',
        ],
      },
      {
        number: 4,
        title: 'ETL & Data Pipelines',
        subtitle: 'Learn How Data Moves From Source to Destination',
        description:
          'ETL and data pipelines are central to data engineering: Extract (Collect from sources), Transform (Clean, validate and convert), Load (Move to target database).',
        topics: [
          'ETL architecture & design patterns',
          'ELT concepts in modern data clouds',
          'Data ingestion techniques',
          'Data transformation pipelines',
          'Pipeline scheduling and trigger mechanisms',
          'Data validation rules & data integrity checks',
          'Error handling and fallback strategies',
          'Pipeline monitoring and alert systems',
          'Workflow automation',
        ],
      },
      {
        number: 5,
        title: 'Data Warehousing',
        subtitle: 'Understand how organizations store structured data for reporting and analytics',
        description:
          'Master modern data warehousing concepts, dimensional schemas, analytical queries, and storage optimization for business intelligence.',
        topics: [
          'Data warehouse fundamentals',
          'OLTP vs OLAP architecture differences',
          'Fact tables and transaction metrics',
          'Dimension tables and attributes',
          'Star schema modeling',
          'Snowflake schema design',
          'Data modeling for analytical workloads',
          'Data warehouse architecture & layers',
          'Data loading strategies (full refresh vs incremental)',
          'Data transformation inside warehouses',
          'Optimizing analytical workloads',
        ],
      },
      {
        number: 6,
        title: 'Big Data Fundamentals',
        subtitle: 'Understand the challenges involved in processing large-scale datasets',
        description:
          'Explore distributed storage and computing frameworks designed to process massive volumes, velocities, and varieties of enterprise data.',
        topics: [
          'Big Data concepts & the 5 Vs of data',
          'Distributed data processing architectures',
          'Batch processing mechanisms',
          'Data scalability (vertical vs horizontal scaling)',
          'Distributed storage systems',
          'Modern data lake concepts',
          'Large-scale data workflows',
          'Curriculum-aligned big data technologies (Spark, Hadoop, Kafka)',
        ],
      },
      {
        number: 7,
        title: 'Cloud Data Engineering',
        subtitle: 'Build Data Workflows in the Cloud',
        description:
          'Cloud platforms have become an important part of modern data infrastructure. Learn the fundamentals of building and managing cloud-based data workflows.',
        topics: [
          'Cloud computing fundamentals for data engineers',
          'Cloud data architecture principles',
          'Cloud object storage (e.g. AWS S3, Cloud Buckets)',
          'Cloud relational & analytical databases',
          'Cloud-based data ingestion services',
          'Cloud-based data pipelines',
          'Serverless data processing',
          'Data security fundamentals, IAM & encryption',
          'Cloud monitoring, logging, and cost management',
        ],
      },
      {
        number: 8,
        title: 'Data Processing & Transformation',
        subtitle: 'Convert raw data into reliable and analysis-ready datasets',
        description:
          'Understand how raw data becomes trusted data that can be used for downstream analytics, dashboards, and machine learning.',
        topics: [
          'Data cleaning techniques',
          'Data validation frameworks',
          'Data transformation & schema mapping',
          'Missing data handling & imputation',
          'Duplicate data identification and deduplication',
          'Data standardization & normal formatting',
          'Data formatting across date/time and currency standards',
          'Data quality checks & assertions',
          'Automated transformation workflows',
        ],
      },
      {
        number: 9,
        title: 'Data Modeling',
        subtitle: 'Structure data for efficient storage and analysis',
        description:
          'Learn how data can be structured for fast querying, scalable growth, clear relationships, and enterprise reporting.',
        topics: [
          'Data modeling fundamentals',
          'Entity relationships & cardinality',
          'Relational modeling & normal forms (1NF, 2NF, 3NF)',
          'Dimensional modeling methodologies',
          'Fact tables design & granularity',
          'Dimension tables (SCD Type 1, 2)',
          'Data relationships and integrity constraints',
          'Schema design best practices',
          'Data warehouse modeling for reporting',
        ],
      },
      {
        number: 10,
        title: 'Data Engineering Workflow & Monitoring',
        subtitle: 'A reliable data pipeline needs more than just data processing',
        description:
          'Master orchestration, scheduling, logging, and performance monitoring to ensure production data pipelines run reliably 24/7.',
        topics: [
          'Pipeline scheduling (cron, trigger events)',
          'Workflow management & DAG concepts',
          'Robust error handling and retry mechanisms',
          'Logging architectures and alert systems',
          'Automated data validation and reconciliation',
          'Pipeline monitoring and latency tracking',
          'Data quality SLA management',
          'Performance monitoring & bottleneck resolution',
          'Troubleshooting failed runs',
          'Technical documentation and data dictionaries',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical Data Engineering Projects',
    subtitle: 'Learn by Building Real Data Workflows',
    description:
      'Practical projects help learners understand how individual concepts work together. Work through the complete data engineering process.',
    items: [
      {
        number: 1,
        title: 'Customer Data Pipeline',
        description:
          'Build an automated workflow to collect, clean, standardize, and transform customer information from multiple inbound sources.',
        focusArea: 'Data Ingestion & Cleaning',
        toolsUsed: ['Python', 'SQL', 'Data Standardization', 'CSV/JSON'],
      },
      {
        number: 2,
        title: 'Sales Data Engineering Pipeline',
        description:
          'Create a resilient pipeline that processes raw sales transactions, calculates business metrics, and prepares data for business reporting.',
        focusArea: 'Transaction Processing & Aggregation',
        toolsUsed: ['SQL', 'Python', 'Aggregations', 'Schema Modeling'],
      },
      {
        number: 3,
        title: 'ETL Pipeline',
        description:
          'Build an end-to-end ETL workflow that extracts data from multiple sources, transforms it using structured rules, and loads it into a target database.',
        focusArea: 'Extract, Transform, Load (ETL)',
        toolsUsed: ['Python', 'SQL', 'Target Relational DB', 'ETL Logic'],
      },
      {
        number: 4,
        title: 'Data Warehouse Project',
        description:
          'Design a complete data warehouse structure using fact and dimension tables, star schema, and analytical query views for enterprise BI.',
        focusArea: 'Data Warehousing & Dimensional Modeling',
        toolsUsed: ['Star Schema', 'Fact & Dimension Tables', 'OLAP Design'],
      },
      {
        number: 5,
        title: 'Cloud Data Pipeline',
        description:
          'Build a cloud-based workflow for storing, staging, and processing high-volume datasets using modern cloud storage and databases.',
        focusArea: 'Cloud Data Infrastructure',
        toolsUsed: ['Cloud Storage', 'Cloud Databases', 'Ingestion Services'],
      },
      {
        number: 6,
        title: 'Data Quality Pipeline',
        description:
          'Create automated validation checks and logging assertions to detect missing, duplicate, corrupt, or inconsistent data before downstream loading.',
        focusArea: 'Data Validation & Quality Assurance',
        toolsUsed: ['Validation Rules', 'Logging Frameworks', 'Alerts'],
      },
      {
        number: 7,
        title: 'End-to-End Data Engineering Project',
        description:
          'Bring together SQL, Python, ETL, data processing, storage, and reporting into one complete, production-grade automated data workflow.',
        focusArea: 'Comprehensive Capstone Engineering',
        toolsUsed: ['SQL', 'Python', 'ETL', 'Data Warehouse', 'Automated Scheduler'],
      },
    ],
  },

  portfolio: {
    title: 'Build Your Data Engineering Portfolio',
    subtitle: 'Demonstrate Practical Engineering Capabilities to Employers',
    description:
      'A strong portfolio can demonstrate how you apply data engineering concepts to practical problems. For every project, document: Problem → Data Source → Pipeline → Transformation → Storage → Output.',
    deliverables: [
      'SQL data analysis and advanced query optimization repositories',
      'Python data-processing scripts for file parsing, cleaning, and API ingestion',
      'Production-style ETL pipeline extracting, transforming, and loading structured datasets',
      'Data warehouse design models implementing star schema with fact and dimension tables',
      'Data transformation workflow handling missing values, anomalies, and schema shifts',
      'Cloud data pipeline architecture utilizing scalable cloud storage and compute',
      'Automated data quality project with validation assertions and audit logs',
      'End-to-end data engineering capstone project connecting ingestion to analytical views',
    ],
    ctaText: 'Build Your Data Engineering Portfolio',
  },

  targetAudiences: {
    title: 'Who Can Join This Data Engineering Course?',
    subtitle: 'Structured for Students, Analysts & Tech Professionals',
    audiences: [
      {
        id: 'students',
        title: 'Students',
        description:
          'Build practical, job-ready data engineering and database skills alongside your academic education.',
      },
      {
        id: 'graduates',
        title: 'Fresh Graduates',
        description:
          'Develop foundational and advanced skills in SQL, Python, databases, and automated data pipelines.',
      },
      {
        id: 'working-professionals',
        title: 'Working Professionals',
        description:
          'Add data engineering skills to an existing technology, software development, or analytics career.',
      },
      {
        id: 'data-analysts',
        title: 'Data Analysts',
        description:
          'Develop deeper technical knowledge of data pipelines, database architecture, and data infrastructure.',
      },
      {
        id: 'career-switchers',
        title: 'Career Switchers',
        description:
          'Build a structured technical foundation before transitioning smoothly into high-demand data engineering roles.',
      },
      {
        id: 'tech-professionals',
        title: 'Technology Professionals',
        description:
          'Expand your knowledge of databases, distributed systems, cloud platforms, and modern data architectures.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Data Engineering Career Opportunities',
    subtitle: 'Explore High-Demand Data Infrastructure Roles',
    description:
      'After developing the required technical and practical skills, learners can explore roles such as:',
    roles: [
      'Data Engineer',
      'Junior Data Engineer',
      'Cloud Data Engineer',
      'ETL Developer',
      'Data Pipeline Developer',
      'Database Developer',
      'Data Warehouse Developer',
      'Big Data Engineer',
      'Data Platform Engineer',
      'Analytics Engineer',
    ],
    disclaimer:
      'Career opportunities depend on your technical skills, project experience, portfolio and professional background.',
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'Dedicated Technology Section',
    description:
      'Master the tools, languages, database engines, and pipeline frameworks used across modern data teams:',
    categories: [
      {
        category: 'Programming',
        description: 'Core scripting and data transformation language',
        tools: ['Python', 'Python Data Libraries', 'Automation Scripts', 'API Clients'],
      },
      {
        category: 'Databases',
        description: 'Relational database systems and advanced querying',
        tools: ['SQL', 'Relational Databases', 'PostgreSQL', 'MySQL'],
      },
      {
        category: 'Data Engineering',
        description: 'Pipeline, ETL, and data transformation frameworks',
        tools: ['ETL / ELT Tools', 'Data Pipeline Technologies', 'Data Processing Platforms'],
      },
      {
        category: 'Cloud',
        description: 'Scalable cloud infrastructure and storage',
        tools: ['Cloud Storage', 'Cloud Databases', 'Cloud Data Services'],
      },
      {
        category: 'Data & Analytics',
        description: 'Analytical modeling and visualization endpoints',
        tools: ['Data Modeling Tools', 'Reporting Platforms', 'Data Quality Assertions'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan for Data Engineering?',
    subtitle: 'Practical Excellence in Applied Data Systems',
    pillars: [
      {
        title: 'Practical Learning',
        description:
          'Learn concepts through exercises, assignments and practical data pipeline projects rather than theoretical overviews.',
      },
      {
        title: 'Industry-Relevant Skills',
        description:
          'Develop knowledge across SQL, Python, databases, ETL, data pipelines, and cloud data concepts demanded by employers.',
      },
      {
        title: 'Project-Based Approach',
        description:
          'Build practical data engineering projects that can become tangible, verifiable proof of skill in your portfolio.',
      },
      {
        title: 'Mentor Guidance',
        description:
          'Receive continuous guidance while working through technical concepts, database queries, and architectural designs.',
      },
      {
        title: 'Portfolio Development',
        description:
          'Document your projects and workflows to demonstrate your practical engineering capabilities to recruiters.',
      },
      {
        title: 'Career Preparation',
        description:
          'Build the technical foundation and project experience needed to pursue lucrative data-related career opportunities.',
      },
    ],
  },

  certification: {
    title: 'Data Engineering Certification Course in Coimbatore',
    subtitle: 'Course Completion & Verified Engineering Credentials',
    description:
      'A Data Engineering certification can demonstrate that you have completed structured training and developed an understanding of core data engineering concepts. However, a certificate should be supported by practical work. A strong learning profile includes SQL projects, Python projects, ETL pipelines, and cloud data engineering.',
    highlights: [
      'Relational Database Modeling & Complex SQL Query Optimization',
      'Python Data Processing & Automation Scripting',
      'End-to-End ETL and ELT Pipeline Architecture',
      'Data Warehousing, Star Schema & Analytical Workloads',
      'Cloud-Based Data Storage & Pipeline Orchestration',
      'Data Quality Validation Checks & Production Monitoring',
    ],
    regionalFocus: {
      title: 'Data Engineering Training Institute in Tamil Nadu',
      description:
        "Data engineering skills are relevant across organizations that collect, process and analyze large amounts of information. Learners from across Tamil Nadu can develop practical knowledge in SQL, Python, databases, ETL, data pipelines, data warehousing, data processing, cloud data engineering, data quality, and data architecture fundamentals. The learning approach connects technical concepts with practical data workflows and projects.",
      keyAreas: [
        'Dual Coimbatore Campuses (Gandhipuram & Saravanampatti)',
        'Classroom & Interactive Live Online Batches',
        'Direct Mentor Guidance & Lab Workstations',
        'Industry Capstone Architecture Evaluation',
      ],
    },
    ethicalHackingNote: {
      title: 'Cloud Data Engineering Course in Tamil Nadu',
      subtitle: 'Scalable Systems for Storing, Processing and Managing Data',
      description:
        'Cloud platforms allow organizations to build scalable systems for storing, processing and managing data. A cloud-focused data engineering learning path covers cloud fundamentals, cloud storage, cloud databases, data ingestion, cloud data pipelines, data processing, data security fundamentals, monitoring, and cloud data architecture.',
      keyFocusAreas: [
        'Cloud Storage & Data Lake Architecture',
        'Cloud Relational & Analytical Databases',
        'Cloud Ingestion & Data Pipelines',
        'Security, Encryption & IAM Policies',
        'Pipeline Monitoring & Alerts',
      ],
      complianceWarning:
        'Certification should always be backed by functional code repositories and documented pipelines showing: Problem → Data Source → Pipeline → Transformation → Storage → Output.',
    },
  },

  roadmap: {
    title: 'Data Engineering Learning Roadmap',
    subtitle: '9-Step Technical Progression from SQL to Production Pipelines',
    steps: [
      {
        step: 1,
        title: 'Learn Data Engineering Fundamentals',
        description:
          'Understand the data engineering lifecycle, data sources, structured vs unstructured data, and pipeline architectures.',
      },
      {
        step: 2,
        title: 'Master SQL & Databases',
        description:
          'Master tables, relationships, joins, aggregations, subqueries, CTEs, window functions, and database optimization.',
      },
      {
        step: 3,
        title: 'Learn Python for Data Engineering',
        description:
          'Write Python scripts to read files, clean datasets, transform data, connect with APIs, and automate repetitive tasks.',
      },
      {
        step: 4,
        title: 'Understand ETL & Data Pipelines',
        description:
          'Learn how data moves from source to destination: extract, transform, load, pipeline scheduling, and error handling.',
      },
      {
        step: 5,
        title: 'Learn Data Warehousing & Modeling',
        description:
          'Design star and snowflake schemas, fact and dimension tables, OLAP cubes, and data warehouse architectures.',
      },
      {
        step: 6,
        title: 'Explore Cloud Data Engineering',
        description:
          'Build cloud-based data workflows utilizing cloud storage, cloud databases, ingestion services, and monitoring.',
      },
      {
        step: 7,
        title: 'Build Practical Projects',
        description:
          'Develop customer data pipelines, sales pipelines, ETL workflows, data warehouse schemas, and data quality checks.',
      },
      {
        step: 8,
        title: 'Create Your Data Engineering Portfolio',
        description:
          'Document complete pipeline architectures with Problem → Source → Pipeline → Transformation → Storage → Output.',
      },
      {
        step: 9,
        title: 'Prepare for Data Engineering Opportunities',
        description:
          'Prepare for technical interview questions, architecture whiteboarding, and resume presentation for top data roles.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-de-1',
      question: 'What is Data Engineering?',
      answer:
        'Data engineering is the process of designing systems and workflows that collect, process, transform, store and prepare data for analytics, reporting and other business applications.',
    },
    {
      id: 'faq-de-2',
      question: 'What will I learn in a Data Engineering course?',
      answer:
        'You can learn SQL, Python, databases, ETL, data pipelines, data warehousing, data modeling, data processing and cloud data engineering fundamentals.',
    },
    {
      id: 'faq-de-3',
      question: 'Is Data Engineering difficult for beginners?',
      answer:
        'Data engineering requires learning several technical concepts, but beginners can start with fundamentals such as SQL, databases and Python before moving into pipelines and cloud technologies.',
    },
    {
      id: 'faq-de-4',
      question: 'Is coding required for Data Engineering?',
      answer:
        'Yes, basic programming knowledge is useful for data engineering. Python is commonly used for data processing and automation, while SQL is essential for working with databases.',
    },
    {
      id: 'faq-de-5',
      question: 'Is SQL important for Data Engineering?',
      answer:
        'Yes. SQL is an important skill for querying, transforming and managing structured data across relational databases and modern data warehouses.',
    },
    {
      id: 'faq-de-6',
      question: 'Is Python required for Data Engineering?',
      answer:
        'Python is highly useful for data processing, automation, API integration and building data workflows, making it a core skill for data engineers.',
    },
    {
      id: 'faq-de-7',
      question: 'Who should learn Data Engineering?',
      answer:
        'Students, fresh graduates, data analysts, technology professionals and career switchers with an interest in data and technology can consider learning data engineering.',
    },
    {
      id: 'faq-de-8',
      question: 'What projects can I build during Data Engineering training?',
      answer:
        'Projects can include ETL pipelines, customer data pipelines, sales data workflows, data warehouse projects, cloud pipelines and data quality workflows.',
    },
    {
      id: 'faq-de-9',
      question: 'What is Cloud Data Engineering?',
      answer:
        'Cloud data engineering involves designing and managing data storage, processing and pipeline workflows using cloud-based infrastructure and services.',
    },
    {
      id: 'faq-de-10',
      question: 'Can a Data Analyst become a Data Engineer?',
      answer:
        'Yes. Data analysts who develop stronger skills in SQL, Python, databases, ETL, pipelines and cloud technologies can transition toward data engineering roles.',
    },
    {
      id: 'faq-de-11',
      question: 'What career opportunities are available after Data Engineering training?',
      answer:
        'Depending on your skills and experience, you can explore roles such as Data Engineer, Cloud Data Engineer, ETL Developer, Data Warehouse Developer and Data Platform Engineer.',
    },
  ],

  finalCta: {
    title: 'Start Your Data Engineering Journey',
    subtitle:
      'Build production data pipelines, SQL transformations, and cloud data workflows with hands-on mentorship in Coimbatore.',
    checkpoints: [
      'Master modern data architectures & distributed computing',
      'Develop advanced SQL, Python, and PySpark skills',
      'Build automated ETL pipelines & cloud data lakes',
      'Create 5 production data engineering portfolio capstones',
    ],
    primaryCta: 'Enquire Now',
    secondaryCta: 'Book a Free Counselling Session',
  },
}
