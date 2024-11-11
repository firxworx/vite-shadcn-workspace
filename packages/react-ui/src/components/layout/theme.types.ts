export const THEME_MODE_KEYS = ['dark', 'light', 'system'] as const

/**
 * Type representing 'dark', 'light', or 'system' theme modes of a light/dark theme.
 */
export type ThemeMode = (typeof THEME_MODE_KEYS)[number]

/**
 * Type representing strictly 'light' or 'dark' theme modes.
 */
export type Theme = Exclude<ThemeMode, 'system'>

export type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: ThemeMode
  storageKey?: string
}

export type ThemeProviderState = {
  active: Extract<ThemeMode, 'light' | 'dark'>
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
}
