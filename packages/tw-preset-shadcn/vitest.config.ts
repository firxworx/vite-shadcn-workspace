import { defineProject, mergeConfig } from 'vitest/config'
import baseConfig from '../../vitest.config'

/**
 * Vitest configuration.
 * Reminder: `reporters` are not supported in project-level configurations within a workspace.
 *
 * @see https://vitejs.dev/config/
 * @see https://vitest.dev/guide/workspace#defining-a-workspace
 */
export default mergeConfig(
  baseConfig,
  defineProject({
    // uncomment the following to extend from configuration of a project-level vite config
    // extends: './vite.config.ts',

    test: {
      environment: 'jsdom',
    },

    // includeSource: ['src/**/*.ts'],
  }),
)
