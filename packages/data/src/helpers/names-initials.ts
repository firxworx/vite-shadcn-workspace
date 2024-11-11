/**
 * Naive function that returns the uppercase initials of a full name.
 *
 * Intended for use with EN locale in non-i18n contexts.
 */
export function getInitials(name: string, maxLength = 2): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, maxLength)
}
