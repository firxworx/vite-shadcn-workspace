import type { CustomThemeConfig, RecursiveKeyValuePair } from 'tailwindcss/types/config'
import type { DefaultColors } from 'tailwindcss/types/generated/colors'

export type ColorsConfig = CustomThemeConfig['colors']
export type ColorsEntry = RecursiveKeyValuePair<string, string>

/**
 * Transform a type like `'50' | '100' | '200'` to its number equivalent `50 | 100 | 200`.
 */
export type NumberStringToNumber<S extends string> = S extends `${infer N extends number}` ? N : never

/**
 * Tailwind color names (of the default palette) minus the special colors:
 * `inherit`, `current`, `transparent`, `black`, and `white`.
 *
 * @see https://tailwindcss.com/docs/customizing-colors
 */
export type TailwindColorName = keyof Omit<DefaultColors, 'inherit' | 'current' | 'transparent' | 'black' | 'white'>

/**
 * Type of Tailwind color shade values (of the default palette) as strings that correspond to the keys of
 * palette color objects of any given color name (except for the special colors 'black' and 'white').
 *
 * Note: 'neutral' in the type definition is an arbitrary value to get the types of the shade keys;
 * it could be any color name because each color has the same shade keys.
 */
export type TailwindColorShade = NumberStringToNumber<keyof DefaultColors['neutral']>

/**
 * Type of Tailwind color shade values (of the default palette) as numbers vs. strings
 * as a convienence for various use-cases.
 *
 * @see TailwindColorShade
 */
export type TailwindColorShadeNumber = NumberStringToNumber<keyof DefaultColors['neutral']>
