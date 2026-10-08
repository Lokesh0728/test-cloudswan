import type { CourseData } from '../../types/course'

export const devopsCourseData: CourseData = {
  id: 'devops',
  slug: '/courses/devops',
  title: 'DevOps & Cloud Engineering Course in Coimbatore',
  shortTitle: 'DevOps',
  eyebrowBadge: 'Industry-Standard DevOps Track',
  tagline: 'Learn DevOps, Cloud Computing, CI/CD, Docker, Kubernetes, AWS & Azure Through Practical Projects',
  heroDescription: [
    'Build practical skills in DevOps, cloud infrastructure, Linux, Git, CI/CD, Docker, Kubernetes, Ansible, AWS, Azure, Infrastructure as Code and cloud automation.',
    "CloudSwan's DevOps & Cloud Engineering program is designed for students, fresh graduates, software developers, system administrators, IT professionals and career switchers who want to build practical skills in modern software delivery and cloud infrastructure.",
    'Learn the fundamentals first, work with industry-relevant tools, build deployment workflows and gain practical experience through real-world projects.',
  ],
  primaryCtaText: 'Book a Free Counselling Session',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'DevOps & Cloud Engineering',
    duration: '3 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Advanced',
    coreSkills: 'Linux, Git, CI/CD, Docker, Kubernetes',
    advancedTopics: 'AWS & Azure, Jenkins, Ansible & Infrastructure as Code',
    projects: 'Practical DevOps & Cloud Projects (6 Real-World Projects)',
    certification: 'Course Completion Certificate',
    careerSupport: 'Resume & Interview Preparation (2-Month Live Internship*)',
    mentorSupport: 'Available (Dedicated DevOps Mentors)',
  },

  whyLearn: {
    title: 'Why Learn DevOps & Cloud Engineering?',
    intro:
      'Modern software teams need reliable ways to build, test, deploy and manage applications. DevOps brings development and operations together through automation, collaboration and continuous delivery, while cloud engineering focuses on designing, deploying and managing cloud-based infrastructure.',
    description:
      "CloudSwan's learning path combines DevOps practices + cloud technologies + automation to create a practical foundation for modern IT environments.",
    competenciesTitle: 'A modern DevOps professional should understand:',
    competencies: [
      'How Linux systems work',
      'How Git manages source code',
      'How CI/CD automates software delivery',
      'How Docker packages applications',
      'How Kubernetes manages containers',
      'How Ansible supports configuration management',
      'How cloud platforms provide infrastructure and services',
      'How Infrastructure as Code automates infrastructure',
      'How monitoring helps maintain system reliability',
      'How security fits into cloud and DevOps workflows',
    ],
    summaryNote:
      'CloudSwan combines DevOps practices, cloud platforms, and automation into a single connected journey.',
  },

  learningPath: {
    title: 'DevOps Training Institute in Coimbatore',
    subtitle: 'Connecting Individual Tools into Complete DevOps Workflows',
    description:
      'CloudSwan Solution provides practical DevOps training in Coimbatore covering Linux, Git, CI/CD, Jenkins, Docker, Kubernetes, Ansible, cloud platforms, infrastructure automation and monitoring. The program focuses on connecting individual tools into complete DevOps workflows. Instead of learning each technology separately, learners follow a structured journey:',
    steps: [
      'Linux Administration',
      'Git & GitHub',
      'DevOps & Agile',
      'CI/CD & Jenkins',
      'Docker Containers',
      'Kubernetes Clusters',
      'Ansible Automation',
      'AWS & Azure Cloud',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Cloud Security',
      'Production Projects',
    ],
    outcomeNote:
      'This creates a clear progression from DevOps fundamentals to cloud-based deployment and automation.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'What You Will Learn',
    description:
      'Start with the fundamentals of Linux and version control before moving into automated build pipelines, containers, orchestration, multi-cloud platforms, and observability.',
    modules: [
      {
        number: 1,
        title: 'DevOps Fundamentals',
        subtitle: 'Start with the fundamentals before moving into tools and automation',
        description:
          'Learn the culture, processes, lifecycle, and automation philosophies that underpin modern continuous delivery.',
        topics: [
          'Introduction to DevOps',
          'DevOps lifecycle',
          'DevOps culture',
          'Agile and DevOps',
          'Development and operations',
          'Continuous Integration',
          'Continuous Delivery',
          'Continuous Deployment',
          'DevOps workflows',
          'Automation fundamentals',
        ],
      },
      {
        number: 2,
        title: 'Linux Administration',
        subtitle: 'Build a Strong Foundation in Linux',
        description:
          'Linux is an important foundation for many DevOps and cloud environments. Master file systems, user permissions, networking, and scripting.',
        topics: [
          'Linux fundamentals',
          'File system architecture',
          'File and directory management',
          'Users and groups',
          'Permissions and ownership',
          'Processes management',
          'Package management',
          'Networking commands',
          'Shell commands',
          'Environment variables',
          'Basic shell scripting',
          'System administration fundamentals',
        ],
      },
      {
        number: 3,
        title: 'Git & GitHub',
        subtitle: 'Learn Version Control for Modern Development',
        description:
          'Git helps development teams track code changes and collaborate effectively across distributed workflows.',
        topics: [
          'Git fundamentals',
          'Repository management',
          'Git commands',
          'Branching strategies',
          'Merging code',
          'Pull requests',
          'Conflict resolution',
          'Git workflows',
          'GitHub repositories',
          'Collaboration & code reviews',
          'Version control best practices',
        ],
      },
      {
        number: 4,
        title: 'Jenkins & CI/CD',
        subtitle: 'Automate Build, Test & Deployment Workflows',
        description:
          'Learn how Continuous Integration and Continuous Deployment automate software delivery reliably.',
        topics: [
          'CI/CD fundamentals',
          'Jenkins introduction',
          'Jenkins architecture (Controller & Agents)',
          'Jobs and pipelines',
          'Build automation',
          'Testing integration',
          'Pipeline creation with Jenkinsfile',
          'Deployment automation',
          'Webhooks & triggers',
          'Continuous delivery workflows',
        ],
      },
      {
        number: 5,
        title: 'Docker & Containerization',
        subtitle: 'Package Applications Using Containers',
        description:
          'Docker helps developers package applications and their dependencies into portable, predictable containers.',
        topics: [
          'Container fundamentals',
          'Docker architecture',
          'Docker images',
          'Docker containers',
          'Dockerfiles best practices',
          'Docker commands',
          'Container networking',
          'Volumes and persistent data',
          'Docker Compose multi-container setups',
          'Application containerization',
          'Container deployment',
        ],
      },
      {
        number: 6,
        title: 'Kubernetes & Container Orchestration',
        subtitle: 'Manage Containerized Applications at Scale',
        description:
          'Learn the fundamentals of Kubernetes and understand how containerized applications are deployed, managed, and scaled.',
        topics: [
          'Kubernetes fundamentals',
          'Kubernetes architecture (Control Plane & Worker Nodes)',
          'Pods and ReplicaSets',
          'Deployments',
          'Services and Load Balancing',
          'ConfigMaps',
          'Secrets',
          'Namespaces',
          'Scaling applications',
          'Rolling updates & rollbacks',
          'Application deployment',
          'Container orchestration',
        ],
      },
      {
        number: 7,
        title: 'Ansible & Configuration Management',
        subtitle: 'Automate Server Configuration and Application Delivery',
        description:
          'Learn how agentless automation simplifies configuration, infrastructure provisioning, and application management.',
        topics: [
          'Ansible fundamentals',
          'Ansible architecture',
          'Inventory management',
          'Playbooks in YAML',
          'Modules and tasks',
          'Variables and facts',
          'Roles and reusable structures',
          'Configuration management',
          'Server automation',
          'Application deployment with Ansible',
        ],
      },
      {
        number: 8,
        title: 'AWS & Azure Cloud',
        subtitle: 'Build Cloud Infrastructure Skills Across Leading Providers',
        description:
          'Learn the fundamentals of leading cloud platforms and understand how cloud resources are provisioned in modern IT environments.',
        topics: [
          'AWS fundamentals & Global Infrastructure',
          'AWS Compute (EC2)',
          'AWS Storage (S3, EBS)',
          'AWS Networking (VPC, Subnets)',
          'AWS IAM Security',
          'AWS Cloud deployment & Monitoring',
          'Azure fundamentals',
          'Azure Virtual Machines',
          'Azure Storage & Networking',
          'Azure Identity (Entra ID)',
          'Azure Resource management',
          'Cloud deployment strategies',
        ],
      },
      {
        number: 9,
        title: 'Infrastructure as Code',
        subtitle: 'Automate Infrastructure With Code',
        description:
          'Infrastructure as Code allows infrastructure configurations to be managed through repeatable and automated processes.',
        topics: [
          'IaC fundamentals',
          'Infrastructure automation',
          'Configuration management integration',
          'Infrastructure provisioning',
          'Environment management',
          'Deployment workflows',
          'Infrastructure version control',
          'Terraform fundamentals (curriculum aligned)',
        ],
      },
      {
        number: 10,
        title: 'Monitoring & Logging',
        subtitle: 'Understand Application and Infrastructure Performance',
        description:
          'Monitoring helps DevOps teams identify performance issues, failures, and system bottlenecks proactively.',
        topics: [
          'Monitoring fundamentals',
          'Application monitoring',
          'Infrastructure monitoring',
          'Log management',
          'Performance metrics',
          'Alerts & threshold configurations',
          'System health checks',
          'Troubleshooting and root cause analysis',
          'Reliability fundamentals',
        ],
      },
      {
        number: 11,
        title: 'Cloud Security Fundamentals',
        subtitle: 'Build Secure Cloud & DevOps Environments',
        description:
          'Security is an essential part of modern cloud infrastructure and automated DevOps delivery pipelines (DevSecOps).',
        topics: [
          'Identity and access management (IAM)',
          'Authentication mechanisms',
          'Authorization policies',
          'Access control',
          'Secure configurations',
          'Network security fundamentals (Firewalls & Security Groups)',
          'Secrets management in CI/CD',
          'Security monitoring',
          'Cloud security best practices',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical DevOps & Cloud Projects',
    subtitle: 'Learn by Building Real-World DevOps Workflows',
    description:
      'Practical projects help learners understand how DevOps tools work together in enterprise production pipelines.',
    items: [
      {
        number: 1,
        title: 'CI/CD Pipeline',
        description:
          'Create an automated CI/CD pipeline using Git, GitHub and Jenkins to build, test and deploy a web application on every commit.',
        focusArea: 'Continuous Integration & Deployment',
        toolsUsed: ['Git', 'GitHub', 'Jenkins', 'Webhooks'],
      },
      {
        number: 2,
        title: 'Docker Application Deployment',
        description:
          'Containerize a multi-tier application using Docker, manage dependencies with Dockerfiles, and orchestrate with Docker Compose.',
        focusArea: 'Containerization & Networking',
        toolsUsed: ['Docker', 'Dockerfile', 'Docker Compose', 'Docker Hub'],
      },
      {
        number: 3,
        title: 'Kubernetes Deployment',
        description:
          'Deploy, scale and manage a containerized production application with high availability, services, and rolling updates on Kubernetes.',
        focusArea: 'Container Orchestration & Scaling',
        toolsUsed: ['Kubernetes', 'Pods', 'Services', 'ConfigMaps'],
      },
      {
        number: 4,
        title: 'Ansible Automation',
        description:
          'Automate remote server configuration, security patches, user management, and application deployments using Ansible Playbooks.',
        focusArea: 'Configuration Management & Automation',
        toolsUsed: ['Ansible', 'YAML Playbooks', 'Roles', 'SSH'],
      },
      {
        number: 5,
        title: 'Cloud Infrastructure Project',
        description:
          'Deploy application infrastructure, virtual servers, storage buckets, and secure networks using AWS or Azure cloud services.',
        focusArea: 'Cloud Infrastructure Provisioning',
        toolsUsed: ['AWS EC2', 'S3', 'VPC', 'Azure VMs'],
      },
      {
        number: 6,
        title: 'End-to-End DevOps Pipeline',
        description:
          'Build a complete workflow: Code → Git → Build → Test → Docker → CI/CD → Cloud → Deployment → Monitoring in a realistic environment.',
        focusArea: 'Complete Software Delivery Lifecycle',
        toolsUsed: ['Git', 'Jenkins', 'Docker', 'Kubernetes', 'Cloud', 'Monitoring'],
      },
    ],
  },

  portfolio: {
    title: 'Build Your DevOps Portfolio',
    subtitle: 'Demonstrate Real Infrastructure & Automation Competence',
    description:
      'A practical portfolio can demonstrate your ability to work with DevOps and cloud technologies to hiring teams.',
    deliverables: [
      'GitHub repositories showcasing branching models and Git workflows',
      'Linux administration and Bash system automation shell scripts',
      'Automated Jenkins declarative CI/CD pipeline configuration',
      'Containerized multi-service Docker project with Docker Compose',
      'Kubernetes cluster manifests (Deployments, Services, ConfigMaps, Secrets)',
      'Ansible configuration automation playbooks and roles',
      'AWS cloud infrastructure setup and architecture documentation',
      'Azure cloud compute and network deployment files',
      'Infrastructure as Code (IaC) provisioning templates',
      'System monitoring, alerts, and logging dashboard setup',
      'End-to-end automated software delivery pipeline demonstration',
    ],
    ctaText: 'Build Your DevOps Portfolio',
  },

  targetAudiences: {
    title: 'Who Can Join This Course?',
    subtitle: 'Tailored for Engineers, Admins, and Tech Aspirants',
    audiences: [
      {
        id: 'students',
        title: 'Students',
        description:
          'Build practical DevOps and cloud skills alongside your academic education to stand out in campus placements.',
      },
      {
        id: 'fresh-graduates',
        title: 'Fresh Graduates',
        description:
          'Develop technical skills and practical projects for entry-level IT, cloud, and software deployment roles.',
      },
      {
        id: 'software-developers',
        title: 'Software Developers',
        description:
          'Understand deployment, automation, containers and cloud infrastructure to become full lifecycle engineers.',
      },
      {
        id: 'system-administrators',
        title: 'System Administrators',
        description:
          'Expand your existing infrastructure knowledge into modern DevOps automation and cloud technologies.',
      },
      {
        id: 'it-professionals',
        title: 'IT Professionals',
        description:
          'Develop modern automation, CI/CD, and cloud engineering skills to advance your tech career.',
      },
      {
        id: 'network-engineers',
        title: 'Network Engineers',
        description:
          'Build additional knowledge in cloud infrastructure, VPC networking, security, and automation.',
      },
      {
        id: 'career-switchers',
        title: 'Career Switchers',
        description:
          'Build a structured foundation for moving into high-growth DevOps and cloud-focused roles.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Career Opportunities',
    subtitle: 'High-Demand Engineering & Operations Roles',
    description:
      'After developing practical DevOps and Cloud Engineering skills, learners can explore roles across startups and global enterprises.',
    roles: [
      'DevOps Engineer',
      'Cloud Engineer',
      'Cloud DevOps Engineer',
      'Site Reliability Engineer (SRE)',
      'Automation Engineer',
      'Infrastructure Engineer',
      'Platform Engineer',
      'Release Engineer',
      'Cloud Operations Engineer',
      'Build & Deployment Engineer',
    ],
    disclaimer:
      'Career requirements vary depending on the organization, role and level of experience. Practical project exposure substantially accelerates placement opportunities.',
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'Complete Visual Technology Stack',
    description:
      'Gain hands-on experience with the industry standard tools taught directly in CloudSwan\'s current curriculum.',
    categories: [
      {
        category: 'Operating Systems',
        description: 'Server environment foundation',
        tools: ['Linux', 'Ubuntu', 'RHEL/CentOS', 'Bash Shell'],
      },
      {
        category: 'Version Control',
        description: 'Source code management & collaboration',
        tools: ['Git', 'GitHub', 'Git Branching', 'Pull Requests'],
      },
      {
        category: 'CI/CD',
        description: 'Continuous Integration & Continuous Delivery',
        tools: ['Jenkins', 'CI/CD Pipelines', 'Jenkinsfile', 'Webhooks'],
      },
      {
        category: 'Containers',
        description: 'Packaging & cluster orchestration',
        tools: ['Docker', 'Docker Compose', 'Kubernetes', 'K8s Pods & Services'],
      },
      {
        category: 'Automation',
        description: 'Configuration management & automated provisioning',
        tools: ['Ansible', 'Ansible Playbooks', 'Infrastructure as Code'],
      },
      {
        category: 'Cloud Platforms',
        description: 'Public cloud hosting and services',
        tools: ['AWS (Amazon Web Services)', 'Microsoft Azure'],
      },
      {
        category: 'Monitoring',
        description: 'Infrastructure health & log analysis',
        tools: ['Monitoring & Logging Tools', 'CloudWatch', 'System Metrics'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan?',
    subtitle: 'A Practical Approach to DevOps & Cloud Engineering Education',
    pillars: [
      {
        title: 'Practical Learning',
        description:
          'Understand DevOps concepts by working directly with tools, assignments, and hands-on lab environments.',
      },
      {
        title: 'Industry-Relevant Curriculum',
        description:
          'Learn technologies used across modern software development, automated deployment, and cloud platforms.',
      },
      {
        title: 'Real-World Projects',
        description:
          'Build practical projects that demonstrate your ability to execute end-to-end DevOps workflows.',
      },
      {
        title: 'Cloud Platform Exposure',
        description:
          'Develop practical knowledge of leading AWS and Azure cloud computing environments.',
      },
      {
        title: 'Mentor Guidance',
        description:
          'Get 1:1 guidance while working through complex technical architectures and real deployment projects.',
      },
      {
        title: 'Career Preparation',
        description:
          'Work on resumes, GitHub portfolios, interview preparation, and professional profiles.',
      },
      {
        title: 'Flexible Learning',
        description:
          'CloudSwan currently provides online and offline learning options along with mentor support and batch timings.',
      },
    ],
  },

  certification: {
    title: 'DevOps Certification Course in Coimbatore',
    subtitle: 'Build Skills and Showcase Your Learning',
    description:
      'A DevOps certification can complement practical projects, GitHub work, your resume and professional profile. CloudSwan\'s current DevOps page includes certification guidance and career support as part of its offering.',
    highlights: [
      'Linux Administration & Bash Shell Scripting',
      'Git & GitHub Collaborative Version Control',
      'Jenkins Automated CI/CD Pipeline Engineering',
      'Docker Containerization & Image Packaging',
      'Kubernetes Cluster Management & Orchestration',
      'Ansible Infrastructure Automation & Configuration',
      'AWS & Microsoft Azure Cloud Platform Deployment',
      'Infrastructure as Code (IaC) & Cloud Monitoring',
    ],
    regionalFocus: {
      title: 'Cloud DevOps Training Institute in Tamil Nadu',
      description:
        'Cloud environments have become an important part of modern software infrastructure. Cloud DevOps combines cloud computing with automation, continuous delivery, infrastructure management and monitoring. Learners looking for Cloud DevOps Training in Tamil Nadu can develop skills across: Cloud Computing → Linux → Networking → Git → CI/CD → Containers → Kubernetes → Automation → Infrastructure → Monitoring. AWS and Azure exposure can help learners understand how DevOps practices are applied within cloud environments.',
      keyAreas: [
        'Continuous Delivery Automation',
        'Containerization & Microservices',
        'Multi-Cloud AWS & Azure Competence',
        'Coimbatore Campuses + Live Online',
      ],
    },
    ethicalHackingNote: {
      title: 'DevOps Engineer Course Tamil Nadu',
      subtitle: 'Build a Career in DevOps & Cloud Engineering',
      description:
        'A DevOps Engineer works across development, operations, automation, deployment and infrastructure. Before choosing a DevOps Engineer Course in Tamil Nadu, learners should look for a program that includes Linux, Git, CI/CD, Jenkins, Docker, Kubernetes, configuration management, cloud platforms, infrastructure automation, monitoring, and practical projects.',
      keyFocusAreas: [
        'Linux & Networking',
        'CI/CD Pipelines (Jenkins)',
        'Docker & Kubernetes',
        'Ansible Configuration',
        'AWS & Azure Cloud',
        'IaC & Monitoring',
      ],
      complianceWarning:
        'The goal should be to understand how these technologies work together in a real software delivery environment.',
    },
  },

  roadmap: {
    title: 'DevOps Career Roadmap',
    subtitle: 'A 12-Step Progression from Fundamentals to Production Deployment',
    steps: [
      {
        step: 1,
        title: 'Learn Linux & Networking Fundamentals',
        description:
          'Master Linux commands, file permissions, shell scripting, package management, and basic networking.',
      },
      {
        step: 2,
        title: 'Learn Git & GitHub',
        description:
          'Master version control, branches, pull requests, merge conflict resolution, and collaborative workflows.',
      },
      {
        step: 3,
        title: 'Understand DevOps & Agile',
        description:
          'Understand CI/CD principles, DevOps culture, agile methodologies, and automation foundations.',
      },
      {
        step: 4,
        title: 'Learn Jenkins & CI/CD',
        description:
          'Configure Jenkins jobs, build automated test-and-deploy pipelines, and manage triggers with webhooks.',
      },
      {
        step: 5,
        title: 'Learn Docker',
        description:
          'Containerize applications, write optimized Dockerfiles, manage images, and run multi-container stacks.',
      },
      {
        step: 6,
        title: 'Learn Kubernetes',
        description:
          'Orchestrate containers with Pods, Deployments, Services, ConfigMaps, Secrets, and rolling updates.',
      },
      {
        step: 7,
        title: 'Learn Ansible & Automation',
        description:
          'Automate server configuration, write declarative YAML Playbooks, and manage environments with roles.',
      },
      {
        step: 8,
        title: 'Learn AWS & Azure',
        description:
          'Deploy cloud compute, virtual networks, storage, and IAM policies on leading public cloud providers.',
      },
      {
        step: 9,
        title: 'Learn Infrastructure as Code & Monitoring',
        description:
          'Manage infrastructure as code and configure system monitoring, metrics, alarms, and log management.',
      },
      {
        step: 10,
        title: 'Build Real-World DevOps Projects',
        description:
          'Execute end-to-end delivery pipelines: Code → Git → Build → Test → Docker → CI/CD → Cloud → Monitoring.',
      },
      {
        step: 11,
        title: 'Build Your Portfolio',
        description:
          'Assemble GitHub repositories, automation playbooks, and pipeline architecture diagrams.',
      },
      {
        step: 12,
        title: 'Prepare for Interviews & Career Opportunities',
        description:
          'Practice system design, troubleshoot deployment scenarios, and polish your resume with mentor support.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-devops-1',
      question: 'What is DevOps?',
      answer:
        'DevOps is an approach that combines development and operations practices to improve software delivery through collaboration, automation, continuous integration, continuous deployment and reliable infrastructure management.',
    },
    {
      id: 'faq-devops-2',
      question: 'What is the difference between DevOps and Cloud Engineering?',
      answer:
        'DevOps focuses on software delivery, automation, CI/CD and collaboration between development and operations. Cloud Engineering focuses more on designing, deploying, managing and optimizing cloud infrastructure and services. The two areas overlap significantly.',
    },
    {
      id: 'faq-devops-3',
      question: 'Can beginners learn DevOps?',
      answer:
        'Yes. Beginners can start with foundational topics such as Linux, Git and basic cloud concepts before progressing into CI/CD, containers, Kubernetes and automation.',
    },
    {
      id: 'faq-devops-4',
      question: 'What skills are required to become a DevOps Engineer?',
      answer:
        'Important skills include Linux, Git, CI/CD, Docker, Kubernetes, cloud platforms, scripting, automation, infrastructure management and monitoring.',
    },
    {
      id: 'faq-devops-5',
      question: 'Is Linux necessary for DevOps?',
      answer:
        'Linux is an important skill for many DevOps environments because DevOps engineers frequently work with Linux-based servers, command-line tools and cloud infrastructure.',
    },
    {
      id: 'faq-devops-6',
      question: 'What is CI/CD?',
      answer:
        'CI/CD refers to practices that automate parts of software development, testing and deployment. Continuous Integration focuses on regularly integrating and testing code, while Continuous Delivery or Deployment automates later stages of releasing software.',
    },
    {
      id: 'faq-devops-7',
      question: 'What is Docker used for?',
      answer:
        'Docker is used to package applications and their dependencies into containers, helping applications run consistently across different environments.',
    },
    {
      id: 'faq-devops-8',
      question: 'What is Kubernetes?',
      answer:
        'Kubernetes is a container orchestration platform used to deploy, manage and scale containerized applications.',
    },
    {
      id: 'faq-devops-9',
      question: 'Is AWS required for DevOps?',
      answer:
        'Cloud platforms such as AWS are widely used in DevOps environments. Learning AWS can help learners understand how DevOps workflows operate in cloud infrastructure.',
    },
    {
      id: 'faq-devops-10',
      question: 'Can non-IT students learn DevOps?',
      answer:
        'Yes, beginners can start with foundational concepts. However, DevOps involves technical areas such as Linux, networking, cloud computing, automation and scripting, so consistent practice is important.',
    },
    {
      id: 'faq-devops-11',
      question: 'What projects will I work on?',
      answer:
        'Projects can include CI/CD pipelines, Docker deployments, Kubernetes applications, Ansible automation, cloud infrastructure and end-to-end DevOps workflows.',
    },
    {
      id: 'faq-devops-12',
      question: 'What career opportunities are available after DevOps training?',
      answer:
        'Potential roles include DevOps Engineer, Cloud Engineer, Cloud DevOps Engineer, Site Reliability Engineer, Automation Engineer, Infrastructure Engineer and Platform Engineer.',
    },
    {
      id: 'faq-devops-13',
      question: 'Does CloudSwan provide DevOps certification?',
      answer:
        'CloudSwan\'s current DevOps program includes course completion certification guidance and career support as part of its offering.',
    },
    {
      id: 'faq-devops-14',
      question: 'Does CloudSwan provide practical training?',
      answer:
        'The current CloudSwan DevOps program provides hands-on practical training, live projects, internship experience and real-time DevOps tools in dedicated lab environments.',
    },
  ],

  finalCta: {
    title: 'Build Your DevOps & Cloud Engineering Career',
    subtitle:
      'Learn the fundamentals. Work with industry-relevant tools. Build CI/CD pipelines. Deploy applications to the cloud. Automate infrastructure. Build your DevOps portfolio.',
    checkpoints: [
      'Master Linux, Git, Jenkins, Docker, Kubernetes, Ansible & Cloud Platforms',
      'Execute 6 production-grade practical DevOps projects',
      'Deploy applications across AWS and Azure cloud infrastructure',
      'Build a verified GitHub portfolio demonstrating automated delivery',
      'Includes resume preparation, interview coaching and internship opportunities',
    ],
    primaryCta: 'Book a Free Counselling Session',
    secondaryCta: 'Explore Course Curriculum',
  },
}
