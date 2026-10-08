import type { CourseData } from '../../types/course'

export const pythonCourseData: CourseData = {
  id: 'python',
  slug: '/courses/python-development',
  title: 'Python Development Course in Coimbatore',
  shortTitle: 'Python Development',
  eyebrowBadge: 'Core & Advanced Python Engineering Track',
  tagline: 'Master Python Programming, OOP, Django 5, FastAPI, PostgreSQL, REST APIs & Enterprise Automation',
  heroDescription: [
    'Accelerate your software engineering career with comprehensive Python Development training at CloudSwan Solution at our Saravanampatti and Gandhipuram campuses in Coimbatore.',
    'Master core programming fundamentals, advanced Object-Oriented architecture, data structures, algorithms, Django 5, FastAPI, PostgreSQL, SQLAlchemy ORM, automated testing with PyTest, web scraping, and containerized cloud deployment through real-world software projects.',
    'Designed for students, engineering graduates, IT professionals, and career switchers seeking versatile backend development, web engineering, and enterprise automation capabilities in leading global technology firms.',
  ],
  primaryCtaText: 'Book a Free Counselling Session',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'Python Full Stack & Backend Development',
    duration: '3 to 4 Months',
    mode: 'Classroom & Live Interactive Online',
    level: 'Beginner to Advanced Developer',
    coreSkills: 'Python 3.12+, OOP, Data Structures, Django 5, FastAPI, PostgreSQL, REST APIs',
    advancedTopics: 'Asyncio, SQLAlchemy ORM, Celery & Redis, Web Scraping, Docker, PyTest, Microservices',
    projects: '6 Enterprise-Grade Python Capstone Projects',
    certification: 'Course Completion Certificate + Python GitHub Portfolio',
    careerSupport: 'Resume Crafting, Coding Interview Drills (LeetCode / HackerRank), 100% Placement Assistance',
    mentorSupport: 'Available (Experienced Python Backend Engineers & Tech Leads)',
  },

  whyLearn: {
    title: 'Why Learn Python Development?',
    intro:
      'Python continues to be the world’s most popular, versatile, and rapidly growing programming language. Its elegant syntax and extensive ecosystem power enterprise backends, high-throughput APIs, automated data pipelines, web applications, and artificial intelligence systems worldwide.',
    description:
      'Learning Python goes far beyond simple syntax. Modern software engineering demands developers who can design scalable Object-Oriented architectures, model complex relational databases, build high-concurrency asynchronous microservices with FastAPI and Django, and deploy containerized services into production.',
    competenciesTitle: 'An industry-ready Python Software Engineer must know how to:',
    competencies: [
      'Write clean, idiomatic Python code adhering to PEP 8 standards and modern best practices',
      'Design modular applications using Object-Oriented Programming (OOP) and design patterns',
      'Implement efficient algorithms and choose appropriate data structures for optimal complexity',
      'Handle system automation, file operations, CSV/JSON processing, and logging pipelines',
      'Build robust, scalable enterprise web applications using the Django 5 MVT framework',
      'Develop lightning-fast asynchronous REST APIs using FastAPI, Pydantic, and type hints',
      'Architect relational database schemas and execute optimized queries using PostgreSQL and SQLAlchemy',
      'Manage background tasks and distributed asynchronous job queues with Celery and Redis',
      'Harvest web data reliably using web scraping tools like BeautifulSoup and Playwright',
      'Write comprehensive unit tests with PyTest, package applications with Docker, and deploy to Linux servers',
    ],
    summaryNote:
      "CloudSwan's Python Development program provides a project-driven curriculum engineered to transform learners into competent, versatile backend software engineers.",
  },

  learningPath: {
    title: 'Python Training Institute in Coimbatore',
    subtitle: 'A Structured Journey from Programming Foundations to Enterprise Python Architecture',
    description:
      'CloudSwan Solution provides practical Python development training in Coimbatore, bridging computer science fundamentals with modern production frameworks. Our curriculum takes you step-by-step from core syntax to production microservices:',
    steps: [
      'Python 3 Fundamentals & Logic',
      'Data Structures & Collections',
      'Advanced Object-Oriented Programming',
      'File I/O, Error Handling & System Scripting',
      'Concurrency & Asynchronous Python (Asyncio)',
      'Relational Databases & PostgreSQL',
      'SQLAlchemy ORM & Database Migrations',
      'Enterprise Web Apps with Django 5',
      'RESTful APIs with Django REST Framework',
      'High-Speed Microservices with FastAPI',
      'Background Task Queues with Celery & Redis',
      'Automated Testing, Docker & Cloud Deployment',
    ],
    outcomeNote:
      'This comprehensive progression ensures learners graduate with the architectural confidence needed to excel in competitive technical interviews and enterprise development teams.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'What You Will Learn in Modern Python Engineering',
    description:
      'A comprehensive 11-module curriculum spanning foundational programming, advanced data structures, Object-Oriented architecture, database integrations, Django web applications, FastAPI microservices, and automated testing.',
    modules: [
      {
        number: 1,
        title: 'Python Fundamentals & Core Programming Concepts',
        subtitle: 'Build Rock-Solid Algorithmic & Logical Foundations',
        description:
          'Master Python 3 syntax, control structures, variables, memory allocation, and modular function design.',
        topics: [
          'Introduction to Python & development environment setup (VS Code, Python 3.12+)',
          'Variables, primitive data types (int, float, str, bool), and dynamic typing',
          'Operators: Arithmetic, logical, bitwise, assignment, and comparison',
          'Control flow structures: if, elif, else, and ternary expressions',
          'Loops: while and for loops, range function, break, continue, pass',
          'Defining functions: Parameters, return values, *args, and **kwargs',
          'Variable scope: Local, global, non-local, and LEGB rule',
          'Lambda expressions, map, filter, and zip functions',
          'String manipulation, string formatting (f-strings), and regular expressions',
          'Creating and importing custom Python modules and packages',
        ],
      },
      {
        number: 2,
        title: 'Data Structures, Algorithms & Collections',
        subtitle: 'Master Python’s Rich Built-In Data Structures & Time Complexity',
        description:
          'Deep dive into Python lists, tuples, sets, dictionaries, list comprehensions, and algorithmic complexity.',
        topics: [
          'Lists: Indexing, slicing, list methods, and memory layout',
          'Tuples: Immutability, tuple packing and unpacking, named tuples',
          'Sets: Set theory operations (union, intersection, difference) and hashing',
          'Dictionaries: Key-value operations, dictionary methods, and views',
          'Comprehensions: List, set, and dictionary comprehensions with conditional filtering',
          'Generators, yield keyword, iterators, and memory-efficient streaming',
          'Python collections module: Counter, defaultdict, deque, OrderedDict',
          'Sorting algorithms, custom sort keys, and lambda functions',
          'Algorithmic complexity (Big-O notation) and performance benchmarking',
          'Practical LeetCode and HackerRank algorithmic problem-solving patterns',
        ],
      },
      {
        number: 3,
        title: 'Advanced Object-Oriented Programming (OOP)',
        subtitle: 'Architect Robust, Reusable & Maintainable Software Systems',
        description:
          'Understand OOP paradigms in depth, including classes, inheritance, polymorphism, encapsulation, and magic methods.',
        topics: [
          'Classes and instances: Attributes, methods, and the self parameter',
          'Instance methods vs Class methods (@classmethod) vs Static methods (@staticmethod)',
          'Encapsulation: Public, protected, and private attributes (name mangling)',
          'Inheritance: Single, multiple, and multi-level inheritance, super() function',
          'Method Resolution Order (MRO) and the C3 linearization algorithm',
          'Polymorphism and Duck Typing in Python',
          'Abstract Base Classes (ABCs) using the abc module',
          'Special / Dunder (Magic) methods: __init__, __str__, __repr__, __eq__, __len__, __iter__',
          'Python properties and @property getters, setters, and deleters',
          'Modern Python dataclasses and Pydantic models for structured data modeling',
        ],
      },
      {
        number: 4,
        title: 'File I/O, Error Handling & System Automation',
        subtitle: 'Interact with the Operating System, Files & Data Formats',
        description:
          'Learn to manipulate files, handle runtime exceptions gracefully, write system automation scripts, and manage logs.',
        topics: [
          'Reading and writing text files, binary files, and buffer management',
          'Working with CSV files using the csv module and tabular data',
          'Parsing and serializing JSON data using the json module',
          'Exception handling: try, except, else, finally blocks and exception hierarchies',
          'Creating custom user-defined application exceptions',
          'Context managers and the with statement: Building custom context managers',
          'Interacting with the operating system using os, sys, and pathlib modules',
          'Subprocess execution, shell command automation, and environment variables',
          'Enterprise logging: Configuring log levels (DEBUG to CRITICAL) with the logging module',
          'Automating daily repetitive system tasks and directory batch processing',
        ],
      },
      {
        number: 5,
        title: 'Concurrency, Multithreading & Asynchronous Python',
        subtitle: 'Build High-Throughput & Non-Blocking Python Applications',
        description:
          'Explore concurrency models in Python, the Global Interpreter Lock (GIL), threading, multiprocessing, and asyncio.',
        topics: [
          'Understanding concurrency vs parallelism in computing',
          'The Python Global Interpreter Lock (GIL) and its implications',
          'Multithreading with threading module: Worker threads and locks',
          'Multiprocessing with multiprocessing module for CPU-bound tasks',
          'Concurrent futures: ThreadPoolExecutor and ProcessPoolExecutor',
          'Introduction to Asynchronous I/O and the asyncio event loop',
          'Coroutines, async and await syntax, and event loop scheduling',
          'Running concurrent tasks with asyncio.gather() and asyncio.create_task()',
          'Asynchronous HTTP requests using aiohttp and httpx libraries',
          'Building high-concurrency non-blocking network scripts',
        ],
      },
      {
        number: 6,
        title: 'Relational Databases, PostgreSQL & SQLAlchemy ORM',
        subtitle: 'Model Enterprise Data & Master Object-Relational Mapping',
        description:
          'Connect Python applications to enterprise PostgreSQL databases, write SQL queries, and manage data with SQLAlchemy.',
        topics: [
          'Relational database fundamentals, tables, primary keys, and foreign keys',
          'Connecting to PostgreSQL using psycopg3 driver and connection pooling',
          'Executing parameterized SQL queries and preventing SQL injection',
          'Transactions, commit, rollback, and ACID compliance in Python',
          'Introduction to SQLAlchemy 2.0 ORM: Declarative base and models',
          'Defining relationships: One-to-one, one-to-many, and many-to-many',
          'Querying with SQLAlchemy: select, filter_by, join, order_by, aggregate functions',
          'Database migrations using Alembic: Generating, editing, and applying migrations',
          'Database indexing strategies for high-performance Python backends',
          'Best practices for database session lifecycle management in web backends',
        ],
      },
      {
        number: 7,
        title: 'Enterprise Web Development with Django 5',
        subtitle: 'Build Full-Featured Web Applications with Python’s Flagship Framework',
        description:
          'Master Django’s Model-View-Template (MVT) architecture, built-in ORM, admin dashboard, user authentication, and forms.',
        topics: [
          'Django architecture and philosophy: The "Batteries-Included" approach',
          'Django project structure, apps, settings configuration, and URL routing',
          'Django ORM models: Field types, model methods, and meta options',
          'Model relationships: ForeignKey, OneToOneField, ManyToManyField',
          'Django QuerySets: Filtering, Q objects, F expressions, aggregation, annotate',
          'Views: Function-Based Views (FBVs) vs Class-Based Views (CBVs)',
          'Django Templates: Template tags, filters, inheritance, and static files',
          'Django Forms and ModelForms: Form rendering, validation, and CSRF protection',
          'Built-in Django authentication system: User registration, login, logout, password resets',
          'Customizing the Django Admin interface for enterprise data management',
        ],
      },
      {
        number: 8,
        title: 'Django REST Framework (DRF) & API Architecture',
        subtitle: 'Build Production-Grade RESTful Web APIs with Django',
        description:
          'Create secure, documented, and scalable RESTful API endpoints for mobile and web clients using DRF.',
        topics: [
          'REST architecture principles, HTTP methods, and status codes in APIs',
          'Introduction to Django REST Framework (DRF) architecture',
          'Serializers and ModelSerializers: Validation, nested serialization, and fields',
          'API Views: APIView, Generic Views, and ViewSets with DefaultRouter',
          'API Authentication: Session authentication, Token authentication, and SimpleJWT',
          'Permission classes: IsAuthenticated, IsAdminUser, and custom object-level permissions',
          'API filtering, search, ordering, and pagination strategies',
          'Handling file and media uploads in DRF endpoints',
          'Automated API documentation with drf-spectacular (OpenAPI / Swagger)',
          'Writing comprehensive integration tests for DRF endpoints',
        ],
      },
      {
        number: 9,
        title: 'High-Performance Microservices with FastAPI',
        subtitle: 'Build Modern, Blazing-Fast Asynchronous Python APIs',
        description:
          'Learn FastAPI, Python type hints, Pydantic data validation, async request handlers, and automatic documentation.',
        topics: [
          'Why FastAPI? Benchmarks, modern features, and asynchronous advantage',
          'Python type hinting in depth: Union, Optional, List, Dict, custom types',
          'Pydantic models: Field validation, schemas, and response models',
          'FastAPI routing: Path parameters, query parameters, request body',
          'Dependency Injection system: Reusable authentication, database sessions, and services',
          'Asynchronous database integration with AsyncSession and SQLAlchemy 2.0',
          'Security in FastAPI: OAuth2 password flow, JWT tokens, and password hashing',
          'Interactive API documentation with automatic Swagger UI and ReDoc',
          'Background tasks and WebSockets in FastAPI for live event broadcasting',
          'Structuring large FastAPI enterprise projects with APIRouter',
        ],
      },
      {
        number: 10,
        title: 'Background Tasks, Web Scraping & Automation',
        subtitle: 'Execute Distributed Tasks with Celery & Harvest Web Data',
        description:
          'Build asynchronous job processing pipelines using Celery and Redis, and scrape websites with BeautifulSoup and Playwright.',
        topics: [
          'Distributed task queues: Why backends need background workers',
          'Setting up Celery with Redis as message broker and result backend',
          'Writing and executing asynchronous Celery tasks and periodic cron jobs (Celery Beat)',
          'Monitoring Celery workers with Flower dashboard',
          'Web scraping fundamentals, robots.txt, and ethical scraping standards',
          'Parsing HTML and XML documents using BeautifulSoup4 and lxml',
          'Automating modern JavaScript-heavy dynamic websites with Playwright / Selenium',
          'Handling user-agent rotation, rate limits, proxies, and session cookies',
          'Data cleaning, transformation, and storage of scraped datasets into PostgreSQL',
          'Building end-to-end automated data harvesting and notification bots',
        ],
      },
      {
        number: 11,
        title: 'Testing, Packaging, Docker & Production Cloud Deployment',
        subtitle: 'Deliver Tested, Containerized & Production-Ready Software',
        description:
          'Implement test-driven development with PyTest, containerize Python backends with Docker, and deploy to cloud servers.',
        topics: [
          'Unit testing with PyTest: Test fixtures, assertions, parametrize, and test discovery',
          'Mocking external dependencies, database calls, and APIs with unittest.mock',
          'Measuring test code coverage with pytest-cov and coverage reports',
          'Virtual environments: venv, pip, requirements.txt, and modern Poetry package manager',
          'Writing production Dockerfiles for Python, Django, and FastAPI apps',
          'Multi-container environments with Docker Compose (App + PostgreSQL + Redis + Celery)',
          'Deploying Python applications to Linux (Ubuntu) servers on AWS EC2 / DigitalOcean',
          'Configuring Gunicorn and Uvicorn ASGI/WSGI servers behind Nginx reverse proxy',
          'Setting up SSL certificates with Let’s Encrypt Certbot and domain management',
          'System monitoring, error tracking with Sentry, and production maintenance',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical Python Development Projects',
    subtitle: 'Build Real-World Enterprise Software Applications',
    description:
      'Gain real engineering confidence by building six complete, production-grade Python projects. Each project incorporates databases, authentication, testing, and cloud deployment.',
    items: [
      {
        number: 1,
        title: 'Enterprise Multi-Vendor E-Commerce Platform with Django',
        description:
          'Develop a comprehensive marketplace with product catalogs, shopping cart, customer checkout with Stripe payments, order tracking, merchant dashboards, and an automated invoice PDF generator.',
        focusArea: 'Django MVT, Django ORM, Stripe Payments & PostgreSQL Database',
        toolsUsed: ['Django 5', 'PostgreSQL', 'Stripe API', 'Bootstrap / Tailwind', 'WeasyPrint'],
      },
      {
        number: 2,
        title: 'High-Performance FinTech Banking Microservice with FastAPI',
        description:
          'Architect an asynchronous banking API supporting account creation, KYC verification, balance ledgers, money transfers with ACID transactions, rate limiting, and JWT token authentication.',
        focusArea: 'FastAPI, Pydantic, Async SQLAlchemy 2.0 & Financial Transactions',
        toolsUsed: ['FastAPI', 'PostgreSQL', 'SQLAlchemy 2.0', 'Pydantic', 'JWT', 'Docker'],
      },
      {
        number: 3,
        title: 'Distributed Web Scraping & Market Intelligence Pipeline',
        description:
          'Build an automated data harvesting engine that scrapes real-time competitive pricing across multiple e-commerce websites, cleans the datasets, stores them in PostgreSQL, and alerts users of price drops via Celery.',
        focusArea: 'Web Scraping, Celery Task Queues, Redis & Automated Cron Scheduling',
        toolsUsed: ['BeautifulSoup4', 'Playwright', 'Celery', 'Redis', 'PostgreSQL', 'Flower'],
      },
      {
        number: 4,
        title: 'Automated Enterprise Document Processing & Analytics Dashboard',
        description:
          'Engineer an automated system that ingests batches of PDF invoices and Excel financial records, extracts structured data using regex and openpyxl, performs reconciliation, and visualizes KPIs.',
        focusArea: 'File I/O Automation, Excel/PDF Parsing & Business Reporting',
        toolsUsed: ['Python', 'OpenPyXL', 'PyPDF', 'Pandas', 'Matplotlib', 'Streamlit'],
      },
      {
        number: 5,
        title: 'Real-Time Notification & Chat Microservice with WebSockets',
        description:
          'Create a decoupled real-time messaging microservice featuring WebSocket connections, user presence detection, message channels, and Redis Pub/Sub for horizontal scaling across worker nodes.',
        focusArea: 'FastAPI WebSockets, Redis Pub/Sub & Asynchronous Event Streaming',
        toolsUsed: ['FastAPI', 'WebSockets', 'Redis', 'Uvicorn', 'Docker', 'Asyncio'],
      },
      {
        number: 6,
        title: 'DevOps Server Health Monitoring & Automated Alerting Agent',
        description:
          'Develop a lightweight cross-platform daemon that tracks CPU, memory, disk usage, and network traffic using psutil, detects anomalies, and automatically dispatches rich Slack and Telegram alerts.',
        focusArea: 'System Scripting, OS Telemetry, Multi-Threading & Bot APIs',
        toolsUsed: ['Python', 'psutil', 'Requests', 'Telegram Bot API', 'Docker', 'PyTest'],
      },
    ],
  },

  portfolio: {
    title: 'Build Your Python Engineering Portfolio',
    subtitle: 'Demonstrate High-Quality Code & Real Projects on GitHub',
    description:
      'A great GitHub profile is the strongest proof of your coding abilities. At CloudSwan, you will build a clean, well-documented repository portfolio featuring production applications, unit tests, and Docker configs.',
    deliverables: [
      'Production-deployed Django multi-vendor e-commerce web platform',
      'High-speed FastAPI microservice with Swagger documentation and JWT security',
      'Distributed web scraping pipeline with Celery workers and Redis broker',
      'PostgreSQL database models with Alembic migrations and complex queries',
      'Automated enterprise document extraction script suite with Excel and PDF parsing',
      'Real-time WebSocket event broadcaster with Redis Pub/Sub',
      'Comprehensive PyTest test suites with high code coverage reports',
      'Multi-container Docker Compose setup orchestrating app, database, and cache',
      'Production deployment on AWS EC2 / Linux VPS with Nginx and Gunicorn/Uvicorn',
      'Active GitHub profile featuring clean commits, README case studies, and CI workflows',
    ],
    ctaText: 'Build Your Python Portfolio',
  },

  targetAudiences: {
    title: 'Who Can Join This Course?',
    subtitle: 'Designed for Learners with Varied Goals & Backgrounds',
    audiences: [
      {
        id: 'beginners-programming',
        title: 'Beginners & Non-IT Graduates',
        description:
          'Python’s clean, English-like syntax makes it the ideal first programming language to build a solid software career.',
      },
      {
        id: 'engineering-students',
        title: 'B.E. / B.Tech / BCA / MCA Students',
        description:
          'Develop strong coding, OOP, and backend development skills to crack technical campus placement interviews.',
      },
      {
        id: 'aspiring-backend-engineers',
        title: 'Aspiring Backend Engineers',
        description:
          'Master Django, FastAPI, PostgreSQL, and REST APIs to build reliable server-side architectures.',
      },
      {
        id: 'data-ai-enthusiasts',
        title: 'Data & AI Aspirants',
        description:
          'Master core and advanced Python programming before venturing into Data Science, Machine Learning, or AI engineering.',
      },
      {
        id: 'qa-automation-engineers',
        title: 'QA Testers & Automation Aspirants',
        description:
          'Learn Python programming to build automated test scripts, web crawlers, and API testing suites.',
      },
      {
        id: 'system-administrators',
        title: 'System Admins & DevOps Beginners',
        description:
          'Automate routine server tasks, write maintenance scripts, and parse log files efficiently using Python.',
      },
      {
        id: 'career-switchers',
        title: 'Professionals Switching into Tech',
        description:
          'Transition into software development through structured mentor-led guidance and practical hands-on labs.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Career Opportunities',
    subtitle: 'Unlock Lucrative Python Development Roles',
    description:
      'Python skills open doors across diverse software domains including web development, backend engineering, cloud automation, and data platforms:',
    roles: [
      'Python Developer',
      'Backend Software Engineer',
      'Django Web Developer',
      'FastAPI Microservices Developer',
      'Software Development Engineer (SDE-1)',
      'Python Automation Engineer',
      'API & Integration Engineer',
      'Junior Data Engineer',
      'DevOps / Scripting Associate',
      'Full Stack Python Developer',
    ],
    disclaimer:
      'Career placement depends on individual student dedication, problem-solving abilities, project quality, and interview performance.',
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'The Enterprise Python Software Stack',
    description:
      'Work with industry-standard frameworks, libraries, databases, and developer utilities used by top technology companies.',
    categories: [
      {
        category: 'Core Python & Runtimes',
        description: 'Language runtime, standard libraries and typing',
        tools: ['Python 3.12+', 'Asyncio', 'Typing / Pydantic', 'Dataclasses', 'Multiprocessing', 'Collections'],
      },
      {
        category: 'Web Frameworks & APIs',
        description: 'Enterprise backend and high-performance microservices',
        tools: ['Django 5', 'Django REST Framework', 'FastAPI', 'Uvicorn', 'Gunicorn', 'WebSockets'],
      },
      {
        category: 'Databases & ORMs',
        description: 'Relational data management and object mappers',
        tools: ['PostgreSQL', 'SQLite', 'SQLAlchemy 2.0', 'Alembic', 'Redis', 'Psycopg3'],
      },
      {
        category: 'Automation & Scraping',
        description: 'Task workers, schedulers, and web scrapers',
        tools: ['Celery', 'Celery Beat', 'Redis', 'BeautifulSoup4', 'Playwright', 'OpenPyXL'],
      },
      {
        category: 'Testing & Code Quality',
        description: 'Automated test runners, linters, and formatters',
        tools: ['PyTest', 'pytest-cov', 'unittest.mock', 'Black', 'Flake8 / Ruff', 'Postman'],
      },
      {
        category: 'DevOps & Deployment',
        description: 'Containerization, Linux servers, and cloud hosts',
        tools: ['Docker', 'Docker Compose', 'Linux (Ubuntu)', 'Nginx', 'Git / GitHub', 'AWS EC2'],
      },
      {
        category: 'Development Environment',
        description: 'Modern developer workflow and debugging environments',
        tools: ['VS Code', 'PyCharm', 'Virtualenv / Poetry', 'Bash / Zsh', 'Swagger / OpenAPI'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan for Python?',
    subtitle: 'Coimbatore’s Premier Practical Programming Institute',
    pillars: [
      {
        title: 'Logic Building & Problem Solving',
        description:
          'We emphasize core coding fundamentals and algorithmic thinking with daily coding exercises on LeetCode-style platforms.',
      },
      {
        title: 'Modern Framework Curriculum (2026)',
        description:
          'Learn contemporary tools like Django 5, FastAPI, async Python, and Docker—not outdated libraries or deprecated versions.',
      },
      {
        title: 'Hands-On Enterprise Capstones',
        description:
          'Build six real-world software applications featuring databases, authentication, background tasks, and Docker deployment.',
      },
      {
        title: 'Experienced Backend Mentors',
        description:
          'Learn directly from seasoned software engineers who bring real production architecture experience to the classroom.',
      },
      {
        title: 'Complete Career & Placement Support',
        description:
          'Receive professional resume crafting, GitHub reviews, technical mock interviews, and access to recruitment drives across Coimbatore and Bangalore.',
      },
      {
        title: 'Flexible Schedules & Dual Campuses',
        description:
          'Attend weekday or weekend batches at our fully equipped centers in Saravanampatti and Gandhipuram, or join live online.',
      },
      {
        title: 'Dedicated Code Review Sessions',
        description:
          'Get 1-on-1 code reviews that help you write clean, idiomatic PEP 8 Python code suitable for top-tier software teams.',
      },
    ],
  },

  certification: {
    title: 'Python Development Certification in Coimbatore',
    subtitle: 'Validate Your Python Engineering Proficiency',
    description:
      'Upon successfully completing all course modules, assignments, and capstone project presentations, you will be awarded CloudSwan’s accredited Python Development Certificate. This credential validates your capability to design, build, and deploy enterprise Python applications.',
    highlights: [
      'Python 3.12+ Core Syntax, Control Structures & Data Collections',
      'Advanced Object-Oriented Programming (OOP) & Design Patterns',
      'Relational Database Modeling with PostgreSQL & SQLAlchemy ORM',
      'Enterprise Web Architecture with Django 5 & MVT Pattern',
      'RESTful API Engineering with Django REST Framework (DRF)',
      'High-Speed Asynchronous Microservices with FastAPI & Pydantic',
      'Distributed Task Queues with Celery & Redis Message Broker',
      'Web Scraping & Data Pipeline Automation with BeautifulSoup & Playwright',
      'Unit Testing, Mocking & Test Coverage with PyTest',
      'Containerization with Docker & Production Deployment on Linux/AWS',
    ],
    regionalFocus: {
      title: 'Python Development Training in Tamil Nadu',
      description:
        'Coimbatore and the Western Tamil Nadu industrial belt have witnessed rapid technological adoption across IT service hubs, SaaS startups, manufacturing engineering firms, and automotive software centers. Leading IT enterprises in TIDEL Park Coimbatore and product startups recruit Python developers for backend APIs, data pipelines, automation scripting, and cloud integrations. CloudSwan provides regional learners with hands-on software development experience, preparing them for engineering roles across Tamil Nadu and Bangalore.',
      keyAreas: [
        'TIDEL Park & Saravanampatti IT Park Tech Hiring',
        'Coimbatore Industrial Automation & SaaS Startup Clusters',
        'Practical In-Person Labs in Saravanampatti & Gandhipuram',
        'Direct Referrals & Placement Drives Across South India',
      ],
    },
    ethicalHackingNote: {
      title: 'Engineering Best Practices & Secure Python Development',
      subtitle: 'Writing Secure, Robust & Defensively Architected Python Software',
      description:
        'Writing production-ready Python requires adherence to security standards, clean coding conventions, and defensive programming practices. Students are trained to prevent common software vulnerabilities such as SQL injection, insecure deserialization, and unhandled exceptions.',
      keyFocusAreas: [
        'Adherence to PEP 8 Coding Style Guidelines',
        'OWASP Top 10 Web Application Security in Python',
        'SQL Injection Prevention via Parameterized Queries & ORMs',
        'Safe Secrets Management with Environment Variables (.env)',
        'Defensive Error Handling & Exception Management',
        'Safe Deserialization & Avoiding Insecure pickle Usage',
        'Rate Limiting & DoS Protection in FastAPI / Django',
        'SOLID Principles & Modular Architecture Patterns',
      ],
      complianceWarning:
        'All web scraping and API development exercises must respect target website terms of service, robots.txt directives, and ethical standards.',
    },
  },

  roadmap: {
    title: 'Python Developer Career Roadmap',
    subtitle: 'A Step-by-Step Pathway from Absolute Beginner to Production Backend Engineer',
    steps: [
      {
        step: 1,
        title: 'Master Python Syntax & Logic',
        description:
          'Learn variables, data types, operators, conditional statements, loops, and writing modular functions.',
      },
      {
        step: 2,
        title: 'Master Data Structures & Collections',
        description:
          'Work with lists, tuples, sets, dictionaries, comprehensions, and generators while analyzing algorithmic complexity.',
      },
      {
        step: 3,
        title: 'Master Object-Oriented Programming (OOP)',
        description:
          'Understand classes, inheritance, encapsulation, polymorphism, magic methods, and abstract base classes.',
      },
      {
        step: 4,
        title: 'File I/O, Error Handling & System Scripting',
        description:
          'Handle files, parse CSV/JSON, build custom exceptions, use context managers, and automate OS workflows.',
      },
      {
        step: 5,
        title: 'Learn Concurrency & Asyncio',
        description:
          'Understand multithreading, multiprocessing, the GIL, coroutines, and asynchronous programming with asyncio.',
      },
      {
        step: 6,
        title: 'Master PostgreSQL & SQLAlchemy ORM',
        description:
          'Write relational SQL queries, design database schemas, configure SQLAlchemy 2.0 models, and apply Alembic migrations.',
      },
      {
        step: 7,
        title: 'Build Enterprise Web Apps with Django 5',
        description:
          'Master Django MVT, models, QuerySets, forms, user authentication, and admin customization.',
      },
      {
        step: 8,
        title: 'Engineer REST APIs with DRF',
        description:
          'Create serializers, viewsets, routers, configure JWT authentication, and generate Swagger documentation.',
      },
      {
        step: 9,
        title: 'Build Asynchronous Microservices with FastAPI',
        description:
          'Harness Pydantic models, type hints, dependency injection, and asynchronous path operations for high-speed APIs.',
      },
      {
        step: 10,
        title: 'Background Tasks & Web Scraping',
        description:
          'Implement Celery task queues with Redis, and scrape web data with BeautifulSoup and Playwright.',
      },
      {
        step: 11,
        title: 'Test with PyTest & Containerize with Docker',
        description:
          'Write comprehensive unit tests with PyTest, mock dependencies, and build Docker containers for deployment.',
      },
      {
        step: 12,
        title: 'Deploy to Cloud & Prepare for Interviews',
        description:
          'Deploy apps on Linux/AWS with Nginx and Gunicorn, practice coding challenges, and attend placement drives.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-1',
      question: 'Why is Python a great programming language to learn?',
      answer:
        'Python is renowned for its clean, readable syntax, massive ecosystem of libraries, and immense versatility. It is widely used in web development, backend microservices, automation, data science, machine learning, and DevOps.',
    },
    {
      id: 'faq-2',
      question: 'Do I need prior coding experience to join this course?',
      answer:
        'No prior coding knowledge is required. The course starts from absolute computer fundamentals and basic Python syntax before progressing into advanced frameworks and database architectures.',
    },
    {
      id: 'faq-3',
      question: 'Which frameworks are covered in the Python curriculum?',
      answer:
        'You will learn Django 5 (including Django REST Framework for robust enterprise backends) and FastAPI (for modern, high-speed asynchronous microservices), giving you mastery over both major Python web frameworks.',
    },
    {
      id: 'faq-4',
      question: 'How is Python development different from Python for Data Science?',
      answer:
        'This course focuses on software engineering: backend web development, building RESTful APIs, relational databases, microservices, system automation, and cloud deployment. If you wish to focus exclusively on analytics, explore our Data Science & AI course.',
    },
    {
      id: 'faq-5',
      question: 'Will I learn how to build and document RESTful APIs?',
      answer:
        'Yes. You will learn API design principles, authentication with JWT, schema validation with Pydantic and serializers, and automatic interactive API documentation using Swagger and OpenAPI.',
    },
    {
      id: 'faq-6',
      question: 'What databases will I work with during the course?',
      answer:
        'You will work extensively with PostgreSQL, the industry standard relational database, using raw SQL, psycopg3, SQLAlchemy ORM, and the Django ORM, as well as Redis for in-memory caching and message queuing.',
    },
    {
      id: 'faq-7',
      question: 'What projects will I build during the Python training?',
      answer:
        'You will build six production capstones: a multi-vendor Django e-commerce platform, a FastAPI banking microservice, a Celery-powered web scraping pipeline, an automated document processor, a real-time WebSocket chat service, and a DevOps server monitoring agent.',
    },
    {
      id: 'faq-8',
      question: 'Does CloudSwan provide placement assistance for Python developers?',
      answer:
        'Yes. We provide 100% placement support including resume review, GitHub portfolio optimization, LeetCode coding interview prep, mock technical interviews, and interview calls with our hiring partner network.',
    },
    {
      id: 'faq-9',
      question: 'What are the batch schedules and training modes available in Coimbatore?',
      answer:
        'We offer both weekday and weekend batches at our Saravanampatti and Gandhipuram centers in Coimbatore, as well as live instructor-led online sessions with recorded session access.',
    },
    {
      id: 'faq-10',
      question: 'What salary packages can a fresher expect as a Python Developer?',
      answer:
        'In India, entry-level Python software developers typically earn between 3.8 LPA and 7.5 LPA, with skilled engineers and product startup recruits commanding packages of 10 LPA to 18+ LPA.',
    },
    {
      id: 'faq-11',
      question: 'Will I receive a course completion certificate?',
      answer:
        'Yes. Upon completing the modules, assignments, and capstone project submissions, you will receive an official Python Development Certificate from CloudSwan Solution.',
    },
    {
      id: 'faq-12',
      question: 'How can I enroll or book a free counselling session?',
      answer:
        'You can click the "Book a Free Counselling Session" button, reach our team at +91 98765 43210, or visit our Saravanampatti or Gandhipuram campuses in Coimbatore.',
    },
  ],

  finalCta: {
    title: 'Start Your Python Software Engineering Career',
    subtitle: 'Master the World’s Most Versatile Programming Language with CloudSwan',
    checkpoints: [
      'Master Python 3.12+ fundamentals, data structures & advanced OOP.',
      'Build enterprise web backends with Django 5 & Django REST Framework.',
      'Develop high-speed asynchronous microservices with FastAPI & Pydantic.',
      'Model relational databases with PostgreSQL & SQLAlchemy ORM.',
      'Implement distributed task queues with Celery & Redis.',
      'Build 6 real-world capstone projects with full placement support.',
    ],
    primaryCta: 'Book a Free Counselling Session',
    secondaryCta: 'Explore Course Curriculum',
  },
}
