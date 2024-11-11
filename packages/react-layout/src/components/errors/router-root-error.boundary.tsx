import { useRouteError } from 'react-router-dom'

/**
 * Root error boundary for react-router.
 *
 * @future consider additional capabilities regarding isRouteErrorResponse, json, Link, Outlet, useLoaderData, etc.
 * @see https://github.com/remix-run/react-router/blob/dev/examples/error-boundaries/src/routes.tsx
 */
export function RouterRootErrorBoundary(): JSX.Element {
  const error = useRouteError() as Error
  return (
    <section>
      <h1>There was an error 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button
        type="button"
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.location.href = '/'
          }
        }}
      >
        Reload
      </button>
    </section>
  )
}
