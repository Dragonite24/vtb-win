import { useLayoutEffect, useState } from 'react'

import { breakpoints } from './breakpoints'

const queries = [
  `(max-width: ${breakpoints.mobile - 1}px)`,
  `(min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet - 1}px)`,
  `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  `(min-width: ${breakpoints.desktop}px)`
]

type IMatchedMedia = {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isOriginal: boolean
}

const initialValue: IMatchedMedia = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isOriginal: false
}
export const useDimensions = () => {
  const [matches, setMatches] = useState(() => queries.map((query) => matchMedia(query).matches))

  useLayoutEffect(() => {
    const mediaQueryLists = queries.map((q) => matchMedia(q))

    const handler = () => {
      const values = mediaQueryLists.map((el) => el.matches)
      setMatches(values)
      return values
    }
    // listeners -> https://github.com/microsoft/TypeScript/issues/32210
    mediaQueryLists.forEach((el) => el.addListener(handler))
    return (): void => mediaQueryLists.forEach((el) => el.removeListener(handler))
  }, [])

  if (typeof window === 'undefined') {
    return initialValue
  }

  return matches.reduce((prev: IMatchedMedia, curr, i) => {
    const keyType = Object.keys(prev)
    return {
      ...prev,
      [keyType[i]]: curr
    }
  }, initialValue)
}
