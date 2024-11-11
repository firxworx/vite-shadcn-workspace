import type React from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '#lib/utils'
import { buttonVariants } from '#variants/button.variants'

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean
  asChild?: boolean
}

/**
 * Custom (non-shadcn) component that renders an anchor/link styled as a Button.
 *
 * Supports similar props to Button including `disabled`.
 *
 * The `asChild` prop powered by radix-ui `Slot` supports creating links of any router library
 * including `react-router-dom` / Remix, NextJS, Astro, etc.
 *
 * Renders an `<a>` element by default if no alternative is provided via the `asChild` pattern.
 */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(function LinkButton(
  { className, variant, size, asChild = false, disabled, children, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }), {
        'pointer-events-none opacity-50': !!disabled,
      })}
      aria-disabled={disabled ? true : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
})
