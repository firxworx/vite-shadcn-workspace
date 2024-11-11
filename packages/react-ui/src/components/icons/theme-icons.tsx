import { forwardRef } from 'react'
import { cn } from '@workspace/tw-style'

/**
 * Lucide SVG 'sun' icon. Default `~size-5/6`.
 */
export const SunIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function SunIcon(
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
      className={cn('~size-5/6', className)}
      aria-hidden="true"
      {...restSvgProps}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
})

/**
 * Lucide SVG 'moon' icon. Default `~size-5/6`.
 */
export const MoonIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function MoonIcon(
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
      className={cn('~size-5/6', className)}
      aria-hidden="true"
      {...restSvgProps}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
})

/**
 * Lucide SVG 'sun-moon' icon. Default `~size-5/6`.
 */
export const SunMoonIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function SunMoonIcon(
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
      className={cn('~size-5/6', className)}
      aria-hidden="true"
      {...restSvgProps}
    >
      <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.3 17.7-1.4 1.4" />
      <path d="m19.1 4.9-1.4 1.4" />
    </svg>
  )
})

/**
 * Lucide SVG 'server' icon. Default `~size-5/6`.
 */
export const ServerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function ServerIcon(
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
      className={cn('~size-5/6', className)}
      aria-hidden="true"
      {...restSvgProps}
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
})
