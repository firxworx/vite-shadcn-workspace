import { cn } from '@workspace/tw-style'

/**
 * Render a `<span>` element with a CSS text gradient effect.
 */
export function GradientTextSpan({
  className,
  children,
}: { className?: string; children: React.ReactNode }): JSX.Element {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        'from-indigo-600 to-purple-800',
        'dark:from-indigo-500 dark:to-purple-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
