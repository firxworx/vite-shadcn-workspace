import React, { useId } from 'react'
import { cn } from '@workspace/tw-style'

export interface LayoutMainProps extends React.HTMLAttributes<HTMLDivElement> {
  isContainer?: boolean
}

/**
 * Render `main` component with default min height and vertical padding.
 */
export const LayoutMain = React.forwardRef<HTMLDivElement, LayoutMainProps>(function LayoutMain(
  { id, isContainer = true, className, children, ...restProps },
  ref,
) {
  const ssrId = useId()
  const mainId = id || ssrId

  return (
    <main
      ref={ref}
      id={mainId}
      className={cn(
        '~pt-8/12 ~pb-24/32',
        {
          container: isContainer,
        },
        className,
      )}
      {...restProps}
    >
      {children}
    </main>
  )
})
