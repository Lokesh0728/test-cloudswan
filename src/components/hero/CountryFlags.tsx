import React from 'react'

export interface FlagProps {
  className?: string
  size?: number
}

// UAE (United Arab Emirates) Flag
export const FlagUAE: React.FC<FlagProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="United Arab Emirates Flag"
  >
    <defs>
      <clipPath id="circle-uae">
        <circle cx="32" cy="32" r="30" />
      </clipPath>
    </defs>
    <g clipPath="url(#circle-uae)">
      {/* Green top bar */}
      <rect x="0" y="2" width="64" height="20" fill="#00732f" />
      {/* White middle bar */}
      <rect x="0" y="22" width="64" height="20" fill="#ffffff" />
      {/* Black bottom bar */}
      <rect x="0" y="42" width="64" height="20" fill="#000000" />
      {/* Red vertical bar on left */}
      <rect x="0" y="2" width="18" height="60" fill="#ff0000" />
    </g>
    <circle cx="32" cy="32" r="30" fill="none" stroke="#e2e8f0" strokeWidth="2" />
  </svg>
)

// Malaysia Flag
export const FlagMalaysia: React.FC<FlagProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Malaysia Flag"
  >
    <defs>
      <clipPath id="circle-my">
        <circle cx="32" cy="32" r="30" />
      </clipPath>
    </defs>
    <g clipPath="url(#circle-my)">
      {/* 14 alternating red and white stripes */}
      {Array.from({ length: 14 }).map((_, i) => (
        <rect
          key={i}
          x="0"
          y={2 + i * (60 / 14)}
          width="64"
          height={60 / 14}
          fill={i % 2 === 0 ? '#cc0000' : '#ffffff'}
        />
      ))}
      {/* Blue canton */}
      <rect x="0" y="2" width="34" height="34" fill="#010066" />
      {/* Yellow crescent */}
      <circle cx="16" cy="19" r="9" fill="#ffcc00" />
      <circle cx="19" cy="19" r="7.5" fill="#010066" />
      {/* 14-pointed star */}
      <polygon
        points="24,19 25,16 27,18 29,16 28,19 31,19 29,21 31,23 28,23 29,26 27,24 25,26 25,23 22,23 24,21 22,19"
        fill="#ffcc00"
      />
    </g>
    <circle cx="32" cy="32" r="30" fill="none" stroke="#e2e8f0" strokeWidth="2" />
  </svg>
)

// Australia Flag
export const FlagAustralia: React.FC<FlagProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Australia Flag"
  >
    <defs>
      <clipPath id="circle-au">
        <circle cx="32" cy="32" r="30" />
      </clipPath>
    </defs>
    <g clipPath="url(#circle-au)">
      {/* Blue Field */}
      <rect x="0" y="2" width="64" height="60" fill="#00008b" />
      
      {/* Union Jack in Canton */}
      <g>
        <rect x="0" y="2" width="30" height="28" fill="#00247d" />
        {/* White diagonals */}
        <line x1="0" y1="2" x2="30" y2="30" stroke="#ffffff" strokeWidth="5" />
        <line x1="0" y1="30" x2="30" y2="2" stroke="#ffffff" strokeWidth="5" />
        {/* Red diagonals */}
        <line x1="0" y1="2" x2="30" y2="30" stroke="#cf142b" strokeWidth="2.5" />
        <line x1="0" y1="30" x2="30" y2="2" stroke="#cf142b" strokeWidth="2.5" />
        {/* White cross */}
        <rect x="12" y="2" width="6" height="28" fill="#ffffff" />
        <rect x="0" y="13" width="30" height="6" fill="#ffffff" />
        {/* Red cross */}
        <rect x="13.5" y="2" width="3" height="28" fill="#cf142b" />
        <rect x="0" y="14.5" width="30" height="3" fill="#cf142b" />
      </g>

      {/* Commonwealth 7-pointed star under Union Jack */}
      <circle cx="15" cy="45" r="4.5" fill="#ffffff" />

      {/* Southern Cross stars on fly */}
      <circle cx="48" cy="14" r="2.2" fill="#ffffff" />
      <circle cx="54" cy="25" r="2.2" fill="#ffffff" />
      <circle cx="48" cy="46" r="2.5" fill="#ffffff" />
      <circle cx="40" cy="33" r="2.2" fill="#ffffff" />
      <circle cx="44" cy="39" r="1.5" fill="#ffffff" />
    </g>
    <circle cx="32" cy="32" r="30" fill="none" stroke="#e2e8f0" strokeWidth="2" />
  </svg>
)

// India Flag
export const FlagIndia: React.FC<FlagProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="India Flag"
  >
    <defs>
      <clipPath id="circle-in">
        <circle cx="32" cy="32" r="30" />
      </clipPath>
    </defs>
    <g clipPath="url(#circle-in)">
      {/* Saffron Top Bar */}
      <rect x="0" y="2" width="64" height="20" fill="#ff9933" />
      {/* White Middle Bar */}
      <rect x="0" y="22" width="64" height="20" fill="#ffffff" />
      {/* Green Bottom Bar */}
      <rect x="0" y="42" width="64" height="20" fill="#138808" />
      {/* Navy Ashoka Chakra */}
      <circle cx="32" cy="32" r="8" fill="none" stroke="#000080" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="2" fill="#000080" />
      {/* 24 spokes (represented cleanly) */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1={32 + 7.5 * Math.cos((i * Math.PI) / 6)}
          y1={32 + 7.5 * Math.sin((i * Math.PI) / 6)}
          x2={32 - 7.5 * Math.cos((i * Math.PI) / 6)}
          y2={32 - 7.5 * Math.sin((i * Math.PI) / 6)}
          stroke="#000080"
          strokeWidth="0.8"
        />
      ))}
    </g>
    <circle cx="32" cy="32" r="30" fill="none" stroke="#e2e8f0" strokeWidth="2" />
  </svg>
)

// Singapore Flag
export const FlagSingapore: React.FC<FlagProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Singapore Flag"
  >
    <defs>
      <clipPath id="circle-sg">
        <circle cx="32" cy="32" r="30" />
      </clipPath>
    </defs>
    <g clipPath="url(#circle-sg)">
      {/* Red Top Half */}
      <rect x="0" y="2" width="64" height="30" fill="#ed2939" />
      {/* White Bottom Half */}
      <rect x="0" y="32" width="64" height="30" fill="#ffffff" />
      {/* White Crescent */}
      <circle cx="19" cy="18" r="8" fill="#ffffff" />
      <circle cx="21.5" cy="18" r="7" fill="#ed2939" />
      {/* 5 Stars */}
      <circle cx="26" cy="14" r="1.2" fill="#ffffff" />
      <circle cx="29" cy="18" r="1.2" fill="#ffffff" />
      <circle cx="26" cy="22" r="1.2" fill="#ffffff" />
      <circle cx="23" cy="16" r="1.2" fill="#ffffff" />
      <circle cx="23" cy="20" r="1.2" fill="#ffffff" />
    </g>
    <circle cx="32" cy="32" r="30" fill="none" stroke="#e2e8f0" strokeWidth="2" />
  </svg>
)

// United Kingdom Flag
export const FlagUK: React.FC<FlagProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="United Kingdom Flag"
  >
    <defs>
      <clipPath id="circle-uk">
        <circle cx="32" cy="32" r="30" />
      </clipPath>
    </defs>
    <g clipPath="url(#circle-uk)">
      <rect x="0" y="2" width="64" height="60" fill="#012169" />
      {/* White diagonals */}
      <line x1="0" y1="2" x2="64" y2="62" stroke="#ffffff" strokeWidth="8" />
      <line x1="0" y1="62" x2="64" y2="2" stroke="#ffffff" strokeWidth="8" />
      {/* Red diagonals */}
      <line x1="0" y1="2" x2="64" y2="62" stroke="#c8102e" strokeWidth="4" />
      <line x1="0" y1="62" x2="64" y2="2" stroke="#c8102e" strokeWidth="4" />
      {/* White central cross */}
      <rect x="26" y="2" width="12" height="60" fill="#ffffff" />
      <rect x="0" y="26" width="64" height="12" fill="#ffffff" />
      {/* Red central cross */}
      <rect x="28.5" y="2" width="7" height="60" fill="#c8102e" />
      <rect x="0" y="28.5" width="64" height="7" fill="#c8102e" />
    </g>
    <circle cx="32" cy="32" r="30" fill="none" stroke="#e2e8f0" strokeWidth="2" />
  </svg>
)
