import type { CustomThemeConfig } from 'tailwindcss/types/config'

export type AnimationConfig = Pick<CustomThemeConfig, 'animation' | 'keyframes'>

/**
 * Additional animations and keyframes for the preset to add to the tailwind theme.
 */
export const presetAnimations: AnimationConfig = {
  animation: {},
  keyframes: {},
}
