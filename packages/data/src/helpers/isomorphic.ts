/**
 * Return a boolean indicating if the code is currently executing in a Node.js environment based on
 * absence of global `window` and presence of global `process.versions.node`.
 *
 * This technique is intended to be reliable in cases where:
 *
 * - client-side code might monkey-patch parts of `process`
 * - server-side code or a runtime monkey-patches `window` for some reason
 * - have a bundler configuration that statically replaces `process.env.X` variables at build-time
 *
 * `globalThis` object is used internally to avoid typescript errors when bundling client-only libraries
 * that do not have `@types/node` installed as a dev dependency.
 */
export function isNodeEnv(): boolean {
  // biome-ignore lint/suspicious/noExplicitAny: special-case isomorphic check so downstream don't require dom or @types/node
  const gt = globalThis as any

  return (
    (typeof gt?.window === 'undefined' || gt?.window === null) &&
    typeof gt?.process !== 'undefined' &&
    typeof gt?.process.versions !== 'undefined' &&
    typeof gt?.process.versions?.node !== 'undefined'
  )
}
