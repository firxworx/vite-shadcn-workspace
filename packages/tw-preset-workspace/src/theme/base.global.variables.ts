import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'
import { rgbVar } from '../helpers/colors'
import type { TailwindColorName, TailwindColorShadeNumber } from '../types'

/**
 * Return a `CSSRuleObject` containing the CSS custom properties (CSS variable definitions) of this preset.
 *
 * A recommended practice is to add unique prefix to namespace all custom properties to avoid conflicts with
 * CSS variables that may be set by other plugins or libraries.
 *
 * Many of our projects conventionally use `P` (for _palette_) to namespace custom palette colors.
 *
 * Tip: you can use the `theme()` function to reference colors or other properties from the computed theme.
 *
 * Examples:
 *
 * ```ts
 * color: theme('colors.red.500')
 * fontSize: theme('fontSize.xl')
 * spacing: theme('spacing.4')
 * example: theme('colors.P.customName.DEFAULT') // custom palette color with `P` prefix
 * ```
 */
export function getCssCustomProperties(theme: PluginAPI['theme']): Record<':root' | '.dark', CSSRuleObject> {
  // helper to extract a _palette value_ (pv) from a Tailwind color name and shade number (assumes tailwind RGB palette)
  const pv = (color: TailwindColorName, value: TailwindColorShadeNumber): string => {
    return rgbVar(theme(`colors.${color}.${value}`))
  }

  return {
    ':root': {
      '--P-brand': pv('purple', 600),
      '--P-brand-alt': pv('purple', 500),

      '--P-link': pv('sky', 800),
      '--P-link-hover': pv('sky', 700),
    },
    '.dark': {
      '--P-brand': pv('purple', 500),
      '--P-brand-alt': pv('purple', 400),

      '--P-link': pv('sky', 600),
      '--P-link-hover': pv('sky', 500),
    },
  }
}
