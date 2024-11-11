import { defineWorkspace } from 'vitest/config'

/**
 * Vitest workspace configuration.
 *
 * Projects ( apps and/or packages) within this workspace should use `defineProject()` vs. `definedConfig()`
 * in their vitest config files because workspace projects do not support all vitest configuration options.
 *
 * @see https://vitest.dev/guide/workspace
 * @see https://vitest.dev/guide/common-errors
 */
export default defineWorkspace([
  'apps/*',
  'packages/*',
  'functions/*',

  // blob patterns are supported (example) --
  // 'packages/*/vitest.config.{e2e,unit}.ts',

  {
    // if a global vite config is present it can be used as a base for all projects (example) --
    // extends: './vite.config.ts',

    test: {
      // environment: 'jsdom',
      // ... other global test settings
    },
  },
])
