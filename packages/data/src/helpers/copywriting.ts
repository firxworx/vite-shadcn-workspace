/**
 * Naive English-specific helper function that returns the input string transformed to English _possessive form_
 * by adding either `'s` or `'` depending on if the input ends with the letter 's' or not.
 *
 * Case insensitive. Helps make notifications and messages more human-friendly.
 *
 * `toPossessive('John')` becomes _John's_ and `toPossessive('Chris')` becomes _Chris'_
 */
export function toPossessive(name: string): string {
  if (name.endsWith('s') || name.endsWith('S')) {
    return `${name}'`
  }

  return `${name}'s`
}
