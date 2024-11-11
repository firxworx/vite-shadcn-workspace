import { createContext, useMemo, useState } from 'react'

import { useIsomorphicEffect } from '#hooks/use-isomorphic-effect'
import type { ThemeMode, ThemeProviderProps, ThemeProviderState } from './theme.types'

const initialState: ThemeProviderState = {
  active: 'light',
  theme: 'system',
  setTheme: () => null,
}

export const ThemeContext = createContext<ThemeProviderState>(initialState)

/**
 * Theme context provider is a React context provider and manager for React SPA's (likely powered by Vite)
 * that supports 'light', 'dark', and 'system' (default) themes.
 *
 * This provider has a useEffect that applies either 'light' or 'dark' class to the document element (`html` tag)
 * based on the current theme.
 *
 * The current theme is persisted in localStorage to persist across page reloads.
 *
 * This provider should be placed at or near the root of the React component tree to ensure that all components have
 * access to the theme context. Child components can use the `useViteThemeContext` hook to access the current theme.
 *
 * @see useViteThemeContext
 * @see https://ui.shadcn.com/docs/dark-mode/vite for original implementation this was adapted from
 */
export function ThemeContextProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<ThemeMode>(() => (localStorage.getItem(storageKey) as ThemeMode) || defaultTheme)

  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>(() =>
    (localStorage.getItem(storageKey) as ThemeMode) || defaultTheme === 'system' ? 'light' : defaultTheme,
  )

  useIsomorphicEffect(() => {
    const root = globalThis.window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

      root.classList.add(systemTheme)
      setActiveTheme(systemTheme)
      return
    }

    root.classList.add(theme)
    setActiveTheme(theme)
  }, [theme])

  const value = useMemo(
    () => ({
      active: activeTheme,
      theme,
      setTheme: (theme: ThemeMode): void => {
        localStorage.setItem(storageKey, theme)
        setTheme(theme)
      },
    }),
    [theme, activeTheme, storageKey],
  )

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
