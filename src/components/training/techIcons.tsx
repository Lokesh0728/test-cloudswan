import React from 'react'

interface TechIconProps {
  className?: string
  size?: number
}

// 1. JAVA ICON: Iconic warm coffee cup with steam and dual-tone gradient
export const JavaIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Java Logo"
  >
    <defs>
      <linearGradient id="javaWarm" x1="12" y1="6" x2="36" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EA2D2E" />
        <stop offset="0.5" stopColor="#E76F00" />
        <stop offset="1" stopColor="#5382A1" />
      </linearGradient>
      <linearGradient id="javaSteam" x1="18" y1="4" x2="30" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E76F00" />
        <stop offset="1" stopColor="#EA2D2E" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    {/* Steam vapor waves */}
    <path
      d="M21 4C19 8 26 10 24 14C23.5 15 22 16 20 17"
      stroke="url(#javaSteam)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 6C25.5 9.5 30 11.5 28.5 15C28 16 26.5 17 25 17.5"
      stroke="url(#javaSteam)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Coffee Cup Body */}
    <path
      d="M10 21C10 21 11.5 32 23 32C34.5 32 36 21 36 21H10Z"
      fill="url(#javaWarm)"
    />
    {/* Cup Rim */}
    <path
      d="M9 20C9 19.4477 9.44772 19 10 19H36C36.5523 19 37 19.4477 37 20C37 20.5523 36.5523 21 36 21H10C9.44772 21 9 20.5523 9 20Z"
      fill="#E76F00"
    />
    {/* Handle */}
    <path
      d="M34 22H36.5C38.9853 22 41 24.0147 41 26.5C41 28.9853 38.9853 31 36.5 31H32"
      stroke="#5382A1"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Base saucer arc */}
    <path
      d="M13 36C17 38.5 29 38.5 33 36"
      stroke="#5382A1"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M16 41C20 43 26 43 30 41"
      stroke="#EA2D2E"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

// 2. PYTHON ICON: Iconic dual serpents in official royal blue and warm amber gold
export const PythonIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Python Logo"
  >
    <defs>
      <linearGradient id="pyBlue" x1="6" y1="6" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#1E5280" />
      </linearGradient>
      <linearGradient id="pyYellow" x1="20" y1="20" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE873" />
        <stop offset="1" stopColor="#FFC331" />
      </linearGradient>
    </defs>
    {/* Blue serpent (top left) */}
    <path
      d="M23.6 5C14.5 5 15.1 8.9 15.1 8.9L15.1 12.8H24V14.1H11.5C7.4 14.1 4 17.5 4 21.6C4 26.4 7.2 26.6 7.2 26.6H10.1V22.9C10.1 18.6 13.6 15.2 17.9 15.2H26.8C29.6 15.2 31.8 13 31.8 10.2V6.6C31.8 6.6 31.2 5 23.6 5ZM19.5 8.1C20.5 8.1 21.3 8.9 21.3 9.9C21.3 10.9 20.5 11.7 19.5 11.7C18.5 11.7 17.7 10.9 17.7 9.9C17.7 8.9 18.5 8.1 19.5 8.1Z"
      fill="url(#pyBlue)"
    />
    {/* Yellow serpent (bottom right) */}
    <path
      d="M24.4 43C33.5 43 32.9 39.1 32.9 39.1L32.9 35.2H24V33.9H36.5C40.6 33.9 44 30.5 44 26.4C44 21.6 40.8 21.4 40.8 21.4H37.9V25.1C37.9 29.4 34.4 32.8 30.1 32.8H21.2C18.4 32.8 16.2 35 16.2 37.8V41.4C16.2 41.4 16.8 43 24.4 43ZM28.5 39.9C27.5 39.9 26.7 39.1 26.7 38.1C26.7 37.1 27.5 36.3 28.5 36.3C29.5 36.3 30.3 37.1 30.3 38.1C30.3 39.1 29.5 39.9 28.5 39.9Z"
      fill="url(#pyYellow)"
    />
  </svg>
)

// 3. FULL STACK ICON: Modern 3D multi-tier application stack with database, API & UI layers
export const FullStackIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Full Stack Icon"
  >
    <defs>
      <linearGradient id="fsUi" x1="6" y1="8" x2="42" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="fsApi" x1="6" y1="18" x2="42" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FB923C" />
        <stop offset="1" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="fsDb" x1="6" y1="28" x2="42" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34D399" />
        <stop offset="1" stopColor="#059669" />
      </linearGradient>
    </defs>
    {/* UI Tier */}
    <path
      d="M24 6L40 13L24 20L8 13L24 6Z"
      fill="url(#fsUi)"
      stroke="#0284C7"
      strokeWidth="1.5"
    />
    {/* API / Logic Tier */}
    <path
      d="M8 19L24 26L40 19M8 23L24 30L40 23"
      stroke="url(#fsApi)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Database Tier */}
    <path
      d="M8 31L24 38L40 31M8 35L24 42L40 35"
      stroke="url(#fsDb)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Interconnect node sparks */}
    <circle cx="24" cy="13" r="2" fill="#FFFFFF" />
    <circle cx="24" cy="26" r="2" fill="#FFFFFF" />
    <circle cx="24" cy="38" r="2" fill="#FFFFFF" />
  </svg>
)

// 4. DATA ANALYTICS ICON: Modern analytics monitor, gradient bars, rising spline & metric gauge
export const DataAnalyticsIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Data Analytics Icon"
  >
    <defs>
      <linearGradient id="chartGrad" x1="8" y1="12" x2="40" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06B6D4" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    {/* Computer / Display Screen Frame */}
    <rect x="5" y="6" width="38" height="27" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="2" />
    <path d="M18 33L16 41H32L30 33" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 41H36" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
    {/* Data Bars inside screen */}
    <rect x="10" y="22" width="4" height="7" rx="1.5" fill="#38BDF8" />
    <rect x="17" y="17" width="4" height="12" rx="1.5" fill="#818CF8" />
    <rect x="24" y="13" width="4" height="16" rx="1.5" fill="#34D399" />
    <rect x="31" y="10" width="4" height="19" rx="1.5" fill="#F59E0B" />
    {/* Rising Growth Spline */}
    <path
      d="M11 20L18 15L25 12L34 8"
      stroke="#F43F5E"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="34" cy="8" r="2.5" fill="#F43F5E" />
  </svg>
)

// 5. MERN STACK ICON: React atom orbit + Node.js green hexagon + MongoDB leaf + Express badge
export const MernStackIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="MERN Stack Icon"
  >
    {/* Background soft circle */}
    <circle cx="24" cy="24" r="22" fill="#0A192F" />
    {/* React Orbits in cyan */}
    <ellipse cx="24" cy="24" rx="17" ry="6.5" stroke="#00D8FF" strokeWidth="1.8" transform="rotate(30 24 24)" />
    <ellipse cx="24" cy="24" rx="17" ry="6.5" stroke="#00D8FF" strokeWidth="1.8" transform="rotate(90 24 24)" />
    <ellipse cx="24" cy="24" rx="17" ry="6.5" stroke="#00D8FF" strokeWidth="1.8" transform="rotate(150 24 24)" />
    {/* Center Node / React core */}
    <circle cx="24" cy="24" r="3.5" fill="#00D8FF" />
    {/* Micro tech badges around */}
    {/* Node Green Hex */}
    <polygon points="12,12 15,10 18,12 18,16 15,18 12,16" fill="#68A063" />
    {/* Mongo Green Leaf */}
    <path d="M34 10C35 14 33 17 31 18C31 16 32 12 34 10Z" fill="#13AA52" />
    {/* Express text dot */}
    <circle cx="15" cy="34" r="2.5" fill="#E2E8F0" />
    <circle cx="33" cy="34" r="2.5" fill="#F59E0B" />
  </svg>
)

// 6. DOTNET (.NET) ICON: Microsoft .NET Royal Violet Hexagon with C# signature aura
export const DotNetIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label=".NET Icon"
  >
    <defs>
      <linearGradient id="dotNetGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#68217A" />
        <stop offset="0.6" stopColor="#512BD4" />
        <stop offset="1" stopColor="#7B3FE4" />
      </linearGradient>
    </defs>
    {/* Rounded Hexagon */}
    <path
      d="M24 4L41 14V34L24 44L7 34V14L24 4Z"
      fill="url(#dotNetGrad)"
      stroke="#9353D3"
      strokeWidth="1.5"
    />
    {/* Dot */}
    <circle cx="16" cy="30" r="3.2" fill="#FFFFFF" />
    {/* NET styled text representation */}
    <path
      d="M17 17V26M17 17L24 26M24 17V26"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 17H34M31 17V26"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// 7. CLOUD ENGINEER ICON: Multi-cloud infrastructure, cluster servers & global satellite rays
export const CloudEngineerIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Cloud Engineer Icon"
  >
    <defs>
      <linearGradient id="cloudGrad" x1="10" y1="10" x2="38" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    {/* Primary Cloud Silhouette */}
    <path
      d="M34 26C36.7614 26 39 23.7614 39 21C39 18.4239 37.054 16.3023 34.5422 16.0305C33.6893 11.4552 29.689 8 24.8 8C20.478 8 16.8208 10.7416 15.4619 14.6185C14.9961 14.4754 14.5056 14.4 14 14.4C10.6863 14.4 8 17.0863 8 20.4C8 23.5049 10.36 26.0592 13.3889 26.3703"
      fill="url(#cloudGrad)"
    />
    {/* Connected Infrastructure Server Racks Below */}
    <rect x="12" y="28" width="24" height="6" rx="2" fill="#1E293B" stroke="#0EA5E9" strokeWidth="1.5" />
    <rect x="12" y="37" width="24" height="6" rx="2" fill="#1E293B" stroke="#0EA5E9" strokeWidth="1.5" />
    {/* Server LED indicators */}
    <circle cx="16" cy="31" r="1.2" fill="#10B981" />
    <circle cx="20" cy="31" r="1.2" fill="#38BDF8" />
    <circle cx="16" cy="40" r="1.2" fill="#10B981" />
    <circle cx="20" cy="40" r="1.2" fill="#F59E0B" />
    {/* Network Connectors */}
    <path d="M24 26V28M24 34V37" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// 8. DEVOPS ICON: Radiant gradient infinity loop with CI/CD deployment rocket & gear
export const DevOpsIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="DevOps Icon"
  >
    <defs>
      <linearGradient id="devOpsGrad" x1="4" y1="24" x2="44" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06B6D4" />
        <stop offset="0.5" stopColor="#6366F1" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    {/* Infinity Loop */}
    <path
      d="M14 16C8.47715 16 4 20.4772 4 26C4 31.5228 8.47715 36 14 36C20.5 36 24 26 24 26C24 26 27.5 16 34 16C39.5228 16 44 20.4772 44 26C44 31.5228 39.5228 36 34 36C27.5 36 24 26 24 26C24 26 20.5 16 14 16Z"
      stroke="url(#devOpsGrad)"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Central gear spark */}
    <circle cx="24" cy="26" r="3.5" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2" />
    {/* Deployment rocket tip */}
    <path d="M33 22L36 19L37 23L33 22Z" fill="#F43F5E" />
    <path d="M15 30L12 33L11 29L15 30Z" fill="#06B6D4" />
  </svg>
)

// 9. DIGITAL MARKETING ICON: 3D angled megaphone, sound wave arcs, and upward marketing analytics
export const DigitalMarketingIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Digital Marketing Icon"
  >
    <defs>
      <linearGradient id="dmGrad" x1="6" y1="10" x2="36" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F43F5E" />
        <stop offset="1" stopColor="#FB923C" />
      </linearGradient>
    </defs>
    {/* Megaphone Cone */}
    <path
      d="M10 20H15L27 12V34L15 26H10C8.89543 26 8 25.1046 8 24V22C8 20.8954 8.89543 20 10 20Z"
      fill="url(#dmGrad)"
    />
    {/* Megaphone Handle */}
    <path
      d="M14 26L17 38H21L18 26"
      fill="#E11D48"
    />
    {/* Broadcast Sound & Growth Waves */}
    <path
      d="M32 16C34.5 18.5 36 21.5 36 23C36 24.5 34.5 27.5 32 30"
      stroke="#F59E0B"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M37 11C41 15 43 19.5 43 23C43 26.5 41 31 37 35"
      stroke="#FB7185"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Sparkle star */}
    <path d="M30 8L31 11L34 12L31 13L30 16L29 13L26 12L29 11L30 8Z" fill="#FBBF24" />
  </svg>
)

// 10. PHP ICON: Classic oval pill with modern sleek PHP typography
export const PhpIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="PHP Logo"
  >
    <defs>
      <linearGradient id="phpOval" x1="4" y1="12" x2="44" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8892BF" />
        <stop offset="0.6" stopColor="#4F5D95" />
        <stop offset="1" stopColor="#2D3748" />
      </linearGradient>
    </defs>
    {/* Background Oval Badge */}
    <ellipse cx="24" cy="24" rx="20" ry="14" fill="url(#phpOval)" stroke="#8892BF" strokeWidth="1.5" />
    {/* PHP Letters */}
    <text
      x="24"
      y="28.5"
      fill="#FFFFFF"
      fontSize="14"
      fontFamily="Montserrat, sans-serif"
      fontWeight="900"
      textAnchor="middle"
      letterSpacing="1"
    >
      php
    </text>
  </svg>
)

// 11. SAP ICON: Enterprise sapphire SAP rhombus/crystal with enterprise ERP grid
export const SapIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="SAP Logo"
  >
    <defs>
      <linearGradient id="sapGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#008FD3" />
        <stop offset="1" stopColor="#0A2A66" />
      </linearGradient>
    </defs>
    {/* Crystal polygon */}
    <path
      d="M7 10H31L42 24L31 38H7L12 24L7 10Z"
      fill="url(#sapGrad)"
      stroke="#38BDF8"
      strokeWidth="1.5"
    />
    <text
      x="23"
      y="29"
      fill="#FFFFFF"
      fontSize="13"
      fontFamily="Montserrat, sans-serif"
      fontWeight="900"
      textAnchor="middle"
      letterSpacing="1.5"
    >
      SAP
    </text>
  </svg>
)

// 12. SOFTWARE TESTING ICON: QA check verification shield, automated scanner & passed test marks
export const SoftwareTestingIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Software Testing Icon"
  >
    <defs>
      <linearGradient id="qaShield" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
    </defs>
    {/* Testing Monitor */}
    <rect x="6" y="8" width="36" height="26" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="2" />
    <path d="M19 34L17 42H31L29 34" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
    {/* Passed Checkmark in Green */}
    <circle cx="20" cy="20" r="7" fill="url(#qaShield)" />
    <path d="M17 20L19.5 22.5L23.5 17.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Bug icon next to it */}
    <rect x="29" y="16" width="6" height="8" rx="3" fill="#EF4444" />
    <path d="M27 18H29M35 18H37M27 22H29M35 22H37" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// 13. UI & UX ICON: Figma-style bezier loops, mobile artboard frame and pen tool
export const UiUxIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="UI & UX Icon"
  >
    <defs>
      <linearGradient id="uiPill1" x1="12" y1="8" x2="24" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F24E1E" />
        <stop offset="1" stopColor="#FF7262" />
      </linearGradient>
      <linearGradient id="uiPill2" x1="24" y1="8" x2="36" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A259FF" />
        <stop offset="1" stopColor="#C490E4" />
      </linearGradient>
      <linearGradient id="uiPill3" x1="12" y1="20" x2="24" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1ABCFE" />
        <stop offset="1" stopColor="#0ACF83" />
      </linearGradient>
    </defs>
    {/* Mobile Artboard Outline */}
    <rect x="8" y="6" width="32" height="36" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
    {/* Colorful design components inside */}
    <rect x="13" y="11" width="10" height="9" rx="4.5" fill="url(#uiPill1)" />
    <circle cx="28.5" cy="15.5" r="4.5" fill="url(#uiPill2)" />
    <rect x="13" y="23" width="10" height="9" rx="4.5" fill="url(#uiPill3)" />
    {/* Pen Tool pointer */}
    <path
      d="M31 23L38 30L34 34L27 27L31 23Z"
      fill="#6366F1"
    />
    <circle cx="27" cy="27" r="1.5" fill="#FFFFFF" />
  </svg>
)

// 14. AWS ICON: Amazon Web Services slate badge with signature orange smile arrow
export const AwsIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="AWS Logo"
  >
    <defs>
      <linearGradient id="awsDark" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#232F3E" />
        <stop offset="1" stopColor="#131A22" />
      </linearGradient>
    </defs>
    {/* Card base */}
    <rect x="4" y="6" width="40" height="36" rx="8" fill="url(#awsDark)" stroke="#374151" strokeWidth="1" />
    {/* AWS Text */}
    <text
      x="24"
      y="24"
      fill="#FFFFFF"
      fontSize="15"
      fontFamily="Montserrat, sans-serif"
      fontWeight="900"
      textAnchor="middle"
      letterSpacing="1.5"
    >
      aws
    </text>
    {/* Signature Amazon curved orange smile */}
    <path
      d="M13 29C17 33.5 31 33.5 35 29"
      stroke="#FF9900"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M33 28L36.5 29L35 32"
      fill="#FF9900"
    />
  </svg>
)

// 15. DATA SCIENCE & AI ICON: Futuristic neural network brain with glowing synaptic connections
export const DataScienceIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Data Science & AI Icon"
  >
    <defs>
      <linearGradient id="aiGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    {/* Neural Network Nodes */}
    <circle cx="12" cy="16" r="3.5" fill="#8B5CF6" />
    <circle cx="12" cy="32" r="3.5" fill="#8B5CF6" />
    <circle cx="24" cy="10" r="3.5" fill="#3B82F6" />
    <circle cx="24" cy="24" r="4.5" fill="url(#aiGrad)" />
    <circle cx="24" cy="38" r="3.5" fill="#3B82F6" />
    <circle cx="36" cy="16" r="3.5" fill="#06B6D4" />
    <circle cx="36" cy="32" r="3.5" fill="#06B6D4" />
    {/* Synaptic Interconnections */}
    <path
      d="M12 16L24 10M12 16L24 24M12 32L24 24M12 32L24 38M24 10L36 16M24 24L36 16M24 24L36 32M24 38L36 32"
      stroke="url(#aiGrad)"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.8"
    />
    {/* Sparkle core */}
    <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
  </svg>
)

// 16. CYBER SECURITY ICON: High-tech cyber shield with glowing padlock & matrix tracks
export const CyberSecurityIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Cyber Security Icon"
  >
    <defs>
      <linearGradient id="secShield" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#0F172A" />
      </linearGradient>
    </defs>
    {/* Defense Shield */}
    <path
      d="M24 4L39 10V21C39 31.5 32.5 40 24 44C15.5 40 9 31.5 9 21V10L24 4Z"
      fill="url(#secShield)"
      stroke="#38BDF8"
      strokeWidth="2"
    />
    {/* Digital Padlock */}
    <rect x="18" y="22" width="12" height="10" rx="2" fill="#38BDF8" />
    <path
      d="M20 22V18C20 15.7909 21.7909 14 24 14C26.2091 14 28 18 28 18V22"
      stroke="#F8FAFC"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="27" r="1.5" fill="#0F172A" />
  </svg>
)

// 17. C / C++ ICON: High performance chip with C++ syntax accents
export const CppIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="C++ Logo"
  >
    <defs>
      <linearGradient id="cppGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00599C" />
        <stop offset="1" stopColor="#004482" />
      </linearGradient>
    </defs>
    {/* Rounded Hexagon */}
    <path
      d="M24 5L40 14V34L24 43L8 34V14L24 5Z"
      fill="url(#cppGrad)"
      stroke="#659AD2"
      strokeWidth="1.5"
    />
    <text
      x="24"
      y="29"
      fill="#FFFFFF"
      fontSize="13"
      fontFamily="Montserrat, sans-serif"
      fontWeight="900"
      textAnchor="middle"
      letterSpacing="0.5"
    >
      C++
    </text>
  </svg>
)

// 18. MOBILE APP DEVELOPMENT ICON: Dual smartphone frames with responsive UI & cross-platform Flutter/React Native accents
export const MobileAppIcon: React.FC<TechIconProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Mobile App Development Icon"
  >
    <defs>
      <linearGradient id="mobileGrad" x1="10" y1="6" x2="38" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    {/* Smartphone Frame */}
    <rect x="12" y="6" width="24" height="36" rx="5" fill="#0F172A" stroke="#6366F1" strokeWidth="2" />
    <path d="M21 9H27" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="37" r="1.5" fill="#94A3B8" />
    {/* Screen App UI */}
    <rect x="15" y="13" width="18" height="20" rx="2" fill="url(#mobileGrad)" />
    <circle cx="24" cy="21" r="3.5" fill="#FFFFFF" />
    <path d="M19 28H29" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
