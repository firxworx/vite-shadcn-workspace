/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'

/**
 * Base vite configuration.
 *
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      // add any workspace aliases here
      // remember to also add them to tsconfig.json
      '@': path.join(import.meta.dirname, 'src'),
      '@cypress': path.join(import.meta.dirname, 'cypress'),
    },
  },

  // this workspace configures vitest using project-specific config files
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/setupTests.ts',
  // },
})
