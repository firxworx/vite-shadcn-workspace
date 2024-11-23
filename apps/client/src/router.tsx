import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import RootLayout from '@/layout/root.layout'
import IndexPage from '@/pages/index.page'
import ErrorPage from '@/pages/error.page'

/**
 * App routes as an array of react-router v6 `RouteObject`s.
 */
const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
 * react-router v6 BrowserRouter.
 */
export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes)
