import { forwardRef } from 'react'
import type React from 'react'
import { cn } from '#lib/utils'

export interface SpinLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

/**
 * Spinner/Loader component grabbed from the discussions of https://github.com/shadcn-ui/ui/discussions/1694.
 */
export const SpinLoader = forwardRef<HTMLDivElement, SpinLoaderProps>(function SpinLoader(props, ref) {
  const { className, ...rest } = props
  return (
    <div
      ref={ref}
      className={cn(
        'size-16 border-4 border-t-4 border-gray-200 border-t-gray-600 rounded-full animate-spin',
        className,
      )}
      {...rest}
    />
  )
})

/**
 * Spinner/Loader component that fills the screen for application/layout loading feedback.
 */
export const ScreenSpinner = forwardRef<HTMLDivElement, SpinLoaderProps>(function ScreenSpinner(
  { className, ...restDivProps },
  ref,
) {
  return (
    <div ref={ref} className={cn('flex items-center justify-center w-full h-full', className)} {...restDivProps}>
      <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <svg fill="none" className="size-6 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
})
