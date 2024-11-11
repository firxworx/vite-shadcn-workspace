import { z } from 'zod'

/**
 * Zod schema that parses any input date string parseable by `Date()` to an ISO date string in UTC.
 *
 * This schema handles issues where `z.string().datetime()` may fail to parse certain valid dates such as
 * '2024-09-11T07:35:20.797204+00:00' while it will succeed for cases such as '2024-09-11T07:35:20.797Z'.
 *
 * Note: this issue can also be addressed with `datetime({ offset: true })` however this schema
 * will completely normalize the date string returned by an API to a ISO string in UTC.
 */
export const zDateTimeString = z.string().transform((val) => new Date(val).toISOString())

/**
 * Zod schema for any date-like value that can be a `Date`, `string`, or integer `number`.
 *
 * Based on example in zod docs: https://zod.dev/?id=you-can-use-pipe-to-fix-common-issues-with-zcoerce
 */
export const zDateLike = z.union([z.date(), z.string(), z.number().int()])

/**
 * Zod schema that parses a date-like input value (`Date`, `string`, or integer `number`) as a `Date`.
 *
 * Based on example in zod docs: https://zod.dev/?id=you-can-use-pipe-to-fix-common-issues-with-zcoerce
 */
export const zDateLikeAsDate = zDateLike.pipe(z.date())

/**
 * Zod schema for nullish strings that transform `null` and `undefined` values to an empty string.
 */
export const zNullishStringToEmptyString = z
  .string()
  .nullish()
  .transform((val) => (val === null || val === undefined ? '' : val))
  .pipe(z.string())
