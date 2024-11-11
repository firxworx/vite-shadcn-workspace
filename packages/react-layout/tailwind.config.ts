import type { Config } from 'tailwindcss'
import { workspacePreset } from '../../packages/tw-preset-workspace/src/preset'
import { extract } from 'fluid-tailwind'

/**
 * TailwindCSS configuration for source files within this package.
 * A tailwind config file here helps provide IDE support / IntelliSense for this project in the workspace.
 */
const tailwindConfig = {
  darkMode: 'class',
  presets: [workspacePreset],
  corePlugins: {
    preflight: false,
    container: false,
  },
  content: {
    extract,
    files: ['./src/**/*.{ts,tsx}'],
  },
  plugins: [],
} satisfies Config

export default tailwindConfig
