import type { GeneralCourseData } from '../types/generalCourse'

export const GENERAL_COURSES_DATA: Record<string, GeneralCourseData> = {
  // ==========================================
  // 1. LANGUAGE TRAINING
  // ==========================================
  'english-communication': {
    id: 'english-comm',
    slug: '/courses/english-communication',
    categoryId: 'language-training',
    categoryTitle: 'Language Training',
    title: 'English Communication Training in Coimbatore',
    shortTitle: 'English Communication',
    badge: 'Flagship Language Track',
    tagline: 'Master Fluent English, Professional Vocabulary & Confident Corporate Speaking',
    overview: [
      'CloudSwan’s English Communication Course in Coimbatore is designed for students, job seekers, and working professionals who want to eliminate hesitation, master flawless spoken English, and command respect in corporate interactions.',
      'Through immersive daily speaking drills, active role-plays, vocabulary enrichment sessions, and personalized accent guidance, our certified trainers empower you to express your ideas articulately in interviews, client meetings, and social discussions.',
    ],
    specs: {
      duration: '6 - 8 Weeks (45 Hours)',
      mode: 'Classroom (Gandhipuram & Saravanampatti) & Live Online',
      level: 'Beginner to Advanced',
      batchTimings: 'Morning (7:30 AM), Evening (6:30 PM), & Weekend Batches',
      certification: 'CloudSwan Certified Corporate Communicator Certificate',
      practicalHours: '80% Interactive Speaking & Presentation Drills',
    },
    highlights: [
      'Overcome Stage Fear & Hesitation with Daily 1:1 Speaking Practice',
      'Mother Tongue Influence (MTI) Reduction & Phonetics Coaching',
      'Corporate Email Drafting, Report Writing & Business Etiquette',
      'Mock Group Discussions, Impromptu Debates & Presentation Labs',
      'Cambridge-standard Diagnostic Assessments & Personalized Feedback',
    ],
    outcomes: [
      'Speak fluent English with natural rhythm, intonation, and clarity.',
      'Clear HR interviews, Technical Rounds, and Client Calls with poise.',
      'Draft crisp, persuasive professional emails, memos, and executive summaries.',
      'Deliver engaging PowerPoint presentations and speak confidently in group meetings.',
      'Expand vocabulary by 500+ corporate words, idioms, and workplace phrases.',
    ],
    modules: [
      {
        number: 1,
        title: 'Grammar Essentials & Sentence Construction',
        duration: '10 Hours',
        topics: [
          'Tenses in Practical Context (Present, Past, Future without Rote Rules)',
          'Subject-Verb Agreement and Common Indianism Corrections',
          'Active vs. Passive Voice in Everyday & Professional Speech',
          'Articles, Prepositions, and Conjunctions for Cohesive Speech',
          'Interactive Drills: Constructing Complex & Compound Sentences',
        ],
      },
      {
        number: 2,
        title: 'Fluency, Pronunciation & MTI Reduction',
        duration: '10 Hours',
        topics: [
          'Neutralizing Mother Tongue Influence (MTI) with Phonetic Drills',
          'Vowel & Consonant Sounds Mastery (British / International Standard)',
          'Syllable Stress, Intonation, and Word Linking Techniques',
          'Tongue Twisters, Speech Modulation & Vocal Warm-up Exercises',
          'Audio Recording & Playback Analysis for Self-Correction',
        ],
      },
      {
        number: 3,
        title: 'Business Writing & Email Etiquette',
        duration: '8 Hours',
        topics: [
          'Professional Email Structuring (Subject Lines, Salutations, Sign-offs)',
          'Tone Management: Formal, Semi-Formal, and Assertive Communication',
          'Drafting Status Updates, Client Inquiries, and Follow-up Emails',
          'Writing Meeting Minutes (MOM) and Executive Summaries',
          'Avoiding Common Writing Pitfalls, Jargon, and Run-on Sentences',
        ],
      },
      {
        number: 4,
        title: 'Public Speaking, Presentations & Debates',
        duration: '9 Hours',
        topics: [
          'Techniques to Eliminate Stage Fright & Performance Anxiety',
          'Structuring 3-Minute Impromptu Speeches (JAM - Just a Minute)',
          'Creating & Delivering Engaging Slide Presentations with Stories',
          'Body Language, Eye Contact, Hand Gestures & Posture Coaching',
          'Panel Discussions, Parliamentary Debates & Q&A Handling',
        ],
      },
      {
        number: 5,
        title: 'Corporate Interviews & Group Discussions',
        duration: '8 Hours',
        topics: [
          'Mastering "Tell Me About Yourself" & Behavioral Interview Questions (STAR Method)',
          'Group Discussion (GD) Strategies: Initiating, Moderating & Summarizing',
          'Salary Negotiation & Asking Impactful Questions to Employers',
          'Telephonic & Virtual Video Interview Best Practices',
          'Final Mock Interview Simulation with Audio-Video Recording Feedback',
        ],
      },
    ],
    targetAudience: [
      'College Freshers preparing for campus placements and MNC interviews.',
      'Working professionals seeking promotions, leadership roles, or client-facing assignments.',
      'Entrepreneurs and business owners interacting with international clients.',
      'Anyone struggling with spoken English hesitation or stage fear.',
    ],
    faqs: [
      {
        question: 'What are the batch timings for English Communication training?',
        answer: 'We run multiple batches to suit everyone: Early morning (7:30 AM - 9:00 AM), Mid-day, Evening (6:30 PM - 8:00 PM), and dedicated Weekend Batches on Saturdays and Sundays at both our Gandhipuram and Saravanampatti campuses.',
      },
      {
        question: 'Will I get individual attention if I am hesitant to speak in a group?',
        answer: 'Absolutely. Our batch sizes are strictly capped at 10-12 students. Every session includes 1-on-1 speaking time with the trainer, and personalized weekly diagnostic feedback.',
      },
      {
        question: 'Is this course suitable for beginners with basic Tamil-medium backgrounds?',
        answer: 'Yes! We begin from foundational confidence building and gradual sentence construction before transitioning into advanced fluency and corporate scenarios. No prior fluency is required.',
      },
      {
        question: 'Do you offer a recognized certificate upon completion?',
        answer: 'Yes, all students receive an ISO 9001:2015 recognized course completion certificate validating their professional business communication proficiency.',
      },
    ],
  },

  ielts: {
    id: 'ielts',
    slug: '/courses/ielts',
    categoryId: 'language-training',
    categoryTitle: 'Language Training',
    title: 'IELTS Coaching in Coimbatore (Academic & General)',
    shortTitle: 'IELTS Band 7.5+ Prep',
    badge: 'Target Band 7.5 - 8.5',
    tagline: 'Achieve Band 7.5+ with Certified British Council & IDP Master Trainers',
    overview: [
      'CloudSwan’s comprehensive IELTS coaching program in Coimbatore equips study-abroad aspirants and immigration candidates with proven score-maximizing strategies for IELTS Academic and General Training.',
      'With full-length computer-delivered mock tests, intensive 1-on-1 speaking interviews, and rigorous essay correction drills, our mentors ensure you hit your target band score on your very first attempt.',
    ],
    specs: {
      duration: '4 - 8 Weeks (Comprehensive & Fast-track)',
      mode: 'Classroom Test Center & Interactive Live Online',
      level: 'Intermediate to Advanced',
      batchTimings: 'Weekdays & Intensive Weekend Bootcamps',
      certification: 'Official IELTS Mock Test Diagnostic Scorecard',
      practicalHours: '20+ Full-length Computer Mock Exams Included',
    },
    highlights: [
      'Cambridge Official Practice Materials (Volumes 11-19 Included)',
      '1:1 Speaking Interviews with Detailed Scoring Feedback',
      'Daily Task 1 & Task 2 Essay Review with Band Descriptors Breakdown',
      'Audio Lab Drills for Fast Accent Decoding (British, Aussie, American)',
      'Free Exam Slot Booking Assistance & Visa Counseling Guidance',
    ],
    outcomes: [
      'Score Band 7.5 or higher across Listening, Reading, Writing, and Speaking.',
      'Crack IELTS Reading in under 55 minutes using skimming and scanning techniques.',
      'Produce Band 8 standard Writing Task 2 essays with strong lexical resource.',
      'Speak fluently with varied grammatical structures in the 14-minute speaking interview.',
    ],
    modules: [
      {
        number: 1,
        title: 'Listening Mastery & Accent Decoding',
        duration: '10 Hours',
        topics: [
          'Overview of Sections 1 to 4: Dialogues, Monologues & Academic Lectures',
          'Techniques for Note Completion, Multiple Choice & Map Labeling',
          'Decoding British, Australian, and North American Accents',
          'Avoiding Common Distractors, Spelling Errors & Word Limit Traps',
        ],
      },
      {
        number: 2,
        title: 'Reading Speed, Skimming & Scanning',
        duration: '12 Hours',
        topics: [
          'Mastering True / False / Not Given & Yes / No / Not Given Questions',
          'Headings Matching and Information Location within 3 Long Texts',
          'Vocabulary in Context & Technical Academic Vocabulary Drills',
          'Strict 60-Minute Time Management Drills for 40 Questions',
        ],
      },
      {
        number: 3,
        title: 'Writing Task 1 & Task 2 Band 8 Strategies',
        duration: '14 Hours',
        topics: [
          'Academic Task 1: Describing Graphs, Charts, Processes & Maps in 150 Words',
          'General Task 1: Formal, Semi-formal & Informal Letters with Precise Tone',
          'Task 2 Essay Structuring: Opinion, Discussion, Problem-Solution & Direct Questions',
          'Lexical Resource, Coherence & Cohesion, and Grammatical Range Scoring',
        ],
      },
      {
        number: 4,
        title: 'Speaking Fluency & Mock Interviews',
        duration: '10 Hours',
        topics: [
          'Part 1: Natural Conversation on Everyday Familiar Topics',
          'Part 2: Cue Card 2-Minute Monologue with Structured Note-taking',
          'Part 3: Deep In-Depth Abstract Discussion & Complex Opinions',
          'Recorded Mock Speaking Tests with British Council Certified Examiners',
        ],
      },
    ],
    targetAudience: [
      'Students planning higher education in the UK, Canada, Australia, USA, or Ireland.',
      'Professionals applying for Canada Express Entry or Australian PR Visas.',
      'Nurses and healthcare professionals aiming for UK/Ireland NMC registration.',
    ],
    faqs: [
      {
        question: 'Which test should I take: IELTS Academic or General Training?',
        answer: 'IELTS Academic is required for university admissions and professional registrations (e.g., medical councils). IELTS General Training is intended for immigration, work visas, and citizenship in countries like Canada and Australia. We coach for both formats.',
      },
      {
        question: 'How many mock tests are included in the course fee?',
        answer: 'You receive access to 20+ full-length computer-delivered and paper-based mock tests, along with detailed individual score reports for each component.',
      },
      {
        question: 'Can I attend weekend-only classes?',
        answer: 'Yes! We offer a dedicated 6-week Weekend Intensive IELTS Bootcamp on Saturdays and Sundays (3 hours each day).',
      },
      {
        question: 'Do you help with official IELTS test date booking?',
        answer: 'Yes, we are official test registration partners and assist you with date booking and IDP / British Council test slot reservations at no extra charge.',
      },
    ],
  },

  german: {
    id: 'german',
    slug: '/courses/german',
    categoryId: 'language-training',
    categoryTitle: 'Language Training',
    title: 'German Language Training in Coimbatore (A1 - B2)',
    shortTitle: 'German Language A1 - B2',
    badge: 'Goethe Exam Certified',
    tagline: 'Learn German from Certified Goethe-Institut Mentors for Study & Jobs in Germany',
    overview: [
      'Germany offers tuition-free public universities and thousands of high-paying jobs for engineers and healthcare professionals. CloudSwan provides rigorous German language coaching aligned with the Common European Framework of Reference for Languages (CEFR).',
      'Learn from certified German philology experts with native-standard audio drills, grammar clarity, conversational practice, and dedicated Goethe-Zertifikat exam preparation.',
    ],
    specs: {
      duration: '2 - 3 Months per CEFR Level',
      mode: 'Classroom & Interactive Virtual Labs',
      level: 'A1, A2, B1, and B2 Levels Available',
      batchTimings: 'Daily Regular & Weekend Executive Batches',
      certification: 'CloudSwan Certificate + Goethe-Zertifikat Exam Prep',
      practicalHours: 'Extensive Listening, Speaking & Reading Practice',
    },
    highlights: [
      'Curriculum strictly aligned with Goethe-Institut / Max Mueller Bhavan Standards',
      'Native German Audio & Video Immersion in Modern Multimedia Classrooms',
      'Intensive Speaking Drills for Immediate Conversational Capability',
      'Official Goethe Exam Model Papers & Speaking Partner Simulations',
      'Complimentary Guidance for Germany University Applications & Blocked Account',
    ],
    outcomes: [
      'Clear Goethe-Zertifikat A1, A2, or B1 exams with high distinction.',
      'Converse fluently in everyday German situations, shopping, travel, and university life.',
      'Understand native German speech at normal conversational speed.',
      'Write formal letters, university application essays, and professional emails in German.',
    ],
    modules: [
      {
        number: 1,
        title: 'A1 Level: Foundations & Daily Interactions',
        duration: '60 Hours',
        topics: [
          'German Alphabet, Umlauts, Dipthongs & Phonetic Rules',
          'Greetings, Self-Introduction, Asking for Directions & Shopping',
          'Articles (der, die, das), Nominative & Accusative Cases',
          'Regular & Irregular Verb Conjugations and Modal Verbs (können, müssen)',
        ],
      },
      {
        number: 2,
        title: 'A2 Level: Conversational Proficiency & Past Tenses',
        duration: '60 Hours',
        topics: [
          'Dative Case, Two-Way Prepositions (Wechselpräpositionen)',
          'Expressing Past Actions: Perfekt & Präteritum Tenses',
          'Describing Travel, Workplace Situations, Doctor Appointments & Weather',
          'Reflexive Verbs and Subordinating Conjunctions (weil, dass, wenn)',
        ],
      },
      {
        number: 3,
        title: 'B1 Level: Independent Speaker & Workplace German',
        duration: '70 Hours',
        topics: [
          'Genitive Case, Passive Voice (Passiv) & Relative Clauses',
          'Expressing Complex Opinions, Arguments, Pros & Cons in German',
          'Writing Formal Letters, Complaint Emails & Job Application Inquiries',
          'Understanding Radio Broadcasts, German News Articles & Documentaries',
        ],
      },
      {
        number: 4,
        title: 'Goethe-Zertifikat Exam Preparation & Mock Drills',
        duration: '20 Hours',
        topics: [
          'Module-by-Module Exam Strategy: Lesen, Hören, Schreiben, Sprechen',
          'Timed Exam Simulations with Official Goethe Sample Test Papers',
          'Speaking Examination Pair-Work Drills & Presentation Simulations',
          'Scoring Matrix Analysis & Tips to Maximize Pass Percentiles',
        ],
      },
    ],
    targetAudience: [
      'Engineering and Science graduates planning tuition-free Master’s degrees in Germany.',
      'IT professionals, mechanical engineers, and automotive specialists seeking German jobs.',
      'Nurses and healthcare workers preparing for German hospital placements (B1/B2 level).',
    ],
    faqs: [
      {
        question: 'Which level is required for higher studies in Germany?',
        answer: 'For English-taught Master’s degrees, universities usually recommend A1 or A2 for visa and daily life. For German-taught degrees, B2 or C1 (TestDaF) is mandatory. We guide you according to your university admission letter.',
      },
      {
        question: 'How long does it take to complete German A1 level?',
        answer: 'Our intensive weekday batch completes A1 in 6-8 weeks (60 hours of active instruction). Weekend batches take approximately 10-12 weeks.',
      },
      {
        question: 'Can I appear for the official Goethe-Zertifikat exam in Coimbatore?',
        answer: 'The official Goethe exam is conducted at Max Mueller Bhavan centers (Chennai, Bangalore, or partner venues). We prepare you fully and assist with your exam slot registration.',
      },
      {
        question: 'Are learning materials provided?',
        answer: 'Yes! Standard international textbooks (Netzwerk / Schritte International) along with audio files, vocabulary flashcards, and grammar exercise sheets are included.',
      },
    ],
  },

  french: {
    id: 'french',
    slug: '/courses/french',
    categoryId: 'language-training',
    categoryTitle: 'Language Training',
    title: 'French Language Training in Coimbatore (A1 - B2 DELF)',
    shortTitle: 'French Language Training',
    badge: 'DELF / TEF Preparation',
    tagline: 'Achieve French Fluency with Native-Standard Curriculum & DELF Exam Support',
    overview: [
      'French is spoken across 5 continents and is an official language of the UN, EU, and Canada immigration programs. CloudSwan’s French training in Coimbatore offers interactive, communicative training from A1 to B2 level.',
      'Whether you are preparing for higher studies in France, aiming for Canada PR bonus points via TEF/TCF Canada, or learning for international business, our courses give you rapid fluency and cultural competence.',
    ],
    specs: {
      duration: '6 - 10 Weeks per Level',
      mode: 'Classroom & Live Interactive Online',
      level: 'A1 (Beginner) to B2 (Upper Intermediate)',
      batchTimings: 'Morning, Evening, and Weekend Schedules',
      certification: 'CloudSwan Certificate + DELF / TEF Exam Readiness',
      practicalHours: 'Conversational Speaking, Pronunciation & Audio Drills',
    },
    highlights: [
      'Alliance Française standard curriculum and pedagogical methods',
      'Accent training with French phonetics, liaison, and intonation drills',
      'Specialized preparation for DELF A1/A2/B1/B2 and TEF Canada',
      'Interactive cultural workshops, French cinema, and literature discussions',
      'Small batch size (max 10 students) for dedicated trainer attention',
    ],
    outcomes: [
      'Attain confident conversational fluency in French.',
      'Clear official DELF A1, A2, or B1 certification exams.',
      'Score high in TEF / TCF Canada to claim up to 50 additional Express Entry points.',
      'Understand spoken French dialogues, podcasts, and news bulletins.',
    ],
    modules: [
      {
        number: 1,
        title: 'A1: French Phonetics & Everyday Social Interactions',
        duration: '50 Hours',
        topics: [
          'French Alphabet, Accents, Nasal Sounds & Liaison Rules',
          'Salutations, Introducing Yourself & Others, Nationalities & Professions',
          'Definite, Indefinite Articles & Gender of Nouns',
          'Present Tense Conjugations (Regular -er, -ir, -re verbs and irregulars like être, avoir, faire, aller)',
        ],
      },
      {
        number: 2,
        title: 'A2: Routine Conversations & Past Narrative',
        duration: '50 Hours',
        topics: [
          'Passé Composé with Avoir & Être, Imperfect Tense (Imparfait)',
          'Shopping, Ordering Food, Making Reservations & Travel Conversations',
          'Pronominal (Reflexive) Verbs and Daily Routine Descriptions',
          'Prepositions of Place, Direct and Indirect Object Pronouns (COD / COI)',
        ],
      },
      {
        number: 3,
        title: 'B1: Independent Communication & Debate',
        duration: '60 Hours',
        topics: [
          'Future Tense (Futur Simple), Conditional (Conditionnel Présent) & Subjunctive Mood',
          'Expressing Emotions, Desires, Hypothetical Situations & Personal Opinions',
          'Writing Formal Letters, CVs, and Motivation Letters for French Universities',
          'Engaging in Debates on Societal Topics, Environment & Technology',
        ],
      },
      {
        number: 4,
        title: 'DELF & TEF Canada Exam Bootcamp',
        duration: '20 Hours',
        topics: [
          'Compréhension de l’oral & Compréhension des écrits Speed Strategies',
          'Production écrite Structure & High-Scoring Vocabulary Checklists',
          'Production orale Role-Play Simulations with Evaluator Feedback',
          'Mock Test Drills with Official Past Papers',
        ],
      },
    ],
    targetAudience: [
      'Students planning studies in France, Switzerland, Belgium, or Canada.',
      'Immigration candidates aiming for Canada Express Entry French CRS points.',
      'Hospitality, fashion, luxury retail, and culinary arts professionals.',
    ],
    faqs: [
      {
        question: 'How does French help in Canada PR applications?',
        answer: 'Candidates who score NCLC 7 (approx B2 level) in French via TEF Canada can gain up to 50 additional CRS points, and are eligible for targeted French category-based Express Entry draws with significantly lower score cutoffs.',
      },
      {
        question: 'Is French pronunciation difficult for beginners?',
        answer: 'French has unique nasal vowels and silent letters, but our structured phonetic lessons and audio drills make pronunciation second nature within the first 2 weeks.',
      },
      {
        question: 'Are class recordings provided if I miss a session?',
        answer: 'Yes! All live online sessions are recorded and made available in your student portal for revision throughout your course.',
      },
      {
        question: 'Do you offer weekday evening batches?',
        answer: 'Yes, we have 6:30 PM - 8:00 PM batches on Mondays, Wednesdays, and Fridays, perfect for college students and working professionals.',
      },
    ],
  },

  'spoken-english': {
    id: 'spoken-english',
    slug: '/courses/spoken-english',
    categoryId: 'language-training',
    categoryTitle: 'Language Training',
    title: 'Spoken English Classes in Coimbatore',
    shortTitle: 'Spoken English Mastery',
    badge: '100% Practical Speaking',
    tagline: 'Overcome Hesitation, Speak English Fluently & Build Unshakable Confidence',
    overview: [
      'CloudSwan’s Spoken English training in Coimbatore is an activity-driven program specifically crafted to eliminate stage fear, stuttering, and translation from your mother tongue.',
      'With over 90% speaking time per class, you will engage in daily debates, extempore talks, role plays, situational dialogues, and vocabulary drills under the mentorship of compassionate language coaches.',
    ],
    specs: {
      duration: '4 - 6 Weeks (30 Hours)',
      mode: 'Classroom (Gandhipuram & Saravanampatti) & Live Online',
      level: 'All Levels (Zero Hesitation Guarantee)',
      batchTimings: 'Morning, Afternoon, Evening & Weekend Batches',
      certification: 'CloudSwan Spoken English Proficiency Certificate',
      practicalHours: '90% Practical Speaking Activity in Every Class',
    },
    highlights: [
      'Zero-Rote Learning: Speak from Day 1 without Memorizing Complex Grammar',
      'Daily Just-A-Minute (JAM) & Extempore Speaking Drills',
      'Pronunciation, Word Stress & Accent Neutralization Practice',
      'Vocabulary Expansion for Real-Life Conversations & Job Interviews',
      'Friendly, Judgement-Free Classroom Environment with Small Groups',
    ],
    outcomes: [
      'Speak English fluently without pause or mental translation from Tamil/Hindi.',
      'Confidently handle phone calls, retail interactions, and social conversations.',
      'Express thoughts clearly and confidently in front of any audience.',
      'Ace self-introductions and preliminary HR screening calls.',
    ],
    modules: [
      {
        number: 1,
        title: 'Breaking the Fear Barrier & Sentence Construction',
        duration: '6 Hours',
        topics: [
          'Mindset Transformation: Overcoming Stage Fear & Judgement Anxiety',
          'Thinking Directly in English without Translating from Mother Tongue',
          'Framing Everyday Sentences using Simple Question & Answer Patterns',
          'Essential Verbs, Action Words, and Daily Routine Descriptions',
        ],
      },
      {
        number: 2,
        title: 'Situational Conversations & Role-Playing',
        duration: '8 Hours',
        topics: [
          'Role-Play 1: At the Airport, Bank, Restaurant & Shopping Mall',
          'Role-Play 2: Doctor Visits, Travel Inquiries & Customer Support Calls',
          'Role-Play 3: Workplace Interactions, Meeting Colleagues & Small Talk',
          'Asking for Directions, Offering Help, and Politely Disagreeing',
        ],
      },
      {
        number: 3,
        title: 'Pronunciation, Accent & Fluency Boosters',
        duration: '8 Hours',
        topics: [
          'Correcting Common Pronunciation Mistakes & Word Endings',
          'Pacing Your Speech: Pausing, Stress, and Intonation',
          'Everyday Idioms, Phrasal Verbs & Modern Conversational Expressions',
          'Audio-Recorded Speech Analysis for Personalized Trainer Feedback',
        ],
      },
      {
        number: 4,
        title: 'Group Discussions, Debates & Interview Prep',
        duration: '8 Hours',
        topics: [
          'Participating Confidently in Group Discussions (GD)',
          'Structuring 2-Minute Speeches on Current Events & Personal Stories',
          'Answering Common HR Interview Questions with Natural Confidence',
          'Final Graduation Speech Presentation in Front of Class & Mentors',
        ],
      },
    ],
    targetAudience: [
      'Students and graduates looking to gain speaking confidence before placements.',
      'Homemakers and working professionals who feel held back by English hesitation.',
      'Anyone who can read/write English but struggles to speak fluently.',
    ],
    faqs: [
      {
        question: 'I can understand English but get nervous when speaking. Will this course help?',
        answer: 'Yes! More than 80% of our students face this exact challenge. Our course focuses entirely on continuous speaking practice in a warm, non-judgmental environment to build muscle memory and conversational confidence.',
      },
      {
        question: 'Are there separate batches for beginners?',
        answer: 'Yes, we conduct a quick diagnostic chat on your first day and place you in a peer group matching your current comfort level.',
      },
      {
        question: 'Can I attend demo sessions before joining?',
        answer: 'Yes, you can book a free demo session to experience our interactive training approach firsthand.',
      },
      {
        question: 'Where are your physical classrooms located?',
        answer: 'We have fully air-conditioned, multimedia-equipped campuses in Gandhipuram (Cross Cut Road) and Saravanampatti (near IT Corridor), Coimbatore.',
      },
    ],
  },

  'business-communication': {
    id: 'business-comm',
    slug: '/courses/business-communication',
    categoryId: 'language-training',
    categoryTitle: 'Language Training',
    title: 'Business Communication Training in Coimbatore',
    shortTitle: 'Business Communication',
    badge: 'Executive Corporate Skills',
    tagline: 'Elevate Your Corporate Presence, Executive Writing & Workplace Influence',
    overview: [
      'In today’s hybrid, global business landscape, clear and persuasive communication is the #1 differentiator for leadership advancement. CloudSwan’s Business Communication Course in Coimbatore develops high-impact executive presence.',
      'Master high-stakes client presentations, crisp executive emails, cross-cultural negotiations, and conflict resolution techniques taught by seasoned corporate leaders.',
    ],
    specs: {
      duration: '4 - 6 Weeks (35 Hours)',
      mode: 'Executive Classroom & Corporate Online Batches',
      level: 'Mid-Level Professionals, Managers & Job Seekers',
      batchTimings: 'Early Morning & Weekend Executive Formats',
      certification: 'Certified Business Communication Specialist',
      practicalHours: 'Case Study Simulations & Executive Presentation Labs',
    },
    highlights: [
      'Executive Presence, Body Language & Professional Gravitas',
      'Persuasive Business Writing (Proposals, MoMs, Reports & Emails)',
      'Cross-Cultural Communication with US, UK & European Stakeholders',
      'Meeting Facilitation, Active Listening & Conflict Resolution',
      'Delivering High-Impact Data-Driven Presentations to Senior Leadership',
    ],
    outcomes: [
      'Communicate with executive authority in high-stakes meetings.',
      'Write emails and proposals that command immediate attention and buy-in.',
      'Navigate difficult conversations, client escalations, and team negotiations smoothly.',
      'Lead virtual Zoom/Teams meetings with energy, structure, and clarity.',
    ],
    modules: [
      {
        number: 1,
        title: 'Executive Presence & High-Impact Presentations',
        duration: '9 Hours',
        topics: [
          'Developing Executive Gravitas, Vocal Projection & Body Language',
          'The Pyramid Principle: Structuring Messages for C-Suite Audiences',
          'Designing Persuasive Slide Decks (Less Text, More Visual Storytelling)',
          'Handling Hostile Questions & High-Pressure Q&A Sessions with Poise',
        ],
      },
      {
        number: 2,
        title: 'Advanced Corporate Email & Proposal Writing',
        duration: '9 Hours',
        topics: [
          'Drafting High-Stakes Client Emails, Proposals, and Scope of Work (SOW)',
          'Tone Calibration: Assertive vs. Aggressive vs. Passive Messaging',
          'Writing Crisp Status Reports, Escalation Notices & Meeting Minutes',
          'Editing for Conciseness: Cutting Fluff and Jargon from Corporate Writing',
        ],
      },
      {
        number: 3,
        title: 'Meeting Moderation & Active Listening',
        duration: '8 Hours',
        topics: [
          'Setting Agendas, Driving Outcomes & Managing Time in Large Meetings',
          'Virtual Meeting Etiquette (Camera Presence, Engagement Techniques)',
          'The Art of Active Listening, Paraphrasing & Strategic Questioning',
          'Drawing Out Introverted Team Members & Managing Dominant Speakers',
        ],
      },
      {
        number: 4,
        title: 'Negotiation, Stakeholder Management & Conflict Resolution',
        duration: '9 Hours',
        topics: [
          'Principled Negotiation Frameworks (Win-Win Outcomes)',
          'Managing Client Expectations, Scope Creep & Budget Pushbacks',
          'Resolving Interpersonal Workplace Conflicts Professionally',
          'Giving and Receiving Constructive Performance Feedback',
        ],
      },
    ],
    targetAudience: [
      'Team Leads, Project Managers, and Product Owners.',
      'Client-facing developers, consultants, and business analysts.',
      'Fresh MBAs and engineering professionals stepping into corporate roles.',
    ],
    faqs: [
      {
        question: 'Is this course suitable for IT professionals interacting with US/UK clients?',
        answer: 'Yes! A dedicated module covers cross-cultural business nuances, idioms, pacing, and executive expectations when collaborating with international offshore and onshore teams.',
      },
      {
        question: 'Do you conduct corporate training for enterprise teams?',
        answer: 'Yes, we provide customized on-site corporate training workshops for IT companies, startups, and institutions across Coimbatore and Tamil Nadu.',
      },
      {
        question: 'What is the schedule for executive batches?',
        answer: 'We host executive weekend sessions on Saturdays and Sundays, as well as early morning weekday slots (7:30 AM - 9:00 AM) that do not interfere with work hours.',
      },
      {
        question: 'Will there be individual feedback on my presentation style?',
        answer: 'Yes, every participant records multiple live presentations which are evaluated with constructive rubrics covering voice modulation, content structuring, and audience engagement.',
      },
    ],
  },

  // ==========================================
  // 2. GLOBAL CERTIFICATION SUPPORT
  // ==========================================
  'aws-certification': {
    id: 'aws-cert',
    slug: '/courses/aws-certification',
    categoryId: 'global-certifications',
    categoryTitle: 'Global Certification Support',
    title: 'AWS Global Certification Training in Coimbatore',
    shortTitle: 'AWS Certification Support',
    badge: '100% First-Time Pass Support',
    tagline: 'Clear AWS Solutions Architect & Developer Associate with Authorized Exam Prep',
    overview: [
      'Gain official industry recognition with CloudSwan’s AWS Global Certification Training in Coimbatore. Tailored specifically for clearing AWS Certified Solutions Architect (SAA-C03), SysOps Administrator, and Cloud Practitioner exams.',
      'Our curriculum couples real-world production AWS architecture design with high-yield scenario questions, Pearson VUE exam simulation engines, and 1-on-1 exam readiness reviews.',
    ],
    specs: {
      duration: '6 - 8 Weeks (50 Hours)',
      mode: 'Hands-on Classroom & Online Cloud Sandbox Labs',
      level: 'Associate & Professional Level',
      batchTimings: 'Weekday Evenings & Weekend Cloud Bootcamps',
      certification: 'AWS Certified Solutions Architect Associate (SAA-C03) Prep',
      practicalHours: '40+ AWS Lab Exercises & 5 Mock Exam Drills',
    },
    highlights: [
      'Aligned with latest AWS SAA-C03 & DVA-C02 official exam blueprints',
      'Dedicated AWS Free Tier & Sandbox Environment Hands-On Labs',
      'Access to 800+ Verified Scenario-Based Mock Questions & Explanations',
      'Official Pearson VUE Exam Booking Guidance & Voucher Support',
      'Resume Review with AWS Certified Badge Verification for LinkedIn',
    ],
    outcomes: [
      'Pass the official AWS Solutions Architect Associate exam on your 1st attempt.',
      'Design fault-tolerant, scalable, cost-optimized multi-tier cloud architectures.',
      'Master key AWS services: VPC, EC2, S3, RDS, Lambda, ECS, IAM, and CloudWatch.',
      'Stand out to top cloud employers with verifiable AWS credentials.',
    ],
    modules: [
      {
        number: 1,
        title: 'Design Resilient Cloud Architectures',
        duration: '14 Hours',
        topics: [
          'Multi-AZ & Multi-Region VPC Architecture Design and Subnetting',
          'High Availability with Auto Scaling Groups & Application Load Balancers',
          'Resilient Storage: S3 Lifecycle Policies, Glacier, EFS & EBS Volumes',
          'Decoupling Applications using Amazon SQS, SNS, and EventBridge',
        ],
      },
      {
        number: 2,
        title: 'High-Performing Cloud Solutions',
        duration: '12 Hours',
        topics: [
          'High Performance Compute: EC2 Instance Families, Nitro & Graviton',
          'Database Architecture: RDS Multi-AZ, Read Replicas, Aurora & DynamoDB',
          'Edge Computing & Caching with Amazon CloudFront and ElastiCache',
          'Serverless Compute with AWS Lambda, API Gateway & Step Functions',
        ],
      },
      {
        number: 3,
        title: 'Secure Cloud Applications & Architectures',
        duration: '12 Hours',
        topics: [
          'Identity and Access Management (IAM) Roles, Policies & Permission Boundaries',
          'Data Encryption at Rest & in Transit with AWS KMS, CloudHSM & ACM',
          'Network Security: Security Groups, Network ACLs, AWS WAF & Shield',
          'Security Monitoring with AWS CloudTrail, AWS Config & GuardDuty',
        ],
      },
      {
        number: 4,
        title: 'Cost-Optimized Architectures & Pearson VUE Mock Drill',
        duration: '12 Hours',
        topics: [
          'Cost Optimization Strategies: Savings Plans, Reserved Instances, Spot Fleets',
          'AWS Budgets, Cost Explorer & Resource Tagging Enforcement',
          '5 Full-Length Timed Exam Simulations with 65 Questions each (130 mins)',
          'Detailed Question-by-Question Breakdown and Elimination Techniques',
        ],
      },
    ],
    targetAudience: [
      'Software engineers and system administrators targeting Cloud Engineer roles.',
      'DevOps practitioners seeking official vendor validation.',
      'College students aiming for high-salary cloud consulting campus offers.',
    ],
    faqs: [
      {
        question: 'Do you provide the official AWS exam voucher?',
        answer: 'We assist you in booking your official Pearson VUE exam slot (online or at an authorized test center in Coimbatore) and inform you about official AWS promotional discounts and discount vouchers.',
      },
      {
        question: 'What is your pass rate for AWS Solutions Architect?',
        answer: 'Our students maintain a 96%+ first-attempt pass rate thanks to our strict readiness assessment before taking the actual exam.',
      },
      {
        question: 'Is prior Linux or coding knowledge required?',
        answer: 'Basic IT fundamentals are helpful, but we include a complimentary Cloud Prerequisites module covering Linux basics, networking fundamentals, and CLI essentials.',
      },
      {
        question: 'Are hands-on labs included or is it only theory?',
        answer: 'Over 65% of course time is spent in live AWS console labs deploying real production architectures.',
      },
    ],
  },

  'microsoft-certification': {
    id: 'microsoft-cert',
    slug: '/courses/microsoft-certification',
    categoryId: 'global-certifications',
    categoryTitle: 'Global Certification Support',
    title: 'Microsoft Azure Certification Training in Coimbatore',
    shortTitle: 'Microsoft Azure Certifications',
    badge: 'AZ-900 & AZ-104 Exam Track',
    tagline: 'Earn Microsoft Certified Credentials (AZ-900 Fundamentals & AZ-104 Administrator)',
    overview: [
      'Microsoft Azure powers over 85% of Fortune 500 enterprises. CloudSwan’s Microsoft Certification Training in Coimbatore prepares you for official Microsoft exams, specializing in AZ-900 (Azure Fundamentals) and AZ-104 (Azure Administrator Associate).',
      'Learn through hands-on Azure Portal sandbox labs, ARM/Bicep template scripting, Microsoft Entra ID management, and authentic Microsoft Learn practice assessments.',
    ],
    specs: {
      duration: '6 - 8 Weeks (45 Hours)',
      mode: 'Classroom Labs & Virtual Azure Sandboxes',
      level: 'Beginner to Associate',
      batchTimings: 'Weekday & Weekend Batches Available',
      certification: 'AZ-900 / AZ-104 Microsoft Certified Exam Readiness',
      practicalHours: '35+ Practical Azure Portal & CLI Lab Exercises',
    },
    highlights: [
      'Official Microsoft Learn curriculum mapped directly to AZ-900 and AZ-104 skills',
      'Hands-on Azure subscription provided for live deployments and configuration',
      'Comprehensive Microsoft Entra ID (Azure AD), RBAC & governance training',
      'Official Microsoft Practice Assessments & question bank drills',
      'Digital badge integration with Microsoft Learn and Credly profiles',
    ],
    outcomes: [
      'Pass AZ-900 Azure Fundamentals and AZ-104 Azure Administrator Associate exams.',
      'Configure virtual networks, Azure VMs, storage accounts, and App Services.',
      'Implement enterprise identity and security with Microsoft Entra ID.',
      'Monitor and troubleshoot Azure resources using Azure Monitor and Log Analytics.',
    ],
    modules: [
      {
        number: 1,
        title: 'Manage Azure Identities and Governance',
        duration: '10 Hours',
        topics: [
          'Microsoft Entra ID (Azure AD) Users, Groups & Self-Service Password Reset',
          'Role-Based Access Control (RBAC) Roles, Assignments & Custom Roles',
          'Azure Subscriptions, Management Groups, Resource Groups & Locks',
          'Implementing Governance with Azure Policy & Cost Management',
        ],
      },
      {
        number: 2,
        title: 'Implement and Manage Azure Storage & Compute',
        duration: '12 Hours',
        topics: [
          'Storage Accounts: Blob Tiers, Azure Files, File Sync & Storage Security',
          'Deploying and Configuring Azure Virtual Machines (Windows & Linux)',
          'Automating Deployments with ARM Templates, Bicep & Cloud-Init',
          'Configuring Azure App Services, Container Instances & Azure Kubernetes (AKS)',
        ],
      },
      {
        number: 3,
        title: 'Configure and Manage Virtual Networking',
        duration: '12 Hours',
        topics: [
          'Virtual Networks (VNets), Subnets, IP Addressing & VNet Peering',
          'Network Security Groups (NSGs) & Application Security Groups (ASGs)',
          'Azure Load Balancer, Application Gateway & Azure Bastion',
          'Azure DNS, Private Endpoints & Virtual Network Troubleshooting',
        ],
      },
      {
        number: 4,
        title: 'Monitor and Maintain Azure Resources & Exam Prep',
        duration: '11 Hours',
        topics: [
          'Azure Monitor, Log Analytics Workspaces, Metrics & Alert Rules',
          'Azure Backup & Site Recovery for VM and Storage Protection',
          'Case Study Analysis and Scenario-Based Question Drills for AZ-104',
          'Full-Length Exam Simulation on Official Microsoft Exam Engine',
        ],
      },
    ],
    targetAudience: [
      'System administrators, network engineers, and Windows/Linux server admins.',
      'IT support engineers looking to transition into Cloud Administration roles.',
      'Graduates looking to enter enterprise MNCs leveraging Microsoft enterprise stacks.',
    ],
    faqs: [
      {
        question: 'Should I take AZ-900 before taking AZ-104?',
        answer: 'AZ-900 is recommended for absolute beginners to build core cloud concepts. However, AZ-900 is not a mandatory prerequisite for AZ-104; candidates with basic IT knowledge can directly aim for AZ-104 with our structured coaching.',
      },
      {
        question: 'How do I take the official exam in Coimbatore?',
        answer: 'You can take the exam at authorized Pearson VUE test centers in Coimbatore or from home via OnVUE online proctoring. We guide you through system readiness and voucher booking.',
      },
      {
        question: 'Is hands-on lab access provided?',
        answer: 'Yes, we provide lab access and step-by-step lab guides for deploying VMs, VNets, and storage accounts directly in the Azure portal.',
      },
      {
        question: 'What is the format of the AZ-104 exam?',
        answer: 'AZ-104 has 40-60 questions, including multiple choice, drag-and-drop, case studies, and hotspot questions. You have 100 minutes to complete it, and a passing score is 700/1000.',
      },
    ],
  },

  'google-certification': {
    id: 'google-cert',
    slug: '/courses/google-certification',
    categoryId: 'global-certifications',
    categoryTitle: 'Global Certification Support',
    title: 'Google Cloud Platform (GCP) Certification in Coimbatore',
    shortTitle: 'Google Cloud Certification',
    badge: 'Associate Cloud Engineer (ACE)',
    tagline: 'Master GCP Infrastructure & Ace Associate Cloud Engineer / Professional Architect Exams',
    overview: [
      'Google Cloud is the fastest-growing cloud provider for big data, Kubernetes, and AI workloads. CloudSwan’s GCP Certification program in Coimbatore prepares candidates for the industry-leading Associate Cloud Engineer (ACE) and Professional Cloud Architect certifications.',
      'Get hands-on experience deploying containerized microservices on GKE, configuring VPC networks, managing Cloud IAM, and executing GCP CLI commands in real cloud projects.',
    ],
    specs: {
      duration: '6 - 8 Weeks (45 Hours)',
      mode: 'Classroom & Online GCP Sandbox Labs',
      level: 'Associate & Professional',
      batchTimings: 'Weekday & Weekend Batches Available',
      certification: 'GCP Associate Cloud Engineer (ACE) Exam Readiness',
      practicalHours: '30+ Google Cloud Skills Boost Lab Exercises',
    },
    highlights: [
      'Mapped directly to Google Cloud Associate Cloud Engineer exam objectives',
      'Deep hands-on expertise with Google Kubernetes Engine (GKE) & Cloud Run',
      'Google Cloud CLI (gcloud, gsutil, bq) real-world terminal commands',
      'Scenario-based case study questions mimicking Google’s official exam format',
      'Official Webassessor exam registration and proctoring guidance',
    ],
    outcomes: [
      'Pass the Google Cloud Associate Cloud Engineer (ACE) certification.',
      'Deploy and manage solutions using Google Cloud Console and gcloud command-line.',
      'Configure access and security with Google Cloud IAM and Service Accounts.',
      'Deploy scalable microservices on Google Kubernetes Engine (GKE).',
    ],
    modules: [
      {
        number: 1,
        title: 'Setting Up a Cloud Solution Environment',
        duration: '10 Hours',
        topics: [
          'Setting Up GCP Projects, Cloud Billing Accounts & Quotas',
          'Managing Cloud IAM Users, Custom Roles & Service Accounts',
          'Installing and Configuring Google Cloud SDK (gcloud CLI)',
          'Resource Hierarchy: Organizations, Folders, Projects & Labels',
        ],
      },
      {
        number: 2,
        title: 'Planning and Configuring Cloud Compute & Storage',
        duration: '12 Hours',
        topics: [
          'Compute Engine: VM Instances, Preemptible/Spot VMs, Custom Machine Types',
          'Google Kubernetes Engine (GKE): Creating Clusters, Pods & Deployments',
          'Serverless Compute: Cloud Run, Cloud Functions & App Engine',
          'Cloud Storage (Buckets, Storage Classes, Lifecycle Policies) & Cloud SQL',
        ],
      },
      {
        number: 3,
        title: 'Configuring VPC Networking & Operations',
        duration: '12 Hours',
        topics: [
          'VPC Networks: Subnets, Shared VPC, VPC Peering & Firewall Rules',
          'Cloud Load Balancing (HTTP(S), SSL, TCP/UDP) & Cloud DNS',
          'Cloud Operations Suite: Cloud Monitoring, Cloud Logging, Error Reporting',
          'Infrastructure Automation with Cloud Deployment Manager & Terraform',
        ],
      },
      {
        number: 4,
        title: 'Official Google Exam Case Studies & Mock Drills',
        duration: '11 Hours',
        topics: [
          'Deep Dive into Official Google ACE Exam Sample Questions',
          'Question Deconstruction: Identifying Key Architectural Constraints',
          'Webassessor Online Proctoring Setup & Verification Guidance',
          'Final 50-Question Timed Mock Exam with Review Sessions',
        ],
      },
    ],
    targetAudience: [
      'Cloud developers, DevOps engineers, and Linux system administrators.',
      'Data engineers and AI practitioners wanting to host workloads on Google Cloud.',
      'Engineers looking to add high-paying Google Cloud credentials to their resumes.',
    ],
    faqs: [
      {
        question: 'How is the GCP exam administered?',
        answer: 'Google Cloud exams are scheduled through Kryterion Webassessor. You can take the exam in person at authorized testing centers in Coimbatore or via online proctored delivery.',
      },
      {
        question: 'Is coding required for the Associate Cloud Engineer exam?',
        answer: 'No coding is required. The exam focuses on cloud infrastructure, deployment, security, and managing services using the Google Cloud Console and CLI.',
      },
      {
        question: 'Are Google Cloud credits provided during the training?',
        answer: 'Yes, we provide access to lab environments and Google Cloud credits so you can practice without worrying about personal billing surprises.',
      },
      {
        question: 'How long is the GCP ACE certification valid?',
        answer: 'Google Cloud certifications are valid for 2 years, after which you can recertify to validate your updated knowledge.',
      },
    ],
  },

  'cisco-certification': {
    id: 'cisco-cert',
    slug: '/courses/cisco-certification',
    categoryId: 'global-certifications',
    categoryTitle: 'Global Certification Support',
    title: 'Cisco CCNA (200-301) Certification Training in Coimbatore',
    shortTitle: 'Cisco CCNA Certification',
    badge: 'CCNA 200-301 Authorized Track',
    tagline: 'Learn Network Fundamentals, IP Connectivity & Security with Real Cisco Hardware Racks',
    overview: [
      'Cisco CCNA (200-301) is the global gold standard for networking professionals. CloudSwan’s Cisco Certification training in Coimbatore combines in-depth networking theory with hands-on practice on real Cisco routers, switches, and Cisco Packet Tracer / GNS3 simulations.',
      'Master IPv4/IPv6 subnetting, routing protocols (OSPF), switching (VLANs, STP), network security (ACLs, NAT), and network automation fundamentals to pass your CCNA exam on the first attempt.',
    ],
    specs: {
      duration: '8 - 10 Weeks (60 Hours)',
      mode: 'Classroom Hardware Lab & Live Online Simulation Labs',
      level: 'Entry to Associate Level',
      batchTimings: 'Weekday Morning, Evening & Weekend Batches',
      certification: 'Cisco Certified Network Associate (CCNA 200-301) Prep',
      practicalHours: '40+ Cisco Packet Tracer & Live Hardware Lab Hours',
    },
    highlights: [
      'Hands-on training on physical Cisco Routers (2900 series) and Catalyst Switches (2960)',
      'Master IPv4 & IPv6 Subnetting with Rapid Mental Math Shortcuts',
      'Official Cisco CCNA 200-301 Exam Blueprint Coverage (100% Curriculum)',
      'Packet Tracer, GNS3, and EVE-NG Network Topology Blueprints Included',
      'Pearson VUE Exam Booking Guidance & 500+ Official Scenario Questions',
    ],
    outcomes: [
      'Pass the official Cisco CCNA 200-301 exam with high scores.',
      'Configure and troubleshoot enterprise routing (OSPFv2) and switching (VLANs, Trunking, STP).',
      'Implement network security policies with Standard & Extended Access Control Lists (ACLs).',
      'Understand modern network programmability, SDN, REST APIs, and Ansible basics.',
    ],
    modules: [
      {
        number: 1,
        title: 'Network Fundamentals & IP Addressing',
        duration: '15 Hours',
        topics: [
          'OSI Model, TCP/IP Suite, and Network Topologies (Star, Mesh, Spine-Leaf)',
          'Physical Layer: UTP Cabling, Fiber Optics, SFP Transceivers & Interfaces',
          'IPv4 Addressing & Binary Arithmetic, Classless Addressing (CIDR)',
          'Variable Length Subnet Masking (VLSM) Mental Math Shortcuts',
          'IPv6 Address Representation, Address Types (Global Unicast, Link-Local) & Autoconfiguration',
        ],
      },
      {
        number: 2,
        title: 'Network Access & Switching Technologies',
        duration: '15 Hours',
        topics: [
          'Configuring Cisco Catalyst Switches (CLI Basics, Passwords, SSH, Telnet)',
          'VLANs, Voice VLANs, Trunking (802.1Q) & Dynamic Trunking Protocol (DTP)',
          'Inter-VLAN Routing: Router-on-a-Stick & Layer 3 Switch SVI Configuration',
          'Spanning Tree Protocol (STP, RSTP, PortFast, BPDU Guard)',
          'EtherChannel (LACP, PAgP) Configuration for Link Redundancy',
        ],
      },
      {
        number: 3,
        title: 'IP Connectivity & Routing Protocols',
        duration: '15 Hours',
        topics: [
          'Components of Routing Table: Administrative Distance, Metric, Next-Hop',
          'Configuring Static Routes, Default Routes & Floating Static Routes',
          'Single-Area OSPFv2: Neighbor Adjacencies, Router ID, DR/BDR Election',
          'First Hop Redundancy Protocols (HSRP Architecture & Failover)',
        ],
      },
      {
        number: 4,
        title: 'IP Services, Security Fundamentals & Automation',
        duration: '15 Hours',
        topics: [
          'Configuring Inside Source NAT and PAT (Port Address Translation)',
          'Configuring Standard & Extended IPv4 Access Control Lists (ACLs)',
          'DHCP, DNS, NTP, SNMPv2/v3, and Syslog Configuration',
          'Switch Security: Port Security, DHCP Snooping, Dynamic ARP Inspection (DAI)',
          'Network Automation: Cisco DNA Center, REST APIs, JSON, and Ansible Basics',
          'Full CCNA Mock Exam Drills & Performance Analysis',
        ],
      },
    ],
    targetAudience: [
      'Network support engineers, desktop support technicians, and system administrators.',
      'Fresh engineering and BCA/BSc Computer Science graduates seeking core IT networking careers.',
      'Cybersecurity and Cloud engineers needing solid foundational networking mastery.',
    ],
    faqs: [
      {
        question: 'Are physical routers and switches available for practice?',
        answer: 'Yes! Our Coimbatore campus features a dedicated hardware networking lab with real Cisco routers and switches for patch cabling and physical console configuration, supplemented by Cisco Packet Tracer.',
      },
      {
        question: 'Do I need a strong math or coding background for CCNA?',
        answer: 'No coding is required. Subnetting requires basic addition and multiplication, which our trainers teach through intuitive shortcut methods within the first week.',
      },
      {
        question: 'Where can I take the CCNA 200-301 exam in Coimbatore?',
        answer: 'CCNA is proctored by Pearson VUE. You can take it at authorized Pearson test centers in Coimbatore or take it online with remote proctoring.',
      },
      {
        question: 'What job roles can I apply for after CCNA certification?',
        answer: 'You can apply for roles such as Network Administrator, Network Support Engineer, L1 NOC Engineer, Technical Support Specialist, and Infrastructure Engineer.',
      },
    ],
  },

  'professional-certifications': {
    id: 'prof-certs',
    slug: '/courses/professional-certifications',
    categoryId: 'global-certifications',
    categoryTitle: 'Global Certification Support',
    title: 'Professional Certifications (PMP, ITIL 4, CSM) in Coimbatore',
    shortTitle: 'Professional Certifications',
    badge: 'Executive Leadership Track',
    tagline: 'Accelerate Your Leadership Career with Globally Recognized Project & Agile Certifications',
    overview: [
      'Senior IT and enterprise leadership positions demand recognized credentials. CloudSwan offers comprehensive certification training for Project Management Professional (PMP)®, ITIL® 4 Foundation, and Certified ScrumMaster (CSM)®.',
      'Our programs are led by certified PMP and Agile coaches with 15+ years of corporate experience, providing authorized PDUs, application audit guidance, and 1,000+ realistic scenario practice questions.',
    ],
    specs: {
      duration: '4 - 6 Weeks (35 - 45 Hours)',
      mode: 'Executive Weekend Classroom & Live Interactive Online',
      level: 'Mid to Senior Career Professionals',
      batchTimings: 'Saturday & Sunday Executive Batches',
      certification: 'Official 35 Contact Hours (PDU) Certificate + Exam Prep',
      practicalHours: 'Realistic Scenario-Based Case Studies & Mock Exams',
    },
    highlights: [
      'Aligned with PMI PMBOK® Guide 7th Edition & Process Groups Practice Guide',
      'Authorized 35 Contact Hours / PDUs Certificate issued upon completion',
      '1:1 Application Submission & Audit Support by experienced PMP mentors',
      'Bank of 1,200+ high-quality situational and agile exam questions',
      'Covers Predictive, Adaptive (Agile), and Hybrid project management methodologies',
    ],
    outcomes: [
      'Clear PMP, ITIL 4 Foundation, or Scrum Master exams on your 1st attempt.',
      'Lead complex cross-functional enterprise projects delivering measurable business value.',
      'Master Agile frameworks, Scrum ceremonies, sprint planning, and backlog refinement.',
      'Command salary hikes of 25-40% in leadership and program manager roles.',
    ],
    modules: [
      {
        number: 1,
        title: 'People: Leading High-Performance Teams',
        duration: '12 Hours',
        topics: [
          'Building and Nurturing a High-Performing Project Team',
          'Leading Virtual and Cross-Cultural Global Teams',
          'Conflict Management Frameworks and Negotiation Strategies',
          'Servant Leadership, Emotional Intelligence & Team Motivation Models',
        ],
      },
      {
        number: 2,
        title: 'Process: Managing Project Rigor & Delivery',
        duration: '14 Hours',
        topics: [
          'Project Chartering, Scope Management & Work Breakdown Structure (WBS)',
          'Schedule & Cost Management: Critical Path Method (CPM) & Earned Value (EVM)',
          'Quality Standards, Risk Management (Qualitative & Quantitative Analysis)',
          'Procurement Management, Vendor Contracts (Fixed Price, Time & Material)',
        ],
      },
      {
        number: 3,
        title: 'Business Environment & Agile Frameworks',
        duration: '10 Hours',
        topics: [
          'Project Compliance, Governance, and Business Value Delivery',
          'Agile Methodologies: Scrum, Kanban, Extreme Programming (XP), Scaled Agile (SAFe)',
          'Sprint Ceremonies: Daily Standup, Sprint Planning, Review & Retrospective',
          'Agile Artifacts: Product Backlog, Sprint Backlog, Burndown & Burnup Charts',
        ],
      },
      {
        number: 4,
        title: 'Application Audit Support & Full Mock Exam Drills',
        duration: '9 Hours',
        topics: [
          '1:1 Review and Drafting of Your Official PMI Exam Application Descriptions',
          'Three Full-Length 180-Question Timed Mock Exams (230 mins each)',
          'Detailed Answer Explanation Analysis & Mindset Calibration',
          'Final Exam Day Strategy, Time Management & Stress Reduction',
        ],
      },
    ],
    targetAudience: [
      'Project Managers, Delivery Managers, Team Leads, and Scrum Masters.',
      'Engineers and consultants with 3+ years of experience aiming for management roles.',
      'Directors and operations heads seeking globally verified credentials.',
    ],
    faqs: [
      {
        question: 'Do you provide the mandatory 35 Contact Hours (PDU) certificate?',
        answer: 'Yes! Upon course completion, you will receive our recognized 35 Contact Hours certificate, satisfying PMI’s prerequisite for sitting the PMP examination.',
      },
      {
        question: 'Will you help if my PMP application gets selected for an audit?',
        answer: 'Yes! We guide you step-by-step through drafting your project descriptions to minimize audit risk, and provide full documentation support if an audit occurs.',
      },
      {
        question: 'Is the course based on PMBOK 7th Edition?',
        answer: 'Yes, our training incorporates PMBOK 7th Edition principles, the Process Groups Practice Guide, and the Agile Practice Guide (covering 50% predictive and 50% agile/hybrid questions).',
      },
      {
        question: 'Can I attend weekend-only classes?',
        answer: 'Yes, this program is designed specifically for working professionals and is held on Saturdays and Sundays (4 hours per day).',
      },
    ],
  },

  'certification-exam-prep': {
    id: 'exam-prep',
    slug: '/courses/certification-exam-prep',
    categoryId: 'global-certifications',
    categoryTitle: 'Global Certification Support',
    title: 'Certification Exam Preparation & Pearson VUE Mock Drill in Coimbatore',
    shortTitle: 'Certification Exam Prep',
    badge: 'Guaranteed Exam Readiness',
    tagline: 'Targeted Mock Tests, Question Banks & Voucher Assistance for 100% First-Time Pass',
    overview: [
      'Preparing to take an official certification exam from AWS, Microsoft, Cisco, Google, or CompTIA? CloudSwan’s dedicated Certification Exam Prep and Pearson VUE Mock Drill bootcamp in Coimbatore eliminates exam anxiety and closes knowledge gaps.',
      'Our exam lab provides authentic testing engines with timed conditions, question elimination strategies, proctoring guidelines, and personalized diagnostic score evaluations.',
    ],
    specs: {
      duration: '2 - 4 Weeks (Intensive Bootcamp)',
      mode: 'Classroom Test Center Lab & Online Exam Engine',
      level: 'All Certification Candidates',
      batchTimings: 'Flexible Slot Bookings & Weekend Fast-Tracks',
      certification: 'CloudSwan Exam Readiness Verified Certificate',
      practicalHours: '100% Computer-Based Timed Mock Testing',
    },
    highlights: [
      'Realistic simulation of Pearson VUE, Webassessor & Kryterion exam interfaces',
      'Large pool of verified scenario-based questions with in-depth rationales',
      'Diagnostic gap analysis identifying weak knowledge areas for quick revision',
      'Time management and multiple-choice elimination techniques',
      '1:1 mentoring review with certified practitioners before your actual test date',
    ],
    outcomes: [
      'Achieve 90%+ confidence before booking and sitting your official certification test.',
      'Master rapid answer elimination on confusing and multi-layered scenario questions.',
      'Manage exam pressure and pacing to ensure all questions and case studies are answered.',
      'Receive official voucher booking guidance and verified test date confirmation.',
    ],
    modules: [
      {
        number: 1,
        title: 'Diagnostic Assessment & Knowledge Gap Mapping',
        duration: '6 Hours',
        topics: [
          'Initial Baseline Mock Test across all Exam Blueprint Domains',
          'Personalized Domain-by-Domain Score Breakdown (Strengths vs. Weaknesses)',
          'Customized 14-Day Revision Roadmap targeting Low-Scoring Topics',
        ],
      },
      {
        number: 2,
        title: 'Deconstructing Scenario-Based Questions',
        duration: '8 Hours',
        topics: [
          'Identifying Keywords: "Most Cost-Effective", "Least Operational Overhead", "Most Resilient"',
          'The Rule of Elimination: Spotting Distractors and Infeasible Architectural Choices',
          'Handling Multi-Select (Choose 2 or 3) and Hotspot/Drag-and-Drop Formats',
        ],
      },
      {
        number: 3,
        title: 'High-Stakes Timed Exam Simulations',
        duration: '10 Hours',
        topics: [
          'Five Full-Length Timed Mock Tests under Strict Test-Center Conditions',
          'Pacing Strategies: Flagging Questions for Review vs. First-Pass Elimination',
          'Case Study Management: Skimming Requirements, Architecture Constraints & Solutions',
        ],
      },
      {
        number: 4,
        title: 'Test-Day Protocol & Proctoring Procedures',
        duration: '6 Hours',
        topics: [
          'Test Center Check-in Guidelines, ID Requirements & Permitted Items',
          'Online Remote Proctoring (OnVUE) Room Scans, System Checks & Network Stability',
          'Post-Exam Score Verification, Digital Badge Claiming on Credly & LinkedIn Showcase',
        ],
      },
    ],
    targetAudience: [
      'Candidates preparing for AWS, Azure, GCP, Cisco CCNA, or CompTIA exams.',
      'Students who have completed self-study and want validated exam-readiness.',
      'Professionals who have previously failed an exam and need targeted retake coaching.',
    ],
    faqs: [
      {
        question: 'Which certifications does this exam prep bootcamp support?',
        answer: 'We support all major IT certifications including AWS (Cloud Practitioner, Solutions Architect, Developer), Microsoft Azure (AZ-900, AZ-104), Cisco CCNA, Google Cloud ACE, and CompTIA Security+.',
      },
      {
        question: 'What if I don’t score high enough on the mock tests?',
        answer: 'You receive unlimited access to our exam simulator and 1-on-1 revision sessions until your scores reach 85%+ consistently before you book your official exam.',
      },
      {
        question: 'Can I take the mock tests from home?',
        answer: 'Yes, our testing platform is accessible on any browser, allowing you to practice from home or at our Coimbatore campus test labs.',
      },
      {
        question: 'Do you help with exam booking and discount coupons?',
        answer: 'Yes, we assist you with scheduling your slot at Pearson VUE centers in Coimbatore and alert you to any current vendor discounts or free exam challenge vouchers.',
      },
    ],
  },

  // ==========================================
  // 3. GENERAL TRAINING
  // ==========================================
  'soft-skills': {
    id: 'soft-skills',
    slug: '/courses/soft-skills',
    categoryId: 'general-training',
    categoryTitle: 'General Training',
    title: 'Soft Skills Training in Coimbatore',
    shortTitle: 'Soft Skills Training',
    badge: 'Campus-to-Corporate Ready',
    tagline: 'Develop Essential Interpersonal Skills, Professional Etiquette & Emotional Intelligence',
    overview: [
      'Technical skills will get you an interview; soft skills will get you hired and promoted. CloudSwan’s Soft Skills Training in Coimbatore is a dynamic, practical program designed to mold students and professionals into polished corporate contributors.',
      'Through experiential activities, situational role-plays, workplace etiquette drills, and emotional intelligence coaching, our trainers build the personal attributes essential for modern workplace success.',
    ],
    specs: {
      duration: '4 Weeks (25 Hours)',
      mode: 'Interactive Classroom Workshops & Online Formats',
      level: 'Students & Working Professionals',
      batchTimings: 'Morning, Evening & Weekend Batches',
      certification: 'CloudSwan Professional Soft Skills Certificate',
      practicalHours: '75% Experiential Activities & Group Exercises',
    },
    highlights: [
      'Emotional Intelligence (EQ), Self-Awareness & Empathy in the Workplace',
      'Time Management, Prioritization (Eisenhower Matrix) & Goal Setting',
      'Interpersonal Communication, Active Listening & Constructive Feedback',
      'Corporate Etiquette, Professional Dress Code & Virtual Meeting Grooming',
      'Adaptability, Growth Mindset & Stress Management Techniques',
    ],
    outcomes: [
      'Interact confidently and respectfully with colleagues, clients, and leadership.',
      'Manage tight deadlines and competing workplace priorities with ease.',
      'Resolve conflicts constructively using emotional intelligence and empathy.',
      'Project a polished, professional image in in-person and remote workplace environments.',
    ],
    modules: [
      {
        number: 1,
        title: 'Interpersonal Communication & Active Listening',
        duration: '7 Hours',
        topics: [
          'Verbal vs. Non-Verbal Communication: Body Language, Eye Contact & Posture',
          'The 7 Cs of Effective Business Communication',
          'Empathetic Listening: Listening to Understand Rather Than to Reply',
          'Asking the Right Questions: Open-Ended vs. Probing vs. Clarifying',
        ],
      },
      {
        number: 2,
        title: 'Time Management, Prioritization & Productivity',
        duration: '6 Hours',
        topics: [
          'The Eisenhower Matrix: Urgent vs. Important Work Prioritization',
          'Eliminating Procrastination: Pomodoro Technique & Time Blocking',
          'Setting SMART Goals (Specific, Measurable, Achievable, Relevant, Time-bound)',
          'Managing Workplace Stress, Burnout & Work-Life Balance',
        ],
      },
      {
        number: 3,
        title: 'Emotional Intelligence (EQ) & Team Dynamics',
        duration: '6 Hours',
        topics: [
          'Understanding EQ: Self-Awareness, Self-Regulation, Motivation & Empathy',
          'Collaboration in Diverse, Cross-Functional & Hybrid Teams',
          'Constructive Criticism: The Feedback Sandwich vs. Radical Candor',
          'Conflict Resolution Styles: Competing, Collaborating, Compromising',
        ],
      },
      {
        number: 4,
        title: 'Corporate Etiquette & Professional Grooming',
        duration: '6 Hours',
        topics: [
          'Professional Grooming, Dressing Standards (Formal, Business Casual, Casual Friday)',
          'Dining Etiquette, Networking Skills & Handshake Confidence',
          'Virtual Meeting Etiquette (Camera, Mute, Backgrounds & Chat Protocol)',
          'Digital Footprint Management: LinkedIn Etiquette & Online Professionalism',
        ],
      },
    ],
    targetAudience: [
      'Final-year college students preparing for corporate campus placements.',
      'Junior engineers and associates seeking to improve team collaboration.',
      'Anyone who wants to build stronger interpersonal rapport in social and work spheres.',
    ],
    faqs: [
      {
        question: 'Why is soft skills training important for IT graduates?',
        answer: 'MNC recruiters evaluate candidates on cultural fit, adaptability, and teamwork just as heavily as coding skills. Candidates with strong soft skills consistently clear HR rounds and progress faster.',
      },
      {
        question: 'Are activities conducted in groups?',
        answer: 'Yes! Classes involve paired exercises, group problem-solving games, debate circles, and scenario role-plays to develop real interpersonal confidence.',
      },
      {
        question: 'Can this course be combined with technical training?',
        answer: 'Yes, many of our students take Soft Skills concurrently with IT courses such as Full Stack, Python, or Cloud Computing.',
      },
      {
        question: 'Is a certificate provided?',
        answer: 'Yes, a recognized Professional Soft Skills Training Certificate is awarded upon successful completion.',
      },
    ],
  },

  'aptitude-training': {
    id: 'aptitude',
    slug: '/courses/aptitude-training',
    categoryId: 'general-training',
    categoryTitle: 'General Training',
    title: 'Aptitude & Logical Reasoning Training in Coimbatore',
    shortTitle: 'Aptitude & Reasoning Prep',
    badge: 'MNC Campus Placement Track',
    tagline: 'Crack MNC Placement Tests, Banking, IT Campus Drives & Competitive Exams',
    overview: [
      'The preliminary aptitude round is the biggest filter in MNC campus recruitment drives (TCS, Infosys, Cognizant, Wipro, Accenture, Zoho). CloudSwan’s Aptitude Training in Coimbatore teaches shortcut calculation techniques, mental math, and structured logical deduction.',
      'Our seasoned aptitude trainers break down complex Quantitative, Logical Reasoning, and Data Interpretation problems into simple, repeatable formulas that help you solve questions in under 45 seconds.',
    ],
    specs: {
      duration: '4 - 6 Weeks (40 Hours)',
      mode: 'Classroom Speed Labs & Online Practice Portal',
      level: 'College Students & Placement Aspirants',
      batchTimings: 'Morning, Evening & Weekend Batches',
      certification: 'CloudSwan Aptitude Proficiency Scorecard',
      practicalHours: '50+ Speed-Math Drills & 25 Timed Company Mock Tests',
    },
    highlights: [
      'Vedic Math & Mental Calculation Shortcuts to solve in under 40 seconds',
      'Company-Specific Question Bank (TCS NQT, Infosys, Zoho, Accenture, Wipro)',
      'Extensive Coverage of Quantitative Aptitude, Logical & Verbal Reasoning',
      'Online Timed Test Series with Detailed Step-by-Step Explanations',
      'Daily Problem-Solving Sprints with Direct Trainer Doubt Clearing',
    ],
    outcomes: [
      'Clear the initial aptitude screening round for any top-tier MNC placement drive.',
      'Solve quantitative questions 3x faster without relying on scrap-paper calculations.',
      'Master seating arrangements, syllogisms, and coding-decoding puzzles with ease.',
      'Analyze complex charts and tables in Data Interpretation within minutes.',
    ],
    modules: [
      {
        number: 1,
        title: 'Quantitative Aptitude - Arithmetic & Algebra',
        duration: '14 Hours',
        topics: [
          'Vedic Math Techniques: Fast Multiplication, Squaring & Percentage Shortcuts',
          'Percentages, Profit & Loss, Simple and Compound Interest',
          'Time & Work, Pipes and Cisterns, Work Sharing Principles',
          'Time, Speed & Distance, Relative Speed, Trains, Boats & Streams',
          'Ratios, Proportions, Mixtures, Alligations & Averages',
        ],
      },
      {
        number: 2,
        title: 'Quantitative Aptitude - Advanced & Modern Math',
        duration: '10 Hours',
        topics: [
          'Number Systems, Divisibility Rules, LCM & HCF Applications',
          'Permutations and Combinations (P&C) Fundamentals & Shortcuts',
          'Probability: Coin, Dice, Card & Ball Problems',
          'Geometry, Mensuration (2D & 3D Area and Volume)',
        ],
      },
      {
        number: 3,
        title: 'Logical & Analytical Reasoning',
        duration: '10 Hours',
        topics: [
          'Linear & Circular Seating Arrangements, Floor-Based Puzzles',
          'Syllogisms (Venn Diagram Method & 100/50 Rules)',
          'Blood Relations, Family Trees & Coded Relations',
          'Direction Sense Test, Coding-Decoding, Series Completion',
          'Statement and Assumptions, Conclusions & Inferences',
        ],
      },
      {
        number: 4,
        title: 'Data Interpretation (DI) & Company Mock Tests',
        duration: '6 Hours',
        topics: [
          'Tables, Bar Charts, Line Graphs, Pie Charts & Caselet DI',
          'Approximation & Calculation Shortcuts for Heavy Data Sets',
          'TCS NQT, Infosys, and Zoho Specific Model Test Simulations',
          'Time Management Strategies for Negative-Marking Exams',
        ],
      },
    ],
    targetAudience: [
      'Engineering and Arts/Science students preparing for campus recruitment drives.',
      'Candidates preparing for TCS NQT, Cognizant GenC, Infosys, Accenture, or Zoho exams.',
      'Graduates preparing for Bank PO/Clerk, SSC CGL, or MBA entrance tests (CAT/MAT/TANCET).',
    ],
    faqs: [
      {
        question: 'How do you help students who are weak in mathematics?',
        answer: 'We start from foundational Vedic math shortcuts and school-level fundamentals, demonstrating visual and logical methods to solve problems without memorizing heavy formulas.',
      },
      {
        question: 'Are online mock tests included?',
        answer: 'Yes! You get access to our online testing portal with 25+ full-length company-specific mock tests with automated timers and detailed solutions.',
      },
      {
        question: 'Do you cover questions for Zoho and TCS specifically?',
        answer: 'Yes, our question banks include recent past papers and repeated patterns specifically mapped to TCS NQT, Zoho Advanced Aptitude, Infosys, and Accenture.',
      },
      {
        question: 'Can I take this course during college vacation / semester breaks?',
        answer: 'Yes! We run fast-track vacation bootcamps (2-3 weeks, 3 hours daily) as well as regular weekend batches throughout the semester.',
      },
    ],
  },

  'personality-development': {
    id: 'personality-dev',
    slug: '/courses/personality-development',
    categoryId: 'general-training',
    categoryTitle: 'General Training',
    title: 'Personality Development & Grooming in Coimbatore',
    shortTitle: 'Personality Development',
    badge: 'Confidence & Charisma',
    tagline: 'Build a Magnetic Personality, Positive Mindset & Professional Corporate Presence',
    overview: [
      'True charisma and confidence can be systematically cultivated. CloudSwan’s Personality Development Course in Coimbatore helps individuals unlock their full potential by overcoming self-doubt, building positive habits, and mastering social dynamics.',
      'Our holistic curriculum spans mindset coaching, voice modulation, public speaking, executive grooming, posture correction, and body language to ensure you project quiet confidence in every room you enter.',
    ],
    specs: {
      duration: '4 Weeks (24 Hours)',
      mode: 'Classroom Practical Sessions & Interactive Seminars',
      level: 'All Age Groups & Backgrounds',
      batchTimings: 'Weekday Evenings & Weekend Batches',
      certification: 'CloudSwan Certificate in Personality & Leadership Grooming',
      practicalHours: '80% Mirror Practice, Role-Plays & Video Feedback',
    },
    highlights: [
      'Mindset Transformation: Overcoming Inferiority Complex & Self-Doubt',
      'Posture, Walk, Hand Gestures & Non-Verbal Body Language Mastery',
      'Vocal Tonality, Pitch Control, Resonance & Speech Modulation',
      'Wardrobe Styling, Corporate Grooming & Personal Hygiene Standards',
      'Social Etiquette, Art of Small Talk & Magnetic Networking',
    ],
    outcomes: [
      'Develop genuine inner self-confidence that naturally radiates in outward interactions.',
      'Master body language that commands respect without being aggressive.',
      'Speak with a resonant, well-paced voice that holds people’s attention.',
      'Navigate social gatherings, networking events, and formal dinners effortlessly.',
    ],
    modules: [
      {
        number: 1,
        title: 'Self-Discovery, Mindset & Overcoming Insecurities',
        duration: '6 Hours',
        topics: [
          'Johari Window & SWOT Analysis: Uncovering Blind Spots & Core Strengths',
          'Eliminating Limiting Beliefs, Negative Self-Talk & Imposter Syndrome',
          'Cultivating an Optimistic, Resilient & Growth-Oriented Mindset',
          'Goal Setting Frameworks: Vision Boards & Daily Habit Architecture',
        ],
      },
      {
        number: 2,
        title: 'Body Language, Posture & Executive Grooming',
        duration: '6 Hours',
        topics: [
          'Power Postures: Standing, Sitting & Walking with Confident Elegance',
          'The Science of Eye Contact, Warm Smiles & Authoritative Hand Gestures',
          'Personal Grooming Essentials: Haircare, Skin, Fragrance & Wardrobe Selection',
          'Color Psychology in Dressing: Choosing Clothes for Interviews & Events',
        ],
      },
      {
        number: 3,
        title: 'Voice Modulation, Presence & Conversational Charm',
        duration: '6 Hours',
        topics: [
          'Diaphragmatic Breathing & Vocal Warm-ups for Deep, Confident Tone',
          'Controlling Speech Pace, Pitch, Pauses & Intonation for Impact',
          'The Art of Compelling Storytelling: Hooks, Drama & Takeaways',
          'The Art of Small Talk: Breaking the Ice with Strangers Effortlessly',
        ],
      },
      {
        number: 4,
        title: 'Social Etiquette, Dining & Professional Networking',
        duration: '6 Hours',
        topics: [
          'Formal Dining Etiquette: Cutlery Usage, Napkin Rules & Table Manners',
          'Networking Mastery: Introducing Yourself, Exchanging Contacts & Follow-ups',
          'Handling Awkward Social Situations, Gracefully Exiting Conversations',
          'Final Transformation Showcase: Video Recording & 360-Degree Feedback',
        ],
      },
    ],
    targetAudience: [
      'College graduates transitioning into competitive corporate careers.',
      'Professionals aiming for promotions, client-facing roles, or managerial visibility.',
      'Anyone desiring greater self-assurance, better grooming, and social presence.',
    ],
    faqs: [
      {
        question: 'Can personality really be changed through training?',
        answer: 'Yes! Personality development is not about changing who you are; it is about learning specific, actionable behaviors—such as posture, vocal delivery, active listening, and grooming—that instantly transform how you perceive yourself and how others perceive you.',
      },
      {
        question: 'Are practical mirror and video sessions conducted?',
        answer: 'Yes! We record before-and-after video sessions of your walk, talk, and body language so you can objectively see your progress and refine your delivery.',
      },
      {
        question: 'Is the training open for all age groups?',
        answer: 'Yes, our participants range from college students (aged 18+) to working professionals, entrepreneurs, and homemakers.',
      },
      {
        question: 'Are sessions held in small batches?',
        answer: 'Yes, batches are restricted to 8-10 participants to allow our image consultant to give personalized feedback to everyone.',
      },
    ],
  },

  'leadership-training': {
    id: 'leadership',
    slug: '/courses/leadership-training',
    categoryId: 'general-training',
    categoryTitle: 'General Training',
    title: 'Leadership & Management Training in Coimbatore',
    shortTitle: 'Leadership Training',
    badge: 'Management Excellence Track',
    tagline: 'Transform into an Inspiring Leader, Strategic Decision Maker & High-Impact Manager',
    overview: [
      'Great leaders are made, not born. CloudSwan’s Leadership & Management Training in Coimbatore equips emerging leads, department heads, and business owners with the strategic frameworks required to inspire teams, drive accountability, and navigate complex organizational changes.',
      'Learn situational leadership, decision-making under uncertainty, delegation without micromanagement, conflict diplomacy, and vision alignment from experienced industry CXOs.',
    ],
    specs: {
      duration: '4 - 6 Weeks (30 Hours)',
      mode: 'Executive Classroom Seminars & Online Workshops',
      level: 'Team Leads, Managers & Entrepreneurs',
      batchTimings: 'Weekend Executive Masterclasses',
      certification: 'CloudSwan Certified Leadership Professional',
      practicalHours: 'Case Study Discussions & Real Leadership Simulations',
    },
    highlights: [
      'Situational Leadership: Adapting Leadership Style to Team Maturity',
      'Mastering Effective Delegation without Micromanagement or Blind Trust',
      'Data-Driven Decision Making & Strategic Problem Solving Under Pressure',
      'Motivating Teams, Retaining Talent & Building a High-Performance Culture',
      'Change Management Frameworks: Leading Organizations Through Disruption',
    ],
    outcomes: [
      'Lead with strategic clarity, inspiring loyalty and high performance.',
      'Delegate high-impact tasks effectively while retaining strategic oversight.',
      'Handle underperforming employees with empathetic yet firm performance coaching.',
      'Communicate corporate vision compellingly to cross-functional stakeholders.',
    ],
    modules: [
      {
        number: 1,
        title: 'Modern Leadership Frameworks & Self-Leadership',
        duration: '8 Hours',
        topics: [
          'Management vs. Leadership: Shifting from Execution to Visionary Guidance',
          'Situational Leadership II (Directing, Coaching, Supporting, Delegating)',
          'Leading with Authenticity, Integrity & Emotional Intelligence (EQ)',
          'Developing Self-Discipline, Resilience, and Mental Toughness as a Leader',
        ],
      },
      {
        number: 2,
        title: 'Team Building, Delegation & High-Performance Culture',
        duration: '8 Hours',
        topics: [
          'Tuckman’s Stages of Team Development: Forming, Storming, Norming, Performing',
          'The 5 Levels of Delegation: Empowering Team Members Safely',
          'Setting Clear OKRs (Objectives & Key Results) and KPIs that Drive Results',
          'Creating Psychological Safety and Fostering Innovation in Teams',
        ],
      },
      {
        number: 3,
        title: 'Strategic Decision-Making & Conflict Diplomacy',
        duration: '7 Hours',
        topics: [
          'Decision-Making Frameworks: Root Cause Analysis, 6 Thinking Hats, SWOT',
          'Managing High-Stress Workplace Conflicts Between High Performers',
          'Delivering Tough Performance Feedback without Demoralizing Employees',
          'Crisis Management and Leading Teams Through Turbulent Organizational Times',
        ],
      },
      {
        number: 4,
        title: 'Executive Presence, Vision & Change Leadership',
        duration: '7 Hours',
        topics: [
          'Communicating Corporate Vision Compellingly to Internal & External Audiences',
          'Kotter’s 8-Step Change Management Model in Practice',
          'Stakeholder Influence & Upward Management: Aligning with Senior Executives',
          'Personal Leadership Philosophy Capstone Presentation',
        ],
      },
    ],
    targetAudience: [
      'Newly promoted Team Leads and Engineering Managers.',
      'Mid-level managers seeking to advance into Senior Management and Director roles.',
      'Startup founders and business owners managing rapidly growing teams.',
    ],
    faqs: [
      {
        question: 'Who conducts the leadership training sessions?',
        answer: 'Sessions are led by seasoned corporate executives and certified leadership coaches with senior management backgrounds in tier-1 MNCs.',
      },
      {
        question: 'Is this training theoretical or based on real workplace scenarios?',
        answer: 'The program is intensely practical. Every module centers around Harvard Business School-style case studies, peer simulations, and resolving actual workplace challenges faced by attendees.',
      },
      {
        question: 'What are the batch timings for working professionals?',
        answer: 'Masterclasses take place on Saturdays and Sundays (3 hours per session) to fit into executive schedules.',
      },
      {
        question: 'Do you offer customized leadership tracks for corporate clients?',
        answer: 'Yes, we design and deliver tailored in-house corporate leadership bootcamps for enterprise teams across Coimbatore and Tamil Nadu.',
      },
    ],
  },

  'corporate-training': {
    id: 'corporate-training',
    slug: '/courses/corporate-training',
    categoryId: 'general-training',
    categoryTitle: 'General Training',
    title: 'Corporate Training & Workforce Upskilling in Coimbatore',
    shortTitle: 'Corporate Training Solutions',
    badge: 'Enterprise Upskilling Partner',
    tagline: 'Tailored Upskilling Programs for IT Companies, Startups & Educational Institutions',
    overview: [
      'Bridge the industry talent gap with CloudSwan’s customized Corporate Training Solutions. We partner with IT enterprises, manufacturing leaders, and colleges to train fresh hires, upskill mid-level engineers, and enhance productivity.',
      'From Full Stack, Cloud, DevOps, and AI to Business Communication, Agile Transformation, and Leadership, our corporate programs are tailored to your company’s precise technology stack and business goals.',
    ],
    specs: {
      duration: 'Flexible (1-Day Workshops to 3-Month Bootcamps)',
      mode: 'On-Premise Corporate Campus, CloudSwan Labs & Hybrid',
      level: 'Customized for Fresher Batches, Mid-Level & Leadership',
      batchTimings: 'Customized to Corporate Work Shifts',
      certification: 'Enterprise Verified Competency Completion Certification',
      practicalHours: '100% Client-Specific Production Projects & Case Studies',
    },
    highlights: [
      'Customized Curriculum Tailored to Your Internal Tech Stack and Workflows',
      'Training Needs Analysis (TNA) to Pinpoint Skill Deficits Before Deployment',
      'Hands-On Capstone Projects Built on Your Company’s Real-World Architecture',
      'Daily Progress Tracking, Code Reviews & Comprehensive Milestone Assessments',
      'Post-Training Support, Refresher Sessions & ROI Performance Metrics',
    ],
    outcomes: [
      'Reduce fresher onboarding and project-readiness time from 6 months to 6 weeks.',
      'Upskill existing engineering teams to modern cloud-native and AI architectures.',
      'Enhance inter-team communication, client-facing etiquette, and agile delivery.',
      'Boost team productivity, employee retention, and project delivery velocity.',
    ],
    modules: [
      {
        number: 1,
        title: 'Training Needs Analysis (TNA) & Curriculum Design',
        duration: 'Phase 1',
        topics: [
          'Pre-Training Skill Assessment of Participants to Benchmark Competency',
          'Alignment with Engineering Managers on Tech Stack, Versioning & Libraries',
          'Designing Modular Syllabi with Milestones, Quizzes & Capstone Requirements',
          'Setting Clear Evaluation Rubrics & Weekly Deliverable Milestones',
        ],
      },
      {
        number: 2,
        title: 'Intensive Practical Delivery & Code Sprints',
        duration: 'Phase 2',
        topics: [
          'Hands-On Live Coding, Sandbox Labs & Real-World Best Practices',
          'Industry Standards: Clean Code, Git Workflows, Unit Testing & CI/CD',
          'Pair Programming, Daily Standups & Continuous Trainer Guidance',
          'Weekly Mini-Projects Simulating Actual Client Ticket Deliverables',
        ],
      },
      {
        number: 3,
        title: 'Capstone Project Execution on Company Tech Stack',
        duration: 'Phase 3',
        topics: [
          'Developing End-to-End Production Applications in Squad Formats',
          'Code Reviews by Senior CloudSwan Architects Aligned with Corporate Quality Gates',
          'Stress Testing, Security Best Practices & Deployment to Sandbox Environments',
          'Project Demos & Technical Presentations to Engineering Leadership',
        ],
      },
      {
        number: 4,
        title: 'Post-Training Assessment, Reporting & Handover',
        duration: 'Phase 4',
        topics: [
          'Individual Trainee Performance Scorecards across Technical & Soft Competencies',
          'Ranking and Recommendations for Project Allocation (L1, L2, Lead Potential)',
          'Executive Summary Report on Training ROI and Knowledge Retention',
          '30-Day Post-Training Mentor Q&A Support for Smooth Project Transition',
        ],
      },
    ],
    targetAudience: [
      'IT Services, SaaS, and Product companies onboarding fresher campus cohorts.',
      'Enterprises transitioning legacy monolith applications to Modern Cloud & DevOps.',
      'Engineering colleges seeking campus-to-corporate finishing school programs.',
    ],
    faqs: [
      {
        question: 'Can you customize the training to our company’s proprietary tech stack?',
        answer: 'Yes! We conduct a thorough Training Needs Analysis with your technical leads and adapt frameworks, tools, coding guidelines, and mock projects to match your production environment.',
      },
      {
        question: 'Do you deliver training on-site at our Coimbatore office?',
        answer: 'Yes, our certified corporate trainers can conduct on-premise sessions at your corporate office, at our dedicated IT labs in Gandhipuram and Saravanampatti, or through interactive hybrid virtual models.',
      },
      {
        question: 'What domains can you cover for corporate teams?',
        answer: 'We deliver corporate programs across Full Stack (React, Node, Java, .NET, Python), Cloud (AWS, Azure, GCP), DevOps, Data Science, AI/ML, Cyber Security, Soft Skills, and Agile Leadership.',
      },
      {
        question: 'How do you measure trainee progress and readiness?',
        answer: 'We provide weekly automated assessment reports, code quality metrics, attendance logs, and a final capstone project scorecard evaluated by senior architects.',
      },
    ],
  },

  'basic-computer-skills': {
    id: 'basic-computers',
    slug: '/courses/basic-computer-skills',
    categoryId: 'general-training',
    categoryTitle: 'General Training',
    title: 'Basic Computer Skills & MS Office Course in Coimbatore',
    shortTitle: 'Basic Computer Skills',
    badge: '100% Hands-On Practical',
    tagline: 'Master Computer Fundamentals, Windows OS, Microsoft Office & Internet Proficiency',
    overview: [
      'Digital literacy is essential for modern education and workplace efficiency. CloudSwan’s Basic Computer Skills Course in Coimbatore is designed for beginners, school/college students, job seekers, and office staff.',
      'Learn in modern computer labs with step-by-step guidance on Windows OS, touch typing, Microsoft Word, Excel, PowerPoint, professional email drafting, and online safety.',
    ],
    specs: {
      duration: '4 - 6 Weeks (30 Hours)',
      mode: '100% Hands-On Practical Lab Sessions',
      level: 'Absolute Beginners to Intermediate',
      batchTimings: 'Morning, Afternoon & Evening Batches',
      certification: 'CloudSwan Certified Digital Literacy & MS Office Certificate',
      practicalHours: 'Daily 1:1 Dedicated Computer Lab Practice',
    },
    highlights: [
      '100% Practical Training with Individual Dedicated Computer Systems',
      'Windows 11 Fundamentals, File & Folder Management, Keyboard Shortcuts',
      'Microsoft Office Mastery: Word, Excel Formulas, PowerPoint Presentations',
      'English & Tamil Touch Typing Speed Training',
      'Internet Basics, Online Banking, Safe Browsing & Government Portal Navigation',
    ],
    outcomes: [
      'Operate any desktop or laptop computer with ease and speed.',
      'Create formatted documents, resumes, and formal letters in Microsoft Word.',
      'Perform data entry, budgeting, and automated calculations in Microsoft Excel.',
      'Design clean, attractive slide presentations in Microsoft PowerPoint.',
      'Send professional emails, manage attachments, and safely navigate the web.',
    ],
    modules: [
      {
        number: 1,
        title: 'Computer Fundamentals, Windows 11 & Typing Speed',
        duration: '7 Hours',
        topics: [
          'Understanding Hardware: CPU, Monitor, RAM, SSD, USB & External Drives',
          'Windows 11 Navigation, Start Menu, Control Panel & Settings',
          'File and Folder Organization: Creating, Moving, Renaming, Zipping & Backups',
          'Touch Typing Techniques: Finger Placement Drills to Achieve 25+ WPM Speed',
          'Using Essential Windows Tools: Paint, Notepad, Snipping Tool, Calculator',
        ],
      },
      {
        number: 2,
        title: 'Microsoft Word (MS Word) Mastery',
        duration: '8 Hours',
        topics: [
          'Document Creation: Formatting Fonts, Paragraphs, Spacing & Margins',
          'Inserting Tables, Images, Shapes, Page Borders & Watermarks',
          'Creating Professional Resumes, Bio-Data & Official Letters',
          'Headers, Footers, Page Numbering & Table of Contents',
          'Mail Merge for Mass Communication & Printing Documents to PDF',
        ],
      },
      {
        number: 3,
        title: 'Microsoft Excel (MS Excel) - Formulas & Data Entry',
        duration: '8 Hours',
        topics: [
          'Spreadsheet Fundamentals: Rows, Columns, Cells & Sheet Management',
          'Entering Data, AutoFill, Cell Formatting & Number Formats (Currency, Dates)',
          'Essential Formulas: SUM, AVERAGE, MIN, MAX, COUNT, and IF Statements',
          'Data Sorting, Filtering & Removing Duplicates',
          'Creating Visual Bar Charts, Column Charts & Pie Charts for Business Data',
        ],
      },
      {
        number: 4,
        title: 'Microsoft PowerPoint & Internet / Email Literacy',
        duration: '7 Hours',
        topics: [
          'Creating Engaging Slide Decks: Themes, Layouts & Color Schemes',
          'Adding Text, Bullet Points, SmartArt & Transition Effects',
          'Internet Browsing (Google Chrome, Edge) & Effective Google Searching',
          'Professional Gmail: Composing, Attaching Files, CC/BCC, Signature Setup',
          'Google Drive Basics: Cloud Storage, Document Sharing & Cyber Safety Tips',
        ],
      },
    ],
    targetAudience: [
      'School and college students seeking digital computer proficiency.',
      'Freshers and job seekers preparing for front-office, administrative, or data entry jobs.',
      'Homemakers, business owners, and senior citizens wanting digital independence.',
    ],
    faqs: [
      {
        question: 'I have never used a computer before. Can I learn?',
        answer: 'Yes! This course assumes zero prior computer knowledge. Our instructors guide you patient step-by-step from switching on the PC and holding the mouse to advanced office tools.',
      },
      {
        question: 'Will I get an individual computer during every class?',
        answer: 'Yes! Every student gets their own modern computer terminal in our air-conditioned labs in Coimbatore with 100% practical time.',
      },
      {
        question: 'Is this course helpful for government and private office jobs?',
        answer: 'Yes! Proficiency in MS Office and typing is a mandatory requirement for data entry operators, office assistants, receptionists, billing executives, and bank clerks.',
      },
      {
        question: 'Are classes available on weekends or afternoons?',
        answer: 'Yes, we have flexible batch timings available throughout the day from 9:00 AM to 7:00 PM as well as weekend options.',
      },
    ],
  },
}

// Course aliases mapping for robust URL matching
const GENERAL_COURSE_ALIASES: Record<string, string> = {
  'english-comm': 'english-communication',
  'english-communication': 'english-communication',
  'english': 'english-communication',
  'ielts': 'ielts',
  'ielts-prep': 'ielts',
  'ielts-preparation': 'ielts',
  'ielts-coaching': 'ielts',
  'german': 'german',
  'german-language': 'german',
  'french': 'french',
  'french-language': 'french',
  'spoken-english': 'spoken-english',
  'spokenenglish': 'spoken-english',
  'business-comm': 'business-communication',
  'business-communication': 'business-communication',
  'aws-cert': 'aws-certification',
  'aws-certification': 'aws-certification',
  'microsoft-cert': 'microsoft-certification',
  'microsoft-certification': 'microsoft-certification',
  'azure-certification': 'microsoft-certification',
  'google-cert': 'google-certification',
  'google-certification': 'google-certification',
  'gcp-certification': 'google-certification',
  'cisco-cert': 'cisco-certification',
  'cisco-certification': 'cisco-certification',
  'ccna': 'cisco-certification',
  'prof-certs': 'professional-certifications',
  'professional-certifications': 'professional-certifications',
  'pmp': 'professional-certifications',
  'exam-prep': 'certification-exam-prep',
  'certification-exam-prep': 'certification-exam-prep',
  'certification-exam-preparation': 'certification-exam-prep',
  'soft-skills': 'soft-skills',
  'softskills': 'soft-skills',
  'aptitude': 'aptitude-training',
  'aptitude-training': 'aptitude-training',
  'personality-dev': 'personality-development',
  'personality-development': 'personality-development',
  'leadership': 'leadership-training',
  'leadership-training': 'leadership-training',
  'corporate-training': 'corporate-training',
  'corporate': 'corporate-training',
  'basic-computers': 'basic-computer-skills',
  'basic-computer-skills': 'basic-computer-skills',
  'ms-office': 'basic-computer-skills',
}

/**
 * Normalizes identifier and returns matching GeneralCourseData
 */
export function getGeneralCourseBySlugOrId(identifier: string): GeneralCourseData | null {
  if (!identifier) return null

  const clean = identifier.trim().toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '')
  const stripped = clean.replace(/^courses\//, '')

  // 1. Direct key match
  if (GENERAL_COURSES_DATA[clean]) return GENERAL_COURSES_DATA[clean]
  if (GENERAL_COURSES_DATA[stripped]) return GENERAL_COURSES_DATA[stripped]

  // 2. Alias match
  const aliasTarget = GENERAL_COURSE_ALIASES[clean] || GENERAL_COURSE_ALIASES[stripped]
  if (aliasTarget && GENERAL_COURSES_DATA[aliasTarget]) {
    return GENERAL_COURSES_DATA[aliasTarget]
  }

  // 3. Scan values for course.id or course.slug
  for (const course of Object.values(GENERAL_COURSES_DATA)) {
    const cId = course.id.toLowerCase()
    const cSlug = course.slug.toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '')
    const cSlugStripped = cSlug.replace(/^courses\//, '')

    if (
      cId === clean ||
      cId === stripped ||
      cSlug === clean ||
      cSlugStripped === stripped
    ) {
      return course
    }
  }

  return null
}
