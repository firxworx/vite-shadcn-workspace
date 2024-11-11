import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'

import { AppLayout } from '@workspace/react-layout'

import IndexPage from '@/pages/index.page'
import ErrorPage from '@/pages/error.page'
import { NAV_LINKS } from '@/nav'
import { CONFIG } from '@/config'

function ProjectLayout(): JSX.Element {
  return (
    <>
      <AppLayout navLinks={NAV_LINKS} socialMedia={CONFIG.socialMedia} />
      <ScrollRestoration />
    </>
  )
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProjectLayout />,
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

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes)
