/**
 * The base font size in pixels for the HTML element to define the value of 1rem.
 *
 * In VSCode revise `tailwindCSS.rootFontSize` in `.vscode/settings.json` to match this base font size (in pixels)
 * so that IntelliSense computes the correct pixel values of rem units.
 *
 * The default of both TailwindCSS and HTML documents in general is `16` pixels.
 */
export const HTML_BASE_FONT_SIZE_PX = 16

/**
 * Maximum width for prose content in ch (character) units.
 * Used to set `max-w-prose` in tailwind typography plugin customiztaions.
 */
export const MAX_W_PROSE_CH = 65

/**
 * Custom prefix to use for design system / brand color palette.
 * The letter 'P' refers to _palette_ per our workspace convention.
 */
export const PALETTE_CSS_VARIABLE_PREFIX = 'P'
