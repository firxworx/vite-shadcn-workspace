export const FILENAME_SAFE_CHARS_REGEX = /[^0-9a-zA-Z!\-_\.\*\(\)]/g

export interface SanitizeFileNameOptions {
  /** Character(s) to replace whitespace with (default: `-`). */
  whitespace?: string
  /** Character(s) to replace any remaining invalid characters with (default: `_`). */
  fallback?: string

  /** Max length of input filename (default: 200 -- note 255 is safe for most filesystems) */
  maxLength?: number
}

/**
 * Replace accented characters with their non-accented equivalents.
 * Applies unicode normalization (NFD) then removes the now-separated diacritical marks (accents) using a regex.
 */
export function sanitizeAccentCharacters(input: string): string {
  // biome-ignore lint/suspicious/noMisleadingCharacterClass: regex pattern to remove diacritical marks (accents)
  return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

/**
 * Sanitize a _filename_ or _file name_ (with or without extension) to safe characters for most filesystems and API's.
 */
export function sanitizeFileName(input: string, options?: SanitizeFileNameOptions): string {
  const opts: Required<SanitizeFileNameOptions> = Object.assign(
    { whitespace: '-', fallback: '_', maxLength: 200 },
    options || {},
  )

  return sanitizeAccentCharacters(input.trim())
    .replace(/\s+/g, opts.whitespace)
    .replace(FILENAME_SAFE_CHARS_REGEX, opts.fallback)
}
