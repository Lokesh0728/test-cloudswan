export interface FooterLinkItem {
  name: string
  href: string
  badge?: string
  isExternal?: boolean
}

export interface FooterSection {
  title: string
  subtitle?: string
  links: FooterLinkItem[]
}

export const FOOTER_IT_COURSES: FooterLinkItem[] = [
  { name: 'Full Stack Web Development', href: '/courses/full-stack-development', badge: 'Hot' },
  { name: 'Artificial Intelligence', href: '/courses/artificial-intelligence', badge: 'Trending' },
  { name: 'Machine Learning & MLOps', href: '/courses/machine-learning' },
  { name: 'Data Science & Analytics', href: '/courses/data-science', badge: 'Popular' },
  { name: 'DevOps & Cloud Engineering', href: '/courses/devops', badge: 'High Demand' },
  { name: 'AWS Cloud Solutions', href: '/courses/aws' },
  { name: 'Cybersecurity & Ethical Hacking', href: '/courses/cybersecurity' },
  { name: 'Python Enterprise Development', href: '/courses/python-development' },
  { name: 'Salesforce CRM Training', href: '/courses/salesforce' },
  { name: 'SAP Enterprise Systems', href: '/courses/sap' },
  { name: 'Digital Marketing & Growth', href: '/courses/digital-marketing' },
  { name: 'Cloud Computing Architecture', href: '/courses/cloud-computing' },
]

export const FOOTER_CERTIFICATIONS_AND_LANGUAGES: FooterLinkItem[] = [
  { name: 'AWS Certified Solutions Architect', href: '/courses/aws-certification', badge: 'Cloud' },
  { name: 'Microsoft Azure Certified', href: '/courses/microsoft-certification' },
  { name: 'Google Cloud Certified Engineer', href: '/courses/google-certification' },
  { name: 'Cisco CCNA Networking', href: '/courses/cisco-certification' },
  { name: 'IELTS Academic & General Prep', href: '/courses/ielts', badge: 'Band 7+' },
  { name: 'German Language Academy', href: '/courses/german', badge: 'A1-B2' },
  { name: 'French Language (DELF)', href: '/courses/french' },
  { name: 'Spoken English & Fluency', href: '/courses/spoken-english' },
  { name: 'Business Communication', href: '/courses/business-communication' },
  { name: 'Professional Vendor Exams', href: '/courses/professional-certifications' },
]

export const FOOTER_INSTITUTE_LINKS: FooterLinkItem[] = [
  { name: 'About CloudSwan Institute', href: '/about' },
  { name: 'All 24+ Course Syllabi', href: '/courses' },
  { name: 'Current & Upcoming Batches', href: '/#batches' },
  { name: 'Placement Cell & 250+ Partners', href: '/about' },
  { name: 'Careers — Join as Faculty', href: '/careers', badge: 'Hiring' },
  { name: 'Corporate Training Programs', href: '/contact' },
  { name: 'Student Testimonials & Reviews', href: '/about' },
  { name: 'Campus Locations & Maps', href: '/contact' },
  { name: 'Contact Admissions Desk', href: '/contact' },
]

export interface CampusFooterInfo {
  id: string
  name: string
  shortTitle: string
  tag: string
  addressLine1: string
  addressLine2: string
  pincode: string
  fullAddress: string
  phone: string
  displayPhone: string
  email: string
  transit: string
  directionsUrl: string
  facilities: string[]
}

export const FOOTER_CAMPUSES: CampusFooterInfo[] = [
  {
    id: 'gandhipuram',
    name: 'Gandhipuram Campus',
    shortTitle: 'Ramnagar Hub',
    tag: 'Main Academic Center',
    addressLine1: '234, Vivekananda Rd, Ramnagar',
    addressLine2: 'Coimbatore, Tamil Nadu',
    pincode: '641009',
    fullAddress: '234, Vivekananda Rd, Ramnagar, Coimbatore, Tamil Nadu 641009',
    phone: '+91 89038 35098',
    displayPhone: '+91 89038 35098',
    email: 'cloudswansolution@gmail.com',
    transit: '3 mins walk from Central Bus Stand & 10 mins from Railway Station',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=234+Vivekananda+Rd+Ram+Nagar+Coimbatore+Tamil+Nadu+641009',
    facilities: ['Multi-Cloud Labs', '1-on-1 Counseling', 'Smart Classrooms'],
  },
  {
    id: 'saravanampatti',
    name: 'Saravanampatti Campus',
    shortTitle: 'IT Corridor Hub',
    tag: 'Tech Park Center',
    addressLine1: '134/2C Sathy Rd, Above Green Leaf Hotel',
    addressLine2: 'Main Bus Stop, Saravanampatti, Coimbatore',
    pincode: '641035',
    fullAddress: '134/ 2C, Sathy Rd, above Green Leaf Hotel, Main Bus Stop, Saravanampatti, Coimbatore, Tamil Nadu 641035',
    phone: '+91 7708 262 565',
    displayPhone: '+91 7708 262 565',
    email: 'cloudswansaravanampatti@gmail.com',
    transit: 'At Saravanampatti Main Bus Stop / 5 mins from KGISL Tech Park',
    directionsUrl: 'https://maps.app.goo.gl/mB3xtaNTpNfg2b3E9',
    facilities: ['AI/ML Workstations', 'Placement Suites', 'High-Speed Fiber'],
  },
]

export const FOOTER_METRICS = [
  { label: 'Alumni Placed in IT', value: '15,000+' },
  { label: 'Corporate Recruitment Partners', value: '250+' },
  { label: 'Google Review Rating', value: '4.9 / 5.0' },
  { label: 'Practical Lab Hours Ratio', value: '100% Hands-on' },
  { label: 'Physical Campuses in Coimbatore', value: '2 Centers' },
]

export const POLICY_DOCS = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: 'Information We Collect',
        content:
          'CloudSwan Solution collects learner information solely to facilitate academic counseling, batch scheduling, certificate issuance, and job placement assistance. We never sell, lease, or monetize your contact information or academic records to third parties.',
      },
      {
        heading: 'Academic & Placement Records',
        content:
          'Performance evaluations, attendance records, and project portfolios compiled during your course are securely maintained for verification by prospective recruiters and certificate validation services.',
      },
      {
        heading: 'Communication Preferences',
        content:
          'Enrolled students receive essential updates regarding class schedules, lab sessions, and campus events via email and SMS/WhatsApp. You may update your notification preferences at any time through our admissions desk.',
      },
    ],
  },
  terms: {
    title: 'Terms of Admission & Enrollment',
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: 'Course Enrollment & Admission',
        content:
          'Admission to any professional diploma or certification cohort is confirmed upon completion of registration and receipt of initial tuition. Seats are allocated on a first-come, first-served basis to maintain optimal trainer-to-student lab ratios.',
      },
      {
        heading: 'Attendance & Practical Lab Standards',
        content:
          'To qualify for institutional placement assistance and official certification, learners must maintain a minimum of 85% attendance across lecture and practical laboratory cohorts, completing all assigned capstone deliverables.',
      },
      {
        heading: 'Batch Rescheduling & Transfer Policy',
        content:
          'Students facing unexpected professional or academic commitments may request a one-time batch transfer to an upcoming weekend or evening cohort at either the Gandhipuram or Saravanampatti campus, subject to seat availability.',
      },
    ],
  },
  honorCode: {
    title: 'Student Honor Code & Academic Integrity',
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: 'Academic Integrity & Originality',
        content:
          'All project repositories, code submissions, and architectural blueprints must reflect the student’s original work or properly cited open-source contributions. Plagiarism or fraudulent assessment submissions are strictly prohibited.',
      },
      {
        heading: 'Laboratory Infrastructure & Equipment',
        content:
          'Learners are granted access to enterprise cloud environments, local servers, and specialized workstations. Any unauthorized system penetration, cryptographic mining, or intentional damage to campus hardware will result in immediate termination of enrollment.',
      },
      {
        heading: 'Professional Conduct & Inclusivity',
        content:
          'CloudSwan fosters an inclusive, respectful learning environment across both Coimbatore campuses. Harassment, discrimination, or disruptive conduct toward fellow learners, faculty, or staff will not be tolerated.',
      },
    ],
  },
  placement: {
    title: 'Placement Charter & Recruiter Standards',
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: 'Dedicated Placement Support',
        content:
          'CloudSwan’s corporate placement cell actively coordinates on-campus and virtual recruitment drives with over 250 verified IT partners across Coimbatore, Bangalore, Chennai, and Hyderabad.',
      },
      {
        heading: 'Eligibility Criteria',
        content:
          'Students who successfully complete their capstone projects, pass internal technical mock interviews, and maintain compliant attendance are eligible for unlimited interview opportunities until first offer issuance.',
      },
      {
        heading: 'Recruiter Coordination & Code of Ethics',
        content:
          'Candidates must attend scheduled technical interviews promptly and present authentic credentials. Misrepresentation of skills or unexcused absence from confirmed interview slots may result in suspension of placement privileges.',
      },
    ],
  },
}
