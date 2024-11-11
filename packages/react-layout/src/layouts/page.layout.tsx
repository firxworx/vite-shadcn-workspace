import React from 'react'
import { cn } from '@workspace/tw-style'

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'section' | 'div' | 'aside'
}

/**
 * Page Layout component that renders a `section` element with standard vertical padding.
 * Specify `as` prop to render a compatible alternative element such as a 'div'.
 *
 * This component is intended to be used within an application layout.
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
