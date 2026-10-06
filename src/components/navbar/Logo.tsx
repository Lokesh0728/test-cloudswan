import React from 'react'
import logoImg from '../../assets/logo.png'

interface LogoProps {
  onClick?: () => void
  className?: string
  imgClassName?: string
}

export const Logo: React.FC<LogoProps> = ({
  onClick,
  className = '',
  imgClassName = 'h-10 sm:h-11 lg:h-[50px] w-auto',
}) => {
  return (
    <a
      href="/"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
      }}
      className={`group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg p-0.5 transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="CloudSwan Institute Home"
    >
      <img
        src={logoImg}
        alt="CloudSwan Institute"
        className={`object-contain drop-shadow-xs transition-opacity duration-200 group-hover:opacity-95 ${imgClassName}`}
        width={204}
        height={192}
        loading="eager"
      />
    </a>
  )
}
