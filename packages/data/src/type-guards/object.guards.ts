/**
 * Type guard that evaluates if the input is type `Record<string, unknown>`.
 * This implementation confirms there are no property symbols in the object.
 *
 * Reminder: JS converts numerical object keys to strings in runtime.
 *
 * Returns `true` for empty objects.
 */
export function isRecord(input: unknown): input is Record<string, unknown> {
  return (
    !!input && typeof input === 'object' && !Array.isArray(input) && Object.getOwnPropertySymbols(input).length === 0
  )
}

/**
 * Type guard that checks if an object is empty using `Reflect.ownKeys()`.
 *
 * This newer JS feature considers symbol keys and non-enumerable properties.
 *
 * This implementation is intended for working with DTO's and is not designed or tested for special JS cases
 * such as inherited properties or proxy objects.
 */
export function isEmptyObject(input: unknown): input is Record<string, never> {
  if (!input || typeof input !== 'object' || Array.isArray(input) || Reflect.ownKeys(input).length !== 0) {
    return false
  }

  // check if object is a plain object
  // (this excludes objects created from custom classes or built-in constructors such as Date, Map, etc.)
  const proto = Object.getPrototypeOf(input)
  if (proto !== Object.prototype && proto !== null) {
    return false
  }

  return true
}
