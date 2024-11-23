import { ScrollRestoration } from 'react-router-dom'
import { AppLayout } from '@workspace/react-layout/app.layout'

import { NAV_LINKS } from '@/nav'
import { CONFIG } from '@/config'

/**
 * Root (core) layout component for this project.
 */
export function RootLayout(): JSX.Element {
  return (
    <>
      <AppLayout navLinks={NAV_LINKS} socialMedia={CONFIG.socialMedia} />
      <ScrollRestoration />
    </>
  )
}

export default RootLayout
