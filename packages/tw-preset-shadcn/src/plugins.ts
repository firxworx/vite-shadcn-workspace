import plugin from 'tailwindcss/plugin'
import { cssCustomProperties } from './theme/base.global.css'

/**
 * Custom tailwindcss plugin that adds CSS custom properties (CSS variables)
 * that define the HSL color palette and border radius values for the shadcn/ui theme.
 *
 * @see https://ui.shadcn.com/docs/installation/manual
 */
export const shadcnPresetCssVariablesPlugin = plugin(({ addBase }) => {
  addBase({
    ':root': cssCustomProperties[':root'],
    '.dark': cssCustomProperties['.dark'],
  })
})

/**
 * Custom tailwindcss plugin that adds global CSS styles to tailwind's base layer.
 */
export const shadcnPresetBaseStylesPlugin = plugin(({ addBase }) => {
  addBase({
    '*': {
      '@apply border-border': {},
    },
    html: {
      '@apply bg-background text-foreground': {},
    },
  })
})
