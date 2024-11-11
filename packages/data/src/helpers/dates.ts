/**
 * Ensure the given input is a valid `Date`:
 *
 * - returns existing `Date` instances as-is _only if_ it is valid
 * - returns a new `Date` instance if the input is a `string` or `number` and a valid date can be parsed by `Date()`
 *
 * This function helps accommodate for flexible data libraries like slonik where query results can be `Date`,
 * a `string` format, or timestamp `number` depending on the client configuration and result transformer interceptors.
 *
 * @throws {TypeError} if input is not `Date | string | number` or if the parsed date is invalid
 */
export function ensureDate(input: unknown): Date {
  if (input instanceof Date) {
    if (Number.isNaN(input.getTime())) {
      throw new TypeError(`Invalid date input: ${String(input)}`)
    }

    return input
  }

  if (typeof input === 'string' || typeof input === 'number') {
    const date = new Date(input)

    if (Number.isNaN(date.getTime())) {
      throw new TypeError(`Invalid date input: ${String(input)}`)
    }

    return date
  }

  throw new TypeError(`Expected a Date, string, or number but received: ${String(input)}`)
}
