import type { CourseData } from '../../types/course'

export interface CourseHeroImageConfig {
  imageUrl: string
  fallbackUrl?: string
  alt: string
  badgeText: string
  accentGradient: string
  techPills: string[]
  stats?: {
    rating: string
    reviews: string
    labHours: string
  }
}

/**
 * Curated registry of ultra-premium, high-resolution hero images tailored for
 * every IT Training course submenu at CloudSwan.
 *
 * Each image is hand-picked to visually represent the exact technical domain
 * (AI neural intelligence, DevOps infrastructure, Cyber SOC, Full Stack IDEs,
 * Cloud architectures, Marketing Analytics, etc.) rather than a generic mockup.
 */
export const COURSE_HERO_IMAGES: Record<string, CourseHeroImageConfig> = {
  // 1. Artificial Intelligence
  ai: {
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    alt: 'Artificial Intelligence neural network intelligence visualization and deep learning models',
    badgeText: 'Live AI Sandbox Labs',
    accentGradient: 'from-purple-500/20 via-indigo-500/15 to-accent-500/20',
    techPills: ['PyTorch', 'TensorFlow', 'LLMs', 'Computer Vision', 'LangChain'],
    stats: {
      rating: '4.9/5',
      reviews: '650+ Alumni',
      labHours: '50+ Lab Hrs',
    },
  },

  // 2. Machine Learning
  ml: {
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Machine learning algorithmic workflows, predictive models and neural graphs',
    badgeText: 'Production MLOps Track',
    accentGradient: 'from-blue-500/20 via-indigo-500/15 to-emerald-500/20',
    techPills: ['Scikit-Learn', 'MLOps', 'Pandas', 'AWS SageMaker', 'NumPy'],
    stats: {
      rating: '4.9/5',
      reviews: '580+ Alumni',
      labHours: '45+ Lab Hrs',
    },
  },

  // 3. Data Science & Analytics
  'data-science': {
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Data science interactive analytics dashboard, statistical charts and business telemetry',
    badgeText: 'Live Business Datasets',
    accentGradient: 'from-emerald-500/20 via-teal-500/15 to-blue-500/20',
    techPills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Exploratory EDA'],
    stats: {
      rating: '4.9/5',
      reviews: '720+ Alumni',
      labHours: '60+ Lab Hrs',
    },
  },

  // 4. DevOps & Cloud Engineering
  devops: {
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
    alt: 'DevOps cloud infrastructure, Kubernetes container clusters and CI/CD pipelines',
    badgeText: 'Automated CI/CD Sandbox',
    accentGradient: 'from-sky-500/20 via-blue-500/15 to-indigo-500/20',
    techPills: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'AWS CI/CD'],
    stats: {
      rating: '4.9/5',
      reviews: '610+ Alumni',
      labHours: '50+ Lab Hrs',
    },
  },

  // 5. Digital Marketing & Growth
  'digital-marketing': {
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Digital marketing growth campaigns, Google Ads analytics and social media ROI dashboards',
    badgeText: 'Live Ad Spend Campaigns',
    accentGradient: 'from-orange-500/20 via-accent-500/20 to-pink-500/20',
    techPills: ['Google Ads', 'Meta Ads', 'GA4 Analytics', 'SEO / SEM', 'HubSpot'],
    stats: {
      rating: '4.8/5',
      reviews: '890+ Alumni',
      labHours: '40+ Live Campaigns',
    },
  },

  // 6. Cybersecurity & Ethical Hacking
  cybersecurity: {
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cybersecurity operations center, digital encryption lock and defensive network shield',
    badgeText: 'Authorized Cyber Range',
    accentGradient: 'from-red-500/20 via-rose-500/15 to-indigo-500/20',
    techPills: ['Kali Linux', 'Wireshark', 'Burp Suite', 'Metasploit', 'SOC SIEM'],
    stats: {
      rating: '4.9/5',
      reviews: '540+ Alumni',
      labHours: '55+ Security Labs',
    },
  },

  // 7. AWS Cloud Training
  aws: {
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    alt: 'AWS global cloud infrastructure, serverless compute nodes and networking topology',
    badgeText: 'AWS Free-Tier Cloud Labs',
    accentGradient: 'from-amber-500/20 via-orange-500/20 to-blue-500/20',
    techPills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'VPC Networks', 'CloudFormation'],
    stats: {
      rating: '4.9/5',
      reviews: '780+ Alumni',
      labHours: '45+ Cloud Labs',
    },
  },

  // 8. Full Stack Web Development
  'full-stack': {
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    alt: 'Full stack developer workstation displaying modern React, Node.js and database architecture',
    badgeText: 'Full SaaS Production Apps',
    accentGradient: 'from-blue-500/20 via-cyan-500/15 to-accent-500/20',
    techPills: ['React 19', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    stats: {
      rating: '4.9/5',
      reviews: '920+ Alumni',
      labHours: '70+ Coding Hrs',
    },
  },

  // 9. Python Development
  python: {
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Python development environment with clean backend API code, automation and algorithms',
    badgeText: 'Backend & Automation Labs',
    accentGradient: 'from-yellow-500/20 via-amber-500/15 to-blue-500/20',
    techPills: ['FastAPI', 'Django', 'PostgreSQL', 'OOP Python', 'REST APIs'],
    stats: {
      rating: '4.8/5',
      reviews: '840+ Alumni',
      labHours: '50+ Coding Hrs',
    },
  },

  // 10. Snowflake Data Cloud
  snowflake: {
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    alt: 'Snowflake cloud data warehouse, virtual warehouse compute and data streaming infrastructure',
    badgeText: 'Snowflake Cloud Workspaces',
    accentGradient: 'from-cyan-500/20 via-sky-500/15 to-blue-500/20',
    techPills: ['Snowpark', 'Virtual Warehouses', 'Snowpipe', 'Time Travel', 'Data Sharing'],
    stats: {
      rating: '4.9/5',
      reviews: '480+ Alumni',
      labHours: '40+ Lakehouse Labs',
    },
  },

  // 11. SAP Training (ERP / S/4HANA)
  sap: {
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    alt: 'SAP enterprise resource planning, business analytics and supply chain logistics dashboards',
    badgeText: 'Enterprise SAP Blueprints',
    accentGradient: 'from-blue-500/20 via-slate-500/15 to-accent-500/20',
    techPills: ['SAP S/4HANA', 'SAP FICO', 'SAP MM', 'SAP SD', 'Business Blueprints'],
    stats: {
      rating: '4.9/5',
      reviews: '510+ Alumni',
      labHours: '45+ ERP Modules',
    },
  },

  // 12. Salesforce CRM & Development
  salesforce: {
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    alt: 'Salesforce CRM customer relationship management dashboard, Apex logic and Lightning components',
    badgeText: 'Salesforce Developer Org',
    accentGradient: 'from-sky-500/20 via-blue-500/15 to-indigo-500/20',
    techPills: ['Salesforce Admin', 'Apex', 'Lightning (LWC)', 'Flows', 'SOQL'],
    stats: {
      rating: '4.8/5',
      reviews: '490+ Alumni',
      labHours: '45+ CRM Scenarios',
    },
  },

  // 13. Generative AI & Prompt Engineering
  'generative-ai': {
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Generative AI neural diffusion art, prompt engineering models and creative AI tooling',
    badgeText: 'Cutting-Edge GenAI Models',
    accentGradient: 'from-purple-500/20 via-pink-500/15 to-accent-500/20',
    techPills: ['Prompt Engineering', 'LangChain', 'OpenAI APIs', 'Midjourney', 'RAG Agents'],
    stats: {
      rating: '4.9/5',
      reviews: '420+ Alumni',
      labHours: '40+ AI Projects',
    },
  },

  // 14. Data Engineering & Pipelines
  'data-engineering': {
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Data engineering high throughput pipelines, cloud ETL architectures and streaming storage',
    badgeText: 'Real-Time Pipeline Labs',
    accentGradient: 'from-teal-500/20 via-cyan-500/15 to-blue-500/20',
    techPills: ['Apache Spark', 'Airflow', 'SQL', 'Kafka', 'ETL / ELT Pipelines'],
    stats: {
      rating: '4.9/5',
      reviews: '510+ Alumni',
      labHours: '50+ Pipeline Labs',
    },
  },

  // 15. Power BI & Business Analytics
  'power-bi': {
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Power BI executive dashboards, DAX queries and interactive business intelligence visualizations',
    badgeText: 'Interactive Power BI Reports',
    accentGradient: 'from-amber-500/20 via-yellow-500/15 to-orange-500/20',
    techPills: ['Power BI Desktop', 'DAX Formulas', 'Power Query', 'Data Modeling', 'KPI Dashboards'],
    stats: {
      rating: '4.9/5',
      reviews: '620+ Alumni',
      labHours: '40+ BI Reports',
    },
  },

  // 16. Cloud Computing
  'cloud-computing': {
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cloud computing high-speed fiber data switches, multi-cloud virtual networks and enterprise servers',
    badgeText: 'Multi-Cloud Architecture',
    accentGradient: 'from-blue-500/20 via-sky-500/15 to-cyan-500/20',
    techPills: ['Multi-Cloud', 'AWS & Azure', 'Virtual Networks', 'Cloud Security', 'Storage'],
    stats: {
      rating: '4.8/5',
      reviews: '590+ Alumni',
      labHours: '45+ Cloud Labs',
    },
  },
}

/**
 * Fallback default config if an unfamiliar course ID is passed
 */
const DEFAULT_HERO_IMAGE: CourseHeroImageConfig = {
  imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
  alt: 'Interactive IT training classroom and practical workstation at CloudSwan Institute',
  badgeText: '100% Practical Labs',
  accentGradient: 'from-accent-500/20 via-blue-500/15 to-indigo-500/20',
  techPills: ['Hands-on Practice', 'Real-world Projects', '1:1 Mentorship', 'ISO 9001:2015'],
  stats: {
    rating: '4.9/5',
    reviews: '1,800+ Alumni',
    labHours: '50+ Lab Hrs',
  },
}

/**
 * Resolves the optimal hero image and micro-card metadata for any given CourseData.
 * Inspects:
 *   1. course.heroImage (if explicitly provided on the CourseData object)
 *   2. Match by course.id
 *   3. Match by course.slug
 *   4. Fuzzy keyword match against course.title / course.shortTitle
 */
export function getCourseHeroImage(course: CourseData): CourseHeroImageConfig {
  // 1. Explicit override on course object
  if (course.heroImage && course.heroImage.url) {
    return {
      imageUrl: course.heroImage.url,
      alt: course.heroImage.alt || `${course.shortTitle} Training at CloudSwan Institute`,
      badgeText: course.heroImage.badgeText || '100% Practical Labs',
      accentGradient: 'from-accent-500/20 via-blue-500/15 to-indigo-500/20',
      techPills: course.heroImage.techPills || ['Hands-on Labs', 'Industry Projects', '1:1 Mentorship'],
      stats: {
        rating: '4.9/5',
        reviews: '1,200+ Alumni',
        labHours: '50+ Lab Hrs',
      },
    }
  }

  // 2. Direct ID lookup
  const idNormalized = course.id.toLowerCase().trim()
  if (COURSE_HERO_IMAGES[idNormalized]) {
    return COURSE_HERO_IMAGES[idNormalized]
  }

  // 3. Slug lookup
  const slugClean = course.slug
    .toLowerCase()
    .replace(/^\/+/, '')
    .replace(/^courses\//, '')
    .replace(/\/+$/, '')
  if (COURSE_HERO_IMAGES[slugClean]) {
    return COURSE_HERO_IMAGES[slugClean]
  }

  // 4. Keyword matching based on title or slug
  const textToScan = `${course.id} ${course.slug} ${course.title} ${course.shortTitle}`.toLowerCase()

  if (textToScan.includes('generative ai') || textToScan.includes('gen ai') || textToScan.includes('prompt')) {
    return COURSE_HERO_IMAGES['generative-ai']
  }
  if (textToScan.includes('artificial intelligence') || textToScan.includes(' ai ')) {
    return COURSE_HERO_IMAGES['ai']
  }
  if (textToScan.includes('machine learning') || textToScan.includes(' ml ')) {
    return COURSE_HERO_IMAGES['ml']
  }
  if (textToScan.includes('data science') || textToScan.includes('datascience')) {
    return COURSE_HERO_IMAGES['data-science']
  }
  if (textToScan.includes('devops') || textToScan.includes('dev-ops')) {
    return COURSE_HERO_IMAGES['devops']
  }
  if (textToScan.includes('marketing') || textToScan.includes('digital-marketing') || textToScan.includes('seo')) {
    return COURSE_HERO_IMAGES['digital-marketing']
  }
  if (textToScan.includes('cyber') || textToScan.includes('security') || textToScan.includes('ethical hack')) {
    return COURSE_HERO_IMAGES['cybersecurity']
  }
  if (textToScan.includes('aws') || textToScan.includes('amazon web')) {
    return COURSE_HERO_IMAGES['aws']
  }
  if (textToScan.includes('full stack') || textToScan.includes('fullstack') || textToScan.includes('mern')) {
    return COURSE_HERO_IMAGES['full-stack']
  }
  if (textToScan.includes('python')) {
    return COURSE_HERO_IMAGES['python']
  }
  if (textToScan.includes('snowflake') || textToScan.includes('snow-flake')) {
    return COURSE_HERO_IMAGES['snowflake']
  }
  if (textToScan.includes('sap') || textToScan.includes('s4hana') || textToScan.includes('fico')) {
    return COURSE_HERO_IMAGES['sap']
  }
  if (textToScan.includes('salesforce') || textToScan.includes('sales force') || textToScan.includes('crm')) {
    return COURSE_HERO_IMAGES['salesforce']
  }
  if (textToScan.includes('power bi') || textToScan.includes('powerbi')) {
    return COURSE_HERO_IMAGES['power-bi']
  }
  if (textToScan.includes('data engineering') || textToScan.includes('data engineer') || textToScan.includes('etl')) {
    return COURSE_HERO_IMAGES['data-engineering']
  }
  if (textToScan.includes('cloud')) {
    return COURSE_HERO_IMAGES['cloud-computing']
  }

  return DEFAULT_HERO_IMAGE
}
