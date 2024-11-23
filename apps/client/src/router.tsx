import { createBrowserRouter, type RouteObject } from 'react-router'
import { ScreenSpinner } from '@workspace/react-ui/components/ui/spinner'

import RootLayout from '@/layout/root.layout'
import IndexPage from '@/pages/index.page'
import ErrorPage from '@/pages/error.page'

/**
 * App routes as an array of React Router `RouteObject`s.
 */
const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <ScreenSpinner />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: '/demo',
        async lazy() {
          return { Component: (await import('@/pages/demo.page')).default }
        },
      },
      {
        path: '/about',
        async lazy() {
          return { Component: (await import('@/pages/about.page')).default }
        },
      },
    ],
  },
]

/**
 * React Router v7 `BrowserRouter` with all v7 feature flags enabled for future-proofing.
 *
 * @see https://reactrouter.com/upgrading/v6#update-to-latest-v6x
 */
export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
  },
})
