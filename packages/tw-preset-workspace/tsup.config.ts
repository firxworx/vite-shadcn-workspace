import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es2022',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  minify: process.env.NODE_ENV !== 'development',
  external: [],
  treeshake: true,
  esbuildOptions(options) {
    // ensure esbuild is configured for tree-shaking (tsup uses esbuild)
    options.treeShaking = true
  },
})
