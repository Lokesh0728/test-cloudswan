import React, { useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
  target: number
  duration?: number // in ms, default 2000
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [currentValue, setCurrentValue] = useState<number>(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const hasAnimatedRef = useRef<boolean>(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setCurrentValue(target)
      hasAnimatedRef.current = true
      return
    }

    const startCounting = () => {
      if (hasAnimatedRef.current) return
      hasAnimatedRef.current = true

      const startTime = performance.now()

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Ease out quartic: fast start, soft gentle landing
        const easeOut = 1 - Math.pow(1 - progress, 4)
        const current = easeOut * target

        setCurrentValue(current)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCurrentValue(target)
        }
      }

      requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          startCounting()
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
        rootMargin: '20px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [target, duration])

  // Format value with commas and specified decimal precision
  const formatNumber = (val: number): string => {
    if (decimals > 0) {
      return val.toFixed(decimals)
    }
    return Math.floor(val).toLocaleString('en-US')
  }

  return (
    <span ref={elementRef} className={`inline-flex items-center tabular-nums ${className}`}>
      {prefix}
      <span>{formatNumber(currentValue)}</span>
      {suffix}
    </span>
  )
}
