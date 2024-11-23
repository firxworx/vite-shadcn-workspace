import { Suspense, type ErrorInfo } from 'react'
import { RouterProvider } from 'react-router-dom'

import { AppErrorBoundary } from '@workspace/react-layout'
import { ScreenSpinner } from '@workspace/react-ui/components/ui/spinner'

import { router } from '@/router'
import { AppContextProviders } from '@/providers/AppContextProviders'

/**
 * Log application errors.
 * Send the error to notification/telemetry/observability service(s) here.
 */
const handleError = (error: Error, info: ErrorInfo) => {
  console.error(error, info)
}

function App(): JSX.Element {
  return (
    <AppErrorBoundary onError={handleError}>
      <Suspense fallback={<ScreenSpinner />}>
        <AppContextProviders>
          <AppErrorBoundary onError={handleError}>
            <Suspense fallback={<ScreenSpinner />}>
              <RouterProvider router={router} fallbackElement={<ScreenSpinner />} />
            </Suspense>
          </AppErrorBoundary>
        </AppContextProviders>
      </Suspense>
    </AppErrorBoundary>
  )
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

export default App
