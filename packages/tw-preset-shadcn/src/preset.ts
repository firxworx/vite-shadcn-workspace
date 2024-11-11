import type { PresetsConfig } from 'tailwindcss/types/config'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindCssAnimatePlugin from 'tailwindcss-animate'

import { themeColors } from './theme/theme.extend.colors'
import { shadcnPresetBaseStylesPlugin, shadcnPresetCssVariablesPlugin } from './plugins'

/**
 * Community/third-party plugin(s) required by shadcn/ui to be added by the preset.
 */
export const shadcnPresetPluginDependencies: NonNullable<PresetsConfig['plugins']> = [tailwindCssAnimatePlugin]

/**
 * The preset excludes `content: []` as this should be the responsibility of each app or package.
 * `Partial<Omit<Config, 'content'>>`
 *
 * @see https://ui.shadcn.com/docs/installation/manual
 */
export const shadcnPreset: PresetsConfig = {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        ...themeColors,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [...shadcnPresetPluginDependencies, shadcnPresetCssVariablesPlugin, shadcnPresetBaseStylesPlugin],
} satisfies PresetsConfig

export default shadcnPreset
