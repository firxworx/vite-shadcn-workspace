import type { CSSRuleObject } from 'tailwindcss/types/config'

/**
 * Return a CSSRuleObject containing the CSS custom properties (CSS variable definitions)
 * corresponding to the default shadcn/ui theme/palette.
 *
 * All palette color values are defined as arguments to the CSS `hsl(...)` color space function
 * per the modern syntax without commas and support for optional `<alpha-value>`.
 *
 * @see https://ui.shadcn.com/docs/installation/manual
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
 */
export const cssCustomProperties: Record<':root' | '.dark', CSSRuleObject> = {
  ':root': {
    '--background': '0 0% 100%',
    '--foreground': '222.2 47.4% 11.2%',
    '--muted': '210 40% 96.1%',
    '--muted-foreground': '215.4 16.3% 46.9%',
    '--popover': '0 0% 100%',
    '--popover-foreground': '222.2 47.4% 11.2%',
    '--border': '214.3 31.8% 91.4%',
    '--input': '214.3 31.8% 91.4%',
    '--card': '0 0% 100%',
    '--card-foreground': '222.2 47.4% 11.2%',
    '--primary': '222.2 47.4% 11.2%',
    '--primary-foreground': '210 40% 98%',
    '--secondary': '210 40% 96.1%',
    '--secondary-foreground': '222.2 47.4% 11.2%',
    '--accent': '210 40% 96.1%',
    '--accent-foreground': '222.2 47.4% 11.2%',
    '--destructive': '0 100% 50%',
    '--destructive-foreground': '210 40% 98%',

    '--ring': '215 20.2% 65.1%',

    '--chart-1': '12 76% 61%',
    '--chart-2': '173 58% 39%',
    '--chart-3': '197 37% 24%',
    '--chart-4': '43 74% 66%',
    '--chart-5': '27 87% 67%',

    // theme customization variable
    '--radius': '0.5rem',
  },
  '.dark': {
    '--background': '224 71% 4%',
    '--foreground': '213 31% 91%',
    '--muted': '223 47% 11%',
    '--muted-foreground': '215.4 16.3% 56.9%',
    '--accent': '216 34% 17%',
    '--accent-foreground': '210 40% 98%',
    '--popover': '224 71% 4%',
    '--popover-foreground': '215 20.2% 65.1%',
    '--border': '216 34% 17%',
    '--input': '216 34% 17%',
    '--card': '224 71% 4%',
    '--card-foreground': '213 31% 91%',
    '--primary': '210 40% 98%',
    '--primary-foreground': '222.2 47.4% 1.2%',
    '--secondary': '222.2 47.4% 11.2%',
    '--secondary-foreground': '210 40% 98%',
    '--destructive': '0 63% 31%',
    '--destructive-foreground': '210 40% 98%',

    '--ring': '216 34% 17%',

    '--chart-1': '220 70% 50%',
    '--chart-2': '160 60% 45%',
    '--chart-3': '30 80% 55%',
    '--chart-4': '280 65% 60%',
    '--chart-5': '340 75% 55%',

    // theme vars
    '--radius': '0.5rem',
  },
}