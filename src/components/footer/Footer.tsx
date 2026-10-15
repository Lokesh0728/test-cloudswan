import React, { useState } from 'react'
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ArrowUp,
} from 'lucide-react'
import logoImg from '../../assets/logo.png'
import { FooterPolicyModal, type PolicyKey } from './FooterPolicyModal'

interface FooterProps {
  currentPath?: string
  onNavigate?: (path: string) => void
  onOpenEnquiry?: (subject?: string) => void
}

export const Footer: React.FC<FooterProps> = ({
  currentPath: _currentPath = '/',
  onNavigate = () => {},
  onOpenEnquiry: _onOpenEnquiry = () => {},
}) => {
  const [activePolicyKey, setActivePolicyKey] = useState<PolicyKey | null>(null)
  const [selectedBranch, setSelectedBranch] = useState<'gandhipuram' | 'saravanampatti'>('gandhipuram')

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) return
    e.preventDefault()
    onNavigate(href)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const campusDetails = {
    gandhipuram: {
      name: 'Gandhipuram Campus (Ramnagar)',
      short: 'Gandhipuram',
      address: '234, Vivekananda Rd, Ramnagar, Coimbatore, Tamil Nadu - 641009',
      landmark: 'Behind Central Bus Stand',
      phone: '+91 89038 35098',
      phoneTel: '+918903835098',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=234+Vivekananda+Rd+Ram+Nagar+Coimbatore+Tamil+Nadu+641009',
      embedUrl: 'https://maps.google.com/maps?q=234+Vivekananda+Rd+Ram+Nagar+Coimbatore+Tamil+Nadu+641009&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
    saravanampatti: {
      name: 'Saravanampatti Campus (IT Hub)',
      short: 'Saravanampatti',
      address: '134/ 2C, Sathy Rd, Above Green Leaf Hotel, Main Bus Stop, Saravanampatti, Coimbatore - 641035',
      landmark: 'Main Bus Stop, Sathy Road',
      phone: '+91 7708 262 565',
      phoneTel: '+917708262565',
      mapUrl: 'https://maps.app.goo.gl/mB3xtaNTpNfg2b3E9',
      embedUrl: 'https://maps.google.com/maps?q=Cloudswan+Solution+Saravanampatti&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
  }

  const activeCampus = campusDetails[selectedBranch]

  return (
    <footer
      role="contentinfo"
      aria-label="CloudSwan Solution Footer"
      className="w-full bg-white text-slate-700 border-t border-slate-200/90 font-sans selection:bg-accent-500 selection:text-white relative z-20"
    >
      {/* Main Clean Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* ================= COLUMN 1: Brand, Description, Socials & Mini Map (4 Cols) ================= */}
          <div className="lg:col-span-4 space-y-4">
            {/* Institute Logo */}
            <div>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('/')
                }}
                className="inline-block focus:outline-none"
                aria-label="CloudSwan Solution Home"
              >
                <img
                  src={logoImg}
                  alt="CloudSwan Solution"
                  className="h-10 sm:h-11 w-auto object-contain"
                  width={190}
                  height={50}
                />
              </a>
            </div>

            {/* Concise Mission Statement */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              With proven technical training expertise, CloudSwan Solution delivers comprehensive IT & certification courses, empowering learners to excel in real-world tech careers.
            </p>

            {/* Clean Monochrome Social Channel Links */}
            <div className="flex items-center gap-2 pt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/cloudswansolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-150 shadow-2xs"
                aria-label="Facebook Page"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/cloudswansolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-150 shadow-2xs"
                aria-label="Instagram Profile"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@cloudswansolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-150 shadow-2xs"
                aria-label="YouTube Channel"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/cloudswan-solution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-150 shadow-2xs"
                aria-label="LinkedIn Company Page"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>

            {/* Compact Interactive Dual-Campus Map Preview Card */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-heading font-semibold text-slate-700">
                  Campus Location:
                </span>
                {/* 2-Branch Toggle Tabs */}
                <div className="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-heading font-medium">
                  <button
                    type="button"
                    onClick={() => setSelectedBranch('gandhipuram')}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      selectedBranch === 'gandhipuram'
                        ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Gandhipuram
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedBranch('saravanampatti')}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      selectedBranch === 'saravanampatti'
                        ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Saravanampatti
                  </button>
                </div>
              </div>

              {/* Map Thumbnail Frame */}
              <div className="relative w-full h-32 rounded-xl overflow-hidden border border-slate-200/90 shadow-2xs bg-slate-100 group">
                <iframe
                  title={`${activeCampus.name} Google Map`}
                  src={activeCampus.embedUrl}
                  className="w-full h-full border-0 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                {/* Clickable Floating Maps Action Badge */}
                <a
                  href={activeCampus.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 left-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-slate-200/90 text-[11px] font-heading font-semibold text-slate-800 shadow-xs hover:bg-slate-50 transition-colors"
                >
                  <MapPin className="w-3 h-3 text-accent-500 stroke-[2]" />
                  <span>Maps</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400 stroke-[2]" />
                </a>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: Trending Courses (2.5 Cols) ================= */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm sm:text-base font-heading font-bold text-slate-900 tracking-tight">
              Trending Courses
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'Artificial Intelligence', href: '/courses/artificial-intelligence' },
                { name: 'Machine Learning', href: '/courses/machine-learning' },
                { name: 'Data Science & Analytics', href: '/courses/data-science' },
                { name: 'Full Stack Development', href: '/courses/full-stack-development' },
                { name: 'DevOps & Cloud Engineering', href: '/courses/devops' },
                { name: 'Cyber Security', href: '/courses/cybersecurity' },
                { name: 'Python Development', href: '/courses/python-development' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-accent-500 transition-transform group-hover:translate-x-0.5 stroke-[2]" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3: Global Certifications & Languages (2.5 Cols) ================= */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm sm:text-base font-heading font-bold text-slate-900 tracking-tight">
              Certifications
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: 'AWS Cloud Solutions', href: '/courses/aws' },
                { name: 'AWS Certification Prep', href: '/courses/aws-certification' },
                { name: 'Microsoft Azure', href: '/courses/microsoft-certification' },
                { name: 'Google Cloud Training', href: '/courses/google-certification' },
                { name: 'IELTS Academic (Band 7+)', href: '/courses/ielts' },
                { name: 'German Language (A1-B2)', href: '/courses/german' },
                { name: 'SAP & Salesforce Training', href: '/courses/sap' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-accent-500 transition-transform group-hover:translate-x-0.5 stroke-[2]" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 4: Two Branch Addresses & Direct Contact (3 Cols) ================= */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm sm:text-base font-heading font-bold text-slate-900 tracking-tight">
              Our Coimbatore Campuses
            </h4>

            {/* Branch 1: Gandhipuram */}
            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                  <MapPin className="w-3 h-3 stroke-[2]" />
                </div>
                <div>
                  <p className="text-xs font-heading font-bold text-slate-800">
                    Gandhipuram Campus:
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    234, Vivekananda Rd, Ramnagar, Coimbatore - 641009
                  </p>
                  <a
                    href="tel:+918903835098"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-accent-500 transition-colors pt-0.5"
                  >
                    <Phone className="w-2.5 h-2.5 stroke-[2]" />
                    <span>+91 89038 35098</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Branch 2: Saravanampatti */}
            <div className="space-y-1 pt-1 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                  <MapPin className="w-3 h-3 stroke-[2]" />
                </div>
                <div>
                  <p className="text-xs font-heading font-bold text-slate-800">
                    Saravanampatti Campus:
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    134/ 2C, Sathy Rd, Above Green Leaf Hotel, Main Bus Stop, Saravanampatti - 641035
                  </p>
                  <a
                    href="tel:+917708262565"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-accent-500 transition-colors pt-0.5"
                  >
                    <Phone className="w-2.5 h-2.5 stroke-[2]" />
                    <span>+91 7708 262 565</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Central Channels (Email & Hours) */}
            <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
              <a
                href="mailto:cloudswansolution@gmail.com"
                className="flex items-center gap-2 hover:text-slate-900 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                  <Mail className="w-3 h-3 stroke-[2]" />
                </div>
                <span className="truncate">cloudswansolution@gmail.com</span>
              </a>

              <div className="flex items-center gap-2 text-slate-500">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                  <Clock className="w-3 h-3 stroke-[2]" />
                </div>
                <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Slim & Elegant Bottom Copyright Bar */}
      <div className="border-t border-slate-200/80 bg-slate-50/70 py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Copyright notice */}
          <div className="text-center sm:text-left">
            <span>Copyright © 2026 | All rights reserved by CloudSwan Solution.</span>
          </div>

          {/* Quick Policy Modal Triggers */}
          <div className="flex items-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => setActivePolicyKey('privacy')}
              className="text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={() => setActivePolicyKey('terms')}
              className="text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Terms of Admission
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={() => setActivePolicyKey('honorCode')}
              className="text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Student Honor Code
            </button>
          </div>

          {/* Location & Back to Top */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 hidden md:inline">Coimbatore, Tamil Nadu</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>

      {/* Institutional Policy Dialog */}
      <FooterPolicyModal
        policyKey={activePolicyKey}
        onClose={() => setActivePolicyKey(null)}
      />
    </footer>
  )
}

export default Footer
