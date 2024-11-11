import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

/**
 * Base vitest configuration for this workspace.
 *
 * @see vitest.workspace.ts
 * @see https://vitest.dev/guide/common-errors
 */
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    // uncomment to report test results in json format
    // reporters: ['json'],
  },
})
