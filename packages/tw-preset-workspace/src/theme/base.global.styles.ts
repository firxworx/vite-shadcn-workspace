import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'
import { HTML_BASE_FONT_SIZE_PX } from '../constants'

/**
 * Return global CSS styles applied by this preset.
 */
export function getBaseGlobalStyles(_theme: PluginAPI['theme']): CSSRuleObject | CSSRuleObject[] {
  return {
    // disable animations and transitions if the user has reduced motion preference enabled
    '@media (prefers-reduced-motion: reduce)': {
      '*': {
        'animation-duration': '0.01ms !important',
        'animation-iteration-count': '1 !important',
        'transition-duration': '0.01ms !important',
        'scroll-behavior': 'auto !important',
      },
    },

    /*
     * Scroll margin allowance below focused elements to ensure they are clearly in view.
     * https://moderncss.dev/modern-css-for-dynamic-component-based-architecture/
     */
    ':target': {
      'scroll-margin-block-start': '2rem',
    },

    /*
     * Scroll margin allowance below focused elements to ensure they are clearly in view
     * https://moderncss.dev/modern-css-for-dynamic-component-based-architecture/)
     */
    ':focus': {
      'scroll-margin-block-end': '8vh',
    },

    html: {
      '@apply antialiased scroll-smooth': {},
      fontSize: `${HTML_BASE_FONT_SIZE_PX}px`,

      // customize or remove the following depending on variable font/typeface(s) in play
      'font-feature-settings': '"rlig" 1, "calt" 1',
    },

    body: {
      // default body classes
      '@apply font-sans min-h-svh overflow-y-scroll': {},

      // thin scrollbars (firefox only)
      scrollbarWidth: 'thin',

      // always show scrollbars
      overflowY: 'scroll',

      // ensure body fills the viewport
      'min-block-size': '100%',
      'min-inline-size': '100%',

      // remove chrome default blue focus ring (prefer custom focus styles)
      'input:focus, textarea:focus, select:focus': {
        outline: 'none',
      },

      // (example) apply consistent :disabled styles to all buttons
      // "button,[type='button'],[type='reset'],[type='submit']": {
      //   '@apply cx-disabled': {},
      // },

      img: {
        '@apply block max-w-full': {},

        '&.full-width': {
          '@apply w-full max-h-[45vh] object-cover': {},
        },
      },

      '.italic': {
        'font-variation-settings': `'ital' 1`,
      },

      // override tailwindcss default .italic class to support variable font with italics axis
      'i, cite, em, var, address, dfn, .italic': {
        'font-variation-settings': `'ital' 1`,
      },
    },
  }
}
