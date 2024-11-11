/**
 * Returns the input string normalized to have exactly one leading slash.
 */
export function leadingSlash(input: string): string {
  return `/${input.replace(/^\/+/g, '')}`
}

/**
 * Returns the input string normalized to have exactly one trailing slash.
 */
export function trailingSlash(input: string): string {
  return `${input.replace(/\/+$/g, '')}/`
}

/**
 * Returns the input string normalized to have exactly one leading and exactly one trailing slash.
 * Handles edge cases of empty string, '/', and '//' by returning '/' for consistency with pathnames and URLs.
 */
export function ensureSlashes(input: string): string {
  return input === '' || input === '/' || input === '//' ? '/' : `/${input.replace(/(^\/+|\/+$)/g, '')}/`
}

/**
 * Remove all leading slashes from the input string if present.
 * Returns empty string if given '/' as input.
 */
export function stripLeadingSlashes(input: string): string {
  return input.replace(/^\/+/, '')
}

/**
 * Remove all trailing slashes from the input string if present.
 * Returns empty string if given '/' as input.
 */
export function stripTrailingSlashes(input: string): string {
  return input.replace(/\/+$/, '')
}
