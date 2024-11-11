import type { PluginAPI, PresetsConfig } from 'tailwindcss/types/config'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import fluidPlugin, { screens, fontSize, type FluidThemeConfig } from 'fluid-tailwind'

// workspace preset to configure shadcn/ui
import { createShadcnPreset } from '@workspace/tw-preset-shadcn'

// official and third-party plugins
import typographyPlugin from '@tailwindcss/typography'
import formsPlugin from '@tailwindcss/forms'
import containerQueriesPlugin from '@tailwindcss/container-queries'

// customizations defined by this package
import { getBaseGlobalStyles } from './theme/base.global.styles'
import { getCssCustomProperties } from './theme/base.global.variables'

import { presetAnimations } from './theme/theme.extend.animation'
import { presetColors } from './theme/theme.extend.colors'
import { MAX_W_PROSE_CH, PALETTE_CSS_VARIABLE_PREFIX } from './constants'

/**
 * Customized tailwindcss preset adds shadcn/ui.
 * The preset includes the `tailwindcss-animate` plugin so it does not need to be added in this workspace preset.
 *
 * We disable the shadcn/ui default container in favour of our own.
 */
const shadcnPreset = createShadcnPreset({
  theme: {
    // our own `.container` is defined instead (refer to `addComponents(..)` in the inline plugin below)
    container: false,

    colors: true,
    borderRadius: true,
  },
  styles: {
    baseGlobalStyles: true,
  },
  palette: {
    cssCustomVariables: true,
  },
})

/**
 * Tailwind workspace preset with common configuration, plugin suite, and theme / design system for
 * packages and apps within this workspace.
 *
 * Presets cannot define `content` (purge patterns): this must be done in each project's tailwind config.
 *
 * All downstream projects must include fluid-tailwind's custom `extract()` function in their tailwind config
 * to support its `~` fluid utilities.
 *
 * @see https://fluid.tw/#installation
 * @see constants.ts key values and doc comments regarding VSCode IntelliSense settings
 */
export const workspacePreset: PresetsConfig = {
  darkMode: 'class',

  //custom preset to configure shadcn/ui
  presets: [shadcnPreset],

  theme: {
    // fluid-tailwind screens ensure breakpoints are in rem to support fluidization as spacing and font sizes are rem
    screens: {
      xs: '25rem', // 25rem = 400px @ 16px rem base
      ...screens,
    },

    // fluid-tailwind replaces tailwind v4's unitless 5xl-9xl line-heights with rem values that can be fluidized
    fontSize: {
      '2xs': '.625rem',
      ...fontSize,
    },

    // explicitly define fluid-tailwind's default start/end breakpoints (default is the theme's smallest/largest)
    fluid: (theme: PluginAPI['theme']) =>
      ({
        defaultScreens: [theme('screens.sm'), theme('screens.xl')],
      }) satisfies FluidThemeConfig,

    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ['Inter\\ Variable', ...defaultTheme.fontFamily.sans],
        mono: defaultTheme.fontFamily.mono,

        // custom typography font stack
        heading: ['Inter\\ Variable', ...defaultTheme.fontFamily.sans],

        // heading: ['Nunito\\ Variable', 'NunitoFallback', ...defaultTheme.fontFamily.sans],
      },

      animation: presetAnimations.animation,
      keyframes: presetAnimations.keyframes,

      maxWidth: {
        prose: `${MAX_W_PROSE_CH}ch`,
      },

      spacing: {
        '0.25': '0.0625rem',
        '0.75': '0.1875rem',
        1.25: '0.3125rem',
      },

      grayscale: {
        25: '25%',
        50: '50%',
        75: '75%',
      },

      letterSpacing: {
        semitight: '-0.0125em',
        tighter: '-.04em',
      },

      /**
       * Add customized color palette.
       *
       * It is recommended to prefix (namespace) all custom palette colors with a unique value e.g. 'P' for 'palette'
       * to avoid conflicts with TailwindCSS' default palette or shadcn/ui colors.
       *
       * Prefixed colors can be referenced via `theme()` e.g. `theme('colors.P.colorName.shade')`
       * or `theme('colors.P.colorName.DEFAULT')` and within components by their corresponding utility class name.
       */
      colors: (_pluginUtils) => {
        return {
          [PALETTE_CSS_VARIABLE_PREFIX]: { ...presetColors },
        }
      },

      /**
       * Custom styling for `.prose*` utilities added by the official @tailwindcss/typography plugin.
       *
       * @see https://github.com/tailwindlabs/tailwindcss-typography/tree/main
       */
      typography: (theme: PluginAPI['theme']) => {
        // these values are equivalent to ~text-base/lg at 16px rem with current fluid-tailwind config
        // they must be manually defined because fluid-tailwind's extractor is not available in presets or plugins
        const fontSize = 'clamp(1rem, 0.875rem + 0.313vw, 1.125rem)' // fluid from 1rem at 40rem to 1.125rem at 80rem
        const lineHeight = 'clamp(1.5rem, 1.25rem + 0.63vw, 1.75rem)' // fluid from 1.5rem at 40rem to 1.75rem at 80rem

        return {
          DEFAULT: {
            css: {
              // exact object paths must be referenced including the DEFAULT key if defined (e.g. 'colors.primary.DEFAULT')
              '--tw-prose-body': theme('colors.foreground/0.95'),
              '--tw-prose-headings': theme('colors.foreground/0.90'),
              '--tw-prose-lead': theme('colors.muted.foreground/0.95'),
              '--tw-prose-links': 'rgb(var(--P-link) / 0.95)',
              '--tw-prose-bold': theme('colors.foreground/0.90'),
              '--tw-prose-counters': theme('colors.foreground/0.75'),
              '--tw-prose-bullets': theme('colors.foreground/0.75'),
              '--tw-prose-hr': theme('colors.foreground/0.50'),
              '--tw-prose-quotes': theme('colors.foreground/0.50'),
              '--tw-prose-quote-borders': theme('colors.foreground/0.25'),
              '--tw-prose-captions': theme('colors.muted.foreground/0.95'),
              '--tw-prose-code': theme('colors.muted.foreground/0.95'),
              '--tw-prose-pre-code': theme('colors.foreground/0.95'),
              '--tw-prose-pre-bg': theme('colors.foreground/0.05'),
              '--tw-prose-th-borders': theme('colors.border/0.95'),
              '--tw-prose-td-borders': theme('colors.border/0.75'),

              maxWidth: `${MAX_W_PROSE_CH}ch`,
              fontSize,
              lineHeight,

              // reference (default styling): https://github.com/tailwindlabs/tailwindcss-typography/blob/main/src/styles.js
              // beware tailwind `apply` directives can fail when customizing the typography plugin so CSS-in-JS is recommended
              a: {
                '@apply no-underline hover:underline underline-offset-4 font-medium transition-colors': {},
                '&:hover': {
                  '@apply text-P-link-hover': {},
                },
              },

              // kill the default backticks around inline <code>
              'code::before': {
                content: '',
              },
              'code::after': {
                content: '',
              },
            },
          },
        }
      },
    },
  },

  /**
   * Plugin suite managed by this preset including custom inline plugin.
   *
   * - `shadcnPreset` already includes the `tailwindcss-animate` plugin so it does not need to be included here.
   */
  plugins: [
    //official tailwindcss plugins
    typographyPlugin,
    formsPlugin,
    containerQueriesPlugin,

    // third-party fluid-tailwind plugin for `~` fluid css clamp() utilities (https://fluid.tw/)
    fluidPlugin,

    // custom inline plugin to add base styles and further customize both tailwindcss and the theme
    plugin(({ addBase, addUtilities, addComponents, theme }) => {
      const cssCustomProperties = getCssCustomProperties(theme)

      addBase({
        ':root': {
          'color-scheme': 'light',
          ...cssCustomProperties[':root'],
        },
        '.dark': {
          'color-scheme': 'dark',
          ...cssCustomProperties['.dark'],
        },

        ...getBaseGlobalStyles(theme),
      })

      // custom tailwind utilities...
      addUtilities({
        // '.example': {
        //   '@apply text-red-500': {},
        // },
      })

      // custom tailwind component classes including our custom container...
      addComponents({
        '.container': {
          '@apply ~px-4/6 mx-auto w-full max-w-6xl': {},
        },
      })
    }),
  ],
} satisfies PresetsConfig
