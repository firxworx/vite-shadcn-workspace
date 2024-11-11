import * as path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// the following postcss plugins enable tailwindcss (refer to `vite.css.postcss`)
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindcssNesting from 'tailwindcss/nesting'
import cssDiscardComments from 'postcss-discard-comments'
import postCssOklabPolyfill from '@csstools/postcss-oklab-function'

/**
 * Vite config for an SPA.
 * PostCSS along with TailwindCSS is configured below; this eliminates the need for `postcss.config.js`.
 *
 * @see https://vitejs.dev/config/
 * @see https://vitejs.dev/config/shared-options#base (in dev base removes the origin)
 */
export default defineConfig(({ mode }) => {
  // empty string third argument tells vite to load all variables here regardless if VITE_ prefix is present or not
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/',

    plugins: [
      tsconfigPaths({
        root: path.resolve(process.cwd(), '../..'),
      }),
      react(),
    ],

    // tsconfig paths plugin should automatically handle defining typescript path aliases (in most cases)
    // an example of a manual configuration is commented below
    // resolve: { alias: { ... } }

    // uncomment the following to enable web workers
    // worker: {
    //   format: 'es',
    // },

    // configure tailwindcss in the vite config instead of external postcss.config.js
    css: {
      postcss: {
        plugins: [
          tailwindcssNesting(),
          tailwindcss({ config: path.resolve(import.meta.dirname, 'tailwind.config.ts') }),
          postCssOklabPolyfill({ preserve: true }),
          autoprefixer(),
          cssDiscardComments({ removeAll: true }),
        ],
      },
    },

    // configure development server
    server: {
      open: false,

      // uncomment the following to configure the dev server to proxy requests a back-end API
      // proxy: {
      //   '/api': {
      //     target: DEV_API_URL, // e.g. 'http://localhost:3000'
      //     changeOrigin: true,
      //     secure: false,
      //
      //     // uncomment to enable websockets support
      //     // ws: true,
      //
      //     // reference example of a rewrite configuration (not currently required)
      //     // rewrite: (path) => path.replace(/^\/api/, ''),
      //
      //     // set origin header to match the target origin to satisfy anti-CSRF middleware in development
      //     configure: (proxy, _options) => {
      //       proxy.on('proxyReq', (proxyReq, _req, _res) => {
      //         // extract the protocol and host from the target URL
      //         const targetUrl = new URL(DEV_API_URL)
      //         const targetOrigin = `${targetUrl.protocol}//${targetUrl.host}`
      //
      //         // set the origin header to match the target origin
      //         proxyReq.setHeader('Origin', targetOrigin)
      //       })
      //     },
      //   },
      // },
    },

    define: {
      // replace with a hardcoded value during build to support libraries that rely on process.env.NODE_ENV
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || 'production'),

      // consider replacing other placeholders with values as required (examples are commented below)
      // __APP_ENV__: JSON.stringify(env.APP_ENV),
      // __APP_VERSION__: JSON.stringify('v1.0.0'),
      // __API_URL__: 'window.__backend_api_url',
    },

    build: {
      rollupOptions: {
        // external dependencies are excluded from bundling and tree shaking in case its overly aggressive
        // issues have been encountered bundling `@radix-ui` packages so they have been externalized to resolve
        external: ['@radix-ui/react-*'],
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',

          // bundle certain dependencies together in their own chunks for caching and performance
          manualChunks(path, _meta) {
            if (path.includes('node_modules/react') || path.includes('node_modules/react-dom')) {
              return 'react'
            }
            if (path.includes('node_modules/three') || path.includes('node_modules/@react-three')) {
              return 'three'
            }
            if (path.includes('framer-motion')) {
              return 'framer-motion'
            }
            if (path.includes('lucide-react')) {
              return 'lucide-react'
            }

            return
          },
        },
      },
    },
  }
})
