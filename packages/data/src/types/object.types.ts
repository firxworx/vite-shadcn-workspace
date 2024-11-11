export type SafeOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * Utility type to fix `{}` usage inside type definitions.
 *
 * Using `{}` is often a poor TypeScript practice because it represents any type that is _not_ `null | undefined`.
 * This behavior is often unexpected and can cause a lot of silent bugs.
 *
 * The correct type to represent an empty object is `Record<string, never>`.
 *
 * This utility replaces any `{}` in an input type with `Record<string, never>`. It can help improve the typing
 * of upstream libraries and API schema definitions that use `{}`.
 *
 * Credit: https://github.com/HegarGarcia/hono-react-query/blob/dce486ba36b06f8b1bb49754c3aa12cb26293f4c/src/types.ts
 */
export type FilterEmptyObject<T> = T extends object ? (keyof T extends never ? Record<string, never> : T) : never
