import { useContext } from 'react'
import type { ThemeProviderState } from '#components/layout/theme.types'
import { ThemeContext } from '#components/layout/theme-context-provider'

/**
 * React hook that provides components with access to the theme and theme setter.
 *
 * @see ThemeContextProvider this hook must be used within a child of ThemeContextProvider
 */
export const useThemeContext = (): ThemeProviderState => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext can only be used in children of ThemeContextProvider')
  }

  return context
}
