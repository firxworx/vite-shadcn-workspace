import type { Config } from 'tailwindcss'
import { workspacePreset } from '@workspace/tw-preset-workspace'
import { extract } from 'fluid-tailwind'

// use the local version for development for instant updates without an additional watch/build step
// import { workspacePreset } from '../../packages/tailwind/src/preset'

export const tailwindConfig = {
  darkMode: ['class'],
  presets: [workspacePreset],
  corePlugins: {
    // preflight: false,
    // container: false,
  },
  content: {
    // custom extractor (if required)
    extract,

    files: [
      './src/**/*.{ts,tsx}',

      // downstream apps must provide their own path patterns here -- refer to the tailwind.config.ts of an app
      // './node_modules/@example/custom-react-*/dist/**/*.js'
    ],
  },
  plugins: [
    // fluidPlugin({
    //   checkSC144: true,
    // }),
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
    },
  },
} satisfies Config

export default tailwindConfig
