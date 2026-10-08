import type { CourseData } from '../../types/course'

export const cloudComputingCourseData: CourseData = {
  id: 'cloud-computing',
  slug: '/courses/cloud-computing',
  title: 'Cloud Computing Course in Coimbatore',
  shortTitle: 'Cloud Computing',
  eyebrowBadge: 'Multi-Cloud & Enterprise Infrastructure Architecture Track',
  tagline: 'Master Cloud Architecture, Virtualization, AWS, Azure, Linux, Terraform, Kubernetes & Cloud Security',
  heroDescription: [
    'Build in-demand multi-cloud engineering and infrastructure architecture capabilities with CloudSwan Solution at our Saravanampatti and Gandhipuram campuses in Coimbatore.',
    'Master cloud architecture fundamentals, enterprise virtualization, Linux server administration, AWS and Microsoft Azure services, cloud networking (VPC / VNet), Infrastructure as Code with Terraform, container orchestration with Docker and Kubernetes, and enterprise cloud governance.',
    'Designed for students, system administrators, network engineers, IT professionals, and career switchers looking to lead enterprise cloud migrations and manage resilient multi-cloud infrastructure in global technology organizations.',
  ],
  primaryCtaText: 'Book a Free Counselling Session',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'Cloud Computing (Multi-Cloud: AWS + Azure + DevOps & IaC)',
    duration: '3 to 4 Months',
    mode: 'Classroom & Live Interactive Online',
    level: 'Beginner to Advanced',
    coreSkills: 'Cloud Architecture, Linux, AWS, Microsoft Azure, VPC/VNet, Storage, IAM',
    advancedTopics: 'Terraform (IaC), Docker, Kubernetes, Multi-Cloud DR, Cloud Security, FinOps',
    projects: '6 Real-World Enterprise Cloud Architecture Projects',
    certification: 'Course Completion Certificate + Multi-Cloud Certification Prep',
    careerSupport: 'Resume & Architecture Portfolio Building, Mock Technical Interviews, Placement Assistance',
    mentorSupport: 'Available (Certified Cloud Solutions Architects & SysOps Leads)',
  },

  whyLearn: {
    title: 'Why Learn Cloud Computing?',
    intro:
      'Cloud computing is the indispensable backbone of modern software engineering, digital businesses, and global enterprise infrastructure. Over 90% of global enterprises now operate on multi-cloud environments spanning Amazon Web Services (AWS) and Microsoft Azure.',
    description:
      'Organizations no longer rely on single-platform knowledge. Modern cloud engineers must understand foundational multi-cloud architecture, Infrastructure as Code (IaC) with Terraform, containerization with Docker and Kubernetes, networking across hybrid environments, and automated disaster recovery.',
    competenciesTitle: 'An industry-ready Cloud Solutions Engineer must know how to:',
    competencies: [
      'Architect resilient, fault-tolerant, and high-availability systems across AWS and Azure',
      'Administer Linux cloud servers, automate configurations, and write shell automation scripts',
      'Design isolated cloud networks using Virtual Private Clouds (VPC), Subnets, Gateways, and Route Tables',
      'Enforce zero-trust security and least-privilege access using AWS IAM and Microsoft Entra ID',
      'Manage scalable block, object, and file storage systems with lifecycle and replication policies',
      'Deploy and scale relational and NoSQL cloud databases with automated backups and read replicas',
      'Automate complete infrastructure provisioning using Terraform (Infrastructure as Code)',
      'Package and run microservices inside Docker containers and orchestrate them on Kubernetes',
      'Monitor telemetry, logs, and performance alerts using Amazon CloudWatch and Azure Monitor',
      'Implement multi-region disaster recovery (DR) strategies and optimize cloud expenditure (FinOps)',
    ],
    summaryNote:
      "CloudSwan's Multi-Cloud Computing program delivers a practical, vendor-balanced curriculum that equips you to architect, secure, and operate enterprise cloud environments.",
  },

  learningPath: {
    title: 'Cloud Computing Training Institute in Coimbatore',
    subtitle: 'A Structured Multi-Cloud Pathway from Virtualization to Cloud Architecture',
    description:
      'CloudSwan Solution provides practical Cloud Computing training at our Saravanampatti and Gandhipuram campuses in Coimbatore. Our curriculum connects low-level operating system fundamentals with high-level cloud architecture patterns, taking you step-by-step from core virtualization to production multi-cloud deployments:',
    steps: [
      'Cloud Concepts & Virtualization Models',
      'Linux Administration & Shell Automation',
      'Cloud Compute: AWS EC2 & Azure VMs',
      'Cloud Storage: S3 & Azure Blob',
      'Cloud Networking: VPC, VNet & Routing',
      'Identity & Security: IAM & Entra ID',
      'Elastic Scalability & Load Balancing',
      'Cloud Databases: RDS & Azure SQL',
      'Infrastructure as Code (IaC) with Terraform',
      'Containers & Kubernetes Orchestration',
      'Telemetry, Monitoring & FinOps Cost Control',
      'Multi-Cloud DR & Capstone Architecture Projects',
    ],
    outcomeNote:
      'This balanced journey prepares you for both AWS and Azure ecosystems while reinforcing foundational cloud engineering principles that remain durable across platforms.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'What You Will Learn Across Multi-Cloud Architecture',
    description:
      'A comprehensive 11-module curriculum spanning virtualization, Linux server administration, AWS and Azure services, Infrastructure as Code, container orchestration, cloud security, and disaster recovery.',
    modules: [
      {
        number: 1,
        title: 'Cloud Computing Foundations & Virtualization Architecture',
        subtitle: 'Understand the Core Mechanics of Cloud Infrastructure',
        description:
          'Learn how modern data centers work, virtualization mechanics, cloud deployment models, and the evolution of cloud computing.',
        topics: [
          'What is Cloud Computing? NIST characteristics & core definitions',
          'Cloud service models: IaaS, PaaS, SaaS, and Serverless (FaaS)',
          'Cloud deployment models: Public, Private, Hybrid, and Multi-Cloud architectures',
          'Virtualization fundamentals: Type-1 (Bare Metal) vs Type-2 (Hosted) Hypervisors',
          'Virtual machines vs physical servers: CPU virtualization, memory ballooning, vSwitching',
          'Global infrastructure layout: Regions, Availability Zones (AZs), and Edge Locations',
          'Shared Responsibility Model in cloud computing',
          'Cloud migration strategies: The 6 R’s (Rehost, Replatform, Refactor, Repurchase, Retain, Retire)',
          'Cloud economic principles: CapEx vs OpEx and pay-as-you-go pricing models',
          'Comparing top cloud providers: Amazon Web Services (AWS) vs Microsoft Azure vs Google Cloud (GCP)',
        ],
      },
      {
        number: 2,
        title: 'Linux Operating System & Shell Scripting for Cloud Engineers',
        subtitle: 'Master the Foundation of Modern Cloud Infrastructure',
        description:
          'Linux powers the vast majority of cloud workloads. Master terminal commands, server configuration, package management, and bash automation.',
        topics: [
          'Linux operating system architecture, kernel, and distribution landscape (Ubuntu, RHEL, Amazon Linux)',
          'File system hierarchy (/etc, /var, /opt, /home, /dev) and navigation commands',
          'Linux user and group permissions (chmod, chown, SUID, SGID)',
          'Package managers: apt, yum, and dnf package installations',
          'SSH remote connectivity: Public/private key generation, ssh-agent, and hardened sshd configuration',
          'Process management: top, htop, ps, kill, systemd services, and daemon management',
          'Disk partitioning, mounting filesystems, LVM (Logical Volume Management), and swap configuration',
          'Linux networking essentials: ifconfig, ip, ping, netstat, traceroute, iptables, and firewalld',
          'Writing Bash automation scripts: Variables, loops, conditionals, and automation cron jobs',
          'Log management: journalctl, syslog, and parsing logs with grep, awk, and sed',
        ],
      },
      {
        number: 3,
        title: 'Cloud Compute & Virtual Server Management',
        subtitle: 'Provision & Manage Virtual Servers in AWS & Azure',
        description:
          'Deploy, configure, and manage compute instances on AWS (EC2) and Microsoft Azure (Virtual Machines).',
        topics: [
          'Compute concepts: vCPUs, memory ratios, instance families (General, Compute, Memory, Storage)',
          'Amazon EC2: Launching instances, configuring AMIs, user data bootstrap scripts',
          'Azure Virtual Machines: Deploying VMs, Resource Groups, Azure marketplace images',
          'Key pairs, security groups, and network security rules for compute access',
          'Block storage volumes: AWS EBS (gp3, io2) and Azure Managed Disks',
          'Volume snapshots, backups, expansion, and cross-region copying',
          'Ephemeral storage vs persistent storage: EC2 Instance Store vs EBS',
          'Compute pricing models: On-Demand, Reserved Instances / Azure Savings Plans, and Spot instances',
          'Server maintenance: Kernel patching, resizing instances, and AMI creation',
          'Compute health checks, status checks, and automated recovery actions',
        ],
      },
      {
        number: 4,
        title: 'Cloud Storage & Distributed Data Architecture',
        subtitle: 'Master Object, Block & Distributed File Storage',
        description:
          'Store and manage unstructured, block, and shared file data at cloud scale with AWS S3, EFS, and Azure Blob Storage.',
        topics: [
          'Storage taxonomy: Block storage vs Object storage vs File storage',
          'Amazon S3: Buckets, object keys, metadata, and consistency model',
          'Azure Blob Storage: Storage accounts, containers, blobs, and access tiers',
          'Storage classes: Standard, Infrequent Access, Archive, Glacier, and Deep Archive',
          'Object lifecycle policies and automated transitions to lower-cost tiers',
          'Object versioning, MFA delete, object locking, and compliance retention',
          'Security in cloud storage: Bucket policies, Access Control Lists (ACLs), Azure SAS tokens',
          'Server-side encryption: SSE-S3, SSE-KMS, and customer-provided keys (SSE-C)',
          'Hosting static websites on AWS S3 & Azure Blob with custom domains',
          'Shared file systems: Amazon EFS (Elastic File System) and Azure Files for multi-instance access',
        ],
      },
      {
        number: 5,
        title: 'Cloud Networking & Hybrid Connectivity',
        subtitle: 'Build Secure, Isolated Enterprise Virtual Networks',
        description:
          'Understand software-defined networking in the cloud, routing, subnets, gateways, and hybrid cloud interconnects.',
        topics: [
          'Networking fundamentals: IPv4 CIDR blocks, subnetting, and private IP ranges (RFC 1918)',
          'Amazon VPC (Virtual Private Cloud) & Azure Virtual Network (VNet) architecture',
          'Public subnets, private subnets, and isolated database subnets',
          'Internet Gateways (IGW) and Azure Virtual Network Gateways',
          'NAT Gateways: Enabling outbound internet access for private workloads',
          'Route tables and packet forwarding rules',
          'Security Groups (stateful) vs Network Access Control Lists / NACLs (stateless)',
          'VPC Peering and Azure VNet Peering across accounts and regions',
          'Connecting on-premises data centers: Site-to-Site VPN and AWS Direct Connect / Azure ExpressRoute',
          'DNS management with AWS Route 53 and Azure DNS: Routing policies (Latency, Geolocation, Failover)',
        ],
      },
      {
        number: 6,
        title: 'Identity, Governance & Cloud Security',
        subtitle: 'Implement Zero-Trust Security & Access Governance',
        description:
          'Enforce least privilege access, multi-factor authentication, enterprise directory federation, and encryption.',
        topics: [
          'Identity and Access Management (AWS IAM): Users, Groups, Roles, and Policies',
          'Azure Active Directory / Microsoft Entra ID: Tenants, app registrations, and RBAC roles',
          'Writing JSON IAM policies: Effect, Action, Resource, and Condition blocks',
          'IAM Roles and instance profiles: Delegating access without hardcoded credentials',
          'Multi-Factor Authentication (MFA) enforcement and credential rotation policies',
          'Key Management Service (AWS KMS & Azure Key Vault): Managing cryptographic keys',
          'Cloud governance: AWS Organizations, Service Control Policies (SCPs), Azure Management Groups',
          'Security auditing: AWS CloudTrail, AWS Config, Azure Policy, and compliance auditing',
          'DDoS protection and edge defense: AWS Shield, AWS WAF (Web Application Firewall)',
          'Implementing zero-trust architecture and compliance frameworks (ISO 27001, SOC 2)',
        ],
      },
      {
        number: 7,
        title: 'High Availability, Elastic Scalability & Load Balancing',
        subtitle: 'Design Self-Healing, Auto-Scaling Architectures',
        description:
          'Distribute incoming traffic and automatically adjust capacity to meet dynamic application demand.',
        topics: [
          'High availability vs Fault tolerance vs Disaster recovery concepts',
          'Elastic Load Balancing (ELB): Application Load Balancer (ALB) vs Network Load Balancer (NLB)',
          'Azure Load Balancer and Application Gateway features',
          'Target groups, health check configurations, and sticky sessions',
          'SSL/TLS offloading and certificate management with AWS Certificate Manager (ACM)',
          'Auto Scaling Groups (ASG) and Azure Virtual Machine Scale Sets (VMSS)',
          'Launch templates and scaling policies: Target tracking, step scaling, scheduled scaling',
          'Multi-AZ high availability patterns: Designing multi-datacenter resilience',
          'Handling sudden traffic spikes without downtime or connection drops',
          'Designing stateless application tiers for horizontal elastic scaling',
        ],
      },
      {
        number: 8,
        title: 'Managed Cloud Databases & Data Warehousing',
        subtitle: 'Deploy Relational, NoSQL & Analytical Cloud Databases',
        description:
          'Learn to run managed databases with automated provisioning, replication, failover, and high availability.',
        topics: [
          'Managed databases vs self-hosted databases on virtual machines',
          'Amazon RDS (Relational Database Service): PostgreSQL, MySQL, and MariaDB',
          'Amazon Aurora: High-performance cloud-native relational database architecture',
          'Azure SQL Database: Single database, elastic pools, and managed instances',
          'RDS Multi-AZ deployments for automated failover and zero data loss',
          'Read replicas for scaling read-heavy database workloads',
          'Managed NoSQL: Amazon DynamoDB (Partition keys, sort keys, global tables)',
          'Azure Cosmos DB: Globally distributed multi-model database concepts',
          'In-memory caching: Amazon ElastiCache (Redis / Memcached) for database acceleration',
          'Database security: Private subnet deployment, encryption at rest and in transit',
        ],
      },
      {
        number: 9,
        title: 'Infrastructure as Code (IaC) with Terraform',
        subtitle: 'Automate Multi-Cloud Provisioning Declaratively',
        description:
          'Master HashiCorp Terraform to define, preview, and provision repeatable cloud infrastructure across AWS and Azure.',
        topics: [
          'Infrastructure as Code (IaC) philosophy: Declarative vs imperative approaches',
          'Terraform architecture: Core workflow (init, plan, apply, destroy)',
          'HashiCorp Configuration Language (HCL): Syntax, arguments, and blocks',
          'Terraform Providers: Configuring AWS and Azure providers',
          'Resources, data sources, input variables, and output values',
          'Terraform state management: local state vs remote state in S3 and Azure Blob',
          'State locking with DynamoDB to prevent concurrent pipeline conflicts',
          'Creating reusable Terraform modules for VPCs, compute, and databases',
          'Managing multi-environment infrastructure (Dev, Staging, Production) with Terraform workspaces',
          'Automating Terraform runs inside CI/CD pipelines (GitHub Actions)',
        ],
      },
      {
        number: 10,
        title: 'Containers & Kubernetes in the Cloud',
        subtitle: 'Package Microservices & Deploy on Managed Kubernetes',
        description:
          'Understand containerization with Docker and container orchestration with AWS EKS and Azure AKS.',
        topics: [
          'Containerization fundamentals: Containers vs VMs and Docker architecture',
          'Writing Dockerfiles: Base images, layers, caching, and multi-stage builds',
          'Publishing container images to Amazon ECR (Elastic Container Registry) and Azure ACR',
          'Amazon ECS (Elastic Container Service): Task definitions, services, and AWS Fargate serverless containers',
          'Introduction to Kubernetes (K8s): Control plane, worker nodes, and kubelet',
          'Core Kubernetes primitives: Pods, Deployments, ReplicaSets, and Services (ClusterIP, NodePort, LoadBalancer)',
          'ConfigMaps and Secrets for runtime configuration management',
          'Managed Kubernetes in the cloud: Amazon EKS and Azure AKS overview',
          'Persistent Volumes (PV) and Persistent Volume Claims (PVC) in cloud Kubernetes',
          'Deploying a containerized microservice application onto a managed cloud Kubernetes cluster',
        ],
      },
      {
        number: 11,
        title: 'Cloud Monitoring, FinOps Cost Control & Disaster Recovery',
        subtitle: 'Operate, Observe & Optimize Cloud Environments',
        description:
          'Implement operational observability, cost control frameworks (FinOps), and multi-region disaster recovery.',
        topics: [
          'Cloud observability: Metrics, logs, and distributed traces',
          'Amazon CloudWatch: Custom metrics, dashboards, and automated alarms with SNS notifications',
          'Azure Monitor and Log Analytics workspaces',
          'Log aggregation, filtering, and metric filters on access logs',
          'AWS CloudTrail: Event logging, API auditing, and forensics investigation',
          'Cloud Financial Management (FinOps): Understanding the cloud bill and cost drivers',
          'AWS Cost Explorer, Budgets, and Azure Cost Management tools',
          'Disaster Recovery (DR) strategies: Backup & Restore, Pilot Light, Warm Standby, Multi-Region Active-Active',
          'Recovery Time Objective (RTO) and Recovery Point Objective (RPO) planning',
          'Multi-cloud resilience and business continuity architecture blueprint',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical Cloud Computing Projects',
    subtitle: 'Build Enterprise Multi-Cloud Infrastructure Scenarios',
    description:
      'Gain real engineering experience by designing, provisioning, securing, and maintaining six production-grade cloud infrastructure environments across AWS and Azure.',
    items: [
      {
        number: 1,
        title: 'Multi-Tier High-Availability Web Application Architecture',
        description:
          'Architect and deploy a resilient three-tier application across multiple Availability Zones featuring public ALBs, autoscaling EC2 web/app tiers, private subnets, and an RDS Multi-AZ database.',
        focusArea: 'High Availability, Load Balancing, Auto Scaling & Subnet Isolation',
        toolsUsed: ['Amazon VPC', 'Amazon EC2', 'Application Load Balancer', 'Amazon RDS Multi-AZ', 'AWS IAM'],
      },
      {
        number: 2,
        title: 'Automated Multi-Environment Cloud Provisioning with Terraform',
        description:
          'Write modular Terraform code to automatically provision complete cloud environments (VPC, subnets, route tables, security groups, compute, storage) with remote state locking in S3 and DynamoDB.',
        focusArea: 'Infrastructure as Code (IaC), Modular Architecture & State Locking',
        toolsUsed: ['Terraform (HCL)', 'AWS S3', 'Amazon DynamoDB', 'GitHub Actions', 'AWS CLI'],
      },
      {
        number: 3,
        title: 'Enterprise Hybrid Cloud Networking & Secure Peering Hub',
        description:
          'Design an enterprise networking hub interconnecting multiple VPCs with VPC Peering, Transit Gateway concepts, NAT Gateways for outbound private traffic, and Site-to-Site IPsec VPN connectivity.',
        focusArea: 'Software-Defined Cloud Networking, Route Tables & Hybrid Connectivity',
        toolsUsed: ['Amazon VPC', 'Azure VNet', 'NAT Gateway', 'VPN Gateway', 'Route 53', 'Security Groups'],
      },
      {
        number: 4,
        title: 'Containerized Microservices on Managed Kubernetes (EKS / AKS)',
        description:
          'Containerize a multi-tier microservices application with Docker, push images to Amazon ECR, and orchestrate them on a managed Kubernetes cluster with LoadBalancer services, Ingress, and auto-scaling.',
        focusArea: 'Container Orchestration, Docker, Kubernetes & Cloud Registry',
        toolsUsed: ['Docker', 'Amazon ECR', 'Kubernetes (kubectl)', 'Amazon EKS / Fargate', 'YAML'],
      },
      {
        number: 5,
        title: 'Multi-Region Disaster Recovery & Automated Backup Pipeline',
        description:
          'Implement an automated cross-region backup and disaster recovery framework using AWS S3 Cross-Region Replication, EBS snapshot lifecycle policies, and automated Route 53 DNS failover routing.',
        focusArea: 'Disaster Recovery, RTO/RPO Planning, S3 Replication & DNS Failover',
        toolsUsed: ['Amazon S3', 'AWS Route 53', 'AWS Backup', 'Amazon CloudWatch', 'AWS Lambda'],
      },
      {
        number: 6,
        title: 'Centralized Cloud Security Auditing & FinOps Cost Optimization',
        description:
          'Configure a centralized security and financial governance dashboard: enforce IAM MFA policies, configure CloudTrail audit logging, setup CloudWatch budget alerts, and remediate unattached EBS volumes.',
        focusArea: 'Cloud Governance, FinOps Cost Reduction & Zero-Trust Security',
        toolsUsed: ['AWS IAM', 'AWS CloudTrail', 'AWS Cost Explorer', 'Amazon CloudWatch', 'Azure Policy'],
      },
    ],
  },

  portfolio: {
    title: 'Build Your Cloud Architecture Portfolio',
    subtitle: 'Demonstrate Real Infrastructure Code & Architecture Diagrams to Employers',
    description:
      'Hiring managers evaluate cloud engineers based on architectural diagrams, Terraform code quality, and proven hands-on deployments. At CloudSwan, you will build an industry-ready infrastructure portfolio.',
    deliverables: [
      'Production multi-tier AWS architecture diagrams and documentation',
      'Modular Terraform repository for automated VPC and server provisioning',
      'Containerized microservices deployment repository with Kubernetes manifests',
      'Multi-AZ load-balanced web infrastructure deployment with health checks',
      'Secure IAM policy suite enforcing zero-trust least-privilege permissions',
      'S3 object storage automation script suite with lifecycle transitions and encryption',
      'Cross-region disaster recovery and DNS failover case study',
      'FinOps cloud cost optimization analysis and budget reduction report',
      'Automated bash server configuration and system monitoring scripts',
      'Active GitHub repository featuring clean IaC commits and architecture blueprints',
    ],
    ctaText: 'Build Your Cloud Portfolio',
  },

  targetAudiences: {
    title: 'Who Can Join This Course?',
    subtitle: 'Designed for Infrastructure Enthusiasts & Tech Professionals',
    audiences: [
      {
        id: 'system-administrators',
        title: 'System Administrators (SysAdmins)',
        description:
          'Modernize your on-premises infrastructure skills by transitioning to AWS, Azure, and automated cloud systems.',
      },
      {
        id: 'network-engineers',
        title: 'Network Engineers',
        description:
          'Expand your networking expertise into cloud VPCs, VNets, VPN tunnels, load balancers, and hybrid connectivity.',
      },
      {
        id: 'engineering-graduates',
        title: 'B.E. / B.Tech / BCA / MCA Graduates',
        description:
          'Build practical, job-ready cloud computing and DevOps foundations to enter high-demand cloud engineering roles.',
      },
      {
        id: 'software-developers',
        title: 'Software Developers',
        description:
          'Understand where your applications run, deploy microservices with Docker, and manage cloud resources via code.',
      },
      {
        id: 'database-administrators',
        title: 'Database Administrators (DBAs)',
        description:
          'Learn managed cloud database engines like Amazon RDS, Aurora, and DynamoDB with automated failover and scaling.',
      },
      {
        id: 'devops-aspirants',
        title: 'DevOps Aspirants',
        description:
          'Master the underlying cloud infrastructure, Linux servers, and Terraform before advancing into full CI/CD pipelines.',
      },
      {
        id: 'career-switchers',
        title: 'IT & Non-IT Career Switchers',
        description:
          'Start from basic computing and Linux concepts and progress to enterprise cloud architectures with mentor guidance.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Career Opportunities',
    subtitle: 'High-Demand Careers in Multi-Cloud Infrastructure',
    description:
      'Cloud engineers are among the most critical assets in enterprise IT. Graduating from this course prepares you for key infrastructure roles across India and worldwide:',
    roles: [
      'Cloud Engineer',
      'Cloud Infrastructure Engineer',
      'AWS / Azure Cloud Administrator',
      'Junior Cloud Solutions Architect',
      'Cloud Operations Engineer (SysOps)',
      'Cloud Support Engineer',
      'Infrastructure as Code (IaC) Engineer',
      'Site Reliability Engineer (SRE) Associate',
      'Cloud Security Associate',
      'Multi-Cloud DevOps Associate',
    ],
    disclaimer:
      'Employment outcomes depend on student dedication, hands-on lab practice, portfolio quality, and interview performance.',
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'The Enterprise Multi-Cloud Toolchain',
    description:
      'Gain hands-on experience with the platforms, automation utilities, and management tools used by Fortune 500 enterprises and cloud consultancies.',
    categories: [
      {
        category: 'Cloud Platforms',
        description: 'Global hyperscale cloud providers',
        tools: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (Overview)'],
      },
      {
        category: 'Operating Systems & Scripting',
        description: 'Server environments and automation languages',
        tools: ['Linux (Ubuntu / Amazon Linux)', 'Bash Shell Scripting', 'Python (Boto3 Basics)', 'SSH / OpenSSH'],
      },
      {
        category: 'Networking & Security',
        description: 'Software-defined networking and identity controls',
        tools: ['Amazon VPC', 'Azure VNet', 'AWS IAM', 'Microsoft Entra ID', 'AWS Route 53', 'Let’s Encrypt SSL'],
      },
      {
        category: 'Storage & Databases',
        description: 'Managed data systems and object stores',
        tools: ['Amazon S3', 'Azure Blob Storage', 'Amazon EBS', 'Amazon RDS', 'Amazon Aurora', 'DynamoDB'],
      },
      {
        category: 'Infrastructure as Code (IaC)',
        description: 'Declarative infrastructure automation',
        tools: ['HashiCorp Terraform', 'Terraform Modules', 'AWS CloudFormation (Basics)', 'HCL'],
      },
      {
        category: 'Containers & Orchestration',
        description: 'Container packaging and cluster coordination',
        tools: ['Docker', 'Docker Compose', 'Amazon ECR', 'Amazon ECS', 'Kubernetes (EKS / AKS)'],
      },
      {
        category: 'Observability & Governance',
        description: 'Telemetry, logging, and financial management',
        tools: ['Amazon CloudWatch', 'Azure Monitor', 'AWS CloudTrail', 'AWS Cost Explorer', 'SNS Alerts'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan for Cloud Computing?',
    subtitle: 'Coimbatore’s Premier Practical Cloud Academy',
    pillars: [
      {
        title: 'Multi-Cloud Curriculum (AWS + Azure)',
        description:
          'We avoid vendor lock-in. Learn the transferable architectural patterns of both AWS and Azure for broader career opportunities.',
      },
      {
        title: 'Real Cloud Console & CLI Practice',
        description:
          'Work inside real cloud environments. Provision virtual machines, configure networks, and write Terraform scripts hands-on.',
      },
      {
        title: 'Infrastructure as Code Focus',
        description:
          'Master modern Terraform workflows, remote state management, and infrastructure automation from day one.',
      },
      {
        title: 'Certified Architect Mentors',
        description:
          'Learn directly from certified AWS Solutions Architects and Azure SysOps administrators with extensive enterprise experience.',
      },
      {
        title: 'End-to-End Placement Support',
        description:
          'Benefit from professional resume reviews, architecture case study portfolio building, and technical interview preparation.',
      },
      {
        title: 'Flexible Schedules & Dual Campuses',
        description:
          'Attend weekday or weekend batches at our Saravanampatti and Gandhipuram campuses in Coimbatore, or join live online.',
      },
      {
        title: 'Practical Scenario-Based Labs',
        description:
          'Practice realistic disaster recovery drills, traffic spikes, security audits, and multi-region failovers in class.',
      },
    ],
  },

  certification: {
    title: 'Cloud Computing Certification in Coimbatore',
    subtitle: 'Validate Your Multi-Cloud Infrastructure Competence',
    description:
      'Upon successfully completing all course modules, hands-on lab challenges, and capstone infrastructure projects, you will receive CloudSwan’s accredited Cloud Computing Certificate. This credential validates your capability to design, build, and operate resilient cloud systems.',
    highlights: [
      'Multi-Cloud Architecture: AWS & Microsoft Azure Principles',
      'Linux Server Administration & Automated Shell Scripting',
      'Virtual Server Compute: AWS EC2 & Azure Virtual Machines',
      'Software-Defined Networking: VPC, VNet, Subnets & Gateways',
      'Zero-Trust Identity Governance: AWS IAM & Microsoft Entra ID',
      'High Availability Architecture: Load Balancing & Elastic Auto Scaling',
      'Managed Cloud Databases: RDS Multi-AZ & Amazon Aurora',
      'Infrastructure as Code (IaC): Terraform Declarative Provisioning',
      'Containerization & Orchestration: Docker & Kubernetes',
      'Cloud Monitoring, Telemetry & FinOps Cost Optimization',
    ],
    regionalFocus: {
      title: 'Cloud Computing Training in Tamil Nadu',
      description:
        'Coimbatore and the wider Western Tamil Nadu industrial belt are undergoing massive digital transformation. Global capability centers (GCCs), IT firms in TIDEL Park Coimbatore, and enterprise manufacturing companies are actively migrating on-premises data centers to AWS and Azure clouds. Organizations across Coimbatore, Chennai, and Bengaluru report urgent demand for cloud engineers who understand networking, security, and Infrastructure as Code. CloudSwan provides regional learners with hands-on multi-cloud expertise, connecting them directly with enterprise hiring opportunities.',
      keyAreas: [
        'TIDEL Park & CHIL SEZ Coimbatore Enterprise Cloud Demand',
        'Multi-Cloud Adoption Across Tamil Nadu IT & Manufacturing Hubs',
        'In-Person Classroom Labs in Saravanampatti & Gandhipuram',
        'Direct Referrals & Placement Drives Across South India',
      ],
    },
    ethicalHackingNote: {
      title: 'Cloud Security Governance & Compliance Advisory',
      subtitle: 'Enforcing Security, Zero-Trust Architecture & Data Residency',
      description:
        'Operating cloud infrastructure requires strict adherence to security governance and regulatory frameworks. Learners are trained in the Shared Responsibility Model, CIS Benchmarks, encryption standards, and automated compliance auditing to ensure cloud environments are resilient against intrusions and misconfigurations.',
      keyFocusAreas: [
        'Shared Responsibility Security Model in IaaS & PaaS',
        'Least Privilege IAM Policies & MFA Enforcement',
        'Network Isolation with Private Subnets & Security Groups',
        'Data Encryption at Rest (KMS) and in Transit (TLS 1.3)',
        'Storage Bucket Access Restrictions & Public Block Enforcement',
        'Continuous Compliance Auditing with CloudTrail & Config',
        'Zero-Trust Security Framework Implementation',
        'FinOps Guardrails & Cloud Budget Breach Prevention',
      ],
      complianceWarning:
        'All cloud lab exercises must adhere strictly to cloud provider acceptable use policies and security best practices.',
    },
  },

  roadmap: {
    title: 'Cloud Engineer Career Roadmap',
    subtitle: 'A Step-by-Step Pathway from Fundamentals to Enterprise Cloud Solutions Architect',
    steps: [
      {
        step: 1,
        title: 'Master Cloud & Virtualization Concepts',
        description:
          'Understand cloud models (IaaS, PaaS, SaaS), hypervisors, virtual machines, regions, and availability zones.',
      },
      {
        step: 2,
        title: 'Master Linux Administration & Shell Scripting',
        description:
          'Learn the Linux file hierarchy, user permissions, package management, SSH hardening, and bash automation.',
      },
      {
        step: 3,
        title: 'Deploy Cloud Compute on AWS & Azure',
        description:
          'Launch EC2 instances and Azure VMs, configure security groups, attach block storage, and manage AMIs.',
      },
      {
        step: 4,
        title: 'Manage Cloud Object & File Storage',
        description:
          'Configure S3 buckets and Azure Blob storage, setup lifecycle transitions, enable versioning, and secure access.',
      },
      {
        step: 5,
        title: 'Build Secure Virtual Networks (VPC / VNet)',
        description:
          'Design subnets, route tables, internet gateways, NAT gateways, peering connections, and network security rules.',
      },
      {
        step: 6,
        title: 'Enforce Identity & Zero-Trust Governance',
        description:
          'Configure IAM policies, roles, MFA, Microsoft Entra ID RBAC, and KMS encryption keys.',
      },
      {
        step: 7,
        title: 'Implement Elastic Scalability & Load Balancing',
        description:
          'Deploy Application Load Balancers, configure health checks, and build Auto Scaling Groups across multiple AZs.',
      },
      {
        step: 8,
        title: 'Provision Managed Cloud Databases',
        description:
          'Deploy Amazon RDS Multi-AZ instances, configure automated backups, and set up read replicas and DynamoDB.',
      },
      {
        step: 9,
        title: 'Automate Infrastructure with Terraform',
        description:
          'Write modular HCL code, manage remote state in S3 and DynamoDB, and provision multi-tier clouds via code.',
      },
      {
        step: 10,
        title: 'Containerize with Docker & Kubernetes',
        description:
          'Build Docker containers, push images to ECR/ACR, and deploy workloads to managed Kubernetes clusters (EKS/AKS).',
      },
      {
        step: 11,
        title: 'Implement Monitoring, FinOps & DR',
        description:
          'Configure CloudWatch dashboards, set budget alarms, design cross-region disaster recovery, and optimize costs.',
      },
      {
        step: 12,
        title: 'Industry Certifications & Career Placement',
        description:
          'Prepare for AWS Certified Solutions Architect or Azure Administrator exams, polish your portfolio, and attend interviews.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-1',
      question: 'What is Cloud Computing and why is it so important?',
      answer:
        'Cloud Computing is the on-demand delivery of IT resources (compute servers, storage, databases, networking, and software) over the internet with pay-as-you-go pricing. It eliminates the need for expensive physical data centers and powers modern global technology businesses.',
    },
    {
      id: 'faq-2',
      question: 'Do I need prior IT experience to learn Cloud Computing?',
      answer:
        'No prior cloud experience is needed. The CloudSwan curriculum starts with foundational computing concepts, virtualization, and Linux administration before moving into complex multi-cloud services.',
    },
    {
      id: 'faq-3',
      question: 'Does this course cover both AWS and Microsoft Azure?',
      answer:
        'Yes. Our curriculum provides comprehensive multi-cloud coverage, focusing primarily on Amazon Web Services (AWS) while contrasting key services with Microsoft Azure, giving you a competitive edge in enterprise hiring.',
    },
    {
      id: 'faq-4',
      question: 'How is this Cloud Computing course different from the AWS-specific course?',
      answer:
        'While our AWS course focuses deeply on the AWS ecosystem, this Cloud Computing program is an overarching multi-cloud and infrastructure architecture track covering virtualization, Linux, AWS, Azure, Terraform (IaC), Docker, Kubernetes, and FinOps.',
    },
    {
      id: 'faq-5',
      question: 'Will I learn Infrastructure as Code (IaC) with Terraform?',
      answer:
        'Yes. Terraform is an essential component of modern cloud engineering. You will learn HCL syntax, provider configuration, remote state management with S3 and DynamoDB, and building modular infrastructure.',
    },
    {
      id: 'faq-6',
      question: 'Are containers and Kubernetes included in the training?',
      answer:
        'Yes. You will learn Docker containerization, container registries (ECR/ACR), and deploying containerized workloads onto managed cloud Kubernetes clusters (Amazon EKS and Azure AKS).',
    },
    {
      id: 'faq-7',
      question: 'What hands-on projects will I build during the program?',
      answer:
        'You will build six real-world projects: a multi-tier high-availability web architecture, automated cloud provisioning with Terraform, enterprise hybrid cloud networking, microservices on Kubernetes, multi-region disaster recovery with DNS failover, and a cloud security auditing and FinOps optimization system.',
    },
    {
      id: 'faq-8',
      question: 'Does this course prepare me for official AWS or Azure certifications?',
      answer:
        'Yes. The curriculum aligns directly with the core knowledge domains of the AWS Certified Solutions Architect – Associate (SAA-C03) and Microsoft Certified: Azure Administrator (AZ-104) exams.',
    },
    {
      id: 'faq-9',
      question: 'What are the batch timings and training modes available in Coimbatore?',
      answer:
        'We offer both weekday and weekend batches at our Saravanampatti and Gandhipuram centers in Coimbatore, as well as live instructor-led online sessions with full lab support.',
    },
    {
      id: 'faq-10',
      question: 'What salary packages can a Cloud Engineer expect in India?',
      answer:
        'In India, entry-level cloud engineers typically command packages ranging from 4.5 LPA to 8.5 LPA, with experienced cloud architects and DevOps professionals earning upwards of 12 to 25+ LPA.',
    },
    {
      id: 'faq-11',
      question: 'Does CloudSwan provide placement support for Cloud Computing learners?',
      answer:
        'Yes. We offer 100% placement support including architecture portfolio building, resume reviews, technical mock interviews, and recruitment drives with hiring partner companies across Coimbatore, Chennai, and Bangalore.',
    },
    {
      id: 'faq-12',
      question: 'How can I enroll or schedule a free demo session?',
      answer:
        'Click the "Book a Free Counselling Session" button, call us directly at +91 98765 43210, or walk into our Saravanampatti or Gandhipuram offices in Coimbatore.',
    },
  ],

  finalCta: {
    title: 'Lead the Future of Cloud Infrastructure',
    subtitle: 'Master Enterprise Multi-Cloud Architecture with CloudSwan',
    checkpoints: [
      'Master AWS and Microsoft Azure core cloud services.',
      'Administer Linux servers and write automated shell scripts.',
      'Design software-defined networks with VPC, subnets & gateways.',
      'Enforce zero-trust security with IAM and Microsoft Entra ID.',
      'Automate infrastructure with Terraform & orchestrate with Kubernetes.',
      'Build 6 real-world capstone projects with full placement assistance.',
    ],
    primaryCta: 'Book a Free Counselling Session',
    secondaryCta: 'Explore Course Curriculum',
  },
}
