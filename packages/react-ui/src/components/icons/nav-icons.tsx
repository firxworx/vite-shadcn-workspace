import { forwardRef } from 'react'
import { cn } from '@workspace/tw-style'

/**
 * Hamburger menu SVG icon with current icon from lucide-react.
 */
export const MenuIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function MenuIcon(
  { className, ...restSvgProps },
  ref,
): JSX.Element {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('~size-5/6', className)} // lucide lucide-menu
      aria-hidden="true"
      {...restSvgProps}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
})
