import React from 'react'

interface OrangeGradientProps {
  children: React.ReactNode
  dark?: boolean
  className?: string
}

/**
 * Reusable inline span that applies the signature CloudSwan vibrant orange-amber gradient.
 */
export const OrangeGradient: React.FC<OrangeGradientProps> = ({
  children,
  dark = false,
  className = '',
}) => {
  return (
    <span
      className={`${
        dark
          ? 'bg-gradient-to-r from-accent-400 via-orange-400 to-amber-300'
          : 'bg-gradient-to-r from-accent-500 via-orange-500 to-amber-500'
      } bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}

interface GradientTitleProps {
  text: string
  highlight?: string
  dark?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div'
  className?: string
  id?: string
}

/**
 * Smart Title Formatter that wraps key words in the signature CloudSwan orange gradient.
 * Works with explicit `highlight` prop or automatically detects key thematic phrases.
 */
export const GradientTitle: React.FC<GradientTitleProps> = ({
  text,
  highlight,
  dark = false,
  as: Component = 'h2',
  className = '',
  id,
}) => {
  if (!text) return null

  // 1. If explicit highlight is provided
  if (highlight && highlight.trim()) {
    const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(${escapedHighlight})`, 'gi')
    const parts = text.split(regex)

    if (parts.length > 1) {
      return (
        <Component id={id} className={className}>
          {parts.map((part, i) =>
            regex.test(part) ? (
              <OrangeGradient key={i} dark={dark}>
                {part}
              </OrangeGradient>
            ) : (
              <React.Fragment key={i}>{part}</React.Fragment>
            )
          )}
        </Component>
      )
    }
  }

  // 2. Smart automatic detection of key phrases
  // Case A: Suffix "in Coimbatore"
  if (text.toLowerCase().includes('in coimbatore')) {
    const parts = text.split(/(in coimbatore)/i)
    return (
      <Component id={id} className={className}>
        {parts.map((part, i) =>
          /in coimbatore/i.test(part) ? (
            <OrangeGradient key={i} dark={dark}>
              {part}
            </OrangeGradient>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Component>
    )
  }

  // Case B: Starts with "Why Learn " -> highlight the technology name following it
  if (text.toLowerCase().startsWith('why learn ')) {
    const prefix = text.slice(0, 10)
    const rest = text.slice(10)
    return (
      <Component id={id} className={className}>
        {prefix}
        <OrangeGradient dark={dark}>{rest}</OrangeGradient>
      </Component>
    )
  }

  // Case C: "Why Choose CloudSwan" -> highlight "CloudSwan"
  if (/why choose cloudswan/i.test(text)) {
    const parts = text.split(/(cloudswan)/i)
    return (
      <Component id={id} className={className}>
        {parts.map((part, i) =>
          /cloudswan/i.test(part) ? (
            <OrangeGradient key={i} dark={dark}>
              {part}
            </OrangeGradient>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Component>
    )
  }

  // Case D: "Tools & Technologies" -> highlight "Technologies"
  if (/tools & technologies/i.test(text)) {
    const parts = text.split(/(technologies)/i)
    return (
      <Component id={id} className={className}>
        {parts.map((part, i) =>
          /technologies/i.test(part) ? (
            <OrangeGradient key={i} dark={dark}>
              {part}
            </OrangeGradient>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Component>
    )
  }

  // Case E: "Frequently Asked Questions" -> highlight "Questions"
  if (/frequently asked questions/i.test(text)) {
    const parts = text.split(/(questions)/i)
    return (
      <Component id={id} className={className}>
        {parts.map((part, i) =>
          /questions/i.test(part) ? (
            <OrangeGradient key={i} dark={dark}>
              {part}
            </OrangeGradient>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Component>
    )
  }

  // Case F: "Who Can Join This Course?" -> highlight "This Course?" or "Join"
  if (/who can join this course\??/i.test(text)) {
    const parts = text.split(/(this course\??)/i)
    return (
      <Component id={id} className={className}>
        {parts.map((part, i) =>
          /this course\??/i.test(part) ? (
            <OrangeGradient key={i} dark={dark}>
              {part}
            </OrangeGradient>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Component>
    )
  }

  // Case G: Suffix "Portfolio"
  if (/\bportfolio\b/i.test(text)) {
    const parts = text.split(/(\bportfolio\b)/i)
    return (
      <Component id={id} className={className}>
        {parts.map((part, i) =>
          /\bportfolio\b/i.test(part) ? (
            <OrangeGradient key={i} dark={dark}>
              {part}
            </OrangeGradient>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Component>
    )
  }

  // Case H: Contains "Opportunities"
  if (/opportunities/i.test(text)) {
    const parts = text.split(/(opportunities)/i)
    return (
      <Component id={id} className={className}>
        {parts.map((part, i) =>
          /opportunities/i.test(part) ? (
            <OrangeGradient key={i} dark={dark}>
              {part}
            </OrangeGradient>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Component>
    )
  }

  // Case I: Contains "Blueprint" or "Roadmap"
  if (/(blueprint|roadmap)/i.test(text)) {
    const parts = text.split(/(blueprint|roadmap)/i)
    return (
      <Component id={id} className={className}>
        {parts.map((part, i) =>
          /(blueprint|roadmap)/i.test(part) ? (
            <OrangeGradient key={i} dark={dark}>
              {part}
            </OrangeGradient>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Component>
    )
  }

  // Case J: Contains "Projects"
  if (/\bprojects\b/i.test(text)) {
    const parts = text.split(/(\bprojects\b)/i)
    return (
      <Component id={id} className={className}>
        {parts.map((part, i) =>
          /\bprojects\b/i.test(part) ? (
            <OrangeGradient key={i} dark={dark}>
              {part}
            </OrangeGradient>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </Component>
    )
  }

  // Case K: Default Fallback: Highlight the last 1 or 2 words if text has multiple words
  const words = text.trim().split(/\s+/)
  if (words.length >= 3) {
    const highlightCount = words.length > 5 ? 2 : 1
    const mainPart = words.slice(0, words.length - highlightCount).join(' ')
    const highlightedPart = words.slice(words.length - highlightCount).join(' ')
    return (
      <Component id={id} className={className}>
        {mainPart}{' '}
        <OrangeGradient dark={dark}>{highlightedPart}</OrangeGradient>
      </Component>
    )
  }

  if (words.length === 2) {
    return (
      <Component id={id} className={className}>
        {words[0]}{' '}
        <OrangeGradient dark={dark}>{words[1]}</OrangeGradient>
      </Component>
    )
  }

  // Single word
  return (
    <Component id={id} className={className}>
      <OrangeGradient dark={dark}>{text}</OrangeGradient>
    </Component>
  )
}
