import { twRgbCv } from '../helpers/colors'
import type { ColorsConfig } from '../types'

/**
 * Extended palette colors.
 *
 * Project convention will add these to the preset under a `P` key (for _palette_) so they are
 * easily distinguished from default TailwindCSS colors and easy to search in the codebase.
 */
export const presetColors: ColorsConfig = {
  brand: {
    DEFAULT: twRgbCv('--P-brand'),
    alt: twRgbCv('--P-brand-alt'),
  },

  link: {
    DEFAULT: twRgbCv('--P-link'),
    hover: twRgbCv('--P-link-hover'),
  },

  // example logic for adding custom palette colors (assumes helper function twColorVarValue() exists)
  //
  // ...['background', 'foreground', 'border', 'ring', 'input', 'overlay'].reduce<ColorsEntry>((acc, key) => {
  //   acc[key] = {
  //     DEFAULT: twColorVarValue(`--P-${key}`, 'oklch'),
  //   }
  //   return acc
  // }, {}),
}
