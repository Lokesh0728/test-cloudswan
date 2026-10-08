import type { CourseData } from '../../types/course'

export const aiCourseData: CourseData = {
  id: 'artificial-intelligence',
  slug: '/courses/artificial-intelligence',
  title: 'Artificial Intelligence Course in Coimbatore',
  shortTitle: 'Artificial Intelligence',
  eyebrowBadge: 'Practical AI & Machine Learning Track',
  tagline: 'Practical AI & Machine Learning Training for Career-Focused Learners',
  heroDescription: [
    'Build practical skills in Artificial Intelligence and Machine Learning with CloudSwan Solution.',
    'Learn Python, machine learning algorithms, deep learning, NLP, computer vision, model deployment and AI tools through practical training and real-world projects.',
    'Whether you are a student, graduate, working professional or career switcher, this program is designed to help you understand AI concepts and apply them to real problems.',
  ],
  primaryCtaText: 'Book a Free Counselling Session',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'Artificial Intelligence & Machine Learning',
    duration: '3–4 Months',
    mode: 'Classroom & Online',
    level: 'Beginner to Advanced',
    coreSkills: 'Python, NumPy, Pandas, Scikit-learn, Statistics',
    advancedTopics: 'Deep Learning, NLP, Computer Vision, Model Deployment',
    projects: '5 Practical AI & ML Real-World Projects',
    certification: 'Course Completion Certificate',
    careerSupport: 'Resume & Interview Preparation + Career Guidance',
    mentorSupport: 'Available (Expert Mentors & Trainers)',
  },

  whyLearn: {
    title: 'Why Learn Artificial Intelligence & Machine Learning?',
    intro:
      'Artificial Intelligence is being applied across software, finance, healthcare, manufacturing, cybersecurity, marketing and many other industries.',
    description:
      'Learning AI is not only about understanding algorithms. A practical AI learner should know how to work with real datasets, prepare data, build models, evaluate performance, and deploy applications.',
    competenciesTitle: 'A practical AI learner should know how to:',
    competencies: [
      'Work with real datasets',
      'Prepare and analyse data',
      'Build machine learning models',
      'Evaluate model performance',
      'Develop deep learning applications',
      'Work with text and image data',
      'Use modern AI tools',
      'Deploy machine learning models',
      'Build portfolio projects',
      'Understand complete AI workflows',
    ],
    summaryNote:
      "CloudSwan's AI and ML program combines these areas into a structured learning path.",
  },

  learningPath: {
    title: 'AI & ML Course Learning Path',
    subtitle: 'From Fundamentals to Practical AI Application',
    description:
      'CloudSwan Solution provides AI and Machine Learning training for learners looking for classroom-based and online learning options in Coimbatore. The program provides a structured path from Python and data fundamentals to machine learning, deep learning and practical AI projects:',
    steps: [
      'Python Fundamentals',
      'Mathematics & Statistics',
      'Data Handling',
      'Exploratory Data Analysis',
      'Machine Learning Models',
      'Model Evaluation',
      'Deep Learning & CNN/RNN',
      'Natural Language Processing',
      'Computer Vision',
      'AI Tools & APIs',
      'Model Deployment',
      'Portfolio Projects',
    ],
    outcomeNote:
      'This gives learners a clear path from fundamentals to practical AI application.',
  },

  curriculum: {
    title: 'Course Curriculum & Syllabus',
    subtitle: 'What You Will Learn',
    description:
      'A comprehensive 8-module curriculum designed to take you from core programming and mathematics to advanced deep neural networks and production model deployment.',
    modules: [
      {
        number: 1,
        title: 'Python for AI & Machine Learning',
        subtitle: 'Core programming foundations for data processing',
        description:
          'Learn the Python fundamentals required for data processing and machine learning workflows.',
        topics: [
          'Python fundamentals',
          'Functions and modules',
          'NumPy',
          'Pandas',
          'Data handling',
          'Matplotlib',
          'Basic programming concepts',
        ],
      },
      {
        number: 2,
        title: 'Mathematics & Statistics for Machine Learning',
        subtitle: 'Understand the mathematical concepts behind AI algorithms',
        description:
          'Understand the mathematical and statistical foundations used to build and evaluate machine learning models.',
        topics: [
          'Probability',
          'Statistics',
          'Linear algebra fundamentals',
          'Mean, median and variance',
          'Correlation',
          'Data interpretation',
        ],
      },
      {
        number: 3,
        title: 'Data Preparation & Exploratory Data Analysis',
        subtitle: 'Preparing clean datasets before training predictive models',
        description:
          'Master essential data wrangling techniques to clean, transform, and analyze datasets prior to modeling.',
        topics: [
          'Data cleaning',
          'Missing values',
          'Data transformation',
          'Feature selection',
          'Data visualization',
          'Exploratory Data Analysis',
        ],
      },
      {
        number: 4,
        title: 'Machine Learning',
        subtitle: 'Core machine learning algorithms for prediction and classification',
        description:
          'Understand the core machine learning techniques used to solve real-world prediction and classification problems.',
        topics: [
          'Supervised learning',
          'Unsupervised learning',
          'Regression',
          'Classification',
          'Clustering',
          'Decision trees',
          'Random forests',
          'Model evaluation',
        ],
      },
      {
        number: 5,
        title: 'Deep Learning & Neural Networks',
        subtitle: 'Neural network architectures and deep representation learning',
        description:
          'Learn the fundamentals of neural networks and deep learning models.',
        topics: [
          'Neural networks',
          'Perceptrons',
          'Activation functions',
          'Backpropagation',
          'Convolutional Neural Networks (CNN)',
          'Recurrent Neural Networks (RNN)',
          'Model training',
        ],
      },
      {
        number: 6,
        title: 'Natural Language Processing',
        subtitle: 'How AI systems process, analyze, and generate human language',
        description:
          'Learn how AI systems work with text, analyze sentiment, and power language-based applications.',
        topics: [
          'Text preprocessing',
          'Tokenization',
          'Sentiment analysis',
          'Text classification',
          'NLP workflows',
          'Language-based AI applications',
        ],
      },
      {
        number: 7,
        title: 'Computer Vision',
        subtitle: 'Processing and interpreting digital images with AI',
        description:
          'Understand how AI systems process, interpret, and detect objects in image datasets.',
        topics: [
          'Image preprocessing',
          'Image classification',
          'Object detection',
          'OpenCV fundamentals',
          'Computer vision projects',
        ],
      },
      {
        number: 8,
        title: 'AI Tools & Model Deployment',
        subtitle: 'Serving AI models in practical production environments',
        description:
          'Go beyond model building and understand how AI applications can be deployed and monitored in live environments.',
        topics: [
          'Model deployment',
          'APIs',
          'AI development tools',
          'Model evaluation',
          'Basic MLOps concepts',
          'AI application integration',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical AI & ML Projects',
    subtitle: 'Learn by Applying AI to Real-World Problems',
    description:
      'Learning becomes more useful when you apply it to real problems. Work through the complete engineering process: Data → Cleaning → Analysis → Model → Evaluation → Deployment.',
    items: [
      {
        number: 1,
        title: 'Predictive Analytics',
        description:
          'Build a machine learning model that uses historical data to make accurate predictions for real-world scenarios.',
        focusArea: 'Machine Learning & Regression',
        toolsUsed: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      },
      {
        number: 2,
        title: 'Recommendation System',
        description:
          'Create a recommendation model that suggests relevant products, content, or services based on user behavior and preferences.',
        focusArea: 'Unsupervised Learning & Filtering',
        toolsUsed: ['Python', 'Pandas', 'Scikit-learn', 'Collaborative Filtering'],
      },
      {
        number: 3,
        title: 'Sentiment Analysis',
        description:
          'Build a natural language processing application that classifies and identifies sentiment from user text reviews.',
        focusArea: 'NLP & Text Classification',
        toolsUsed: ['Python', 'NLTK', 'Spacy', 'Tokenization'],
      },
      {
        number: 4,
        title: 'Image Classification',
        description:
          'Train a deep learning convolutional neural network model to classify images into different visual categories.',
        focusArea: 'Computer Vision & Deep Learning',
        toolsUsed: ['TensorFlow', 'Keras', 'OpenCV', 'CNN'],
      },
      {
        number: 5,
        title: 'End-to-End Machine Learning Project',
        description:
          'Work through the complete workflow: Data → Cleaning → Analysis → Model → Evaluation → Deployment into a working API.',
        focusArea: 'Full ML Pipeline & Deployment',
        toolsUsed: ['Python', 'FastAPI', 'Scikit-learn', 'Docker', 'Streamlit'],
      },
    ],
  },

  portfolio: {
    title: 'Build Your AI & Machine Learning Portfolio',
    subtitle: 'Demonstrate Practical Skills to Potential Employers',
    description:
      'A strong portfolio can demonstrate your ability to apply AI and data skills to practical problems across industries.',
    deliverables: [
      'Exploratory data analysis notebooks on complex real-world datasets',
      'Trained supervised and unsupervised machine learning models',
      'Computer vision image classification project with OpenCV & CNN',
      'Natural language processing text sentiment analysis tool',
      'End-to-end deployed machine learning model with REST API endpoints',
      'Production-ready code repositories with documentation on GitHub',
    ],
    ctaText: 'Build Your AI Portfolio',
  },

  targetAudiences: {
    title: 'Who Can Join This AI Course?',
    subtitle: 'Tailored for Learners at Every Career Stage',
    audiences: [
      {
        id: 'students',
        title: 'Students',
        description:
          'Students studying Computer Science, IT, Engineering, Data Science or related subjects who want to explore AI careers.',
      },
      {
        id: 'graduates',
        title: 'Graduates',
        description:
          'Graduates who want to develop practical technology skills and enter AI or data-related industry roles.',
      },
      {
        id: 'working-professionals',
        title: 'Working Professionals',
        description:
          'IT professionals who want to add modern Artificial Intelligence and Machine Learning capabilities to their existing profile.',
      },
      {
        id: 'career-switchers',
        title: 'Career Switchers',
        description:
          'Professionals from other backgrounds who want to move towards AI, data or technology roles. Beginners build a solid foundation progressively.',
      },
    ],
  },

  careerOpportunities: {
    title: 'AI & Machine Learning Career Opportunities',
    subtitle: 'Explore High-Demand Technology Careers',
    description:
      'After developing the required skills and practical experience, learners can explore roles across modern tech and enterprise organizations.',
    roles: [
      'AI Engineer',
      'Machine Learning Engineer',
      'Data Scientist',
      'Machine Learning Developer',
      'Deep Learning Engineer',
      'NLP Engineer',
      'Computer Vision Engineer',
      'AI Application Developer',
      'AI Automation Specialist',
      'Data Analyst',
    ],
    disclaimer:
      "Career opportunities depend on an individual's skills, experience, projects, qualifications and employer requirements.",
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'Commonly Used AI & ML Technologies',
    description:
      'The training includes practical exposure to commonly used AI and ML industry technologies. The exact stack is aligned with modern tech demands.',
    categories: [
      {
        category: 'Programming & Libraries',
        description: 'Core languages and scientific computing libraries',
        tools: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'OpenCV'],
      },
      {
        category: 'Deep Learning & Neural Networks',
        description: 'Frameworks for training neural networks',
        tools: ['TensorFlow', 'Keras', 'PyTorch'],
      },
      {
        category: 'Development & Experimentation',
        description: 'Interactive notebook environments',
        tools: ['Jupyter Notebook', 'Google Colab'],
      },
      {
        category: 'Deployment & APIs',
        description: 'Serving machine learning models in production',
        tools: ['FastAPI', 'REST APIs', 'Streamlit', 'Basic MLOps'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan Solution?',
    subtitle: 'Practical Excellence in AI Education',
    pillars: [
      {
        title: 'Practical Learning',
        description:
          'Focus on applying concepts through assignments, exercises and hands-on projects rather than pure theory.',
      },
      {
        title: 'Industry-Oriented Curriculum',
        description:
          'The curriculum covers foundational AI concepts along with modern machine learning and deep learning applications.',
      },
      {
        title: 'Real-World Projects',
        description:
          'Build projects that help you demonstrate your practical understanding and showcase real results to recruiters.',
      },
      {
        title: 'Expert Guidance',
        description:
          'Learn with continuous guidance from experienced trainers and mentors throughout the entire program.',
      },
      {
        title: 'Flexible Learning',
        description:
          'Choose the learning format and batch schedule (classroom or online) that best suits your requirements.',
      },
      {
        title: 'Career Support',
        description:
          'Get comprehensive support with resume preparation, technical interview preparation and career guidance.',
      },
    ],
  },

  certification: {
    title: 'Artificial Intelligence Certification',
    subtitle: 'Course Completion & Industry Validation',
    description:
      'After completing the required training and assessments, learners can receive a course completion certificate from CloudSwan Solution. The certification can be added to your professional profile and resume as evidence of completing the training program.',
    highlights: [
      'Python for Data Processing & AI',
      'Mathematical & Statistical Modeling',
      'Data Preparation & Exploratory Analysis',
      'Supervised & Unsupervised Machine Learning',
      'Deep Learning & Neural Networks',
      'Natural Language Processing Workflows',
      'Computer Vision with OpenCV',
      'Model Deployment & API Integration',
    ],
    regionalFocus: {
      title: 'AI Training Institute in Coimbatore',
      description:
        "CloudSwan Solution provides AI and Machine Learning training for learners looking for classroom-based and online learning options. Our Coimbatore training presence allows students and working professionals to access career-oriented technology training while also offering online learning flexibility. For learners specifically looking for an AI training institute in Coimbatore, the program provides a structured path from Python and data fundamentals to machine learning, deep learning and practical AI projects.",
      keyAreas: [
        'Dual Coimbatore Campuses (Gandhipuram & Saravanampatti)',
        'Classroom & Live Virtual Flexibility',
        'Direct Mentor Guidance & Lab Access',
        'Industry Capstone Evaluation',
      ],
    },
    ethicalHackingNote: {
      title: 'Machine Learning Training in Tamil Nadu',
      subtitle: 'Complete Machine Learning Workflow',
      description:
        "Machine Learning skills are useful across multiple technology and business applications. Learners from across Tamil Nadu can join CloudSwan's training program through available classroom and online learning options. The curriculum focuses on understanding the complete machine learning workflow rather than learning isolated tools: Data → Preparation → Analysis → Model Building → Evaluation → Deployment. This approach helps learners understand how machine learning projects are developed in practical situations.",
      keyFocusAreas: [
        'Data Preparation',
        'Exploratory Analysis',
        'Model Building',
        'Evaluation Metrics',
        'Deployment Workflows',
      ],
      complianceWarning:
        'Certification should be supported by practical skills and projects when applying for AI-related opportunities.',
    },
  },

  roadmap: {
    title: 'AI & ML Career Roadmap',
    subtitle: 'From Fundamentals to Deployed Intelligent Systems',
    steps: [
      {
        step: 1,
        title: 'Learn Python for AI',
        description:
          'Master Python programming, functions, NumPy, Pandas, data handling, and Matplotlib.',
      },
      {
        step: 2,
        title: 'Mathematics & Statistics for ML',
        description:
          'Understand probability, linear algebra, statistics, correlation, and data interpretation.',
      },
      {
        step: 3,
        title: 'Data Preparation & EDA',
        description:
          'Perform data cleaning, handle missing values, transform data, and explore feature selection.',
      },
      {
        step: 4,
        title: 'Core Machine Learning',
        description:
          'Master supervised and unsupervised learning, regression, classification, clustering, and decision trees.',
      },
      {
        step: 5,
        title: 'Deep Learning & Neural Networks',
        description:
          'Study neural network architectures, perceptrons, activation functions, backpropagation, and CNNs.',
      },
      {
        step: 6,
        title: 'NLP & Computer Vision',
        description:
          'Build language applications with tokenization and sentiment analysis; process images with OpenCV.',
      },
      {
        step: 7,
        title: 'Model Deployment & APIs',
        description:
          'Deploy models as REST APIs, integrate AI applications, and understand basic MLOps concepts.',
      },
      {
        step: 8,
        title: 'Portfolio & Interview Preparation',
        description:
          'Assemble end-to-end capstone projects, polish your resume, and prepare for AI job interviews.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-ai-1',
      question: 'What is an Artificial Intelligence course?',
      answer:
        'An Artificial Intelligence course teaches learners how AI systems use data, algorithms and models to perform tasks such as prediction, classification, language processing and image recognition.',
    },
    {
      id: 'faq-ai-2',
      question: 'Is AI difficult for beginners?',
      answer:
        'AI can involve programming, mathematics and statistics, but beginners can learn progressively by starting with Python and data fundamentals before moving into machine learning and deep learning.',
    },
    {
      id: 'faq-ai-3',
      question: 'Who should learn Artificial Intelligence?',
      answer:
        'Students, graduates, developers, data professionals and working professionals interested in AI and data-driven technology can consider learning AI.',
    },
    {
      id: 'faq-ai-4',
      question: 'Does the course include Machine Learning?',
      answer:
        'Yes. Machine Learning is a major part of the program and covers concepts such as supervised learning, unsupervised learning, regression, classification, clustering and model evaluation.',
    },
    {
      id: 'faq-ai-5',
      question: 'Will I learn Python?',
      answer:
        'Yes. Python fundamentals and commonly used Python libraries for AI and data processing are included in the learning path.',
    },
    {
      id: 'faq-ai-6',
      question: 'Does the training include projects?',
      answer:
        'Yes. The program includes practical exercises and AI/ML projects covering areas such as prediction, NLP, recommendation systems and computer vision.',
    },
    {
      id: 'faq-ai-7',
      question: 'Can a non-IT professional learn AI?',
      answer:
        'Yes, but the learning curve may vary depending on programming and mathematical background. A structured foundation in Python, data and statistics can make the transition easier.',
    },
    {
      id: 'faq-ai-8',
      question: 'What career roles can I pursue after AI & ML training?',
      answer:
        'Depending on your skills and experience, you can explore roles such as AI Engineer, Machine Learning Engineer, Data Scientist, Deep Learning Engineer, NLP Engineer and Computer Vision Engineer.',
    },
    {
      id: 'faq-ai-9',
      question: 'Is the training available in Coimbatore?',
      answer:
        'Yes. CloudSwan offers AI & ML training options for learners in Coimbatore, along with online learning options.',
    },
    {
      id: 'faq-ai-10',
      question: 'Does CloudSwan provide career support?',
      answer:
        'CloudSwan provides career support including resume preparation, interview preparation and placement guidance as part of its training offering.',
    },
    {
      id: 'faq-ai-11',
      question: 'What is the duration of the AI & ML course?',
      answer:
        'The current CloudSwan program is positioned as a 3–4 month training program. Confirm the current batch duration and schedule with the admissions team before enrollment.',
    },
  ],

  finalCta: {
    title: 'Start Your AI & Machine Learning Journey',
    subtitle:
      'AI is becoming part of many technology and business functions. Building practical skills can help you understand how intelligent systems are designed, trained and applied.',
    checkpoints: [
      'Build practical skills with Python, Scikit-learn, TensorFlow & PyTorch',
      'Complete 5 real-world practical AI and ML projects',
      'Master the complete machine learning workflow from data to deployment',
      'Create an industry-ready portfolio for tech interviews',
      'Receive resume, portfolio and placement guidance',
    ],
    primaryCta: 'Book a Free Counselling Session',
    secondaryCta: 'Explore Course Curriculum',
  },
}
