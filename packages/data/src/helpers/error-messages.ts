import { isRecord } from '../type-guards/object.guards'

/**
 * Attempt to extract a string error message from a candidate error object or string.
 *
 * - Instances of `Error` will return `message` property
 * - Objects with string `error` property will return that string (precedence over `message`)
 * - Objects with `message` property will return that value wrapped in `String(...)`
 * - `string` values are returned as-is
 * - falsey values return `undefined`
 *
 * Takes some inspiration from Kent C. Dodds' blog however this function does not attempt to JSON stringify
 * the input as this does not align with our use-case and can lead to unexpected results.
 *
 * @see https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
 */
export function getErrorMessage(maybeError?: unknown): string | undefined {
  if (!maybeError) {
    return undefined
  }

  if (maybeError instanceof Error) {
    return maybeError.message
  }

  if (isRecord(maybeError)) {
    if ('error' in maybeError && typeof maybeError.error === 'string') {
      return maybeError.error
    }

    if ('message' in maybeError) {
      return String(maybeError.message)
    }
  }

  if (typeof maybeError === 'string') {
    return maybeError
  }

  return `Unknown error: ${String(maybeError)}`
}

/**
 * Return the string error message of the error object as returned by react-router's `useRouteError` (v6+) hook.
 *
 * - `string` input is returned as-is
 * - objects return `statusText` or `message` if available with a fallback to a generic message
 */
export function getRouteErrorMessage(error: unknown): string {
  if (typeof error === 'string') {
    return error
  }

  if (isRecord(error)) {
    if ('statusText' in error && typeof error.statusText === 'string') {
      return error.statusText
    }

    if ('message' in error && typeof error.message === 'string') {
      return error.message
    }
  }

  return 'An unknown type of route error occurred.'
}
