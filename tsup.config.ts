import { defineConfig } from 'tsup'

/**
 * Base tsup configuration for reference or extension by project tsup config files.
 */
export default defineConfig({
  entry: ['packages/*/src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  target: 'es2022',
  sourcemap: true,
  minify: process.env.NODE_ENV !== 'development',

  // splitting is true by default for esm however can be turned off to output smaller libs with greater compatibility
  // splitting: false,

  external: [],
  esbuildOptions(options) {
    options.treeShaking = true

    // consider other minification options
    // options.minifyWhitespace = true
    // options.minifyIdentifiers = true
    // options.minifySyntax = true
    // options.legalComments = 'inline' // Preserve comments with /*!
  },
})
