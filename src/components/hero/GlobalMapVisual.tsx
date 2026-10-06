import React from 'react'
import { HeroStudentsVisual } from './HeroStudentsVisual'

/**
 * Replaces the previous right-side global map visual completely with
 * the modern IT students visual featuring cursor-following parallax,
 * ambient glow, and floating technology badges.
 */
export const GlobalMapVisual: React.FC = () => {
  return <HeroStudentsVisual />
}

export { HeroStudentsVisual }
export default GlobalMapVisual