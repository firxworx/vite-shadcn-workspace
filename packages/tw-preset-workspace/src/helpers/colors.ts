/**
 * Return only the rgb channel values from a css hex-value rgb color definition such as '#fafafa'.
 * Helper for populating css custom properties (css variables).
 */
export function rgbVar(input: string): string {
  const result = extractHexRgbToChannelValues(input)

  if (!result) {
    throw new Error(`Invalid oklch color value: ${input}`)
  }

  const { r, g, b } = result
  return `${r} ${g} ${b}`
}

/**
 * Converts a hex color string to an object with individual RGB channel values (as base 10 integers as strings).
 * Returns `undefined` if the given hex string is invalid.
 *
 * @param {string} hex - input hex color string
 * @returns {{r: number, g: number, b: number}|undefined} - triple representing the RGB channel values or undefined
 */
export function extractHexRgbToChannelValues(input: string): Record<'r' | 'g' | 'b', string> | undefined {
  // trim and strip leading # if present to normalize the input
  const hex = input.trim().replace(/^#/, '')

  // ensure the hex code is either 6 or 3 characters long and in valid hex range
  if (typeof hex !== 'string' || !/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(hex)) {
    return undefined
  }

  // expand shorthand form (e.g. "#03F") to full form (e.g. "#0033FF")
  const result = hex.length === 3 ? `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}` : hex

  // return extracted values with conversion from hex to decimal
  return {
    r: String(Number.parseInt(result.slice(0, 2), 16)),
    g: String(Number.parseInt(result.slice(2, 4), 16)),
    b: String(Number.parseInt(result.slice(4, 6), 16)),
  }
}

/**
 * Normalize a CSS variable name to the format `--<name>` given an input that may or may not
 * already be in this format e.g. transforms `--<name>` to `--<name>` and `<name>` to `--<name>`.
 */
function normalizeCssVar(input: string): string {
  return `--${input.replace(/^--/, '')}`
}

/**
 * Return a `var(--<input>)` string for a CSS variable name.
 * The `--` prefix will be prepended to input values that do not already have it.
 */
function cssVar(input: string): string {
  return `var(${normalizeCssVar(input)})`
}

/**
 * Return a _tailwind color value_ for `theme.colors...` for a given CSS variable name and color space function.
 */
export function twcv(cssVarName: string, csf: 'rgb' | 'hsl' | 'oklch', defaultOpacity?: number | null): string {
  return defaultOpacity === null
    ? `${csf}(${cssVar(cssVarName)})`
    : `${csf}(${cssVar(cssVarName)} / ${defaultOpacity ?? '<alpha-value>'})`
}

/**
 * Return a _tailwind color value_ for `theme.colors...` for a given CSS variable name that stores channel values
 * for the CSS `rgb()` color space function.
 */
export function twRgbCv(cssVarName: string, defaultOpacity?: number | null): string {
  return twcv(cssVarName, 'rgb', defaultOpacity)
}
