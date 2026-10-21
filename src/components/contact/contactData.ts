export interface CampusBranch {
  id: 'gandhipuram' | 'saravanampatti'
  name: string
  shortName: string
  branchTag: string
  tagColor: string
  tagBg: string
  tagBorder: string
  address: {
    line1: string
    line2: string
    city: string
    state: string
    pincode: string
    full: string
  }
  landmark: string
  phone: string
  displayPhone: string
  secondaryPhone ?: string
  email: string
  admissionsEmail: string
  hours: string
  weekendHours: string
  transit: {
    bus: string
    train: string
    airport ?: string
    parking: string
  }
  facilities: string[]
  mapEmbedUrl: string
  googleMapsUrl: string
  directionsUrl: string
}

export const CAMPUS_BRANCHES: CampusBranch[] = [
  {
    id: 'gandhipuram',
    name: 'Gandhipuram Campus (Ramnagar)',
    shortName: 'Gandhipuram',
    branchTag: 'Gandhipuram Campus',
    tagColor: 'text-accent-700',
    tagBg: 'bg-orange-50',
    tagBorder: 'border-orange-200/80',
    address: {
      line1: '234, Vivekananda Rd',
      line2: 'Ramnagar',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      pincode: '641009',
      full: '234, Vivekananda Rd, Ramnagar, Coimbatore, Tamil Nadu 641009',
    },
    landmark: '234, Vivekananda Rd, Ramnagar, Gandhipuram',
    phone: '+91 89038 35098',
    displayPhone: '+91 89038 35098',
    email: 'cloudswansolution@gmail.com',
    admissionsEmail: 'cloudswansolution@gmail.com',
    hours: 'Monday – Saturday: 9:30 AM – 6:30 PM',
    weekendHours: 'Sunday: 10:00 AM – 4:00 PM (By Appointment)',
    transit: {
      bus: '3 mins walk from Gandhipuram Central Bus Stand (Frequent city buses)',
      train: '10 mins drive (2.8 km) from Coimbatore Junction (CBE) Railway Station',
      airport: '25 mins drive (10.5 km) from Coimbatore International Airport (CJB)',
      parking: 'Dedicated visitor and student two-wheeler parking available',
    },
    facilities: [
      'High-Speed Multi-Cloud & Full-Stack Labs',
      '1-on-1 Academic & Career Counseling Rooms',
      'Air-Conditioned Smart Projector Classrooms',
      'Gigabit Optical Fiber Enterprise Wi-Fi',
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=234+Vivekananda+Rd+Ram+Nagar+Coimbatore+Tamil+Nadu+641009&t=&z=16&ie=UTF8&iwloc=&output=embed',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=234+Vivekananda+Rd+Ram+Nagar+Coimbatore+Tamil+Nadu+641009',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=234+Vivekananda+Rd+Ram+Nagar+Coimbatore+Tamil+Nadu+641009',
  },
  {
    id: 'saravanampatti',
    name: 'Saravanampatti Campus (Main Bus Stop)',
    shortName: 'Saravanampatti',
    branchTag: 'Saravanampatti Campus',
    tagColor: 'text-accent-700',
    tagBg: 'bg-orange-50',
    tagBorder: 'border-orange-200/80',
    address: {
      line1: '134/ 2C, Sathy Rd',
      line2: 'Above Green Leaf Hotel, Main Bus Stop, Saravanampatti',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      pincode: '641035',
      full: '134/ 2C, Sathy Rd, above Green Leaf Hotel, Main Bus Stop, Saravanampatti, Coimbatore, Tamil Nadu 641035',
    },
    landmark: 'Main Bus Stop, 134/ 2C, Sathy Rd, above Green Leaf Hotel, Saravanampatti',
    phone: '+91 7708 262 565',
    displayPhone: '+91 7708 262 565',
    email: 'cloudswansaravanampatti@gmail.com',
    admissionsEmail: 'cloudswansaravanampatti@gmail.com',
    hours: 'Monday – Saturday: 9:30 AM – 6:30 PM',
    weekendHours: 'Sunday: 10:00 AM – 4:00 PM (By Appointment)',
    transit: {
      bus: 'Direct stop at Saravanampatti Main Bus Stop / Green Leaf Hotel (Buses 45B, 82, 100)',
      train: '20 mins drive from Coimbatore North & Peelamedu stations',
      airport: '15 mins drive (8.5 km) via Sitra - Saravanampatti bypass',
      parking: 'Spacious on-campus two-wheeler and four-wheeler parking slots',
    },
    facilities: [
      'Advanced AI, Data Science & ML Workstations',
      'Corporate Placement Simulation Suites',
      'Industry Dual-Monitor Developer Setups',
      'Air-Conditioned Labs with 24/7 Power Backup',
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Cloudswan+Solution+Saravanampatti&t=&z=16&ie=UTF8&iwloc=&output=embed',
    googleMapsUrl: 'https://maps.app.goo.gl/mB3xtaNTpNfg2b3E9',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Cloudswan+Solution+Saravanampatti',
  },
]

export const CONTACT_CHANNELS = [
  {
    title: 'Gandhipuram Campus (Ramnagar)',
    value: '+91 89038 35098',
    href: 'tel:+918903835098',
    subtitle: '234, Vivekananda Rd, Ramnagar',
    actionText: 'Call Gandhipuram',
    badge: 'Direct Line',
    icon: 'PhoneCall',
    accentColor: 'orange',
  },
  {
    title: 'Saravanampatti Campus (Main Bus Stop)',
    value: '+91 7708 262 565',
    href: 'tel:+917708262565',
    subtitle: 'Main Bus Stop, above Green Leaf Hotel, Sathy Rd',
    actionText: 'Call Saravanampatti',
    badge: 'Direct Line',
    icon: 'Phone',
    accentColor: 'orange',
  },
  {
    title: 'WhatsApp Counseling',
    value: '+91 89038 35098',
    href: 'https://wa.me/918903835098?text=Hello%20CloudSwan%20Solution,%20I%20would%20like%20to%20enquire%20about%20courses%20and%20batch%20timings.',
    subtitle: 'Direct chat with academic mentors',
    actionText: 'Chat on WhatsApp',
    badge: 'Fast Reply',
    icon: 'MessageCircle',
    accentColor: 'orange',
  },
  {
    title: 'Official Email Support',
    value: 'cloudswansolution@gmail.com',
    href: 'mailto:cloudswansolution@gmail.com?subject=Course%20Enquiry%20-%20CloudSwan%20Solution',
    subtitle: 'cloudswansaravanampatti@gmail.com',
    actionText: 'Send Email',
    badge: 'Official Inquiries',
    icon: 'Mail',
    accentColor: 'orange',
  },
]

export const CONTACT_METRICS = [
  { label: 'Campuses in Coimbatore', value: '2 Branches', sublabel: 'Gandhipuram & Saravanampatti' },
  { label: 'Avg. Response Time', value: '< 15 Mins', sublabel: 'During business hours' },
  { label: 'Satisfied Learners', value: '15,000+', sublabel: 'Alumni placed in top IT firms' },
  { label: 'Student Rating', value: '4.9 / 5', sublabel: 'From 2,500+ Google Reviews' },
]

export const CONTACT_FAQS = [
  {
    question: 'Can I visit the campus for a free demo session and syllabus walkthrough?',
    answer:
      'Yes, absolutely! Both our Gandhipuram (234, Vivekananda Rd, Ram Nagar) and Saravanampatti (134/ 2C, Sathy Rd, above Green Leaf Hotel) campuses welcome aspiring learners Monday through Saturday from 9:30 AM to 6:30 PM. You can sit with our senior subject trainer for a 1-on-1 career consultation, inspect our lab infrastructure, and attend a free preview session before finalizing your admission.',
  },
  {
    question: 'Which campus should I visit — Gandhipuram or Saravanampatti?',
    answer:
      'Both campuses feature the same curriculum, certified instructors, interactive lab equipment, and 100% placement support. If you reside in central Coimbatore, Pollachi, Tiruppur, or travel via Central Bus Stand / Railway Station, our Gandhipuram campus on Vivekananda Road (Ram Nagar) is highly accessible. If you live or study along Sathy Road, Keeranatham, KGISL, or the IT corridor, our Saravanampatti campus above Green Leaf Hotel is ideal.',
  },
  {
    question: 'Are weekend and early-morning batches available at both branches?',
    answer:
      'Yes! To accommodate college students and working professionals, both branches run early-morning batches (7:30 AM - 9:00 AM), evening batches (6:30 PM - 8:00 PM), and dedicated Saturday/Sunday fast-track immersion cohorts with uninterrupted lab access.',
  },
  {
    question: 'Do you offer assistance with hostel or PG accommodation for outstation students?',
    answer:
      'Yes! A significant number of our learners travel from Kerala, Bangalore, and across Tamil Nadu. We maintain a verified directory of vetted student hostels and PG accommodations located within walking distance of both our Gandhipuram and Saravanampatti campuses, with separate arrangements for boys and girls.',
  },
  {
    question: 'Can I switch between classroom training and live online sessions if needed?',
    answer:
      'Yes, we provide seamless hybrid flexibility. If you are enrolled in our classroom campus batches and need to travel or work remotely, you can join the live interactive broadcast of the exact same batch without missing a single concept or practical lab session.',
  },
]
