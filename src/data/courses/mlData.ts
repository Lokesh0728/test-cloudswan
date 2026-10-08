import type { CourseData } from '../../types/course'

export const mlCourseData: CourseData = {
  id: 'machine-learning',
  slug: '/courses/machine-learning',
  title: 'Machine Learning Course in Coimbatore',
  shortTitle: 'Machine Learning',
  eyebrowBadge: 'Predictive Modeling & ML Engineering',
  tagline: 'Practical Machine Learning & Deep Learning Training for Career-Focused Learners',
  heroDescription: [
    'Build strong practical skills in Machine Learning, Statistical Analysis, Predictive Modeling, Deep Learning and Model Deployment with CloudSwan Solution.',
    "CloudSwan's Machine Learning program is designed for students, fresh graduates, IT professionals and career switchers who want to master algorithms and predictive workflows.",
    'The curriculum focuses on understanding the complete machine learning workflow rather than learning isolated tools: Data → Preparation → Analysis → Model Building → Evaluation → Deployment.',
  ],
  primaryCtaText: 'Book a Free Counselling Session',
  secondaryCtaText: 'Explore Course Curriculum',

  quickSpecs: {
    courseName: 'Machine Learning & Predictive Modeling',
    duration: '3–4 Months',
    mode: 'Classroom & Online',
    level: 'Beginner to Advanced',
    coreSkills: 'Python, NumPy, Pandas, Scikit-learn, Statistics',
    advancedTopics: 'Deep Learning, Neural Networks, Model Evaluation & MLOps',
    projects: 'Practical End-to-End Machine Learning Projects',
    certification: 'Course Completion Certificate',
    careerSupport: 'Resume & Interview Preparation + Placement Guidance',
    mentorSupport: 'Available (Expert Mentors & Trainers)',
  },

  whyLearn: {
    title: 'Why Learn Machine Learning?',
    intro:
      'Machine Learning skills are useful across multiple technology and business applications including fintech, healthcare, manufacturing, e-commerce, and enterprise automation.',
    description:
      'Learning Machine Learning is not only about understanding algorithms. A practical ML learner should understand the entire machine learning lifecycle from raw datasets to production deployment.',
    competenciesTitle: 'A practical Machine Learning learner should know how to:',
    competencies: [
      'Work with real-world datasets across varied domains',
      'Prepare, clean, and transform data for modeling',
      'Perform exploratory data analysis and feature engineering',
      'Build supervised learning regression and classification models',
      'Apply unsupervised learning and clustering algorithms',
      'Evaluate model performance using precision, recall, ROC, and RMSE',
      'Develop deep learning and neural network architectures',
      'Work with structured, text, and image data',
      'Deploy machine learning models via REST APIs',
      'Build reproducible end-to-end data pipelines and portfolios',
    ],
    summaryNote:
      "CloudSwan's Machine Learning program combines these areas into a structured learning path.",
  },

  learningPath: {
    title: 'Machine Learning Training in Tamil Nadu',
    subtitle: 'A Structured Journey from Data Foundations to Deployed ML Models',
    description:
      "Learners from across Tamil Nadu can join CloudSwan's training program through available classroom and online learning options. The curriculum focuses on understanding the complete machine learning workflow: Data → Preparation → Analysis → Model Building → Evaluation → Deployment:",
    steps: [
      'Python Fundamentals',
      'Statistics & Math',
      'Data Handling',
      'Exploratory Data Analysis',
      'Supervised Learning',
      'Unsupervised Learning',
      'Model Evaluation',
      'Ensemble Methods',
      'Deep Learning & CNN',
      'NLP & Text Models',
      'Model Deployment',
      'Portfolio Projects',
    ],
    outcomeNote:
      'This gives learners a clear path from fundamentals to practical Machine Learning application.',
  },

  curriculum: {
    title: 'Machine Learning Curriculum & Syllabus',
    subtitle: 'What You Will Learn',
    description:
      'A hands-on curriculum that builds your foundation in Python and applied mathematics before diving deep into predictive modeling, neural networks, and model deployment.',
    modules: [
      {
        number: 1,
        title: 'Python for Machine Learning',
        subtitle: 'Learn the Python fundamentals required for data processing and ML',
        description:
          'Master Python programming essentials, functions, modules, and core scientific computing libraries.',
        topics: [
          'Python fundamentals',
          'Functions and modules',
          'NumPy for numerical computation',
          'Pandas for dataframes',
          'Data handling and transformation',
          'Matplotlib for visualization',
          'Basic programming concepts',
        ],
      },
      {
        number: 2,
        title: 'Mathematics & Statistics for Machine Learning',
        subtitle: 'Understand mathematical concepts used to build and evaluate models',
        description:
          'Gain deep intuition into probability, linear algebra, and statistical hypothesis testing needed for ML.',
        topics: [
          'Probability theory',
          'Descriptive and inferential statistics',
          'Linear algebra fundamentals (matrices and vectors)',
          'Mean, median and variance',
          'Correlation and covariance',
          'Data interpretation and distributions',
        ],
      },
      {
        number: 3,
        title: 'Data Preparation & Exploratory Data Analysis',
        subtitle: 'Learn how to prepare datasets before building models',
        description:
          'Learn to clean real-world noisy data, impute missing values, scale features, and uncover data patterns.',
        topics: [
          'Data cleaning techniques',
          'Handling missing values',
          'Data transformation and encoding',
          'Feature selection and dimensionality',
          'Data visualization techniques',
          'Exploratory Data Analysis (EDA)',
        ],
      },
      {
        number: 4,
        title: 'Supervised Machine Learning',
        subtitle: 'Core predictive algorithms for continuous and discrete outcomes',
        description:
          'Understand regression and classification techniques used to solve prediction problems.',
        topics: [
          'Supervised learning foundations',
          'Linear and polynomial regression',
          'Logistic regression for classification',
          'Decision trees and rule sets',
          'Random forests and bagging',
          'Model evaluation metrics (Accuracy, ROC-AUC, F1-Score)',
        ],
      },
      {
        number: 5,
        title: 'Unsupervised Machine Learning & Clustering',
        subtitle: 'Discovering hidden patterns and structure without labels',
        description:
          'Master clustering algorithms and unsupervised dimensionality reduction techniques.',
        topics: [
          'Unsupervised learning concepts',
          'K-Means clustering',
          'Hierarchical clustering',
          'Principal Component Analysis (PCA)',
          'Anomaly and outlier detection',
          'Evaluating clustering quality',
        ],
      },
      {
        number: 6,
        title: 'Deep Learning & Neural Networks',
        subtitle: 'Learn the fundamentals of neural networks and deep representations',
        description:
          'Understand how multi-layer neural networks learn representations from high-dimensional data.',
        topics: [
          'Neural networks architecture',
          'Perceptrons and multi-layer perceptrons',
          'Activation functions (ReLU, Sigmoid, Tanh)',
          'Backpropagation and gradient descent',
          'Convolutional Neural Networks (CNN)',
          'Recurrent Neural Networks (RNN)',
          'Model training and optimization',
        ],
      },
      {
        number: 7,
        title: 'Natural Language Processing & Computer Vision',
        subtitle: 'Applying machine learning to human language and imagery',
        description:
          'Build practical pipelines that process textual documents and image inputs.',
        topics: [
          'Text preprocessing and tokenization',
          'Sentiment analysis pipelines',
          'Text classification workflows',
          'Image preprocessing with OpenCV',
          'Image classification models',
          'Object detection fundamentals',
        ],
      },
      {
        number: 8,
        title: 'AI Tools & Model Deployment',
        subtitle: 'Go beyond model building and deploy ML applications',
        description:
          'Learn how to package, test, deploy, and monitor machine learning models in live practical environments.',
        topics: [
          'Model deployment workflows',
          'Creating REST APIs with FastAPI',
          'AI and ML development tools',
          'Model evaluation in production',
          'Basic MLOps concepts and pipeline monitoring',
          'AI application integration',
        ],
      },
    ],
  },

  projects: {
    title: 'Practical Machine Learning Projects',
    subtitle: 'Work on Real-World Datasets and Complete ML Lifecycles',
    description:
      'Learning becomes more useful when you apply it to real problems. Work through the complete process: Data → Cleaning → Analysis → Model → Evaluation → Deployment.',
    items: [
      {
        number: 1,
        title: 'Predictive Analytics Model',
        description:
          'Build a machine learning regression model that uses historical financial and operational data to make forecasts.',
        focusArea: 'Supervised Learning & Regression',
        toolsUsed: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      },
      {
        number: 2,
        title: 'Recommendation System',
        description:
          'Create a collaborative and content-based recommendation model that suggests relevant products and content.',
        focusArea: 'Filtering & Unsupervised Learning',
        toolsUsed: ['Python', 'Scikit-learn', 'Pandas', 'Cosine Similarity'],
      },
      {
        number: 3,
        title: 'Sentiment Analysis Application',
        description:
          'Build an NLP text classification application that extracts customer sentiment and emotion from feedback datasets.',
        focusArea: 'NLP & Text Classification',
        toolsUsed: ['Python', 'NLTK', 'Scikit-learn', 'TF-IDF'],
      },
      {
        number: 4,
        title: 'Image Classification System',
        description:
          'Train a deep learning CNN model to categorize and classify multi-class images with high precision.',
        focusArea: 'Deep Learning & Computer Vision',
        toolsUsed: ['TensorFlow', 'Keras', 'OpenCV', 'CNN'],
      },
      {
        number: 5,
        title: 'End-to-End Machine Learning Pipeline',
        description:
          'Work through the complete process: Data → Cleaning → Analysis → Model → Evaluation → Deployment with interactive UI.',
        focusArea: 'Full ML Pipeline & API Deployment',
        toolsUsed: ['FastAPI', 'Docker', 'Streamlit', 'Scikit-learn'],
      },
    ],
  },

  portfolio: {
    title: 'Build Your Machine Learning Portfolio',
    subtitle: 'Demonstrate Tangible Model Building & Engineering Skills',
    description:
      'A strong portfolio can demonstrate your ability to apply machine learning skills to real problems.',
    deliverables: [
      'Data preparation and exploratory analysis notebooks',
      'Predictive regression and classification models with benchmark scores',
      'Recommendation engine with evaluation metrics',
      'Deep learning convolutional image classification project',
      'Deployed machine learning model API with documentation',
      'Complete end-to-end ML project demonstrating the full lifecycle',
    ],
    ctaText: 'Build Your ML Portfolio',
  },

  targetAudiences: {
    title: 'Who Can Join This Course?',
    subtitle: 'Structured for Aspiring Engineers and Data Specialists',
    audiences: [
      {
        id: 'students',
        title: 'Students',
        description:
          'Students studying Computer Science, IT, Engineering, Data Science or related subjects wanting to enter Machine Learning.',
      },
      {
        id: 'graduates',
        title: 'Graduates',
        description:
          'Fresh graduates seeking practical technology skills to qualify for ML Engineer and Data Scientist roles.',
      },
      {
        id: 'working-professionals',
        title: 'Working Professionals',
        description:
          'Software developers and IT professionals looking to add predictive modeling and machine learning algorithms to their skill set.',
      },
      {
        id: 'career-switchers',
        title: 'Career Switchers',
        description:
          'Professionals from quantitative and analytical backgrounds transitioning into data science and ML engineering.',
      },
    ],
  },

  careerOpportunities: {
    title: 'Machine Learning Career Opportunities',
    subtitle: 'In-Demand Roles Across Global Industries',
    description:
      'After developing the required skills and practical experience, learners can explore roles across modern engineering teams.',
    roles: [
      'Machine Learning Engineer',
      'Data Scientist',
      'Machine Learning Developer',
      'Deep Learning Engineer',
      'NLP Engineer',
      'Computer Vision Engineer',
      'AI Engineer',
      'Predictive Analytics Specialist',
      'Data Analyst',
      'MLOps Associate',
    ],
    disclaimer:
      "Career opportunities depend on an individual's skills, experience, projects, qualifications and employer requirements.",
  },

  toolsStack: {
    title: 'Tools & Technologies',
    subtitle: 'Industry-Standard Machine Learning Stack',
    description:
      'Gain hands-on exposure to standard tools used across the machine learning and data science community.',
    categories: [
      {
        category: 'Programming & Libraries',
        description: 'Core tools for data manipulation and modeling',
        tools: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'OpenCV'],
      },
      {
        category: 'Deep Learning & Neural Networks',
        description: 'Modern frameworks for neural architectures',
        tools: ['TensorFlow', 'Keras', 'PyTorch'],
      },
      {
        category: 'Development & Experimentation',
        description: 'Interactive computational notebooks',
        tools: ['Jupyter Notebook', 'Google Colab'],
      },
      {
        category: 'Deployment & APIs',
        description: 'Publishing and serving ML models',
        tools: ['FastAPI', 'REST APIs', 'Streamlit', 'Basic MLOps'],
      },
    ],
  },

  whyCloudSwan: {
    title: 'Why Choose CloudSwan Solution?',
    subtitle: 'Comprehensive Approach to Machine Learning Education',
    pillars: [
      {
        title: 'Practical Learning',
        description:
          'Focus on applying concepts through assignments, exercises and projects on authentic datasets.',
      },
      {
        title: 'Industry-Oriented Curriculum',
        description:
          'The curriculum covers foundational mathematics, classical algorithms, deep learning and model deployment.',
      },
      {
        title: 'Real-World Projects',
        description:
          'Build projects that demonstrate your ability to execute end-to-end machine learning workflows.',
      },
      {
        title: 'Expert Guidance',
        description:
          'Learn with guidance from experienced practitioners and mentors throughout the training program.',
      },
      {
        title: 'Flexible Learning',
        description:
          'Choose the learning format and batch schedule that best suits your work or study schedule.',
      },
      {
        title: 'Career Support',
        description:
          'Receive support with resume preparation, technical interview drills and placement guidance.',
      },
    ],
  },

  certification: {
    title: 'Machine Learning Certification',
    subtitle: 'Industry-Recognized Technical Credential',
    description:
      'After completing the required training and assessments, learners can receive a course completion certificate from CloudSwan Solution. The certification can be added to your professional profile and resume as evidence of completing the training program.',
    highlights: [
      'Python Data Handling & Scientific Computing',
      'Mathematics & Statistics for Machine Learning',
      'Exploratory Data Analysis & Feature Engineering',
      'Supervised Learning (Regression & Classification)',
      'Unsupervised Learning (Clustering & PCA)',
      'Deep Learning & Neural Networks',
      'Model Evaluation & Hyperparameter Optimization',
      'Model Deployment & REST API Integration',
    ],
    regionalFocus: {
      title: 'Machine Learning Training in Tamil Nadu',
      description:
        "Machine Learning skills are useful across multiple technology and business applications. Learners from across Tamil Nadu can join CloudSwan's training program through available classroom and online learning options. The curriculum focuses on understanding the complete machine learning workflow: Data → Preparation → Analysis → Model Building → Evaluation → Deployment. This approach helps learners understand how machine learning projects are developed in practical situations.",
      keyAreas: [
        'Complete End-to-End Workflow Focus',
        'Practical Real-World Datasets',
        'Coimbatore Center & Online Flexibility',
        'Industry Capstone Mentorship',
      ],
    },
    ethicalHackingNote: {
      title: 'AI & ML Training Institute in Coimbatore',
      subtitle: 'Structured Path from Python to Deep Learning',
      description:
        "CloudSwan Solution provides AI and Machine Learning training for learners looking for classroom-based and online learning options. Our Coimbatore training presence allows students and working professionals to access career-oriented technology training while also offering online learning flexibility. The program provides a structured path from Python and data fundamentals to machine learning, deep learning and practical AI projects.",
      keyFocusAreas: [
        'Supervised & Unsupervised Learning',
        'Deep Neural Networks',
        'Hyperparameter Tuning',
        'Model Packaging & APIs',
      ],
      complianceWarning:
        'Certification should be supported by practical skills and projects when applying for AI and ML opportunities.',
    },
  },

  roadmap: {
    title: 'Machine Learning Career Roadmap',
    subtitle: 'Step-by-Step Pathway to Becoming an ML Engineer',
    steps: [
      {
        step: 1,
        title: 'Python & Data Handling',
        description:
          'Master Python, NumPy, Pandas, data wrangling, and scientific visualization with Matplotlib.',
      },
      {
        step: 2,
        title: 'Mathematics & Statistics',
        description:
          'Build strong intuition in linear algebra, probability, distributions, and inferential statistics.',
      },
      {
        step: 3,
        title: 'Data Preparation & EDA',
        description:
          'Clean datasets, handle missing values, encode features, and perform exploratory data analysis.',
      },
      {
        step: 4,
        title: 'Supervised Learning',
        description:
          'Train linear and logistic regression models, decision trees, random forests, and evaluate performance.',
      },
      {
        step: 5,
        title: 'Unsupervised Learning & Clustering',
        description:
          'Discover patterns with K-Means, hierarchical clustering, and PCA dimensionality reduction.',
      },
      {
        step: 6,
        title: 'Deep Learning Fundamentals',
        description:
          'Understand neural network architectures, perceptrons, activation functions, CNNs, and RNNs.',
      },
      {
        step: 7,
        title: 'Model Deployment & APIs',
        description:
          'Expose trained models as REST API endpoints and integrate them with interactive applications.',
      },
      {
        step: 8,
        title: 'Portfolio & Interview Preparation',
        description:
          'Complete capstone projects, assemble your GitHub portfolio, and prepare for ML technical interviews.',
      },
    ],
  },

  faqs: [
    {
      id: 'faq-ml-1',
      question: 'What is a Machine Learning course?',
      answer:
        'A Machine Learning course teaches learners how algorithms and statistical models can learn from data to identify patterns, make predictions, and solve classification problems without explicit rule programming.',
    },
    {
      id: 'faq-ml-2',
      question: 'Is Machine Learning difficult for beginners?',
      answer:
        'Machine Learning involves programming and mathematics, but beginners can learn progressively by starting with Python and data fundamentals before moving into advanced predictive algorithms and neural networks.',
    },
    {
      id: 'faq-ml-3',
      question: 'What is the complete machine learning workflow?',
      answer:
        'The complete workflow consists of: Data → Preparation → Analysis → Model Building → Evaluation → Deployment. CloudSwan emphasizes this entire pipeline rather than isolated tools.',
    },
    {
      id: 'faq-ml-4',
      question: 'Will I learn Python in this course?',
      answer:
        'Yes. Python fundamentals and commonly used Python libraries for ML such as NumPy, Pandas, Matplotlib, and Scikit-learn are included in the learning path.',
    },
    {
      id: 'faq-ml-5',
      question: 'Does the training include practical projects?',
      answer:
        'Yes. The program includes practical exercises and projects covering predictive analytics, recommendation systems, NLP sentiment analysis, and image classification.',
    },
    {
      id: 'faq-ml-6',
      question: 'Can non-IT professionals learn Machine Learning?',
      answer:
        'Yes, but the learning curve may vary depending on programming and mathematical background. A structured foundation in Python, data and statistics makes the transition smooth.',
    },
    {
      id: 'faq-ml-7',
      question: 'What career roles can I pursue after ML training?',
      answer:
        'Depending on your skills and experience, you can explore roles such as Machine Learning Engineer, Data Scientist, ML Developer, Deep Learning Engineer, and Data Analyst.',
    },
    {
      id: 'faq-ml-8',
      question: 'Is the training available in Coimbatore?',
      answer:
        'Yes. CloudSwan offers Machine Learning training options for learners in Coimbatore across Gandhipuram and Saravanampatti campuses, along with online learning options.',
    },
    {
      id: 'faq-ml-9',
      question: 'Does CloudSwan provide career support?',
      answer:
        'CloudSwan provides career support including resume preparation, interview preparation and placement guidance as part of its training offering.',
    },
    {
      id: 'faq-ml-10',
      question: 'What is the duration of the Machine Learning course?',
      answer:
        'The program is positioned as a 3–4 month training program. Confirm current batch schedules and timings with the admissions team before enrollment.',
    },
  ],

  finalCta: {
    title: 'Start Your Machine Learning Journey',
    subtitle:
      'Master the complete machine learning workflow from data cleaning to model deployment with experienced industry mentors.',
    checkpoints: [
      'Master Python, Scikit-learn, statistical modeling, and deep learning',
      'Execute the complete ML workflow: Data → Model → Evaluation → Deployment',
      'Work on practical projects including recommendation systems and predictive models',
      'Build a verified portfolio of machine learning code repositories',
      'Receive resume, interview preparation and career mentorship',
    ],
    primaryCta: 'Book a Free Counselling Session',
    secondaryCta: 'Explore Course Curriculum',
  },
}
