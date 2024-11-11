import { clsx, type ClassValue } from '@/lib/clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import { withFluid } from '@fluid-tailwind/tailwind-merge'

type AdditionalClassGroups = 'form'

/**
 * Customized tailwind-merge function.
 *
 * Any custom css classes, tailwind variants, or tailwind utilities added to projects should be registered
 * with this merge function so that tailwind-merge can intelligently merge them without issues.
 *
 * @see https://fluid.tw/#integrations fluid-tailwind integration docs
 */
export const twMergeCustom = extendTailwindMerge<AdditionalClassGroups>(
  {
    override: {},
    extend: {
      classGroups: {
        // add custom font-heading
        'font-family': ['font-sans', 'font-serif', 'font-mono', 'font-heading'],

        // add tailwindcss/forms form-* class groups so tailwind-merge recognizes they conflict
        form: ['input', 'checkbox', 'textarea', 'select', 'multiselect', 'radio'].map((v) => `form-${v}`),
      },
    },
  },

  // fluid plugin should be last in the plugins list per its docs (uncomment below to enable)
  withFluid,
)

/**
 * The mighty `cn()` function that combines `clsx()` and `tailwind-merge` to intelligently
 * merge Tailwind and custom css class names.
 *
 * This function helps implement flexible components that are easily customizable with TailwindCSS.
 */
export function cn(...args: ClassValue[]): string {
  return twMergeCustom(clsx(args))
}
