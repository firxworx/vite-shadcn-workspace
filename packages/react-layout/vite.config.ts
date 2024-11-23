import path, { extname, relative } from 'node:path'
import { defineConfig } from 'vite'
import { glob } from 'glob'

// vite and rollup plugins
import react from '@vitejs/plugin-react' // this could make vite try to bundle with react

// import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import preserveDirectives from 'rollup-plugin-preserve-directives'

// tailwindcss processing
import tailwindcss from 'tailwindcss'
import tailwindcssNesting from 'tailwindcss/nesting'
import cssDiscardComments from 'postcss-discard-comments'

import packageManifest from './package.json'
import { fileURLToPath } from 'node:url'

const {
  dependencies = {},
  peerDependencies = {},
  optionalDependencies = {},
} = packageManifest as unknown as {
  name: string
  dependencies?: { [key: string]: string }
  peerDependencies?: { [key: string]: string }
  optionalDependencies: { [key: string]: string }
}

// example to remove scope from package name if present (i.e. '@scope/example' -> 'example')
// const basePackageName = name.match(/[^/]+$/)?.[0] ?? name

/**
 * @see https://vitejs.dev/config/
 * @see https://vitejs.dev/guide/build.html#library-mode
 * @see https://www.npmjs.com/package/vite-plugin-dts
 */
export default defineConfig(({ mode }) => ({
  plugins: [...[(mode === 'development' || mode === 'test') && react()].filter(Boolean), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [
        tailwindcssNesting(),
        tailwindcss({
          config: path.resolve(import.meta.dirname, 'tailwind.config.ts'),
        }),
        cssDiscardComments({ removeAll: true }),
      ],
    },
  },
  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      name: 'Layout',

      // code entrypoint (this can also be a dictionary or array of multiple entrypoints)
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),

      // the following has been confirmed to not obliterate style.css/d.ts/map file generation
      fileName: (format, entryName): string => {
        return format === 'es' ? `${entryName}.js` : `${entryName}.${format}.js`
      },

      // default formats are ['es', 'umd'] however umd not required and does not support code-splitting in builds
      formats: ['es'],
    },
    minify: false,
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      plugins: [
        // preserve directives such as 'use client' at the top of the file (a benign warning may still be emitted)
        preserveDirectives(),
      ],
      external: [
        // blanket assurance that all dependencies are externalized and not bundled
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies),
        ...Object.keys(optionalDependencies),

        // regex to capture 'react', 'react-dom', 'react/jsx-runtime', '@radix-ui/*', '@tanstack/*', etc.
        'react',
        'react-dom',
        /^react.*/,
        /^@radix-ui\/*/,
        /^@tanstack\/*/,

        // exclude workspace packages
        /^@workspace\/*/,

        // ... keep adding as new requirements come forward that must be external/peer dependencies ...
      ],
      output: {
        // globals for externalized dependencies
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime', // jsx-runtime is only required if outputting umd
        },

        // example to split out a library chunk
        // manualChunks: {
        //   fontawesome: ['@fortawesome/react-fontawesome', '@fortawesome/free-brands-svg-icons'],
        // },

        // instead of creating a single bundle create one file per module w/ original directory structure
        preserveModules: true,

        // inline dynamic imports must be false when `preserveModules` is `true`
        inlineDynamicImports: false,
      },
      input: Object.fromEntries(
        // refer to docs https://rollupjs.org/configuration-options/#input
        glob
          .sync('src/**/*.{ts,tsx}', {
            ignore: ['src/**/*.d.ts'],
          })
          .map((file) => [
            // name of the entry point
            // lib/nested/foo.js -> nested/foo
            relative('src', file.slice(0, file.length - extname(file).length)),
            // absolute path to the entry file
            // src/nested/foo.ts -> /project/src/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      // example output
      // output: {
      //   assetFileNames: 'assets/[name][extname]',
      //   entryFileNames: '[name].js',
      // },
    },
  },
}))
