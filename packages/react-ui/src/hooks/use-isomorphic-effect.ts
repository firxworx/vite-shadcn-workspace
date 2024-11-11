import { useEffect, useLayoutEffect } from 'react'

/**
 * Alternative to `React.useLayoutEffect()` that conditionally uses `useEffect()` for server-side rendering
 * and `useLayoutEffect()` for client-side rendering.
 */
export const useIsomorphicEffect = typeof globalThis?.document !== 'undefined' ? useLayoutEffect : useEffect
