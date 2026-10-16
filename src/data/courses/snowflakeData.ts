import type { CourseData } from '../../types/course'

export const snowflakeCourseData: CourseData = {
  id: 'snowflake',
  slug: '/courses/snowflake',
  title: 'Snowflake Training in Coimbatore',
  shortTitle: 'Snowflake',
  eyebrowBadge: 'Enterprise Cloud Data Warehousing & SnowPro Track',
  tagline: 'Master Snowflake Data Cloud, Virtual Warehouses, Snowpipe, Snowpark, Time Travel & Modern Data Architecture',
  heroDescription: [
    'Master the world’s leading cloud data platform with CloudSwan Solution at our Saravanampatti and Gandhipuram campuses in Coimbatore, or join our live instructor-led online batches.',
    'Gain hands-on expertise in Snowflake’s multi-cluster shared data architecture, separating storage, compute, and cloud services. Learn virtual warehouse sizing, data loading with COPY INTO and Snowpipe, semi-structured JSON querying with VARIANT, Time Travel, Zero-Copy Cloning, Streams and Tasks for CDC pipelines, and Snowpark Python.',
    'Designed for SQL developers, ETL professionals, data engineers, BI analysts, cloud practitioners, and fresh graduates seeking high-paying careers across enterprise analytics, data engineering, and modern data platforms.',
  ],
  primaryCtaText: 'Book a Free Counselling Session',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'Snowflake Data Cloud & Modern Data Warehousing',
    duration: '2.5 to 3 Months',
    mode: 'Classroom (Gandhipuram & Saravanampatti) & Live Online',
    level: 'Beginner to Advanced',
    coreSkills: 'Snowflake Architecture, SQL, Virtual Warehouses, Snowpipe, Time Travel, Zero-Copy Cloning',
    advancedTopics: 'Snowpark (Python/SQL), Streams & Tasks (CDC), Data Sharing, Dynamic Data Masking, Performance Tuning',
    projects: '5 Real-World Enterprise Snowflake Capstone Projects',
    certification: 'Course Completion Certificate + SnowPro Core (COF-C02) Preparation',
    careerSupport: 'Resume & Portfolio Building, Mock Technical Interviews, 100% Placement Assistance',
    mentorSupport: 'Available (SnowPro Core Certified Architects & Senior Data Leads)',
  },

  whyLearn: {
    title: 'Why Learn Snowflake Data Cloud?',
    intro:
      'Snowflake has revolutionized modern enterprise analytics by eliminating the bottlenecks of legacy on-premises data warehouses. Operating natively across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), Snowflake is the data platform of choice for thousands of global enterprises.',
    description:
      'Traditional data platforms suffer from concurrency contention, slow compute queuing, rigid storage-compute coupling, and high maintenance overhead. Snowflake’s patented multi-cluster shared data architecture delivers near-instant elasticity, automated scaling, zero management overhead, and seamless secure data sharing without data duplication.',
    competenciesTitle: 'An industry-ready Snowflake Data Engineer must know how to:',
    competencies: [
      'Architect and size multi-cluster virtual warehouses with automated suspend, resume, and auto-scaling policies',
      'Ingest structured and semi-structured batch and streaming data using COPY INTO, External Stages, and automated Snowpipe',
      'Query, parse, and transform semi-structured JSON, Parquet, and Avro datasets using VARIANT and LATERAL FLATTEN',
      'Implement Continuous Data Protection (CDP) utilizing Snowflake Time Travel, Fail-safe, and Zero-Copy Cloning',
      'Build automated Change Data Capture (CDC) and incremental ELT pipelines using Snowflake Streams and scheduled Tasks',
      'Develop programmatic data transformations and User-Defined Functions (UDFs) with Snowpark Python and DataFrames',
      'Implement enterprise Role-Based Access Control (RBAC), Object-Level Privileges, and Secure Views',
      'Enforce zero-trust data governance with Dynamic Data Masking, Row Access Policies, and Network Policies',
      'Share live datasets across organizational boundaries without copying data using Snowflake Secure Data Sharing',
      'Analyze Query Profiles, optimize micro-partition pruning with Clustering Keys, and leverage Search Optimization',
    ],
    summaryNote:
      "CloudSwan's Snowflake Data Cloud curriculum combines deep internal architecture with hands-on enterprise labs, preparing you for real-world data engineering roles and the official SnowPro Core certification.",
  },

  learningPath: {
    title: 'Snowflake Training Institute in Coimbatore',
    subtitle: 'A Structured Pathway from Data Warehousing Foundations to SnowPro Architecture',
    description:
      'CloudSwan Solution delivers comprehensive Snowflake training at our Saravanampatti and Gandhipuram campuses in Coimbatore. Our structured curriculum bridges foundational database concepts with cutting-edge cloud analytics, taking you step-by-step from core SQL to production data lakehouse deployments:',
    steps: [
      'Cloud Data Warehousing & Architecture Foundations',
      'Snowsight UI, SnowSQL CLI & Database Objects',
      'Virtual Warehouses & Elastic Compute Management',
      'Internal & External Staging (AWS S3, Azure Blob)',
      'Continuous Ingestion with Automated Snowpipe',
      'Semi-Structured Data Handling (JSON, Parquet, VARIANT)',
      'Continuous Data Protection: Time Travel & Zero-Copy Cloning',
      'Incremental Pipelines with Snowflake Streams (CDC) & Tasks',
      'Snowpark for Python & DataFrame Transformations',
      'Enterprise Security, RBAC & Dynamic Data Masking',
      'Secure Data Sharing, Marketplace & Data Exchange',
      'Query Optimization, Caching & SnowPro Core Exam Prep',
    ],
    outcomeNote:
      'This end-to-end learning path equips you to design, build, and optimize enterprise-scale data platforms on Snowflake across any hyperscaler cloud.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'What You Will Learn in Snowflake Data Cloud & Engineering',
    description:
      'A comprehensive 11-module curriculum spanning Snowflake architecture, virtual warehouses, advanced data staging, automated Snowpipe ingestion, semi-structured JSON querying, Streams and Tasks, Snowpark Python, data governance, and SnowPro Core exam readiness.',
    modules: [
      {
        number: 1,
        title: 'Cloud Data Warehousing Fundamentals & Snowflake Architecture',
        subtitle: 'Understand the Revolutionary 3-Tier Multi-Cluster Shared Data Architecture',
        description:
          'Learn the limitations of traditional on-premise data warehouses and explore Snowflake’s unique architecture that decouples storage, compute, and cloud services.',
        topics: [
          'Evolution of Data Warehousing: OLTP vs OLAP, Star and Snowflake Schemas',
          'Traditional data warehouse limitations: On-premise storage constraints, compute queuing, and maintenance bottlenecks',
          'Snowflake Multi-Cluster Shared Data Architecture: Separation of Storage, Compute, and Cloud Services',
          'Storage Layer: Centralized cloud object storage, micro-partitions, columnar format, and automatic compression',
          'Compute Layer: Virtual warehouses, independent compute clusters, zero contention across workloads',
          'Cloud Services Layer: Authentication, infrastructure management, query optimization, metadata management, and access control',
          'Snowflake deployment models: Multi-cloud agnostic architecture on AWS, Microsoft Azure, and Google Cloud (GCP)',
          'Snowflake Editions: Standard, Enterprise, Business Critical, and Virtual Private Snowflake (VPS)',
          'Snowflake pricing model: Credits, storage consumption, compute sizing, and cost management',
          'Setting up a Snowflake 30-day enterprise trial account across preferred cloud regions',
        ],
      },
      {
        number: 2,
        title: 'Snowsight Web Interface, SnowSQL CLI & Database Objects',
        subtitle: 'Master the Modern Web Interface, Command-Line Utilities & Object Hierarchy',
        description:
          'Navigate Snowsight, write queries in interactive worksheets, visualize results, configure the SnowSQL CLI, and master Snowflake object hierarchy.',
        topics: [
          'Snowsight Interface overview: Worksheets, Dashboards, Apps, Admin controls, and Activity history',
          'Writing, executing, and formatting SQL queries with auto-complete and keyboard shortcuts',
          'Generating interactive charts, visualizations, and tiles directly from SQL query results',
          'SnowSQL CLI: Installation, configuration file settings, connection aliases, and automated script execution',
          'Snowflake Object Hierarchy: Organization → Account → Database → Schema → Tables, Views, Stages, Functions',
          'Table types: Permanent Tables, Transient Tables (lower storage cost), and Temporary Tables (session-scoped)',
          'Creating and managing Schemas: Default schemas (PUBLIC, INFORMATION_SCHEMA) and custom schemas',
          'Standard Views, Secure Views (hiding underlying query logic), and Materialized Views',
          'External Tables: Querying data stored in external cloud storage without loading it into Snowflake',
          'Snowflake Data Types: Numeric, String, Date/Time, Boolean, and Semi-Structured types',
        ],
      },
      {
        number: 3,
        title: 'Virtual Warehouses & Elastic Compute Management',
        subtitle: 'Configure, Scale & Optimize Virtual Compute Clusters',
        description:
          'Deep dive into virtual warehouses, sizing strategies, credit consumption, auto-suspend, auto-resume, and multi-cluster warehouse scaling policies.',
        topics: [
          'Virtual Warehouse concepts: T-Shirt sizing from X-Small (1 credit/hr) to 6X-Large (512 credits/hr)',
          'Creating and altering warehouses using DDL (`CREATE WAREHOUSE`, `ALTER WAREHOUSE`)',
          'Auto-Suspend and Auto-Resume settings: Best practices to prevent idle credit consumption',
          'Compute scaling: Scaling Up (increasing warehouse size for complex queries) vs Scaling Out (adding clusters for concurrency)',
          'Multi-Cluster Warehouses (Enterprise Edition): Auto-scaling cluster modes and min/max cluster thresholds',
          'Scaling Policies: Standard mode (minimizing queue time) vs Economy mode (conserving credits)',
          'Warehouse states: Suspended, Resuming, Running, and Resizing',
          'Query queuing mechanics: Maximum concurrency levels and queue timeout limits',
          'Resource Monitors: Setting credit quotas, email notifications, and automated suspend actions',
          'Hands-on Lab: Provisioning dedicated virtual warehouses for ETL workloads, BI reporting, and ad-hoc analysts',
        ],
      },
      {
        number: 4,
        title: 'Data Ingestion & Staging Strategies',
        subtitle: 'Bulk Loading Data from Cloud Storage with COPY INTO',
        description:
          'Master internal and external data staging, file formats, and high-performance bulk loading into Snowflake tables using the COPY INTO command.',
        topics: [
          'Data Ingestion lifecycle: Extraction, File Staging, Transformation, and Target Loading',
          'Internal Stages: User Stage (`@~`), Table Stage (`@%`), and Named Internal Stages (`@stage_name`)',
          'External Stages: Connecting Snowflake securely to AWS S3 buckets, Azure Blob Storage, and Google Cloud Storage',
          'Authentication mechanisms: Storage Integrations (IAM Roles, Azure Service Principals) vs Stage Credentials',
          'File Formats: Defining reusable formats for CSV, TSV, JSON, Parquet, Avro, and ORC',
          'Bulk Loading with `COPY INTO <table> FROM @stage`: Syntax, file pattern matching, and column mapping',
          'Error handling during loading: `ON_ERROR = CONTINUE | SKIP_FILE | ABORT_STATEMENT`',
          'Validating data loads: `VALIDATION_MODE = RETURN_ERRORS | RETURN_ALL_ERRORS` without inserting data',
          'Load Metadata Tracking: `LOAD_HISTORY` Information Schema views and COPY command deduplication rules (64-day retention)',
          'Unloading data: Using `COPY INTO @stage FROM <table>` to export clean data back to cloud storage',
        ],
      },
      {
        number: 5,
        title: 'Continuous Streaming & Automated Ingestion with Snowpipe',
        subtitle: 'Automate Real-Time Serverless Data Ingestion',
        description:
          'Build automated, continuous ingestion pipelines using Snowpipe with cloud event notifications from AWS S3 (SQS/SNS) and Azure Event Grid.',
        topics: [
          'Snowpipe architecture: Serverless, micro-batch loading engine with zero virtual warehouse overhead',
          'Comparing bulk loading (`COPY INTO`) with automated continuous loading (`Snowpipe`)',
          'Creating Snowpipe objects: `CREATE PIPE <pipe_name> AS COPY INTO <table> FROM @stage`',
          'Auto-Ingest Snowpipe on AWS: Configuring S3 Event Notifications with SQS queue integration',
          'Auto-Ingest Snowpipe on Microsoft Azure: Configuring Event Grid and Storage Queue integrations',
          'REST API Ingestion: Triggering Snowpipe programmatic data loads via Snowflake REST endpoints',
          'Monitoring and managing Snowpipe: `SYSTEM$PIPE_STATUS`, checking load errors, and pausing/resuming pipes',
          'Snowpipe Streaming API: Ingesting streaming records in sub-second latency directly into tables',
          'Cost optimization for Snowpipe: File sizing recommendations (100MB - 250MB compressed) for cost efficiency',
          'Hands-on Lab: Building an automated end-to-end pipeline that ingests CSV/JSON drops from AWS S3 into Snowflake in real time',
        ],
      },
      {
        number: 6,
        title: 'Semi-Structured Data Processing (JSON, Parquet & Avro)',
        subtitle: 'Query & Transform Complex Nested Data Formats Natively',
        description:
          'Harness Snowflake’s industry-leading semi-structured data capabilities using VARIANT, OBJECT, ARRAY, and relational transformation functions.',
        topics: [
          'Semi-Structured data overview: JSON, Parquet, Avro, ORC, and XML in modern analytics',
          'Snowflake native semi-structured data types: `VARIANT`, `OBJECT`, and `ARRAY`',
          'Ingesting raw JSON payloads directly into a single VARIANT column without predefined schemas (Schema-on-Read)',
          'Querying nested JSON elements using colon `:` notation and dot `.` path accessors',
          'Type casting semi-structured data to relational types using double colon `::` (e.g., `v:customer.id::int`)',
          'JSON parsing functions: `PARSE_JSON()`, `TO_JSON()`, `CHECK_JSON()`, and `ARRAY_SIZE()`',
          'Exploding nested arrays into relational rows using `LATERAL FLATTEN(input => ...)`',
          'Handling complex nested structures: Multiple FLATTEN operations, outer joins, and path navigation',
          'Creating production Relational Views over raw VARIANT tables for zero-ETL BI querying',
          'Hands-on Lab: Ingesting multi-level nested e-commerce order JSON logs and parsing them into analytics-ready customer tables',
        ],
      },
      {
        number: 7,
        title: 'Continuous Data Protection (CDP) & Micro-Partitioning',
        subtitle: 'Time Travel, Fail-Safe, Zero-Copy Cloning & Storage Internals',
        description:
          'Understand Snowflake storage mechanics, micro-partitions, columnar storage, Time Travel point-in-time recovery, and instant Zero-Copy Cloning.',
        topics: [
          'Snowflake Storage internals: Automatic micro-partitioning (50MB - 500MB uncompressed) and columnar layout',
          'Micro-partition metadata: Min/max values, distinct counts, and automatic query pruning without indexes',
          'Continuous Data Protection (CDP) overview: Data immutability and multi-layer recovery',
          'Time Travel fundamentals: Accessing historical data within retention periods (Standard: 1 day; Enterprise: up to 90 days)',
          'Time Travel query syntax: `AT(TIMESTAMP => ...)`, `AT(OFFSET => ...)`, and `BEFORE(STATEMENT => ...)`',
          'Point-in-time table restoration: Cloning or restoring modified tables to earlier states',
          'Disaster recovery with `UNDROP TABLE`, `UNDROP SCHEMA`, and `UNDROP DATABASE`',
          'Snowflake Fail-Safe: 7-day non-configurable disaster recovery window managed by Snowflake Support',
          'Zero-Copy Cloning: `CREATE TABLE clone_tbl CLONE source_tbl` for databases, schemas, and tables',
          'Understanding Zero-Copy Cloning mechanics: Copying metadata pointers with zero physical storage cost until modified',
        ],
      },
      {
        number: 8,
        title: 'Change Data Capture (CDC) & Automation with Streams & Tasks',
        subtitle: 'Build Automated Incremental ELT Pipelines Inside Snowflake',
        description:
          'Construct automated change data capture (CDC) pipelines using Snowflake Table Streams and schedule automated transformations with Tasks and DAGs.',
        topics: [
          'Change Data Capture (CDC) in modern data platforms: Why incremental processing matters',
          'Snowflake Streams overview: Tracking delta changes (Inserts, Updates, Deletes) on source tables',
          'Stream metadata columns: `METADATA$ACTION`, `METADATA$ISUPDATE`, and `METADATA$ROW_ID`',
          'Stream types: Standard Streams, Append-Only Streams, and Insert-Only Streams on external tables',
          'Consuming streams: Using `MERGE INTO` statements to process stream records and advance stream offsets',
          'Snowflake Tasks: Scheduling SQL statements and stored procedures on a recurring basis',
          'Task scheduling options: Interval minutes (`SCHEDULE = \'5 MINUTE\'`) and CRON expressions (`SCHEDULE = \'USING CRON ...\'`)',
          'Serverless Tasks vs Warehouse-backed Tasks: Cost and operational differences',
          'Task trees & Directed Acyclic Graphs (DAG): Chaining parent-child tasks using the `AFTER` clause',
          'Hands-on Lab: Building an automated CDC pipeline that detects customer profile changes via Streams and syncs dimension tables via Tasks',
        ],
      },
      {
        number: 9,
        title: 'Snowpark for Python & Modern Data Engineering',
        subtitle: 'Develop Programmatic Transformations with DataFrames & Python UDFs',
        description:
          'Explore Snowpark, Snowflake’s developer framework that brings Python, DataFrames, and custom logic directly into the Snowflake data engine.',
        topics: [
          'Snowpark architecture: Serverless execution, query pushdown, and eliminating client-side data transfer',
          'Setting up the Snowpark Python environment: Anaconda integration, conda packages, and virtual environments',
          'Connecting to Snowflake via `Session.builder.configs(...).create()`',
          'Snowpark DataFrames: Creating DataFrames from tables, queries, and file stages',
          'DataFrame operations: Filtering (`filter`), selecting (`select`), grouping (`groupBy`), aggregating, and joining',
          'Writing User-Defined Functions (UDFs) in Python: Scalar UDFs and Vectorized UDFs (Pandas UDFs)',
          'User-Defined Table Functions (UDTFs): Returning tabular outputs from Python logic',
          'Python Stored Procedures: Automating complex administrative tasks, data transformations, and transactional logic',
          'Integrating popular data science libraries: Pandas, NumPy, Scikit-Learn within Snowflake secure sandbox',
          'Hands-on Lab: Developing an end-to-end Python Snowpark data cleansing and customer segmentation pipeline',
        ],
      },
      {
        number: 10,
        title: 'Enterprise Security, RBAC & Data Governance',
        subtitle: 'Role-Based Access Control, Masking Policies & Zero-Trust Governance',
        description:
          'Configure enterprise role-based security, object privileges, dynamic data masking for sensitive PII, row access policies, and compliance auditing.',
        topics: [
          'Snowflake Security model: Authentication, Authorization, Encryption, and Data Protection',
          'System-Defined Roles: `ACCOUNTADMIN`, `SECURITYADMIN`, `USERADMIN`, `SYSADMIN`, and `PUBLIC`',
          'Designing Custom Role Hierarchies: Functional Roles vs Access Roles and best practices',
          'Object Privileges: Granting and revoking privileges (`SELECT`, `INSERT`, `USAGE`, `CREATE`) on databases, schemas, tables',
          'Future Grants: Automatically applying permissions to newly created schemas and tables (`ON FUTURE TABLES`)',
          'Multi-Factor Authentication (MFA) with Duo Security and Single Sign-On (SSO) with Okta / Azure AD',
          'Network Policies: Restricting Snowflake access based on IP whitelists and CIDR blocks',
          'Dynamic Data Masking: Creating masking policies to redact sensitive PII (credit cards, phone numbers, emails) based on caller role',
          'Row Access Policies: Enforcing fine-grained row-level security based on user attributes or geography',
          'Auditing & Compliance: Querying `LOGIN_HISTORY`, `QUERY_HISTORY`, and `ACCESS_HISTORY` in the `ACCOUNT_USAGE` schema',
        ],
      },
      {
        number: 11,
        title: 'Performance Optimization, Data Sharing & SnowPro Core Exam',
        subtitle: 'Query Profiling, Caching Tiers, Data Sharing & Certification Success',
        description:
          'Master performance tuning with Query Profile, explore secure zero-copy data sharing, and prepare for the official SnowPro Core (COF-C02) exam.',
        topics: [
          'Query Profile analysis: Identifying bottlenecks, full table scans, Cartesian joins, and disk spilling (local vs remote spill)',
          'Snowflake Caching Tiers: Metadata Cache, Result Cache (24-hour persistence), and Warehouse Local Disk Cache',
          'Clustering Keys: When to define explicit clustering keys, monitoring cluster depth, and Automatic Clustering costs',
          'Search Optimization Service (SOS): Accelerating point lookup queries on multi-terabyte tables',
          'Secure Data Sharing: Data Provider vs Data Consumer architecture without copying or transferring physical data',
          'Direct Shares, Reader Accounts (for non-Snowflake consumers), and Snowflake Marketplace data exchange',
          'Data Clean Rooms: Privacy-preserving collaborative analytics between cross-enterprise partners',
          'SnowPro Core Certification (COF-C02) domain breakdown, passing score (750/1000), and exam format',
          'Comprehensive SnowPro Core mock test: 100+ realistic practice questions with detailed explanations',
          'Resume building, GitHub repository setup for data engineering portfolios, and technical interview prep',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical Snowflake Engineering Projects',
    subtitle: 'Build Enterprise Cloud Data Solutions on Real Cloud Storage',
    description:
      'Gain tangible data engineering experience by architecting, staging, ingesting, transforming, and securing five enterprise-grade data platform solutions on Snowflake.',
    items: [
      {
        number: 1,
        title: 'Enterprise E-Commerce Data Lakehouse Pipeline on AWS S3 & Snowpipe',
        description:
          'Build an automated serverless data ingestion pipeline connecting AWS S3 bucket event notifications with Snowflake Snowpipe to stream transaction, order, and inventory data with automated deduplication and schema validation.',
        focusArea: 'Cloud Storage Integrations, Serverless Snowpipe, SQS Events & COPY INTO',
        toolsUsed: ['Snowflake Snowpipe', 'AWS S3', 'Amazon SQS', 'SnowSQL CLI', 'Storage Integration'],
      },
      {
        number: 2,
        title: 'Semi-Structured IoT Clickstream Telemetry Engine with JSON & Snowpark Python',
        description:
          'Ingest multi-nested real-time user clickstream logs stored as raw JSON into VARIANT columns, flatten hierarchical arrays using LATERAL FLATTEN, and execute programmatic data cleaning and metric aggregation using Snowpark Python DataFrames.',
        focusArea: 'Semi-Structured Data, VARIANT, LATERAL FLATTEN, Snowpark Python & DataFrames',
        toolsUsed: ['Snowflake Snowsight', 'Snowpark Python', 'JSON', 'Jupyter / VS Code', 'Python 3.10'],
      },
      {
        number: 3,
        title: 'Financial Transaction Data Warehouse with Zero-Copy Staging & Time Travel',
        description:
          'Design an enterprise star schema for banking and fraud analytics. Implement Zero-Copy Cloning for zero-cost dev/test environments and configure Time Travel queries and table restoration for point-in-time financial audit recovery.',
        focusArea: 'Data Modeling, Star Schema, Time Travel, Zero-Copy Cloning & Disaster Recovery',
        toolsUsed: ['Snowflake SQL', 'Time Travel', 'Zero-Copy Cloning', 'Transient Tables', 'Resource Monitors'],
      },
      {
        number: 4,
        title: 'Automated CDC & Incremental ELT Pipeline Using Streams & Tasks',
        description:
          'Construct an automated Change Data Capture (CDC) pipeline that tracks real-time inserts, updates, and deletes on source customer tables using Table Streams, and schedule automated merge tasks in a multi-stage Task DAG.',
        focusArea: 'Change Data Capture (CDC), Table Streams, MERGE INTO, Scheduled Tasks & DAGs',
        toolsUsed: ['Snowflake Streams', 'Snowflake Tasks', 'CRON Scheduling', 'Task DAGs', 'MERGE SQL'],
      },
      {
        number: 5,
        title: 'Multi-Tenant Secure Data Sharing & Analytics Clean Room',
        description:
          'Architect an enterprise data sharing hub allowing external business partners to query live analytical datasets without data duplication. Configure Dynamic Data Masking to protect PII, enforce Row Access Policies, and publish curated data shares.',
        focusArea: 'Secure Data Sharing, Dynamic Data Masking, Row Access Policies, RBAC & Governance',
        toolsUsed: ['Secure Data Sharing', 'Reader Accounts', 'Masking Policies', 'Row Access Policies', 'RBAC'],
      },
    ],
  },

  portfolio: {
    title: 'Build Your Snowflake Data Portfolio',
    subtitle: 'Showcase Production SQL, Snowpipe Pipelines & Snowpark Code to Employers',
    description:
      'Hiring managers and technical leads evaluate data engineers on architecture diagrams, efficient SQL queries, Snowpipe pipelines, and Snowpark scripts. At CloudSwan, you will build an industry-ready data engineering portfolio.',
    deliverables: [
      'Comprehensive Snowflake warehouse sizing and multi-cluster architecture design blueprints',
      'Automated Snowpipe continuous ingestion scripts integrated with AWS S3 and Azure Blob storage',
      'Production-grade SQL scripts querying complex semi-structured JSON with VARIANT and FLATTEN',
      'Change Data Capture (CDC) pipeline scripts utilizing Snowflake Streams and scheduled Tasks',
      'Snowpark Python repository performing data transformations and custom Python UDFs',
      'Zero-Copy Cloning and Time Travel disaster recovery runbooks with point-in-time restoration scripts',
      'Enterprise Role-Based Access Control (RBAC) security framework with custom role hierarchies',
      'Dynamic Data Masking and Row Access Policy implementations for GDPR and PII compliance',
      'Performance optimization case studies with Query Profile analysis and Clustering Key benchmarks',
      'Clean GitHub repository featuring documented Snowflake ELT projects and architecture diagrams',
    ],
    ctaText: 'Build Your Snowflake Portfolio',
  },

  targetAudiences: {
    title: 'Who Can Join This Course?',
    subtitle: 'Tailored for Data Aspirants, SQL Developers & IT Professionals',
    audiences: [
      {
        id: 'sql-etl-developers',
        title: 'SQL & Traditional ETL Developers',
        description:
          'Modernize your skillset from legacy ETL tools (Informatica, DataStage, SSIS) to modern cloud data warehousing and ELT on Snowflake.',
      },
      {
        id: 'data-engineers',
        title: 'Data Engineers & Big Data Specialists',
        description:
          'Expand your expertise into cloud-native data platforms, Snowpark Python, automated Snowpipe streaming, and modern data lakehouses.',
      },
      {
        id: 'data-analysts-bi',
        title: 'Data Analysts & BI Reporting Specialists',
        description:
          'Learn to write high-performance SQL on Snowflake, query semi-structured data, and connect Power BI/Tableau directly to Snowflake warehouses.',
      },
      {
        id: 'dbas',
        title: 'Database Administrators (DBAs)',
        description:
          'Transition from managing on-premise Oracle, SQL Server, or MySQL databases to administering scalable cloud data platforms on Snowflake.',
      },
      {
        id: 'cloud-engineers',
        title: 'Cloud Engineers & DevOps Professionals',
        description:
          'Master cloud data storage integrations, IAM role configuration, multi-cloud data architecture, and infrastructure automation for data stacks.',
      },
      {
        id: 'engineering-graduates',
        title: 'B.E. / B.Tech / BCA / MCA / M.Sc Graduates',
        description:
          'Launch a lucrative career in data engineering with hands-on Snowflake training, real projects, and recognized SnowPro Core certification preparation.',
      },
      {
        id: 'career-switchers',
        title: 'Non-IT & IT Career Switchers',
        description:
          'Start from basic SQL queries and progress systematically to enterprise cloud data engineering under experienced faculty mentorship.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Career Opportunities',
    subtitle: 'High-Demand Careers in Snowflake & Modern Data Engineering',
    description:
      'Snowflake data engineers are among the most sought-after professionals in the global IT sector. Graduating from CloudSwan prepares you for key data engineering roles across India and international markets:',
    roles: [
      'Snowflake Data Engineer',
      'Cloud Data Warehouse Developer',
      'SnowPro Certified Data Specialist',
      'Snowflake ETL / ELT Pipeline Developer',
      'Snowpark Python Data Engineer',
      'Cloud Database Administrator (Snowflake DBA)',
      'Modern Analytics Engineer (Snowflake + dbt)',
      'Business Intelligence (BI) Snowflake Developer',
      'Data Lakehouse Architect',
      'Enterprise Data Platform Consultant',
    ],
    disclaimer:
      'Employment outcomes depend on student dedication, hands-on lab practice, portfolio quality, and interview performance.',
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'The Modern Cloud Data Stack Ecosystem',
    description:
      'Gain hands-on experience with the platforms, development utilities, and cloud integrations used by modern enterprise data engineering teams.',
    categories: [
      {
        category: 'Cloud Platforms',
        description: 'Underlying hyperscaler cloud platforms & object storage',
        tools: ['Snowflake Data Cloud', 'Amazon Web Services (AWS S3)', 'Microsoft Azure (Blob Storage)', 'Google Cloud Storage (GCS)'],
      },
      {
        category: 'Database',
        description: 'Core Snowflake data platform utilities and clients',
        tools: ['Snowsight UI', 'SnowSQL CLI', 'Virtual Warehouses', 'Snowpipe Engine', 'Snowflake Stages'],
      },
      {
        category: 'Programming & Libraries',
        description: 'Querying, transformations, and programmatic development',
        tools: ['ANSI SQL', 'Python 3.10', 'Snowpark Python API', 'Pandas', 'NumPy'],
      },
      {
        category: 'Data Management Tools',
        description: 'Orchestration, transformation, and modern data stack tools',
        tools: ['Snowflake Streams', 'Snowflake Tasks', 'dbt (Data Build Tool)', 'Apache Airflow', 'GitHub'],
      },
      {
        category: 'Reporting & Analytics',
        description: 'Business intelligence and interactive dashboards',
        tools: ['Power BI', 'Tableau', 'Snowflake Streamlit', 'Snowsight Dashboards'],
      },
      {
        category: 'Identity & Security',
        description: 'Governance, access control, and data protection',
        tools: ['Role-Based Access Control (RBAC)', 'Dynamic Data Masking', 'Row Access Policies', 'Okta SSO', 'AWS IAM Roles'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan for Snowflake Training?',
    subtitle: 'Coimbatore’s Premier Institute for Modern Data Engineering',
    pillars: [
      {
        title: 'SnowPro Certified Mentors',
        description:
          'Learn directly from senior cloud data architects and SnowPro Core certified engineers with extensive enterprise project experience.',
      },
      {
        title: '100% Practical Cloud Labs',
        description:
          'Work on live enterprise Snowflake accounts with real cloud storage integrations across AWS S3 and Microsoft Azure from day one.',
      },
      {
        title: 'SnowPro Core (COF-C02) Preparation',
        description:
          'Gain complete syllabus alignment with the official SnowPro Core certification, accompanied by curated mock exams and question banks.',
      },
      {
        title: 'Dual Campuses in Coimbatore',
        description:
          'Attend in-person classroom batches at our Saravanampatti (Main Bus Stop) or Gandhipuram (Ramnagar) centers, or join live interactive online sessions.',
      },
      {
        title: 'Modern Data Stack Focus',
        description:
          'Learn how Snowflake integrates with modern data tools including Snowpark Python, Streams, Tasks, and cloud data lakehouses.',
      },
      {
        title: 'Dedicated Placement Cell',
        description:
          'Benefit from professional resume reviews, technical mock interviews, GitHub portfolio curation, and direct interview referrals to 250+ partner companies.',
      },
    ],
  },

  certification: {
    title: 'Snowflake Certification in Coimbatore',
    subtitle: 'Validate Your Cloud Data Engineering Competence with SnowPro Core',
    description:
      'Upon successfully completing all course modules, hands-on lab challenges, and capstone projects, you will receive CloudSwan’s accredited Snowflake Data Cloud Certificate. The curriculum also comprehensively prepares you for the globally recognized SnowPro Core (COF-C02) Certification.',
    highlights: [
      'Snowflake Architecture: Cloud Services, Virtual Warehouses & Centralized Storage',
      'Virtual Warehouse Sizing, Auto-Scaling & Resource Monitor Management',
      'Staging & Bulk Ingestion: Internal Stages, External Stages & COPY INTO',
      'Continuous Automated Loading: Serverless Snowpipe & Cloud Event Integrations',
      'Semi-Structured Data Mastery: VARIANT, OBJECT, ARRAY & LATERAL FLATTEN',
      'Continuous Data Protection: Time Travel, Fail-Safe & Zero-Copy Cloning',
      'Automated Pipelines: Change Data Capture with Streams & Scheduled Tasks',
      'Snowpark for Python: DataFrames, Custom UDFs & Stored Procedures',
      'Data Governance: Role-Based Access Control, Dynamic Masking & Row Access Policies',
      'Secure Data Sharing: Direct Shares, Reader Accounts & Marketplace Exchange',
    ],
    regionalFocus: {
      title: 'Snowflake Data Engineering in Tamil Nadu',
      description:
        'Coimbatore, Chennai, and the broader Tamil Nadu technology ecosystem are witnessing a rapid surge in modern cloud data adoption. Multinational IT services firms, Global Capability Centers (GCCs), fintech corporations, and enterprise manufacturing companies in TIDEL Park Coimbatore and CHIL SEZ are migrating legacy data warehouses to Snowflake. Organizations report critical demand for certified Snowflake data engineers who understand virtual warehouses, Snowpipe, semi-structured data, and Snowpark Python. CloudSwan provides regional learners with hands-on expertise, connecting them directly with high-growth data engineering careers across South India.',
      keyAreas: [
        'TIDEL Park & CHIL SEZ Coimbatore Enterprise Cloud Data Demand',
        'Snowflake Adoption Across Tamil Nadu IT, Banking & Healthcare Sectors',
        'In-Person Classroom Labs in Saravanampatti & Gandhipuram Campuses',
        'Direct Referrals & Placement Drives Across Coimbatore, Chennai & Bangalore',
      ],
    },
    ethicalHackingNote: {
      title: 'Data Governance, Security & Compliance Advisory',
      subtitle: 'Enforcing Zero-Trust Security, Data Privacy & Regulatory Compliance',
      description:
        'Managing enterprise cloud data warehouses requires strict adherence to data governance, privacy regulations, and compliance standards. Learners are trained in the Snowflake Shared Responsibility Model, Dynamic Data Masking, Row-Level Security, audit trail forensics, and compliance frameworks (GDPR, HIPAA, and India’s DPDP Act) to ensure data platforms remain secure and compliant.',
      keyFocusAreas: [
        'Role-Based Access Control (RBAC) and Principle of Least Privilege',
        'Dynamic Data Masking for Personally Identifiable Information (PII)',
        'Row Access Policies for Multi-Tenant Data Isolation',
        'Data Encryption at Rest (AES-256) and in Transit (TLS 1.2+)',
        'Compliance Auditing with `ACCESS_HISTORY` and `QUERY_HISTORY`',
        'Network Policies and Secure IP Whitelisting',
        'Data Retention Compliance and Time Travel Governance',
        'FinOps Cost Guardrails and Resource Monitor Enforcement',
      ],
      complianceWarning:
        'All data lab exercises must adhere strictly to data privacy standards and enterprise acceptable use guidelines.',
    },
  },

  roadmap: {
    title: 'Snowflake Data Engineer Career Roadmap',
    subtitle: 'A Step-by-Step Pathway from SQL Foundations to Enterprise SnowPro Architect',
    steps: [
      {
        step: 1,
        title: 'Master SQL & Data Warehousing Concepts',
        description:
          'Learn relational database modeling, OLAP principles, star schemas, dimensional tables, and analytical SQL functions.',
      },
      {
        step: 2,
        title: 'Master Snowflake Decoupled Architecture',
        description:
          'Understand the 3-tier architecture: Centralized Storage, Virtual Compute Clusters, and Cloud Services layer.',
      },
      {
        step: 3,
        title: 'Manage Virtual Warehouses & Elastic Compute',
        description:
          'Create and size warehouses, configure auto-suspend/auto-resume, manage multi-cluster scaling, and set resource monitors.',
      },
      {
        step: 4,
        title: 'Configure Stages & Master COPY INTO',
        description:
          'Set up internal and external stages with AWS S3 / Azure Blob, define file formats, and execute bulk loads with error handling.',
      },
      {
        step: 5,
        title: 'Automate Streaming Ingestion with Snowpipe',
        description:
          'Configure serverless Snowpipe continuous ingestion using cloud event notifications from AWS S3 (SQS) and Azure Event Grid.',
      },
      {
        step: 6,
        title: 'Process Semi-Structured JSON, Parquet & Avro',
        description:
          'Store nested data in VARIANT columns, query elements with colon notation, and flatten hierarchical arrays with LATERAL FLATTEN.',
      },
      {
        step: 7,
        title: 'Leverage Continuous Data Protection (CDP)',
        description:
          'Execute point-in-time Time Travel queries, restore tables with UNDROP, and create instant Zero-Copy Clones for dev/testing.',
      },
      {
        step: 8,
        title: 'Build Incremental Pipelines with Streams & Tasks',
        description:
          'Implement Change Data Capture (CDC) using Table Streams and schedule automated ELT workflows using Snowflake Tasks and DAGs.',
      },
      {
        step: 9,
        title: 'Develop with Snowpark for Python',
        description:
          'Write programmatic DataFrame transformations, deploy custom Python UDFs and Stored Procedures, and push compute to Snowflake.',
      },
      {
        step: 10,
        title: 'Enforce Enterprise Security & Data Governance',
        description:
          'Design custom RBAC hierarchies, implement Dynamic Data Masking on sensitive PII, and configure Row Access Policies.',
      },
      {
        step: 11,
        title: 'Optimize Queries, Caching & Performance',
        description:
          'Analyze Query Profiles to eliminate disk spilling, configure clustering keys, leverage result caching, and evaluate Search Optimization.',
      },
      {
        step: 12,
        title: 'Earn SnowPro Core Certification & Launch Career',
        description:
          'Take SnowPro Core mock exams, polish your GitHub data engineering portfolio, and attend technical interviews with placement support.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-1',
      question: 'What is Snowflake and why is it so widely adopted by enterprises?',
      answer:
        'Snowflake is a fully managed, cloud-agnostic data platform built for data warehousing, data lakes, data engineering, data science, and secure data sharing. Unlike legacy databases, Snowflake decouples storage and compute completely, enabling virtually unlimited concurrent users and queries with zero contention and near-zero management overhead.',
    },
    {
      id: 'faq-2',
      question: 'Do I need prior cloud or data engineering experience to learn Snowflake?',
      answer:
        'No prior cloud experience is required. Basic familiarity with SQL is helpful. The CloudSwan curriculum starts with foundational data warehousing concepts, relational modeling, and SQL fundamentals before advancing into Snowflake internals, Snowpipe, and Snowpark Python.',
    },
    {
      id: 'faq-3',
      question: 'How is Snowflake different from AWS Redshift, Google BigQuery, or Azure Synapse?',
      answer:
        'While services like AWS Redshift and Azure Synapse are tied to specific cloud vendors, Snowflake runs natively across AWS, Azure, and GCP with identical functionality and user experience. Snowflake features true separation of compute and storage, per-second billing, instant zero-copy cloning, seamless cross-cloud data sharing, and zero operational infrastructure management.',
    },
    {
      id: 'faq-4',
      question: 'Does this course prepare me for the official SnowPro Core certification?',
      answer:
        'Yes. The curriculum is fully aligned with the official SnowPro Core Certification (COF-C02) exam domains. CloudSwan provides comprehensive study guides, topic-wise practice quizzes, and full-length mock examinations with detailed answer breakdowns to ensure exam success.',
    },
    {
      id: 'faq-5',
      question: 'Will I learn Python and Snowpark in this program?',
      answer:
        'Yes. You will learn the Snowpark Python developer framework, creating DataFrames, performing complex transformations, deploying Python User-Defined Functions (UDFs) and Stored Procedures, and integrating with Anaconda packages directly within Snowflake.',
    },
    {
      id: 'faq-6',
      question: 'What hands-on projects will I build during the Snowflake course?',
      answer:
        'You will build five real-world capstone projects: an automated e-commerce data pipeline using AWS S3 and Snowpipe, an IoT clickstream analytics engine querying semi-structured JSON with Snowpark, a financial data warehouse with Time Travel and Zero-Copy Cloning, an automated CDC pipeline with Streams and Tasks, and a multi-tenant secure data sharing hub with Dynamic Data Masking.',
    },
    {
      id: 'faq-7',
      question: 'Are classes available offline in Coimbatore as well as online?',
      answer:
        'Yes. We offer in-person classroom training at both our Saravanampatti (Main Bus Stop, Sathy Road) and Gandhipuram (Ramnagar, Opp. Cross Cut Road) campuses in Coimbatore. Live instructor-led online sessions with interactive lab support are also available for remote learners.',
    },
    {
      id: 'faq-8',
      question: 'What are the batch timings available?',
      answer:
        'We offer flexible batch options including weekday regular batches (morning, afternoon, and evening slots) and dedicated weekend batches for working professionals and college students.',
    },
    {
      id: 'faq-9',
      question: 'What salary packages can a Snowflake Data Engineer expect in India?',
      answer:
        'Snowflake professionals command premium compensation due to high enterprise demand. Entry-level Snowflake data engineers typically earn between ₹5.5 LPA and ₹9.5 LPA, while experienced data engineers and architects earn ₹14 LPA to ₹28+ LPA.',
    },
    {
      id: 'faq-10',
      question: 'Does CloudSwan provide placement assistance for Snowflake learners?',
      answer:
        'Yes. CloudSwan provides 100% placement support including resume optimization, GitHub data engineering portfolio creation, mock technical interviews, LinkedIn profile enhancement, and placement drives with our network of 250+ hiring partner companies across Coimbatore, Chennai, and Bangalore.',
    },
    {
      id: 'faq-11',
      question: 'What is the duration of the Snowflake training program?',
      answer:
        'The program duration is 2.5 to 3 months, combining in-depth theoretical lectures, daily hands-on cloud lab exercises, real-world capstone projects, and certification preparation.',
    },
    {
      id: 'faq-12',
      question: 'How do I enroll or book a free counselling session?',
      answer:
        'Click the "Book a Free Counselling Session" button on this page, call us at +91 89038 35098 (Gandhipuram Campus) or +91 7708 262 565 (Saravanampatti Campus), or walk directly into any of our Coimbatore centers.',
    },
  ],

  finalCta: {
    title: 'Lead the Future of Modern Cloud Data',
    subtitle: 'Master Snowflake Data Cloud with CloudSwan Solution in Coimbatore',
    checkpoints: [
      'Master Snowflake’s decoupled 3-tier multi-cluster architecture.',
      'Build automated continuous ingestion pipelines with Snowpipe & cloud storage.',
      'Transform nested JSON, Parquet, and Avro using VARIANT & Snowpark Python.',
      'Implement Time Travel, Zero-Copy Cloning, Streams (CDC), and scheduled Tasks.',
      'Enforce zero-trust data governance with RBAC, Dynamic Masking & Row Access Policies.',
      'Build 5 enterprise portfolio projects with 100% placement assistance & SnowPro prep.',
    ],
    primaryCta: 'Book a Free Counselling Session',
    secondaryCta: 'Explore Course Curriculum',
  },
}
