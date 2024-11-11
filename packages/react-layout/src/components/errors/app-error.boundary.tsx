import type React from 'react'
import { ErrorBoundary, type ErrorBoundaryPropsWithComponent, type FallbackProps } from 'react-error-boundary'

import { Typography } from '@workspace/react-ui/components/ui/typography'
import { Button } from '@workspace/react-ui/components/ui/button'

export interface AppErrorBoundaryProps
  extends React.PropsWithChildren,
    Omit<ErrorBoundaryPropsWithComponent, 'FallbackComponent'> {
  FallbackComponent?: React.ComponentType<FallbackProps>
}

/**
 * React error boundary custom fallback for use with ErrorBoundary from react-error-boundary.
 */
export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps): JSX.Element {
  return (
    <div role="alert" className="~p-4/6 ~gap-2/4">
      <Typography.H2 className="~text-lg/xl font-bold text-destructive-foreground">Something went wrong</Typography.H2>
      <pre className="~text-sm/base">{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  )
}

/**
 * React error boundary with custom fallback component and reset/retry.
 */
export function AppErrorBoundary({
  FallbackComponent = ErrorFallback,
  onError = handleError,
  children,
  ...restProps
}: AppErrorBoundaryProps): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} onError={onError} {...restProps}>
      {children}
    </ErrorBoundary>
  )
}

/**
 * Log error.
 * Add code to send the error to a telemetry/observability service here.
 */
const handleError: React.ComponentProps<typeof ErrorBoundary>['onError'] = (error, info) => {
  console.error(error, info)
}
