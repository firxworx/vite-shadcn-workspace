import type { Config } from 'tailwindcss'
import { extract } from 'fluid-tailwind'

import { workspacePreset } from '../../packages/tw-preset-workspace/src'
import { tailwindConfig as reactUiTailwindConfig } from '../../packages/react-ui/tailwind.config'
// import fluidPlugin from 'fluid-tailwind'

/**
 * TailwindCSS configuration for this app that extends the workspace preset.
 *
 * ## workspace preset
 *
 * The workspace preset handles common tailwind configuration, plugin suite, and theme / design system for
 * packages and apps within this workspace.
 *
 * The preset is imported above using a relative path to support automatic reload during development without
 * a watch/build step. It does not use ts path aliases in its code to support this use-case.
 *
 * A key limitation of presets with fluid-tailwind is that you cannot use `~` utilities in many
 * cases because the custom extractor cannot be applied to presets.
 *
 * ## fluid-tailwind
 *
 * The workspace preset takes care of adding the `fluid-tailwind` plugin however the custom `extract` function
 * that enables support for `~` prefix fluid values can only be added to tailwind config files.
 *
 * Docs: https://fluid.tw/
 *
 * ## `theme.extends` from `@workspace/react-ui`
 *
 * The `theme.extends` object of the `@workspace/react-ui` package is imported and added to the `theme.extends`
 * object below because this value is managed by shadcn/ui cli when new components are added.
 */
const tailwindConfig = {
  darkMode: ['class'],
  presets: [workspacePreset],
  corePlugins: {
    container: false,
  },
  content: {
    extract,
    files: [
      // current vite application
      './index.html',
      './src/**/*.{ts,tsx}',

      // workspace packages (relative path to src is used to support automatic reload during development)
      '../../packages/react-*/src/**/*.{ts,tsx}',

      // specify paths to any dependencies that use tailwind classes below (uncomment and customize as required)
      // './node_modules/@example/react-lib-*/dist/**/*.js',
      // '!./node_modules/@example/react-lib-*/dist/**/*cjs.js', // exclude cjs to save on redundant processing
    ],
    transform: {
      mdx: (src) =>
        src
          // ignore classes in code fences
          .replaceAll(/```.*?```/gs, '')
          // only return values in <component> tags
          .match(/<[^/].*?>/g)
          ?.join() ?? '',
    },
  },
  theme: {
    extend: {
      // add from the react-ui tailwind config because this value is managed by the shadcn/ui cli
      ...reactUiTailwindConfig.theme.extend,
    },
  },

  // fluid-tailwind plugin is already included by the workspace preset (no need to add it here)
  // plugins: [fluidPlugin],
} satisfies Config

export default tailwindConfig
