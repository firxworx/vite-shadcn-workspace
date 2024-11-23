import React from 'react'
import { cn } from '@workspace/tw-style'

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'section' | 'div' | 'aside'
}

/**
 * Page Layout renders a `section` element with standard vertical padding.
 * Specify `as` prop to render an alternative element such as a 'div'.
 *
 * This component is intended to be used as a child of the application layout.
 */
export const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(function PageLayout(
  { as = 'section', className, children, ...restProps },
  ref,
) {
  const Component = as

  return (
    <Component ref={ref} className={cn(className)} {...restProps}>
      {children}
    </Component>
  )
})
