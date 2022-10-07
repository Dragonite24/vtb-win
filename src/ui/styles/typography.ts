import { css } from 'styled-components'

import { theme, Theme } from './theme'

export type TypographyVariants = keyof Theme['typography']

export const getStyles = (variant: TypographyVariants) => {
  const styles = theme.typography[variant]
  return css`
    ${Object.keys(styles)
      .map((key) => {
        const name = key.replace(/([A-Z])/g, '-$1').toLowerCase()
        return `${name}: ${(styles as any)[key]};`
      })
      .join(' ')}
  `
}
