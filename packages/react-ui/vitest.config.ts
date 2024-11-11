/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineProject, mergeConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import baseConfig from '../../vitest.config'

/**
 * @see https://vitejs.dev/config/
 * @see https://vitest.dev/guide/workspace#defining-a-workspace
 */
export default defineProject(() => {
  return mergeConfig(baseConfig, {
    plugins: [react()],
    extends: './vite.config.ts',

    // cacheDir: 'node_modules/.vite',

    test: {
      globals: true,
      environment: 'jsdom', // vs 'happy-dom'
      setupFiles: './test/setup.ts',

      // clearMocks: true,
      // clearScreen: true,

      // coverage: {
      //   provider: 'v8',
      //   reporter: ['lcov']
      // },

      // include: ['src/**/*.ts'],
      // exclude: ['node_modules', 'dist', 'coverage', 'test', 'vite.config.ts', 'tailwind.config.ts'],
    },
  })
})
